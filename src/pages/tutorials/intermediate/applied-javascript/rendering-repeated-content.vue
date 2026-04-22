<script setup>
import '@/assets/styles/tutorials.css';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

const pageSections = [
	{ id: 'from-data-to-ui', title: 'From Data to Interface' },
	{ id: 'empty-and-filtered-states', title: 'Empty and Filtered States' },
	{ id: 'avoid-duplication', title: 'Avoiding Markup Duplication' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'recap', title: 'Recap' },
	{ id: 'closure', title: 'Closure' },
];

usePageSections(pageSections);

const checkpointQuestions = [
	{
		question: 'Why is rendering repeated cards from data better than copying and editing the same markup by hand?',
		answer:
			'Because the repeated structure stays consistent and the changing values live in data, which makes filtering, sorting, and later updates much easier to manage.',
	},
	{
		question: 'What should an interface do when a filter matches zero items?',
		answer:
			'It should handle that state deliberately with an empty-state message or fallback UI instead of silently rendering nothing and confusing the learner or user.',
	},
];

const guidedPracticeSteps = [
	{
		title: 'Step 1: Choose a repeated pattern',
		instructions:
			'<p>Pick a realistic repeated interface such as menu cards, gallery images, event listings, or FAQ entries. List the fields each item needs, such as title, category, image, or price.</p>',
		hints: [
			'Repeated rendering works best when every item shares the same core shape.',
			'Think in terms of records, not loose variables.',
		],
	},
	{
		title: 'Step 2: Separate the shell from the data',
		instructions:
			'<p>Write a small template or rendering plan that shows the stable card structure once. Then mark which parts are filled from the current item data.</p>',
		hints: [
			'Keep the HTML shape stable and let the data vary inside it.',
			'If every card needs a different structure, it may be more than one pattern.',
		],
	},
	{
		title: 'Step 3: Plan filtered and empty states',
		instructions:
			'<p>Describe what happens when the list is filtered. Then describe what the user sees if no items match. Do not leave this as an accidental outcome.</p>',
		hints: [
			'Interfaces feel more trustworthy when zero results are explained clearly.',
			'A result count often helps users understand what changed.',
		],
	},
];

const guidedPracticeSuccessCriteria = [
	'You defined a repeated item shape with clear fields',
	'You separated the stable card shell from changing values',
	'You planned at least one filtered state and one empty state',
];

const independentPracticeRubric = [
	{
		criteria: 'Data shape',
		success: 'The learner uses a consistent item structure instead of disconnected variables.',
	},
	{
		criteria: 'Rendering logic',
		success: 'The repeated UI can be explained as one stable pattern filled with different values.',
	},
	{
		criteria: 'State coverage',
		success: 'Filtered, sorted, or empty states are handled deliberately.',
	},
	{
		criteria: 'Maintainability',
		success: 'Adding another item should not require writing a new block of custom HTML.',
	},
];
</script>

<template>
	<div class="container section">
		<div class="tutorial-content">
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li><router-link to="/"><i class="fa-solid fa-house mr-2"></i> Home</router-link></li>
					<li><router-link to="/tutorials">Tutorials</router-link></li>
					<li><router-link to="/tutorials/intermediate/applied-javascript">Applied JavaScript</router-link></li>
					<li class="is-active"><a href="#" aria-current="page">Rendering Repeated Content</a></li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">40 min</span>
					<span class="tag is-light">Rendering</span>
					<span class="tag is-light">Arrays</span>
				</div>
			</div>

			<h1 class="title is-1">Rendering Repeated Content</h1>
			<p class="subtitle is-5">
				Turn arrays and objects into cards, lists, and clear interface states without duplicating markup.
			</p>

			<AnticipatorySet
				title="Repeated Interfaces Deserve Repeated Logic"
				icon="🗂️"
				:hook="`<p>A menu page, product grid, photo gallery, schedule list, or FAQ all have something in common: the interface repeats the same visual structure for different pieces of data.</p><p>When learners copy and edit each block by hand, the page becomes harder to maintain. Rendering from data is the upgrade. One stable structure can represent many items, and the interface becomes easier to filter, sort, and update.</p>`"
				:reflection-prompts="[
					'Where have you already copied the same block of HTML more than twice?',
					'What changes between each repeated block, and what stays the same?',
					'How would a filter or search feel if the data shape were already clear?'
				]"
			/>

			<LearningObjectives
				:objectives="[
					'Describe repeated UI as a stable shell plus changing data',
					'Plan item shapes for cards, lists, and similar interface patterns',
					'Handle empty and filtered states deliberately',
					'Reduce duplicated markup through clearer rendering logic'
				]"
				purpose="Repeated rendering is where JavaScript starts to feel like interface architecture rather than isolated click handlers."
				:prerequisites="[
					{ topic: 'State and UI Thinking', link: '/tutorials/intermediate/applied-javascript/state-and-ui-thinking' },
					{ topic: 'Arrays', link: '/tutorials/beginner/dom-basics/arrays' },
					{ topic: 'Dynamic Content', link: '/tutorials/beginner/dom-basics/dynamic-content' }
				]"
			/>

			<h2 id="from-data-to-ui">From Data to Interface</h2>
			<p>
				A repeated interface usually has two layers: a stable outer shape and changing
				item data. The stable layer is the card, row, or entry structure. The changing
				layer is the title, image, category, description, or button label.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<div class="render-diagram">
					<div class="render-column">
						<strong>Data</strong>
						<ul>
							<li>title</li>
							<li>category</li>
							<li>price</li>
						</ul>
					</div>
					<div class="diagram-arrow">→</div>
					<div class="render-column">
						<strong>Template</strong>
						<ul>
							<li>Card shell</li>
							<li>Heading spot</li>
							<li>Meta spot</li>
						</ul>
					</div>
					<div class="diagram-arrow">→</div>
					<div class="render-column">
						<strong>Rendered UI</strong>
						<ul>
							<li>Many cards</li>
							<li>Consistent layout</li>
							<li>Easy to filter</li>
						</ul>
					</div>
				</div>
				<figcaption>
					You are not rendering one-off markup. You are rendering a repeatable pattern from structured data.
				</figcaption>
			</figure>

			<h2 id="empty-and-filtered-states">Empty and Filtered States</h2>
			<p>
				Once content is data-driven, the interface needs to explain what happened when a
				user filters or searches. If no items match, the page should say so clearly.
				Empty states are not edge-case leftovers. They are part of the feature design.
			</p>

			<div class="box">
				<h3 class="title is-5">Useful empty-state questions</h3>
				<ul>
					<li>Should the result count update?</li>
					<li>Should a “no matches” message appear?</li>
					<li>Should the user have an easy reset action?</li>
				</ul>
			</div>

			<h2 id="avoid-duplication">Avoiding Markup Duplication</h2>
			<p>
				If a new item requires copying a huge block of custom markup, the pattern is not yet
				earning its keep. A better rendering setup lets you add another item by changing the
				data, not rewriting the structure from scratch.
			</p>

			<CheckpointBox
				title="Checkpoint for Understanding"
				:questions="checkpointQuestions"
				:tips="[
					'Stable structure plus changing data is the key repeated-rendering idea.',
					'Empty states should feel intentional, not accidental.'
				]"
			/>

			<GuidedPractice
				title="Guided Practice: Plan a Repeated Interface"
				description="Use a gallery, menu, or list so the pattern feels realistic."
				:steps="guidedPracticeSteps"
				:success-criteria="guidedPracticeSuccessCriteria"
			/>

			<IndependentPractice
				title="Independent Practice"
				description="Design a small repeated interface using builder-path content."
				task-title="Your Task:"
				:task="`<p>Create a rendering plan for one realistic repeated interface: a menu section, gallery, pricing list, testimonials block, or FAQ. Define the item shape, describe the stable outer structure, and explain how the interface should behave when filtered or empty.</p>`"
				:requirements="[
					'List the fields for each item',
					'Describe the repeated shell once',
					'Include at least one empty or filtered state'
				]"
				:stretch-goals="[
					'Add sorting or category logic to your plan',
					'Write pseudocode for a simple render function'
				]"
				:rubric="independentPracticeRubric"
			/>

			<section id="recap">
				<h2>Recap</h2>
				<ul>
					<li>Repeated interface work starts with a clear item shape.</li>
					<li>The UI shell should stay stable while the data changes.</li>
					<li>Filtering and empty states are part of the feature, not afterthoughts.</li>
					<li>Good rendering logic reduces markup duplication and future friction.</li>
				</ul>
			</section>

			<div id="closure">
				<ClosureSection
					:key-takeaways="[
						'Repeated content becomes easier to manage when the data shape is clear.',
						'Stable templates reduce copy-paste maintenance problems.',
						'Filtered and empty states improve trust because the interface explains itself.',
						'Rendering decisions get easier when state and data stay separate from markup.'
					]"
					:objectives="[
						'Plan repeated content as data plus a stable interface shell',
						'Handle filtered and empty states deliberately',
						'Reduce duplication in repeated UI patterns'
					]"
					next-steps="<p>The next lesson moves from rendered lists into forms, validation, and user feedback so your interfaces can respond to richer input.</p>"
				/>
			</div>

			<TutorialRecommendations
				:current-path="'/tutorials/intermediate/applied-javascript/rendering-repeated-content'"
				:practice-projects="[
					{
						title: 'Photo Gallery 2',
						description: 'A strong match for repeated rendering, filtering, and empty-state thinking.',
						tags: ['JavaScript', 'Gallery'],
						path: '/projects/photo-gallery-2'
					},
					{
						title: 'Todo List 2',
						description: 'Good practice for rendering item collections and handling changing list state.',
						tags: ['JavaScript', 'Arrays'],
						path: '/projects/todo-list-2'
					}
				]"
			/>
		</div>
	</div>
</template>

<style scoped>
.render-diagram {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 1rem;
	align-items: center;
}

.render-column {
	background: #f8fbff;
	border: 1px solid #b8d7ff;
	border-radius: 12px;
	padding: 1rem;
}

.diagram-arrow {
	text-align: center;
	font-size: 2rem;
	color: #2b6cb0;
}

@media (max-width: 768px) {
	.render-diagram {
		grid-template-columns: 1fr;
	}

	.diagram-arrow {
		transform: rotate(90deg);
	}
}
</style>
