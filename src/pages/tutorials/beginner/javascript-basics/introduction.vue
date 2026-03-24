
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
					<li>
						<router-link to="/tutorials/beginner/javascript-basics">
							JavaScript Basics
						</router-link>
					</li>
					<li class="is-active">
						<a href="#" aria-current="page">Introduction</a>
					</li>
				</ul>
			</nav>

			<div class="tags">
				<span class="tag is-info">Beginner</span>
				<span class="tag is-warning">45 minutes</span>
				<span class="tag is-success">JavaScript</span>
				<span class="tag is-success">Level 1</span>
			</div>

			<h1 class="title is-1">
				<span class="js-lesson-icon" aria-hidden="true">JS</span>
				Foundation: Getting Started
			</h1>

			<!-- Prerequisites Check -->
			<div class="box prerequisite-box mb-6">
				<h3 class="title is-4">
					<i class="fas fa-clipboard-check"></i> Before You Start
				</h3>
				<p>To get the most out of this tutorial, you should be familiar with:</p>
				<ul>
					<li>
						<i class="fab fa-html5 has-text-danger mr-2"></i>
						Basic HTML - <router-link to="/tutorials/beginner/html-basics/">Review HTML Basics</router-link>
					</li>
					<li>
						<i class="fab fa-css3-alt has-text-info mr-2"></i>
						Basic CSS - <router-link to="/tutorials/beginner/css-basics/">Review CSS Basics</router-link>
					</li>
				</ul>
			</div>

			<AnticipatorySet
				:title="anticipatorySet.title"
				:hook="anticipatorySet.hook"
				:reflection-prompts="anticipatorySet.reflectionPrompts"
				:connection="anticipatorySet.connection"
			/>

			<LearningObjectives
				:objectives="learningObjectives.objectives"
				:purpose="learningObjectives.purpose"
			/>

		<!-- Engaging Introduction -->
		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Think of it this way:</strong> If a website were a car, HTML would be the frame and body, CSS would be the paint and interior, and JavaScript would be the engine and controls that make it actually work!
			</p>
		</div>

		<h2 id="what-is-javascript" class="title is-2">What is JavaScript?</h2>
		<p>
			JavaScript is the programming language that brings websites to life. It's the technology that transforms static web pages into interactive applications that respond to user actions in real-time.
		</p>

		<!-- Interactive Example -->
		<div class="box interactive-demo mb-6">
			<h3 class="title is-4">
				<i class="fas fa-hand-pointer"></i> Try It Yourself
			</h3>
			<p>These examples demonstrate the core concepts we just learned about JavaScript:</p>
			
			<div class="content mb-4">
				<ul>
					<li><strong>Event Handling:</strong> Each button responds to click events</li>
					<li><strong>DOM Manipulation:</strong> Messages appear and update dynamically</li>
					<li><strong>Variables:</strong> We track the number of clicks</li>
					<li><strong>Dynamic Styling:</strong> Colors change based on JavaScript code</li>
				</ul>
			</div>

			<div class="has-text-centered">
				<div class="buttons is-centered mb-4">
					<button class="button is-primary" @click="showInteractiveDemo">
						<i class="fas fa-magic mr-2"></i>Show Message
					</button>
					<button class="button is-info" @click="changeColors">
						<i class="fas fa-palette mr-2"></i>Change Colors
					</button>
					<button class="button is-success" @click="countClicks">
						<i class="fas fa-plus mr-2"></i>Count Clicks (<span>{{ clickCount }}</span>)
					</button>
				</div>
				<div v-if="demoMessage" :class="['notification', messageColor]">
					<p class="has-text-weight-bold">{{ demoMessage }}</p>
				</div>
			</div>

			<div class="mt-4">
				<p class="is-size-7">
					<i class="fas fa-info-circle mr-1"></i>
					<strong>Pro Tip:</strong> Open your browser's Developer Tools (F12) and check the Console tab. 
					You'll see how JavaScript can log information while your code runs!
				</p>
			</div>
		</div>

		<!-- Real-world Applications -->
		<div class="columns">
			<div class="column">
				<div class="card">
					<div class="card-content">
						<h4 class="title is-5">
							<i class="fas fa-cogs mr-2"></i>
							JavaScript Powers:
						</h4>
						<ul>
							<li>Interactive user interfaces</li>
							<li>Real-time data updates</li>
							<li>Form validation and processing</li>
							<li>Dynamic content loading</li>
							<li>Browser-based games</li>
							<li>Complex animations</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="column">
				<div class="card">
					<div class="card-content">
						<h4 class="title is-5">
							<i class="fas fa-globe mr-2"></i>
							Real-world Examples:
						</h4>
						<ul>
							<li>Social media feeds that update automatically</li>
							<li>Interactive maps with real-time navigation</li>
							<li>Password strength checkers</li>
							<li>Shopping carts with instant price updates</li>
							<li>Chat applications</li>
							<li>Browser-based code editors</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<CheckpointBox
			:title="foundationCheckpoint.title"
			:questions="foundationCheckpoint.questions"
			:tips="foundationCheckpoint.tips"
			class="mb-6"
		/>

		<h2 id="adding-javascript" class="title is-2 mt-6">Adding JavaScript to HTML</h2>
		<p>
			There are three ways to add JavaScript to your webpage. Let's explore each method with practical examples:
		</p>

		<!-- Method 1: Inline JavaScript -->
		<div class="box">
			<h3 id="inline-javascript" class="title is-4">
				<i class="fas fa-code mr-2"></i>
				1. Inline JavaScript
			</h3>
			<p>
				Inline JavaScript is written directly in HTML elements. While it's quick for simple interactions, it's not recommended for larger applications.
			</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="inlineJsExample"
					:code="inlineJsExample"
					language="html"
					:read-only="true"
				/>
			</div>
			<div class="mt-3">
				<button class="button is-info" @click="showInlineAlert">
					Try it: Click me!
				</button>
			</div>
		</div>

		<!-- Method 2: Internal JavaScript -->
		<div class="box">
			<h3 id="internal-javascript" class="title is-4">
				<i class="fas fa-file-code mr-2"></i>
				2. Internal JavaScript
			</h3>
			<p>
				Internal JavaScript is placed within a <code>&lt;script&gt;</code> tag in your HTML file. It's useful for page-specific scripts.
			</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="internalJsExample"
					:code="internalJsExample"
					language="html"
					:read-only="true"
				/>
			</div>
		</div>

		<!-- Method 3: External JavaScript -->
		<div class="box">
			<h3 id="external-javascript" class="title is-4">
				<i class="fas fa-external-link-alt mr-2"></i>
				3. External JavaScript (Recommended)
			</h3>
			<p>
				External JavaScript is stored in separate files and linked to your HTML. This is the preferred method for better organization and maintenance.
			</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="externalJsExample"
					:code="externalJsExample"
					language="html"
					:read-only="true"
				/>
			</div>
			<p class="mt-3">And in a separate file named <code>script.js</code>:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="externalJsFileExample"
					:code="externalJsFileExample"
					language="javascript"
					:read-only="true"
				/>
			</div>
		</div>

		<!-- Best Practices -->
		<div class="notification is-warning is-light">
			<p>
				<i class="fas fa-exclamation-triangle mr-2"></i>
				<strong>Best Practice:</strong> Use external JavaScript files for:
			</p>
			<ul>
				<li>Better code organization</li>
				<li>Easier maintenance</li>
				<li>Improved caching</li>
				<li>Better collaboration in team projects</li>
			</ul>
		</div>

			<TestYourKnowledgeSection
				tutorial-path="/tutorials/beginner/javascript-basics/introduction"
			/>

			<!-- Hunter Element: Closure -->
			<ClosureSection
				:key-takeaways="closureKeyTakeaways"
				:objectives="closureObjectives"
				:reflection-prompts="closureReflectionPrompts"
				real-world-application="<p>JavaScript powers virtually every modern website and application. From Gmail's real-time email interface to Netflix's recommendation engine, JavaScript enables the interactive experiences billions of people use daily. Understanding how to add and organize scripts is the foundation for building any web application.</p>"
				next-steps="<p>Now that you understand what JavaScript is and how to add it to your pages, you're ready to learn about variables and data types. In the next lesson, you'll discover how to store and work with different kinds of information in your programs.</p>"
			/>

			<!-- Recommendations before quiz per Hunter structure -->
			<TutorialRecommendations :current-path="'/tutorials/beginner/javascript-basics/introduction'" />

			<!-- Tutorial Completion -->
			<TutorialCompletion tutorial-path="/tutorials/beginner/javascript-basics/introduction" />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';
import TutorialCompletion from '@/components/TutorialCompletion.vue';
import TestYourKnowledgeSection from '@/components/TestYourKnowledgeSection.vue';

const sections = [
	{ id: 'what-is-javascript', title: 'What is JavaScript?' },
	{
		id: 'adding-javascript',
		title: 'Adding JavaScript to HTML',
		subsections: [
			{ id: 'inline-javascript', title: 'Inline JavaScript' },
			{ id: 'internal-javascript', title: 'Internal JavaScript' },
			{ id: 'external-javascript', title: 'External JavaScript' },
		],
	},
];

const { pageSections } = usePageSections(sections);

const anticipatorySet = {
	title: '🚀 Ignite Your Interactive Ideas',
	hook: `<p>Every time you tap a button and a menu appears instantly, JavaScript is behind the magic. From Spotify playlists that update in real-time to flight trackers that never refresh the page, interactive experiences rely on this language.</p>`,
	reflectionPrompts: [
		'Which website interaction impressed you recently and why?',
		'How could instant feedback make your own projects feel more alive?',
		'What problems could you solve if pages responded to users automatically?'
	],
	connection: 'In this introduction you will see how JavaScript transforms static pages into living interfaces and take the first steps toward building your own responsive experiences.'
};

const learningObjectives = {
	objectives: [
		'Describe how JavaScript fits alongside HTML and CSS in web apps',
		'Set up inline, internal, and external scripts safely',
		'Navigate the browser console to inspect output and errors',
		'Write and run small interactive snippets using DOM events',
		'Explain real-world scenarios where JavaScript creates value'
	],
	purpose: 'These fundamentals ensure every future JavaScript concept—variables, logic, or complex apps—rests on a confident understanding of where and how code runs.'
};

const foundationCheckpoint = {
	title: 'Checkpoint: Script Foundations',
	questions: [
		'Which script-loading approach would you choose for a large site and why?',
		'How would you describe the role of the browser console to a teammate?',
		'Where could inline JavaScript cause maintenance problems?'
	],
	tips: [
		'Prefer external files for shared behavior and caching benefits.',
		'Use console.log strategically to trace state changes.',
		'Keep markup clean by separating logic from presentation.'
	]
};

const closureKeyTakeaways = [
	'JavaScript is the programming language that makes websites interactive and dynamic',
	'There are three ways to add JavaScript: inline, internal (<script> tag), and external (.js file)',
	'External JavaScript files are the professional standard for organized, maintainable code',
	'The browser console is an essential tool for testing code and debugging errors',
	'JavaScript works alongside HTML (structure) and CSS (presentation) to create complete web experiences',
];

const closureObjectives = [
	'Describe how JavaScript fits alongside HTML and CSS in web apps',
	'Set up inline, internal, and external scripts safely',
	'Navigate the browser console to inspect output and errors',
	'Write and run small interactive snippets using DOM events',
	'Explain real-world scenarios where JavaScript creates value',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-rocket',
		title: 'Getting Started',
		questions: [
			'Which method of adding JavaScript would you choose for a multi-page website and why?',
			'How does separating JavaScript into external files improve collaboration?',
		],
		content: 'Choosing the right script-loading strategy from the start saves refactoring time later. External files enable caching, team collaboration, and clear separation of concerns.',
	},
	{
		icon: 'fas fa-tools',
		title: 'Developer Tools',
		questions: [
			'How can the browser console help you understand what your code is doing?',
			'What debugging strategies would you use when a script does not work as expected?',
		],
		content: 'The console is your best friend for development. Learning to read error messages and use console.log effectively will accelerate your learning throughout this series.',
	},
];

const frontmatter = {
	title: 'Foundations-Getting Started',
	description: 'Get started with JavaScript programming',
	category: 'JavaScript Basics',
	level: 'Beginner',
	order: 1,
	tags: ['javascript', 'basics', 'foundations', 'web development'],
	lastUpdated: '2023-10-15',
};
// Reactive variables for the interactive demo
const demoMessage = ref('');
const messageColor = ref('is-primary');
const clickCount = ref(0);


// Interactive demo

const showInteractiveDemo = () => {
	console.log('Showing welcome message...');
	demoMessage.value = 'Hello! This message was created by JavaScript!';
	messageColor.value = 'is-primary';
	
	console.log('Setting up timeout for message change...');
	setTimeout(() => {
		console.log('Changing message after delay');
		demoMessage.value = 'I can even change automatically after a delay!';
		messageColor.value = 'is-info';
	}, 2000);
};

const changeColors = () => {
	const colors = ['is-primary', 'is-info', 'is-success', 'is-warning', 'is-danger'];
	const currentIndex = colors.indexOf(messageColor.value);
	const nextIndex = (currentIndex + 1) % colors.length;
	
	console.log(`Changing color from ${colors[currentIndex]} to ${colors[nextIndex]}`);
	messageColor.value = colors[nextIndex];
	demoMessage.value = 'JavaScript can change styles dynamically!';
};

const countClicks = () => {
	clickCount.value += 1;
	console.log(`Button clicked ${clickCount.value} time(s)`);
	demoMessage.value = `You've clicked the button ${clickCount.value} time${clickCount.value === 1 ? '' : 's'}!`;
	messageColor.value = 'is-success';
};

// Code examples
const inlineJsExample = '<button onclick="alert(\'Hello from inline JavaScript!\')">Click me</button>';

const internalJsExample = `<!DOCTYPE html>
<html>
<head>
    <title>Internal JavaScript Example</title>
</head>
<body>
    <button id="myButton">Click me</button>
    <script>
        document.getElementById('myButton').addEventListener('click', function() {
            alert('Hello from internal JavaScript!');
        });
	${'</' + 'script>'}
</body>
</html>`;

const externalJsExample = `<!DOCTYPE html>
<html>
<head>
    <title>External JavaScript Example</title>
	<script src="script.js" defer>${'</' + 'script>'}
</head>
<body>
    <button id="myButton">Click me</button>
</body>
</html>`;

const externalJsFileExample = `// script.js
document.getElementById('myButton').addEventListener('click', function() {
    alert('Hello from external JavaScript!');
});`;

// Example functions
const showInlineAlert = () => {
	alert('Hello from inline JavaScript!');
};
</script>

<script>
// Frontmatter for the tutorial
export default {
	frontmatter: {
		title: 'Foundations-Getting Started',
		description: 'Get started with JavaScript programming',
		category: 'JavaScript Basics',
		level: 'Beginner',
		order: 1,
		tags: ['javascript', 'basics', 'foundations', 'web development'],
		lastUpdated: '2023-10-15',
	},
};
</script>

<style scoped>
.highlight-box {
	background-color: #fafafa;
	border-left: 4px solid #f7df1e;
}

.prerequisite-box {
	background-color: #f8f9fa;
	border-left: 4px solid #3273dc;
}

.interactive-demo {
	background-color: #f0f8ff;
	border-left: 4px solid #00d1b2;
}

.quiz-box {
	background-color: #fff3e0;
	border-left: 4px solid #ff9800;
}

.codemirror-wrapper {
	margin: 1rem 0;
	border-radius: 4px;
	overflow: hidden;
}

</style>
