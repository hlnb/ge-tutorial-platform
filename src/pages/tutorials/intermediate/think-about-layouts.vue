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
  title: 'Think About Layouts',
  description: 'Develop a layout mental model before choosing CSS tools — how to read requirements and plan before you code.',
  path: '/tutorials/intermediate/think-about-layouts',
});

const sections = [
	{ id: 'layout-mental-model', title: 'Layout Mental Model' },
	{ id: 'big-shapes', title: 'See the Big Shapes' },
	{ id: 'hierarchy', title: 'Content Hierarchy' },
	{ id: 'rows-columns', title: 'Rows and Columns' },
	{ id: 'choose-tools', title: 'Choose the Right Tool' },
	{ id: 'simple-wireframe', title: 'Simple Wireframe' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'additional-resources', title: 'Additional Resources' },
	{ id: 'recap', title: 'Recap' },
];

usePageSections(sections);

const checkpointQuestions = [
	{
		question: 'When you first inspect a page, why is it useful to look for the biggest regions before the smaller details?',
		answer:
			'Because seeing the largest structural pieces reduces confusion and turns the page into a manageable set of layout decisions instead of one giant problem.',
	},
	{
		question: 'What is the difference between a page-level section and a repeated block inside that section?',
		answer:
			'A page-level section carries a larger content purpose, while a repeated block is usually one smaller pattern inside that section, such as a card or link cluster.',
	},
	{
		question: 'Predict what happens when you choose Flexbox or Grid before understanding the shape of the content first.',
		answer:
			'Tool choice becomes guesswork, which usually leads to messier layout decisions and more time spent correcting the structure later.',
	},
];

const guidedPracticeSteps = [
	{
		title: 'Step 1: Mark the biggest page regions',
		instructions:
			'<p>Take a homepage, landing page, or mockup you can see clearly. Ignore colours and detailed copy for a moment and mark the biggest regions first: header, hero, main content sections, and footer.</p><p>Your goal is to reduce the page to major structural pieces.</p>',
		hints: [
			'Squint a little and look for the largest blocks, not the smallest elements.',
			'If two pieces clearly serve one larger purpose, keep them together for now.',
		],
	},
	{
		title: 'Step 2: Label the internal relationships',
		instructions:
			'<p>Inside one or two sections, identify what feels like a row, what feels like a column, and what looks like a repeated matrix or collection.</p><p>Do not choose CSS yet. Just describe the relationship.</p>',
		hints: [
			'Navigation often behaves like a row.',
			'A stack of text and actions often behaves like a column.',
			'A collection of repeated cards often behaves like a grid.',
		],
	},
	{
		title: 'Step 3: Turn the observation into a wireframe',
		instructions:
			'<p>Rewrite the page as a simple text-only wireframe. Focus on structure, hierarchy, and repeated blocks rather than decoration.</p><p>This is the bridge between looking at the page and writing HTML or CSS later.</p>',
		hints: [
			'Use labels like Header, Hero, Feature Cards, Gallery, Footer.',
			'If the wireframe feels messy, the page structure may still be unclear.',
		],
	},
];

const guidedPracticeSuccessCriteria = [
	'You identified the main page regions before worrying about individual elements',
	'You described at least one section as a row, one as a column, or one as a repeated collection',
	'You produced a simple wireframe that could guide later HTML and CSS work',
	'You can explain why your tool choices should come after this structural step',
];

const independentPracticeRubric = [
	{
		criteria: 'Structural clarity',
		success: 'The page is broken into sensible large regions before smaller groups are analysed.',
	},
	{
		criteria: 'Relationship thinking',
		success: 'Rows, columns, and repeated collections are identified based on content shape rather than guesswork.',
	},
	{
		criteria: 'Wireframe usefulness',
		success: 'The wireframe is simple but detailed enough to guide later implementation.',
	},
	{
		criteria: 'Transfer of idea',
		success: 'The learner can explain how this layout-reading process would help before writing HTML or CSS.',
	},
];

const closureKeyTakeaways = [
	'Good layout thinking starts before code, not after it.',
	'Most pages can be understood as sections, groups, rows, columns, and repeated blocks.',
	'Layout is about hierarchy and relationships, not just where boxes sit on the screen.',
	'Choosing between normal flow, Flexbox, and Grid gets easier once you understand the shape of the content.',
];

const closureObjectives = [
	'Break a page into large structural pieces before writing CSS',
	'Recognise relationships between parent sections and smaller repeated groups',
	'Explain when a layout is mostly one-dimensional or two-dimensional',
	'Sketch a simple low-fidelity wireframe from a visual design',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-th-large',
		title: 'Seeing Structure',
		questions: [
			'When you first look at a page, do you notice details before structure?',
			'What changed when you started looking for groups instead of individual elements?',
		],
	},
	{
		icon: 'fas fa-columns',
		title: 'Layout Decisions',
		questions: [
			'Which parts of a page usually behave like a row or column?',
			'Which parts are better treated as repeated cards or a grid?',
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
						<a href="#" aria-current="page">How to Think About Layouts</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">30 min</span>
					<span class="tag is-light">Layout</span>
					<span class="tag is-light">Design</span>
				</div>
			</div>

			<h1 class="title is-1">How to Think About Layouts (Before You Write Any Code)</h1>

			<p class="subtitle is-5">
				A mental model for breaking a design into rows, columns, and sections.
			</p>

			<AnticipatorySet
				title="Do Not Start with CSS Properties"
				icon="🧠"
				:hook="`<p>When beginners see a homepage design, they often ask questions like: should I use Flexbox here, how many pixels of padding does this need, or which font size should I start with?</p><p>Those are real questions, but they are not the first questions. The first job is to understand the shape of the page. What are the large regions? Which pieces belong together? Which things repeat?</p><p>When you answer those questions first, layout becomes much less confusing.</p>`"
				:reflection-prompts="[
					'Have you ever opened a design and immediately jumped into CSS without a plan?',
					'Do you tend to focus on colours and small details before overall structure?',
					'What might become easier if you pause and map the page first?'
				]"
				connection="This lesson gives you the layout mental model you will use in the builder path and the Black Swan Bistro project."
			/>

			<LearningObjectives
				:objectives="[
					'See a page as a system of sections, groups, and repeated blocks',
					'Recognise hierarchy before choosing layout tools',
					'Describe whether a part of a page behaves like a row, column, or grid',
					'Sketch a simple wireframe that turns a design into something code-ready'
				]"
				purpose="Most layout problems become easier once you stop thinking in isolated elements and start thinking in relationships. This lesson trains that habit."
				:prerequisites="[
					{ topic: 'Box Model', link: '/tutorials/beginner/css-basics/box-model' },
					{ topic: 'Selectors & Properties', link: '/tutorials/beginner/css-basics/selectors' }
				]"
			/>

			<h2 id="layout-mental-model">Layout Mental Model</h2>
			<p>
				A webpage is not just a pile of boxes. It is a structure made of large regions,
				smaller groups inside those regions, and repeated patterns inside those groups.
			</p>
			<p>
				That means you can think in layers:
			</p>
			<ul>
				<li>Page-level regions such as header, main content, and footer</li>
				<li>Section-level groups such as hero, features, gallery, and call to action</li>
				<li>Repeated pieces such as cards, buttons, and navigation links</li>
			</ul>

			<h2 id="big-shapes">Step 1: See the Big Shapes First</h2>
			<p>
				When you first open a design, resist the urge to read every word or inspect every
				small detail. Squint a little and ask: what are the biggest visible blocks on the
				page?
			</p>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-think-about-layouts-big-shapes-overlay.svg"
					alt="Annotated page overlay showing header, hero, feature section, gallery or repeated content area, and footer as the largest page regions."
				/>
				<figcaption>
					This diagram shows the largest page regions before any CSS decisions. It matters
					because layout gets easier once you can identify the main structural pieces
					first.
				</figcaption>
			</figure>
			<div class="box">
				<pre><code>[ Header ]
[ Hero ]
[ Feature section ]
[ Testimonial section ]
[ Contact section ]
[ Footer ]</code></pre>
			</div>
			<p>
				This simple pass helps you stop treating the whole page as one giant problem.
				Instead, you start seeing a manageable set of sections.
			</p>

			<h2 id="hierarchy">Step 2: Look for Content Hierarchy</h2>
			<p>
				Every section has its own internal hierarchy. Usually there is a title, supporting
				text, and then one or more actions or content groups. Layout works better when you
				know what needs attention first.
			</p>
			<ul>
				<li>What is the main message of this section?</li>
				<li>What is secondary information?</li>
				<li>What is repeated?</li>
				<li>What is optional or decorative?</li>
			</ul>

			<h2 id="rows-columns">Step 3: Think in Rows and Columns</h2>
			<p>
				Many layouts become easier when you ask a simple question: is this mainly a row, a
				column, or a repeated matrix?
			</p>
			<ul>
				<li>A nav bar is often a row of related items.</li>
				<li>A mobile section stack is often a column of content blocks.</li>
				<li>A gallery or card collection is often a repeated grid.</li>
			</ul>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-think-about-layouts-row-column-grid-comparison.svg"
					alt="Three-panel comparison showing a row pattern for navigation, a column pattern for stacked card content, and a grid pattern for repeated cards or gallery items."
				/>
				<figcaption>
					Use this comparison to decide whether a layout problem is mainly one
					direction, another one direction, or a true two-dimensional pattern. That is
					usually the moment when tool choice becomes much clearer.
				</figcaption>
			</figure>

			<div class="notification is-info is-light">
				<p><strong>Helpful rule:</strong> if the main job is lining things up in one direction, think one-dimensional. If the main job is arranging repeated blocks in rows and columns, think two-dimensional.</p>
			</div>

			<CheckpointBox
				title="Checkpoint for Understanding"
				icon="🧩"
				description="Pause here and check whether you are reading structure before jumping to tool choice."
				:questions="checkpointQuestions"
				answers-button-text="Show sample answers"
			/>

			<h2 id="choose-tools">Step 4: Choose the Right Layout Tool</h2>
			<p>
				Once you understand the shape, tool choices become less mysterious.
			</p>
			<ul>
				<li>Use normal document flow when content can simply stack naturally.</li>
				<li>Use Flexbox when items need alignment in one main direction.</li>
				<li>Use Grid when repeated content needs rows and columns together.</li>
			</ul>
			<p>
				This is why layout thinking matters more than memorising syntax. The tool should
				serve the shape of the content.
			</p>

			<h2 id="simple-wireframe">Step 5: Make a Simple Wireframe</h2>
			<p>
				Before coding, sketch a stripped-back version of the page. It can be text-only.
				The point is to map structure, not create art.
			</p>
			<div class="box">
				<pre><code>[ Header: logo + nav ]
[ Hero: title + text + button ]
[ Three feature cards ]
[ About text block ]
[ Gallery grid ]
[ Footer links ]</code></pre>
			</div>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-think-about-layouts-design-to-wireframe-sequence.svg"
					alt="Three-panel sequence showing a polished design, a simplified block overlay, and a low-fidelity wireframe."
				/>
				<figcaption>
					A wireframe is what remains after you strip away polish and keep the structure.
					That makes it much easier to decide what belongs in the HTML and which layout
					tools you will need later.
				</figcaption>
			</figure>
			<p>
				If you can make this kind of rough layout plan, you are already doing one of the
				most important design-to-code jobs.
			</p>

			<h2 id="guided-practice">Guided Practice</h2>
			<GuidedPractice
				title="Turn a visual page into a layout plan"
				description="Use the lesson’s process in order so you practise seeing structure before making CSS decisions."
				:steps="guidedPracticeSteps"
				:success-criteria="guidedPracticeSuccessCriteria"
				success-criteria-title="You are on track if you can:"
			/>

			<h2 id="independent-practice">Independent Practice</h2>
			<IndependentPractice
				title="Independent Practice: Read a fresh layout"
				description="Now try the same skill on a different page without step-by-step support."
				task-title="Your Task:"
				task="<p>Choose a different homepage, restaurant site, portfolio page, or simple landing page. Break it into major regions, identify the internal relationships of at least two sections, and sketch a short wireframe plan.</p><p>Your goal is not to style it. Your goal is to understand the page well enough that writing HTML and choosing layout tools would feel clearer afterward.</p>"
				:requirements="[
					'Identify the main page regions first',
					'Describe at least two internal relationships such as row, column, or repeated collection',
					'Write a short wireframe or outline of the page structure',
					'Explain one tool choice you would likely make later and why'
				]"
				:stretch-goals="[
					'Compare two sections and explain why one feels one-dimensional while the other feels two-dimensional',
					'Note one repeated pattern that might become a reusable block later'
				]"
				:rubric="independentPracticeRubric"
			/>

			<h2 id="additional-resources">Additional Resources</h2>
			<p>
				If this way of thinking clicks for you, these resources are excellent for building
				stronger layout mental models:
			</p>
			<ul>
				<li>
					Every Layout
					&mdash; especially helpful for ideas like stack, center, cluster, sidebar, and
					grid as reusable layout patterns instead of one-off tricks.
				</li>
				<li>
					<a href="https://getbem.com" target="_blank" rel="noopener">
						BEM — Block Element Modifier
					</a>
					&mdash; useful once you start naming repeated layout and UI patterns more
					deliberately.
				</li>
			</ul>

			<h2 id="recap">Recap</h2>
			<p>
				Thinking about layout is really the skill of seeing structure clearly before you
				start styling. Once you can spot big sections, hierarchy, rows, columns, and
				repeated blocks, coding the page becomes much more straightforward.
			</p>

			<ClosureSection
				title="Lesson Complete: You Can Read the Shape of a Page"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				next-steps="Next, you will practise reading a design more closely by looking for spacing, colour, typography clues, and repeated patterns."
			/>

			<TutorialRecommendations :current-path="'/tutorials/intermediate/think-about-layouts'" />
		</div>
	</div>
</template>
