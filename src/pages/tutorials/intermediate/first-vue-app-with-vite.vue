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
	title: 'First Vue App with Vite',
	description:
		'Use the familiar Todo List project to understand how a small Vite plus Vue app is structured, how reactive state works, and how templates update from data.',
	path: '/tutorials/intermediate/first-vue-app-with-vite',
});

const sections = [
	{ id: 'why-vue-here', title: 'Why Vue Here' },
	{ id: 'project-shape', title: 'Project Shape' },
	{ id: 'main-and-app', title: 'main.js and App.vue' },
	{ id: 'reactive-state', title: 'Reactive State' },
	{ id: 'rendering-todos', title: 'Rendering Todos' },
	{ id: 'events-and-updates', title: 'Events and Updates' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'additional-resources', title: 'Additional Resources' },
	{ id: 'recap', title: 'Recap' },
	{ id: 'closure', title: 'Closure' },
];

usePageSections(sections);

const checkpointQuestions = [
	{
		question: 'Why is the Todo List project a useful first Vue example?',
		answer:
			'Because learners already know the interface problem, so they can focus on Vue ideas such as state, template rendering, and event handling instead of learning a brand-new project goal at the same time.',
	},
	{
		question: 'What is the practical job of `main.js` in a small Vue project?',
		answer:
			'It starts the Vue application and mounts it into the page, usually by connecting the app to a root element such as `#app`.',
	},
	{
		question: 'What changes when you move from manual DOM updates to Vue state-driven rendering?',
		answer:
			'Instead of pushing changes into the DOM directly in many places, you update the data and let the template reflect that state more consistently.',
	},
];

const guidedPracticeSteps = [
	{
		title: 'Step 1: Scaffold a Vue app and identify the entry files',
		instructions:
			'<p>Create a Vue project with the official scaffold command and open the generated files.</p><p>Find <code>main.js</code>, <code>App.vue</code>, and the root <code>index.html</code>. Write one short note describing what each file contributes to the app.</p>',
		hints: [
			'Think of `main.js` as the startup file and `App.vue` as the first real application component.',
			'You do not need to understand every generated file before you begin. Start with the entry path.',
		],
	},
	{
		title: 'Step 2: Reframe the Todo List around state',
		instructions:
			'<p>List the core pieces of data the Todo List needs: the text currently being typed, the array of todo items, and each item’s completion state.</p><p>Then ask: which of these values should live in reactive state rather than being read from the DOM each time?</p>',
		hints: [
			'If the value changes and the interface should respond, it is usually a state candidate.',
			'The browser still shows the UI, but Vue is now keeping the source of truth in data.',
		],
	},
	{
		title: 'Step 3: Render the list from data',
		instructions:
			'<p>Create a small todo array and render it in the template. Then add one event that changes the array, such as adding a new task or toggling completion.</p><p>Watch how the interface updates because the state changed.</p>',
		hints: [
			'Do not overbuild the first version. One input, one button, one list, and one update loop is enough.',
			'The goal is to feel the data-to-template connection clearly.',
		],
	},
];

const guidedPracticeSuccessCriteria = [
	'You can point to the root entry path from `index.html` to `main.js` to `App.vue`',
	'You identified which Todo List values belong in reactive state',
	'You rendered todo items from data instead of hardcoding them into the HTML',
	'You changed the state and watched the interface update from that change',
];

const independentPracticeRubric = [
	{
		criteria: 'Project structure awareness',
		success:
			'The learner can explain what the Vue entry files do without confusing Vite, Vue, and the app code.',
	},
	{
		criteria: 'State thinking',
		success:
			'The learner stores the changing Todo List data in reactive state instead of relying on scattered DOM reads.',
	},
	{
		criteria: 'Template rendering',
		success:
			'The interface is driven from state, with repeated todo items rendered from data rather than written manually one by one.',
	},
	{
		criteria: 'Reasoning clarity',
		success:
			'The learner can explain how Vue changes the workflow compared with direct DOM manipulation.',
	},
];

const closureKeyTakeaways = [
	'Vue becomes easier to understand when you attach it to a familiar project instead of a brand-new app idea.',
	'`main.js` starts the app, `App.vue` acts as the main component shell, and the template reflects reactive state.',
	'The biggest shift is not syntax. It is moving from direct DOM pushing to state-driven rendering.',
	'The Todo List remains the same project underneath, but Vue changes how the project is organised and updated.',
];

const closureObjectives = [
	'Explain how a small Vite plus Vue app is structured',
	'Identify the Todo List values that belong in reactive state',
	'Render repeated UI from data rather than hardcoded markup',
	'Describe how Vue changes the update flow compared with direct DOM manipulation',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-diagram-project',
		title: 'Project Shape',
		questions: [
			'Which file feels most important to you now: `main.js`, `App.vue`, or the template inside the component?',
			'What part of the app structure felt clearer after tracing the entry path?'
		],
	},
	{
		icon: 'fas fa-repeat',
		title: 'State and Rendering',
		questions: [
			'What changes when you think “change the data” instead of “manually rewrite the DOM”?',
			'Which part of the Todo List is easiest to understand as reactive state?'
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
						<a href="#" aria-current="page">First Vue App with Vite</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">45 min</span>
					<span class="tag is-light">Vue</span>
					<span class="tag is-light">Vite</span>
				</div>
			</div>

			<h1 class="title is-1">First Vue App with Vite</h1>

			<p class="subtitle is-5">
				Use the familiar Todo List project to understand Vue components, reactive state,
				and how a small Vite + Vue app fits together.
			</p>

			<AnticipatorySet
				title="A Familiar Project, A New App Structure"
				icon="🧩"
				:hook="`<p>After Frameworks 101 and the Vite lesson, learners usually understand the big picture: frameworks organise app code, and tooling supports the workflow around it.</p><p>The next helpful step is not a huge app. It is a familiar one. Reusing the Todo List project lets you focus on what Vue changes: where state lives, how repeated UI gets rendered, and how updates flow back into the screen.</p><p>That makes Vue feel concrete rather than mysterious.</p>`"
				:reflection-prompts="[
					'How would you build a Todo List right now with plain JavaScript?',
					'Which part of moving to Vue feels least clear: files, components, or reactivity?',
					'What would make a framework feel less magical to you?'
				]"
				connection="This lesson sits directly after `Working with Vite`. The tooling is already in place, so now the focus can shift to the shape of a small Vue application."
			/>

			<LearningObjectives
				:objectives="[
					'Explain how a small Vue app starts inside a Vite project',
					'Identify the main roles of `main.js` and `App.vue`',
					'Store Todo List data in reactive state',
					'Render repeated todo items from data in the template',
					'Describe how Vue changes the UI update workflow'
				]"
				purpose="A first framework lesson works best when it translates a project you already understand into a more structured application model."
				:prerequisites="[
					{ topic: 'Working with Vite', link: '/tutorials/intermediate/working-with-vite' },
					{ topic: 'Frameworks 101', link: '/tutorials/intermediate/frameworks-101' },
					{ topic: 'Rendering Repeated Content', link: '/tutorials/intermediate/applied-javascript/rendering-repeated-content' }
				]"
			/>

			<h2 id="why-vue-here">Why Vue Fits Here</h2>
			<p>
				Vue makes more sense once you already understand two ideas:
			</p>
			<ul>
				<li>why frameworks exist at all</li>
				<li>why tooling such as Vite appears around them</li>
			</ul>
			<p>
				That is why this lesson comes here instead of earlier. You are not being asked to
				learn JavaScript, framework theory, and build tooling all at once. Instead, you are
				using a project you already recognise to see how Vue organises the same kind of work
				differently.
			</p>

			<div class="notification is-info is-light">
				<p>
					<strong>Project bridge:</strong> the Todo List is already familiar from earlier
					work. That reduces project noise so the framework ideas can stand out more clearly.
				</p>
			</div>

			<h2 id="project-shape">The Shape of the Project</h2>
			<p>
				In a small Vite + Vue app, the path usually feels like this:
			</p>
			<ul>
				<li><code>index.html</code> gives the root mount point</li>
				<li><code>main.js</code> starts the Vue app</li>
				<li><code>App.vue</code> becomes the main component shell</li>
				<li>the component template renders the visible interface</li>
			</ul>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-first-vue-app-component-entry-map.svg"
					alt="Diagram showing a Vite plus Vue app flow from main.js into App.vue and then into the Todo List interface."
				/>
				<figcaption>
					Start by tracing the path into the app. Once you can name the entry flow, the
					project becomes easier to reason about.
				</figcaption>
			</figure>

			<h2 id="main-and-app">`main.js` and `App.vue`</h2>
			<p>
				You do not need to memorise every generated file to start using Vue well. The first
				important distinction is simple:
			</p>
			<div class="box">
				<ul>
					<li><strong>`main.js`</strong> starts the app and mounts it into the page</li>
					<li><strong>`App.vue`</strong> acts as the main component where your interface logic begins</li>
				</ul>
			</div>

			<pre><code>// main.js
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');</code></pre>

			<p>
				That line does not build the whole application for you. It simply connects the Vue
				app to the root element so your component tree can render inside it.
			</p>

			<h2 id="reactive-state">Reactive State in Plain English</h2>
			<p>
				The biggest shift in a first Vue app is not the file extension. It is the data
				model. Instead of reaching into the DOM every time the user changes something, you
				store the changing values in state and let the template reflect them.
			</p>

			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-first-vue-app-reactivity-flow.svg"
					alt="Diagram showing user action flowing into reactive state and then into rendered Todo List output in the browser."
				/>
				<figcaption>
					The mental loop matters more than the exact syntax. Action changes state, and
					state drives the rendered interface.
				</figcaption>
			</figure>

			<div class="box">
				<h3 class="title is-5">Todo List state candidates</h3>
				<ul>
					<li><code>newTask</code> for the text currently being typed</li>
					<li><code>todos</code> for the list of task objects</li>
					<li><code>done</code> inside each task object for completion state</li>
				</ul>
			</div>

			<pre><code>&lt;script setup&gt;
import { ref } from 'vue';

const newTask = ref('');
const todos = ref([
  { id: 1, text: 'Outline the Vue Todo List', done: false },
  { id: 2, text: 'Render tasks from state', done: true },
]);

function addTodo() {
  if (!newTask.value.trim()) return;

  todos.value.push({
    id: Date.now(),
    text: newTask.value.trim(),
    done: false,
  });

  newTask.value = '';
}
&lt;/script&gt;</code></pre>

			<h2 id="rendering-todos">Rendering the Todo List from Data</h2>
			<p>
				In plain DOM code, you may have built list items by creating elements, appending
				nodes, and wiring listeners by hand. Vue still ends up producing DOM output, but the
				route there is calmer: the template describes what the UI should look like for the
				current state.
			</p>

			<pre><code>&lt;template&gt;
  &lt;section class="section"&gt;
    &lt;div class="container"&gt;
      &lt;h1&gt;Todo List&lt;/h1&gt;

      &lt;input v-model="newTask" type="text" placeholder="Add a task" /&gt;
      &lt;button @click="addTodo"&gt;Add&lt;/button&gt;

      &lt;ul&gt;
        &lt;li v-for="todo in todos" :key="todo.id"&gt;
          &amp;#123;&amp;#123; todo.text &amp;#125;&amp;#125;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/section&gt;
&lt;/template&gt;</code></pre>

			<p>
				The important part is not memorising every directive name immediately. The important
				part is noticing that the list is rendered from the data structure instead of being
				written as separate static markup.
			</p>

			<CheckpointBox
				title="Checkpoint for Understanding"
				icon="📝"
				description="Pause here and make sure the shift from DOM-pushing to state-driven rendering feels clear."
				:questions="checkpointQuestions"
				answers-button-text="Show sample answers"
			/>

			<h2 id="events-and-updates">Events and Updates</h2>
			<p>
				Vue does not remove events. It changes how you connect them to the interface. In a
				Todo List, that might mean:
			</p>
			<ul>
				<li>typing into an input updates reactive state</li>
				<li>clicking a button calls a function that changes the state</li>
				<li>checking a box toggles one task’s completion flag</li>
				<li>the template updates because the data changed</li>
			</ul>
			<p>
				The workflow is still logical and explicit. It is just organised around the state
				layer instead of many scattered DOM edits.
			</p>

			<h2 id="guided-practice">Guided Practice</h2>
			<GuidedPractice
				title="Rebuild the Todo List mentally before you rebuild it in code"
				description="Use the existing Todo List project as the bridge from plain JavaScript thinking into Vue structure."
				:steps="guidedPracticeSteps"
				:success-criteria="guidedPracticeSuccessCriteria"
				success-criteria-title="You are on track if you can:"
			/>

			<h2 id="independent-practice">Independent Practice</h2>
			<IndependentPractice
				title="Independent Practice: Build a small Vue Todo List shell"
				description="Now try the same idea with lighter support."
				task-title="Your Task:"
				task="<p>Scaffold a Vue app and rebuild a small Todo List interface with one input, one add button, and one rendered list. Keep the scope tight. The goal is not feature-complete polish. The goal is to feel how the app flows from state into the template.</p>"
				:requirements="[
					'Use a Vue component as the main Todo List shell',
					'Store the current input and todo array in reactive state',
					'Render the list from data rather than hardcoded markup',
					'Handle at least one event that changes the state'
				]"
				:stretch-goals="[
					'Add task completion toggling',
					'Split the Todo List into a second child component once the main version works'
				]"
				:rubric="independentPracticeRubric"
			/>

			<h2 id="additional-resources">Additional Resources</h2>
			<ul>
				<li>
					<a href="https://vuejs.org/guide/quick-start.html" target="_blank" rel="noopener">
						Vue official quick start
					</a>
					&mdash; the official guide to creating a Vue app with the Vite-based scaffold.
				</li>
				<li>
					<a href="https://vite.dev/guide/" target="_blank" rel="noopener">
						Vite official guide
					</a>
					&mdash; useful when you want to separate the app framework from the build tool around it.
				</li>
			</ul>

			<h2 id="recap">Recap</h2>
			<p>
				Vue becomes much more approachable when you stop treating it like a brand-new world
				and instead map it onto a familiar interface. The Todo List still asks the same
				questions as before: what is the current task, what are the items, and what changed?
				Vue simply gives you a more structured way to express those answers.
			</p>

			<div id="closure">
				<ClosureSection
					title="Lesson Complete: You Can Read a Small Vue App"
					:key-takeaways="closureKeyTakeaways"
					:objectives="closureObjectives"
					:reflection-prompts="closureReflectionPrompts"
					next-steps="<p>Next, keep the same Todo List project but add Bulma so you can see how a CSS framework speeds up interface structure inside a Vue template.</p>"
				/>
			</div>

			<TutorialRecommendations
				:current-path="'/tutorials/intermediate/first-vue-app-with-vite'"
				:next-tutorial="{ path: '/tutorials/intermediate/using-bulma-in-a-vue-project', title: 'Using Bulma in a Vue Project' }"
				:related-tutorials="[
					{ path: '/tutorials/intermediate/working-with-vite', title: 'Working with Vite' },
					{ path: '/tutorials/intermediate/frameworks-101/why-javascript-frameworks-exist', title: 'Why JavaScript Frameworks Exist' }
				]"
				:practice-projects="[
					{
						title: 'Todo List',
						description: 'Reuse the familiar Todo List project idea as your first Vue case study.',
						tags: ['Vue', 'State', 'Lists'],
						path: '/projects/todo-list'
					}
				]"
				:resources="[
					{
						title: 'Vue official quick start',
						url: 'https://vuejs.org/guide/quick-start.html',
						description: 'Official Vue guide for the Vite-based scaffold.'
					},
					{
						title: 'Vite official guide',
						url: 'https://vite.dev/guide/',
						description: 'Official Vite guide for dev server and build concepts.'
					}
				]"
			/>
		</div>
	</div>
</template>
