<script setup>
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { useTutorialHead } from '@/composables/useTutorialHead';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import GuidedPractice from '@/components/hunter/GuidedPractice.vue';
import IndependentPractice from '@/components/hunter/IndependentPractice.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';

useTutorialHead({
	title: 'Using Bulma in a Vue Project',
	description:
		'Use the familiar Todo List project to learn how Bulma fits into a Vue app, where framework classes help, and where custom CSS still belongs.',
	path: '/tutorials/intermediate/using-bulma-in-a-vue-project',
});

const sections = [
	{ id: 'why-bulma-here', title: 'Why Bulma Here' },
	{ id: 'install-and-import', title: 'Install and Import' },
	{ id: 'bulma-class-language', title: 'Bulma Class Language' },
	{ id: 'todo-layout-map', title: 'Todo Layout Map' },
	{ id: 'framework-vs-custom-css', title: 'Framework vs Custom CSS' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'additional-resources', title: 'Additional Resources' },
	{ id: 'recap', title: 'Recap' },
	{ id: 'closure', title: 'Closure' },
];

usePageSections(sections);

const checkpointQuestions = [
	{
		question: 'Why is Bulma a reasonable first CSS framework example here?',
		answer:
			'Because it uses readable semantic classes, matches the existing site stack, and helps learners see how a CSS framework supports structure without replacing CSS understanding.',
	},
	{
		question: 'What does Bulma give you in the Todo List project?',
		answer:
			'It speeds up common interface structure such as fields, controls, buttons, tags, boxes, and layout groupings so you can focus more on the component and app flow.',
	},
	{
		question: 'Why do you still need custom CSS in a Bulma-based Vue project?',
		answer:
			'Because framework classes do not automatically solve project-specific tone, spacing refinements, unusual interactions, or all polish decisions.',
	},
];

const guidedPracticeSteps = [
	{
		title: 'Step 1: Add Bulma to the Vue project',
		instructions:
			'<p>Install Bulma in the Vue app and import it into the main entry file or main stylesheet.</p><p>Then confirm that the app still runs before you change the template structure.</p>',
		hints: [
			'Keep the first step small. Install, import, and verify before redesigning the interface.',
			'If the app breaks immediately, solve the import problem before moving on.',
		],
	},
	{
		title: 'Step 2: Map Todo List areas to Bulma structures',
		instructions:
			'<p>Take the existing Todo List component and identify which parts match Bulma patterns well: the app shell, the input row, action buttons, status labels, and grouped rows.</p><p>Write a short mapping note before editing the template.</p>',
		hints: [
			'Think in interface chunks, not isolated class names.',
			'Ask which parts benefit from standard structure and which parts still feel project-specific.',
		],
	},
	{
		title: 'Step 3: Add Bulma classes, then layer custom CSS carefully',
		instructions:
			'<p>Update the template using Bulma classes first. After the structure feels stable, add a small amount of custom CSS only where the interface still needs project-specific refinement.</p><p>The goal is not to fight the framework. The goal is to let Bulma handle common structure and keep your own CSS focused.</p>',
		hints: [
			'Do not rewrite every class immediately. Start with shell, form row, and action areas.',
			'Custom CSS should explain your specific interface choices, not duplicate framework defaults everywhere.',
		],
	},
];

const guidedPracticeSuccessCriteria = [
	'You installed and imported Bulma without losing the app structure',
	'You mapped the Todo List areas to sensible Bulma patterns before editing heavily',
	'You used Bulma for common structure and saved custom CSS for the project-specific parts',
	'You can explain why the framework helped and where it did not remove your design decisions',
];

const independentPracticeRubric = [
	{
		criteria: 'Framework usage',
		success:
			'The learner uses Bulma for common UI structure instead of treating every class as an isolated styling trick.',
	},
	{
		criteria: 'Template clarity',
		success:
			'The Vue template stays readable even after adding framework classes, with interface sections still easy to identify.',
	},
	{
		criteria: 'Custom CSS judgment',
		success:
			'Custom CSS is added where needed for the project’s own rhythm or polish rather than replacing the framework wholesale.',
	},
	{
		criteria: 'Reasoning',
		success:
			'The learner can explain what Bulma sped up and what still required original styling choices.',
	},
];

const closureKeyTakeaways = [
	'Bulma helps most when you treat it as a structural assistant rather than a total replacement for CSS thinking.',
	'In a Vue app, framework classes live inside the template alongside your component structure and state logic.',
	'The Todo List is a good case study because it contains common interface chunks such as forms, buttons, grouped rows, and status labels.',
	'Custom CSS still matters for project-specific polish, spacing, and tone.',
];

const closureObjectives = [
	'Install and import Bulma into a Vue project',
	'Map a familiar interface to Bulma’s common component and layout patterns',
	'Use Bulma classes without losing template readability',
	'Decide where custom CSS should still shape the final interface',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-layer-group',
		title: 'Framework Help',
		questions: [
			'Which part of the Todo List became easier to style once Bulma was in place?',
			'Which part still needed your own CSS judgment instead of framework defaults?',
		],
	},
	{
		icon: 'fas fa-code',
		title: 'Template Readability',
		questions: [
			'Did the Bulma classes make the template clearer or noisier for you?',
			'What would help you keep framework-heavy templates readable over time?',
		],
	},
];
</script>

<template>
	<div class="container section">
		<div class="tutorial-content">
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li>
						<router-link to="/">
							<i class="fa-solid fa-house mr-2"></i> Home
						</router-link>
					</li>
					<li><router-link to="/tutorials">Tutorials</router-link></li>
					<li class="is-active">
						<a href="#" aria-current="page">Using Bulma in a Vue Project</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">40 min</span>
					<span class="tag is-light">Bulma</span>
					<span class="tag is-light">Vue</span>
				</div>
			</div>

			<h1 class="title is-1">Using Bulma in a Vue Project</h1>

			<p class="subtitle is-5">
				Restyle the familiar Todo List project with Bulma so you can see where a CSS
				framework helps and where custom CSS still matters.
			</p>

			<AnticipatorySet
				title="A CSS Framework as a Helper, Not a Replacement"
				icon="🎛️"
				:hook="`<p>After a first Vue app, learners often hit the next question quickly: if the framework helps organise the application code, what helps organise the interface styling?</p><p>This is where a CSS framework can become useful, but only if it stays in its lane. Bulma can speed up common structure, spacing, and UI building blocks. It does not replace CSS judgment, and it does not remove the need to understand what your interface is doing.</p><p>That makes it a good next step here, especially because GraphiteEdge already uses Bulma in its own stack.</p>`"
				:reflection-prompts="[
					'What parts of a small app interface feel repetitive to style from scratch?',
					'Have you ever seen framework classes make a template feel noisier instead of clearer?',
					'What would you want a CSS framework to help with, but not control completely?'
				]"
				connection="This lesson builds directly on the first Vue app lesson. The Todo List stays the same project so the new learning load is about styling structure, not a brand-new application goal."
			/>

			<LearningObjectives
				:objectives="[
					'Install and import Bulma into a Vue project',
					'Map a familiar Todo List interface to Bulma building blocks',
					'Use Bulma classes inside Vue templates without losing readability',
					'Separate framework-provided structure from project-specific custom CSS'
				]"
				purpose="A CSS framework becomes more understandable when learners can see exactly which interface jobs it helps with and which ones it still leaves to them."
				:prerequisites="[
					{ topic: 'First Vue App with Vite', link: '/tutorials/intermediate/first-vue-app-with-vite' },
					{ topic: 'Why CSS Frameworks Exist', link: '/tutorials/intermediate/frameworks-101/why-css-frameworks-exist' },
					{ topic: 'CSS Systems for Reusable Sections', link: '/tutorials/intermediate/css-systems-for-reusable-sections' }
				]"
			/>

			<h2 id="why-bulma-here">Why Bulma Fits Here</h2>
			<p>
				If you want to introduce a CSS framework gently, Bulma is a reasonable choice in
				this curriculum because its class names are readable and its role is easier to
				describe in plain English. It also matches the existing GraphiteEdge stack, which
				makes the example feel less artificial.
			</p>
			<p>
				The teaching goal is not “Bulma forever.” The teaching goal is to let learners see
				how a CSS framework can reduce repetitive structure work while leaving the real
				interface decisions visible.
			</p>

			<h2 id="install-and-import">Install and Import</h2>
			<p>
				The simplest install route is to add Bulma as a dependency and then import it into
				your app entry or main stylesheet.
			</p>

			<pre><code>npm install bulma</code></pre>
			<pre><code>// main.js
import 'bulma/css/bulma.min.css';</code></pre>

			<p>
				This gives the project access to Bulma’s ready-made class patterns without changing
				the fact that Vue is still handling the app structure and state.
			</p>

			<div class="notification is-info is-light">
				<p>
					<strong>Separation of roles:</strong> Vue still organises the component and data
					flow. Bulma only helps with the styling layer.
				</p>
			</div>

			<h2 id="bulma-class-language">Learning the Bulma Class Language</h2>
			<p>
				Bulma helps most when you learn its common interface vocabulary rather than adding
				random classes one at a time.
			</p>
			<ul>
				<li><code>section</code> and <code>container</code> shape the page shell</li>
				<li><code>box</code> gives a contained panel</li>
				<li><code>field</code> and <code>control</code> help group form elements</li>
				<li><code>input</code>, <code>button</code>, and <code>tag</code> cover common UI pieces</li>
			</ul>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-bulma-vue-todo-layout-map.svg"
					alt="Diagram mapping a Todo List interface to Bulma structures such as section, container, box, field, control, input, button, and tag."
				/>
				<figcaption>
					This is the most useful first move: map interface chunks to framework patterns
					before you start layering classes everywhere.
				</figcaption>
			</figure>

			<h2 id="todo-layout-map">Rebuilding the Todo List Interface</h2>
			<p>
				The Todo List is a good Bulma case study because it contains several common UI
				needs at once: a shell, a form row, action buttons, repeated rows, and status cues.
			</p>

			<pre><code>&lt;template&gt;
  &lt;section class="section"&gt;
    &lt;div class="container is-max-desktop"&gt;
      &lt;div class="box"&gt;
        &lt;h1 class="title is-3"&gt;Todo List&lt;/h1&gt;

        &lt;div class="field has-addons"&gt;
          &lt;div class="control is-expanded"&gt;
            &lt;input v-model="newTask" class="input" type="text" placeholder="Add a task" /&gt;
          &lt;/div&gt;
          &lt;div class="control"&gt;
            &lt;button class="button is-primary" @click="addTodo"&gt;Add&lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;
&lt;/template&gt;</code></pre>

			<p>
				That does not finish the interface for you, but it gets you to a readable shell
				faster than styling every piece from zero.
			</p>

			<CheckpointBox
				title="Checkpoint for Understanding"
				icon="🧭"
				description="Pause here and check whether the role of Bulma in the Vue template feels distinct from the app logic itself."
				:questions="checkpointQuestions"
				answers-button-text="Show sample answers"
			/>

			<h2 id="framework-vs-custom-css">Where Custom CSS Still Belongs</h2>
			<p>
				A useful framework lesson is not finished once the classes compile. You still need
				to decide which styles belong to the project itself.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-bulma-vue-framework-vs-custom-css.svg"
					alt="Comparison diagram showing which interface concerns Bulma handles quickly and which concerns still belong to custom CSS."
				/>
				<figcaption>
					Framework classes can carry a lot of structure, but they should not hide the
					places where your own CSS still needs to express the project’s decisions.
				</figcaption>
			</figure>

			<div class="box">
				<h3 class="title is-5">Good custom CSS candidates after Bulma</h3>
				<ul>
					<li>completion-state styling that feels specific to your Todo List</li>
					<li>spacing refinements between rows and action areas</li>
					<li>small polish details that support the tone of the project</li>
				</ul>
			</div>

			<h2 id="guided-practice">Guided Practice</h2>
			<GuidedPractice
				title="Use Bulma deliberately inside the Vue Todo List"
				description="Keep the same app logic and improve the interface structure with a readable CSS framework layer."
				:steps="guidedPracticeSteps"
				:success-criteria="guidedPracticeSuccessCriteria"
				success-criteria-title="You are on track if you can:"
			/>

			<h2 id="independent-practice">Independent Practice</h2>
			<IndependentPractice
				title="Independent Practice: Restyle the Todo List with framework judgment"
				description="Apply the same workflow on your own with a small, bounded scope."
				task-title="Your Task:"
				task="<p>Take your small Vue Todo List and restyle it with Bulma. Use framework classes for the shell, form grouping, common controls, and status cues. Then add a small amount of custom CSS only where the project still needs its own spacing, tone, or interaction details.</p>"
				:requirements="[
					'Install and import Bulma into the project',
					'Use Bulma for at least the outer shell, input row, and action controls',
					'Keep the Vue template readable after adding classes',
					'Add a small amount of custom CSS for project-specific refinement'
				]"
				:stretch-goals="[
					'Add a completion tag or status treatment for done items',
					'Compare your Bulma-based version with the earlier plain CSS version and note what became faster'
				]"
				:rubric="independentPracticeRubric"
			/>

			<h2 id="additional-resources">Additional Resources</h2>
			<ul>
				<li>
					<a href="https://bulma.io/documentation/start/installation/" target="_blank" rel="noopener">
						Bulma installation guide
					</a>
					&mdash; the official installation reference, including the npm package.
				</li>
				<li>
					<a href="https://bulma.io/" target="_blank" rel="noopener">
						Bulma homepage and documentation
					</a>
					&mdash; helpful for scanning the component vocabulary and common layout primitives.
				</li>
			</ul>

			<h2 id="recap">Recap</h2>
			<p>
				Bulma is most helpful when you treat it like a layer of reusable UI structure, not
				a replacement for CSS understanding. In the Todo List example, it helps you reach a
				clean shell, form row, and action language faster. But you still decide how the app
				should feel, how much polish it needs, and what details deserve custom CSS.
			</p>

			<div id="closure">
				<ClosureSection
					title="Lesson Complete: You Can Use a CSS Framework More Intentionally"
					:key-takeaways="closureKeyTakeaways"
					:objectives="closureObjectives"
					:reflection-prompts="closureReflectionPrompts"
					next-steps="<p>From here, you can move back toward larger project workflows and deployment with a clearer picture of how framework code, tooling, and UI structure fit together.</p>"
				/>
			</div>

			<TutorialRecommendations
				:current-path="'/tutorials/intermediate/using-bulma-in-a-vue-project'"
				:next-tutorial="{ path: '/tutorials/advanced/black-swan-bistro-part-5', title: 'Black Swan Bistro — Part 5 (Prepare for Deployment)' }"
				:related-tutorials="[
					{ path: '/tutorials/intermediate/first-vue-app-with-vite', title: 'First Vue App with Vite' },
					{ path: '/tutorials/intermediate/frameworks-101/why-css-frameworks-exist', title: 'Why CSS Frameworks Exist' }
				]"
				:practice-projects="[
					{
						title: 'Todo List',
						description: 'Use the familiar Todo List as the framework-plus-styling bridge project.',
						tags: ['Bulma', 'Vue', 'Todo List'],
						path: '/projects/todo-list'
					},
					{
						title: 'Enhanced Todo List',
						description: 'Compare the Vue + Bulma version with a more styled Todo List reference.',
						tags: ['UI', 'Polish', 'Builder'],
						path: '/projects/todo-list-enhanced'
					}
				]"
				:resources="[
					{
						title: 'Bulma installation guide',
						url: 'https://bulma.io/documentation/start/installation/',
						description: 'Official Bulma installation and import options.'
					},
					{
						title: 'Bulma documentation',
						url: 'https://bulma.io/',
						description: 'Official docs for components, helpers, and layout patterns.'
					}
				]"
			/>
		</div>
	</div>
</template>
