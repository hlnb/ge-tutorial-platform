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
  title: 'Modern CSS Layout Extensions',
  description:
    'Extend Flexbox and Grid with intrinsic sizing, fluid CSS functions, subgrid, :has(), aspect-ratio, logical properties, and layout stress testing.',
  path: '/tutorials/intermediate/modern-css-layout-extensions',
});

const sections = [
	{ id: 'content-driven-layout', title: 'Content-Driven Layout' },
	{ id: 'intrinsic-sizing', title: 'Intrinsic Sizing' },
	{ id: 'fluid-functions', title: 'Fluid Functions' },
	{ id: 'flexible-grid', title: 'Flexible Grid' },
	{ id: 'subgrid', title: 'Subgrid' },
	{ id: 'has-selector', title: ':has()' },
	{ id: 'aspect-ratio', title: 'Aspect Ratio' },
	{ id: 'logical-properties', title: 'Logical Properties' },
	{ id: 'progressive-enhancement', title: 'Progressive Enhancement' },
	{ id: 'stress-testing', title: 'Stress Testing' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'recap', title: 'Recap' },
	{ id: 'additional-resources', title: 'Additional Resources' },
];

usePageSections(sections);

const anticipatoryHook = `
	<p>Flexbox and Grid remain the foundations of most CSS layouts. Modern CSS does not replace them. It gives those tools better ways to respond to real content.</p>
	<p>Instead of telling the browser every exact width, height, and breakpoint, you can provide useful limits and let the browser make sensible layout decisions inside those limits.</p>
	<p>This lesson extends what you already know about responsive design into more resilient layout work: content-sized elements, fluid values, flexible grids, optional content, media proportions, logical spacing, and stress testing.</p>
`;

const checkpointQuestions = [
	{
		question:
			'What is the difference between a rigid layout and a resilient layout?',
		answer:
			'A rigid layout depends on exact dimensions and carefully chosen content. A resilient layout defines constraints so content can grow, shrink, wrap, or adapt without breaking the design.',
	},
	{
		question:
			'Why does repeat(auto-fit, minmax(min(100%, 18rem), 1fr)) protect a card grid better than repeat(3, 1fr)?',
		answer:
			'It lets the browser create as many useful columns as will fit, protects each card from becoming too narrow, and avoids overflow when the container is narrower than the preferred minimum.',
	},
	{
		question: 'When is :has() worth using?',
		answer:
			'Use :has() when the component should respond to a simple content relationship, such as whether a card contains an image or whether a form group contains an invalid input.',
	},
];

const guidedPracticeSteps = [
	{
		title: 'Step 1: Create the practice page',
		instructions:
			'<p>Create a folder called <code>modern-layout-extensions</code> with <code>index.html</code> and <code>styles.css</code>. Build a simple article-card section with a header, hero, and at least three cards.</p>',
		hints: [
			'Use semantic HTML: header, nav, main, section, article, and headings.',
			'Start with a rigid three-column grid so you can improve it deliberately.',
		],
	},
	{
		title: 'Step 2: Replace rigid dimensions with constraints',
		instructions:
			'<p>Look for fixed widths, fixed heights, and card-specific breakpoints. Replace them with <code>min()</code>, <code>max-width</code>, <code>fit-content</code>, <code>minmax()</code>, or natural sizing where appropriate.</p>',
		hints: [
			'The wrapper pattern <code>width: min(100% - 2rem, 72rem)</code> is a strong starting point.',
			'Use <code>width: fit-content</code> for small labels that should hug their content.',
		],
	},
	{
		title: 'Step 3: Make spacing, type, and columns fluid',
		instructions:
			'<p>Use <code>clamp()</code> for a heading size, section spacing, or grid gap. Then replace fixed grid columns with <code>repeat(auto-fit, minmax(min(100%, 18rem), 1fr))</code>.</p>',
		hints: [
			'Keep rem values in your clamp minimum and maximum so user text preferences still matter.',
			'Test the middle value across narrow, medium, and wide viewport widths.',
		],
	},
	{
		title: 'Step 4: Add content-aware and media-aware refinements',
		instructions:
			'<p>Use <code>aspect-ratio</code> for card images, logical properties for spacing, and a simple <code>:has()</code> selector for cards with optional images. Add <code>@supports</code> if you try subgrid as an enhancement.</p>',
		hints: [
			'Keep :has() selectors readable. A simple selector is easier to maintain than a logic puzzle.',
			'Use <code>object-fit: contain</code> instead of cover for screenshots, diagrams, or instructional images.',
		],
	},
	{
		title: 'Step 5: Stress test the result',
		instructions:
			'<p>Add long headings, long URLs, missing images, fewer cards, more cards, and 200% zoom. Fix actual failures rather than tuning only for the original demo content.</p>',
		hints: [
			'Grid and Flex children often need <code>min-width: 0</code> before they can shrink safely.',
			'Use <code>overflow-wrap: anywhere</code> for links or unpredictable user-generated text.',
		],
	},
];

const guidedPracticeSuccessCriteria = [
	'You can explain which values are content-driven and which are container-driven',
	'Your card grid adapts without card-specific media queries',
	'Your fluid values have clear minimum and maximum limits',
	'Your media keeps its intended proportions without distorting important content',
	'Your layout survives long text, missing images, narrow containers, and 200% zoom',
];

const independentPracticeRubric = [
	{
		criteria: 'Resilient constraints',
		success:
			'The solution avoids fixed text-container heights and uses meaningful minimums, maximums, or intrinsic sizing.',
	},
	{
		criteria: 'Modern layout choices',
		success:
			'The learner uses minmax(), clamp(), aspect-ratio, logical properties, and :has() only where each feature solves a visible layout need.',
	},
	{
		criteria: 'Progressive enhancement',
		success:
			'Enhancements such as subgrid are guarded with @supports when fallback behaviour matters.',
	},
	{
		criteria: 'Stress testing',
		success:
			'The component remains usable with awkward content, missing optional elements, narrow containers, and enlarged text.',
	},
];

const closureKeyTakeaways = [
	'Modern CSS layout is about defining useful relationships, not controlling every pixel.',
	'Intrinsic sizing lets content influence dimensions when that improves the component.',
	'min(), max(), and clamp() help values scale while staying inside sensible limits.',
	'auto-fit, minmax(), and min(100%, ...) create flexible grids with fewer breakpoint rules.',
	'Subgrid helps when nested content needs to align with shared parent tracks.',
	':has() is useful when a component should respond to simple facts about its contents.',
	'aspect-ratio protects media proportions, but instructional images should not be cropped carelessly.',
	'Logical properties make spacing and sizing follow the writing direction instead of fixed screen sides.',
	'Stress testing reveals whether a layout is genuinely resilient.',
];

const closureObjectives = [
	'Explain content-driven and explicitly sized layout decisions',
	'Use intrinsic sizing keywords and functions responsibly',
	'Create fluid type, spacing, and layout values with min(), max(), and clamp()',
	'Build responsive Grid layouts with auto-fit, minmax(), and fewer breakpoints',
	'Use subgrid, :has(), aspect-ratio, logical properties, and @supports where they improve a real layout',
	'Stress test components with awkward content before calling them finished',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-ruler-combined',
		title: 'Constraints',
		questions: [
			'Which parts of your layout should be allowed to grow or shrink?',
			'Where did a fixed width or height create unnecessary fragility?',
		],
	},
	{
		icon: 'fas fa-vial',
		title: 'Testing',
		questions: [
			'Which stress test revealed the most about your component?',
			'What awkward content would be realistic for the kind of site you are building?',
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
						<a href="#" aria-current="page">Modern CSS Layout Extensions</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">45-60 min</span>
					<span class="tag is-light">CSS</span>
					<span class="tag is-light">Modern Layout</span>
				</div>
			</div>

			<h1 class="title is-1">Modern CSS Layout Extensions</h1>

			<p class="subtitle is-5">
				Use intrinsic sizing, fluid functions, flexible Grid, subgrid,
				<code>:has()</code>, <code>aspect-ratio</code>, logical properties, and
				stress testing to make layouts more resilient.
			</p>

			<AnticipatorySet
				title="Modern CSS Gives Layouts Better Judgment"
				icon="↔"
				:hook="anticipatoryHook"
				:reflection-prompts="[
					'Where have you used a fixed width or height because it seemed easier?',
					'What kinds of content usually make your layouts break?',
					'How could CSS constraints give the browser more useful decisions to make?'
				]"
				connection="This lesson extends earlier work on Grid, responsive refinement, and detail selectors. You already know the core tools. Now you will use modern CSS features to make those tools more adaptable."
			/>

			<LearningObjectives
				:objectives="[
					'Explain the difference between content-driven and explicitly sized layouts',
					'Use min-content, max-content, and fit-content() where content should influence size',
					'Create fluid values with min(), max(), and clamp()',
					'Build responsive Grid layouts with auto-fit and minmax()',
					'Use subgrid, :has(), aspect-ratio, and logical properties for specific layout problems',
					'Apply @supports and layout stress testing before relying on modern enhancements'
				]"
				purpose="Modern CSS is most useful when it helps a layout respond to real content. The goal is not to use every new feature. The goal is to choose the feature that makes the design clearer, more adaptable, and easier to maintain."
				:prerequisites="[
					{ topic: 'CSS Grid for Repeated Layouts', link: '/tutorials/intermediate/css-grid-for-repeated-layouts' },
					{ topic: 'Responsive Refinement for Reusable Components', link: '/tutorials/intermediate/responsive-refinement-for-reusable-components' },
					{ topic: 'Styling Details: Selectors, Pseudo-elements, and Motion', link: '/tutorials/intermediate/styling-details-selectors-pseudo-elements-and-motion' }
				]"
			/>

			<h2 id="content-driven-layout">Let Content Influence Size</h2>
			<p>
				A common beginner habit is to assign fixed widths and heights to everything.
			</p>

			<pre><code>.card {
  width: 350px;
  height: 500px;
}</code></pre>

			<p>
				That may work with one screen size and one carefully chosen piece of content. It
				is much less reliable when the viewport becomes narrower, a heading is longer,
				the user increases text size, an image has different proportions, or the content
				is translated.
			</p>
			<p>
				Modern CSS encourages us to define constraints rather than force exact
				dimensions. Instead of saying, "this card must always be exactly 350 pixels
				wide," we can say, "this card may grow, may shrink, and must remain usable
				inside the available space."
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-modern-css-layout-constraints.svg"
					alt="Diagram comparing a fixed-size card that overflows with a constrained card that can grow, shrink, and remain readable."
					width="960"
					height="520"
					loading="lazy"
					decoding="async"
				/>
				<figcaption>
					A resilient layout gives the browser useful boundaries instead of bolting
					every element to one exact size.
				</figcaption>
			</figure>

			<h2 id="intrinsic-sizing">Use Intrinsic Sizing Deliberately</h2>
			<p>
				An element has an intrinsic size when its size is influenced by its own content:
				an image has natural dimensions, a word has a minimum width before it must wrap,
				and a heading has a width based on the text it contains.
			</p>
			<p>
				An extrinsic size is imposed by the surrounding layout or an explicit CSS rule.
				Most real layouts use both. The useful question is: should the content determine
				the size, should the container determine the size, or should both contribute?
			</p>

			<h3><code>min-content</code></h3>
			<p>
				<code>min-content</code> asks how narrow an element can become without avoidable
				overflow. For text, this is usually the width of the longest unbreakable word.
			</p>

			<pre><code>.tag {
  width: min-content;
  padding: 0.35rem 0.65rem;
  white-space: nowrap;
}</code></pre>

			<h3><code>max-content</code></h3>
			<p>
				<code>max-content</code> asks how wide the content would be if it did not wrap.
				It can be useful for short controls, but it can also cause overflow when the
				content is longer than the available space.
			</p>

			<pre><code>.section-heading &gt; a {
  width: max-content;
}</code></pre>

			<h3><code>fit-content()</code></h3>
			<p>
				<code>fit-content()</code> lets an element grow according to its content while
				respecting a maximum size.
			</p>

			<pre><code>.hero-intro {
  width: fit-content(42rem);
}</code></pre>

			<p>
				For a content-sized category label, use <code>fit-content</code> so the
				background shape follows the metadata instead of stretching across the whole
				card.
			</p>

			<pre><code>.card-category {
  width: fit-content;
  margin-bottom: 0.75rem;
  padding: 0.25rem 0.55rem;
  color: var(--colour-accent);
  background: color-mix(in srgb, var(--colour-accent) 12%, white);
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
}</code></pre>

			<div class="notification is-info is-light">
				<p>
					<strong>Check the intent:</strong> <code>width: 100%</code> would be a poor
					choice for this label because the label is a small piece of metadata. Making
					it full width gives it visual weight it has not earned.
				</p>
			</div>

			<h2 id="fluid-functions">Create Fluid Values with Boundaries</h2>
			<p>
				Responsive CSS is often taught as a series of abrupt changes. That is valid and
				still useful, but some values can change fluidly rather than jumping from one
				setting to another.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-modern-css-layout-fluid-functions.svg"
					alt="Diagram showing min(), max(), and clamp() as CSS functions that choose smaller values, larger values, or bounded fluid values."
					width="960"
					height="520"
					loading="lazy"
					decoding="async"
				/>
				<figcaption>
					Fluid values are still controlled values. The limits are what keep the
					layout readable.
				</figcaption>
			</figure>

			<h3><code>min()</code></h3>
			<p>
				<code>min()</code> chooses the smallest value from a list. The wrapper pattern
				below leaves breathing room on narrow screens and stops growing once it reaches
				<code>72rem</code>.
			</p>

			<pre><code>.wrapper {
  width: min(100% - 2rem, 72rem);
  margin-inline: auto;
}</code></pre>

			<h3><code>max()</code></h3>
			<p>
				<code>max()</code> chooses the largest value from a list. Use it when you need
				to protect a minimum value.
			</p>

			<pre><code>.hero {
  padding-inline: max(1rem, 5vw);
}</code></pre>

			<h3><code>clamp()</code></h3>
			<p>
				<code>clamp()</code> accepts a minimum, a preferred value, and a maximum. It is
				especially useful for type, spacing, and gaps that should scale smoothly within
				clear boundaries.
			</p>

			<pre><code>.hero h1 {
  max-width: 15ch;
  margin-bottom: 1.25rem;
  font-size: clamp(2.5rem, 7vw, 5.5rem);
  line-height: 0.98;
  text-wrap: balance;
}

.article-section {
  padding-block: clamp(3.5rem, 8vw, 6rem);
}

.card-grid {
  gap: clamp(1rem, 3vw, 2rem);
}</code></pre>

			<p>
				Keep user control in mind. For text, use relative units such as <code>rem</code>
				in the minimum and maximum values. A preferred value like
				<code>1.25rem + 3vw</code> often gives you more control than a plain viewport
				value.
			</p>

			<CheckpointBox
				title="Checkpoint for Understanding"
				icon="↔"
				description="Pause before the Grid section and check whether the constraint-based thinking is clear."
				:questions="checkpointQuestions"
				answers-button-text="Show sample answers"
			/>

			<h2 id="flexible-grid">Build Responsive Grid Without Breakpoint Clutter</h2>
			<p>
				A fixed three-column card grid can look fine on a wide screen, but the browser
				will still try to display all three columns when the space becomes narrow.
			</p>

			<pre><code>.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}</code></pre>

			<p>
				A more flexible approach uses <code>repeat()</code>, <code>auto-fit</code>, and
				<code>minmax()</code>.
			</p>

			<pre><code>.card-grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
}</code></pre>

			<p>
				Read that rule in plain English: create as many columns as will fit; each column
				wants to be at least <code>18rem</code>, but it may use <code>100%</code> when
				the container is narrower; then let the columns share the remaining space.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-modern-css-layout-auto-fit-subgrid.svg"
					alt="Diagram showing a responsive card grid with flexible columns and shared row tracks for card content alignment."
					width="960"
					height="540"
					loading="lazy"
					decoding="async"
				/>
				<figcaption>
					<code>auto-fit</code> adapts the number of columns. <code>minmax()</code>
					sets the useful range for each column.
				</figcaption>
			</figure>

			<h3><code>auto-fit</code> vs <code>auto-fill</code></h3>
			<p>
				Both values create as many tracks as will fit. <code>auto-fit</code> collapses
				empty tracks so existing items can stretch. <code>auto-fill</code> keeps empty
				tracks in the grid and reserves space for columns that could exist.
			</p>
			<p>
				For a card collection where existing items should expand, <code>auto-fit</code>
				is often the more useful choice.
			</p>

			<h3>When Media Queries Still Belong</h3>
			<p>
				This technique does not make media queries obsolete. Use a media query when the
				design itself changes: navigation becomes a menu button, a sidebar moves below
				the main content, controls change order, or optional information is shown or
				hidden. Use flexible Grid sizing when the same layout simply needs room to
				breathe.
			</p>

			<h2 id="subgrid">Align Nested Content with Subgrid</h2>
			<p>
				Cards often contain an image, category, heading, paragraph, and link. Because
				headings and paragraphs have different lengths, the links may not align across a
				row.
			</p>
			<p>
				A subgrid allows a nested grid to use track sizing inherited from its parent
				grid. This helps equivalent parts of neighbouring cards line up when that
				alignment is visible and meaningful.
			</p>

			<pre><code>.card {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
}

@supports (grid-template-rows: subgrid) {
  .card {
    grid-row: span 5;
    grid-template-rows: subgrid;
  }
}</code></pre>

			<p>
				Subgrid works well for card collections, forms with aligned labels and controls,
				pricing tables, definition lists, and nested layouts that need shared tracks. It
				is unnecessary when each component should size itself independently or a simple
				Flexbox layout already solves the problem.
			</p>

			<h2 id="has-selector">Style a Parent with <code>:has()</code></h2>
			<p>
				The <code>:has()</code> pseudo-class lets CSS select an element based on what it
				contains or what follows it.
			</p>

			<pre><code>.card:has(img) {
  border-color: transparent;
}

.card:not(:has(img)) {
  padding-top: 2rem;
  background: var(--colour-surface-alt);
}</code></pre>

			<p>
				That makes optional content easier to handle. A card without an image can look
				intentional instead of merely broken or empty.
			</p>

			<pre><code>.section-heading:has(&gt; a) {
  display: flex;
  align-items: end;
  justify-content: space-between;
}

.form-group:has(input:user-invalid) {
  padding: 1rem;
  border-left: 0.25rem solid firebrick;
}</code></pre>

			<p>
				Keep <code>:has()</code> selectors understandable. Prefer simple relationships
				such as <code>.card:has(img)</code>, <code>.form-group:has(input:invalid)</code>,
				or <code>nav:has(.current)</code>.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-modern-css-layout-has-aspect-logical.svg"
					alt="Diagram connecting :has(), aspect-ratio, and logical properties to optional content, media proportions, and writing-mode-aware spacing."
					width="960"
					height="540"
					loading="lazy"
					decoding="async"
				/>
				<figcaption>
					Use modern CSS features to describe relationships: what a component contains,
					how media should hold space, and which direction spacing should follow.
				</figcaption>
			</figure>

			<h2 id="aspect-ratio">Preserve Media Proportions with <code>aspect-ratio</code></h2>
			<p>
				Images and media often need predictable proportions. The
				<code>aspect-ratio</code> property makes that intention explicit.
			</p>

			<pre><code>.card img {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
}</code></pre>

			<p>
				<code>object-fit: cover</code> fills the box while preserving the image's own
				proportions, but some parts of the image may be cropped. That can be acceptable
				for decorative photography. For diagrams, screenshots, charts, instructional
				images, or images containing text, use <code>object-fit: contain</code> or allow
				the natural dimensions so important information remains visible.
			</p>

			<pre><code>.tutorial-diagram {
  width: 100%;
  height: auto;
  object-fit: contain;
}</code></pre>

			<h2 id="logical-properties">Use Logical Properties for Adaptable Spacing</h2>
			<p>
				Traditional CSS properties are based on physical directions:
				<code>margin-left</code>, <code>padding-right</code>, and
				<code>border-bottom</code>. Logical properties describe directions according to
				the document's writing mode.
			</p>

			<pre><code>.wrapper {
  margin-inline: auto;
}

.hero {
  padding-block: 6rem;
}

.callout {
  border-inline-start: 0.3rem solid var(--colour-accent);
  padding-inline-start: 1rem;
}</code></pre>

			<p>
				Useful logical properties include <code>margin-inline</code>,
				<code>margin-block</code>, <code>padding-inline</code>,
				<code>padding-block</code>, <code>border-inline-start</code>,
				<code>inline-size</code>, and <code>block-size</code>. They help layout rules
				follow content direction instead of assuming every interface begins on the left
				and moves top to bottom.
			</p>

			<h2 id="progressive-enhancement">Use <code>@supports</code> for Enhancements</h2>
			<p>
				When a feature may not be available in every browser you support, use
				<code>@supports</code> to apply it conditionally. Start with a usable baseline,
				then add the improvement for browsers that support it.
			</p>

			<pre><code>.card {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
}

@supports (grid-template-rows: subgrid) {
  .card {
    grid-row: span 5;
    grid-template-rows: subgrid;
  }
}

@supports selector(.card:has(img)) {
  .card:not(:has(img)) {
    background: var(--colour-surface-alt);
  }
}</code></pre>

			<p>
				Not every visual difference requires a custom fallback. Ask whether the content
				is still accessible, the component is still usable, and the layout remains
				understandable. A card link being slightly out of alignment may be acceptable. A
				form becoming unusable is not.
			</p>

			<h2 id="stress-testing">Stress Test the Layout</h2>
			<p>
				A layout is not finished when it works with the three pieces of content you
				chose for the screenshot. Real content includes long names, unbroken URLs,
				missing images, tall images, unexpected labels, translated text, validation
				messages, empty states, and user-generated content.
			</p>

			<ul>
				<li>
					<strong>Use a very long heading:</strong> check whether the card expands,
					the link remains reachable, and the layout still aligns reasonably.
				</li>
				<li>
					<strong>Add a long unbroken string:</strong> protect Grid and Flex items with
					<code>min-width: 0</code> and text with <code>overflow-wrap: anywhere</code>.
				</li>
				<li>
					<strong>Remove an image:</strong> make sure optional media does not leave an
					awkward hole.
				</li>
				<li>
					<strong>Enlarge browser text to 200%:</strong> avoid fixed heights on
					text-heavy components and check that controls remain visible.
				</li>
				<li>
					<strong>Narrow the container:</strong> test the component in a full-width
					section, sidebar, two-column layout, modal, and centred column.
				</li>
				<li>
					<strong>Test different item counts:</strong> one, two, three, five, and
					eight cards may reveal whether <code>auto-fit</code> stretching is desirable.
				</li>
			</ul>

			<pre><code>.card {
  min-width: 0;
}

.card p,
.card a {
  overflow-wrap: anywhere;
}</code></pre>

			<div class="notification is-warning is-light">
				<p>
					<strong>Watch for false confidence:</strong> a layout that survives the demo
					content has passed the first test only. The real test is awkward content,
					missing optional pieces, zoom, and reuse in a narrower container.
				</p>
			</div>

			<h2 id="guided-practice">Guided Practice</h2>
			<GuidedPractice
				title="Turn a rigid article card section into a resilient layout"
				description="Use the Coastal Notes practice page from the prompt, or create a similar header, hero, and card-grid section with at least three articles."
				:steps="guidedPracticeSteps"
				:success-criteria="guidedPracticeSuccessCriteria"
				success-criteria-title="You are on track if you can:"
			/>

			<h2 id="independent-practice">Independent Practice</h2>
			<IndependentPractice
				title="Independent Practice: Build resilient feature cards"
				description="Create a reusable feature-card section containing at least four cards."
				task-title="Your Task:"
				task="<p>Each card may contain an optional image, category, heading, description, one or more links, and an optional badge. Keep the focus on layout resilience rather than building a full website.</p>"
				:requirements="[
					'Use a responsive Grid without card-specific media queries',
					'Use minmax() with either auto-fit or auto-fill',
					'Use clamp() for at least one spacing or typography value',
					'Use aspect-ratio for images',
					'Use :has() to respond to optional content',
					'Use at least three logical properties',
					'Avoid fixed heights on text containers',
					'Prevent long text or URLs from causing horizontal overflow',
					'Remain usable when an image is removed',
					'Remain usable at 200% browser zoom'
				]"
				:stretch-goals="[
					'Use subgrid to align equivalent content across cards',
					'Provide a sensible @supports fallback for the subgrid enhancement',
					'Constrain stretched cards with a maximum track size and justify-content when small item counts look too wide'
				]"
				:rubric="independentPracticeRubric"
			/>

			<h2 id="recap">Recap</h2>
			<p>
				Modern CSS layout is less about controlling every pixel and more about defining
				useful relationships. Use intrinsic sizing when content should influence
				dimensions, fluid functions when values should scale within limits, flexible Grid
				when repeated items should fill available space, and <code>@supports</code> when
				an enhancement needs conditional application.
			</p>
			<p>
				Most importantly, test layouts with content that was not selected to make the
				design look good. A resilient layout should survive long headings, missing
				images, narrow containers, enlarged text, and content you did not personally
				write.
			</p>

			<ClosureSection
				title="Lesson Complete: You Can Extend Modern CSS Layouts"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				next-steps="Next, continue into container queries for reusable components, then modern CSS architecture for organising these techniques across a larger project."
			/>

			<div id="additional-resources">
				<TutorialRecommendations :current-path="'/tutorials/intermediate/modern-css-layout-extensions'" />
			</div>
		</div>
	</div>
</template>
