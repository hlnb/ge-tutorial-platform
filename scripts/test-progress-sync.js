import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import vm from 'node:vm';

const source = await readFile(new URL('../src/services/ProgressService.js', import.meta.url), 'utf8');

async function setup({ readFails = false, writeFails = false, remote = null, local = null } = {}) {
  let stored = local && JSON.stringify(local);
  let writes = 0;
  let written;
  let removals = 0;
  const context = vm.createContext({
    window: { localStorage: {
      getItem: () => stored,
      removeItem: () => { removals++; stored = null; },
    } },
    console: { error() {} },
  });
  const module = new vm.SourceTextModule(source, { context });
  await module.link((name) => {
    let values;
    if (name === './firebase') values = { auth: { currentUser: { uid: 'user' } }, db: {} };
    else if (name === 'firebase/auth') values = {};
    else if (name === 'firebase/firestore') values = {
      doc: () => ({}),
      getDoc: async () => {
        if (readFails) throw new Error('read failed');
        return { exists: () => remote !== null, data: () => remote };
      },
      setDoc: async (_ref, data) => {
        writes++;
        if (writeFails) throw new Error('write failed');
        written = JSON.parse(JSON.stringify(data));
      },
    };
    else throw new Error(`Unexpected import: ${name}`);
    return new vm.SyntheticModule(Object.keys(values), function () {
      for (const [key, value] of Object.entries(values)) this.setExport(key, value);
    }, { context });
  });
  await module.evaluate();
  return { sync: module.namespace.syncProgressOnLogin, result: () => ({ stored, writes, written, removals }) };
}

const local = { completedTutorials: ['local'], tutorialProgress: {}, inProgressTutorials: {}, completedQuizzes: [], quizResults: {} };
const remote = { completedTutorials: ['remote'], tutorialProgress: {}, completedQuizzes: [], quizResults: {} };

await test('a failed remote read does not write or remove local progress', async () => {
  const subject = await setup({ local, remote, readFails: true });
  await subject.sync();
  assert.deepEqual(subject.result(), { stored: JSON.stringify(local), writes: 0, written: undefined, removals: 0 });
});

await test('a successful read merges progress before removing the local copy', async () => {
  const subject = await setup({ local, remote });
  await subject.sync();
  const result = subject.result();
  assert.deepEqual(result.written.completedTutorials, ['local', 'remote']);
  assert.equal(result.writes, 1);
  assert.equal(result.removals, 1);
  assert.equal(result.stored, null);
});

await test('a failed write keeps local progress', async () => {
  const subject = await setup({ local, remote, writeFails: true });
  await subject.sync();
  assert.equal(subject.result().stored, JSON.stringify(local));
  assert.equal(subject.result().removals, 0);
});
