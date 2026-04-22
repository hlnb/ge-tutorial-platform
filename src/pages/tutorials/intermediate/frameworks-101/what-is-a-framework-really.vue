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
	{ id: 'framework-vs-library', title: 'Framework vs Library' },
	{ id: 'tools-and-systems', title: 'Tools, Systems, and Stacks' },
	{ id: 'under-the-hood', title: 'What Stays the Same Underneath' },
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
					<li class="is-active"><a href="#" aria-current="page">What Is a Framework, Really?</a></li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">25 min</span>
					<span class="tag is-light">Frameworks</span>
					<span class="tag is-light">Concepts</span>
				</div>
			</div>

			<h1 class="title is-1">What Is a Framework, Really?</h1>
			<p class="subtitle is-5">
				Separate frameworks from libraries, tools, and design systems without the usual ecosystem fog.
			</p>

			<AnticipatorySet
				title="The Word Gets Used Too Loosely"
				icon="🧭"
				:hook="`<p>Developers use the word <strong>framework</strong> for many different things. Sometimes they mean a JavaScript UI framework. Sometimes they mean a CSS toolkit. Sometimes they mean a whole application stack. That can make the idea feel blurrier than it really is.</p><p>This lesson clears that up. The point is not to memorise slogans. The point is to recognise what kind of tool you are looking at and what role it plays in a project.</p>`"
				:reflection-prompts="[
					'Which tools have you heard described as frameworks recently?',
					'What makes the word feel confusing right now?'
				]"
			/>

			<LearningObjectives
				:objectives="[
					'Explain what makes a framework different from a library',
					'Distinguish frameworks from tools, component libraries, and design systems',
					'Describe what frameworks still rely on underneath',
					'Use clearer language when evaluating modern frontend tools'
				]"
				purpose="You make better technology decisions when you can name the type of tool you are actually dealing with."
				:prerequisites="[
					{ topic: 'JavaScript Functions', link: '/tutorials/beginner/javascript-basics/functions' },
					{ topic: 'Dynamic Content', link: '/tutorials/beginner/dom-basics/dynamic-content' },
					{ topic: 'Building Reusable Components', link: '/tutorials/intermediate/building-reusable-components' }
				]"
			/>

			<h2 id="framework-vs-library">Framework vs Library</h2>
			<p>
				A library gives you tools that your code can call when needed. A framework usually
				provides more structure, conventions, and expectations about how your code should fit
				together. Put simply: libraries are often called by your code, while frameworks more
				often define the structure your code lives inside.
			</p>

			<div class="box">
				<h3 class="title is-5">Plain-English distinction</h3>
				<ul>
					<li><strong>Library:</strong> “Here are useful functions or components you can use.”</li>
					<li><strong>Framework:</strong> “Here is a way to organise the app, and your code plugs into it.”</li>
				</ul>
			</div>

			<h2 id="tools-and-systems">Tools, Systems, and Stacks</h2>
			<p>
				Not every useful frontend tool is a framework. Some tools bundle code. Some handle
				routing. Some provide reusable components. Some define visual tokens and spacing
				systems. A design system is not the same thing as a JavaScript framework. A component
				library is not automatically a full application framework.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<div class="comparison-grid">
					<div class="compare-card"><strong>Framework</strong><span>Structure + conventions</span></div>
					<div class="compare-card"><strong>Library</strong><span>Reusable functions or pieces</span></div>
					<div class="compare-card"><strong>Tool</strong><span>Build, test, or automate work</span></div>
					<div class="compare-card"><strong>Design system</strong><span>Shared UI language and rules</span></div>
				</div>
				<figcaption>
					These categories overlap sometimes, but they are not interchangeable.
				</figcaption>
			</figure>

			<h2 id="under-the-hood">What Stays the Same Underneath</h2>
			<p>
				Frameworks do not replace the web platform. Underneath the abstractions, browsers are
				still working with HTML, CSS, JavaScript, network requests, and the DOM. That is why
				the fundamentals still matter. Frameworks help organise those pieces, not erase them.
			</p>

			<CheckpointBox
				title="Checkpoint for Understanding"
				:questions="[
					{
						question: 'What is the simplest useful difference between a framework and a library?',
						answer: 'A framework usually gives your project structure and conventions, while a library gives you reusable tools to call when needed.'
					},
					{
						question: 'Why is it misleading to call every frontend tool a framework?',
						answer: 'Because tools, libraries, design systems, and frameworks solve different kinds of problems and operate at different levels.'
					}
				]"
			/>

			<GuidedPractice
				title="Guided Practice: Classify the Tool"
				description="Use plain-English reasoning rather than brand familiarity."
				:steps="[
					{
						title: 'Step 1: Ask what problem the tool solves',
						instructions: '<p>Does the tool mainly organise app structure, provide reusable code, automate build steps, or standardise visual design?</p>',
						hints: ['Start with purpose before branding.']
					},
					{
						title: 'Step 2: Decide which category is primary',
						instructions: '<p>Choose the tool’s main identity: framework, library, tool, or system. Some tools overlap, but pick the primary role first.</p>',
						hints: ['A stack can contain several categories at once.']
					},
					{
						title: 'Step 3: Explain your choice in one sentence',
						instructions: '<p>Use a sentence like: <code>This is mainly a framework because it gives the project structure and expects code to fit its conventions.</code></p>',
						hints: ['Short, practical explanations are better than jargon.']
					}
				]"
				:success-criteria="[
					'You started with the problem the tool solves',
					'You chose a primary category clearly',
					'You explained the reasoning in plain English'
				]"
			/>

			<IndependentPractice
				title="Independent Practice"
				description="Sort frontend tools by role rather than hype."
				task-title="Your Task:"
				:task="`<p>Pick three frontend technologies you have heard about recently. For each one, decide whether its main role is framework, library, tool, or design system. Then explain your reasoning in one sentence without using marketing phrases.</p>`"
				:requirements="[
					'Use three different technologies',
					'Choose one primary category for each',
					'Explain the reasoning plainly'
				]"
				:rubric="[
					{
						criteria: 'Category accuracy',
						success: 'The learner chooses categories based on function, not popularity.'
					},
					{
						criteria: 'Reasoning clarity',
						success: 'Each explanation stays understandable without heavy jargon.'
					}
				]"
			/>

			<section id="recap">
				<h2>Recap</h2>
				<ul>
					<li>Frameworks, libraries, tools, and design systems are related but not identical.</li>
					<li>Frameworks usually bring structure and expectations, not just functions.</li>
					<li>The web platform still exists underneath every abstraction.</li>
				</ul>
			</section>

			<div id="closure">
				<ClosureSection
					:key-takeaways="[
						'Clear categories make modern frontend ecosystems much less intimidating.',
						'Frameworks are about structure and conventions, not magic.',
						'Fundamentals still matter because frameworks build on top of the web platform.'
					]"
					:objectives="[
						'Distinguish frameworks from nearby tool categories',
						'Explain framework ideas in plain English',
						'Keep the web platform visible underneath abstractions'
					]"
					next-steps="<p>Next, you will look at why JavaScript frameworks appeared in the first place and what pain points they are trying to reduce.</p>"
				/>
			</div>

			<TutorialRecommendations :current-path="'/tutorials/intermediate/frameworks-101/what-is-a-framework-really'" />
		</div>
	</div>
</template>

<style scoped>
.comparison-grid {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 1rem;
}

.compare-card {
	background: #f7f9ff;
	border: 1px solid #c8d2ff;
	border-radius: 12px;
	padding: 1rem;
}

.compare-card strong,
.compare-card span {
	display: block;
}

@media (max-width: 768px) {
	.comparison-grid {
		grid-template-columns: 1fr;
	}
}
</style>
