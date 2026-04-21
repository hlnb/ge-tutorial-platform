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
  title: 'Flexbox for Real Layouts',
  description: 'Apply CSS Flexbox to practical page layouts — navigation bars, card grids, and one-dimensional component patterns.',
  path: '/tutorials/intermediate/flexbox-for-real-layouts',
});

const sections = [
  { id: 'mental-model', title: 'Flexbox Mental Model' },
  { id: 'axis-thinking', title: 'Axis Thinking' },
  { id: 'navigation-patterns', title: 'Navigation Patterns' },
  { id: 'cards-and-groups', title: 'Cards and Content Groups' },
  { id: 'split-layouts', title: 'Split Layouts' },
  { id: 'wrapping-and-gap', title: 'Wrapping and Gap' },
  { id: 'not-flexbox', title: 'When Flexbox Is the Wrong Tool' },
  { id: 'responsive-checks', title: 'Responsive Checks' },
  { id: 'guided-practice', title: 'Guided Practice' },
  { id: 'independent-practice', title: 'Independent Practice' },
  { id: 'additional-resources', title: 'Additional Resources' },
  { id: 'recap', title: 'Recap' },
];

usePageSections(sections);

const checkpointQuestions = [
  {
    question: 'If a layout’s main relationship runs left to right, which axis is Flexbox primarily managing?',
    answer:
      'The main axis. That is why properties like justify-content control space distribution in that primary direction.',
  },
  {
    question: 'Why is a card body often a good use of flex-direction: column?',
    answer:
      'Because the card’s internal relationship usually runs top to bottom: title, text, metadata, and action all need a controlled vertical flow.',
  },
  {
    question: 'Predict what happens if a navigation cluster is built as one rigid row with no wrapping or gap strategy.',
    answer:
      'It is more likely to collide, overflow, or become cramped when the viewport narrows or the link text becomes longer.',
  },
];

const guidedPracticeSteps = [
  {
    title: 'Step 1: Set up the main relationship',
    instructions:
      '<p>Imagine a simple site header with a logo on the left and navigation links on the right. Apply <code>display: flex</code> to the header wrapper and decide how the items should relate along the main axis.</p><p>Your goal is not just to make the items sit in a row. Your goal is to make the relationship between the two sides clear.</p>',
    hints: [
      'Start by asking what should happen between the logo group and the nav group.',
      'If the main relationship is side to side, think about justify-content before you think about individual margins.',
    ],
  },
  {
    title: 'Step 2: Make the inner group behave well',
    instructions:
      '<p>Now style the navigation list itself as a flex container. Add <code>gap</code> and allow wrapping if needed.</p><p>This is where the layout becomes more resilient than a row built from manual spacing.</p>',
    hints: [
      'Use gap instead of assigning separate margins to each link.',
      'Wrapping matters when text length or viewport width changes.',
    ],
  },
  {
    title: 'Step 3: Check a second Flexbox use case',
    instructions:
      '<p>Apply the same thinking to a card or call-to-action row. Use Flexbox to control the relationship between the internal pieces, then decide what should happen when space gets tighter.</p>',
    hints: [
      'A card often behaves like a vertical flex layout.',
      'A two-part call-to-action row may need to become a column at smaller widths.',
    ],
  },
];

const guidedPracticeSuccessCriteria = [
  'You identified the main axis of the layout before choosing properties',
  'You used Flexbox for both a container-level relationship and an inner content group',
  'You used gap or wrapping to support the layout cleanly',
  'You can explain why Flexbox fits these examples better than one-off spacing tricks',
];

const independentPracticeRubric = [
  {
    criteria: 'Axis thinking',
    success: 'The layout choices clearly match the main direction of the content relationship.',
  },
  {
    criteria: 'Practical Flexbox use',
    success: 'Flexbox is used for real grouping or alignment problems rather than as a generic default.',
  },
  {
    criteria: 'Responsive resilience',
    success: 'The pattern still makes sense when content wraps or when the layout shifts for a smaller screen.',
  },
  {
    criteria: 'Tool choice',
    success: 'The learner can explain why this example is a Flexbox problem instead of a Grid or normal-flow problem.',
  },
];

const closureKeyTakeaways = [
  'Flexbox works best when the main layout job happens in one direction at a time.',
  'Axis thinking matters more than memorising property names.',
  'Gap, wrapping, and alignment decisions usually matter more in real layouts than centering tricks.',
  'Using Flexbox well includes knowing when to stop and choose Grid or normal flow instead.',
];

const closureObjectives = [
  'Explain the main axis and cross axis in practical terms',
  'Use Flexbox more deliberately in navigation, cards, and split content areas',
  'Handle wrapping and spacing in a way that survives responsive changes',
  'Recognise when a repeated layout problem is not really a Flexbox problem',
];

const closureReflectionPrompts = [
  {
    icon: 'fas fa-arrows-left-right',
    title: 'Axis Choices',
    questions: [
      'When you look at a layout now, can you tell whether the main relationship is horizontal or vertical?',
      'Which Flexbox rule feels easier to understand once you think in terms of a main axis?',
    ],
  },
  {
    icon: 'fas fa-columns',
    title: 'Tool Choice',
    questions: [
      'Which part of your page is truly one-dimensional, and which part is starting to become a grid?',
      'Where have you used Flexbox in the past when a different layout approach would have been clearer?',
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
            <a href="#" aria-current="page">Flexbox for Real Layouts</a>
          </li>
        </ul>
      </nav>

      <div class="tutorial-meta">
        <div class="tags">
          <span class="tag is-info">Intermediate</span>
          <span class="tag is-light">35 min</span>
          <span class="tag is-light">CSS</span>
          <span class="tag is-light">Flexbox</span>
        </div>
      </div>

      <h1 class="title is-1">Flexbox for Real Layouts</h1>

      <p class="subtitle is-5">
        Go beyond the basics with stronger Flexbox decisions for navigation, cards, footers, and split sections.
      </p>

      <AnticipatorySet
        title="Flexbox Is More Than Centering"
        icon="↔️"
        :hook="`<p>Many beginners first meet Flexbox through small examples: centering one box, pushing a logo to one side, or lining up a few links in a row. Those are useful starting points, but real sites ask more interesting questions.</p><p>How should a navigation bar behave when space gets tighter? How should a card footer push its button to the bottom? How should a call-to-action section keep two related pieces connected without becoming fragile?</p><p>This lesson is about using Flexbox as a layout tool, not just a trick.</p>`"
        :reflection-prompts="[
          'When you use Flexbox, do you usually think in terms of a row or column first?',
          'Have you ever made a layout work with Flexbox without feeling sure why it worked?',
          'Which parts of a homepage seem like one-direction layout problems rather than full grids?'
        ]"
        connection="This lesson prepares you for the component refactor in Black Swan Bistro Part 3 by making navigation, card groups, and shared layout patterns easier to reason about."
      />

      <LearningObjectives
        :objectives="[
          'Use axis thinking to make Flexbox choices more deliberately',
          'Apply Flexbox to navigation bars, card internals, and split content sections',
          'Handle wrapping, spacing, and alignment in ways that survive different screen widths',
          'Know when Flexbox is the right tool and when another layout method is better'
        ]"
        purpose="Intermediate CSS is not about memorising more properties. It is about choosing the right layout tool for the shape of the content. Flexbox is one of the most useful places to practise that habit."
        :prerequisites="[
          { topic: 'CSS Systems for Reusable Sections', link: '/tutorials/intermediate/css-systems-for-reusable-sections' },
          { topic: 'Flexbox Basics', link: '/tutorials/beginner/css-basics/flexbox' }
        ]"
      />

      <h2 id="mental-model">Flexbox Mental Model</h2>
      <p>
        Flexbox is strongest when your main layout problem happens in one direction. That
        direction might be horizontal, like a row of nav links, or vertical, like content
        stacked inside a card. The important part is that one relationship is primary.
      </p>
      <p>
        This is why Flexbox fits so many practical interface patterns:
      </p>
      <ul>
        <li>Navigation bars</li>
        <li>Button groups</li>
        <li>Header and footer clusters</li>
        <li>Card internals with title, text, and action</li>
        <li>Simple side-by-side content blocks</li>
      </ul>

      <div class="notification is-info is-light">
        <p><strong>Good question to ask first:</strong> what is the main direction of this relationship? If the answer is not clear, Flexbox may not be the best tool.</p>
      </div>

      <h2 id="axis-thinking">Think in Axes, Not Just Rows</h2>
      <p>
        The biggest shift from beginner Flexbox to intermediate Flexbox is axis thinking. A
        row is only one version of a main axis. A column is another.
      </p>

      <pre><code>.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}</code></pre>
      <figure class="tutorial-figure tutorial-figure--wide">
        <img
          src="/assets/images/tutorials/diagrams/tutorial-flexbox-main-axis-cross-axis.svg"
          alt="Flex container diagram showing the main axis running left to right and the cross axis running top to bottom around three items."
        />
        <figcaption>
          This is the key mental model for Flexbox. Once you know which direction is the main
          axis, properties like <code>justify-content</code> and <code>align-items</code>
          stop feeling random.
        </figcaption>
      </figure>

      <p>
        In the first example, the main axis runs left to right. In the second, the main axis
        runs top to bottom. The properties are not random. They are serving the chosen axis.
      </p>

      <h3>Practical translation</h3>
      <ul>
        <li><code>justify-content</code> controls distribution along the main axis</li>
        <li><code>align-items</code> controls alignment across the cross axis</li>
        <li><code>gap</code> creates consistent space between flex items</li>
      </ul>

      <CheckpointBox
        title="Checkpoint for Understanding"
        icon="🧭"
        description="Pause here and check whether the axis model is clear before you move into specific layout patterns."
        :questions="checkpointQuestions"
        answers-button-text="Show sample answers"
      />

      <h2 id="navigation-patterns">Use Flexbox for Navigation Patterns</h2>
      <p>
        Navigation is one of the clearest real-world Flexbox cases. You often need a logo or
        site title on one side and a cluster of links on the other.
      </p>

      <pre><code>.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.site-nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}</code></pre>

      <p>
        This is stronger than using margins to push links around one by one. It keeps the
        relationship between the logo and nav visible in the code.
      </p>

      <h3>Why this matters for BSB</h3>
      <ul>
        <li>The header pattern can be reused across multiple pages later.</li>
        <li>The nav links can wrap rather than colliding when space gets tighter.</li>
        <li>The layout intent stays readable when you return to the CSS later.</li>
      </ul>
      <figure class="tutorial-figure tutorial-figure--wide">
        <img
          src="/assets/images/tutorials/diagrams/tutorial-flexbox-common-patterns-panel.svg"
          alt="Three-panel diagram showing practical Flexbox patterns for navigation, card internals, and a split layout."
        />
        <figcaption>
          These are the kinds of one-direction relationships Flexbox handles well: clusters,
          card internals, and two-part layouts that stay connected as space changes.
        </figcaption>
      </figure>

      <h2 id="cards-and-groups">Use Flexbox Inside Cards and Content Groups</h2>
      <p>
        Flexbox is not only for page-level rows. It is also excellent inside repeated pieces.
        A card is often a small vertical layout problem: title, text, metadata, and action.
      </p>

      <pre><code>.card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
}

.card-action {
  margin-top: auto;
}</code></pre>

      <p>
        That last line is especially useful. It allows the action area to settle at the bottom
        of the card even when card content lengths differ. This makes repeated card layouts
        feel more stable.
      </p>

      <div class="box">
        <p><strong>Useful habit:</strong> use Flexbox inside a repeated component when the internal structure needs controlled vertical or horizontal relationships.</p>
      </div>

      <h2 id="split-layouts">Use Flexbox for Simple Split Layouts</h2>
      <p>
        Some sections contain two related pieces that need to sit side by side on wider
        screens: for example, text and image, booking copy and button, or address and opening
        hours. Flexbox is often the simplest tool for that job.
      </p>

      <pre><code>.cta-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.cta-row &gt; * {
  flex: 1 1 18rem;
}</code></pre>

      <p>
        This approach works well when the section is still fundamentally one-dimensional: two
        related items in one main relationship. If the layout starts needing strict rows and
        columns together, that is when Grid becomes a better conversation.
      </p>

      <h2 id="wrapping-and-gap">Treat Wrapping and Gap as First-Class Tools</h2>
      <p>
        Real layouts break when we pretend all content stays on one line forever. That is why
        <code>flex-wrap</code> and <code>gap</code> matter so much in practical CSS.
      </p>

      <ul>
        <li>Use <code>gap</code> instead of scattering margins across child elements.</li>
        <li>Use <code>flex-wrap</code> when a cluster of items needs to reflow gracefully.</li>
        <li>Test what happens when text becomes longer than expected.</li>
      </ul>

      <pre><code>.link-cluster {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
}</code></pre>

      <p>
        This is especially helpful for navigation, tag groups, social links, and footer link
        clusters.
      </p>

      <h2 id="not-flexbox">When Flexbox Is the Wrong Tool</h2>
      <p>
        Better Flexbox usage includes knowing when not to use it. Flexbox is not the answer to
        every layout problem.
      </p>
      <ul>
        <li>Use normal document flow when content can simply stack naturally.</li>
        <li>Use Grid when repeated content needs row and column relationships together.</li>
        <li>Do not force Flexbox into layouts that are really two-dimensional.</li>
      </ul>
      <figure class="tutorial-figure tutorial-figure--wide">
        <img
          src="/assets/images/tutorials/diagrams/tutorial-flexbox-vs-grid-vs-flow-chooser.svg"
          alt="Comparison guide explaining when to use normal flow, Flexbox, or Grid based on the shape of the content."
        />
        <figcaption>
          Better Flexbox usage includes knowing when to choose something else. If the layout
          stacks naturally, use normal flow. If it needs one main direction, use Flexbox. If
          it needs rows and columns together, use Grid.
        </figcaption>
      </figure>

      <div class="notification is-warning is-light">
        <p><strong>Common mistake:</strong> if you find yourself fighting widths, forcing equal rows, and manually controlling several directions at once, you may be trying to solve a Grid problem with Flexbox.</p>
      </div>

      <h2 id="responsive-checks">Responsive Checks for Flexbox Layouts</h2>
      <p>
        A Flexbox layout is only successful if it still makes sense when space changes. Before
        you trust a pattern, check these things:
      </p>
      <ul>
        <li>Does the content still read clearly when items wrap?</li>
        <li>Does the gap stay comfortable at smaller widths?</li>
        <li>Should the layout remain a row, or switch to a column?</li>
        <li>Are actions still reachable and readable when space tightens?</li>
      </ul>

      <pre><code>@media (max-width: 768px) {
  .cta-row {
    flex-direction: column;
    align-items: flex-start;
  }
}</code></pre>

      <p>
        This kind of change is easier once the original relationship is already clear. That is
        another reason Flexbox works well when the content has a strong main axis.
      </p>

      <h2 id="guided-practice">Guided Practice</h2>
      <GuidedPractice
        title="Build a small Flexbox layout on purpose"
        description="Use the lesson’s ideas to set up one-direction layout relationships more deliberately instead of relying on trial and error."
        :steps="guidedPracticeSteps"
        :success-criteria="guidedPracticeSuccessCriteria"
        success-criteria-title="You are on track if you can:"
      />

      <h2 id="independent-practice">Independent Practice</h2>
      <IndependentPractice
        title="Independent Practice: Choose the right Flexbox pattern"
        description="Now apply the concept in a slightly new layout situation without step-by-step guidance."
        task-title="Your Task:"
        task="<p>Sketch or build a small restaurant page section that includes <strong>two related content areas</strong>, such as a booking call-to-action, a footer link cluster, or an image-and-text promo row.</p><p>Use Flexbox deliberately to manage the main relationship, and decide what should happen when the layout gets narrower.</p>"
        :requirements="[
          'Use Flexbox for a clear one-dimensional layout relationship',
          'Include spacing with gap or another deliberate alignment choice',
          'Describe what should happen on a narrower screen',
          'Write one short note explaining why Flexbox fits this case'
        ]"
        :stretch-goals="[
          'Apply Flexbox both to the outer section and to one smaller repeated internal group',
          'Identify one part of the layout that should not use Flexbox and explain why'
        ]"
        :rubric="independentPracticeRubric"
      />

      <h2 id="additional-resources">Additional Resources</h2>
      <p>
        These are especially useful if you want to strengthen your practical Flexbox decision
        making:
      </p>
      <ul>
        <li>
          <a
            href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
            target="_blank"
            rel="noopener"
          >
            CSS-Tricks: A Complete Guide to Flexbox
          </a>
          &mdash; useful for revisiting the full property set with visual examples.
        </li>
        <li>
          Every Layout
          &mdash; useful for connecting Flexbox decisions to real patterns like cluster,
          sidebar, and stack.
        </li>
      </ul>

      <h2 id="recap">Recap</h2>
      <p>
        Flexbox becomes much more useful when you stop thinking of it as a centering shortcut
        and start seeing it as a tool for one-dimensional relationships. Navigation, card
        internals, footer clusters, and split sections all become easier once you think in
        axes, wrapping, and alignment.
      </p>

      <ClosureSection
        title="Lesson Complete: You Can Use Flexbox More Deliberately"
        :key-takeaways="closureKeyTakeaways"
        :objectives="closureObjectives"
        :reflection-prompts="closureReflectionPrompts"
        next-steps="Next, you will use these layout habits to think more clearly about reusable components before applying them in Black Swan Bistro Part 3."
      />

      <TutorialRecommendations :current-path="'/tutorials/intermediate/flexbox-for-real-layouts'" />
    </div>
  </div>
</template>
