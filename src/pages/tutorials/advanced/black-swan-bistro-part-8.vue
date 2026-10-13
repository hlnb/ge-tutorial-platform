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
  { id: 'choose-work', title: 'Choose Work' },
  { id: 'improvement-log', title: 'Improvement Log' },
  { id: 'make-changes', title: 'Make Changes' },
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
    meaning: 'High user impact, clear evidence, manageable change, low regression risk.',
    example:
      'A mobile navigation link is hard to reach, or an image fails to load on the live menu page.',
  },
  {
    label: 'Plan carefully',
    meaning: 'Important, but needs design judgement, client approval, or wider retesting.',
    example:
      'Reworking the menu page hierarchy or replacing several large images at once.',
  },
  {
    label: 'Quick polish',
    meaning: 'Low risk and easy to fix, but not more important than user-blocking issues.',
    example:
      'A small spacing inconsistency or a clearer footer link label.',
  },
  {
    label: 'Monitor or defer',
    meaning: 'Not enough evidence, low impact, or outside the current project scope.',
    example:
      'A cosmetic preference that would trigger a broad redesign.',
  },
];

const guidedPracticeSteps = [
  {
    title: 'Select three findings from Part 7',
    instructions:
      '<p>Choose one finding that affects visitors, one finding that affects site quality or maintainability, and one smaller polish item. Copy their evidence into the improvement log.</p>',
    hints: [
      'If all your findings are cosmetic, return to the audit record and retest mobile, keyboard, links, and Console output.',
      'Do not choose more work than you can test properly.',
    ],
  },
  {
    title: 'Score impact, effort, confidence, and risk',
    instructions:
      '<p>For each finding, score impact, effort, confidence in the evidence, and regression risk. Use the score to decide what to do now, not to pretend the decision is mathematical.</p>',
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
      'If the after test is only visual, say that. If you also tested keyboard, mobile, Network, or Lighthouse, record those checks.',
      'If something improved but another risk remains, write that down.',
    ],
  },
];

const checkpointQuestions = [
  {
    question:
      'Why should Part 8 start from the Part 7 audit record instead of a fresh list of ideas?',
    answer:
      'The audit record keeps the work evidence-based. It helps you choose improvements that solve observed problems rather than preferences invented after the fact.',
  },
  {
    question: 'What is the risk of fixing five unrelated findings in one change?',
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
  'Before-and-after evidence is part of the work, not an optional extra.',
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
        :hook="`<p>A useful audit often creates more findings than you can responsibly fix at once. That is normal. Professional improvement is not about touching everything; it is about choosing the next valuable change and proving it helped.</p><p>In this lesson, your audit record becomes an improvement plan. You will choose a few findings, make focused changes, retest, and write down what changed.</p>`"
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
        purpose="Prioritisation turns a list of findings into maintainable work. The aim is not to do everything; it is to improve the Bistro in a way that is useful, testable, and easy to explain."
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
            <p>Is the evidence strong enough, or does the finding need another test first?</p>
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
            <strong>Scope guard:</strong> for this lesson, choose two or three
            improvements. At least one should improve a real visitor outcome.
            At least one should include a clear retest.
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
                <td>Tab order note, focus screenshot, inspector note, or screen reader observation.</td>
                <td>Repeated keyboard path or accessibility check with the result recorded.</td>
              </tr>
              <tr>
                <td>Performance</td>
                <td>Network file size, image dimensions, or measured issue.</td>
                <td>Reduced file size, correct dimensions, or repeated measurement.</td>
              </tr>
              <tr>
                <td>Content or SEO</td>
                <td>Current title, heading, page copy, link, or metadata.</td>
                <td>Updated rendered page and source or metadata check where relevant.</td>
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
            'Each selected improvement links back to a Part 7 finding',
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
          :task="`<p>Complete a focused improvement pass for the live Black Swan Bistro site. Use your audit record, choose two or three improvements, make the changes, retest, and finish the improvement log.</p>`"
          :requirements="[
            'Prioritise at least three audit findings before editing',
            'Complete two or three focused improvements',
            'Record before evidence and after evidence for each completed improvement',
            'Run the relevant local checks for the changed files',
            'Write a short summary of what remains deferred and why',
          ]"
          :stretch-goals="[
            'Create one Git commit per improvement type with clear messages',
            'Ask another learner to review the improvement log before deployment',
            'Retest the deployed site after publishing the improvements',
          ]"
          :rubric="[
            {
              criteria: 'Prioritisation',
              success: 'The chosen improvements are justified by audit evidence and visitor impact.',
            },
            {
              criteria: 'Implementation',
              success: 'Changes are focused, readable, and do not introduce unrelated redesign work.',
            },
            {
              criteria: 'Verification',
              success: 'Before-and-after evidence shows what was tested and what changed.',
            },
          ]"
        />
      </section>

      <section id="recap">
        <h2 class="title is-3">Recap</h2>
        <p>
          You have moved from audit evidence to deliberate improvement. The
          important habit is the loop: choose with evidence, change with scope,
          test with comparable conditions, and record what remains.
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
          next-steps="<p>Continue to Part 9, where the Bistro receives a realistic client change request. You will update the live project without drifting into unnecessary redesign.</p>"
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
