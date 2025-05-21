<template>
	<div class="content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/">
						<i class="fa-solid fa-house mr-2"></i> Home
					</router-link>
				</li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link to="/tutorials/javascript-basics">
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
			<span class="js-logo-container">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 630 630"
					class="js-logo"
				>
					<g id="js-logo">
						<rect
							id="background"
							x="0"
							y="0"
							width="630"
							height="630"
							fill="#f7df1e"
						/>
						<path
							id="j"
							d="m 165.65,526.47375 48.2125,-29.1775 C 223.16375,513.7875 231.625,527.74 251.92,527.74 c 19.45375,0 31.71875,-7.60975 31.71875,-37.21 l 0,-201.3 59.20375,0 0,202.1375 c 0,61.32 -35.94375,89.23125 -88.385,89.23125 -47.36125,0 -74.8525,-24.52875 -88.8075,-54.13"
						/>
						<path
							id="s"
							d="m 375,520.13 48.20625,-27.91125 c 12.69,20.72375 29.1825,35.9475 58.36125,35.9475 24.53125,0 40.17375,-12.26475 40.17375,-29.18125 0,-20.29875 -16.06875,-27.48875 -43.135,-39.32625 l -14.7975,-6.3475 c -42.715,-18.18125 -71.05,-41.0175 -71.05,-89.2275 0,-44.40375 33.83125,-78.2375 86.695,-78.2375 37.6375,0 64.7025,13.11125 84.15375,47.36625 l -46.09625,29.60125 c -10.15,-18.1825 -21.1425,-25.37125 -38.0575,-25.37125 -17.33875,0 -28.335,10.995 -28.335,25.37125 0,17.7625 10.99625,24.9525 36.3675,35.94875 l 14.8,6.3425 c 50.325,21.56875 78.66,43.5575 78.66,93.03375 0,53.2875 -41.86625,82.465 -98.11,82.465 -54.97625,0 -90.5,-26.2175 -107.83625,-60.47375"
						/>
					</g>
				</svg>
			</span>
			Foundation: Getting Started
		</h1>

		<!-- Enhanced Learning Objectives -->
		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Learning Objectives
			</h3>
			<p>After completing this introduction, you'll be able to:</p>
			<ul>
				<li><i class="fas fa-check-circle has-text-success mr-2"></i>Understand what JavaScript is and its role in web development</li>
				<li><i class="fas fa-check-circle has-text-success mr-2"></i>Add JavaScript to HTML pages using three different methods</li>
				<li><i class="fas fa-check-circle has-text-success mr-2"></i>Use the browser's developer console for debugging and testing</li>
				<li><i class="fas fa-check-circle has-text-success mr-2"></i>Write your first JavaScript statements</li>
				<li><i class="fas fa-check-circle has-text-success mr-2"></i>Understand basic JavaScript concepts and syntax</li>
			</ul>
		</div>

		<!-- Prerequisites Check -->
		<div class="box prerequisite-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-clipboard-check"></i> Before You Start
			</h3>
			<p>To get the most out of this tutorial, you should be familiar with:</p>
			<ul>
				<li>
					<i class="fab fa-html5 has-text-danger mr-2"></i>
					Basic HTML - <router-link to="/tutorials/html-basics">Review HTML Basics</router-link>
				</li>
				<li>
					<i class="fab fa-css3-alt has-text-info mr-2"></i>
					Basic CSS - <router-link to="/tutorials/css-basics">Review CSS Basics</router-link>
				</li>
			</ul>
		</div>

		<!-- Engaging Introduction -->
		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Think of it this way:</strong> If a website were a car, HTML would be the frame and body, CSS would be the paint and interior, and JavaScript would be the engine and controls that make it actually work!
			</p>
		</div>

		<h2 class="title is-2" id="what-is-javascript">What is JavaScript?</h2>
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

		<h2 class="title is-2 mt-6" id="adding-javascript">Adding JavaScript to HTML</h2>
		<p>
			There are three ways to add JavaScript to your webpage. Let's explore each method with practical examples:
		</p>

		<!-- Method 1: Inline JavaScript -->
		<div class="box">
			<h3 class="title is-4" id="inline-javascript">
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
			<h3 class="title is-4" id="internal-javascript">
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
			<h3 class="title is-4" id="external-javascript">
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

		<!-- Tutorial Quiz -->
		<TutorialQuiz />

		<!-- Tutorial Recommendations -->
		<TutorialRecommendations :current-path="'/tutorials/beginner/javascript-basics/introduction'" />
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { useProgressTracking } from '@/utils/progressUtils';

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


// Initialize progress tracking
const { trackTutorial } = useProgressTracking();


// Interactive demo
const demoMessage = ref('');
const messageColor = ref('is-primary');
const clickCount = ref(0);

// Track tutorial on mount
onMounted(() => {
	trackTutorial('/tutorials/beginner/javascript-basics/introduction');
});

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
    <\/script>
</body>
</html>`;

const externalJsExample = `<!DOCTYPE html>
<html>
<head>
    <title>External JavaScript Example</title>
    <script src="script.js" defer><\/script>
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
.js-logo-container {
	display: inline-block;
	width: 50px;
	height: 50px;
	margin-right: 10px;
	vertical-align: middle;
}

.js-logo {
	width: 100%;
	height: 100%;
}

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
