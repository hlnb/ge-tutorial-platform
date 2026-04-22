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
	{ id: 'grouping-related-values', title: 'Grouping Related Values' },
	{ id: 'collections-of-records', title: 'Collections of Records' },
	{ id: 'arrays-vs-objects', title: 'Arrays vs Objects' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'recap', title: 'Recap' },
	{ id: 'closure', title: 'Closure' },
];

usePageSections(pageSections);
</script>

<template>
	<div class="container section">
		<div class="tutorial-content">
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li><router-link to="/"><i class="fa-solid fa-house mr-2"></i> Home</router-link></li>
					<li><router-link to="/tutorials">Tutorials</router-link></li>
					<li><router-link to="/tutorials/intermediate/applied-javascript">Applied JavaScript</router-link></li>
					<li class="is-active"><a href="#" aria-current="page">Objects for Real Features</a></li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">35 min</span>
					<span class="tag is-light">Objects</span>
					<span class="tag is-light">Data</span>
				</div>
			</div>

			<h1 class="title is-1">Objects for Real Features</h1>
			<p class="subtitle is-5">
				Use objects and collections to model interface data more clearly than loose variables ever can.
			</p>

			<AnticipatorySet
				title="Real Features Carry Related Information"
				icon="🧾"
				:hook="`<p>A menu card has a title, category, description, price, and maybe an image. A booking request has a name, party size, date, and notes. A filter panel has labels, ids, and active states. These values belong together.</p><p>Objects help you keep that relationship visible. Instead of scattering information across many unrelated variables, you model one meaningful thing at a time.</p>`"
				:reflection-prompts="[
					'Where have loose variables started to feel disconnected in your own code?',
					'Which repeated interfaces in GraphiteEdge would benefit from stronger data grouping?'
				]"
			/>

			<LearningObjectives
				:objectives="[
					'Explain why objects help model real interface data',
					'Use collections of records for repeated UI features',
					'Choose more confidently between arrays and objects',
					'Group related values so features stay easier to reason about'
				]"
				purpose="Good JavaScript structure is often really good data structure. Clearer modeling leads to clearer rendering and clearer feature logic."
				:prerequisites="[
					{ topic: 'Events at Scale', link: '/tutorials/intermediate/applied-javascript/events-at-scale' },
					{ topic: 'Rendering Repeated Content', link: '/tutorials/intermediate/applied-javascript/rendering-repeated-content' }
				]"
			/>

			<h2 id="grouping-related-values">Grouping Related Values</h2>
			<p>
				Objects are helpful whenever several values describe the same thing. A product card,
				FAQ item, testimonial, nav link, or booking request is usually easier to understand
				as one object than as five or six separate variables.
			</p>

			<h2 id="collections-of-records">Collections of Records</h2>
			<p>
				When a feature repeats, you often need an array of objects. Each object describes one
				item. The array describes the collection. This is what makes repeated rendering,
				filtering, and search logic feel natural instead of improvised.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<div class="object-diagram">
					<div class="object-card">
						<strong>One object</strong>
						<code>{ title, category, price }</code>
					</div>
					<div class="diagram-arrow">→</div>
					<div class="object-card">
						<strong>Array of objects</strong>
						<code>[ item, item, item ]</code>
					</div>
					<div class="diagram-arrow">→</div>
					<div class="object-card">
						<strong>Rendered interface</strong>
						<span>cards, filters, counts</span>
					</div>
				</div>
				<figcaption>
					Objects model one thing clearly. Arrays collect many of those things so the interface can work with them as a group.
				</figcaption>
			</figure>

			<h2 id="arrays-vs-objects">Arrays vs Objects</h2>
			<p>
				Use an object when you are describing one thing with named properties. Use an array
				when order matters or when you have many similar items to work through. Many real
				features use both: one object for current feature state and one array for the records
				being displayed.
			</p>

			<CheckpointBox
				:title="'Checkpoint for Understanding'"
				:questions="[
					{
						question: 'Why are objects useful for real interface features?',
						answer: 'Because they keep related values together so one feature, item, or record can be understood as one unit.'
					},
					{
						question: 'When do arrays and objects often work together?',
						answer: 'When an interface has a collection of records to display plus one object that stores current feature state.'
					}
				]"
			/>

			<GuidedPractice
				title="Guided Practice: Model a Feature With Objects"
				description="Use a menu, FAQ, settings panel, or booking request as your example."
				:steps="[
					{
						title: 'Step 1: Pick one real feature entity',
						instructions: '<p>Choose one meaningful thing to model, such as a menu item, FAQ entry, booking request, or filter option. List the properties it needs.</p>',
						hints: ['If the values belong to the same real-world thing, they probably belong in one object.']
					},
					{
						title: 'Step 2: Decide whether you need one object or many',
						instructions: '<p>Ask whether the interface handles one item at a time, or a repeated collection of similar items. If it repeats, plan an array of objects.</p>',
						hints: ['Repeated UI almost always points toward an array of objects.']
					},
					{
						title: 'Step 3: Connect the model to the interface',
						instructions: '<p>Write one sentence explaining how the object properties will appear in the UI and how a user action might update them.</p>',
						hints: ['Data modeling is useful only when it helps the interface stay clearer.']
					}
				]"
				:success-criteria="[
					'You grouped related values meaningfully',
					'You chose between one object and a collection of objects clearly',
					'You connected the model to a visible UI behaviour'
				]"
			/>

			<IndependentPractice
				title="Independent Practice"
				description="Re-model one existing builder-path feature using objects."
				task-title="Your Task:"
				:task="`<p>Take a familiar feature such as a gallery, quiz, menu list, FAQ, or booking form. Rewrite its data plan using objects or an array of objects. Then explain how the interface would render that data and which values would change during user interaction.</p>`"
				:requirements="[
					'Use at least one object with named properties',
					'Explain whether a collection is needed',
					'Describe how the UI reads the data'
				]"
				:stretch-goals="[
					'Add a current-state object alongside the record collection',
					'Note one derived value the feature can calculate from the data'
				]"
				:rubric="[
					{
						criteria: 'Data grouping',
						success: 'Related values are modeled together instead of scattered.'
					},
					{
						criteria: 'Interface connection',
						success: 'The learner explains how the model supports rendering or interaction.'
					},
					{
						criteria: 'Structure choice',
						success: 'The choice between objects and arrays is deliberate and justified.'
					}
				]"
			/>

			<section id="recap">
				<h2>Recap</h2>
				<ul>
					<li>Objects model one meaningful thing with related properties.</li>
					<li>Arrays collect many similar records for repeated interface work.</li>
					<li>Many features use both a record collection and a separate current-state object.</li>
				</ul>
			</section>

			<div id="closure">
				<ClosureSection
					:key-takeaways="[
						'Good feature design often starts with better data grouping.',
						'Objects reduce the confusion that comes from scattered variables.',
						'Arrays of objects support rendering, filtering, and richer UI logic cleanly.'
					]"
					:objectives="[
						'Model interface data more clearly with objects',
						'Use collections of records for repeated content',
						'Choose arrays and objects more confidently'
					]"
					next-steps="<p>Next, you will apply this clearer data thinking to debugging interactive JavaScript features when they stop behaving as expected.</p>"
				/>
			</div>

			<TutorialRecommendations
				:current-path="'/tutorials/intermediate/applied-javascript/objects-for-real-features'"
				:practice-projects="[
					{
						title: 'Quiz Game',
						description: 'Great practice for question objects, answer state, and interface updates.',
						tags: ['JavaScript', 'Quiz'],
						path: '/projects/quiz-game'
					},
					{
						title: 'Calculator',
						description: 'Useful for grouping feature state and decisions more deliberately.',
						tags: ['JavaScript', 'App'],
						path: '/projects/calculator'
					}
				]"
			/>
		</div>
	</div>
</template>

<style scoped>
.object-diagram {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 1rem;
	align-items: center;
}

.object-card {
	background: #f7fafc;
	border: 1px solid #cbd5e0;
	border-radius: 12px;
	padding: 1rem;
	text-align: center;
}

.object-card code {
	display: block;
	margin-top: 0.5rem;
}

.diagram-arrow {
	text-align: center;
	font-size: 2rem;
	color: #4a5568;
}

@media (max-width: 768px) {
	.object-diagram {
		grid-template-columns: 1fr;
	}

	.diagram-arrow {
		transform: rotate(90deg);
	}
}
</style>
