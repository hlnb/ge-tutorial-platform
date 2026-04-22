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
	{ id: 'benefits', title: 'What Frameworks Often Improve' },
	{ id: 'costs', title: 'What They Cost' },
	{ id: 'when-not-to-use-one', title: 'When Not to Use One' },
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
					<li class="is-active"><a href="#" aria-current="page">Framework Tradeoffs and Costs</a></li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">35 min</span>
					<span class="tag is-light">Tradeoffs</span>
					<span class="tag is-light">Architecture</span>
				</div>
			</div>

			<h1 class="title is-1">Framework Tradeoffs and Costs</h1>
			<p class="subtitle is-5">
				Look at framework benefits and framework costs together so your judgment stays balanced.
			</p>

			<AnticipatorySet
				title="A Tool Can Solve Problems and Add New Ones"
				icon="⚖️"
				:hook="`<p>Framework discussions often swing between two extremes: frameworks solve everything, or frameworks ruin everything. Neither is useful.</p><p>Good technical judgment means seeing both sides at once. Frameworks can improve consistency, scaling, and team workflows. They can also add tooling weight, abstraction layers, onboarding cost, and new debugging complexity.</p>`"
			/>

			<LearningObjectives
				:objectives="[
					'Name the main benefits frameworks often bring to a project',
					'Recognise the real costs frameworks introduce',
					'Describe situations where framework adoption is unnecessary or premature',
					'Use tradeoff language instead of all-or-nothing language'
				]"
				purpose="A framework decision is healthier when it stays grounded in tradeoffs rather than identity or hype."
				:prerequisites="[
					{ topic: 'Why JavaScript Frameworks Exist', link: '/tutorials/intermediate/frameworks-101/why-javascript-frameworks-exist' },
					{ topic: 'Why CSS Frameworks Exist', link: '/tutorials/intermediate/frameworks-101/why-css-frameworks-exist' }
				]"
			/>

			<h2 id="benefits">What Frameworks Often Improve</h2>
			<p>
				Frameworks often improve consistency, shared conventions, UI organisation, team
				onboarding, and the handling of larger interactive applications. They can give teams
				a clearer default structure and reduce some categories of repeated work.
			</p>

			<h2 id="costs">What They Cost</h2>
			<p>
				Frameworks cost something too: more tooling, more documentation to learn, extra build
				steps, abstraction layers between you and the browser, and sometimes a false sense
				that the hard decisions have been solved for you.
			</p>

			<div class="box">
				<h3 class="title is-5">Common costs people underestimate</h3>
				<ul>
					<li>Onboarding time for new learners or team members</li>
					<li>Debugging through an abstraction layer</li>
					<li>Keeping up with ecosystem churn</li>
					<li>Using a powerful tool for a simple project that never needed it</li>
				</ul>
			</div>

			<h2 id="when-not-to-use-one">When Not to Use One</h2>
			<p>
				A small brochure site, a very custom one-off build, or a project run by a learner who
				still needs stronger HTML/CSS/JS fundamentals may not benefit from a framework yet.
				Sometimes the clearest choice is the simpler one.
			</p>

			<CheckpointBox
				title="Checkpoint for Understanding"
				:questions="[
					{
						question: 'Why is “frameworks are better” too simplistic?',
						answer: 'Because frameworks bring real benefits in some contexts and real costs in others. The right decision depends on the project, team, and goals.'
					},
					{
						question: 'When can a framework be a poor fit even if it is popular?',
						answer: 'When the project is simple, the team does not need the extra structure, or the learning and tooling cost outweigh the benefits.'
					}
				]"
			/>

			<GuidedPractice
				title="Guided Practice: Build a Balanced Tradeoff Statement"
				description="Practice naming both value and cost in the same explanation."
				:steps="[
					{
						title: 'Step 1: Describe the project context',
						instructions: '<p>Name the project size, team shape, and likely lifespan.</p>',
						hints: ['Tradeoffs make sense only in context.']
					},
					{
						title: 'Step 2: Name the strongest likely benefit',
						instructions: '<p>Choose one main framework advantage that matters most for this case, such as consistency, component reuse, or team workflow.</p>',
						hints: ['Avoid listing every possible advantage.']
					},
					{
						title: 'Step 3: Name the strongest likely cost',
						instructions: '<p>Choose one main cost that also matters for this case, such as tooling, abstraction, or onboarding time.</p>',
						hints: ['Balanced decisions need both halves.']
					}
				]"
				:success-criteria="[
					'You described the context first',
					'You identified one meaningful benefit',
					'You identified one meaningful cost'
				]"
			/>

			<IndependentPractice
				title="Independent Practice"
				description="Write a recommendation that sounds like judgment, not fandom."
				task-title="Your Task:"
				:task="`<p>Imagine a client site, a growing internal dashboard, and a personal portfolio. For each one, write a balanced recommendation about framework use. Include one likely benefit, one likely cost, and whether the trade seems worth it.</p>`"
				:requirements="[
					'Use all three scenarios',
					'Include one benefit and one cost for each',
					'Give a final recommendation for each'
				]"
				:rubric="[
					{
						criteria: 'Balanced reasoning',
						success: 'The recommendation avoids hype and names both sides of the tradeoff.'
					},
					{
						criteria: 'Context fit',
						success: 'The final recommendation changes based on project type and constraints.'
					}
				]"
			/>

			<section id="recap">
				<h2>Recap</h2>
				<ul>
					<li>Frameworks can improve structure, but they also add learning and tooling cost.</li>
					<li>A popular tool is not automatically the right tool.</li>
					<li>Tradeoff thinking is healthier than all-or-nothing thinking.</li>
				</ul>
			</section>

			<div id="closure">
				<ClosureSection
					:key-takeaways="[
						'Framework decisions should sound like tradeoff analysis, not brand loyalty.',
						'Benefits and costs matter together, not separately.',
						'Sometimes the best engineering decision is the simpler path.'
					]"
					:objectives="[
						'Name framework tradeoffs more clearly',
						'Recognise when a framework may be unnecessary',
						'Make more balanced technical recommendations'
					]"
					next-steps="<p>Next, you will turn this tradeoff thinking into a calmer evaluation checklist you can use when a new framework shows up in your orbit.</p>"
				/>
			</div>

			<TutorialRecommendations :current-path="'/tutorials/intermediate/frameworks-101/framework-tradeoffs-and-costs'" />
		</div>
	</div>
</template>
