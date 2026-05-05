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
	title: 'Working with Vite',
	description:
		'Learn what Vite does in a modern frontend workflow, how it connects to frameworks without being one, and how to use dev, build, and preview confidently.',
	path: '/tutorials/intermediate/working-with-vite',
});

const sections = [
	{ id: 'what-vite-is', title: 'What Vite Is' },
	{ id: 'why-this-comes-now', title: 'Why This Comes Now' },
	{ id: 'dev-server-loop', title: 'Dev Server Loop' },
	{ id: 'scaffolding-projects', title: 'Scaffolding Projects' },
	{ id: 'core-commands', title: 'Core Commands' },
	{ id: 'index-html-root', title: 'index.html at the Root' },
	{ id: 'build-vs-preview', title: 'Build vs Preview' },
	{ id: 'what-vite-is-not', title: 'What Vite Is Not' },
	{ id: 'guided-practice', title: 'Guided Practice' },
	{ id: 'independent-practice', title: 'Independent Practice' },
	{ id: 'additional-resources', title: 'Additional Resources' },
	{ id: 'recap', title: 'Recap' },
];

usePageSections(sections);

const anticipatoryHook = `
	<p>By the time learners meet Vite, they have usually already felt two pressures at once. Their projects are getting more capable, and the setup around those projects is starting to matter more.</p>
	<p>You are no longer just writing a single script file and refreshing the browser manually. You may be working with modules, framework templates, local APIs, build scripts, and production output.</p>
	<p>Vite matters here because it handles the development-and-build workflow around modern frontend projects. It is not the framework itself. It is the tool that helps you run, bundle, and preview the project with less friction.</p>
`;

const checkpointQuestions = [
	{
		question: 'What is the main difference between Vite and a framework such as Vue?',
		answer:
			'Vue gives you a way to structure interactive UI code. Vite gives you the development server and build tooling around the project. One is the application framework; the other is the toolchain.',
	},
	{
		question: 'Why is this lesson better placed after intermediate JavaScript and Frameworks 101?',
		answer:
			'Because learners already understand why modern projects need structure, modules, and sometimes frameworks. That lets Vite stay focused on workflow instead of carrying the whole conceptual introduction by itself.',
	},
	{
		question: 'Why is `npm run preview` different from `npm run dev`?',
		answer:
			'`npm run dev` starts the development server for fast iteration. `npm run preview` serves the production build output locally so you can inspect what the built site will behave like.',
	},
];

const guidedPracticeSteps = [
	{
		title: 'Step 1: Read the scripts before you run anything',
		instructions:
			'<p>Open a Vite-based project and inspect its <code>package.json</code> scripts first. Look for <code>dev</code>, <code>build</code>, and <code>preview</code>.</p><p>In GraphiteEdge, for example, <code>dev:vite</code> runs the Vite dev server, <code>preview</code> runs <code>vite preview</code>, and the project wraps Vite inside a wider app workflow.</p><p>Write one sentence explaining what each script is for before you execute it.</p>',
		hints: [
			'Do not treat scripts as magic labels. Read the command behind each one.',
			'In larger projects, Vite may appear inside a more specific script name such as `dev:vite` rather than only `dev`.',
		],
	},
	{
		title: 'Step 2: Scaffold a small Vite project',
		instructions:
			'<p>Create a scratch project with <code>npm create vite@latest</code>. Choose either the <code>vanilla</code> template or the <code>vue</code> template depending on what you want to compare.</p><p>The aim is not to master the template. The aim is to notice the kind of starting structure Vite gives you.</p>',
		hints: [
			'If you want the shortest path, start with `vanilla` so the tooling is easier to see.',
			'If you want to connect this lesson directly to framework work, choose `vue` and compare it to the vanilla version mentally.',
		],
	},
	{
		title: 'Step 3: Run the development loop',
		instructions:
			'<p>Install dependencies, start the dev server with <code>npm run dev</code>, and make one tiny change such as editing a heading or paragraph.</p><p>Watch how quickly the browser updates. That fast feedback loop is one of the main reasons tools like Vite matter in practice.</p>',
		hints: [
			'The learning goal is not speed for its own sake. It is shortening the distance between a code change and visible evidence.',
			'Notice how this feels different from manually reloading a more fragile project setup.',
		],
	},
	{
		title: 'Step 4: Build and preview the production output',
		instructions:
			'<p>Run <code>npm run build</code> and then <code>npm run preview</code>. Compare the purpose of each command.</p><p>Ask yourself: what changed from the dev step? Which command creates output, and which command lets me inspect that output locally?</p>',
		hints: [
			'Build creates deployable assets; preview serves them locally.',
			'Preview is especially useful when you want to catch differences between development behavior and production output before deployment.',
		],
	},
];

const guidedPracticeSuccessCriteria = [
	'You can explain what Vite is doing without calling it a framework',
	'You can identify the job of `dev`, `build`, and `preview` scripts',
	'You can scaffold a small Vite project and run it locally',
	'You can describe why fast feedback improves the development workflow',
	'You can explain why previewing the production build is useful before deployment',
];

const independentPracticeRubric = [
	{
		criteria: 'Tooling understanding',
		success:
			'The learner explains Vite as development-and-build tooling rather than treating it as a framework or design system.',
	},
	{
		criteria: 'Command fluency',
		success:
			'The learner uses `npm run dev`, `npm run build`, and `npm run preview` appropriately and can explain the purpose of each.',
	},
	{
		criteria: 'Project awareness',
		success:
			'The learner notices how a real project can wrap Vite in additional scripts instead of assuming every repo looks identical.',
	},
	{
		criteria: 'Workflow reasoning',
		success:
			'The learner connects the tooling to real iteration, checking, and deployment habits rather than memorising commands in isolation.',
	},
];

const closureKeyTakeaways = [
	'Vite is a dev server and build tool for modern frontend projects, not the framework itself.',
	'This lesson belongs after intermediate JavaScript and framework context because it extends that knowledge into practical workflow.',
	'The core loop is simple: scaffold or open the project, run the dev server, make changes, build for production, and preview the built output.',
	'Vite treats `index.html` as part of the app entry during development, which is one reason its project shape can feel different from older setups.',
	'Understanding the scripts in `package.json` makes a project feel more legible and less magical.',
];

const closureObjectives = [
	'Explain what Vite does in a modern frontend workflow',
	'Distinguish Vite from frameworks such as Vue or React',
	'Use the core `dev`, `build`, and `preview` commands with confidence',
	'Describe why Vite belongs after framework context in this curriculum',
	'Connect Vite to the development-to-deployment path more clearly',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-layer-group',
		title: 'Tool vs Framework',
		questions: [
			'Before this lesson, which parts of modern frontend setup felt like one blurred concept?',
			'Can you now explain where the framework ends and where the tooling begins?',
		],
	},
	{
		icon: 'fas fa-terminal',
		title: 'Workflow Confidence',
		questions: [
			'Which command feels most intuitive to you now: `dev`, `build`, or `preview`?',
			'What would you check first in a new project to understand how it is using Vite?',
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
					<li>
						<router-link to="/tutorials">Tutorials</router-link>
					</li>
					<li class="is-active">
						<a href="#" aria-current="page">Working with Vite</a>
					</li>
				</ul>
			</nav>

			<div class="tutorial-meta">
				<div class="tags">
					<span class="tag is-info">Intermediate</span>
					<span class="tag is-light">35 min</span>
					<span class="tag is-light">Vite</span>
					<span class="tag is-light">Tooling</span>
				</div>
			</div>

			<h1 class="title is-1">Working with Vite</h1>

			<p class="subtitle is-5">
				Learn where Vite fits in a modern frontend workflow, how it supports frameworks
				without being one, and how to use its core commands with confidence.
			</p>

			<AnticipatorySet
				title="A Tooling Lesson, Not a Framework Lesson"
				icon="⚙️"
				:hook="anticipatoryHook"
				:reflection-prompts="[
					'When you hear “Vite”, do you think of a framework, a dev server, or a build tool?',
					'What parts of a modern frontend project still feel a bit magical right now?',
					'Have you ever run project scripts successfully without really knowing what each one did?'
				]"
				connection="This lesson comes after intermediate JavaScript, data work, and Frameworks 101 on purpose. You now have enough context to understand Vite as the workflow layer around modern projects instead of treating it as another abstract buzzword."
			/>

			<LearningObjectives
				:objectives="[
					'Explain what Vite does in a modern frontend workflow',
					'Distinguish Vite from frameworks such as Vue',
					'Use `dev`, `build`, and `preview` scripts more deliberately',
					'Recognise why a Vite project may look different from older static setups',
					'Connect Vite to the path from local development to deployment'
				]"
				purpose="Once learners understand frameworks conceptually, the next useful step is seeing the tooling that supports day-to-day implementation. This lesson makes that workflow legible."
				:prerequisites="[
					{ topic: 'Applied JavaScript', link: '/tutorials/intermediate/applied-javascript' },
					{ topic: 'Working with Data', link: '/tutorials/intermediate/working-with-data' },
					{ topic: 'Frameworks 101', link: '/tutorials/intermediate/frameworks-101' }
				]"
			/>

			<h2 id="what-vite-is">What Vite Is</h2>
			<p>
				Vite is a development server and build tool for modern frontend projects. Its main
				job is to make local development faster and production builds easier to manage.
			</p>
			<p>
				In practical terms, Vite usually gives you two big things:
			</p>
			<ul>
				<li>a fast local development server</li>
				<li>a production build command that prepares the app for deployment</li>
			</ul>
			<p>
				This is why it often shows up beside frameworks such as Vue, React, or Svelte.
				Those frameworks organise the application code. Vite helps run and build the
				project around that code.
			</p>

			<div class="box">
				<h3 class="title is-5">A simple mental model</h3>
				<ul>
					<li><strong>Framework:</strong> how you structure interactive UI code</li>
					<li><strong>Vite:</strong> how you run, bundle, and preview the project</li>
				</ul>
			</div>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-working-with-vite-tool-vs-framework.svg"
					alt="Two-panel diagram comparing a framework, which structures the application code, with Vite, which runs the dev server and build workflow around the project."
				/>
				<figcaption>
					This distinction is the heart of the lesson. The framework shapes the
					interface code. Vite supports the workflow around that interface.
				</figcaption>
			</figure>

			<h2 id="why-this-comes-now">Why This Lesson Comes After Frameworks 101</h2>
			<p>
				If you teach Vite too early, learners can easily confuse three different ideas:
				modern JavaScript, frameworks, and tooling. That makes the setup feel more complex
				than it really is.
			</p>
			<p>
				Placing this lesson after your intermediate JavaScript work and
				<em>Frameworks 101</em> solves that. At this point, learners already know why a
				project might need modules, reusable UI structure, and a clearer workflow. Vite
				then becomes the practical implementation layer instead of the place where those
				ideas get introduced for the first time.
			</p>

			<div class="notification is-info is-light">
				<p>
					<strong>Curriculum logic:</strong> this lesson should answer
					<em>How do I work with a modern frontend project locally?</em>, not
					<em>What is a framework and why does it exist?</em>
				</p>
			</div>

			<h2 id="dev-server-loop">The Development Server Loop</h2>
			<p>
				One reason Vite feels helpful so quickly is that it shortens the loop between
				changing code and seeing the result. Instead of editing files and repeatedly
				rebuilding by hand, you start the dev server once and keep iterating.
			</p>
			<ol>
				<li>start the dev server</li>
				<li>open the local site in the browser</li>
				<li>make a small code change</li>
				<li>see the result quickly</li>
				<li>repeat</li>
			</ol>
			<p>
				That faster loop matters because it supports experimentation, debugging, and
				careful visual refinement. It reduces friction between intention and feedback.
			</p>

			<div class="box">
				<h3 class="title is-5">In this repo</h3>
				<pre><code>{
  "scripts": {
    "dev": "concurrently \"npm run dev:vite\" \"npm run dev:api\"",
    "dev:vite": "vite",
    "build": "vite-ssg build && node scripts/generate-sitemap.js",
    "build:spa": "vite build && node scripts/generate-sitemap.js",
    "preview": "vite preview"
  }
}</code></pre>
				<p class="mt-3">
					GraphiteEdge is a useful example because it shows that real projects often wrap
					Vite inside a broader workflow. The core tool is still there, but it may appear
					through project-specific script names.
				</p>
			</div>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-working-with-vite-dev-build-preview-flow.svg"
					alt="Flow diagram showing the Vite workflow as edit code, run the dev server, build production assets, and preview the built site before deployment."
				/>
				<figcaption>
					Vite is easiest to understand as a loop. Develop quickly, then build and
					preview before shipping.
				</figcaption>
			</figure>

			<CheckpointBox
				title="Checkpoint for Understanding"
				icon="🧭"
				description="Pause here and make sure you can separate framework ideas from tooling ideas before moving into commands and project setup."
				:questions="checkpointQuestions"
				answers-button-text="Show sample answers"
			/>

			<h2 id="scaffolding-projects">Scaffolding a Project with Vite</h2>
			<p>
				Vite can start a new project from a template. That template might be plain
				JavaScript, or it might be tied to a framework such as Vue.
			</p>
			<p>
				The important idea is this: Vite is not becoming the framework just because it can
				start a framework template. It is simply helping you create and run the project.
			</p>

			<div class="box">
				<h3 class="title is-5">Example scaffold commands</h3>
				<pre><code>npm create vite@latest

# Example: scaffold a Vue project directly
npm create vite@latest my-vue-app -- --template vue</code></pre>
			</div>

			<p>
				A useful comparison is:
			</p>
			<ul>
				<li><strong>vanilla:</strong> easier to see the tooling without framework concepts layered on top</li>
				<li><strong>vue:</strong> easier to connect the tooling to the kind of project structure learners may meet next</li>
			</ul>

			<div class="notification is-warning is-light">
				<p>
					<strong>Version note:</strong> current Vite setup expects a modern Node version.
					GraphiteEdge already standardises on Node 22.x, which fits that workflow well.
				</p>
			</div>

			<h2 id="core-commands">The Core Commands to Understand</h2>
			<p>
				Most Vite-based projects revolve around three familiar commands:
			</p>

			<div class="columns is-variable is-5">
				<div class="column">
					<div class="box">
						<h3 class="title is-5"><code>npm run dev</code></h3>
						<p>Starts the development server for local work and quick feedback.</p>
					</div>
				</div>
				<div class="column">
					<div class="box">
						<h3 class="title is-5"><code>npm run build</code></h3>
						<p>Creates the production-ready output that a deployment platform will use.</p>
					</div>
				</div>
				<div class="column">
					<div class="box">
						<h3 class="title is-5"><code>npm run preview</code></h3>
						<p>Serves the built output locally so you can inspect the production version before deployment.</p>
					</div>
				</div>
			</div>

			<p>
				Those commands matter because they match three different moments in the workflow:
				building, checking, and shipping. Once you understand the role of each one, a new
				project becomes easier to read.
			</p>

			<h2 id="index-html-root">Why `index.html` Sits at the Project Root</h2>
			<p>
				One detail that surprises learners is that a Vite project often places
				<code>index.html</code> near the root of the project instead of hiding it deep in
				a different folder.
			</p>
			<p>
				That reflects how Vite treats the page during development. The HTML entry file is
				part of how the app starts. Rather than feeling like a passive container, it acts
				more like an entry point into the module graph.
			</p>

			<div class="box">
				<h3 class="title is-5">A very small example</h3>
				<pre><code>&lt;!-- index.html --&gt;
&lt;body&gt;
  &lt;div id="app"&gt;&lt;/div&gt;
  &lt;script type="module" src="/src/main.js"&gt;&lt;/script&gt;
&lt;/body&gt;</code></pre>
				<p class="mt-3">
					This is one reason Vite projects can feel more direct and modern than older
					setups that separated the HTML entry from the rest of the app more rigidly.
				</p>
			</div>
			<figure class="tutorial-figure tutorial-figure--wide">
				<img
					src="/assets/images/tutorials/diagrams/tutorial-working-with-vite-index-html-entry-map.svg"
					alt="Diagram showing index.html at the project root pointing into the src folder and main JavaScript entry file where the app begins."
				/>
				<figcaption>
					This is the mental shift to notice: the HTML entry file points straight into
					the application source instead of sitting far away from it.
				</figcaption>
			</figure>

			<h2 id="build-vs-preview">Build vs Preview</h2>
			<p>
				Learners often understand <code>dev</code> quickly but blur together
				<code>build</code> and <code>preview</code>. Keep their jobs separate.
			</p>
			<ul>
				<li><strong>Build</strong> creates the output files for production.</li>
				<li><strong>Preview</strong> lets you inspect those built files locally.</li>
			</ul>
			<p>
				This matters because development behavior and production behavior are related but
				not identical. A project may run fine in local development and still reveal small
				path, asset, or deployment-shape issues once it has been built.
			</p>

			<div class="notification is-info is-light">
				<p>
					<strong>Good habit:</strong> when a project is heading toward deployment, do not
					stop at <code>npm run dev</code>. Also build it and preview the result.
				</p>
			</div>

			<h2 id="what-vite-is-not">What Vite Is Not</h2>
			<p>
				To keep this lesson clean, it helps to say clearly what Vite is not.
			</p>
			<ul>
				<li>It is not a replacement for learning JavaScript fundamentals.</li>
				<li>It is not the same thing as Vue, React, or another framework.</li>
				<li>It is not the deployment platform.</li>
				<li>It is not the whole application architecture by itself.</li>
			</ul>
			<p>
				Vite supports the workflow. It does not replace the reasoning required to build a
				good project.
			</p>

			<h2 id="guided-practice">Guided Practice</h2>
			<GuidedPractice
				title="Trace the Vite workflow in a real project"
				description="Use one scratch project and one real repo to connect the commands to the actual development cycle."
				:steps="guidedPracticeSteps"
				:success-criteria="guidedPracticeSuccessCriteria"
				success-criteria-title="You are on track if you can:"
			/>

			<h2 id="independent-practice">Independent Practice</h2>
			<IndependentPractice
				title="Independent Practice: Explain and run the workflow yourself"
				description="Now repeat the core workflow on your own without step-by-step prompts."
				task-title="Your Task:"
				task="<p>Create or open a small Vite-based project. Then explain, in your own words, what each core script does and run the full sequence from local development to local production preview.</p><p>As you work, keep the lesson distinction clear: identify what belongs to the framework, what belongs to the app code, and what belongs to Vite.</p>"
				:requirements="[
					'Identify whether the project is plain JavaScript or framework-based',
					'Run the development server and make one visible change',
					'Run the production build and then preview it locally',
					'Write a short explanation of why Vite is a toolchain layer rather than a framework'
				]"
				:stretch-goals="[
					'Compare a vanilla Vite template with a Vue template and note what changed versus what stayed part of the shared toolchain',
					'Inspect `vite.config.js` in a real project and describe one customisation you notice'
				]"
				:rubric="independentPracticeRubric"
			/>

			<h2 id="additional-resources">Additional Resources</h2>
			<ul>
				<li>
					<a href="https://vite.dev/guide/" target="_blank" rel="noopener">
						Vite official guide
					</a>
					&mdash; the best next stop for current commands, templates, and workflow details.
				</li>
				<li>
					<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" target="_blank" rel="noopener">
						MDN: JavaScript modules
					</a>
					&mdash; useful if you want to connect Vite more clearly to modern module-based development.
				</li>
			</ul>

			<h2 id="recap">Recap</h2>
			<p>
				Vite makes more sense once it stops competing with framework concepts in your head.
				It is the tooling layer around a modern frontend project: start the dev server,
				iterate quickly, build for production, and preview what you built before you ship.
			</p>
			<p>
				That is why this lesson fits best after framework context rather than before it.
				At this stage, learners can see Vite as practical workflow support instead of one
				more unexplained piece of frontend jargon.
			</p>

			<ClosureSection
				title="Lesson Complete: You Can Place Vite More Clearly"
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				next-steps="Next, use this tooling awareness to support deployment-focused work: building, previewing, and eventually shipping a project with more confidence."
			/>

			<TutorialRecommendations :current-path="'/tutorials/intermediate/working-with-vite'" />
		</div>
	</div>
</template>
