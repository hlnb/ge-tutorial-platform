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

const tutorialPath =
  '/tutorials/intermediate/container-queries-for-reusable-components';

useTutorialHead({
  title: 'Container Queries for Reusable Components',
  description:
    'Learn how container queries help reusable components respond to the space they live in, not just the size of the browser window.',
  path: tutorialPath,
});

const sections = [
  { id: 'component-space', title: 'Component Space' },
  { id: 'what-you-build', title: 'What You Build' },
  { id: 'starter-html', title: 'Starter HTML' },
  { id: 'base-css', title: 'Base CSS' },
  { id: 'media-query-limits', title: 'Media Query Limits' },
  { id: 'container-type', title: 'container-type' },
  { id: 'container-rules', title: '@container' },
  { id: 'component-variants', title: 'Component Variants' },
  { id: 'named-containers', title: 'Named Containers' },
  { id: 'container-units', title: 'Container Units' },
  { id: 'final-css', title: 'Final CSS' },
  { id: 'media-vs-container', title: 'Which Query?' },
  { id: 'defensive-testing', title: 'Defensive Testing' },
  { id: 'guided-practice', title: 'Guided Practice' },
  { id: 'independent-practice', title: 'Independent Practice' },
  { id: 'closure', title: 'Closure' },
];

usePageSections(sections);

const starterHtml = `<section class="demo-layout">
  <aside class="sidebar-card-zone">
    <h2>Sidebar</h2>
    <div class="card-container">
      <article class="tutorial-card">
        <img src="/images/css-layout.jpg" alt="CSS layout sketch" />
        <div class="tutorial-card__content">
          <p class="tutorial-card__level">Intermediate CSS</p>
          <h3>Container Queries for Reusable Components</h3>
          <p>Learn how components can respond to the space they live in.</p>
          <a href="#">Start tutorial</a>
        </div>
      </article>
    </div>
  </aside>

  <main class="main-card-zone">
    <h2>Tutorial Grid</h2>
    <div class="tutorial-grid">
      <div class="card-container">
        <article class="tutorial-card">
          <img src="/images/css-layout.jpg" alt="CSS layout sketch" />
          <div class="tutorial-card__content">
            <p class="tutorial-card__level">Intermediate CSS</p>
            <h3>Container Queries for Reusable Components</h3>
            <p>Learn how components can respond to the space they live in.</p>
            <a href="#">Start tutorial</a>
          </div>
        </article>
      </div>

      <div class="card-container">
        <article class="tutorial-card">
          <div class="tutorial-card__content">
            <p class="tutorial-card__level">Intermediate CSS</p>
            <h3>Modern CSS Architecture</h3>
            <p>Organise your CSS so it stays readable as your site grows.</p>
            <a href="#">Start tutorial</a>
          </div>
        </article>
      </div>
    </div>
  </main>

  <section class="featured-card-zone">
    <h2>Featured Tutorial</h2>
    <div class="card-container card-container--featured">
      <article class="tutorial-card">
        <img src="/images/css-layout.jpg" alt="CSS layout sketch" />
        <div class="tutorial-card__content">
          <p class="tutorial-card__level">Intermediate CSS</p>
          <h3>Breaking Layouts Into Reusable Components Without Chaos</h3>
          <p>
            Learn how to turn layout sections into reusable patterns that can move
            around your site without breaking.
          </p>
          <a href="#">Start tutorial</a>
        </div>
      </article>
    </div>
  </section>
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
  color: #1f1f1f;
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

.demo-layout {
  width: min(100% - 2rem, 72rem);
  margin-inline: auto;
  padding-block: clamp(2rem, 6vw, 5rem);
  display: grid;
  gap: 2rem;
}

.sidebar-card-zone,
.main-card-zone,
.featured-card-zone {
  padding: 1rem;
  border: 1px solid #ddd3c7;
  border-radius: 1rem;
  background: #fffaf4;
}

.tutorial-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
}`;

const defaultCardCss = `.tutorial-card {
  overflow: hidden;
  border: 1px solid #d8cec1;
  border-radius: 1rem;
  background: white;
}

.tutorial-card img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.tutorial-card__content {
  display: grid;
  gap: 0.75rem;
  padding: 1rem;
}

.tutorial-card__content > * {
  margin: 0;
}

.tutorial-card__level {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}`;

const mediaQueryCss = `@media (min-width: 50rem) {
  .tutorial-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}`;

const containerTypeCss = `.card-container {
  container-type: inline-size;
}`;

const firstContainerQueryCss = `@container (min-width: 32rem) {
  .tutorial-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .tutorial-card img {
    height: 100%;
    aspect-ratio: auto;
  }
}`;

const mediumContainerCss = `@container (min-width: 22rem) {
  .tutorial-card__content {
    padding: 1.25rem;
  }

  .tutorial-card h3 {
    font-size: 1.35rem;
  }
}`;

const wideContainerCss = `@container (min-width: 36rem) {
  .tutorial-card {
    display: grid;
    grid-template-columns: minmax(12rem, 0.8fr) 1.2fr;
  }

  .tutorial-card img {
    height: 100%;
    aspect-ratio: auto;
  }

  .tutorial-card__content {
    align-content: center;
  }
}`;

const namedContainerCss = `.card-container {
  container-name: tutorial-card;
  container-type: inline-size;
}

/* Shorthand version */
.card-container {
  container: tutorial-card / inline-size;
}

@container tutorial-card (min-width: 36rem) {
  .tutorial-card {
    display: grid;
    grid-template-columns: minmax(12rem, 0.8fr) 1.2fr;
  }
}`;

const containerUnitsCss = `.tutorial-card h3 {
  font-size: clamp(1.1rem, 5cqi, 1.6rem);
}

.tutorial-card__content {
  padding: clamp(1rem, 4cqi, 1.75rem);
}`;

const finalCss = `.card-container {
  container: tutorial-card / inline-size;
}

.tutorial-card {
  overflow: hidden;
  border: 1px solid #d8cec1;
  border-radius: 1rem;
  background: white;
}

.tutorial-card img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.tutorial-card__content {
  display: grid;
  gap: 0.75rem;
  padding: clamp(1rem, 4cqi, 1.75rem);
}

.tutorial-card__content > * {
  margin: 0;
}

.tutorial-card__level {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.tutorial-card h3 {
  font-size: clamp(1.1rem, 5cqi, 1.6rem);
  line-height: 1.15;
}

.tutorial-card a {
  justify-self: start;
}

@container tutorial-card (min-width: 22rem) {
  .tutorial-card__content {
    gap: 1rem;
  }
}

@container tutorial-card (min-width: 36rem) {
  .tutorial-card {
    display: grid;
    grid-template-columns: minmax(12rem, 0.8fr) 1.2fr;
  }

  .tutorial-card img {
    height: 100%;
    aspect-ratio: auto;
  }

  .tutorial-card__content {
    align-content: center;
  }

  .tutorial-card:not(:has(img)) {
    display: block;
  }
}`;

const pageMediaQueryCss = `@media (min-width: 60rem) {
  .demo-layout {
    grid-template-columns: 16rem 1fr;
  }

  .featured-card-zone {
    grid-column: 1 / -1;
  }
}`;

const componentContainerQueryCss = `@container tutorial-card (min-width: 36rem) {
  .tutorial-card {
    grid-template-columns: minmax(12rem, 0.8fr) 1.2fr;
  }
}`;

const testCasesHtml = `<h3>
  Understanding Container Queries When Your Component Lives Somewhere Deeply
  Inconvenient
</h3>

<article class="tutorial-card">
  <div class="tutorial-card__content">
    <p class="tutorial-card__level">Intermediate CSS</p>
    <h3>Modern CSS Architecture</h3>
    <p>Organise your CSS so your future self does not quietly resent you.</p>
    <a href="#">Start tutorial</a>
  </div>
</article>

<article class="tutorial-card">
  <img src="/images/css-layout.jpg" alt="CSS layout sketch" />
  <div class="tutorial-card__content">
    <p class="tutorial-card__level">Intermediate CSS</p>
    <h3>Subgrid and Layout Alignment</h3>
    <a href="#">Start tutorial</a>
  </div>
</article>`;

const containerWidthTestCss = `.test-narrow {
  width: 14rem;
}

.test-medium {
  width: 24rem;
}

.test-wide {
  width: 44rem;
}`;

const defensiveNoImageCss = `@container tutorial-card (min-width: 36rem) {
  .tutorial-card:not(:has(img)) {
    display: block;
  }
}`;

const checkpointQuestions = [
  {
    question:
      'What is the main difference between a media query and a container query?',
    answer:
      'A media query responds to viewport or device conditions. A container query responds to the size or state of a query container around the component.',
  },
  {
    question:
      'Why is .card-container a better query container than .tutorial-card in this example?',
    answer:
      'Container queries style descendants of the query container. The wrapper becomes the measured context, and the card inside can change safely.',
  },
  {
    question:
      'When should a page-level media query still be used?',
    answer:
      'Use media queries for broad page decisions such as navigation, page grid structure, print styles, motion preferences, colour scheme, and device or viewport conditions.',
  },
];

const guidedPracticeSteps = [
  {
    title: 'Step 1: Wrap one card',
    instructions:
      '<p>Add a <code>.card-container</code> wrapper around one <code>.tutorial-card</code>. Keep the card HTML itself reusable.</p>',
    hints: [
      'The wrapper is the container you measure.',
      'The card is the component that changes when the wrapper has enough room.',
    ],
  },
  {
    title: 'Step 2: Create the query container',
    instructions:
      '<p>Add <code>container: tutorial-card / inline-size;</code> to <code>.card-container</code>.</p>',
    hints: [
      'The name is optional at first, but it makes larger systems easier to read.',
      'inline-size usually means width in English-language page layouts.',
    ],
  },
  {
    title: 'Step 3: Add a medium state',
    instructions:
      '<p>Use <code>@container tutorial-card (min-width: 22rem)</code> to increase the card content gap or padding.</p>',
    hints: [
      'Small variant changes can happen before a full layout change.',
      'This is a good place to tune spacing, not redesign the whole card.',
    ],
  },
  {
    title: 'Step 4: Add a wide state',
    instructions:
      '<p>Use <code>@container tutorial-card (min-width: 36rem)</code> to make image-based cards horizontal.</p>',
    hints: [
      'Check cards with and without images.',
      'A no-image card may need a defensive rule so it does not become an awkward empty two-column layout.',
    ],
  },
  {
    title: 'Step 5: Move the same card',
    instructions:
      '<p>Place the same card in a narrow sidebar, a grid column, and a wide feature area. The HTML should stay the same while the available space changes.</p>',
    hints: [
      'If you need separate classes for every location, the component is not doing enough reusable work yet.',
      'Watch the container, not just the browser width.',
    ],
  },
];

const guidedPracticeSuccessCriteria = [
  'The wrapper has a named query container',
  'The card has a narrow default layout',
  'The medium state improves spacing without changing the whole component',
  'The wide state creates a horizontal card only when the container has room',
  'The same component works in at least three layout contexts',
];

const independentPracticeRubric = [
  {
    criteria: 'Container setup',
    success:
      'The resource card has a wrapper that uses container-type or the container shorthand, including one named container.',
  },
  {
    criteria: 'Component variants',
    success:
      'The component has a narrow default state and at least two @container rules for wider available space.',
  },
  {
    criteria: 'Container units',
    success:
      'At least one size or spacing value uses a container query unit such as cqi.',
  },
  {
    criteria: 'Defensive testing',
    success:
      'The card is tested with a long title, missing image, missing description, narrow container, and wide container.',
  },
];

const additionalResources = [
  {
    title: 'MDN: CSS container queries',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries',
    description:
      'MDN guide to container queries, container-type, named containers, and container query units.',
  },
  {
    title: 'MDN: @container',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@container',
    description:
      'Reference for the @container at-rule and supported query conditions.',
  },
  {
    title: 'MDN: container',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/container',
    description:
      'Reference for the container shorthand that combines container-name and container-type.',
  },
  {
    title: 'web.dev: Learn CSS container queries',
    url: 'https://web.dev/learn/css/container-queries',
    description:
      'A practical explanation of how container queries fit into responsive component design.',
  },
];

const baseRecommendations = getTutorialRecommendations(tutorialPath);
const recommendationResources = [
  ...baseRecommendations.resources,
  ...additionalResources,
];

const closureKeyTakeaways = [
  'Media queries respond to the viewport or device; container queries respond to component context.',
  'A size container query needs a containment context, usually with container-type: inline-size.',
  'Named containers make larger component systems easier to reason about.',
  'Container query units such as cqi let type and spacing scale with component space.',
  'Reusable components need narrow defaults and defensive tests for imperfect content.',
];

const closureObjectives = [
  'Explain why media queries are not always enough for reusable components',
  'Create a query container with container-type or the container shorthand',
  'Use @container to change component styles based on container width',
  'Use named containers to target a specific layout context',
  'Use container query units such as cqi, cqw, cqmin, and cqmax',
  'Stress-test a reusable component with long, missing, narrow, and wide content cases',
];

const closureReflectionPrompts = [
  {
    icon: 'fas fa-box',
    title: 'Reusable Components',
    questions: [
      'Where have you previously used a media query to solve a component-level problem?',
      'How would a container query have made that component easier to reuse?',
    ],
  },
  {
    icon: 'fas fa-vial',
    title: 'Stress Testing',
    questions: [
      'Which stress test revealed the weakest part of your card layout?',
      'What narrow default should your component always be able to fall back to?',
    ],
  },
];
</script>

<template>
  <div class="container section">
    <div class="tutorial-content container-query-lesson">
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
            <a href="#" aria-current="page">
              Container Queries for Reusable Components
            </a>
          </li>
        </ul>
      </nav>

      <div class="tutorial-meta">
        <div class="tags">
          <span class="tag is-info">Intermediate</span>
          <span class="tag is-light">50-70 min</span>
          <span class="tag is-light">CSS</span>
          <span class="tag is-light">Responsive Design</span>
          <span class="tag is-light">Modern CSS</span>
        </div>
      </div>

      <h1 class="title is-1">Container Queries for Reusable Components</h1>

      <p class="subtitle is-5">
        Build a tutorial card that responds to the space it lives in, not just
        the size of the browser window.
      </p>

      <AnticipatorySet
        title="The Browser Window Is Not Always the Problem"
        icon="CSS"
        :hook="`<p>You have already used media queries. They are useful, familiar, and they have carried responsive design for years.</p><p>A media query asks: <strong>How wide is the browser window?</strong> That is helpful when you are designing a whole page. But a reusable card might appear in a three-column grid, a narrow sidebar, a dashboard panel, or a wide featured area. The browser can be wide while the card itself is squeezed.</p><p>A container query asks a better component question: <strong>How much space does this component actually have?</strong></p>`"
        :reflection-prompts="[
          'Have you ever had a card look fine on the main page but cramped in a sidebar?',
          'Which parts of a component should depend on page width, and which should depend on local space?',
          'What would improve if a component could adapt wherever it was placed?'
        ]"
        connection="This lesson follows Modern CSS Layout Extensions. You have already seen responsive grids, minmax(), clamp(), and :has(). Now you will make the component itself respond to its own layout context."
      />

      <LearningObjectives
        :objectives="[
          'Explain why media queries are not always enough for reusable components',
          'Create a query container with container-type',
          'Use @container to change component styles based on container width',
          'Use named containers to target a specific layout context',
          'Use container query units such as cqi, cqw, cqmin, and cqmax',
          'Build component variants based on available space',
          'Decide when to use media queries and when to use container queries',
          'Stress-test a reusable component with long content, missing content, and narrow containers'
        ]"
        purpose="Container queries make responsive CSS more local. They let a reusable component adapt to the space around it instead of assuming the viewport tells the whole story."
        :prerequisites="[
          { topic: 'CSS Grid for Repeated Layouts', link: '/tutorials/intermediate/css-grid-for-repeated-layouts' },
          { topic: 'Responsive Refinement for Reusable Components', link: '/tutorials/intermediate/responsive-refinement-for-reusable-components' },
          { topic: 'Modern CSS Layout Extensions', link: '/tutorials/intermediate/modern-css-layout-extensions' }
        ]"
      />

      <h2 id="component-space" class="title is-2">
        Media Queries Look Outward. Container Queries Look Nearby.
      </h2>
      <p>
        A media query responds to the viewport, device, or user preference. A
        container query responds to an ancestor container around the component.
        That small shift changes how reusable CSS feels.
      </p>
      <p>
        Instead of writing one set of rules for a card in the main layout and
        another set for the same card in a sidebar, you can teach the card how to
        respond to the space it actually has.
      </p>

      <figure class="tutorial-figure tutorial-figure--wide concept-query-figure">
        <figcaption class="concept-query-brief">
          Concept graphic placeholder: compare a media query responding to the
          viewport with container queries responding to three differently sized
          component containers.
        </figcaption>
        <div class="query-diagram" aria-hidden="true">
          <div class="query-panel">
            <p class="query-label">Media query</p>
            <div class="browser-frame">
              <div class="viewport-line"></div>
              <div class="mini-card mini-card--wide"></div>
            </div>
            <p>Responds to viewport width</p>
          </div>
          <div class="query-panel">
            <p class="query-label">Container query</p>
            <div class="browser-frame browser-frame--containers">
              <div class="container-box container-box--small">
                <div class="mini-card"></div>
              </div>
              <div class="container-box container-box--medium">
                <div class="mini-card"></div>
              </div>
              <div class="container-box container-box--large">
                <div class="mini-card mini-card--wide"></div>
              </div>
            </div>
            <p>Responds to available component space</p>
          </div>
        </div>
      </figure>

      <h2 id="what-you-build" class="title is-2">What You Will Build</h2>
      <p>
        You will build one reusable tutorial card component. The same card will
        appear in three places:
      </p>
      <ol>
        <li>a narrow sidebar</li>
        <li>a standard tutorial grid</li>
        <li>a featured wide area</li>
      </ol>
      <p>
        The component will have a narrow stacked layout, a medium state with more
        comfortable spacing, and a wide horizontal layout when the container has
        enough room.
      </p>

      <h2 id="starter-html" class="title is-2">Starter HTML</h2>
      <p>
        Start with three different layout areas. Each one uses the same
        <code>.tutorial-card</code> component inside a <code>.card-container</code>
        wrapper.
      </p>
      <pre><code>{{ starterHtml }}</code></pre>

      <h2 id="base-css" class="title is-2">Base CSS</h2>
      <p>
        Add the basic page and layout styling first. This gives the example a
        readable structure before the component starts responding to its
        container.
      </p>
      <pre><code>{{ baseCss }}</code></pre>
      <p>Then add the default card styling:</p>
      <pre><code>{{ defaultCardCss }}</code></pre>
      <p>
        At this point, the card is reusable, but it does not yet know how much
        space it has. That is what container queries will add.
      </p>

      <h2 id="media-query-limits" class="title is-2">
        Why Media Queries Are Not Enough for Reusable Components
      </h2>
      <p>A media query responds to the viewport:</p>
      <pre><code>{{ mediaQueryCss }}</code></pre>
      <p>
        This says that when the browser is at least <code>50rem</code> wide, every
        tutorial card becomes horizontal. That might work on one page. It starts
        to wobble when one of those cards is inside a narrow sidebar.
      </p>
      <p>
        The browser is wide, so the media query applies. The sidebar is narrow,
        so the card gets squashed. The problem is not that media queries are bad.
        The problem is that the viewport is not always the thing the component
        needs to respond to.
      </p>

      <CheckpointBox
        title="Checkpoint: Media query or container query?"
        icon="CSS"
        description="Choose the query based on the question the layout is asking."
        :questions="checkpointQuestions"
        :tips="[
          'If the whole page layout needs to change, use a media query.',
          'If a reusable component needs to adapt to its own available space, use a container query.',
          'Media queries and container queries can work together.'
        ]"
        answers-button-text="Show sample answers"
      />

      <h2 id="container-type" class="title is-2">
        Step 1: Create a Query Container with container-type
      </h2>
      <p>
        Before you can query a container, tell the browser which element should
        behave as a query container:
      </p>
      <pre><code>{{ containerTypeCss }}</code></pre>
      <p>
        This creates a containment context based on the container's
        <code>inline-size</code>. In most English-language layouts, that means
        horizontal width.
      </p>
      <p>
        Use <code>container-type: inline-size</code> most of the time for cards,
        panels, lists, and navigation components. It means "watch this
        container's width." The broader <code>size</code> value watches both
        inline and block dimensions, which is useful less often and can be more
        restrictive.
      </p>

      <div class="notification is-info is-light">
        <p>
          <strong>Important:</strong> the query container is usually not the
          component itself. In this example, <code>.card-container</code> is the
          query container. The <code>.tutorial-card</code> inside it changes.
        </p>
      </div>

      <h2 id="container-rules" class="title is-2">Step 2: Use @container</h2>
      <p>
        Once a query container exists, use <code>@container</code> to apply styles
        when that container reaches a certain size:
      </p>
      <pre><code>{{ firstContainerQueryCss }}</code></pre>
      <p>
        The browser is not checking the viewport here. It is checking the nearest
        ancestor with a containment context. Now the same card can be stacked in a
        narrow sidebar and horizontal in a wider feature area.
      </p>
      <p>Same component. Different container. Better behaviour.</p>

      <h2 id="component-variants" class="title is-2">
        Step 3: Add Component Variants
      </h2>
      <p>
        Components do not need to jump from tiny to huge. You can create smaller
        layout adjustments first:
      </p>
      <pre><code>{{ mediumContainerCss }}</code></pre>
      <p>Then add the larger layout change:</p>
      <pre><code>{{ wideContainerCss }}</code></pre>
      <p>
        The narrow state stays as the default. The medium state adds breathing
        room. The wide state becomes horizontal. This is the real power of
        container queries: the component becomes responsive to its own available
        space.
      </p>

      <CheckpointBox
        title="Checkpoint: Component variants"
        icon="CSS"
        description="A component variant is a version of the same component that changes based on context."
        :questions="[
          {
            question: 'Why should the narrow version be the default?',
            answer: 'A narrow default keeps the component safe in tight spaces, old layouts, sidebars, and small screens. Wider states can enhance from there.'
          },
          {
            question: 'What makes this different from adding a class for every layout location?',
            answer: 'The same component can respond to available space without needing separate sidebar, grid, and feature classes for the card itself.'
          }
        ]"
        answers-button-text="Show sample answers"
      />

      <h2 id="named-containers" class="title is-2">Step 4: Named Containers</h2>
      <p>
        So far, the <code>@container</code> rule uses the nearest available query
        container. That is fine for many components. Sometimes, especially in
        nested layouts, you may want to target a specific container.
      </p>
      <pre><code>{{ namedContainerCss }}</code></pre>
      <p>
        Named containers are useful when components are nested, several parent
        elements have <code>container-type</code>, or you want to be explicit
        about which container controls the style.
      </p>
      <p>
        For this lesson, use <code>container: tutorial-card / inline-size</code>.
        It is compact and clear.
      </p>

      <h2 id="container-units" class="title is-2">
        Step 5: Container Query Units
      </h2>
      <p>
        Container query units are length units based on the query container. They
        are similar in spirit to viewport units like <code>vw</code> and
        <code>vh</code>, except they relate to the container instead of the
        browser window.
      </p>
      <div class="table-container">
        <table class="table is-bordered">
          <thead>
            <tr>
              <th>Unit</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>cqw</code></td>
              <td>1% of the query container's width</td>
            </tr>
            <tr>
              <td><code>cqh</code></td>
              <td>1% of the query container's height</td>
            </tr>
            <tr>
              <td><code>cqi</code></td>
              <td>1% of the query container's inline size</td>
            </tr>
            <tr>
              <td><code>cqb</code></td>
              <td>1% of the query container's block size</td>
            </tr>
            <tr>
              <td><code>cqmin</code></td>
              <td>The smaller value of <code>cqi</code> or <code>cqb</code></td>
            </tr>
            <tr>
              <td><code>cqmax</code></td>
              <td>The larger value of <code>cqi</code> or <code>cqb</code></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>For most component work, start with <code>cqi</code>:</p>
      <pre><code>{{ containerUnitsCss }}</code></pre>
      <p>
        This makes text and spacing feel more naturally responsive inside
        different layout areas. Not because the page changed. Because the
        component's own available space changed.
      </p>

      <CheckpointBox
        title="Checkpoint: Container units"
        icon="CSS"
        description="Viewport units respond to the browser window. Container query units respond to the query container."
        :questions="[
          {
            question: 'Why is cqi often more useful than vw inside a reusable card?',
            answer: 'cqi scales with the card container, while vw scales with the whole browser window. A sidebar card should not size its heading as though it owned the full viewport.'
          }
        ]"
        answers-button-text="Show sample answer"
      />

      <h2 id="final-css" class="title is-2">Step 6: Final Component CSS</h2>
      <p>Here is the finished version of the component CSS:</p>
      <pre><code>{{ finalCss }}</code></pre>

      <h2 id="media-vs-container" class="title is-2">
        Media Queries vs Container Queries
      </h2>
      <p>
        Media queries are not wrong. They are still useful. The trick is knowing
        which question you are asking.
      </p>
      <div class="table-container">
        <table class="table is-bordered">
          <thead>
            <tr>
              <th>Use media queries when...</th>
              <th>Use container queries when...</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The whole page layout needs to change</td>
              <td>A component needs to adapt to its own available space</td>
            </tr>
            <tr>
              <td>You are responding to viewport width</td>
              <td>You are responding to parent or container width</td>
            </tr>
            <tr>
              <td>You are changing page-level navigation</td>
              <td>You are changing a card, panel, widget, or component layout</td>
            </tr>
            <tr>
              <td>You need print, motion, colour scheme, or device preferences</td>
              <td>You need component-level responsive behaviour</td>
            </tr>
            <tr>
              <td>You are setting broad layout rules</td>
              <td>You are making reusable components more flexible</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Example media query:</p>
      <pre><code>{{ pageMediaQueryCss }}</code></pre>
      <p>Example container query:</p>
      <pre><code>{{ componentContainerQueryCss }}</code></pre>
      <p>
        Use both. Just do not ask media queries to solve every component problem.
        That is how stylesheets become a cupboard full of mystery cables.
      </p>

      <h2 id="defensive-testing" class="title is-2">
        Common Mistakes and Defensive Testing
      </h2>
      <p>
        Reusable components often receive imperfect content. A component that only
        works with perfect demo copy is not reusable yet.
      </p>
      <h3 class="title is-3">Common mistakes</h3>
      <ul class="content">
        <li>
          <strong>Forgetting <code>container-type</code>:</strong> without an
          eligible query container, the browser has nothing useful to query.
        </li>
        <li>
          <strong>Putting the container on the wrong element:</strong> container
          queries style descendants, so a wrapper is usually clearer.
        </li>
        <li>
          <strong>Using container queries for everything:</strong> page-level
          layout decisions still belong with media queries.
        </li>
        <li>
          <strong>Forgetting narrow states:</strong> start with the safe stacked
          layout, then enhance it.
        </li>
        <li>
          <strong>Not testing missing content:</strong> cards without images or
          descriptions should still look intentional.
        </li>
      </ul>

      <h3 class="title is-3">Defensive test cases</h3>
      <p>Add these cases to your HTML:</p>
      <pre><code>{{ testCasesHtml }}</code></pre>
      <p>Then test the same component in different container widths:</p>
      <pre><code>{{ containerWidthTestCss }}</code></pre>
      <p>
        If a no-image card looks odd in the wide layout, add a defensive rule:
      </p>
      <pre><code>{{ defensiveNoImageCss }}</code></pre>

      <CheckpointBox
        title="Checkpoint: Defensive component thinking"
        icon="CSS"
        description="A reusable component should not rely on perfect content."
        :questions="[
          {
            question: 'What should you test before reusing a card across a site?',
            answer: 'Test long content, missing content, narrow containers, wide containers, and browser zoom.'
          },
          {
            question: 'Why is finding a broken stress case useful?',
            answer: 'It shows where the component needs a stronger default, a defensive rule, or a simpler variant before real users encounter the problem.'
          }
        ]"
        answers-button-text="Show sample answers"
      />

      <h2 id="guided-practice" class="title is-2">Guided Practice</h2>
      <GuidedPractice
        title="Build the reusable tutorial card"
        description="Create the query container, add component variants, then move the same card through different layout contexts."
        :steps="guidedPracticeSteps"
        :success-criteria="guidedPracticeSuccessCriteria"
        success-criteria-title="You are on track if:"
      />

      <h2 id="independent-practice" class="title is-2">
        Independent Practice
      </h2>
      <IndependentPractice
        title="Independent Practice: Create a reusable resource card"
        icon="CSS"
        description="Now apply the same responsive component thinking to a new card."
        task-title="Your Task:"
        task="<p>Create a <code>.resource-card</code> component with an optional image, category label, title, short description, and link. Place the same card in a narrow sidebar, a standard grid column, and a wide featured area.</p><p>After testing, write a short reflection answering: did the component respond to the viewport, or to the space it actually had?</p>"
        :requirements="[
          'Use container-type or the container shorthand',
          'Use at least two @container rules',
          'Use one named container',
          'Use one container query unit such as cqi',
          'Include one narrow default layout and one wide layout variant',
          'Test a long title, missing image, missing description, narrow width, and wide width'
        ]"
        :stretch-goals="[
          'Add a defensive :has() rule for optional images',
          'Compare one media query and one container query in a short note'
        ]"
        :rubric="independentPracticeRubric"
      />

      <div id="closure">
        <ClosureSection
          title="Lesson Complete: You Can Build Context-Aware Components"
          :key-takeaways="closureKeyTakeaways"
          :objectives="closureObjectives"
          :reflection-prompts="closureReflectionPrompts"
          real-world-application="<p>Container queries change the mental model from <strong>how wide is the browser?</strong> to <strong>how much space does this component have?</strong> That one distinction makes reusable CSS calmer and easier to maintain.</p>"
          next-steps="<p>Next, move into Modern CSS Architecture. You will connect layout primitives, component styles, custom properties, cascade layers, and reusable patterns so your CSS stays understandable as the project grows.</p>"
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
.container-query-lesson pre {
  margin-block: 1.25rem 1.75rem;
}

.container-query-lesson pre + p {
  margin-top: 1.25rem;
}

.concept-query-figure {
  padding: 1.25rem;
}

.concept-query-brief {
  margin-block-end: 1rem;
}

.query-diagram {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
  gap: 1rem;
}

.query-panel {
  display: grid;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid #d8cec1;
  border-radius: 0.5rem;
  background: #fffaf4;
}

.query-panel p {
  margin: 0;
}

.query-label {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #4b88a2;
}

.browser-frame {
  min-height: 10rem;
  padding: 1rem;
  border: 2px solid #4b88a2;
  border-radius: 0.5rem;
  background: #ffffff;
}

.browser-frame--containers {
  display: grid;
  gap: 0.75rem;
  align-items: end;
}

.viewport-line {
  height: 0.25rem;
  margin-block-end: 2rem;
  border-radius: 999px;
  background: #4b88a2;
}

.container-box {
  padding: 0.4rem;
  border: 1px dashed #8d0000;
  border-radius: 0.4rem;
}

.container-box--small {
  width: 38%;
}

.container-box--medium {
  width: 62%;
}

.container-box--large {
  width: 100%;
}

.mini-card {
  min-height: 2.5rem;
  border-radius: 0.35rem;
  background:
    linear-gradient(90deg, #ffd166 0 35%, transparent 35%),
    linear-gradient(#e8edf0 0 0);
}

.mini-card--wide {
  min-height: 4rem;
  background:
    linear-gradient(90deg, #ffd166 0 32%, #e8edf0 32%),
    linear-gradient(#ffffff 0 0);
}
</style>
