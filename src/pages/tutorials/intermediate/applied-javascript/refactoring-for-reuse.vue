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
	{ id: 'spot-the-repetition', title: 'Spotting Repetition' },
	{ id: 'extract-helpers', title: 'Extracting Helpers' },
	{ id: 'feature-boundaries', title: 'Feature Boundaries' },
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
					<li class="is-active"><a href="#" aria-current="page">Refactoring for Reuse</a></li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">35 min</span>
					<span class="tag is-light">Refactoring</span>
					<span class="tag is-light">Reuse</span>
				</div>
			</div>

			<h1 class="title is-1">Refactoring for Reuse</h1>
			<p class="subtitle is-5">
				Clean up repetitive JavaScript so features stay readable, testable, and easier to extend.
			</p>

			<AnticipatorySet
				title="Working Code Can Still Be Tiring Code"
				icon="🧹"
				:hook="`<p>Many beginner features work, but only by repeating query selectors, update steps, and small conditionals in multiple places. The problem is not always correctness. Often the problem is future maintenance.</p><p>Refactoring for reuse means improving structure without changing the feature goal. You extract repeated ideas, name them clearly, and give each part of the code a smaller job.</p>`"
				:reflection-prompts="[
					'Which kind of repetition bothers you most: repeated selectors, repeated DOM updates, or repeated logic checks?',
					'How do you decide when a feature is ready for cleanup instead of more additions?'
				]"
			/>

			<LearningObjectives
				:objectives="[
					'Recognise when working code has become too repetitive',
					'Extract small helper functions with clearer responsibilities',
					'Separate feature setup, state updates, and rendering concerns',
					'Refactor without changing the user-facing goal'
				]"
				purpose="Refactoring keeps plain JavaScript approachable as features get more realistic."
				:prerequisites="[
					{ topic: 'Debugging Interactive JavaScript', link: '/tutorials/intermediate/applied-javascript/debugging-interactive-javascript' },
					{ topic: 'Building Reusable Components', link: '/tutorials/intermediate/building-reusable-components' }
				]"
			/>

			<h2 id="spot-the-repetition">Spotting Repetition</h2>
			<p>
				Repetition in JavaScript often shows up as the same DOM query in multiple places,
				the same formatting logic repeated for different states, or several event handlers
				that all rebuild the UI in nearly identical ways.
			</p>

			<h2 id="extract-helpers">Extracting Helpers</h2>
			<p>
				Helper functions are useful when a repeated step has one clear purpose: formatting a
				label, filtering records, toggling a class set, rendering a message, or resetting a
				form state. The goal is not many tiny functions. The goal is fewer repeated ideas.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<div class="refactor-diagram">
					<div class="refactor-card">
						<strong>Before</strong>
						<span>Repeated selectors, repeated updates, mixed concerns</span>
					</div>
					<div class="diagram-arrow">→</div>
					<div class="refactor-card">
						<strong>After</strong>
						<span>Small helpers, clearer state step, clearer render step</span>
					</div>
				</div>
				<figcaption>
					Refactoring is not about cleverness. It is about turning repeated effort into named, reusable structure.
				</figcaption>
			</figure>

			<h2 id="feature-boundaries">Feature Boundaries</h2>
			<p>
				A healthy plain-JavaScript feature often has three boundaries: setup, state changes,
				and rendering. The exact code can vary, but separating those concerns helps you debug,
				reuse, and extend the feature with less friction.
			</p>

			<CheckpointBox
				:title="'Checkpoint for Understanding'"
				:questions="[
					{
						question: 'What kind of repetition often signals that refactoring would help?',
						answer: 'Repeated selectors, repeated conditionals, repeated DOM updates, or multiple handlers that mostly do the same work.'
					},
					{
						question: 'Why is it useful to separate setup, state changes, and rendering?',
						answer: 'Because each part becomes easier to understand, test, and change without disturbing the others.'
					}
				]"
			/>

			<GuidedPractice
				title="Guided Practice: Refactor a Small Feature Plan"
				description="Start from a working but repetitive feature rather than from broken code."
				:steps="[
					{
						title: 'Step 1: Highlight the repeated lines or ideas',
						instructions: '<p>Look for selectors, conditions, or DOM updates that appear more than once. Group them by purpose.</p>',
						hints: ['Repeated ideas matter more than repeated line text.']
					},
					{
						title: 'Step 2: Name one helper worth extracting',
						instructions: '<p>Choose one repeated responsibility and give it a plain-English name such as <code>renderResults</code>, <code>updateStatusMessage</code>, or <code>setActiveFilter</code>.</p>',
						hints: ['Strong names make the refactor easier to trust.']
					},
					{
						title: 'Step 3: Re-separate the feature flow',
						instructions: '<p>Write a short plan that shows setup code, update logic, and rendering as distinct responsibilities.</p>',
						hints: ['The feature should feel easier to follow after the rewrite.']
					}
				]"
				:success-criteria="[
					'You identified one worthwhile repeated responsibility',
					'You named a helper clearly',
					'You separated the feature flow into cleaner responsibilities'
				]"
			/>

			<IndependentPractice
				title="Independent Practice"
				description="Refactor a builder-path feature conceptually before changing code."
				task-title="Your Task:"
				:task="`<p>Choose a feature such as a filterable gallery, quiz, calculator, or form. Describe three parts: the repetitive code smell, the helper or structure you would extract, and the cleaner flow after refactoring. Focus on readability and responsibility, not on advanced patterns.</p>`"
				:requirements="[
					'Name the repeated problem clearly',
					'Describe at least one extracted helper or boundary',
					'Explain how the refactor improves future maintenance'
				]"
				:stretch-goals="[
					'Note one variable or selector you would centralise',
					'Explain how the new structure would help debugging'
				]"
				:rubric="[
					{
						criteria: 'Problem diagnosis',
						success: 'The learner identifies meaningful repetition instead of cosmetic preferences.'
					},
					{
						criteria: 'Refactor quality',
						success: 'The proposed helpers or boundaries make the feature easier to read.'
					},
					{
						criteria: 'User focus',
						success: 'The refactor keeps the same user-facing goal while improving structure.'
					}
				]"
			/>

			<section id="recap">
				<h2>Recap</h2>
				<ul>
					<li>Refactoring is about clearer responsibility, not clever abstraction.</li>
					<li>Repeated selectors, conditions, and UI updates are strong cleanup signals.</li>
					<li>Helpful plain-JavaScript boundaries include setup, state changes, and rendering.</li>
				</ul>
			</section>

			<div id="closure">
				<ClosureSection
					:key-takeaways="[
						'Working code can still be hard to maintain if repetition keeps growing.',
						'Refactoring is strongest when it removes repeated responsibility clearly.',
						'Small helpers and clearer feature boundaries make debugging and extension easier.'
					]"
					:objectives="[
						'Spot stronger refactoring opportunities',
						'Extract reusable helpers more deliberately',
						'Separate feature responsibilities more clearly'
					]"
					next-steps="<p>The final lesson combines state, rendering, validation, debugging, and reuse in one bounded capstone feature plan.</p>"
				/>
			</div>

			<TutorialRecommendations
				:current-path="'/tutorials/intermediate/applied-javascript/refactoring-for-reuse'"
				:practice-projects="[
					{
						title: 'Todo List 2',
						description: 'A strong candidate for extracting repeated list, filter, and render logic.',
						tags: ['JavaScript', 'Arrays'],
						path: '/projects/todo-list-2'
					},
					{
						title: 'Calculator',
						description: 'Useful for thinking about helper functions and clearer feature boundaries.',
						tags: ['JavaScript', 'App'],
						path: '/projects/calculator'
					}
				]"
			/>
		</div>
	</div>
</template>

<style scoped>
.refactor-diagram {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 1rem;
	align-items: center;
}

.refactor-card {
	background: #f7fafc;
	border: 1px solid #cbd5e0;
	border-radius: 12px;
	padding: 1rem;
	text-align: center;
}

.diagram-arrow {
	display: none;
}

@media (max-width: 768px) {
	.refactor-diagram {
		grid-template-columns: 1fr;
	}
}
</style>
