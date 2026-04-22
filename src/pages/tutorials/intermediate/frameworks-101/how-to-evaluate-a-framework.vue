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
	{ id: 'evaluation-questions', title: 'The Core Evaluation Questions' },
	{ id: 'project-fit', title: 'Project and Team Fit' },
	{ id: 'learning-fit', title: 'Skill and Learning Fit' },
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
					<li class="is-active"><a href="#" aria-current="page">How to Evaluate a Framework Without Panic</a></li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">30 min</span>
					<span class="tag is-light">Evaluation</span>
					<span class="tag is-light">Planning</span>
				</div>
			</div>

			<h1 class="title is-1">How to Evaluate a Framework Without Panic</h1>
			<p class="subtitle is-5">
				Use a calm checklist to judge fit instead of reacting to hype, fear, or fashion.
			</p>

			<AnticipatorySet
				title="You Do Not Need to Chase Every Trend"
				icon="🧩"
				:hook="`<p>Framework conversations can make learners feel behind very quickly. A new tool appears, people call it essential, and suddenly it feels like your current skills no longer count.</p><p>That anxiety is rarely helpful. Better evaluation starts with a short list of questions about the problem, the project, the team, and your current level of understanding.</p>`"
			/>

			<LearningObjectives
				:objectives="[
					'Use a short evaluation checklist for new frameworks',
					'Judge framework fit based on project needs instead of hype',
					'Include team and learning context in the decision',
					'Explain a framework recommendation calmly and clearly'
				]"
				purpose="The goal is not to predict a universal winner. The goal is to make thoughtful, context-aware choices."
				:prerequisites="[
					{ topic: 'Framework Tradeoffs and Costs', link: '/tutorials/intermediate/frameworks-101/framework-tradeoffs-and-costs' }
				]"
			/>

			<h2 id="evaluation-questions">The Core Evaluation Questions</h2>
			<p>
				Before adopting a framework, ask:
			</p>
			<ul>
				<li>What problem is this supposed to solve?</li>
				<li>Is that problem real for this project right now?</li>
				<li>What structure or conventions does it expect?</li>
				<li>What tooling or ecosystem commitment comes with it?</li>
				<li>Can the team still debug and maintain what it produces?</li>
			</ul>

			<h2 id="project-fit">Project and Team Fit</h2>
			<p>
				A framework that is a good fit for a large product team may be a poor fit for a
				one-person brochure site. Framework decisions should reflect project size, expected
				growth, team familiarity, and maintenance horizon.
			</p>

			<h2 id="learning-fit">Skill and Learning Fit</h2>
			<p>
				Frameworks are easier to learn responsibly when the learner already understands what
				the framework is abstracting. If fundamentals are still shaky, the abstraction can
				hide too much. That does not mean “never learn frameworks.” It means sequence matters.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<div class="checklist-grid">
					<div class="check-item">Problem fit</div>
					<div class="check-item">Project size</div>
					<div class="check-item">Team familiarity</div>
					<div class="check-item">Tooling cost</div>
					<div class="check-item">Debuggability</div>
					<div class="check-item">Learning readiness</div>
				</div>
				<figcaption>
					A useful framework decision usually passes several checks at once, not just one enthusiastic argument.
				</figcaption>
			</figure>

			<CheckpointBox
				title="Checkpoint for Understanding"
				:questions="[
					{
						question: 'What is the first question to ask when evaluating a framework?',
						answer: 'What problem it is supposed to solve, and whether that problem is actually real for the current project.'
					},
					{
						question: 'Why does learning readiness matter in framework evaluation?',
						answer: 'Because a framework can hide important underlying concepts if the learner does not yet understand what is being abstracted.'
					}
				]"
			/>

			<GuidedPractice
				title="Guided Practice: Use the Checklist"
				description="Evaluate a framework idea as if it were proposed for a real project."
				:steps="[
					{
						title: 'Step 1: Define the project clearly',
						instructions: '<p>Write a short project description: who it is for, how complex it is, and how long it is expected to live.</p>',
						hints: ['A vague project description produces vague framework choices.']
					},
					{
						title: 'Step 2: Run the six checks',
						instructions: '<p>Go through problem fit, project size, team familiarity, tooling cost, debuggability, and learning readiness. Write one sentence for each.</p>',
						hints: ['If several checks fail, the choice may not be worth it yet.']
					},
					{
						title: 'Step 3: Make a calm recommendation',
						instructions: '<p>End with a short recommendation: adopt now, postpone, or stay with simpler tooling.</p>',
						hints: ['A good recommendation sounds measured, not dramatic.']
					}
				]"
				:success-criteria="[
					'You described the project context clearly',
					'You checked more than one dimension of fit',
					'You produced a measured recommendation'
				]"
			/>

			<IndependentPractice
				title="Independent Practice"
				description="Use the checklist on a real framework suggestion you have heard before."
				task-title="Your Task:"
				:task="`<p>Choose one framework or framework category you have heard recommended recently. Evaluate it for a specific project type using the six-check checklist from this lesson. End with a short recommendation and a one-sentence explanation of what would need to change before your answer would change.</p>`"
				:requirements="[
					'Use a specific project context',
					'Cover all six evaluation checks',
					'Give a final recommendation'
				]"
				:rubric="[
					{
						criteria: 'Checklist completeness',
						success: 'The learner considers more than just popularity or personal preference.'
					},
					{
						criteria: 'Decision quality',
						success: 'The final recommendation clearly follows from the evaluation.'
					}
				]"
			/>

			<section id="recap">
				<h2>Recap</h2>
				<ul>
					<li>Framework decisions should start with the problem, not the trend.</li>
					<li>Project fit, team fit, tooling cost, and learning readiness all matter.</li>
					<li>A calm recommendation is usually more useful than an enthusiastic one.</li>
				</ul>
			</section>

			<div id="closure">
				<ClosureSection
					:key-takeaways="[
						'Framework evaluation gets easier when you use the same core questions every time.',
						'Strong recommendations come from context, not hype.',
						'You do not need to panic every time a new tool enters the conversation.'
					]"
					:objectives="[
						'Use a practical framework evaluation checklist',
						'Make calmer and more context-aware tool decisions',
						'Explain framework fit more confidently'
					]"
					next-steps="<p>This completes Frameworks 101. The goal is not immediate adoption. The goal is better judgment.</p>"
				/>
			</div>

			<TutorialRecommendations :current-path="'/tutorials/intermediate/frameworks-101/how-to-evaluate-a-framework'" />
		</div>
	</div>
</template>

<style scoped>
.checklist-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 1rem;
}

.check-item {
	background: #f8faff;
	border: 1px solid #cfd8ff;
	border-radius: 12px;
	padding: 1rem;
	text-align: center;
	font-weight: 600;
}

@media (max-width: 768px) {
	.checklist-grid {
		grid-template-columns: 1fr;
	}
}
</style>
