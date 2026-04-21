<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

useTutorialHead({
  title: "CSS Systems for Reusable Sections",
  description: "Build a scalable CSS system with design tokens and reusable patterns that work consistently across multiple pages.",
  path: "/tutorials/intermediate/css-systems-for-reusable-sections",
});

const sections = [
  { id: 'why-systems', title: 'Why CSS Systems Matter' },
  { id: 'tokens', title: 'Start with Shared Tokens' },
  { id: 'naming', title: 'Name by Purpose' },
  { id: 'section-patterns', title: 'Section Patterns' },
  { id: 'repeated-pieces', title: 'Repeated Pieces' },
  { id: 'organisation', title: 'Organise Styles Without Overengineering' },
  { id: 'accessibility', title: 'Accessibility Checks' },
  { id: 'guided-practice', title: 'Guided Practice' },
  { id: 'independent-practice', title: 'Independent Practice' },
  { id: 'additional-resources', title: 'Additional Resources' },
  { id: 'recap', title: 'Recap' },
];

usePageSections(sections);

const checkpointQuestions = [
  {
    question: 'Why is a token like --space-lg more useful than writing 3rem in several different selectors?',
    answer:
      'Because one named token can control a repeated spacing decision across multiple sections, which makes updates easier and keeps the layout more consistent.',
  },
  {
    question: 'Which name is stronger for long-term reuse: .brown-box or .card? Why?',
    answer:
      '`.card` is stronger because it describes the job of the pattern, not a temporary visual detail that may change later.',
  },
  {
    question: 'Predict what happens if each section invents its own spacing and naming rules instead of sharing a system.',
    answer:
      'The CSS becomes harder to maintain, repeated patterns become less consistent, and adding new sections or pages takes more work.',
  },
];

const guidedPracticeSteps = [
  {
    title: 'Step 1: Choose the rules that should become shared',
    instructions:
      '<p>Imagine your homepage already has a hero, featured dishes section, gallery, and footer. Write down three repeated styling decisions that should become part of your shared system.</p><p>Good candidates include section spacing, content width, card shell styling, and button treatment.</p>',
    hints: [
      'Look for values or patterns that would appear in more than one section.',
      'If you would copy and paste the same rule twice, it probably belongs in the shared system.',
    ],
  },
  {
    title: 'Step 2: Turn those decisions into tokens and base patterns',
    instructions:
      '<p>Create a small <code>:root</code> block with a few colour and spacing tokens, then add shared classes such as <code>.container</code>, <code>.section</code>, and <code>.card</code>.</p><p>Keep it small. The goal is a reliable starter system, not a complete design language.</p>',
    hints: [
      'Start with 3-5 spacing values and only the colours you genuinely need.',
      'Shared classes should solve repeated layout problems before they solve decorative ones.',
    ],
  },
  {
    title: 'Step 3: Test the system against a second section',
    instructions:
      '<p>Pretend you are adding a new section to the page. Reuse your shared classes instead of writing new one-off rules first.</p><p>If the new section still needs too many special-case styles, adjust the shared pattern so it becomes more useful.</p>',
    hints: [
      'A good system should make the next section easier to build, not just describe the first one.',
      'If everything needs a unique class immediately, your shared pattern may still be too narrow.',
    ],
  },
];

const guidedPracticeSuccessCriteria = [
  'You created a small token set for colour, spacing, or width',
  'You defined at least two shared classes that could work across multiple sections',
  'You tested those shared rules against a second section idea',
  'You can explain why each shared rule belongs in the system',
];

const independentPracticeRubric = [
  {
    criteria: 'Shared tokens',
    success: 'The stylesheet uses a small set of reusable tokens instead of scattered one-off values.',
  },
  {
    criteria: 'Purpose-based naming',
    success: 'Class names describe jobs like section, card, intro, or action rather than colours or positions.',
  },
  {
    criteria: 'System reuse',
    success: 'At least two different sections can reuse the same shared patterns with only light adjustments.',
  },
  {
    criteria: 'Readable CSS',
    success: 'The stylesheet is grouped clearly into shared tokens, shared patterns, and section-specific rules.',
  },
];

const closureKeyTakeaways = [
  'A CSS system is a small set of repeatable decisions, not a giant design system.',
  'Shared tokens and utility-level patterns make multi-section pages easier to maintain.',
  'Naming by purpose usually ages better than naming by colour, size, or location.',
  'The goal is not more classes. The goal is fewer one-off styling decisions.',
];

const closureObjectives = [
  'Create shared CSS tokens for spacing, colour, and width',
  'Name reusable classes by purpose instead of appearance',
  'Build section-level patterns that can work across more than one page',
  'Recognise when a style belongs in the shared system instead of a one-off rule',
];

const closureReflectionPrompts = [
  {
    icon: 'fas fa-layer-group',
    title: 'System Thinking',
    questions: [
      'Which repeated layout choice in your project should become a shared rule first?',
      'Where are you still making one-off styling decisions that could be folded into a system?',
    ],
  },
  {
    icon: 'fas fa-ruler-combined',
    title: 'Consistency',
    questions: [
      'Which sections feel more connected once they share spacing and width rules?',
      'What naming decisions would make your CSS easier to understand a week from now?',
    ],
  },
];
</script>

<template>
  <div class="container section">
    <div class="tutorial-content">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link to="/">
              <i class="fa-solid fa-house mr-2"></i> Home
            </router-link>
          </li>
          <li>
            <router-link to="/tutorials">Tutorials</router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">CSS Systems for Reusable Sections</a>
          </li>
        </ul>
      </nav>

      <div class="tutorial-meta">
        <div class="tags">
          <span class="tag is-info">Intermediate</span>
          <span class="tag is-light">35 min</span>
          <span class="tag is-light">CSS</span>
          <span class="tag is-light">Systems</span>
        </div>
      </div>

      <h1 class="title is-1">CSS Systems for Reusable Sections</h1>

      <p class="subtitle is-5">
        Build a small CSS system with spacing, naming, and shared section patterns before you refactor components.
      </p>

      <AnticipatorySet
        title="One Page Is Not the End of the Story"
        icon="🧭"
        :hook="`<p>After Black Swan Bistro Part 2, you now have a homepage with repeated classes, shared spacing, and a clearer layout. That is progress, but it also creates a new problem: how do you stop that CSS from turning into a pile of one-off rules as the site grows?</p><p>This is where CSS system thinking starts. You do not need a giant framework or a complicated design system. You need a small set of reliable rules that make the next section and the next page easier to build.</p><p>That is what this lesson focuses on.</p>`"
        :reflection-prompts="[
          'Have you ever styled a second section and realised you were copying rules from the first?',
          'Which choices in your CSS feel stable enough to reuse across more than one part of the site?',
          'What becomes harder when spacing, colours, and naming are decided separately in every section?'
        ]"
        connection="This lesson sits between BSB Part 2 and the component refactor in Part 3. It helps you turn repeated styling choices into a small shared system."
      />

      <LearningObjectives
        :objectives="[
          'Turn repeated homepage styling decisions into a small reusable CSS system',
          'Use custom properties as shared tokens for colour, spacing, and width',
          'Name classes by purpose so the CSS stays readable as the project grows',
          'Build repeatable section, card, and action patterns without introducing a framework',
          'Recognise when a style belongs in shared CSS instead of a one-off selector'
        ]"
        purpose="A learner can build one page without a system. A learner who wants to build a maintainable site needs shared rules. This lesson teaches that bridge."
        :prerequisites="[
          { topic: 'BSB Part 2: Homepage Wireframe', link: '/tutorials/intermediate/black-swan-bistro-part-2' }
        ]"
      />

      <h2 id="why-systems">Why CSS Systems Matter</h2>
      <p>
        In a small project, it is easy to get away with section-specific CSS. You style the
        hero, then the gallery, then the footer, each as if it is a separate problem. The
        trouble appears later when you add another page or try to refactor repeated markup.
      </p>
      <p>
        A small CSS system helps you answer questions like these more consistently:
      </p>
      <ul>
        <li>How wide should most content sit on the page?</li>
        <li>How much vertical spacing should sections share?</li>
        <li>What does a standard card shell look like?</li>
        <li>How should buttons and links feel related?</li>
        <li>Which rules belong everywhere, and which belong only in one section?</li>
      </ul>

      <div class="notification is-info is-light">
        <p><strong>Important idea:</strong> a CSS system is not about making the site look identical everywhere. It is about making repeated decisions deliberate instead of accidental.</p>
      </div>

      <h2 id="tokens">Start with Shared Tokens</h2>
      <p>
        In BSB Part 2, you already used custom properties for colour. That is the right
        starting point. Now expand that thinking a little. If the same spacing and width
        values appear again and again, they should be named once and reused.
      </p>

      <pre><code>:root {
  --color-page-bg: #f8f5f0;
  --color-surface: #ffffff;
  --color-text: #2d2a26;
  --color-accent: #8c5e3c;

  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 3rem;
  --space-xl: 5rem;

  --content-width: 72rem;
  --card-radius: 0.75rem;
  --border-soft: 1px solid #e5ddd3;
}</code></pre>
      <figure class="tutorial-figure tutorial-figure--wide">
        <img
          src="/assets/images/tutorials/diagrams/tutorial-css-systems-token-to-interface-map.svg"
          alt="Diagram mapping CSS tokens for color, spacing, width, and radius to interface parts such as buttons, cards, and section width."
        />
        <figcaption>
          Tokens are not useful because they exist in a list. They are useful because they
          control repeated interface decisions from one place.
        </figcaption>
      </figure>

      <p>
        These values do not need to be perfect. They need to be intentional. The real benefit
        is that you stop making up new numbers for every section.
      </p>

      <h3>Why this helps</h3>
      <ul>
        <li>Changing one value can improve consistency across the whole page.</li>
        <li>Spacing decisions become easier to explain and reuse.</li>
        <li>Later responsive adjustments are easier because you already know your core values.</li>
      </ul>

      <h2 id="naming">Name by Purpose, Not Appearance</h2>
      <p>
        Naming is where many beginners either become too vague or too specific. A class like
        <code>.brown-box</code> may feel descriptive today, but it becomes awkward once the
        colour changes. A class like <code>.left-section-large</code> also ties the rule to a
        specific layout position that may not stay true.
      </p>
      <p>
        Better names describe the job the class performs:
      </p>
      <ul>
        <li><code>.container</code> for a shared content width</li>
        <li><code>.section</code> for shared vertical rhythm</li>
        <li><code>.section-title</code> for headings that repeat the same pattern</li>
        <li><code>.card</code> for repeated content shells</li>
        <li><code>.button</code> or <code>.button-primary</code> for action styles</li>
      </ul>
      <figure class="tutorial-figure tutorial-figure--wide">
        <img
          src="/assets/images/tutorials/diagrams/tutorial-css-systems-naming-by-purpose-comparison.svg"
          alt="Comparison showing appearance-based class names like brown-box against purpose-based names like card, section-title, and button-primary."
        />
        <figcaption>
          Purpose-based names stay readable when the design evolves. Appearance-based names
          often become misleading the moment the site changes colour, size, or layout.
        </figcaption>
      </figure>

      <div class="box">
        <p><strong>Helpful test:</strong> if you moved the class to another part of the page, would its name still make sense?</p>
      </div>

      <CheckpointBox
        title="Checkpoint for Understanding"
        icon="🧩"
        description="Pause here and check whether the first system ideas are making sense before you move on to section and pattern design."
        :questions="checkpointQuestions"
        answers-button-text="Show sample answers"
      />

      <h2 id="section-patterns">Build Section Patterns First</h2>
      <p>
        The most useful shared CSS often starts at section level. Before worrying about every
        small element, make sure your sections share a calm, readable structure.
      </p>

      <pre><code>.container {
  width: min(100% - 2rem, var(--content-width));
  margin-inline: auto;
}

.section {
  padding-block: var(--space-xl);
}

.section-title {
  margin-bottom: var(--space-md);
  font-size: 2rem;
  line-height: 1.2;
}

.section-intro {
  max-width: 42rem;
  margin-bottom: var(--space-lg);
}</code></pre>

      <p>
        These classes are not flashy, but they do a lot of heavy lifting. Once they exist,
        most new sections start from a familiar base instead of a blank slate.
      </p>

      <h3>Section-level questions to ask</h3>
      <ul>
        <li>Does this section need the standard vertical rhythm, or is it a special case?</li>
        <li>Does the content need the shared page width, or a deliberately narrower measure?</li>
        <li>Can this heading reuse the same visual pattern as earlier section titles?</li>
      </ul>

      <h2 id="repeated-pieces">Standardise Repeated Pieces</h2>
      <p>
        Once your section shells are stable, look at the repeated pieces inside them. In BSB,
        that includes cards, calls to action, navigation links, and buttons.
      </p>
      <p>
        Start with the shell before the variation:
      </p>

      <pre><code>.card {
  padding: var(--space-md);
  background: var(--color-surface);
  border: var(--border-soft);
  border-radius: var(--card-radius);
}

.card-grid {
  display: grid;
  gap: var(--space-md);
}

.button-primary {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  background: var(--color-accent);
  color: white;
  text-decoration: none;
  border-radius: 999px;
}</code></pre>
      <figure class="tutorial-figure tutorial-figure--wide">
        <img
          src="/assets/images/tutorials/diagrams/tutorial-css-systems-pattern-system-board.svg"
          alt="Board showing section patterns such as container and section spacing alongside repeated pieces such as cards, card grids, and button or link groups."
        />
        <figcaption>
          A small CSS system usually begins with stable section-level patterns and a handful
          of repeated pieces. That gives new sections a familiar base instead of a blank
          slate.
        </figcaption>
      </figure>

      <p>
        Notice the order of thinking here: first, define what the shared pattern is. After
        that, handle section-specific differences only where they are genuinely needed.
      </p>

      <div class="notification is-warning is-light">
        <p><strong>Avoid this trap:</strong> if every card on the site immediately gets its own unique class and styling rules, you do not really have a card pattern yet.</p>
      </div>

      <h2 id="organisation">Organise Styles Without Overengineering</h2>
      <p>
        At this stage, you do not need a complex architecture or multiple build steps. You do
        need some discipline. Keep your CSS organised in a way another learner could read.
      </p>

      <p>A simple order often works well:</p>
      <ol>
        <li>Root variables and document-wide basics</li>
        <li>Layout foundations such as container and section</li>
        <li>Repeated patterns such as cards, buttons, and link groups</li>
        <li>Section-specific adjustments only when shared rules are not enough</li>
      </ol>

      <pre><code>/* 1. Shared tokens */
:root { ... }

/* 2. Page-wide foundations */
body { ... }
.container { ... }
.section { ... }

/* 3. Reusable patterns */
.section-title { ... }
.card { ... }
.button-primary { ... }

/* 4. Section-specific adjustments */
.hero { ... }
.gallery { ... }
.footer { ... }</code></pre>

      <p>
        This keeps your system readable without pretending the project is bigger than it is.
      </p>

      <div class="notification is-info is-light">
        <p>
          <strong>Why this order matters — the cascade.</strong> CSS applies rules in a
          predictable order. When two rules target the same element with equal specificity,
          the one that appears <em>later</em> in the stylesheet wins. By placing shared
          foundations first and section-specific adjustments last, you let the natural cascade
          do the work — specific rules override general ones without needing higher-specificity
          selectors or <code>!important</code>.
        </p>
        <p>
          If you covered
          <router-link to="/tutorials/beginner/why-your-css-isnt-working">Why Your CSS Isn't Working</router-link>
          in the beginner section, this is the same principle applied to a real stylesheet
          structure. We will return to the cascade in depth in
          <router-link to="/tutorials/intermediate/cascade-specificity-and-debugging-css">Cascade, Specificity, and Debugging CSS</router-link>
          later in this pathway. For now, the key habit is: <strong>keep selector specificity
          low and consistent, and let source order handle the rest.</strong>
        </p>
      </div>

      <h2 id="accessibility">Accessibility Checks for Shared Styles</h2>
      <p>
        Shared styles should help accessibility, not quietly damage it. As your CSS system
        grows, check a few practical things:
      </p>
      <ul>
        <li>Do buttons and links keep enough colour contrast?</li>
        <li>Are spacing choices improving readability, not crowding content?</li>
        <li>Do focus states remain visible when a link or button is tabbed to?</li>
        <li>Are decorative choices making content harder to scan?</li>
      </ul>

      <p>
        You do not need a full accessibility deep dive in this lesson, but you do need the
        habit of checking whether your “shared pattern” is shared responsibly.
      </p>

      <h2 id="guided-practice">Guided Practice</h2>
      <GuidedPractice
        title="Turn one homepage into a small reusable system"
        description="Use the ideas from this lesson to turn repeated homepage decisions into a small shared CSS foundation you could reuse on the next page."
        :steps="guidedPracticeSteps"
        :success-criteria="guidedPracticeSuccessCriteria"
        success-criteria-title="You are on track if you can:"
      />

      <h2 id="independent-practice">Independent Practice</h2>
      <IndependentPractice
        title="Independent Practice: System-check a second page"
        description="Now apply the lesson without step-by-step help."
        task-title="Your Task:"
        task="<p>Imagine Black Swan Bistro now needs an <strong>About</strong> page or a <strong>Contact</strong> page. Plan a small shared CSS layer that both the homepage and that second page could use.</p><p>Do not build the whole page. Focus on the shared system: tokens, section rules, card or content-shell patterns, and action styles.</p>"
        :requirements="[
          'Define a small set of shared tokens for spacing, colour, or width',
          'Choose at least three purpose-based shared classes',
          'Name one section-specific rule that should stay outside the shared system',
          'Write a short note explaining why your shared rules would help the second page'
        ]"
        :stretch-goals="[
          'Add a shared intro pattern such as .section-intro or .content-narrow',
          'Refine one button or card rule so it can support two slightly different contexts'
        ]"
        :rubric="independentPracticeRubric"
      />

      <h2 id="additional-resources">Additional Resources</h2>
      <p>
        These are especially helpful if you want to strengthen your CSS system thinking:
      </p>
      <ul>
        <li>
          Every Layout
          &mdash; useful for thinking about stack, cluster, sidebar, and grid patterns as
          reusable building blocks.
        </li>
        <li>
          <a href="https://getbem.com" target="_blank" rel="noopener">
            BEM — Block Element Modifier
          </a>
          &mdash; useful when your naming needs to become more deliberate as the site grows.
        </li>
      </ul>

      <h2 id="recap">Recap</h2>
      <p>
        A strong intermediate CSS habit is learning to see repeated decisions early. Shared
        tokens, purposeful names, section shells, and repeated card or button patterns all
        make the next page easier to build. That is the real value of a CSS system.
      </p>

      <ClosureSection
        title="Lesson Complete: You Can Build a Small CSS System"
        :key-takeaways="closureKeyTakeaways"
        :objectives="closureObjectives"
        :reflection-prompts="closureReflectionPrompts"
        next-steps="Next, you will deepen your Flexbox thinking so you can use one-dimensional layout more deliberately inside navigation, cards, and shared page sections."
      />

      <TutorialRecommendations :current-path="'/tutorials/intermediate/css-systems-for-reusable-sections'" />
    </div>
  </div>
</template>
