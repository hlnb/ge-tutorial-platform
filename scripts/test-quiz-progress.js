import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import vm from 'node:vm';
import { createServer } from 'vite';
import { parse, compileScript } from '@vue/compiler-sfc';
import { ref, computed } from 'vue';

const server = await createServer({
  configFile: false,
  optimizeDeps: { noDiscovery: true, include: [] },
  resolve: { alias: { '@': fileURLToPath(new URL('../src', import.meta.url)) } },
  server: { middlewareMode: true, watch: null },
});
const serviceSource = await readFile(new URL('../src/services/ProgressService.js', import.meta.url), 'utf8');
const componentSource = await readFile(new URL('../src/components/QuizComponent.vue', import.meta.url), 'utf8');
const compiled = compileScript(parse(componentSource).descriptor, {
  id: 'quiz-progress-test', genDefaultAs: 'QuizComponent',
}).content;

function synthetic(context, exports) {
  return new vm.SyntheticModule(Object.keys(exports), function () {
    for (const [key, value] of Object.entries(exports)) this.setExport(key, value);
  }, { context });
}

async function createProgress({ signedIn = false, readFails = false, writeFails = false, initial = null } = {}) {
  let stored = initial ? JSON.stringify(initial) : null;
  let remote = initial ? globalThis.structuredClone(initial) : null;
  let writes = 0;
  const context = vm.createContext({
    window: { localStorage: {
      getItem: () => { if (readFails) throw new Error('read failed'); return stored; },
      setItem: (_key, value) => { if (writeFails) throw new Error('write failed'); writes++; stored = value; },
    } },
    console: { error() {} },
  });
  const module = new vm.SourceTextModule(serviceSource, { context });
  await module.link((specifier) => {
    if (specifier === './firebase') return synthetic(context, {
      auth: signedIn ? { currentUser: { uid: 'test-user' } } : null,
      db: signedIn ? {} : null,
    });
    if (specifier === 'firebase/auth') return synthetic(context, {});
    if (specifier === 'firebase/firestore') return synthetic(context, {
      doc: (_db, collection, id) => { assert.equal(collection, 'progress'); assert.equal(id, 'test-user'); return {}; },
      getDoc: async () => {
        if (readFails) throw new Error('read failed');
        return { exists: () => remote !== null, data: () => globalThis.structuredClone(remote) };
      },
      setDoc: async (_ref, value) => {
        if (writeFails) throw new Error('write failed');
        writes++; remote = JSON.parse(JSON.stringify(value));
      },
    });
    throw new Error(`Unexpected service import: ${specifier}`);
  });
  await module.evaluate();
  return {
    service: module.namespace.default,
    saved: () => signedIn ? remote : stored ? JSON.parse(stored) : null,
    writes: () => writes,
  };
}

async function createQuiz(service, questions = Array.from({ length: 5 }, () => ({ correctAnswer: 0 }))) {
  const emissions = [];
  const props = { tutorialPath: '/tutorials/intermediate/git-basics/basic-commands', questions };
  const context = vm.createContext({});
  const module = new vm.SourceTextModule(`${compiled}\nexport default QuizComponent;`, { context });
  await module.link((specifier) => {
    if (specifier === 'vue') return synthetic(context, { ref, computed, onMounted() {}, watch() {} });
    if (specifier === 'vue-router') return synthetic(context, { useRoute: () => ({ path: props.tutorialPath }) });
    if (specifier === '@/services/ProgressService') return synthetic(context, { default: service });
    if (specifier === '@/utils/quizUtils') return synthetic(context, {
      getQuizQuestionsForPath: () => questions, getTutorialTitle: () => 'Basic Commands',
    });
    throw new Error(`Unexpected component import: ${specifier}`);
  });
  await module.evaluate();
  const quiz = module.namespace.default.setup(props, {
    expose() {}, emit: (...args) => emissions.push(args),
  });
  return { quiz, emissions, props };
}

try {
  const utils = await server.ssrLoadModule('/src/utils/quizUtils.js');
  const { gitBasicsQuizzes } = await server.ssrLoadModule('/src/data/quizzes/git-basics.js');

  await test('all Git quizzes load from canonical and legacy routes, including URL suffixes', () => {
    for (const [lesson, questions] of Object.entries(gitBasicsQuizzes)) {
      for (const level of ['', 'beginner/', 'intermediate/', 'advanced/']) {
        for (const suffix of ['', '/', '?review=1', '#quiz', '/?review=1#quiz']) {
          const path = `/tutorials/${level}git-basics/${lesson}${suffix}`;
          assert.equal(utils.getQuizQuestionsForPath(path).length, questions.length, path);
          assert.equal(utils.hasQuiz(path), questions.length > 0, path);
        }
      }
    }
  });

  await test('existing beginner collections and legacy question text remain supported', async () => {
    for (const [section, exportName] of [
      ['html-basics', 'htmlBasicsQuizzes'], ['css-basics', 'cssBasicsQuizzes'],
      ['javascript-basics', 'default'], ['dom-basics', 'domBasicsQuizzes'],
    ]) {
      const module = await server.ssrLoadModule(`/src/data/quizzes/${section}.js`);
      for (const [lesson, entry] of Object.entries(module[exportName])) {
        const expected = Array.isArray(entry) ? entry : entry.questions;
        const questions = utils.getQuizQuestionsForPath(`/tutorials/beginner/${section}/${lesson}`);
        assert.equal(questions.length, expected.length, `${section}/${lesson}`);
        assert.ok(questions.every((question) => typeof question.question === 'string'));
      }
    }
  });

  await test('unknown, incomplete, unrelated, and non-string paths never borrow another quiz', () => {
    for (const path of [null, undefined, 5, {}, '', '/', '/tutorials', '/tutorials/intermediate',
      '/tutorials/intermediate/git-basics', '/tutorials/intermediate/git-basics/missing',
      '/tutorials/unknown/introduction', '/projects/git-basics/introduction',
      '/tutorials/git-basics/introduction/extra', '/tutorials/git-basics/__proto__']) {
      assert.deepEqual(utils.getQuizQuestionsForPath(path), [], String(path));
      assert.equal(utils.hasQuiz(path), false, String(path));
    }
  });

  for (const signedIn of [false, true]) {
    await test(`${signedIn ? 'Firestore' : 'guest'} results retain numeric scores, zero, attempts, and unrelated progress`, async () => {
      const initial = { completedTutorials: ['keep-me'], quizResults: {}, completedQuizzes: [] };
      const state = await createProgress({ signedIn, initial });
      const id = '/tutorials/intermediate/git-basics/basic-commands';
      let everPassed = false;
      for (const score of [0, 3, 4, 5, 4, 0]) {
        everPassed ||= score >= 4;
        assert.equal(await state.service.saveQuizResult(id, { score, total: 5, passed: score >= 4 }), true);
        const saved = state.saved();
        assert.deepEqual(saved.completedTutorials, ['keep-me']);
        assert.equal(saved.quizResults[id].score, score);
        assert.equal(saved.quizResults[id].total, 5);
        assert.equal(saved.quizResults[id].maxScore, 5);
        assert.equal(saved.quizResults[id].percentage, score * 20);
        assert.equal(saved.quizResults[id].passed, score >= 4);
        assert.ok(Number.isFinite(Date.parse(saved.quizResults[id].completedAt)));
        assert.equal(saved.completedQuizzes.filter((key) => key === id).length, everPassed ? 1 : 0);
      }
    });

    for (const failure of ['readFails', 'writeFails']) {
      await test(`${signedIn ? 'Firestore' : 'guest'} ${failure} returns false without overwriting existing progress`, async () => {
        const initial = { completedTutorials: ['keep-me'], quizResults: {}, completedQuizzes: [] };
        const state = await createProgress({ signedIn, [failure]: true, initial });
        assert.equal(await state.service.saveQuizResult('quiz', { score: 1, total: 1, passed: true }), false);
        assert.deepEqual(state.saved(), initial);
        assert.equal(state.writes(), 0);
      });
    }
  }

  await test('invalid result payloads cannot write storage', async () => {
    const state = await createProgress();
    for (const result of [null, '1', {}, { score: '1', total: 1, passed: true },
      { score: -1, total: 1, passed: false }, { score: 2, total: 1, passed: true },
      { score: 0.5, total: 1, passed: false }, { score: NaN, total: 1, passed: false },
      { score: 0, total: 0, passed: false }, { score: 1, total: 1 },
      { score: 0, total: 1, passed: true }, { score: 1, total: 1, passed: false }]) {
      assert.equal(await state.service.saveQuizResult('quiz', result), false);
    }
    assert.equal(await state.service.saveQuizResult('', { score: 1, total: 1, passed: true }), false);
    assert.equal(state.writes(), 0);
  });

  await test('every score from zero through full marks produces a consistent completion payload', async () => {
    for (let score = 0; score <= 100; score++) {
      let received;
      const { quiz, emissions } = await createQuiz({
        isProgressTrackingEnabled: () => true,
        saveQuizResult: async (_path, result) => { received = result; return true; },
      }, Array.from({ length: 100 }, () => ({ correctAnswer: 0 })));
      quiz.score.value = score;
      await quiz.finishQuiz();
      assert.equal(received.score, score);
      assert.equal(received.total, 100);
      assert.equal(received.maxScore, 100);
      assert.equal(received.percentage, score);
      assert.equal(received.passed, score >= 80);
      assert.equal(quiz.quizCompleted.value, true);
      assert.equal(emissions.filter(([name]) => name === 'quiz-completed').length, 1);
    }
  });

  await test('finishing persists the actual component payload and restores a zero result after reload', async () => {
    const state = await createProgress();
    const { quiz } = await createQuiz(state.service);
    quiz.startQuiz();
    for (let i = 0; i < 5; i++) quiz.selectAnswer(i, 1);
    quiz.submitQuiz();
    await quiz.finishQuiz();
    const reload = await createQuiz(state.service);
    await reload.quiz.checkQuizStatus();
    assert.equal(reload.quiz.quizCompleted.value, true);
    assert.equal(reload.quiz.score.value, 0);
    assert.equal(state.saved().quizResults['/tutorials/intermediate/git-basics/basic-commands'].score, 0);
  });

  await test('a failed save keeps answers available and permits a successful retry', async () => {
    let succeed = false;
    const { quiz, emissions } = await createQuiz({
      isProgressTrackingEnabled: () => true,
      saveQuizResult: async () => succeed,
    });
    quiz.showResults.value = true;
    await quiz.finishQuiz();
    assert.equal(quiz.quizCompleted.value, false);
    assert.equal(quiz.showResults.value, true);
    assert.match(quiz.saveError.value, /could not be saved/);
    assert.equal(quiz.isSaving.value, false);
    assert.equal(emissions.length, 0);
    succeed = true;
    await quiz.finishQuiz();
    assert.equal(quiz.quizCompleted.value, true);
    assert.equal(quiz.saveError.value, '');
  });

  await test('double activation waits for one write and completion event', async () => {
    let resolveSave;
    let calls = 0;
    const { quiz, emissions } = await createQuiz({
      isProgressTrackingEnabled: () => true,
      saveQuizResult: () => { calls++; return new Promise((resolve) => { resolveSave = resolve; }); },
    });
    const first = quiz.finishQuiz();
    assert.equal(quiz.isSaving.value, true);
    await quiz.finishQuiz();
    assert.equal(calls, 1);
    resolveSave(true);
    await first;
    assert.equal(emissions.length, 1);
  });
  await test('a thrown save error leaves a retryable error rather than reporting completion', async () => {
    const { quiz, emissions } = await createQuiz({
      isProgressTrackingEnabled: () => true,
      saveQuizResult: async () => { throw new Error('offline'); },
    });
    await quiz.finishQuiz();
    assert.equal(quiz.quizCompleted.value, false);
    assert.equal(quiz.isSaving.value, false);
    assert.match(quiz.saveError.value, /could not be saved/);
    assert.equal(emissions.length, 0);
  });

  await test('a delayed save cannot mark a different lesson completed after navigation', async () => {
    let resolveSave;
    const { quiz, props, emissions } = await createQuiz({
      isProgressTrackingEnabled: () => true,
      saveQuizResult: () => new Promise((resolve) => { resolveSave = resolve; }),
    });
    const pending = quiz.finishQuiz();
    props.tutorialPath = '/tutorials/intermediate/git-basics/branching';
    quiz.resetQuiz();
    resolveSave(true);
    await pending;
    assert.equal(quiz.quizCompleted.value, false);
    assert.equal(emissions.filter(([name]) => name === 'quiz-completed').length, 0);
  });

  await test('tracking disabled completes the attempt without writing storage', async () => {
    const { quiz } = await createQuiz({
      isProgressTrackingEnabled: () => false,
      saveQuizResult: () => { assert.fail('tracking disabled must not write'); },
    });
    await quiz.finishQuiz();
    assert.equal(quiz.quizCompleted.value, true);
  });
} finally {
  await server.close();
}
