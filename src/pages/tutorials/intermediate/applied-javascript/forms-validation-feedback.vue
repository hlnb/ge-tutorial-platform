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
	{ id: 'inputs-and-intent', title: 'Inputs and User Intent' },
	{ id: 'validation-rules', title: 'Validation Rules' },
	{ id: 'feedback-states', title: 'Feedback States' },
	{ id: 'project-example', title: 'Quiz Game Example' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'recap', title: 'Recap' },
	{ id: 'closure', title: 'Closure' },
];

usePageSections(pageSections);

const guidedPracticeSteps = [
	{
		title: 'Step 1: Identify what the form is trying to help the user do',
		instructions:
			'<p>Pick a realistic form such as a contact form, booking request, newsletter signup, or account setup flow. Write one sentence explaining the user goal.</p>',
		hints: [
			'Forms feel better when the code supports the user goal, not just the field list.',
		],
	},
	{
		title: 'Step 2: Write field rules in plain English',
		instructions:
			'<p>For each important field, write its rule before writing JavaScript. Example: email is required and must look like an email address, party size must be a positive number, message must be at least 20 characters.</p>',
		hints: [
			'Clear rules make validation easier to explain and test.',
		],
	},
	{
		title: 'Step 3: Match each rule to a friendly response',
		instructions:
			'<p>Decide what the user sees when a rule fails and when the form succeeds. Keep the feedback specific and calm.</p>',
		hints: [
			'Good feedback tells the user what to fix next.',
			'Success states should confirm what happened, not just remove errors.'
		],
	},
];

const independentPracticeRubric = [
	{
		criteria: 'Rule clarity',
		success: 'Each field has a clear, human-readable validation rule.',
	},
	{
		criteria: 'Feedback quality',
		success: 'Messages explain the issue or success state in plain English.',
	},
	{
		criteria: 'Flow thinking',
		success: 'The learner plans what happens before, during, and after submission.',
	},
	{
		criteria: 'User support',
		success: 'The form behaviour reduces confusion rather than adding friction.',
	},
];

const quizFeedbackExample = `function submitAnswer() {
  if (quizState.selectedAnswer === null) {
    feedbackEl.textContent = 'Choose an answer before continuing.';
    feedbackEl.className = 'feedback error';
    return;
  }

  const question = quizQuestions[quizState.currentQuestionIndex];
  const isCorrect = quizState.selectedAnswer === question.correctAnswer;

  feedbackEl.textContent = isCorrect
    ? 'Correct! Nice work.'
    : question.explanation;
  feedbackEl.className = \`feedback \${isCorrect ? 'success' : 'error'}\`;
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
					<li class="is-active"><a href="#" aria-current="page">Forms, Validation, and User Feedback</a></li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">40 min</span>
					<span class="tag is-light">Forms</span>
					<span class="tag is-light">Validation</span>
				</div>
			</div>

			<h1 class="title is-1">Forms, Validation, and User Feedback</h1>
			<p class="subtitle is-5">
				Make form behaviour clearer, kinder, and easier to trust.
			</p>

			<AnticipatorySet
				title="A Form Is a Conversation"
				icon="📝"
				:hook="`<p>Forms ask people to spend attention and effort. When a form fails silently, scolds the user, or only explains problems after submission, the interface feels unfriendly fast.</p><p>Better form logic treats validation as guidance. The code checks rules, but the real goal is to help the person understand what the page needs next.</p>`"
				:reflection-prompts="[
					'Which forms frustrate you most: vague, overly strict, or totally silent ones?',
					'What makes an error message feel useful instead of annoying?'
				]"
			/>

			<LearningObjectives
				:objectives="[
					'Define form rules in plain English before coding them',
					'Separate input collection from validation decisions',
					'Design clearer error and success feedback states',
					'Plan a more trustworthy submission flow'
				]"
				purpose="Validation is not just defensive code. It is part of the user experience."
				:prerequisites="[
					{ topic: 'Rendering Repeated Content', link: '/tutorials/intermediate/applied-javascript/rendering-repeated-content' },
					{ topic: 'DOM Events', link: '/tutorials/beginner/dom-basics/dom-events' },
					{ topic: 'Functions', link: '/tutorials/beginner/javascript-basics/functions' }
				]"
			/>

			<h2 id="inputs-and-intent">Inputs and User Intent</h2>
			<p>
				Every form exists to help the user do something: send a message, request a booking,
				sign up for updates, or create an account. Start with that goal. It gives you a
				better reason for each field and a better standard for the JavaScript behaviour.
			</p>

			<h2 id="validation-rules">Validation Rules</h2>
			<p>
				Validation works best when the rules are clear before the code exists. A rule should
				be something you could explain to a teammate or learner in one sentence.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<FlowSteps
					:steps="[
						{ title: 'Collect input', description: 'Read what the user typed or selected without guessing what they meant.' },
						{ title: 'Check the rule', description: 'Compare the input against a clear requirement such as required, format, or length.' },
						{ title: 'Respond clearly', description: 'Show feedback that helps the user either correct the issue or confirm success.' }
					]"
				/>
				<figcaption>
					Validation is a flow: collect, evaluate, then respond in a way the user can act on.
				</figcaption>
			</figure>

			<h2 id="feedback-states">Feedback States</h2>
			<p>
				A useful message tells the user what happened and what to do next. “Invalid input”
				is technically feedback, but it is not helpful feedback. Specific guidance is better:
				“Please enter an email address” or “Tell us a little more about your booking request.”
			</p>
			<div class="notification is-success is-light">
				<p>
					<strong>Good rule of thumb:</strong> if the user cannot tell what to fix after
					reading the message, the feedback still needs work.
				</p>
			</div>

			<div id="project-example">
				<ProjectCodeExample
					title="Running Example: Quiz Feedback Flow"
					intro="Quiz Game is not a form-heavy app, but it still has a validation moment: the learner must choose an answer before moving on."
					project-name="Quiz Game"
					project-path="/projects/quiz-game"
					:code="quizFeedbackExample"
					takeaway="The code checks for missing input first, then gives either a clear prompt to act or a success/error response tied to the current question."
				/>
			</div>

			<CheckpointBox
				title="Checkpoint for Understanding"
				:questions="[
					{
						question: 'Why should validation rules be written in plain English first?',
						answer: 'Because clear rules are easier to implement, test, and explain. They also keep the form behaviour aligned with the actual user goal.'
					},
					{
						question: 'What makes an error message helpful?',
						answer: 'It explains the problem specifically and tells the user what to do next.'
					}
				]"
				:tips="[
					'Validation should support the user, not punish them.',
					'Success states deserve just as much intention as error states.'
				]"
			/>

			<GuidedPractice
				title="Guided Practice: Plan a Friendly Form"
				description="Use a realistic form that someone might actually complete on a small business site."
				:steps="guidedPracticeSteps"
				:success-criteria="[
					'You wrote the user goal clearly',
					'You turned field expectations into plain-English rules',
					'You planned a response for both error and success states'
				]"
			/>

			<IndependentPractice
				title="Independent Practice"
				description="Design a validation and feedback plan before building the form."
				task-title="Your Task:"
				:task="`<p>Choose a contact, booking, signup, or enquiry form. Define the main user goal, list the required fields, write the validation rules, and draft the exact feedback messages for at least three failure cases and one success case.</p>`"
				:requirements="[
					'Include at least one required field rule',
					'Include one format or length rule',
					'Include one success message'
				]"
				:stretch-goals="[
					'Explain when validation should happen: on input, on blur, on submit, or a mix',
					'Add a reset or retry path after submission'
				]"
				:rubric="independentPracticeRubric"
			/>

			<section id="recap">
				<h2>Recap</h2>
				<ul>
					<li>Form code should support a clear user goal.</li>
					<li>Plain-English validation rules keep the logic understandable.</li>
					<li>Error and success states are both part of the experience.</li>
					<li>Specific feedback makes forms feel calmer and more trustworthy.</li>
				</ul>
			</section>

			<div id="closure">
				<ClosureSection
					:key-takeaways="[
						'Validation begins with clear human rules, not mysterious conditionals.',
						'Feedback should help the user act, not just report failure.',
						'Friendly forms reduce confusion and improve completion.'
					]"
					:objectives="[
						'Write clearer validation rules',
						'Design better error and success messages',
						'Plan a more supportive form flow'
					]"
					next-steps="<p>Next, you will scale up event handling so larger interfaces can respond to many interactions without turning repetitive or fragile.</p>"
				/>
			</div>

			<TutorialRecommendations
				:current-path="'/tutorials/intermediate/applied-javascript/forms-validation-feedback'"
				:practice-projects="[
					{
						title: 'Temperature Converter',
						description: 'A compact way to practise input handling, rules, and response messages.',
						tags: ['JavaScript', 'Forms'],
						path: '/projects/temperature-converter'
					},
					{
						title: 'Grade Calculator',
						description: 'Good for branching logic and user-facing feedback.',
						tags: ['JavaScript', 'Conditionals'],
						path: '/projects/grade-calculator'
					}
				]"
			/>
		</div>
	</div>
</template>

<style scoped>
</style>
