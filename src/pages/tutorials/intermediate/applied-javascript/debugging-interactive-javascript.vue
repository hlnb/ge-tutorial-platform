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
	{ id: 'read-the-symptom', title: 'Read the Symptom First' },
	{ id: 'trace-values', title: 'Trace Values and Flow' },
	{ id: 'devtools-checks', title: 'DevTools Checks' },
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
					<li class="is-active"><a href="#" aria-current="page">Debugging Interactive JavaScript</a></li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">40 min</span>
					<span class="tag is-light">Debugging</span>
					<span class="tag is-light">DevTools</span>
				</div>
			</div>

			<h1 class="title is-1">Debugging Interactive JavaScript</h1>
			<p class="subtitle is-5">
				Find broken feature behaviour by tracing values, following event flow, and testing assumptions calmly.
			</p>

			<AnticipatorySet
				title="Interactive Bugs Usually Break the Story Somewhere"
				icon="🐛"
				:hook="`<p>When interactive JavaScript breaks, the temptation is to click faster, add random console logs, or rewrite parts of the feature at once. That usually hides the real problem.</p><p>A calmer approach asks where the story stopped making sense. Did the event fire? Did the state value change? Did the render logic receive the right data? Did the DOM update the right region?</p>`"
				:reflection-prompts="[
					'When a feature breaks, which part do you check first right now?',
					'Do you usually lose track of values, events, or rendered output?'
				]"
			/>

			<LearningObjectives
				:objectives="[
					'Describe an interactive bug in terms of event, value, and UI flow',
					'Trace changing values with clearer console and DevTools habits',
					'Use evidence to isolate where feature logic fails',
					'Debug one assumption at a time instead of rewriting blindly'
				]"
				purpose="The browser is full of evidence. Debugging gets easier when you follow the feature story step by step."
				:prerequisites="[
					{ topic: 'Objects for Real Features', link: '/tutorials/intermediate/applied-javascript/objects-for-real-features' },
					{ topic: 'How to Debug a Broken Web Page', link: '/tutorials/intermediate/debug-broken-web-page' }
				]"
			/>

			<h2 id="read-the-symptom">Read the Symptom First</h2>
			<p>
				Start with the visible symptom. “The filter buttons do nothing” is better than “The
				JavaScript is broken.” A good bug description narrows the investigation and makes the
				next debugging step concrete.
			</p>

			<h2 id="trace-values">Trace Values and Flow</h2>
			<p>
				Interactive features often fail because the value did not change when you thought it
				did, or because the next rendering step never ran. Trace the path clearly: event ->
				value change -> decision -> DOM update.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<div class="debug-flow">
					<div class="flow-node">Event fired?</div>
					<div class="flow-node">Value updated?</div>
					<div class="flow-node">Decision correct?</div>
					<div class="flow-node">UI changed?</div>
				</div>
				<figcaption>
					Interactive debugging becomes easier when you test one link in the feature chain at a time.
				</figcaption>
			</figure>

			<h2 id="devtools-checks">DevTools Checks</h2>
			<p>
				Use the Console to inspect values, not just to print vague messages. Use the Elements
				panel to confirm whether classes, text, or DOM nodes changed. When needed, add logs
				that answer one exact question at a time.
			</p>

			<CheckpointBox
				:title="'Checkpoint for Understanding'"
				:questions="[
					{
						question: 'What makes a console log useful while debugging?',
						answer: 'It answers a specific question, such as whether an event fired or whether a value changed, instead of dumping unrelated information.'
					},
					{
						question: 'Why is it helpful to test the event -> value -> UI chain step by step?',
						answer: 'Because it isolates where the feature story breaks and stops you from guessing across the whole system at once.'
					}
				]"
			/>

			<GuidedPractice
				title="Guided Practice: Trace a Broken Feature"
				description="Use a filter, form, or repeated-card interaction that could realistically fail."
				:steps="[
					{
						title: 'Step 1: Name the visible symptom',
						instructions: '<p>Write one sentence describing exactly what the user sees or does not see. Stay with behaviour, not guesses about cause.</p>',
						hints: ['Clear symptoms produce better debugging questions.']
					},
					{
						title: 'Step 2: Check whether the event fires',
						instructions: '<p>Use one targeted console message or breakpoint to verify that the user action reaches the handler.</p>',
						hints: ['If the event never fires, do not debug render logic yet.']
					},
					{
						title: 'Step 3: Check the value change and the UI update separately',
						instructions: '<p>Confirm the state value changes correctly. Then confirm the rendering step reads that value and updates the right part of the page.</p>',
						hints: ['Testing both at once makes it harder to see where the chain broke.']
					}
				]"
				:success-criteria="[
					'You described the symptom clearly',
					'You tested whether the event fired',
					'You separated value tracing from UI tracing'
				]"
			/>

			<IndependentPractice
				title="Independent Practice"
				description="Write a debugging plan for one realistic interactive failure."
				task-title="Your Task:"
				:task="`<p>Choose a possible bug in a gallery filter, booking form, quiz, or calculator. Describe the symptom, then write a four-step debugging checklist that follows the feature chain from event to UI update. Include the exact question each check is meant to answer.</p>`"
				:requirements="[
					'Name the symptom clearly',
					'Include at least one event check',
					'Include at least one value or state check',
					'Include at least one UI verification step'
				]"
				:stretch-goals="[
					'Add the most likely false assumption the developer might make',
					'Describe how the Elements panel or Network panel could help if relevant'
				]"
				:rubric="[
					{
						criteria: 'Evidence-based approach',
						success: 'The plan tests specific questions instead of rewriting blindly.'
					},
					{
						criteria: 'Flow awareness',
						success: 'The learner checks event, value, and UI in a logical order.'
					},
					{
						criteria: 'Debugging calm',
						success: 'The approach isolates one assumption at a time.'
					}
				]"
			/>

			<section id="recap">
				<h2>Recap</h2>
				<ul>
					<li>Describe the symptom before touching code.</li>
					<li>Check the event, then the value, then the rendering step.</li>
					<li>Use console and DevTools to answer specific questions.</li>
					<li>One tested assumption is better than five guesses.</li>
				</ul>
			</section>

			<div id="closure">
				<ClosureSection
					:key-takeaways="[
						'Interactive bugs usually break the feature story at one specific step.',
						'Targeted questions make console work dramatically more useful.',
						'Value tracing and DOM inspection are stronger together than random rewrites.'
					]"
					:objectives="[
						'Debug interactive features more systematically',
						'Trace state and render flow more clearly',
						'Use DevTools with better purpose'
					]"
					next-steps="<p>Next, you will refactor working-but-repetitive JavaScript so features stay readable as they grow.</p>"
				/>
			</div>

			<TutorialRecommendations
				:current-path="'/tutorials/intermediate/applied-javascript/debugging-interactive-javascript'"
				:practice-projects="[
					{
						title: 'Calculator',
						description: 'A good candidate for tracing interaction flow and debugging feature state.',
						tags: ['JavaScript', 'App'],
						path: '/projects/calculator'
					},
					{
						title: 'Quiz Game',
						description: 'Useful for checking event flow, score state, and rendered feedback.',
						tags: ['JavaScript', 'Quiz'],
						path: '/projects/quiz-game'
					}
				]"
			/>
		</div>
	</div>
</template>

<style scoped>
.debug-flow {
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	gap: 1rem;
}

.flow-node {
	background: #fff5f5;
	border: 1px solid #feb2b2;
	border-radius: 12px;
	padding: 1rem;
	text-align: center;
	font-weight: 600;
}

@media (max-width: 768px) {
	.debug-flow {
		grid-template-columns: 1fr;
	}
}
</style>
