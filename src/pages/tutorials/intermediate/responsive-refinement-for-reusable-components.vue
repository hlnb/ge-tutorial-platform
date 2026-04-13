<script setup>
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

const sections = [
	{ id: 'why-refinement', title: 'Why Refinement' },
	{ id: 'content-first-breakpoints', title: 'Content-First Breakpoints' },
	{ id: 'component-behaviour', title: 'Component Behaviour' },
	{ id: 'fluid-spacing-type', title: 'Fluid Spacing and Type' },
	{ id: 'media-queries', title: 'Media Queries' },
	{ id: 'container-queries', title: 'Container Queries' },
	{ id: 'responsive-checklist', title: 'Responsive Checklist' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'recap', title: 'Recap' },
	{ id: 'additional-resources', title: 'Additional Resources' },
];

usePageSections(sections);

const anticipatoryHook = `
	<p>A component can look polished in one section and awkward in another. A menu card might feel calm in a three-column grid, cramped in a sidebar, and too wide in a single-column mobile layout.</p>
	<p>This is where responsive refinement begins. You are no longer asking, "What does this page look like on a phone?" You are asking, "What does this reusable component need so it stays readable, balanced, and usable wherever it appears?"</p>
	<p>The goal is not to memorise more breakpoints. The goal is to make better decisions about when a component should wrap, stack, stretch, shrink, or change spacing.</p>
`;

const checkpointQuestions = [
	{
		question: 'What should decide a breakpoint: a device name or the content itself?',
		answer:
			'The content should decide. Add a breakpoint when the component becomes cramped, awkward, too wide, or hard to read.',
	},
	{
		question: 'Why is a reusable component harder to refine than a one-off page section?',
		answer:
			'Because the component may appear in different page contexts. Its CSS needs to protect the pattern without assuming one exact page width or location.',
	},
	{
		question: 'Predict what happens if every component has unrelated breakpoint values.',
		answer:
			'The page can start to feel jumpy and inconsistent because each piece changes rhythm at a different moment for no clear content reason.',
	},
];

const guidedPracticeSteps = [
	{
		title: 'Step 1: Choose one reusable component',
		instructions:
			'<p>Choose a component from your recent work, such as a menu card, CTA block, feature card, or navigation pattern. Do not redesign the whole page. Focus on one reusable pattern.</p>',
		hints: [
			'Pick a component with at least two internal parts, such as a title and description or text and action.',
			'Use a component you expect to reuse on another page.',
		],
	},
	{
		title: 'Step 2: Find the pressure points',
		instructions:
			'<p>Resize the browser or use DevTools responsive mode. Note the widths where the component starts to feel uncomfortable: text lines too long, buttons squeezed, cards too narrow, or spacing too heavy.</p>',
		hints: [
			'You are looking for the moment the content asks for help.',
			'Write down the problem before writing the media query.',
		],
	},
	{
		title: 'Step 3: Add the smallest useful refinement',
		instructions:
			'<p>Refine the component with flexible rules first: gap, flex-wrap, minmax(), max-width, clamp(), or fluid padding. Add a media query only when the flexible rule is not enough.</p>',
		hints: [
			'If a layout can wrap naturally, let it wrap before reaching for a breakpoint.',
			'If type or spacing changes too sharply, try clamp() for a smoother transition.',
		],
	},
	{
		title: 'Step 4: Re-check the component in context',
		instructions:
			'<p>Place the component back into the page and test it near other sections. Make sure the component works on its own without breaking the shared page rhythm.</p>',
		hints: [
			'Reusable components need to behave well beside other components.',
			'Check focus states and button tap targets while you test.',
		],
	},
];

const guidedPracticeSuccessCriteria = [
	'You identified a content problem before adding CSS',
	'You used flexible CSS before adding extra breakpoints',
	'Your component stays readable at narrow, medium, and wide widths',
	'Your changes still make sense when the component appears inside a page',
];

const independentPracticeRubric = [
	{
		criteria: 'Content-first decision',
		success: 'The learner can point to the content pressure that caused each responsive change.',
	},
	{
		criteria: 'Reusable behaviour',
		success: 'The component does not depend on one page-specific width, section, or layout context.',
	},
	{
		criteria: 'Smooth rhythm',
		success: 'Spacing, text size, and layout changes feel connected rather than jumpy.',
	},
	{
		criteria: 'Accessibility basics',
		success: 'The component remains readable, tappable, and keyboard-visible across widths.',
	},
];

const closureKeyTakeaways = [
	'Responsive refinement starts with content pressure, not device labels.',
	'Reusable components need flexible defaults because they may appear in more than one page context.',
	'Fluid spacing and type can reduce the number of hard breakpoints you need.',
	'Media queries are still useful, but they should solve a real layout problem.',
	'Container queries are a modern extension to this thinking, but they are not required for this stage.',
];

const closureObjectives = [
	'Choose breakpoints based on content behaviour instead of device names',
	'Refine reusable components with flexible layout rules before adding media queries',
	'Use clamp(), relative units, wrapping, and gap to keep spacing and typography fluid',
	'Explain the difference between viewport-based and component-context responsive decisions',
	'Prepare shared components for the multi-page Black Swan Bistro work in Part 4',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-compress-arrows-alt',
		title: 'Responsive Decisions',
		questions: [
			'Which component in your current project feels most fragile when the viewport changes?',
			'What content behaviour tells you it needs a breakpoint or flexible rule?',
		],
	},
	{
		icon: 'fas fa-layer-group',
		title: 'Reusable Components',
		questions: [
			'Which responsive rules belong to the component itself?',
			'Which rules should stay with the page layout around the component?',
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
						<a href="#" aria-current="page">Responsive Refinement for Reusable Components</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">40 min</span>
					<span class="tag is-light">CSS</span>
					<span class="tag is-light">Responsive</span>
				</div>
			</div>

			<h1 class="title is-1">Responsive Refinement for Reusable Components</h1>

			<p class="subtitle is-5">
				Deepen responsive thinking for shared components with better breakpoints, fluid spacing, and content-driven layout decisions.
			</p>

			<AnticipatorySet
				title="Reusable Components Need to Survive Different Spaces"
				icon="<>"
				:hook="anticipatoryHook"
				:reflection-prompts="[
					'Which reusable component from the pathway could appear on more than one page?',
					'What happens when a card gets too narrow or a CTA gets too wide?',
					'Why might a breakpoint based on content be better than one based on a device name?'
				]"
				connection="This lesson follows component refactoring and Grid because responsive refinement becomes more meaningful once learners have shared components and repeated layouts to test."
			/>

			<LearningObjectives
				:objectives="[
					'Choose breakpoints based on content pressure instead of device categories',
					'Refine reusable components so they work in narrow, medium, and wide spaces',
					'Use flexible CSS before reaching for extra media queries',
					'Apply fluid spacing and typography with relative units and clamp()',
					'Understand where container queries fit as a later responsive tool'
				]"
				purpose="Intermediate responsive design is not just making a page smaller. It is making reusable patterns flexible enough to hold up across real layouts, future pages, and different amounts of content."
			/>

			<h2 id="why-refinement">Why Responsive Refinement Comes After Reuse</h2>
			<p>
				Beginner responsive design usually starts with the page: stack columns, resize
				images, and add a few media queries. That is a good first pass. Intermediate
				responsive work asks a sharper question: how does each reusable component behave
				when its available space changes?
			</p>
			<p>
				This matters because shared components travel. A card might appear in a homepage
				preview, a menu page, a sidebar, or a footer feature. If the component only works
				in one exact layout, it is not truly reusable yet.
			</p>

			<h2 id="content-first-breakpoints">Content-First Breakpoints</h2>
			<p>
				A breakpoint is not a phone size. It is a point where the content needs the layout
				to change. The content might be asking for help if:
			</p>
			<ul>
				<li>text lines become too long to read comfortably</li>
				<li>buttons or links feel squeezed</li>
				<li>a card becomes too narrow for its content</li>
				<li>spacing feels huge on small screens or cramped on larger screens</li>
				<li>a multi-column layout no longer supports the content well</li>
			</ul>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-responsive-refinement-content-first-breakpoints.svg"
					alt="Diagram showing a reusable card at wide, medium, and narrow widths with breakpoints triggered by content pressure rather than device names."
				/>
				<figcaption>
					Responsive decisions should come from the moment the component starts to feel
					awkward, not from a memorised list of device widths.
				</figcaption>
			</figure>

			<CheckpointBox
				title="Checkpoint for Understanding"
				icon="<>"
				description="Pause here and check whether the breakpoint decision is clear before adding more CSS."
				:questions="checkpointQuestions"
				answers-button-text="Show sample answers"
			/>

			<h2 id="component-behaviour">Think in Component Behaviour</h2>
			<p>
				Before writing a media query, describe what the component should do as space
				changes. This keeps your CSS tied to behaviour instead of guesswork.
			</p>
			<ul>
				<li>A navigation list may wrap before becoming a stacked list.</li>
				<li>A CTA block may sit side-by-side when wide and stack when narrow.</li>
				<li>A card grid may create fewer columns as cards reach their minimum readable width.</li>
				<li>A media object may move its image above the text when the content becomes cramped.</li>
			</ul>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-responsive-refinement-component-behaviour.svg"
					alt="Diagram showing a CTA component changing from side-by-side layout to stacked layout as available space narrows."
				/>
				<figcaption>
					A responsive component has a behaviour plan: stretch when there is room, wrap
					when needed, and stack when the content asks for a simpler shape.
				</figcaption>
			</figure>

			<h2 id="fluid-spacing-type">Use Fluid Spacing and Type</h2>
			<p>
				Not every responsive adjustment needs a hard breakpoint. Some values can scale
				smoothly between a minimum and maximum. This is especially useful for section
				padding, card padding, gaps, and headings.
			</p>

			<pre><code>:root {
  --space-section: clamp(2rem, 6vw, 5rem);
  --space-card: clamp(1rem, 3vw, 2rem);
  --text-heading: clamp(2rem, 5vw, 4rem);
}

.section {
  padding-block: var(--space-section);
}

.menu-card {
  padding: var(--space-card);
}

.hero-title {
  font-size: var(--text-heading);
}</code></pre>

			<p>
				Read <code>clamp()</code> in plain English: use this minimum value, prefer this
				flexible middle value, but never exceed this maximum value. That gives the layout
				a smoother rhythm without writing a media query for every width.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-responsive-refinement-fluid-spacing.svg"
					alt="Diagram showing spacing and heading size growing smoothly from small to large screens instead of jumping suddenly at one breakpoint."
				/>
				<figcaption>
					Fluid spacing and type reduce sudden jumps. Breakpoints still matter, but the
					page rhythm can adapt continuously between them.
				</figcaption>
			</figure>

			<h2 id="media-queries">Use Media Queries When Behaviour Needs to Change</h2>
			<p>
				Media queries are still important. The refinement is knowing what they are for.
				Use a media query when a component needs a different layout behaviour, not just
				because a screen matches a popular device size.
			</p>

			<pre><code>.cta-block__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

@media (max-width: 42rem) {
  .cta-block__inner {
    align-items: flex-start;
  }

  .cta-block .button {
    width: 100%;
    text-align: center;
  }
}</code></pre>

			<p>
				This media query is tied to a real component behaviour: when the CTA gets narrow,
				the button becomes easier to tap and easier to scan as a full-width action.
			</p>

			<h2 id="container-queries">A Brief Note on Container Queries</h2>
			<p>
				Container queries let a component respond to the size of its container instead of
				the size of the whole viewport. That is powerful for reusable components because a
				card in a sidebar may need different behaviour from the same card in a wide grid.
			</p>
			<p>
				You do not need container queries for Black Swan Bistro Part 4. For now, know
				that they exist and that they extend the same idea: responsive decisions should be
				based on the space a component actually has.
			</p>

			<h2 id="responsive-checklist">Responsive Refinement Checklist</h2>
			<p>
				When refining a reusable component, run through this quick checklist:
			</p>
			<ul>
				<li>Does the component still make sense with more or less text?</li>
				<li>Does it have a readable maximum width?</li>
				<li>Does it have a safe minimum width?</li>
				<li>Can it wrap or stack before it breaks?</li>
				<li>Are spacing and typography fluid enough to avoid harsh jumps?</li>
				<li>Are links, buttons, and focus states still easy to use?</li>
				<li>Does the component CSS avoid depending on one specific page location?</li>
			</ul>

			<div class="notification is-warning is-light">
				<p>
					<strong>Keep the responsibility clear:</strong> page layout decides where a
					component sits. Component CSS decides how the component protects its own
					readability and usability.
				</p>
			</div>

			<h2 id="guided-practice">Guided Practice</h2>
			<GuidedPractice
				title="Refine one reusable component across widths"
				description="Use responsive refinement on one component without turning it into a full page redesign."
				:steps="guidedPracticeSteps"
				:success-criteria="guidedPracticeSuccessCriteria"
				success-criteria-title="You are on track if you can:"
			/>

			<h2 id="independent-practice">Independent Practice</h2>
			<IndependentPractice
				title="Independent Practice: Make a shared component more resilient"
				description="Apply the responsive refinement process to a different component or section."
				task-title="Your Task:"
				task="<p>Choose a reusable component such as a menu card, service card, CTA block, testimonial, or navigation pattern. Improve its responsive behaviour in about 10-20 minutes.</p><p>Do not rebuild the whole design. Focus on one component and one or two meaningful responsive improvements.</p>"
				:requirements="[
					'Identify the content pressure before changing CSS',
					'Use at least one flexible rule such as flex-wrap, minmax(), max-width, gap, or clamp()',
					'Add a media query only if the component behaviour genuinely changes',
					'Test the component at narrow, medium, and wide widths',
					'Write one sentence explaining why your breakpoint or flexible rule exists'
				]"
				:stretch-goals="[
					'Try a container-query version after the main solution works',
					'Test the component with longer text to see whether the refinement still holds'
				]"
				:rubric="independentPracticeRubric"
			/>

			<h2 id="recap">Recap</h2>
			<p>
				Responsive refinement is the difference between a layout that technically shrinks
				and a component that continues to feel clear, usable, and intentional. Start with
				the content. Use flexible CSS first. Add breakpoints when behaviour needs to
				change. Keep page layout and component behaviour separate.
			</p>
			<p>
				This prepares you for multi-page work because the same header, footer, cards, and
				CTA blocks need to survive more than one context.
			</p>

			<ClosureSection
				title="Lesson Complete: You Can Refine Components Responsively"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				next-steps="Next, you will learn how to organise shared structure across multiple pages before returning to Black Swan Bistro Part 4."
			/>

			<div id="additional-resources">
				<TutorialRecommendations :current-path="'/tutorials/intermediate/responsive-refinement-for-reusable-components'" />
			</div>
		</div>
	</div>
</template>
