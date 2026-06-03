<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';
import '@/assets/styles/tutorials.css';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { usePageSections } from '@/composables/usePageSections';
import { getTutorialRecommendations } from '@/utils/tutorialUtils';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

const tutorialPath = '/tutorials/intermediate/modern-css-layout-extensions';

useTutorialHead({
  title: 'Modern CSS Layout Extensions',
  description:
    'Extend Flexbox and Grid with subgrid, :has(), fluid CSS, and intrinsic layout patterns so card grids cope better with real content.',
  path: tutorialPath,
});

const sections = [
  { id: 'layout-decisions', title: 'Layout Decisions' },
  { id: 'starter-html', title: 'Starter HTML' },
  { id: 'base-css', title: 'Base CSS' },
  { id: 'intrinsic-grid', title: 'Intrinsic Grid' },
  { id: 'fluid-spacing', title: 'Fluid Spacing' },
  { id: 'has-layout', title: ':has() Layout' },
  { id: 'subgrid', title: 'Subgrid' },
  { id: 'minmax-protection', title: 'minmax() Protection' },
  { id: 'feature-card', title: 'Feature Card' },
  { id: 'stress-test', title: 'Stress Test' },
  { id: 'final-css', title: 'Final CSS' },
  { id: 'guided-practice', title: 'Guided Practice' },
  { id: 'independent-practice', title: 'Independent Practice' },
  { id: 'closure', title: 'Closure' },
];

usePageSections(sections);

const starterHtml = `<section class="project-section">
  <div class="section-header">
    <p class="eyebrow">Featured projects</p>
    <h2>Build layouts that survive real content</h2>
    <p>
      These project cards will help us explore modern CSS layout patterns.
    </p>
  </div>

  <div class="project-grid">
    <article class="project-card project-card--feature">
      <img src="/images/project-cafe.jpg" alt="Cafe website preview" />
      <div class="project-card__content">
        <p class="project-card__type">Guided project</p>
        <h3>Black Swan Bistro</h3>
        <p>
          Build a restaurant website from layout plan to reusable components.
        </p>
        <a href="#">View project</a>
      </div>
    </article>

    <article class="project-card">
      <div class="project-card__content">
        <p class="project-card__type">Practice project</p>
        <h3>Accessibility Essentials</h3>
        <p>
          Improve structure, focus states, colour contrast, landmarks, and image text.
        </p>
        <a href="#">View project</a>
      </div>
    </article>

    <article class="project-card">
      <img src="/images/project-layout.jpg" alt="Website layout sketch" />
      <div class="project-card__content">
        <p class="project-card__type">CSS layout</p>
        <h3>Breaking Layouts Into Sections Without Losing Your Mind</h3>
        <p>
          Learn how to see a page as reusable regions instead of one giant blob.
        </p>
        <a href="#">View project</a>
      </div>
    </article>
  </div>
</section>`;

const baseCss = `*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  line-height: 1.5;
  color: #222;
  background: #f7f4ef;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: currentColor;
  font-weight: 700;
}

.project-section {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
  padding-block: 4rem;
}

.section-header {
  max-width: 42rem;
  margin-block-end: 2rem;
}

.eyebrow,
.project-card__type {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}`;

const intrinsicGridCss = `.project-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
}`;

const breakpointGridCss = `.project-grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 45rem) {
  .project-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`;

const fluidSpacingCss = `.project-section {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
  padding-block: clamp(2.5rem, 8vw, 6rem);
}

.project-card {
  border: 1px solid #ddd3c7;
  border-radius: 1rem;
  overflow: hidden;
  background: #fff;
}

.project-card__content {
  display: grid;
  gap: clamp(0.75rem, 2vw, 1rem);
  padding: clamp(1rem, 3vw, 1.5rem);
}`;

const hasCss = `.project-card:has(img) {
  display: grid;
}

@media (min-width: 48rem) {
  .project-card:has(img) {
    grid-template-columns: 1fr 1.4fr;
  }

  .project-card:has(img) img {
    height: 100%;
    object-fit: cover;
  }
}`;

const simpleCardGridCss = `.project-card {
  display: grid;
  grid-template-rows: auto 1fr;
}

.project-card__content {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
}`;

const subgridCss = `.project-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
  grid-auto-rows: auto;
}

.project-card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 4;
}`;

const minmaxCss = `/* Fixed minimum, flexible maximum */
grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));

/* Content-aware sidebar style layout */
grid-template-columns: minmax(12rem, 18rem) minmax(0, 1fr);

/* Prevent a grid child from forcing overflow */
.main-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
}`;

const featureCardHtml = `<article class="project-card project-card--feature">
  ...
</article>`;

const featureCardCss = `@media (min-width: 48rem) {
  .project-card--feature {
    grid-column: span 2;
  }

  .project-card--feature:has(img) {
    grid-template-columns: 1fr 1fr;
  }
}`;

const finalCss = `*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  line-height: 1.5;
  color: #222;
  background: #f7f4ef;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: currentColor;
  font-weight: 700;
}

.project-section {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
  padding-block: clamp(2.5rem, 8vw, 6rem);
}

.section-header {
  max-width: 42rem;
  margin-block-end: clamp(1.5rem, 4vw, 2.5rem);
}

.eyebrow,
.project-card__type {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.project-grid {
  display: grid;
  gap: clamp(1rem, 3vw, 1.5rem);
  grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
}

.project-card {
  display: grid;
  border: 1px solid #ddd3c7;
  border-radius: 1rem;
  overflow: hidden;
  background: #fff;
}

.project-card img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.project-card__content {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  gap: clamp(0.75rem, 2vw, 1rem);
  padding: clamp(1rem, 3vw, 1.5rem);
}

.project-card__content > * {
  margin: 0;
}

.project-card__content a {
  align-self: end;
}

@media (min-width: 48rem) {
  .project-card--feature {
    grid-column: span 2;
  }

  .project-card:has(img) {
    grid-template-columns: 1fr 1.4fr;
  }

  .project-card:has(img) img {
    height: 100%;
    aspect-ratio: auto;
  }

  .project-card--feature:has(img) {
    grid-template-columns: 1fr 1fr;
  }
}`;

const checkpointQuestions = [
  {
    question:
      'What happens when the project grid becomes too narrow for three readable cards?',
    answer:
      'The browser creates fewer columns. The minmax() minimum protects each card from becoming too cramped, and auto-fit lets the grid use the available space.',
  },
  {
    question: 'Why might :has(img) be better than adding a manual has-image class?',
    answer:
      'The layout responds to the actual HTML. If the image is removed later, the card automatically stops using the image-specific layout.',
  },
  {
    question: 'When should you reach for subgrid?',
    answer:
      'Use subgrid when nested content needs to align to tracks from the parent grid. If you only need a button at the bottom of a card, a simpler internal grid is usually enough.',
  },
];

const guidedPracticeSteps = [
  {
    title: 'Task 1: Change the minimum card width',
    instructions:
      '<p>Find <code>min(18rem, 100%)</code> in the grid columns. Change <code>18rem</code> to <code>15rem</code>, then to <code>22rem</code>.</p><p>Watch how the number of columns changes as the minimum card size changes.</p>',
    hints: [
      'A smaller minimum allows more columns sooner.',
      'A larger minimum protects readability but may create fewer columns.',
    ],
  },
  {
    title: 'Task 2: Add a card without an image',
    instructions:
      '<p>Add another project card that has no image. Check that it still looks intentional beside image-based cards.</p>',
    hints: [
      'The goal is not for every card to be identical. The goal is for every card to look designed.',
      'Use :has(img) so image-specific layout only applies when an image exists.',
    ],
  },
  {
    title: 'Task 3: Add an awkward heading',
    instructions:
      '<p>Use this heading: <code>Understanding Layout Decisions When Everything Refuses to Fit Nicely</code>.</p><p>Check whether the card still behaves. If it does not, decide whether the grid minimum, card spacing, or text rules need adjustment.</p>',
    hints: [
      'Long headings are a normal content problem, not a personal attack from the browser.',
      'Test at narrow, medium, and wide widths before deciding on a fix.',
    ],
  },
  {
    title: 'Task 4: Move the feature card',
    instructions:
      '<p>Move <code>project-card--feature</code> to a different card. The layout should still work without depending on one exact card.</p>',
    hints: [
      'This checks whether the class is reusable.',
      'A feature card should describe a layout role, not one specific piece of content.',
    ],
  },
];

const guidedPracticeSuccessCriteria = [
  'You can explain how the minimum card width affects the number of columns',
  'A card without an image still looks intentionally designed',
  'Long headings do not break the layout',
  'The feature-card class can move to another card without rewriting the grid',
];

const independentPracticeRubric = [
  {
    criteria: 'Intrinsic grid',
    success:
      'The card grid uses auto-fit and minmax() so columns respond to available space without a pile of breakpoint rules.',
  },
  {
    criteria: 'Fluid rhythm',
    success:
      'Spacing or sizing uses clamp(), min(), or max() where smooth scaling helps the layout.',
  },
  {
    criteria: 'Content-aware behaviour',
    success:
      'At least one :has() rule changes the layout based on content that is present or missing.',
  },
  {
    criteria: 'Stress-tested content',
    success:
      'The layout has been checked with long titles, missing images, short cards, narrow widths, and browser zoom.',
  },
];

const additionalResources = [
  {
    title: 'MDN: repeat()',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/repeat',
    description:
      'Reference for the repeat() function, including auto-fit and auto-fill patterns used in grid templates.',
  },
  {
    title: 'MDN: minmax()',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/minmax',
    description:
      'Reference for defining minimum and maximum grid track sizes.',
  },
  {
    title: 'MDN: clamp()',
    url: 'https://developer.mozilla.org/docs/Web/CSS/Reference/Values/clamp',
    description:
      'Reference for fluid values that stay between a minimum and maximum.',
  },
  {
    title: 'MDN: :has()',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:has',
    description:
      'Reference for selecting an element based on what it contains or relates to.',
  },
  {
    title: 'MDN: Subgrid',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid',
    description:
      'Guide to sharing parent grid tracks with nested grid layouts.',
  },
  {
    title: 'CSS-Tricks: auto-fill vs auto-fit',
    url: 'https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/',
    description:
      'A visual explanation of the difference between auto-fill and auto-fit in responsive grid columns.',
  },
  {
    title: 'CSS-Tricks: The CSS :has Selector',
    url: 'https://css-tricks.com/the-css-has-selector/',
    description:
      'Practical examples of using :has() for content-aware CSS.',
  },
  {
    title: 'web.dev: CSS subgrid',
    url: 'https://web.dev/articles/css-subgrid',
    description:
      'A focused explanation of subgrid and where it helps nested layouts align.',
  },
];

const baseRecommendations = getTutorialRecommendations(tutorialPath);
const recommendationResources = [
  ...baseRecommendations.resources,
  ...additionalResources,
];

const closureKeyTakeaways = [
  'Modern CSS layout starts with layout decisions, not property memorisation.',
  'auto-fit and minmax() let repeated card grids adapt with fewer hard breakpoints.',
  'clamp(), min(), and max() help spacing and sizing respond smoothly.',
  ':has() lets CSS respond to the structure that is actually present.',
  'subgrid is useful when nested grid content needs to align with parent tracks.',
  'Stress testing with awkward content is professional CSS, not an optional extra.',
];

const closureObjectives = [
  'Choose between Flexbox, Grid, subgrid, and intrinsic sizing patterns',
  'Build responsive card grids with auto-fit and minmax()',
  'Use clamp(), min(), and max() for fluid spacing and sizing',
  'Use :has() to adjust layout when optional content is present',
  'Explain when subgrid helps nested alignment',
  'Stress-test a layout with awkward real-world content',
];

const closureReflectionPrompts = [
  {
    icon: 'fas fa-layer-group',
    title: 'Layout Decisions',
    questions: [
      'Which layout problem in your current project would benefit from intrinsic grid columns?',
      'Where are you still using a breakpoint because the layout lacks a flexible default?',
    ],
  },
  {
    icon: 'fas fa-vial',
    title: 'Stress Testing',
    questions: [
      'Which piece of awkward content revealed the most about your layout?',
      'What would you test before reusing this card grid in a later component lesson?',
    ],
  },
];
</script>

<template>
  <div class="container section">
    <div class="tutorial-content modern-css-layout-lesson">
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
            <a href="#" aria-current="page">Modern CSS Layout Extensions</a>
          </li>
        </ul>
      </nav>

      <div class="tutorial-meta">
        <div class="tags">
          <span class="tag is-info">Intermediate</span>
          <span class="tag is-light">45-60 min</span>
          <span class="tag is-light">CSS</span>
          <span class="tag is-light">Layout</span>
          <span class="tag is-light">Modern CSS</span>
        </div>
      </div>

      <h1 class="title is-1">Modern CSS Layout Extensions</h1>

      <p class="subtitle is-5">
        Extend Flexbox and Grid with intrinsic grids, fluid CSS, :has(), subgrid,
        and layout stress testing.
      </p>

      <AnticipatorySet
        title="Layouts Need to Survive Real Content"
        icon="CSS"
        :hook="`<p>Flexbox and Grid are already powerful. You can build a lot with them. But once real content arrives, things get messier: headings become longer than expected, cards have uneven descriptions, images go missing, and the perfect sample layout starts acting like it never signed the contract.</p><p>Modern CSS layout tools help you write layouts that are more flexible, more content-aware, and less dependent on endless media queries.</p><p>This is not advanced wizardry. It is the next practical step after basic layout: you know Flexbox and Grid, so now you can make layouts that survive real content.</p>`"
        :reflection-prompts="[
          'Have you built a card grid that looked good with sample content but broke with real copy?',
          'Which parts of a card layout usually become awkward first: images, titles, descriptions, or spacing?',
          'What would improve if the browser could make more layout decisions for you?'
        ]"
        connection="This lesson follows the core layout, responsive, selector, and styling-detail lessons. It prepares the same project card grid for later work with Container Queries and Modern CSS Architecture."
      />

      <LearningObjectives
        :objectives="[
          'Choose between Flexbox, Grid, subgrid, and intrinsic sizing patterns',
          'Build responsive card grids with auto-fit and minmax()',
          'Use clamp(), min(), and max() for fluid spacing and sizing',
          'Use :has() to adjust layout when optional content is present or missing',
          'Explain when subgrid helps nested alignment',
          'Stress-test a layout with awkward real-world content'
        ]"
        purpose="Modern CSS layout is not about memorising every new feature. It is about choosing the right tool for the layout problem in front of you."
        :prerequisites="[
          { topic: 'Flexbox for Real Layouts', link: '/tutorials/intermediate/flexbox-for-real-layouts' },
          { topic: 'CSS Grid for Repeated Layouts', link: '/tutorials/intermediate/css-grid-for-repeated-layouts' },
          { topic: 'Styling Details: Selectors, Pseudo-elements, and Motion', link: '/tutorials/intermediate/styling-details-selectors-pseudo-elements-and-motion' }
        ]"
      />

      <h2 id="layout-decisions" class="title is-2">Before You Write CSS, Ask Layout Questions</h2>
      <p>
        Modern CSS is not just about knowing more properties. It is about making
        better layout decisions before the stylesheet gets busy.
      </p>
      <ol>
        <li>Is this layout one-dimensional or two-dimensional?</li>
        <li>Do items need to line up across rows and columns?</li>
        <li>Does the component need to change when content is missing?</li>
        <li>Should the layout respond to the viewport or to its own available space?</li>
        <li>What happens when the content gets awkward?</li>
      </ol>
      <p>
        That last question is the one that saves future pain. CSS behaves much
        better when we stop pretending all content will be polite.
      </p>
      <figure class="tutorial-figure tutorial-figure--wide">
        <img
          src="/assets/images/tutorials/diagrams/tutorial-modern-css-layout-decision-map.svg"
          alt="Flow diagram showing layout questions that lead to Flexbox, Grid with minmax, :has(), subgrid, and stress testing."
        />
        <figcaption>
          Pick the tool after you identify the layout pressure. Modern CSS is most
          useful when it answers a specific content problem.
        </figcaption>
      </figure>

      <h2 id="starter-html" class="title is-2">Starter HTML</h2>
      <p>
        You will build a reusable project card grid. The same pattern can become a
        tutorial card grid later, which makes it a good bridge into Container Queries
        and Modern CSS Architecture.
      </p>
      <pre><code>{{ starterHtml }}</code></pre>

      <h2 id="base-css" class="title is-2">Base CSS</h2>
      <p>
        Start with a plain foundation. At this point, the page has content, readable
        defaults, and basic spacing. The layout extensions will come next.
      </p>
      <pre><code>{{ baseCss }}</code></pre>

      <h2 id="intrinsic-grid" class="title is-2">Use Intrinsic Grid Columns</h2>
      <p>
        A common beginner responsive grid uses one layout by default, then jumps to
        three columns at a specific breakpoint:
      </p>
      <pre><code>{{ breakpointGridCss }}</code></pre>
      <p>
        That works, but it creates a hard layout jump. A more resilient option lets
        the grid decide how many useful columns can fit:
      </p>
      <pre><code>{{ intrinsicGridCss }}</code></pre>
      <p>
        Read it in pieces. <code>repeat(auto-fit, ...)</code> tells the browser to
        fit as many columns as it can. <code>minmax(min(18rem, 100%), 1fr)</code>
        says each column should ideally be at least <code>18rem</code>, never wider
        than the available space on tiny screens, and able to grow up to
        <code>1fr</code>.
      </p>
      <p>
        When the container becomes too narrow for three cards, the browser does not
        panic. It simply creates fewer columns. Small mercy. Big improvement.
      </p>
      <figure class="tutorial-figure tutorial-figure--wide">
        <img
          src="/assets/images/tutorials/diagrams/tutorial-modern-css-layout-intrinsic-grid.svg"
          alt="Comparison of a hard breakpoint grid and an intrinsic grid that wraps cards as they reach their minimum readable width."
        />
        <figcaption>
          A hard breakpoint changes at one chosen width. An intrinsic grid responds
          when the cards themselves run out of useful space.
        </figcaption>
      </figure>

      <CheckpointBox
        title="Checkpoint for Understanding"
        icon="CSS"
        description="Pause here and check whether the modern layout tools are solving real content problems rather than just adding fancy syntax."
        :questions="checkpointQuestions"
        answers-button-text="Show sample answers"
      />

      <h2 id="fluid-spacing" class="title is-2">Use Fluid Spacing with clamp(), min(), and max()</h2>
      <p>
        Fixed spacing can feel too tight on large screens or too roomy on small
        screens. <code>clamp()</code> lets a value scale between a minimum and a
        maximum:
      </p>
      <pre><code>{{ fluidSpacingCss }}</code></pre>
      <p>
        Read <code>clamp(2.5rem, 8vw, 6rem)</code> like this: never smaller than
        <code>2.5rem</code>, prefer a value that scales with <code>8vw</code>, and
        never grow larger than <code>6rem</code>.
      </p>
      <p>
        The companion functions are just as useful. <code>min()</code> chooses the
        smaller valid value, which helps with safe widths like
        <code>min(100% - 2rem, 70rem)</code>. <code>max()</code> chooses the larger
        value, which can protect minimum tap targets, readable spacing, or flexible
        columns.
      </p>

      <h2 id="has-layout" class="title is-2">Use :has() for Content-Aware Layout</h2>
      <p>
        Some cards have images. Some do not. You could add a manual class like
        <code>project-card--has-image</code>, but then the HTML has to carry layout
        information that may become stale.
      </p>
      <p>
        With <code>:has()</code>, CSS can detect whether the card contains an image:
      </p>
      <pre><code>{{ hasCss }}</code></pre>
      <p>
        Now cards without images stay simple, while cards with images can become
        horizontal on wider screens. This is especially useful for content-managed
        sites where some entries have optional images and some do not.
      </p>
      <figure class="tutorial-figure tutorial-figure--wide">
        <img
          src="/assets/images/tutorials/diagrams/tutorial-modern-css-layout-has-cards.svg"
          alt="Diagram showing a card without an image staying stacked and a card with an image using a media layout when :has(img) matches."
        />
        <figcaption>
          With <code>:has(img)</code>, image-specific layout only applies to cards
          that actually contain an image.
        </figcaption>
      </figure>

      <h2 id="subgrid" class="title is-2">Use Subgrid for Nested Alignment</h2>
      <p>
        Cards can look untidy when their internal content does not align. One title
        wraps over three lines, another uses one line, and suddenly the links sit at
        different heights like they are avoiding eye contact.
      </p>
      <p>
        A simple internal grid often solves this:
      </p>
      <pre><code>{{ simpleCardGridCss }}</code></pre>
      <p>
        The description row can stretch while the link stays lower. That is enough
        for many card layouts.
      </p>
      <p>
        Subgrid becomes useful when nested content needs to align with tracks from a
        parent grid. A nested grid is normally independent; <code>subgrid</code> lets
        it use the parent grid's row or column tracks.
      </p>
      <pre><code>{{ subgridCss }}</code></pre>
      <p>
        Use subgrid when card content, pricing rows, editorial layouts, or feature
        comparisons need strong shared alignment. Skip it when normal flow, Flexbox,
        or a simple internal grid already solves the problem.
      </p>
      <figure class="tutorial-figure tutorial-figure--wide">
        <img
          src="/assets/images/tutorials/diagrams/tutorial-modern-css-layout-subgrid-alignment.svg"
          alt="Comparison of independent card rows with subgrid rows that align card content and actions across columns."
        />
        <figcaption>
          Subgrid is about shared alignment. If nested content needs to line up with
          the parent grid tracks, subgrid gives those inner pieces the same rhythm.
        </figcaption>
      </figure>

      <div class="notification is-info is-light">
        <p>
          <strong>Helpful rule:</strong> if you only need a button to sit at the
          bottom of a card, use a simple internal grid. Reach for subgrid when nested
          tracks need to align with parent tracks.
        </p>
      </div>

      <h2 id="minmax-protection" class="title is-2">Use minmax() to Protect Layouts</h2>
      <p>
        <code>minmax()</code> defines a range for a grid track: a minimum it should
        not shrink below, and a maximum it can grow toward. You have already used it
        in the intrinsic grid, but it appears in other useful patterns too:
      </p>
      <pre><code>{{ minmaxCss }}</code></pre>
      <p>
        That last <code>minmax(0, 1fr)</code> pattern is small but mighty. It can
        stop long content from forcing a grid column wider than expected. Tiny line,
        big "why is this page sideways?" prevention.
      </p>

      <h2 id="feature-card" class="title is-2">Add a Feature Card</h2>
      <p>
        Now make one card stand out. The feature class describes a reusable layout
        role, not one specific project.
      </p>
      <pre><code>{{ featureCardHtml }}</code></pre>
      <pre><code>{{ featureCardCss }}</code></pre>
      <p>
        Because the parent grid already uses <code>auto-fit</code> and
        <code>minmax()</code>, the feature card can span more space when there is
        room. The <code>:has(img)</code> rule then improves its internal layout only
        when an image exists.
      </p>
      <p>
        This is the point of modern CSS layout work: each feature helps the layout
        make a better decision.
      </p>

      <h2 id="stress-test" class="title is-2">Layout Stress Test</h2>
      <p>
        Before you call the layout finished, test it with content that behaves badly.
        Try:
      </p>
      <ul class="content">
        <li>a very long heading</li>
        <li>a missing image</li>
        <li>a very short card</li>
        <li>a very long description</li>
        <li>browser zoom at 150%</li>
        <li>narrow mobile width</li>
        <li>wide desktop width</li>
      </ul>
      <p>
        If the layout still works, you have built something resilient. If it breaks,
        good. You found the problem before your users did. That is not failure. That
        is professional CSS.
      </p>

      <h2 id="final-css" class="title is-2">Final CSS</h2>
      <p>
        Here is the complete CSS for the lesson example:
      </p>
      <pre><code>{{ finalCss }}</code></pre>

      <h2 id="guided-practice" class="title is-2">Guided Practice</h2>
      <GuidedPractice
        title="Tune the project card grid"
        description="Adjust the card grid, then test whether the CSS still describes a reusable pattern instead of one perfect demo."
        :steps="guidedPracticeSteps"
        :success-criteria="guidedPracticeSuccessCriteria"
        success-criteria-title="You are on track if:"
      />

      <h2 id="independent-practice" class="title is-2">Independent Practice</h2>
      <IndependentPractice
        title="Independent Practice: Build a Latest Tutorials grid"
        description="Create a new card grid that reuses the same layout thinking with different content."
        task-title="Your Task:"
        task="<p>Create a section called <strong>Latest Tutorials</strong>. Include four tutorial cards, one featured tutorial, at least one card with no image, and at least one card with a long title.</p>"
        :requirements="[
          'Use a grid with auto-fit and minmax()',
          'Use clamp() for responsive spacing or sizing',
          'Add one :has() rule for content-aware layout',
          'Include one featured card that can move to a different tutorial',
          'Test the grid at narrow, medium, and wide widths'
        ]"
        :stretch-goals="[
          'Use subgrid where nested alignment actually helps',
          'Turn repeated values into simple custom properties for the next architecture lesson'
        ]"
        :rubric="independentPracticeRubric"
      />

      <div id="closure">
        <ClosureSection
          title="Lesson Complete: You Can Extend CSS Layouts"
          :key-takeaways="closureKeyTakeaways"
          :objectives="closureObjectives"
          :reflection-prompts="closureReflectionPrompts"
          real-world-application="<p>Modern CSS is not about memorising every new feature. It is about choosing the right tool for the layout problem in front of you.</p>"
          next-steps="Next, take this same component idea into Container Queries for Reusable Components, where the card responds to the space it lives in instead of only the browser width."
        />
      </div>

      <div class="tutorial-recommendations-section">
        <TutorialRecommendations
          :current-path="tutorialPath"
          :next-tutorial="baseRecommendations.nextTutorial"
          :related-tutorials="baseRecommendations.relatedTutorials"
          :practice-projects="baseRecommendations.practiceProjects"
          :resources="recommendationResources"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modern-css-layout-lesson pre {
  margin-block: 1.25rem 1.75rem;
}

.modern-css-layout-lesson pre + p {
  margin-top: 1.25rem;
}
</style>
