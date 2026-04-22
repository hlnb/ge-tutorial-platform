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
import FlowSteps from '@/components/tutorials/FlowSteps.vue';
import ProjectCodeExample from '@/components/tutorials/ProjectCodeExample.vue';

const pageSections = [
	{ id: 'feature-brief', title: 'Choose a Bounded Feature' },
	{ id: 'implementation-plan', title: 'Plan the Implementation' },
	{ id: 'quality-checks', title: 'Quality Checks' },
	{ id: 'project-example', title: 'Quiz Game Example' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'recap', title: 'Recap' },
	{ id: 'closure', title: 'Closure' },
];

usePageSections(pageSections);

const quizCapstoneExample = `const quizState = {
  currentQuestionIndex: 0,
  score: 0,
  selectedAnswer: null,
  status: 'ready',
};

function initQuiz() {
  bindEvents();
  renderQuestion();
}

function bindEvents() {
  choicesEl.addEventListener('click', handleChoiceClick);
  nextButton.addEventListener('click', submitAnswer);
  restartButton.addEventListener('click', restartQuiz);
}

function renderQuestion() {
  const question = quizQuestions[quizState.currentQuestionIndex];
  questionTextEl.textContent = question.prompt;
  renderChoices(question);
  renderProgress();
}

function submitAnswer() {
  if (quizState.selectedAnswer === null) return showPrompt();
  const isCorrect = quizState.selectedAnswer === quizQuestions[quizState.currentQuestionIndex].correctAnswer;
  updateScore(isCorrect);
  showFeedback(isCorrect);
}`;
</script>

<template>
	<div class="container section">
		<div class="tutorial-content">
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li><router-link to="/"><i class="fa-solid fa-house mr-2"></i> Home</router-link></li>
					<li><router-link to="/tutorials">Tutorials</router-link></li>
					<li><router-link to="/tutorials/intermediate/applied-javascript">Applied JavaScript</router-link></li>
					<li class="is-active"><a href="#" aria-current="page">Capstone Feature Build</a></li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">50 min</span>
					<span class="tag is-light">Capstone</span>
					<span class="tag is-light">Feature Build</span>
				</div>
			</div>

			<h1 class="title is-1">Capstone Feature Build</h1>
			<p class="subtitle is-5">
				Combine state, rendering, validation, debugging, and reuse in one bounded interactive feature.
			</p>

			<AnticipatorySet
				title="This Is Where the Pieces Start Working Together"
				icon="🧩"
				:hook="`<p>You do not need a giant app to prove that your JavaScript skills have grown. A bounded feature is enough, as long as it makes you combine the right decisions: data shape, state changes, rendering, user feedback, and maintainable structure.</p><p>This lesson helps you plan one feature well enough that implementation becomes a clear next step instead of a vague ambition.</p>`"
				:reflection-prompts="[
					'Which kind of feature now feels realistic that would have felt too large earlier?',
					'What part of the implementation story do you trust most now: state, rendering, validation, debugging, or refactoring?'
				]"
			/>

			<LearningObjectives
				:objectives="[
					'Choose a feature scope that is ambitious enough to teach but small enough to finish',
					'Plan state, rendering, validation, and event flow together',
					'Identify the quality checks that protect the feature from regressions',
					'Prepare for implementation with a decision-complete feature outline'
				]"
				purpose="Capstone planning matters because good implementation begins with a feature scope that is coherent, testable, and teachable."
				:prerequisites="[
					{ topic: 'Refactoring for Reuse', link: '/tutorials/intermediate/applied-javascript/refactoring-for-reuse' }
				]"
			/>

			<h2 id="feature-brief">Choose a Bounded Feature</h2>
			<p>
				Good capstone candidates include a filterable gallery, searchable menu, quiz
				interface, booking enquiry panel, or small calculator with validation. Each is large
				enough to require structure, but small enough to finish without collapsing into a
				full application architecture problem.
			</p>

			<h2 id="implementation-plan">Plan the Implementation</h2>
			<p>
				Before coding, write the feature story:
			</p>
			<ul>
				<li>What state is stored?</li>
				<li>What data is rendered repeatedly?</li>
				<li>What events change the feature?</li>
				<li>What validation or feedback states matter?</li>
				<li>What helpers or boundaries keep the code maintainable?</li>
			</ul>

			<figure class="tutorial-figure tutorial-figure--wide">
				<FlowSteps
					:steps="[
						{ title: 'State', description: 'Choose the smallest set of values the feature needs to remember.' },
						{ title: 'Events', description: 'Name the user actions that can change those values.' },
						{ title: 'Rendering', description: 'Decide which interface regions update from the current data.' },
						{ title: 'Feedback', description: 'Plan success, error, empty, or prompt states the user may see.' },
						{ title: 'Debugging', description: 'Identify the checks you will use if the feature stops behaving as expected.' },
						{ title: 'Refactoring', description: 'Keep helpers and boundaries visible so the feature stays maintainable.' }
					]"
				/>
				<figcaption>
					A strong capstone feature touches several areas at once, but each area should still have a clear purpose.
				</figcaption>
			</figure>

			<h2 id="quality-checks">Quality Checks</h2>
			<p>
				A feature is not complete just because it appears to work once. Plan the checks:
				what happens with empty results, invalid input, repeated clicks, resets, and rapid
				interaction changes? These are the moments that reveal whether the structure is solid.
			</p>

			<div id="project-example">
				<ProjectCodeExample
					title="Running Example: Quiz Game as a Bounded Feature"
					intro="This Quiz Game outline shows how one medium-sized feature can combine state, rendering, events, feedback, and a clear setup flow without becoming a giant app."
					project-name="Quiz Game"
					project-path="/projects/quiz-game"
					:code="quizCapstoneExample"
					takeaway="The feature stays bounded because the responsibilities are clear: initialise, listen, render, validate, and update score."
				/>
			</div>

			<CheckpointBox
				:title="'Checkpoint for Understanding'"
				:questions="[
					{
						question: 'Why is a bounded feature better than a giant app for this stage of learning?',
						answer: 'Because it is big enough to combine real skills without overwhelming the learner with too many unrelated architectural decisions.'
					},
					{
						question: 'What makes a capstone plan implementation-ready?',
						answer: 'It clearly defines state, rendering, interactions, feedback, and quality checks before coding begins.'
					}
				]"
			/>

			<GuidedPractice
				title="Guided Practice: Outline a Capstone Feature"
				description="Pick one feature idea and make the scope teachable and buildable."
				:steps="[
					{
						title: 'Step 1: Choose the feature and define the user goal',
						instructions: '<p>Select one bounded feature and write one sentence about what the user is trying to accomplish.</p>',
						hints: ['If the feature has three unrelated goals, it is probably too large.']
					},
					{
						title: 'Step 2: Map the feature structure',
						instructions: '<p>List the stored state, repeated data, user events, and feedback states. Keep each list focused and concrete.</p>',
						hints: ['This should feel like a build outline, not a brainstorm.']
					},
					{
						title: 'Step 3: Add quality checks and helper boundaries',
						instructions: '<p>Name the key checks you would use to verify the feature and the helper functions or boundaries that would keep the code readable.</p>',
						hints: ['The best capstone plans already anticipate what could go wrong.']
					}
				]"
				:success-criteria="[
					'You chose a feature with clear boundaries',
					'You planned the major parts of the implementation',
					'You added realistic quality checks before coding'
				]"
			/>

			<IndependentPractice
				title="Independent Practice"
				description="Produce a build-ready outline for your own applied JavaScript feature."
				task-title="Your Task:"
				:task="`<p>Create a one-page plan for a bounded feature such as a searchable menu, filterable gallery, booking enquiry panel, or quiz interface. Include the user goal, stored state, repeated data, events, validation or feedback states, likely helpers, and a short testing checklist.</p>`"
				:requirements="[
					'Choose a feature with one clear goal',
					'Include state, event, and rendering notes',
					'Include at least three quality checks'
				]"
				:stretch-goals="[
					'Sketch the HTML regions the feature will update',
					'Write pseudocode for the main render function'
				]"
				:rubric="[
					{
						criteria: 'Scope control',
						success: 'The feature is ambitious enough to teach but still realistically buildable.'
					},
					{
						criteria: 'Implementation clarity',
						success: 'State, rendering, events, and feedback are planned clearly.'
					},
					{
						criteria: 'Quality mindset',
						success: 'The learner anticipates empty, invalid, or repeated interaction states.'
					}
				]"
			/>

			<section id="recap">
				<h2>Recap</h2>
				<ul>
					<li>A bounded feature is the right size for this stage of learning.</li>
					<li>Good planning brings together state, rendering, events, feedback, and reuse.</li>
					<li>Quality checks belong in the plan, not only after implementation.</li>
				</ul>
			</section>

			<div id="closure">
				<ClosureSection
					:key-takeaways="[
						'Applied JavaScript is really about structuring interface behaviour responsibly.',
						'Bounded feature work turns separate lessons into one coherent build story.',
						'Planning quality checks early keeps the feature more trustworthy later.'
					]"
					:objectives="[
						'Choose a sensible capstone feature scope',
						'Plan an implementation-ready feature outline',
						'Carry testing and quality thinking into feature design'
					]"
					next-steps="<p>Use this feature brief as the basis for a practice build or a future project lesson. The important shift is already underway: you are no longer just writing JavaScript. You are designing interaction systems.</p>"
				/>
			</div>

			<TutorialRecommendations
				:current-path="'/tutorials/intermediate/applied-javascript/capstone-feature-build'"
				:practice-projects="[
					{
						title: 'Quiz Game',
						description: 'A strong capstone candidate for state, rendering, feedback, and debugging.',
						tags: ['JavaScript', 'Quiz'],
						path: '/projects/quiz-game'
					},
					{
						title: 'Todo List 2',
						description: 'A practical capstone option with richer list state and filtering behaviour.',
						tags: ['JavaScript', 'Arrays'],
						path: '/projects/todo-list-2'
					}
				]"
			/>
		</div>
	</div>
</template>

<style scoped>
</style>
