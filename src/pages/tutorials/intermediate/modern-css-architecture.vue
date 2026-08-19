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

const tutorialPath = '/tutorials/intermediate/modern-css-architecture';

useTutorialHead({
  title: 'Modern CSS Architecture',
  description:
    'Learn how to organise CSS with design tokens, cascade layers, low specificity, utilities, and component-focused stylesheets that can scale.',
  path: tutorialPath,
});

const sections = [
  { id: 'architecture-matters', title: 'Why Architecture Matters' },
  { id: 'design-tokens', title: 'Design Tokens' },
  { id: 'responsibility-layers', title: 'CSS Responsibilities' },
  { id: 'cascade-layers', title: 'Cascade Layers' },
  { id: 'components-over-pages', title: 'Components Over Pages' },
  { id: 'specificity', title: 'Specificity' },
  { id: 'utilities', title: 'Utilities' },
  { id: 'naming-strategies', title: 'Naming Strategies' },
  { id: 'layout-vs-components', title: 'Layout vs Components' },
  { id: 'project-structure', title: 'Project Structure' },
  { id: 'refactoring-workflow', title: 'Refactoring Workflow' },
  { id: 'guided-practice', title: 'Guided Practice' },
  { id: 'independent-practice', title: 'Independent Practice' },
  { id: 'recap', title: 'Recap' },
  { id: 'closure', title: 'Closure' },
];

usePageSections(sections);

const learningObjectives = [
  {
    verb: 'Explain',
    text: 'Explain why CSS architecture matters once a site has more than a few pages',
  },
  {
    verb: 'Organise',
    text: 'Organise CSS into logical responsibility layers',
  },
  {
    verb: 'Separate',
    text: 'Separate layout rules from component styling',
  },
  {
    verb: 'Apply',
    text: 'Apply design tokens with CSS custom properties',
  },
  {
    verb: 'Choose',
    text: 'Choose a naming strategy that makes selectors predictable',
  },
  {
    verb: 'Reduce',
    text: 'Reduce specificity conflicts without relying on !important',
  },
  {
    verb: 'Build',
    text: 'Build maintainable stylesheets that can grow over time',
  },
];

const guidedPracticeSteps = [
  {
    title: 'Inventory the existing stylesheet',
    instructions:
      '<p>Read the stylesheet once without editing. Mark rules as <strong>base</strong>, <strong>layout</strong>, <strong>component</strong>, <strong>utility</strong>, or <strong>page-specific</strong>. Anything you cannot label is a signal that the selector may be doing too much.</p>',
    hints: [
      'Base rules usually target elements such as body, img, a, h1, or form controls.',
      'Layout rules usually talk about wrappers, grids, sections, gaps, columns, and flow.',
      'Component rules usually name a reusable thing: card, button, nav, hero, testimonial, form.',
    ],
  },
  {
    title: 'Move repeated values into tokens',
    instructions:
      '<p>Create a <code>:root</code> block for repeated colors, spacing values, radii, and shadows. Replace hard-coded duplicates with <code>var()</code> references where the meaning is stable.</p>',
    hints: [
      'Name tokens by purpose first: --color-brand, --space-section, --radius-card.',
      'Do not turn every one-off number into a token. Reuse and meaning matter.',
    ],
  },
  {
    title: 'Create the architecture layers',
    instructions:
      '<p>Split the stylesheet into a clear order: tokens, base, layout, components, utilities, and pages. If you are staying in one file for the exercise, use comments or <code>@layer</code> blocks to make the same structure visible.</p>',
    hints: [
      'The order should help the cascade, not fight it.',
      'Utilities should come late because they are meant to make small final adjustments.',
    ],
  },
  {
    title: 'Lower specificity on purpose',
    instructions:
      '<p>Replace long chains such as <code>.home .section .card .button</code> with a component class, a variant class, or a low-specificity wrapper using <code>:where()</code> where appropriate.</p>',
    hints: [
      'If you need four selectors to reach something, pause and ask whether the component needs its own class.',
      'A selector should explain the role of the element, not its whole family tree.',
    ],
  },
];

const guidedPracticeSuccessCriteria = [
  'Every rule has a clear home',
  'Repeated design decisions are stored as custom properties',
  'Layout selectors do not style component internals',
  'Component selectors can move to a different page without being renamed',
  'No new !important declarations are needed',
];

const independentPracticeRubric = [
  {
    criteria: 'Structure',
    success:
      'The stylesheet is organised into base, layout, component, utility, and page-specific responsibilities.',
  },
  {
    criteria: 'Tokens',
    success:
      'Repeated colors, spacing, border radii, and type decisions use meaningful custom properties.',
  },
  {
    criteria: 'Reuse',
    success:
      'Cards, buttons, navigation, and callouts can be reused without depending on a single page context.',
  },
  {
    criteria: 'Specificity',
    success:
      'Selectors stay short and predictable, and overrides do not require !important.',
  },
];

const closureKeyTakeaways = [
  'CSS architecture is about assigning responsibilities before the stylesheet becomes tangled.',
  'Design tokens turn repeated visual choices into named decisions.',
  'Cascade layers give broad categories of CSS a predictable order.',
  'Layout classes should place things; component classes should describe reusable interface pieces.',
  'Low specificity keeps future changes cheaper.',
];

const closureObjectives = [
  'Explain why CSS architecture matters',
  'Organise CSS into logical responsibility layers',
  'Separate layout and component styling',
  'Use custom properties as design tokens',
  'Choose a naming strategy for predictable selectors',
  'Avoid specificity wars and unnecessary !important declarations',
];

const closureReflectionPrompts = [
  {
    title: 'Architecture Check',
    icon: 'fas fa-layer-group',
    questions: [
      'Which part of your current CSS is easiest to change?',
      'Which part feels most likely to break when you add a new page?',
      'What naming or layering rule would remove the most uncertainty?',
    ],
  },
  {
    title: 'Next Refactor',
    icon: 'fas fa-code-branch',
    content:
      '<p>Choose one existing stylesheet and refactor only one category first. Tokens or components are usually the best starting point because they reveal repeated decisions quickly.</p>',
  },
];

const baseRecommendations = getTutorialRecommendations(tutorialPath);

const recommendationResources = [
  {
    title: 'Modern CSS Architecture worksheet',
    url: tutorialPath,
    description: 'GraphitEdge download being built.',
    type: 'coming soon',
  },
  {
    title: 'Black Swan Bistro stylesheet refactor checklist',
    url: tutorialPath,
    description: 'GraphitEdge download being built.',
    type: 'coming soon',
  },
  {
    title: 'MDN: Cascade layers',
    url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers',
    type: 'reference',
  },
  {
    title: 'MDN: Cascade and inheritance',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Cascade',
    type: 'reference',
  },
  {
    title: 'MDN: Using CSS custom properties',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties',
    type: 'reference',
  },
  {
    title: 'BEM naming guide',
    url: 'https://getbem.com/',
    type: 'reference',
  },
  {
    title: 'CUBE CSS',
    url: 'https://cube.fyi/',
    type: 'reference',
  },
];
</script>

<template>
  <div class="container section">
    <div class="tutorial-content modern-css-architecture content">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/tutorials">Tutorials</RouterLink></li>
          <li><RouterLink to="/tutorials/intermediate">Intermediate</RouterLink></li>
          <li class="is-active">
            <a href="#" aria-current="page">Modern CSS Architecture</a>
          </li>
        </ul>
      </nav>

      <div class="tags mb-4">
        <span class="tag is-info">Intermediate</span>
        <span class="tag is-light">CSS</span>
        <span class="tag is-light">Architecture</span>
        <span class="tag is-light">Cascade Layers</span>
      </div>

      <h1 class="title is-1">Modern CSS Architecture</h1>
      <p class="subtitle is-4">
        Build stylesheets that can grow without turning every future change into
        an override.
      </p>

      <AnticipatorySet
        title="The 500-line stylesheet moment"
        icon="fas fa-layer-group"
        hook="<p>You start with one tidy CSS file. A few weeks later, the homepage styles affect the menu page, the button has five slightly different versions, and nobody wants to touch the hero section because something always breaks.</p><p>That is not a failure of CSS. It is a sign that the stylesheet needs architecture.</p>"
        :reflection-prompts="[
          'Where would you currently add a new card style?',
          'How would you know whether an old selector is still safe to change?',
          'Which repeated values are already hiding in your CSS?'
        ]"
        connection="You will give your CSS a map: tokens, layers, components, utilities, and page-specific rules."
      />

      <LearningObjectives
        :objectives="learningObjectives"
        purpose="CSS architecture keeps your site flexible. It helps you reuse patterns, reduce accidental side effects, and make design changes without hunting through a pile of unrelated selectors."
        :prerequisites="[
          {
            topic: 'Cascade, specificity, and debugging CSS',
            link: '/tutorials/intermediate/cascade-specificity-and-debugging-css'
          },
          {
            topic: 'CSS systems for reusable sections',
            link: '/tutorials/intermediate/css-systems-for-reusable-sections'
          },
          {
            topic: 'Container queries for reusable components',
            link: '/tutorials/intermediate/container-queries-for-reusable-components'
          }
        ]"
      />

      <h2 id="architecture-matters" class="title is-2">
        Why Architecture Matters
      </h2>
      <p>
        A small website can survive with a single stylesheet and a few familiar
        selectors. A growing website needs stronger habits. Without them, CSS
        starts to behave like a shared drawer: everything is technically in one
        place, but finding the right thing becomes harder every week.
      </p>
      <p>
        Good CSS architecture answers practical questions before they become
        bugs:
      </p>
      <ul>
        <li>Where do site-wide defaults live?</li>
        <li>Where do repeated design decisions live?</li>
        <li>Which rules control layout, and which rules style components?</li>
        <li>How do we add a variant without breaking older pages?</li>
        <li>How do we override something without raising specificity again?</li>
      </ul>

      <div class="notification is-info is-light">
        <p>
          The goal is not to invent a complex system. The goal is to make the
          next honest change easier than the last one.
        </p>
      </div>

      <h2 id="design-tokens" class="title is-2">
        Principle 1: Design Systems First
      </h2>
      <p>
        Design tokens are named values for repeated decisions. In plain CSS,
        they are usually custom properties. Instead of scattering the same color
        or spacing value through many selectors, you give that decision a name.
      </p>

      <figure class="architecture-figure">
        <img
          src="/assets/images/tutorials/diagrams/tutorial-modern-css-architecture-tokens-to-components.svg"
          alt="Design tokens flowing from root custom properties into button, card, and callout components."
          width="960"
          height="540"
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          Tokens make reusable components feel like part of the same interface,
          even when they appear in different sections.
        </figcaption>
      </figure>

      <p>A hard-coded stylesheet tends to repeat decisions like this:</p>
      <pre><code>.card {
  padding: 24px;
  border-radius: 12px;
  background: #fffaf4;
  color: #232323;
}

.callout {
  padding: 24px;
  border-radius: 12px;
  background: #fffaf4;
  color: #232323;
}</code></pre>

      <p>A token-based version keeps the decision in one place:</p>
      <pre><code>:root {
  --color-text: #232323;
  --color-surface: #fffaf4;
  --space-card: 1.5rem;
  --radius-card: 0.75rem;
}

.card,
.callout {
  padding: var(--space-card);
  border-radius: var(--radius-card);
  background: var(--color-surface);
  color: var(--color-text);
}</code></pre>

      <p>
        Tokens should describe meaning. <code>--color-brand</code> is more useful
        than <code>--dark-red</code> if the color might change later. The name
        should tell you why the value exists.
      </p>

      <h2 id="responsibility-layers" class="title is-2">
        Principle 2: Organise CSS Into Responsibility Layers
      </h2>
      <p>
        Responsibility layers are the mental model for your stylesheet. They
        work whether your project has one CSS file, several imported files, or
        component-scoped CSS.
      </p>

      <figure class="architecture-figure">
        <img
          src="/assets/images/tutorials/diagrams/tutorial-modern-css-architecture-layer-stack.svg"
          alt="CSS responsibility layers from base defaults through tokens, layout, components, and utilities."
          width="960"
          height="540"
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          Layers keep broad defaults low and small intentional adjustments high.
        </figcaption>
      </figure>

      <div class="table-container">
        <table class="table is-bordered is-striped">
          <thead>
            <tr>
              <th>Layer</th>
              <th>Owns</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tokens</td>
              <td>Named design decisions</td>
              <td><code>--space-section</code>, <code>--color-brand</code></td>
            </tr>
            <tr>
              <td>Base</td>
              <td>Element defaults</td>
              <td><code>body</code>, <code>img</code>, <code>a</code></td>
            </tr>
            <tr>
              <td>Layout</td>
              <td>Page structure and placement</td>
              <td><code>.wrapper</code>, <code>.grid</code>, <code>.stack</code></td>
            </tr>
            <tr>
              <td>Components</td>
              <td>Reusable interface pieces</td>
              <td><code>.card</code>, <code>.site-nav</code>, <code>.button</code></td>
            </tr>
            <tr>
              <td>Utilities</td>
              <td>Small single-purpose adjustments</td>
              <td><code>.visually-hidden</code>, <code>.text-center</code></td>
            </tr>
            <tr>
              <td>Pages</td>
              <td>Rare page-specific compositions</td>
              <td><code>.menu-page</code>, <code>.about-intro</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="cascade-layers" class="title is-2">
        Principle 3: Use Cascade Layers for Predictable Order
      </h2>
      <p>
        CSS cascade layers let you declare the order of major stylesheet
        categories. That means a low-specificity utility in a later layer can
        intentionally beat a component rule in an earlier layer without adding
        selector weight.
      </p>

      <pre><code>@layer reset, tokens, base, layout, components, utilities;

@import url("./reset.css") layer(reset);
@import url("./tokens.css") layer(tokens);
@import url("./base.css") layer(base);
@import url("./layout.css") layer(layout);
@import url("./components.css") layer(components);
@import url("./utilities.css") layer(utilities);</code></pre>

      <p>
        You can also keep layers in one stylesheet while learning:
      </p>
      <pre><code>@layer components {
  .testimonial-card {
    padding: var(--space-card);
    border-radius: var(--radius-card);
  }
}

@layer utilities {
  .text-center {
    text-align: center;
  }
}</code></pre>

      <CheckpointBox
        title="Pause and Check: Do the layers make sense?"
        icon="fas fa-pause-circle"
        description="Before moving into selectors and naming, check your architecture map."
        :questions="[
          {
            question: 'Why should layout and component rules usually live apart?',
            answer: 'Layout controls where a thing sits in the page. Component CSS controls what that reusable thing looks like internally. Mixing them makes the component harder to reuse.'
          },
          {
            question: 'Why are custom properties useful for design tokens?',
            answer: 'They give repeated design decisions a single named source, so future changes can happen intentionally instead of through many hard-coded values.'
          },
          {
            question: 'What problem do cascade layers solve?',
            answer: 'They make category order explicit, reducing the need for heavier selectors just to win the cascade.'
          }
        ]"
        :tips="[
          'If a selector describes page placement, it probably belongs in layout.',
          'If a selector describes a reusable interface object, it probably belongs in components.',
          'If a class does exactly one small job, it may belong in utilities.'
        ]"
        answers-button-text="Show sample answers"
      />

      <h2 id="components-over-pages" class="title is-2">
        Principle 4: Prefer Components Over Page-Specific CSS
      </h2>
      <p>
        Page-specific CSS is sometimes necessary, but it should be the exception.
        If the same pattern appears on the homepage, menu page, and contact page,
        it deserves a component name.
      </p>
      <p>Prefer this:</p>
      <pre><code>.testimonial-card {
  display: grid;
  gap: var(--space-3);
  padding: var(--space-card);
  border: 1px solid var(--color-border);
}</code></pre>

      <p>Over this:</p>
      <pre><code>.home-page .reviews .box {
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid #ddd;
}</code></pre>

      <p>
        The first selector names a reusable object. The second selector names a
        location. Location-based selectors are fragile because they stop making
        sense when the content moves.
      </p>

      <h2 id="specificity" class="title is-2">
        Principle 5: Keep Specificity Low
      </h2>
      <p>
        Specificity is not bad. Unplanned specificity is the problem. Long
        descendant chains feel helpful at first because they target exactly what
        you can see, but they become expensive when you need to reuse or override
        the style.
      </p>

      <pre><code>/* Expensive to override */
.home-page main .feature-section article.card a.button {
  color: white;
}

/* Easier to reason about */
.button--primary {
  color: white;
}</code></pre>

      <p>
        Modern CSS also gives you tools such as <code>:where()</code>, which has
        zero specificity. It is useful for broad grouping selectors that should
        stay easy to override.
      </p>

      <pre><code>:where(.content) h2 {
  margin-block-start: var(--space-section);
}</code></pre>

      <div class="notification is-warning is-light">
        <p>
          Treat <code>!important</code> as a last resort. If you need it often,
          the stylesheet is telling you that order, naming, or specificity needs
          repair.
        </p>
      </div>

      <h2 id="utilities" class="title is-2">
        Principle 6: Use Utilities for Small, Honest Jobs
      </h2>
      <p>
        Utility classes are single-purpose helpers. They are useful when a small
        adjustment should not become a whole new component variant.
      </p>

      <pre><code>.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.text-center {
  text-align: center;
}</code></pre>

      <p>
        Utilities are best when the job is obvious and limited. A utility should
        not become a hiding place for complex design decisions that really belong
        in tokens or components.
      </p>

      <h2 id="naming-strategies" class="title is-2">
        Principle 7: Choose a Naming Strategy
      </h2>
      <p>
        Naming is architecture in miniature. A selector name should make it clear
        whether you are styling a component, a child element, a variant, a layout
        primitive, or a utility.
      </p>

      <div class="table-container">
        <table class="table is-bordered">
          <thead>
            <tr>
              <th>Strategy</th>
              <th>Useful Idea</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BEM</td>
              <td>Block, element, modifier naming</td>
              <td><code>.card__title</code>, <code>.card--featured</code></td>
            </tr>
            <tr>
              <td>CUBE CSS</td>
              <td>Composition, utility, block, exception</td>
              <td>Separate layout composition from reusable blocks</td>
            </tr>
            <tr>
              <td>ITCSS</td>
              <td>Layer styles from broad to specific</td>
              <td>Settings, tools, generic, elements, objects, components</td>
            </tr>
            <tr>
              <td>Utility-first</td>
              <td>Use small single-purpose classes heavily</td>
              <td>Good for controlled systems, noisy if used without rules</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        You do not need to copy a methodology perfectly. Choose the parts that
        answer your project's real problem. For GraphitEdge-style learning sites,
        a practical blend works well: tokens, low-specificity components,
        reusable layout primitives, and a small utility layer.
      </p>

      <h2 id="layout-vs-components" class="title is-2">
        Principle 8: Separate Layout from Components
      </h2>

      <figure class="architecture-figure">
        <img
          src="/assets/images/tutorials/diagrams/tutorial-modern-css-architecture-layout-vs-component.svg"
          alt="Layout CSS controls grids and wrappers while component CSS controls a reusable testimonial card."
          width="960"
          height="540"
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          If a card needs to move from a sidebar to a grid, it should not carry
          page layout assumptions with it.
        </figcaption>
      </figure>

      <p>
        A common beginner mistake is putting grid rules directly on a component
        because the component currently appears inside a grid. That couples the
        component to one page layout.
      </p>

      <pre><code>/* Layout primitive */
.responsive-grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
}

/* Reusable component */
.testimonial-card {
  display: grid;
  gap: var(--space-3);
  padding: var(--space-card);
  border-radius: var(--radius-card);
  background: var(--color-surface);
}</code></pre>

      <h2 id="project-structure" class="title is-2">
        Example Project Structure
      </h2>
      <p>
        Your exact file names can change, but the responsibilities should remain
        visible.
      </p>

      <pre><code>src/
  assets/
    styles/
      main.css
      tokens.css
      base.css
      layout.css
      components/
        button.css
        card.css
        navigation.css
      utilities.css
      pages/
        menu.css
        contact.css</code></pre>

      <p>
        If your project uses Vue single-file components, you may keep some
        component CSS inside the component file. The same principle still
        applies: global design tokens and layout primitives stay global, while
        component internals stay close to the component.
      </p>

      <h2 id="refactoring-workflow" class="title is-2">
        Refactoring Workflow: From Messy to Maintainable
      </h2>
      <ol>
        <li>Find repeated values and create tokens for the meaningful ones.</li>
        <li>Separate element defaults from layout classes.</li>
        <li>Rename repeated page patterns as components.</li>
        <li>Replace long selector chains with direct component or variant classes.</li>
        <li>Add utilities only for small, repeated, single-purpose adjustments.</li>
        <li>Check one real page after each move so you catch visual changes early.</li>
      </ol>

      <div class="notification is-success is-light">
        <p>
          Refactor in passes. Trying to perfect the whole stylesheet in one move
          creates too much risk. A calm architecture grows through small, visible
          improvements.
        </p>
      </div>

      <h2 id="guided-practice" class="title is-2">Guided Practice</h2>
      <GuidedPractice
        title="Refactor a growing stylesheet"
        description="Take a mixed stylesheet and give it a clear architecture without changing the visual design."
        :steps="guidedPracticeSteps"
        :success-criteria="guidedPracticeSuccessCriteria"
        success-criteria-title="Your refactor is working if:"
      />

      <h2 id="independent-practice" class="title is-2">
        Independent Practice
      </h2>
      <IndependentPractice
        title="Independent Practice: Architect the Black Swan Bistro CSS"
        icon="fas fa-dumbbell"
        description="Now apply the same decisions to a realistic small-business website."
        task-title="Your Task:"
        task="<p>Imagine the Black Swan Bistro site has grown from one homepage into a multi-page website. Refactor the stylesheet into clear CSS responsibilities: base, layout, components, utilities, and page-specific rules.</p><p>Do not redesign the site. Your job is to make the existing design easier to maintain.</p>"
        :requirements="[
          'Create a token list for brand colors, surface colors, spacing, border radius, and type scale',
          'Identify at least three reusable components such as cards, buttons, navigation, or menu item previews',
          'Separate layout primitives from component internals',
          'Replace at least two location-based selectors with reusable component selectors',
          'Write a short note explaining where you would avoid !important and why'
        ]"
        :stretch-goals="[
          'Add cascade layer names for each responsibility group',
          'Create one utility class and explain why it should not be a component variant',
          'Document one future design change that would now be easier'
        ]"
        :rubric="independentPracticeRubric"
      />

      <h2 id="recap" class="title is-2">Recap</h2>
      <p>
        Modern CSS architecture is not about making CSS look impressive. It is
        about making the stylesheet understandable after the easy stage is over.
        You now have a practical structure for deciding where rules belong:
        tokens for repeated decisions, base for defaults, layout for placement,
        components for reusable interface pieces, utilities for small jobs, and
        page files for rare local needs.
      </p>

      <div id="closure">
        <ClosureSection
          title="Lesson Complete: You Can Give CSS a System"
          :key-takeaways="closureKeyTakeaways"
          :objectives="closureObjectives"
          :reflection-prompts="closureReflectionPrompts"
          real-world-application="<p>When a client asks for a new page, a new card variation, or a brand color update, architecture decides whether that change feels routine or risky. Your stylesheet should help you make the next change with confidence.</p>"
          next-steps="<p>Next, practise applying this architecture to debugging and production workflows. Look for places where clear CSS responsibilities make problems easier to isolate.</p>"
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
.modern-css-architecture pre {
  margin-block: 1.25rem 1.75rem;
}

.modern-css-architecture pre + p {
  margin-top: 1.25rem;
}

.architecture-figure {
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid #e2d8cd;
  border-radius: 8px;
  background: #fffaf4;
}

.architecture-figure img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 6px;
}

.architecture-figure figcaption {
  margin-top: 0.75rem;
  color: #5f5a54;
  font-size: 0.95rem;
}

.modern-css-architecture .table-container {
  margin-block: 1.5rem 2rem;
}
</style>
