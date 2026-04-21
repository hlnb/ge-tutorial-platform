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
  title: 'CSS Grid for Repeated Layouts',
  description: 'Use CSS Grid for two-dimensional layouts — rows, columns, and template areas explained with real examples.',
  path: '/tutorials/intermediate/css-grid-for-repeated-layouts',
});

const sections = [
	{ id: 'why-grid', title: 'Why Grid' },
	{ id: 'grid-vs-flexbox', title: 'Grid vs Flexbox' },
	{ id: 'tracks-gaps', title: 'Tracks and Gaps' },
	{ id: 'repeatable-card-grid', title: 'Repeatable Card Grid' },
	{ id: 'responsive-grid', title: 'Responsive Grid' },
	{ id: 'named-areas', title: 'Named Areas' },
	{ id: 'grid-checklist', title: 'Grid Checklist' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'recap', title: 'Recap' },
];

usePageSections(sections);

const checkpointQuestions = [
	{
		question: 'What kind of layout problem is Grid especially good at solving?',
		answer:
			'Grid is strongest when content needs rows and columns together, such as galleries, repeated card collections, or larger page regions.',
	},
	{
		question: 'Why is Grid usually a better fit than Flexbox for a gallery of repeated cards?',
		answer:
			'Because a gallery usually needs a two-dimensional arrangement where rows and columns work together, not just alignment in one main direction.',
	},
	{
		question: 'Predict what happens if you force a two-dimensional card layout into Flexbox and manually manage widths.',
		answer:
			'The CSS usually becomes more fragile, because you are fighting the layout shape instead of using a tool designed for rows and columns.',
	},
];

const guidedPracticeSteps = [
	{
		title: 'Step 1: Start with repeated content',
		instructions:
			'<p>Choose a simple repeated pattern such as menu cards, featured dishes, testimonials, or gallery tiles. Write the HTML as a parent wrapper with several repeated child items.</p><p>The parent will become the grid container. The repeated items will become grid items.</p>',
		hints: [
			'Keep the HTML simple: one wrapper and repeated cards or tiles inside it.',
			'Use semantic elements for the repeated items when possible, such as article for cards.',
		],
	},
	{
		title: 'Step 2: Create the grid container',
		instructions:
			'<p>Add <code>display: grid</code> to the parent wrapper, then define columns and gap. Start with a simple fixed number of columns before making it responsive.</p>',
		hints: [
			'Use gap for spacing between grid items instead of margins on each card.',
			'Start simple so you can see the effect of each property clearly.',
		],
	},
	{
		title: 'Step 3: Make the grid more flexible',
		instructions:
			'<p>Replace the fixed columns with <code>repeat(auto-fit, minmax(...))</code> so the layout can create as many useful columns as the available space allows.</p>',
		hints: [
			'The minmax minimum protects cards from becoming too narrow.',
			'auto-fit lets the grid adapt without needing a media query for every width.',
		],
	},
];

const guidedPracticeSuccessCriteria = [
	'You used one parent grid container with repeated child items',
	'You used gap to control spacing between repeated items',
	'You created a grid that can support rows and columns together',
	'You can explain why Grid fits this layout better than Flexbox',
];

const independentPracticeRubric = [
	{
		criteria: 'Grid-worthy layout',
		success: 'The learner chooses a repeated or area-based layout where rows and columns genuinely matter.',
	},
	{
		criteria: 'Clean grid container',
		success: 'The parent element controls columns and gaps instead of each item carrying scattered spacing rules.',
	},
	{
		criteria: 'Responsive thinking',
		success: 'The grid has a plan for narrower screens through flexible tracks, media queries, or a clear stacked fallback.',
	},
	{
		criteria: 'Tool choice',
		success: 'The learner can explain why Grid is a better fit than Flexbox or normal flow for this case.',
	},
];

const closureKeyTakeaways = [
	'CSS Grid is best for layouts where rows and columns matter together.',
	'The grid container controls the structure; the repeated children become grid items.',
	'gap, repeat(), minmax(), and auto-fit help repeated layouts stay consistent and flexible.',
	'Grid is not a replacement for Flexbox. It is a different tool for a different layout shape.',
];

const closureObjectives = [
	'Explain when Grid is a better layout choice than Flexbox',
	'Create a repeatable card or gallery grid with rows, columns, and gap',
	'Use repeat(), minmax(), and auto-fit for flexible repeated layouts',
	'Recognise when named grid areas can make larger page regions easier to understand',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-th',
		title: 'Grid Thinking',
		questions: [
			'Which part of your current project feels most like a true rows-and-columns problem?',
			'Where have you previously used Flexbox when Grid would have described the layout more clearly?',
		],
	},
	{
		icon: 'fas fa-expand-arrows-alt',
		title: 'Responsive Layout',
		questions: [
			'How does a repeatable grid help the layout adapt without rewriting every card?',
			'What minimum card width would keep your content readable?'
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
						<a href="#" aria-current="page">CSS Grid for Repeated Layouts</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">35 min</span>
					<span class="tag is-light">CSS</span>
					<span class="tag is-light">Grid</span>
				</div>
			</div>

			<h1 class="title is-1">CSS Grid for Repeated Layouts</h1>

			<p class="subtitle is-5">
				Learn when Grid is the better choice for galleries, card collections, and page regions that need rows and columns together.
			</p>

			<AnticipatorySet
				title="Some Layouts Need Rows and Columns"
				icon="▦"
				:hook="`<p>Flexbox is excellent when a layout mainly moves in one direction. But some parts of a website are not just rows or columns. A gallery, menu preview, or collection of cards often needs both at the same time.</p><p>This is where CSS Grid becomes useful. Grid lets the parent container describe rows, columns, gaps, and sometimes named page areas, so repeated content can arrange itself more predictably.</p><p>The goal is not to use Grid everywhere. The goal is to recognise the layout shape where Grid is the right tool.</p>`"
				:reflection-prompts="[
					'Have you ever tried to make several cards line up by manually setting widths?',
					'Which parts of a restaurant site might need rows and columns together?',
					'What becomes easier if the parent layout controls the columns instead of every card managing its own width?'
				]"
				connection="This lesson comes after reusable components because Grid is especially useful once you have repeated cards, gallery items, or page regions that need consistent arrangement."
			/>

			<LearningObjectives
				:objectives="[
					'Recognise when a layout problem is two-dimensional',
					'Use CSS Grid for repeated cards, galleries, and menu previews',
					'Control columns and spacing from the grid container',
					'Use repeat(), minmax(), and auto-fit for flexible repeated layouts',
					'Understand when named grid areas can clarify larger page regions'
				]"
				purpose="Intermediate layout work is about choosing the tool that matches the content. Grid gives you a clear way to arrange repeated content when rows and columns matter together."
				:prerequisites="[
					{ topic: 'Flexbox for Real Layouts', link: '/tutorials/intermediate/flexbox-for-real-layouts' }
				]"
			/>

			<h2 id="why-grid">Why Grid Belongs Here</h2>
			<p>
				By this point in the builder pathway, you have already worked with sections,
				reusable CSS patterns, Flexbox, and component-style structures. That matters
				because Grid works best when you already understand the pieces being arranged.
			</p>
			<p>
				Use Grid when you need to arrange repeated or area-based content such as:
			</p>
			<ul>
				<li>gallery tiles</li>
				<li>menu item cards</li>
				<li>feature cards</li>
				<li>product or service listings</li>
				<li>larger page regions with a main area and sidebar</li>
			</ul>

			<h2 id="grid-vs-flexbox">Grid vs Flexbox</h2>
			<p>
				The simplest distinction is this: Flexbox is strongest for one main direction.
				Grid is strongest when rows and columns matter together.
			</p>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-css-grid-repeated-layouts-flexbox-vs-grid.svg"
					alt="Diagram comparing Flexbox as a one-direction layout tool with Grid as a rows-and-columns layout tool for repeated cards."
				/>
				<figcaption>
					Use Flexbox when the relationship is mostly one-directional. Use Grid when
					the layout needs a repeated two-dimensional structure.
				</figcaption>
			</figure>

			<div class="notification is-info is-light">
				<p><strong>Helpful question:</strong> am I aligning a small group in one direction, or arranging repeated content across rows and columns?</p>
			</div>

			<CheckpointBox
				title="Checkpoint for Understanding"
				icon="▦"
				description="Pause here and check whether the Grid mental model is clear before you write grid code."
				:questions="checkpointQuestions"
				answers-button-text="Show sample answers"
			/>

			<h2 id="tracks-gaps">Tracks and Gaps</h2>
			<p>
				A grid container creates tracks. A column track runs vertically. A row track runs
				horizontally. The repeated children inside the container become grid items.
			</p>

			<pre><code>.menu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
}</code></pre>

			<p>
				This example creates three equal columns. The <code>gap</code> property controls
				the spacing between grid items, which is usually cleaner than putting margins on
				each card.
			</p>

			<h2 id="repeatable-card-grid">Build a Repeatable Card Grid</h2>
			<p>
				For a repeated card layout, keep the repeated item structure simple and let the
				parent grid do the arranging.
			</p>

			<pre><code>&lt;section class="section"&gt;
  &lt;div class="container"&gt;
    &lt;h2 class="section-title"&gt;Featured Dishes&lt;/h2&gt;

    &lt;div class="menu-grid"&gt;
      &lt;article class="menu-card"&gt;...&lt;/article&gt;
      &lt;article class="menu-card"&gt;...&lt;/article&gt;
      &lt;article class="menu-card"&gt;...&lt;/article&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;</code></pre>

			<p>
				The grid does not replace the card component. It arranges the cards. That
				separation matters: the card owns its internal design, while the grid owns the
				relationship between repeated cards.
			</p>

			<h2 id="responsive-grid">Make Repeated Layouts Flexible</h2>
			<p>
				A fixed three-column grid can work on large screens, but it may become cramped on
				smaller screens. This is where <code>repeat()</code>, <code>auto-fit</code>, and
				<code>minmax()</code> help.
			</p>

			<pre><code>.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1.5rem;
}</code></pre>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-css-grid-repeated-layouts-auto-fit-minmax.svg"
					alt="Diagram showing a repeated card grid adapting from three columns to two columns to one column as available width changes."
				/>
				<figcaption>
					The minimum width protects each card from becoming too narrow. The flexible
					maximum lets each card share the available space.
				</figcaption>
			</figure>

			<p>
				Read the rule in plain English: make as many columns as will fit, but do not let
				each column get smaller than <code>16rem</code>. If there is extra room, let the
				columns stretch evenly.
			</p>

			<h2 id="named-areas">Use Named Areas for Larger Page Regions</h2>
			<p>
				Grid is also useful for larger page regions, especially when you want the CSS to
				describe the layout shape clearly. Named areas are not required for every grid,
				but they can make larger arrangements easier to read.
			</p>

			<pre><code>.feature-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    "intro image"
    "details image";
  gap: 2rem;
}

.feature-intro { grid-area: intro; }
.feature-image { grid-area: image; }
.feature-details { grid-area: details; }</code></pre>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-css-grid-repeated-layouts-named-areas.svg"
					alt="Diagram showing named Grid areas for hero text, image, content, aside, and call-to-action regions."
				/>
				<figcaption>
					Named areas can make the CSS read like a map of the layout. Use them when the
					page shape is easier to understand with names than with numbers alone.
				</figcaption>
			</figure>

			<h2 id="grid-checklist">Grid Checklist</h2>
			<p>
				Before choosing Grid, run through this quick checklist:
			</p>
			<ul>
				<li>Does the layout need rows and columns together?</li>
				<li>Is there a parent container that should control the arrangement?</li>
				<li>Are the repeated items structurally similar?</li>
				<li>Would <code>gap</code> be cleaner than margins on each item?</li>
				<li>Does the layout need to adapt as space changes?</li>
				<li>Would named areas make the layout clearer?</li>
			</ul>

			<div class="notification is-warning is-light">
				<p><strong>Keep the tool choice honest:</strong> if the content only needs to stack naturally, use normal flow. If it only needs one-direction alignment, use Flexbox. Grid earns its place when the layout shape is two-dimensional.</p>
			</div>

			<h2 id="guided-practice">Guided Practice</h2>
			<GuidedPractice
				title="Build a flexible card grid"
				description="Use Grid to arrange repeated cards while keeping the card component itself separate from the layout container."
				:steps="guidedPracticeSteps"
				:success-criteria="guidedPracticeSuccessCriteria"
				success-criteria-title="You are on track if you can:"
			/>

			<h2 id="independent-practice">Independent Practice</h2>
			<IndependentPractice
				title="Independent Practice: Choose a Grid-worthy layout"
				description="Now apply Grid to a fresh repeated layout without step-by-step support."
				task-title="Your Task:"
				task="<p>Choose a small repeated layout, such as a gallery, menu preview, feature-card section, or service list. Write the parent grid CSS and enough repeated HTML items to show how the layout works.</p><p>Keep the focus on the Grid decision. You are not building a full page.</p>"
				:requirements="[
					'Choose a layout where rows and columns genuinely matter',
					'Create one parent grid container with repeated child items',
					'Use gap for spacing between items',
					'Use either fixed columns, repeat(), or auto-fit/minmax() deliberately',
					'Write one sentence explaining why Grid is the right tool'
				]"
				:stretch-goals="[
					'Add a responsive version using repeat(auto-fit, minmax(...))',
					'Try a named-area layout for a larger section with text and media'
				]"
				:rubric="independentPracticeRubric"
			/>

			<h2 id="recap">Recap</h2>
			<p>
				CSS Grid gives you a clean way to arrange repeated content when rows and columns
				matter together. It is especially useful for galleries, card collections, menu
				previews, and larger page regions. The key is to let the parent grid describe the
				layout while each repeated item keeps its own internal structure.
			</p>

			<ClosureSection
				title="Lesson Complete: You Can Use Grid for Repeated Layouts"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				next-steps="Next, you will refine reusable components responsively so shared sections and layout patterns continue to work across different screen sizes."
			/>

			<div id="additional-resources">
				<TutorialRecommendations :current-path="'/tutorials/intermediate/css-grid-for-repeated-layouts'" />
			</div>
		</div>
	</div>
</template>
