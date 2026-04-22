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
import ProjectCodeExample from '@/components/tutorials/ProjectCodeExample.vue';

const pageSections = [
	{ id: 'many-interactions', title: 'When Interactions Multiply' },
	{ id: 'event-delegation', title: 'Event Delegation' },
	{ id: 'shared-handlers', title: 'Shared Handler Patterns' },
	{ id: 'project-example', title: 'Quiz Game Example' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'recap', title: 'Recap' },
	{ id: 'closure', title: 'Closure' },
];

usePageSections(pageSections);

const quizEventsExample = `choicesEl.addEventListener('click', (event) => {
  const button = event.target.closest('[data-choice]');
  if (!button) return;

  quizState.selectedAnswer = Number(button.dataset.choice);
  renderQuestion();
});

controlsEl.addEventListener('click', (event) => {
  if (event.target.matches('[data-action="next"]')) {
    submitAnswer();
  }

  if (event.target.matches('[data-action="restart"]')) {
    restartQuiz();
  }
});`;
</script>

<template>
	<div class="container section">
		<div class="tutorial-content">
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li><router-link to="/"><i class="fa-solid fa-house mr-2"></i> Home</router-link></li>
					<li><router-link to="/tutorials">Tutorials</router-link></li>
					<li><router-link to="/tutorials/intermediate/applied-javascript">Applied JavaScript</router-link></li>
					<li class="is-active"><a href="#" aria-current="page">Events at Scale</a></li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">35 min</span>
					<span class="tag is-light">Events</span>
					<span class="tag is-light">DOM</span>
				</div>
			</div>

			<h1 class="title is-1">Events at Scale</h1>
			<p class="subtitle is-5">
				Handle larger interfaces without attaching a separate pile of fragile listeners to every element.
			</p>

			<AnticipatorySet
				title="One Button Is Easy. Twenty Buttons Change the Problem."
				icon="🕹️"
				:hook="`<p>In beginner lessons, one listener on one button feels manageable. Real interfaces quickly outgrow that pattern. Menus have many filters, cards have repeated actions, and lists keep changing after rendering.</p><p>The solution is not more copy-paste. It is cleaner event architecture: shared handlers, predictable targets, and delegation when repeated elements live inside the same container.</p>`"
				:reflection-prompts="[
					'Where have repeated click handlers started to feel messy for you?',
					'How would it help if one listener could manage many similar UI actions?'
				]"
			/>

			<LearningObjectives
				:objectives="[
					'Recognise when one-listener-per-element stops scaling well',
					'Explain event delegation in plain English',
					'Use shared handler patterns for repeated controls',
					'Plan cleaner interaction logic for dynamic interfaces'
				]"
				purpose="Event architecture becomes much easier when repeated UI actions are treated as one pattern instead of many unrelated exceptions."
				:prerequisites="[
					{ topic: 'Forms, Validation, and User Feedback', link: '/tutorials/intermediate/applied-javascript/forms-validation-feedback' },
					{ topic: 'DOM Events', link: '/tutorials/beginner/dom-basics/dom-events' },
					{ topic: 'DOM Traversal', link: '/tutorials/beginner/dom-basics/dom-traversal' }
				]"
			/>

			<h2 id="many-interactions">When Interactions Multiply</h2>
			<p>
				If every repeated card gets its own hand-written listener, your feature can become
				hard to read fast. This is especially true when items are added later or rendered
				dynamically. The code starts describing individual elements instead of describing the
				interaction pattern.
			</p>

			<h2 id="event-delegation">Event Delegation</h2>
			<p>
				Event delegation means you attach a listener to a shared parent and inspect which
				child triggered the interaction. This works well for repeated buttons, list items, or
				card actions that live in the same region.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<div class="delegation-diagram">
					<div class="parent-node">Shared parent listener</div>
					<div class="child-row">
						<div class="child-node">Filter button</div>
						<div class="child-node">Filter button</div>
						<div class="child-node">Filter button</div>
					</div>
				</div>
				<figcaption>
					One shared listener can often coordinate many repeated controls when the interaction pattern is consistent.
				</figcaption>
			</figure>

			<h2 id="shared-handlers">Shared Handler Patterns</h2>
			<p>
				Delegation is one tool. Shared handlers are another. If multiple controls do similar
				work, pull the logic into one function that receives the important value. This keeps
				your event layer thin and your feature rules easier to update.
			</p>

			<div id="project-example">
				<ProjectCodeExample
					title="Running Example: Shared Quiz Event Handling"
					intro="This Quiz Game setup uses one listener for answer buttons and one listener for higher-level control actions."
					project-name="Quiz Game"
					project-path="/projects/quiz-game"
					:code="quizEventsExample"
					takeaway="Delegation keeps repeated answer buttons manageable, while shared control actions stop the feature from growing a separate listener for every button."
				/>
			</div>

			<CheckpointBox
				:title="'Checkpoint for Understanding'"
				:questions="[
					{
						question: 'When is event delegation especially helpful?',
						answer: 'When repeated elements inside the same container trigger similar behaviour, especially if those elements may be added or removed later.'
					},
					{
						question: 'Why are shared handlers useful even when you are not using delegation?',
						answer: 'Because they keep the important feature logic in one place instead of spreading it across many small, inconsistent listeners.'
					}
				]"
			/>

			<GuidedPractice
				title="Guided Practice: Refactor Repeated Interactions"
				description="Use a filter bar, FAQ list, or repeated card buttons as your example."
				:steps="[
					{
						title: 'Step 1: List the repeated interactions',
						instructions: '<p>Write down all the controls that currently behave the same way. Example: category buttons that all set a filter value.</p>',
						hints: ['If the code differs only by one value, you probably have a shared pattern.']
					},
					{
						title: 'Step 2: Choose the shared parent or shared function',
						instructions: '<p>Decide whether a parent listener plus delegation makes sense, or whether several elements should call one shared handler function with a different value.</p>',
						hints: ['Delegation is strongest when the controls live together in one container.']
					},
					{
						title: 'Step 3: Define the target value clearly',
						instructions: '<p>Write down the one value or identifier each interaction needs to pass into the shared logic, such as a category name, card id, or action type.</p>',
						hints: ['The smaller the handoff value, the easier the handler is to reason about.']
					}
				]"
				:success-criteria="[
					'You identified a repeated interaction pattern',
					'You chose a cleaner event architecture for it',
					'You defined the single value each interaction needs to pass'
				]"
			/>

			<IndependentPractice
				title="Independent Practice"
				description="Re-plan one interface so the event logic scales better."
				task-title="Your Task:"
				:task="`<p>Choose a repeated interaction pattern such as tabs, filters, accordion toggles, gallery category buttons, or action buttons on repeated cards. Explain how you would refactor it using event delegation or a shared handler. Name the shared parent or function, the target value, and the UI update that follows.</p>`"
				:requirements="[
					'Use a repeated interface pattern',
					'Explain why your chosen event structure scales better',
					'Describe the follow-up UI update'
				]"
				:stretch-goals="[
					'Add one edge case, such as clicking an already-active filter',
					'Note how your structure would work with dynamically added items'
				]"
				:rubric="[
					{
						criteria: 'Pattern recognition',
						success: 'The learner spots a repeated interaction instead of treating each element as unique.'
					},
					{
						criteria: 'Event structure',
						success: 'The event handling plan is cleaner and easier to scale.'
					},
					{
						criteria: 'State connection',
						success: 'The learner explains how the interaction updates feature state or UI.'
					}
				]"
			/>

			<section id="recap">
				<h2>Recap</h2>
				<ul>
					<li>Repeated interactions should usually share architecture, not duplicate handlers.</li>
					<li>Event delegation lets one parent manage many child actions.</li>
					<li>Shared handler functions keep interface rules easier to read and change.</li>
				</ul>
			</section>

			<div id="closure">
				<ClosureSection
					:key-takeaways="[
						'Scaling event logic is mostly about structure, not syntax tricks.',
						'Delegation works well for repeated controls inside a shared container.',
						'Shared handlers keep important feature behaviour in one place.'
					]"
					:objectives="[
						'Choose better event architecture for repeated interfaces',
						'Explain event delegation clearly',
						'Reduce repetitive listener code'
					]"
					next-steps="<p>Next, you will use objects to model interface data more clearly so larger features stay readable.</p>"
				/>
			</div>

			<TutorialRecommendations
				:current-path="'/tutorials/intermediate/applied-javascript/events-at-scale'"
				:practice-projects="[
					{
						title: 'Quiz Game',
						description: 'A strong fit for repeated actions, answer handling, and clearer event flow.',
						tags: ['JavaScript', 'Quiz'],
						path: '/projects/quiz-game'
					},
					{
						title: 'Photo Gallery 2',
						description: 'Useful for category buttons, repeated controls, and delegation thinking.',
						tags: ['JavaScript', 'Gallery'],
						path: '/projects/photo-gallery-2'
					}
				]"
			/>
		</div>
	</div>
</template>

<style scoped>
.delegation-diagram {
	display: grid;
	gap: 1rem;
}

.parent-node,
.child-node {
	border-radius: 12px;
	padding: 1rem;
	text-align: center;
}

.parent-node {
	background: #eef2ff;
	border: 1px solid #a5b4fc;
	font-weight: 700;
}

.child-row {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 1rem;
}

.child-node {
	background: #fffbea;
	border: 1px solid #f3d35e;
}

@media (max-width: 768px) {
	.child-row {
		grid-template-columns: 1fr;
	}
}
</style>
