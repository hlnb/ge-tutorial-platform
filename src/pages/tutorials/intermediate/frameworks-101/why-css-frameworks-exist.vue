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
	{ id: 'styling-consistency-problems', title: 'The Styling Problems They Target' },
	{ id: 'frameworks-utilities-libraries', title: 'Frameworks, Utilities, and Libraries' },
	{ id: 'when-they-help', title: 'When They Actually Help' },
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
					<li class="is-active"><a href="#" aria-current="page">Why CSS Frameworks Exist</a></li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">30 min</span>
					<span class="tag is-light">CSS</span>
					<span class="tag is-light">Frameworks</span>
				</div>
			</div>

			<h1 class="title is-1">Why CSS Frameworks Exist</h1>
			<p class="subtitle is-5">
				Understand the consistency, speed, and design-system problems styling frameworks try to address.
			</p>

			<AnticipatorySet
				title="Styling at Scale Has Its Own Friction"
				icon="🎨"
				:hook="`<p>CSS frameworks are responding to different pain than JavaScript frameworks. They are usually about consistency, speed, repeated layout patterns, design tokens, and helping teams avoid rewriting the same styling decisions in slightly different ways.</p><p>Some teams love them. Some teams outgrow them. Some projects never need them at all. The point here is to understand why they exist before deciding whether they fit your kind of work.</p>`"
			/>

			<LearningObjectives
				:objectives="[
					'Explain what kinds of styling pain CSS frameworks try to reduce',
					'Distinguish CSS frameworks from utility systems and component libraries',
					'Describe when these tools help and when they become overkill',
					'Compare them with writing maintainable custom CSS'
				]"
				purpose="CSS tooling becomes easier to judge when you can separate layout convenience from deeper styling architecture."
				:prerequisites="[
					{ topic: 'CSS Systems for Reusable Sections', link: '/tutorials/intermediate/css-systems-for-reusable-sections' },
					{ topic: 'Building Reusable Components', link: '/tutorials/intermediate/building-reusable-components' }
				]"
			/>

			<h2 id="styling-consistency-problems">The Styling Problems They Target</h2>
			<p>
				CSS frameworks often target repeated layout needs, spacing consistency, rapid
				prototyping, shared visual language, and the friction of rebuilding common components
				from scratch on every project.
			</p>

			<h2 id="frameworks-utilities-libraries">Frameworks, Utilities, and Libraries</h2>
			<p>
				These categories can blur together, but they are not identical. Some tools give you
				prebuilt component styles. Some give you tiny utility classes. Some offer a broader
				layout and spacing system. Some work more like a design system starter kit.
			</p>

			<div class="box">
				<h3 class="title is-5">A practical distinction</h3>
				<ul>
					<li><strong>CSS framework:</strong> a broader styling foundation with patterns and conventions</li>
					<li><strong>Utility system:</strong> many small classes for assembling styles directly in markup</li>
					<li><strong>Component library:</strong> prebuilt UI pieces with styling already attached</li>
				</ul>
			</div>

			<h2 id="when-they-help">When They Actually Help</h2>
			<p>
				These tools often help most when a team needs speed, consistency, or a shared design
				language across many pages. They help less when the project is tiny, highly custom,
				or already has a clear maintainable CSS system in place.
			</p>

			<CheckpointBox
				title="Checkpoint for Understanding"
				:questions="[
					{
						question: 'What kind of pain are CSS frameworks usually trying to reduce?',
						answer: 'They usually reduce repeated styling effort, inconsistent spacing or patterns, and the time needed to build common UI structures from scratch.'
					},
					{
						question: 'Why is a utility system not exactly the same as a full CSS framework?',
						answer: 'Because utility systems focus on small composable classes, while a broader CSS framework may also define bigger patterns, conventions, or component styles.'
					}
				]"
			/>

			<GuidedPractice
				title="Guided Practice: Decide What Kind of CSS Help a Project Needs"
				description="Start with the project need, not with a favourite styling brand."
				:steps="[
					{
						title: 'Step 1: Describe the project shape',
						instructions: '<p>Is this a one-page brochure site, a growing product, a team-maintained dashboard, or a fast prototype?</p>',
						hints: ['Project size and team size matter here.']
					},
					{
						title: 'Step 2: Name the main styling pressure',
						instructions: '<p>Choose the strongest pressure: speed, consistency, repeated components, heavy custom branding, or maintainability over time.</p>',
						hints: ['Different pressures lead to different CSS tool choices.']
					},
					{
						title: 'Step 3: Match the likely solution type',
						instructions: '<p>Decide whether the project likely needs custom CSS, a broader framework, a utility system, or a component library.</p>',
						hints: ['There is no universal winner. Match the tool to the pressure.']
					}
				]"
				:success-criteria="[
					'You described the project context clearly',
					'You identified the strongest styling pressure',
					'You matched it to a plausible solution type'
				]"
			/>

			<IndependentPractice
				title="Independent Practice"
				description="Choose the styling approach with a reason, not a trend."
				task-title="Your Task:"
				:task="`<p>Imagine you are helping with a small business site, a prototype for a new web app, and a larger team-maintained dashboard. For each one, decide whether you would lean toward custom CSS, a CSS framework, a utility system, or a component library. Explain your choice in one or two sentences.</p>`"
				:requirements="[
					'Use all three example contexts',
					'Choose one primary styling approach for each',
					'Explain the reason clearly'
				]"
				:rubric="[
					{
						criteria: 'Context awareness',
						success: 'The learner changes the recommendation based on project shape instead of forcing one answer everywhere.'
					},
					{
						criteria: 'Tool-fit reasoning',
						success: 'Each recommendation matches a real styling pressure such as speed, consistency, or custom control.'
					}
				]"
			/>

			<section id="recap">
				<h2>Recap</h2>
				<ul>
					<li>CSS frameworks respond to different problems from JavaScript frameworks.</li>
					<li>Utility systems and component libraries solve related but distinct styling needs.</li>
					<li>The right choice depends on project context, not fashion.</li>
				</ul>
			</section>

			<div id="closure">
				<ClosureSection
					:key-takeaways="[
						'CSS frameworks are mostly about speed, consistency, and shared styling patterns.',
						'Utility systems, component libraries, and broader frameworks are related but not interchangeable.',
						'Custom CSS can still be the better choice when the project needs tighter control.'
					]"
					:objectives="[
						'Explain why CSS frameworks exist',
						'Distinguish nearby styling tool categories',
						'Choose a styling approach more deliberately'
					]"
					next-steps="<p>Next, you will compare the benefits of frameworks with their costs so the tradeoffs stay visible.</p>"
				/>
			</div>

			<TutorialRecommendations :current-path="'/tutorials/intermediate/frameworks-101/why-css-frameworks-exist'" />
		</div>
	</div>
</template>
