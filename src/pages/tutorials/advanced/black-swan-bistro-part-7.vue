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

const tutorialPath = '/tutorials/advanced/black-swan-bistro-part-7';
const resourceBase = '/resources/black-swan-bistro-part-7';

useTutorialHead({
  title: 'Black Swan Bistro - Part 7',
  description:
    'Audit the deployed Black Swan Bistro website with structured accessibility, responsive, performance, SEO, content, link, console, and maintainability evidence.',
  path: tutorialPath,
  keywords:
    'Black Swan Bistro audit, website audit record, accessibility audit, responsive testing, live website testing, beginner web project',
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Black Swan Bistro Part 7', path: tutorialPath },
  ],
});

usePageSections([
  { id: 'intro', title: 'Introduction' },
  { id: 'audit-mindset', title: 'Audit Mindset' },
  { id: 'audit-record', title: 'Audit Record' },
  { id: 'evidence-areas', title: 'Evidence Areas' },
  { id: 'severity', title: 'Severity' },
  { id: 'checkpoint', title: 'Checkpoint' },
  { id: 'guided-practice', title: 'Guided Practice' },
  { id: 'independent-practice', title: 'Audit Challenge' },
  { id: 'recap', title: 'Recap' },
  { id: 'closure', title: 'Closure' },
]);

const guidedPracticeSteps = [
  {
    title: 'Set up the audit record',
    instructions:
      '<p>Download the audit record template, add the deployed Bistro URL, and note the date, browser, viewport sizes, and tester name. Start with facts, not judgements.</p>',
    hints: [
      'Use the live deployed URL from Part 6, not localhost.',
      'If you do not have a deployed URL yet, use this lesson as a rehearsal and mark the URL field as pending.',
    ],
  },
  {
    title: 'Complete a first visitor pass',
    instructions:
      '<p>Open the site like a visitor: home page, menu, about page, contact page, header links, footer links, and any booking or contact calls to action. Record only observable findings.</p>',
    hints: [
      'A finding can be positive. Audits should record what works as well as what needs attention.',
      'If a detail depends on the fictional client brief, reference the brief instead of guessing.',
    ],
  },
  {
    title: 'Test three viewport sizes',
    instructions:
      '<p>Check mobile, tablet, and desktop widths. Watch for horizontal scrolling, cramped text, cropped images, hidden navigation, buttons that are hard to tap, or layout shifts while assets load.</p>',
    hints: [
      'Use your browser responsive tools, then confirm at least one real narrow browser window if possible.',
      'Do not rewrite the CSS during this pass. Capture the evidence and keep moving.',
    ],
  },
  {
    title: 'Inspect technical evidence',
    instructions:
      '<p>Use DevTools for Console and Network checks. Record missing files, JavaScript errors, failed image requests, large assets, missing metadata, or anything that changes how the live site behaves.</p>',
    hints: [
      'A clean Console is useful evidence. Record it.',
      'If you run Lighthouse, treat it as one signal, not the whole audit.',
    ],
  },
];

const auditAreas = [
  {
    area: 'Accessibility',
    checks:
      'Headings, landmarks, alt text, keyboard focus, link purpose, contrast, form labels, reduced-motion assumptions.',
    evidence: 'Keyboard notes, screenshots, accessibility tree or inspector notes.',
  },
  {
    area: 'Responsive behaviour',
    checks:
      'Mobile, tablet, desktop, zoom, touch target spacing, line length, image cropping, navigation layout.',
    evidence: 'Viewport width, screenshot, page section, exact behaviour.',
  },
  {
    area: 'Performance',
    checks:
      'Large images, render-blocking assets, unnecessary JavaScript, layout shift, slow first view, caching clues.',
    evidence: 'Network panel notes, file sizes, Lighthouse or PageSpeed notes if used.',
  },
  {
    area: 'SEO and content',
    checks:
      'Title, description, one clear H1, useful headings, internal links, image alt text, restaurant details, page intent.',
    evidence: 'Rendered page notes, page source where useful, metadata screenshots.',
  },
  {
    area: 'Links and forms',
    checks:
      'Navigation, footer links, menu links, contact links, external links, form behaviour, missing destinations.',
    evidence: 'Clicked path, expected result, actual result.',
  },
  {
    area: 'Maintainability',
    checks:
      'Repeated content, unclear file names, fragile CSS, hard-coded values, comments that no longer match the site.',
    evidence: 'File path, selector, duplicated text, reason it may slow future changes.',
  },
];

const checkpointQuestions = [
  {
    question:
      'Why should you audit the deployed Bistro before changing the code?',
    answer:
      'The live site may have hosting, path, asset, routing, metadata, or device behaviour that did not appear locally. Auditing first protects evidence and prevents random changes.',
  },
  {
    question: 'What makes a finding useful rather than vague?',
    answer:
      'A useful finding names the page or component, describes the observed behaviour, explains the impact, includes evidence, and suggests a next action without overclaiming.',
  },
  {
    question: 'Why should positive evidence be recorded too?',
    answer:
      'Positive evidence shows what should be preserved. It also prevents the audit from becoming a defect hunt that ignores working accessibility, content, or deployment decisions.',
  },
];

const closureTakeaways = [
  'A live-site audit records evidence before code changes begin.',
  'Good findings are specific, observable, and tied to user impact.',
  'Accessibility, responsive behaviour, performance, SEO, links, console output, content, and maintainability all belong in the audit.',
  'Severity is about risk and impact, not personal annoyance.',
  'Part 8 will turn the audit record into a small, justified improvement plan.',
];
</script>

<template>
  <div class="container section">
    <div class="tutorial-content bsb-audit-lesson">
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
            <a href="#" aria-current="page">Black Swan Bistro - Part 7</a>
          </li>
        </ul>
      </nav>

      <div class="tutorial-meta">
        <div class="tags">
          <span class="tag is-warning">Advanced</span>
          <span class="tag is-light">40-60 min</span>
          <span class="tag is-link">Project</span>
          <span class="tag is-light">Part 7 of 9</span>
        </div>
      </div>

      <h1 id="intro" class="title is-1">Black Swan Bistro - Part 7</h1>
      <h2 class="subtitle is-4">Audit the Live Website</h2>

      <p class="subtitle is-5">
        Inspect the deployed Bistro before changing code, then record evidence
        that can guide calm, professional improvements.
      </p>

      <AnticipatorySet
        title="Pause Before You Fix"
        icon="fas fa-search"
        :hook="`<p>The Bistro is live. That is exciting, but it also changes the job. You are no longer only building pages; you are caring for a public website.</p><p>A professional first step is not to start changing colours, moving sections, or chasing every warning. It is to audit the live site, record evidence, and decide what deserves attention.</p>`"
        :reflection-prompts="[
          'What could be different on the live URL compared with your local files?',
          'Which problems would matter most to a restaurant customer trying to read the menu or make contact?',
          'What evidence would help you explain an improvement to a client?',
        ]"
        connection="This lesson follows Part 6's deployment work. You will use the public Bistro URL as the source of truth and prepare evidence for Part 8."
      />

      <LearningObjectives
        :objectives="[
          'Explain the purpose of a live-site audit before improvement work begins',
          'Use an audit record to capture repeatable evidence',
          'Check accessibility, responsive behaviour, performance, SEO, content, links, console output, and maintainability',
          'Classify findings by impact and urgency',
          'Separate observations, likely causes, and proposed fixes',
          'Prepare a shortlist of findings for Part 8',
        ]"
        purpose="An audit is a thinking tool. It slows the work down just enough to protect users, avoid unnecessary changes, and make improvement decisions easier to defend."
        :prerequisites="[
          {
            topic: 'Black Swan Bistro Part 6: Deploy the Site',
            link: '/tutorials/advanced/black-swan-bistro-part-6',
          },
          {
            topic: 'Test and Validate Your Site',
            link: '/tutorials/intermediate/test-and-validate-your-site',
          },
          {
            topic: 'Testing Accessibility as You Build',
            link: '/tutorials/accessibility-essentials/testing-accessibility-as-you-build',
          },
        ]"
      />

      <section id="audit-mindset">
        <h2 class="title is-3">The Audit Mindset</h2>
        <p>
          An audit is not a redesign session. It is a structured look at how
          the current site behaves for real visitors, search engines, browsers,
          and future maintainers. The main question is:
          <strong>what can we prove from the live site?</strong>
        </p>

        <div class="audit-principles">
          <div class="box">
            <h3 class="title is-5">Observe first</h3>
            <p>
              Record what happened before deciding why it happened. "Menu image
              is missing on mobile at 390px" is stronger than "the CSS is bad".
            </p>
          </div>
          <div class="box">
            <h3 class="title is-5">Protect what works</h3>
            <p>
              Positive findings matter. If the keyboard order works, headings
              are clear, or images are well compressed, record that so later
              changes do not damage it.
            </p>
          </div>
          <div class="box">
            <h3 class="title is-5">Connect to users</h3>
            <p>
              Prioritise findings that affect a customer trying to read the
              menu, understand the venue, contact the restaurant, or use the
              site on a phone.
            </p>
          </div>
        </div>
      </section>

      <section id="audit-record">
        <h2 class="title is-3">Student Resource: Audit Record</h2>
        <div class="box download-box">
          <div>
            <h3 class="title is-5">Black Swan Bistro live-site audit record</h3>
            <p>
              Use this Markdown worksheet while testing the live Bistro URL. It
              includes the audit checklist, findings table, severity guide, and
              evidence notes.
            </p>
          </div>
          <div class="buttons">
            <a
              class="button is-primary"
              :href="`${resourceBase}/black-swan-bistro-live-site-audit-record.md`"
              download
            >
              <span class="icon"><i class="fas fa-file-alt"></i></span>
              <span>Audit record</span>
            </a>
            <a
              class="button is-link is-light"
              href="/projects/black-swan-bistro"
            >
              <span class="icon"><i class="fas fa-utensils"></i></span>
              <span>Bistro project hub</span>
            </a>
          </div>
        </div>

        <h3 class="title is-4">A finding should contain five parts</h3>
        <div class="table-container">
          <table class="table is-bordered is-striped">
            <thead>
              <tr>
                <th>Part</th>
                <th>What to record</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Location</strong></td>
                <td>Page, section, component, link, selector, or file path.</td>
              </tr>
              <tr>
                <td><strong>Observation</strong></td>
                <td>What you saw, heard, clicked, tested, or measured.</td>
              </tr>
              <tr>
                <td><strong>Impact</strong></td>
                <td>Who is affected and why it matters.</td>
              </tr>
              <tr>
                <td><strong>Evidence</strong></td>
                <td>Screenshot name, viewport, tool note, console message, or URL.</td>
              </tr>
              <tr>
                <td><strong>Next action</strong></td>
                <td>Retest, investigate, improve, monitor, or leave unchanged.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="evidence-areas">
        <h2 class="title is-3">What to Check</h2>
        <p>
          You have met most of these topics in earlier lessons. The audit does
          not reteach all of them; it asks you to apply them to one live site.
        </p>

        <div class="table-container">
          <table class="table is-bordered audit-table">
            <thead>
              <tr>
                <th>Area</th>
                <th>Checks</th>
                <th>Useful evidence</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in auditAreas" :key="item.area">
                <td>
                  <strong>{{ item.area }}</strong>
                </td>
                <td>{{ item.checks }}</td>
                <td>{{ item.evidence }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="severity">
        <h2 class="title is-3">Severity: Impact Before Preference</h2>
        <p>
          Severity is not how much a finding annoys you. It is a judgement about
          user impact, business impact, technical risk, and how urgently the
          issue should be handled.
        </p>

        <div class="severity-grid">
          <div class="box severity-high">
            <h3 class="title is-5">High</h3>
            <p>
              Blocks a key task, excludes users, breaks the live site, exposes
              private information, or creates a serious trust problem.
            </p>
          </div>
          <div class="box severity-medium">
            <h3 class="title is-5">Medium</h3>
            <p>
              Makes an important task harder, weakens search or performance, or
              risks future breakage if ignored.
            </p>
          </div>
          <div class="box severity-low">
            <h3 class="title is-5">Low</h3>
            <p>
              Small polish, minor consistency, or maintainability work that can
              wait until higher-impact items are handled.
            </p>
          </div>
        </div>

        <p>
          If you are unsure, write the uncertainty down. "Likely medium; needs
          keyboard retest" is more honest than pretending the audit is certain.
        </p>
      </section>

      <section id="checkpoint">
        <CheckpointBox
          title="Check Your Audit Thinking"
          description="Before you begin the full audit, check that your evidence will be useful."
          :questions="checkpointQuestions"
        />
      </section>

      <section id="guided-practice">
        <GuidedPractice
          title="Guided Practice: Complete the First Audit Pass"
          description="Use the record to inspect the live Bistro without making any code changes yet."
          :steps="guidedPracticeSteps"
          :success-criteria="[
            'The audit record names the tested live URL and date',
            'At least one positive finding is recorded',
            'Findings separate observation, impact, evidence, and next action',
            'Mobile, tablet, desktop, keyboard, Console, and Network checks are represented',
            'No code changes are made during the audit pass',
          ]"
        />
      </section>

      <section id="independent-practice">
        <IndependentPractice
          title="Independent Challenge: Produce the Audit Record"
          task-title="Your task"
          :task="`<p>Complete a live-site audit record for Black Swan Bistro. Your goal is not to find the most problems. Your goal is to produce evidence that another person could understand and retest.</p>`"
          :requirements="[
            'Record the deployed URL, date, browser, and viewport sizes used',
            'Complete each audit area at least once',
            'Include at least six findings, with at least one positive finding',
            'Mark each finding as high, medium, low, monitor, or no action',
            'Choose three findings to carry into Part 8',
          ]"
          :stretch-goals="[
            'Add named screenshots or short screen recordings as evidence',
            'Ask another learner to retest one finding and compare notes',
            'Add a short paragraph explaining what you will not change yet and why',
          ]"
          :rubric="[
            {
              criteria: 'Evidence quality',
              success: 'A reviewer can reproduce or understand each finding from the record.',
            },
            {
              criteria: 'Scope control',
              success: 'The audit records findings without turning into unplanned coding work.',
            },
            {
              criteria: 'Prioritisation readiness',
              success: 'Three candidate findings are clear enough to prioritise in Part 8.',
            },
          ]"
        />
      </section>

      <section id="recap">
        <h2 class="title is-3">Recap</h2>
        <p>
          You now have an audit record for the live Bistro. It should show what
          works, what needs attention, what evidence supports each finding, and
          what should happen next. That record is the raw material for Part 8.
        </p>
      </section>

      <section id="closure">
        <ClosureSection
          title="Lesson Complete: Audit Before You Improve"
          :key-takeaways="closureTakeaways"
          :objectives="[
            'Explain the purpose of a live-site audit before improvement work begins',
            'Use an audit record to capture repeatable evidence',
            'Check accessibility, responsive behaviour, performance, SEO, content, links, console output, and maintainability',
            'Classify findings by impact and urgency',
            'Separate observations, likely causes, and proposed fixes',
            'Prepare a shortlist of findings for Part 8',
          ]"
          :reflection-prompts="[
            {
              icon: 'fas fa-balance-scale',
              title: 'Judgement',
              questions: [
                'Which finding matters most for a real visitor, and why?',
                'Which finding is tempting but should wait?',
              ],
            },
            {
              icon: 'fas fa-clipboard-check',
              title: 'Evidence',
              questions: [
                'Could someone else retest your top finding from your notes?',
                'What evidence do you wish you had captured more clearly?',
              ],
            },
          ]"
          next-steps="<p>Continue to Part 8, where you will prioritise the audit findings, make a small set of deliberate improvements, test before and after, and record the work in an improvement log.</p>"
        />
      </section>

      <TutorialRecommendations :current-path="tutorialPath" />
    </div>
  </div>
</template>

<style scoped>
.audit-principles,
.severity-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin: 1.5rem 0;
}

.download-box {
  align-items: center;
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
}

.audit-table td {
  vertical-align: top;
}

.severity-high {
  border-left: 4px solid #dc2626;
}

.severity-medium {
  border-left: 4px solid #f59e0b;
}

.severity-low {
  border-left: 4px solid #10b981;
}

@media (max-width: 768px) {
  .download-box {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
