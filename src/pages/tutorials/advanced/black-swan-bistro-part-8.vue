<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import '@/assets/styles/tutorials.css';

const tutorialPath = '/tutorials/advanced/black-swan-bistro-part-8';
const resourceBase = '/resources/black-swan-bistro-part-8';

useTutorialHead({
  title: 'Black Swan Bistro - Part 8',
  description:
    'Prioritise Black Swan Bistro audit findings, make deliberate improvements, test before and after, and document the work in an improvement log.',
  path: tutorialPath,
  keywords:
    'Black Swan Bistro improvement log, website prioritisation, before after testing, technical debt, web project improvement',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Black Swan Bistro Part 8', path: tutorialPath },
  ],
});

usePageSections([
  { id: 'intro', title: 'Introduction' },
  { id: 'prioritise', title: 'Prioritise' },
  { id: 'worked-priorities', title: 'Worked Priorities' },
  { id: 'choose-work', title: 'Choose Work' },
  { id: 'improvement-log', title: 'Improvement Log' },
  { id: 'make-changes', title: 'Make Changes' },
  { id: 'worked-change', title: 'Worked Change' },
  { id: 'before-after', title: 'Before and After' },
  { id: 'checkpoint', title: 'Checkpoint' },
  { id: 'guided-practice', title: 'Guided Practice' },
  { id: 'independent-practice', title: 'Improvement Challenge' },
  { id: 'recap', title: 'Recap' },
  { id: 'closure', title: 'Closure' },
]);

const priorityRows = [
  {
    label: 'Do first',
    meaning:
      'High user impact, clear evidence, manageable change, low regression risk.',
    example:
      'A mobile navigation link is hard to reach, or an image fails to load on the live menu page.',
  },
  {
    label: 'Plan carefully',
    meaning:
      'Important, but needs design judgement, client approval, or wider retesting.',
    example:
      'Reworking the menu page hierarchy or replacing several large images at once.',
  },
  {
    label: 'Quick polish',
    meaning:
      'Low risk and easy to fix, but not more important than user-blocking issues.',
    example: 'A small spacing inconsistency or a clearer footer link label.',
  },
  {
    label: 'Monitor or defer',
    meaning:
      'Not enough evidence, low impact, or outside the current project scope.',
    example: 'A cosmetic preference that would trigger a broad redesign.',
  },
];

const guidedPracticeSteps = [
  {
    title: 'Review the candidates from Part 7',
    instructions:
      '<p>Review up to three genuine candidates and copy their evidence into the improvement log. Choose by visitor impact, not by a quota of different issue types. If no change is justified, record that decision and use the separate practice exercise to rehearse a fix.</p>',
    hints: [
      'Check that mobile, keyboard, links, and Console checks have results. A tested site may need no changes; an untested area is still pending.',
      'Do not choose more work than you can test properly.',
    ],
  },
  {
    title: 'Score impact, effort, confidence, and risk',
    instructions:
      '<p>For each finding, score impact, effort, confidence in the evidence, and regression risk. Use the worked scoring anchors to explain what to do now. Keep the scores separate and write a reason for the decision.</p>',
    hints: [
      'High impact plus low effort is usually a good first improvement.',
      'High risk does not mean never. It means plan the change and test more carefully.',
    ],
  },
  {
    title: 'Make one improvement at a time',
    instructions:
      '<p>Change the smallest amount of code that solves the selected finding. Retest the affected page before moving to the next item.</p>',
    hints: [
      'A focused commit is easier to review and roll back than a bundle of unrelated changes.',
      'Avoid redesigning the Bistro unless the audit evidence clearly supports it.',
    ],
  },
  {
    title: 'Record before and after evidence',
    instructions:
      '<p>Add the before evidence, changed files, test steps, after evidence, and remaining risk to the improvement log. The log should explain the decision to someone who did not watch you code.</p>',
    hints: [
      'Retest each changed behaviour with a suitable method. For a link change, repeat the keyboard and mouse path; a screenshot alone does not test the destination.',
      'If something improved but another risk remains, write that down.',
    ],
  },
  {
    title: 'Commit and record release status',
    instructions:
      '<p>Review the diff and the test results, then commit the focused change with a message that names its purpose. Record the commit ID. If you deploy, repeat the relevant checks on the public URL and record the deployed version. Otherwise mark the result locally verified, deployment pending.</p>',
    hints: [
      'Use the worked Git example and stage only files belonging to the improvement.',
      'For the no-change route, draft a commit message for the practice fix and keep it separate from your real audit.',
    ],
  },
];

const checkpointQuestions = [
  {
    question: 'What if your audit finds no change worth making?',
    answer:
      'Record the tested areas, supporting evidence, and coverage limits. Leave the real site unchanged and use the separately labelled practice exercise to rehearse a correction.',
  },
  {
    question: 'Local tests passed, but the deployed footer link still opens Contact. Is the improvement complete?',
    answer:
      'No. Record the failed production check, confirm which version was deployed, and investigate the destination on the public URL. Local success does not verify the deployed behaviour.',
  },
  {
    question:
      'Why should Part 8 start from the Part 7 audit record instead of a fresh list of ideas?',
    answer:
      'The audit record keeps the work evidence-based. It helps you choose improvements that solve observed problems rather than preferences invented after the fact.',
  },
  {
    question:
      'What is the risk of fixing five unrelated findings in one change?',
    answer:
      'It becomes harder to test, review, explain, or undo the work. A regression may be difficult to trace back to one cause.',
  },
  {
    question: 'What should an improvement log prove?',
    answer:
      'It should show what was changed, why it was changed, what evidence existed before, how the change was tested, what evidence exists after, and what remains unresolved.',
  },
];

const closureTakeaways = [
  'Prioritisation connects audit evidence to responsible action.',
  'Impact, effort, confidence, and regression risk are better guides than personal preference.',
  'Small focused changes are easier to test, review, and explain.',
  'Every completed improvement needs comparable before-and-after evidence.',
  'A good improvement log helps future you understand the decision.',
];
</script>

<template>
  <div class="container section">
    <div class="tutorial-content bsb-improvement-lesson">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link to="/">
              <i class="fa-solid fa-house mr-2"></i> Home
            </router-link>
          </li>
          <li><router-link to="/tutorials">Tutorials</router-link></li>
          <li>
            <router-link to="/projects/black-swan-bistro"
              >Black Swan Bistro</router-link
            >
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">Black Swan Bistro - Part 8</a>
          </li>
        </ul>
      </nav>

      <div class="tutorial-meta">
        <div class="tags">
          <span class="tag is-warning">Advanced</span>
          <span class="tag is-light">50-75 min</span>
          <span class="tag is-link">Project</span>
          <span class="tag is-light">Part 8 of 9</span>
        </div>
      </div>

      <h1 id="intro" class="title is-1">Black Swan Bistro - Part 8</h1>
      <h2 class="subtitle is-4">Prioritise and Improve</h2>

      <p class="subtitle is-5">
        Turn your Part 7 audit record into a small, justified improvement pass
        with before-and-after testing.
      </p>

      <AnticipatorySet
        title="Not Every Finding Becomes Today's Work"
        icon="fas fa-list-check"
        :hook="`<p>A useful audit often creates more findings than you can responsibly fix at once. That is normal. Choose a change that helps visitors, then test whether it worked.</p><p>In this lesson, your audit record becomes an improvement plan. You will choose a few findings, make focused changes, retest, and write down what changed.</p>`"
        :reflection-prompts="[
          'Which audit finding would make the biggest difference to a visitor?',
          'Which finding is easy to fix but not very important?',
          'What could break if you change too much at once?',
        ]"
        connection="This lesson depends on the Part 7 audit record. Keep the record open while you work."
      />

      <LearningObjectives
        :objectives="[
          'Prioritise audit findings by impact, effort, confidence, and risk',
          'Choose a small improvement set that can be tested properly',
          'Make focused code changes without redesigning the whole site',
          'Record before-and-after evidence in an improvement log',
          'Use Git commit messages to explain purposeful improvements',
          'Identify remaining risk and future work honestly',
        ]"
        purpose="Prioritisation helps you choose work you can finish and test. Record why each change is worth doing now and what you will leave for later."
        :prerequisites="[
          {
            topic: 'Black Swan Bistro Part 7: Audit the Live Website',
            link: '/tutorials/advanced/black-swan-bistro-part-7',
          },
          {
            topic: 'Refactoring for Reuse',
            link: '/tutorials/intermediate/applied-javascript/refactoring-for-reuse',
          },
          {
            topic: 'Monthly Website Health Check',
            link: '/tutorials/website-care-and-feeding/monthly-website-health-check',
          },
        ]"
      />

      <section id="prioritise">
        <h2 class="title is-3">Prioritise the Audit Findings</h2>
        <p>
          Start with the audit record, not your memory. For each candidate
          finding, ask four questions:
        </p>

        <div class="priority-questions">
          <div class="box">
            <h3 class="title is-5">Impact</h3>
            <p>
              How much does this affect visitors, trust, accessibility, search,
              or maintainability?
            </p>
          </div>
          <div class="box">
            <h3 class="title is-5">Effort</h3>
            <p>Can this be fixed and retested in this improvement pass?</p>
          </div>
          <div class="box">
            <h3 class="title is-5">Confidence</h3>
            <p>
              Is the evidence strong enough, or does the finding need another
              test first?
            </p>
          </div>
          <div class="box">
            <h3 class="title is-5">Risk</h3>
            <p>What might break if you change this, and how will you check?</p>
          </div>
        </div>

        <p>
          Scores can help, but they do not replace judgement. If two findings
          have similar scores, choose the one that has clearer evidence and a
          cleaner test path.
        </p>
      </section>

      <section id="worked-priorities">
        <h2 class="title is-3">Worked example: choose what to do first</h2>
        <p>
          Use these anchors for a 1-5 score. Values 2 and 4 sit between the
          descriptions. These are discussion aids, not measurements to add into
          a total. High effort and risk count against an easy change; high
          impact and confidence support it.
        </p>
        <div class="table-container">
          <table class="table is-bordered">
            <caption>
              Scoring anchors for this improvement pass
            </caption>
            <thead>
              <tr>
                <th scope="col">Criterion</th>
                <th scope="col">1</th>
                <th scope="col">3</th>
                <th scope="col">5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Impact</th>
                <td>Minor cosmetic issue</td>
                <td>A task is harder but has a workaround</td>
                <td>A key task is blocked or users are excluded</td>
              </tr>
              <tr>
                <th scope="row">Effort</th>
                <td>One small edit and a short retest</td>
                <td>Several related edits and checks</td>
                <td>Broad work beyond this session</td>
              </tr>
              <tr>
                <th scope="row">Confidence</th>
                <td>An untested suspicion</td>
                <td>Observed once; more checking needed</td>
                <td>Repeatable result and supporting evidence</td>
              </tr>
              <tr>
                <th scope="row">Regression risk</th>
                <td>Isolated change with a clear test</td>
                <td>Shared code affects several pages</td>
                <td>Wide impact with poorly understood dependencies</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The following findings are hypothetical. F-01 is the footer link
          example from Part 7; F-03 and F-04 are additional practice candidates.
          Keep these examples separate from observations about your own site.
        </p>
        <div class="table-container">
          <table class="table is-bordered">
            <caption>
              Example decisions; scores are impact / effort / confidence / risk
            </caption>
            <thead>
              <tr>
                <th scope="col">Finding</th>
                <th scope="col">Scores</th>
                <th scope="col">Decision and reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">F-01: footer Menu opens Contact</th>
                <td>3 / 1 / 5 / 1</td>
                <td>
                  Do first. Reproduced by keyboard and mouse; one destination
                  change has a clear retest.
                </td>
              </tr>
              <tr>
                <th scope="row">
                  F-03: opening hours repeated across four files
                </th>
                <td>2 / 3 / 5 / 3</td>
                <td>
                  Plan. All copies currently agree; a shared source needs checks
                  on every affected page.
                </td>
              </tr>
              <tr>
                <th scope="row">F-04: footer spacing feels uneven</th>
                <td>1 / 1 / 2 / 2</td>
                <td>
                  Defer. No overlap or blocked task was observed. Check other
                  widths before changing shared CSS.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Choose F-01 for this pass. F-03 can wait while the hours remain
          correct, and F-04 needs a clearer reason to change. A severe issue
          still needs attention when its fix is difficult: investigate or
          escalate it rather than allowing a high effort score to hide the
          problem.
        </p>
      </section>

      <section id="choose-work">
        <h2 class="title is-3">Choose the Improvement Set</h2>
        <div class="table-container">
          <table class="table is-bordered is-striped">
            <thead>
              <tr>
                <th>Decision</th>
                <th>Meaning</th>
                <th>Bistro example</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in priorityRows" :key="row.label">
                <td>
                  <strong>{{ row.label }}</strong>
                </td>
                <td>{{ row.meaning }}</td>
                <td>{{ row.example }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="notification is-warning is-light">
          <p>
            <strong>Scope guard:</strong> choose up to three justified
            improvements for this lesson. One well-tested change is enough.
            Retest every completed improvement. If no change is justified,
            document that decision and complete the separate practice exercise
            below.
          </p>
        </div>
      </section>

      <section id="improvement-log">
        <h2 class="title is-3">Student Resource: Improvement Log</h2>
        <div class="box download-box">
          <div>
            <h3 class="title is-5">Black Swan Bistro improvement log</h3>
            <p>
              Use this Markdown worksheet to prioritise findings, record before
              evidence, track changed files, note tests, and capture the after
              result.
            </p>
          </div>
          <div class="buttons">
            <a
              class="button is-primary"
              :href="`${resourceBase}/black-swan-bistro-improvement-log.md`"
              download
            >
              <span class="icon"><i class="fas fa-file-alt"></i></span>
              <span>Improvement log</span>
            </a>
            <router-link
              class="button is-link is-light"
              to="/tutorials/advanced/black-swan-bistro-part-7"
            >
              <span class="icon"><i class="fas fa-clipboard-list"></i></span>
              <span>Part 7 audit</span>
            </router-link>
          </div>
        </div>

        <h3 class="title is-4">Each log entry should answer</h3>
        <ol class="procedure-list">
          <li>What finding from the audit record is being handled?</li>
          <li>Why is it worth doing now?</li>
          <li>What is the smallest sensible change?</li>
          <li>What files changed?</li>
          <li>How was the before state captured?</li>
          <li>How was the after state tested?</li>
          <li>What remains unresolved?</li>
        </ol>
      </section>

      <section id="make-changes">
        <h2 class="title is-3">Make Focused Changes</h2>
        <p>
          Work in a small loop: choose one finding, make the change, test the
          affected behaviour, update the log, then decide whether to continue.
          This keeps the Bistro maintainable and protects your ability to
          explain the work.
        </p>

        <div class="improvement-loop" aria-label="Improvement loop">
          <div><strong>1. Select</strong><span>One audit finding</span></div>
          <div><strong>2. Change</strong><span>Smallest useful edit</span></div>
          <div><strong>3. Test</strong><span>Targeted retest</span></div>
          <div><strong>4. Record</strong><span>Log and evidence</span></div>
        </div>

        <p>
          A tidy improvement might be an image dimension fix, clearer link text,
          a mobile spacing adjustment, a corrected metadata description, a
          missing alt text decision, or a small refactor that removes duplicated
          restaurant details. A broad restyle is usually too much for this pass.
        </p>
      </section>

      <section id="worked-change">
        <h2 class="title is-3">Worked example: fix and verify F-01</h2>
        <p>
          This continues the hypothetical footer finding. In this example the
          source is a static <code>index.html</code>, and
          <code>menu.html</code> is in the same folder. Find the equivalent
          source in your own project; a Vue project may use
          <code>RouterLink</code> and a route such as <code>/menu</code>.
          Confirm the route before editing.
        </p>
        <h3 class="title is-4">
          Capture the baseline, then change the destination
        </h3>
        <p>
          Keep the Part 7 before evidence. Confirm the intended menu page
          exists, then change only the footer link destination. Leave the
          working header and shared styles alone.
        </p>
        <pre><code>&lt;!-- Before: Menu opens the wrong page --&gt;
&lt;a href="contact.html"&gt;Menu&lt;/a&gt;

&lt;!-- After: use the confirmed menu destination --&gt;
&lt;a href="menu.html"&gt;Menu&lt;/a&gt;</code></pre>
        <h3 class="title is-4">Repeat the visitor task</h3>
        <ol class="procedure-list">
          <li>
            Open the changed site locally. At the same 390 × 844 viewport, Tab
            to the footer Menu link and press Enter. Check the URL and menu
            content, then use Back and repeat with a mouse.
          </li>
          <li>
            Confirm focus is still visible. Repeat the header Menu path from
            F-02, test the footer link at desktop width, and check other footers
            if they share the changed source.
          </li>
          <li>
            Reload the destination and check Console and Network for new errors
            or failed requests. Run the existing build or validation commands
            for your project. A successful build alone does not test the link.
          </li>
          <li>
            Save the after screenshot and test notes with the same browser,
            viewport, and link path as before. Record any different conditions.
          </li>
        </ol>
        <h3 class="title is-4">Completed practice log entry</h3>
        <p>
          These are example results for the scenario, not measurements from the
          live Bistro. Replace them with your own results when doing real work.
        </p>
        <dl>
          <dt>Finding and reason</dt>
          <dd>
            F-01: correct the footer route so a customer can reach the menu.
          </dd>
          <dt>Change and files</dt>
          <dd>
            Change the footer href in <code>index.html</code> from Contact to
            Menu.
          </dd>
          <dt>Before evidence</dt>
          <dd>
            <code>F-01-footer-menu-before.png</code> and the Part 7 keyboard and
            mouse steps show Contact opening.
          </dd>
          <dt>Test steps</dt>
          <dd>
            Repeat the four checks above; record actual desktop dimensions and
            command outcomes.
          </dd>
          <dt>After evidence</dt>
          <dd>
            <code>F-01-footer-menu-after-local.png</code> and notes show Menu
            opening by keyboard and mouse. Header navigation and focus still
            work in the tested paths.
          </dd>
          <dt>Result and limits</dt>
          <dd>
            Locally verified in the example. Deployment pending; mobile device
            testing and other untested paths remain unverified.
          </dd>
          <dt>Commit message</dt>
          <dd><code>Fix home footer Menu link destination</code></dd>
        </dl>
        <h3 class="title is-4">Review and commit the change</h3>
        <p>
          In this static example, review the diff, stage the changed file,
          inspect what is staged, then commit after the relevant checks pass.
          Substitute your actual file path. Keep unrelated work out of the
          commit and record the resulting commit ID in the log.
        </p>
        <pre><code>git diff -- index.html
git add -- index.html
git diff --cached
git commit -m "Fix home footer Menu link destination"
git rev-parse --short HEAD</code></pre>
        <p>
          Follow your Part 6 deployment method when you are ready to publish.
          After deploying, repeat the affected checks on the public URL and
          record the deployed commit, date, and result. Until then, label the
          improvement locally verified, deployment pending. If a check fails,
          record the failure and fix it before claiming the improvement is
          complete.
        </p>
        <h3 class="title is-4">Practice when your audit needs no changes</h3>
        <p>
          Keep the real site unchanged. In a separate practice folder, create
          <code>index.html</code>, <code>menu.html</code>, and
          <code>contact.html</code> as simple valid HTML documents with distinct
          titles and H1 headings. Put the before link in the home-page footer.
          Open the home page locally, reproduce the wrong destination, apply the
          fix, and repeat the keyboard and mouse checks. Commit the exercise in
          its own practice repository, or draft the commit message if you are
          only rehearsing. Label the log Practice only; do not deploy it or
          merge its invented finding into your real audit. This exercise tests a
          link correction, not the hosting behaviour of your deployed site.
        </p>
      </section>

      <section id="before-after">
        <h2 class="title is-3">Before and After Evidence</h2>
        <p>
          Evidence is how you know the improvement worked. The exact evidence
          depends on the finding:
        </p>

        <div class="table-container">
          <table class="table is-bordered">
            <thead>
              <tr>
                <th>Finding type</th>
                <th>Before evidence</th>
                <th>After evidence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mobile layout</td>
                <td>Viewport width and screenshot showing the issue.</td>
                <td>Same viewport width and screenshot after the fix.</td>
              </tr>
              <tr>
                <td>Keyboard or accessibility</td>
                <td>
                  Tab order note, focus screenshot, inspector note, or screen
                  reader observation.
                </td>
                <td>
                  Repeated keyboard path or accessibility check with the result
                  recorded.
                </td>
              </tr>
              <tr>
                <td>Performance</td>
                <td>Network file size, image dimensions, or measured issue.</td>
                <td>
                  Reduced file size, correct dimensions, or repeated
                  measurement.
                </td>
              </tr>
              <tr>
                <td>Content or SEO</td>
                <td>Current title, heading, page copy, link, or metadata.</td>
                <td>
                  Updated rendered page and source or metadata check where
                  relevant.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Do not invent performance gains. If you did not run Lighthouse or a
          production network test, say exactly what you did test.
        </p>
      </section>

      <section id="checkpoint">
        <CheckpointBox
          title="Check Your Improvement Plan"
          description="Before editing, make sure the plan is small enough to test."
          :questions="checkpointQuestions"
        />
      </section>

      <section id="guided-practice">
        <GuidedPractice
          title="Guided Practice: Plan and Complete One Improvement"
          description="Use the improvement log to move from evidence to a focused change."
          :steps="guidedPracticeSteps"
          :success-criteria="[
            'Each real improvement links to a Part 7 finding; practice findings stay separately labelled',
            'The chosen work is small enough to test properly',
            'Changed files are recorded',
            'Before-and-after evidence uses comparable conditions',
            'Remaining risks or deferred findings are written down',
          ]"
        />
      </section>

      <section id="independent-practice">
        <IndependentPractice
          title="Independent Challenge: Complete the Improvement Pass"
          task-title="Your task"
          :task="`<p>Complete a focused improvement pass for the live Black Swan Bistro site. Use your audit record to choose up to three justified improvements, make the changes, retest each one, and finish the improvement log. If none is justified, document the evidence and untested areas, then complete the separate practice exercise.</p>`"
          :requirements="[
            'Review the available audit candidates before editing and explain your decisions',
            'Complete up to three justified improvements, or document no change needed and complete the labelled practice exercise',
            'Record before evidence and after evidence for each completed improvement',
            'Run the relevant local checks for every change; after deployment, repeat the affected checks on the public URL',
            'Commit each completed real improvement with a clear message and record its ID; for practice-only work, a drafted message is sufficient',
            'Record release status as locally verified, deployment pending, or verified on the deployed version',
            'Write a short summary of what remains deferred and why',
          ]"
          :stretch-goals="[
            'Ask another learner to review the improvement log before deployment',
            'Have another learner reproduce a completed test from your notes',
          ]"
          :rubric="[
            {
              criteria: 'Prioritisation',
              success:
                'The chosen improvements are justified by audit evidence and visitor impact.',
            },
            {
              criteria: 'Implementation',
              success:
                'Changes are focused, readable, and do not introduce unrelated redesign work.',
            },
            {
              criteria: 'Verification',
              success:
                'Before-and-after evidence shows what was tested and what changed.',
            },
          ]"
        />
      </section>

      <section id="recap">
        <h2 class="title is-3">Recap</h2>
        <p>
          You have moved from audit evidence to deliberate improvement. Choose a
          finding, make a focused change, and repeat the relevant tests. Record
          the result and any remaining uncertainty. If no change was needed,
          keep that decision alongside your separate practice log.
        </p>
      </section>

      <section id="closure">
        <ClosureSection
          title="Lesson Complete: Improve With Evidence"
          :key-takeaways="closureTakeaways"
          :objectives="[
            'Prioritise audit findings by impact, effort, confidence, and risk',
            'Choose a small improvement set that can be tested properly',
            'Make focused code changes without redesigning the whole site',
            'Record before-and-after evidence in an improvement log',
            'Use Git commit messages to explain purposeful improvements',
            'Identify remaining risk and future work honestly',
          ]"
          :reflection-prompts="[
            {
              icon: 'fas fa-chart-line',
              title: 'Impact',
              questions: [
                'Which improvement had the clearest visitor benefit?',
                'Which finding did you defer, and was that the responsible choice?',
              ],
            },
            {
              icon: 'fas fa-vial',
              title: 'Testing',
              questions: [
                'Was your after evidence directly comparable to your before evidence?',
                'What would you test again after deployment?',
              ],
            },
          ]"
          next-steps="<p>Part 9 is planned to cover a client change request and is currently under construction. Keep your audit record, improvement log, commit IDs, and release status ready for that lesson. For now, revisit any deferred findings that need more evidence.</p>"
        />
      </section>

      <TutorialRecommendations :current-path="tutorialPath" />
    </div>
  </div>
</template>

<style scoped>
.priority-questions,
.improvement-loop {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  margin: 1.5rem 0;
}

.download-box {
  align-items: center;
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
}

.improvement-loop div {
  background: #f8fafc;
  border: 1px solid #dbeafe;
  border-radius: 8px;
  padding: 1rem;
}

.improvement-loop strong,
.improvement-loop span {
  display: block;
}

.improvement-loop span {
  margin-top: 0.35rem;
}

@media (max-width: 768px) {
  .download-box {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
