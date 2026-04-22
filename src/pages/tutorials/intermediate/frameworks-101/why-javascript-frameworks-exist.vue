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
	{ id: 'ui-scaling-problems', title: 'The Problems That Grow' },
	{ id: 'components-state-reactivity', title: 'Components, State, and Reactivity' },
	{ id: 'what-frameworks-buy-you', title: 'What Frameworks Buy You' },
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
					<li><router-link to="/tutorials/intermediate/frameworks-101">Frameworks 101</router-link></li>
					<li class="is-active"><a href="#" aria-current="page">Why JavaScript Frameworks Exist</a></li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">35 min</span>
					<span class="tag is-light">JavaScript</span>
					<span class="tag is-light">Frameworks</span>
				</div>
			</div>

			<h1 class="title is-1">Why JavaScript Frameworks Exist</h1>
			<p class="subtitle is-5">
				Understand the UI complexity problems frameworks try to reduce before worrying about brand names.
			</p>

			<AnticipatorySet
				title="Frameworks Came From Friction"
				icon="🛠️"
				:hook="`<p>JavaScript frameworks did not appear because developers wanted extra complexity for fun. They became popular because interface work grew harder: repeated UI pieces, changing state, lots of event wiring, and the need to keep everything in sync as applications became more dynamic.</p><p>This lesson looks at the pain points first. Once you understand those, framework features feel less mysterious.</p>`"
				:reflection-prompts="[
					'Which part of dynamic interface work already feels hardest to scale?',
					'When do plain DOM updates start feeling repetitive or fragile?'
				]"
			/>

			<LearningObjectives
				:objectives="[
					'Identify the main scaling problems JavaScript frameworks respond to',
					'Explain components, state, and reactivity at a high level',
					'Describe what frameworks make easier and what they still do not solve automatically',
					'Connect framework ideas back to plain JavaScript interface work'
				]"
				purpose="A framework makes more sense when you can name the pain it is trying to reduce."
				:prerequisites="[
					{ topic: 'State and UI Thinking', link: '/tutorials/intermediate/applied-javascript/state-and-ui-thinking' },
					{ topic: 'Rendering Repeated Content', link: '/tutorials/intermediate/applied-javascript/rendering-repeated-content' },
					{ topic: 'Events at Scale', link: '/tutorials/intermediate/applied-javascript/events-at-scale' }
				]"
			/>

			<h2 id="ui-scaling-problems">The Problems That Grow</h2>
			<p>
				Small interfaces can survive with direct DOM updates. Larger interfaces start to
				suffer from repeated rendering logic, duplicated selectors, inconsistent state, and
				too many places where one user action can affect several parts of the page.
			</p>
			<ul>
				<li>Many repeated UI pieces need to stay consistent.</li>
				<li>One state change may affect several visible areas.</li>
				<li>Event wiring grows repetitive.</li>
				<li>Features become harder to reason about as they spread across files.</li>
			</ul>

			<h2 id="components-state-reactivity">Components, State, and Reactivity</h2>
			<p>
				JavaScript frameworks usually respond to those problems with a small set of ideas:
				components to organise repeated UI, state to track changing data, and a reactive
				update model so the UI stays closer to the current values without as much manual DOM
				coordination.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<div class="js-framework-flow">
					<div class="flow-card"><strong>State changes</strong></div>
					<div class="flow-card"><strong>Framework updates view</strong></div>
					<div class="flow-card"><strong>UI stays in sync</strong></div>
				</div>
				<figcaption>
					The promise is not “no logic needed.” The promise is a clearer relationship between changing data and displayed UI.
				</figcaption>
			</figure>

			<h2 id="what-frameworks-buy-you">What Frameworks Buy You</h2>
			<p>
				Frameworks often buy you consistency, conventions, and a better default structure for
				growing interfaces. They do not eliminate design decisions, debugging, accessibility,
				or bad architecture. They mostly change the shape of the work.
			</p>

			<CheckpointBox
				title="Checkpoint for Understanding"
				:questions="[
					{
						question: 'What kind of frontend pain makes JavaScript frameworks appealing?',
						answer: 'Growing UI complexity such as repeated components, state that affects multiple interface regions, and too much manual syncing between values and DOM updates.'
					},
					{
						question: 'What does a framework usually improve without making your design decisions for you?',
						answer: 'It usually improves structure, consistency, and UI update patterns, but it does not automatically solve product, accessibility, or architecture decisions.'
					}
				]"
			/>

			<GuidedPractice
				title="Guided Practice: Match the Pain to the Framework Idea"
				description="Start from a real frontend pain point instead of from framework branding."
				:steps="[
					{
						title: 'Step 1: Pick a scaling problem',
						instructions: '<p>Choose one pain point such as repeated cards, syncing filter state, or managing many interactive UI pieces.</p>',
						hints: ['Real pain points make framework ideas easier to understand.']
					},
					{
						title: 'Step 2: Match it to a framework concept',
						instructions: '<p>Decide whether the problem points mainly toward component structure, state handling, reactive updates, or routing/application structure.</p>',
						hints: ['Do not try to match one problem to every framework feature at once.']
					},
					{
						title: 'Step 3: Explain the trade',
						instructions: '<p>Write one sentence describing what the framework would simplify and one sentence describing what new learning or tooling cost it introduces.</p>',
						hints: ['Framework value and framework cost should always be explained together.']
					}
				]"
				:success-criteria="[
					'You started with a real UI pain point',
					'You matched it to a likely framework concept',
					'You named both a benefit and a cost'
				]"
			/>

			<IndependentPractice
				title="Independent Practice"
				description="Explain a framework need without using framework slogans."
				task-title="Your Task:"
				:task="`<p>Choose one kind of interface you might build in the future: dashboard, booking app, searchable catalogue, or multi-step form. Explain which parts could become painful in plain JavaScript and which framework ideas might help. Keep the answer focused on problems and structure, not on choosing a specific brand.</p>`"
				:requirements="[
					'Name at least two interface pain points',
					'Connect them to framework ideas like components or state',
					'Mention at least one cost or tradeoff'
				]"
				:rubric="[
					{
						criteria: 'Problem-first thinking',
						success: 'The learner explains why frameworks exist in response to real UI friction.'
					},
					{
						criteria: 'Concept mapping',
						success: 'Framework ideas are matched to the right kinds of problems.'
					}
				]"
			/>

			<section id="recap">
				<h2>Recap</h2>
				<ul>
					<li>JavaScript frameworks grew in response to larger, more dynamic interfaces.</li>
					<li>Components, state, and reactivity are responses to UI coordination problems.</li>
					<li>Frameworks help structure the work, but they do not erase the need for good decisions.</li>
				</ul>
			</section>

			<div id="closure">
				<ClosureSection
					:key-takeaways="[
						'Framework popularity makes more sense when you see the pain they target.',
						'Components and state are organisational responses to UI complexity.',
						'Frameworks change the workflow, but they do not remove the need for fundamentals.'
					]"
					:objectives="[
						'Explain the main reason JavaScript frameworks appeared',
						'Connect framework ideas back to plain JavaScript problems',
						'Talk about framework value without hype'
					]"
					next-steps="<p>Next, you will look at CSS frameworks and related styling systems, which solve a different set of problems from JavaScript frameworks.</p>"
				/>
			</div>

			<TutorialRecommendations :current-path="'/tutorials/intermediate/frameworks-101/why-javascript-frameworks-exist'" />
		</div>
	</div>
</template>

<style scoped>
.js-framework-flow {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 1rem;
}

.flow-card {
	background: #f6fbff;
	border: 1px solid #b9d9f4;
	border-radius: 12px;
	padding: 1rem;
	text-align: center;
	font-weight: 600;
}

@media (max-width: 768px) {
	.js-framework-flow {
		grid-template-columns: 1fr;
	}
}
</style>
