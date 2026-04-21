<template>
	<div class="container section">
		<div class="tutorial-content">
		<!-- Breadcrumb navigation -->
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li><router-link to="/tutorials/beginner/javascript-basics">JavaScript Basics</router-link></li>
				<li class="is-active"><a href="#" aria-current="page">Loops</a></li>
			</ul>
		</nav>

		<!-- Tutorial tags -->
		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">15 minutes</span>
			<span class="tag is-success">JavaScript</span>
			<span class="tag is-success">Level 4</span>
		</div>

		<!-- Tutorial title -->
		<h1 class="title is-1">
			<span class="js-lesson-icon" aria-hidden="true">JS</span>		
			Loops in JavaScript
		</h1>
		<p class="subtitle is-3">Learn how to repeat actions and iterate through data</p>

		<!-- Prerequisites notification -->
		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-info-circle page-icon mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this tutorial, you should be familiar with JavaScript variables, data types, and control flow (if/else statements). If you're new to these concepts, check out our 
				<router-link to="/tutorials/beginner/javascript-basics/variables-data-types">Variables &amp; Data Types</router-link> and 
				<router-link to="/tutorials/beginner/javascript-basics/conditionals">Control Flow</router-link> tutorials first.
			</p>
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

		<!-- Introduction -->
		<h2 id="introduction-to-loops" class="title is-2">Introduction to Loops</h2>
		<p>
			Imagine you're a chef at the Black Swan Bistro, and you need to prepare 10 identical salads for a large party. Would you write out each step 10 times? Of course not! You'd create a process and repeat it 10 times.
		</p>

		<div class="columns mb-6">
			<div class="column">
				<div class="box">
					<h4 class="title is-5">Without Loops:</h4>
					<CodeMirror
						:code="withoutLoopsExample"
						language="javascript"
						:readonly="true"
					/>
				</div>
			</div>
			<div class="column">
				<div class="box">
					<h4 class="title is-5">With Loops:</h4>
					<CodeMirror
						:code="withLoopsExample"
						language="javascript"
						:readonly="true"
					/>
				</div>
			</div>
		</div>

		<CheckpointBox
			:title="loopsCheckpoint.title"
			:questions="loopsCheckpoint.questions"
			:tips="loopsCheckpoint.tips"
			class="mb-6"
		/>

		<!-- For Loop -->
		<h2 id="for-loop" class="title is-2">The for Loop</h2>
		<p>
			The <code>for</code> loop is perfect when you know exactly how many times you want to repeat something.
			Think of it like a recipe with a specific number of servings.
		</p>

		<!-- For Loop Diagram -->
		<div class="diagram-container mb-4">
			<svg width="500" height="300" viewBox="0 0 500 300">
				<!-- Initialization -->
				<rect x="50" y="25" width="100" height="50" rx="5" fill="#3273dc"/>
				<text x="100" y="55" text-anchor="middle" fill="white">Start: let i = 0</text>
				
				<!-- Condition -->
				<path d="M 200,100 L 250,150 L 200,200 L 150,150 Z" fill="#ffdd57"/>
				<text x="200" y="155" text-anchor="middle">i &lt; length?</text>
				
				<!-- Code Block -->
				<rect x="300" y="125" width="100" height="50" rx="5" fill="#48c774"/>
				<text x="350" y="155" text-anchor="middle" fill="white">Code Block</text>
				
				<!-- Increment -->
				<rect x="300" y="225" width="100" height="50" rx="5" fill="#3273dc"/>
				<text x="350" y="255" text-anchor="middle" fill="white">i++</text>
				
				<!-- Arrows -->
				<path d="M 150,50 L 200,150" stroke="#3273dc" stroke-width="2" fill="none"/>
				<path d="M 250,150 L 300,150" stroke="#48c774" stroke-width="2" fill="none"/>
				<path d="M 400,150 L 450,150 L 450,50 L 150,50" stroke="#3273dc" stroke-width="2" fill="none"/>
				<path d="M 200,200 L 200,250" stroke="#f14668" stroke-width="2" fill="none"/>
				<text x="180" y="230" fill="#f14668">Done</text>
			</svg>
		</div>

		<div class="box">
			<h3 class="title is-4">For Loop Syntax</h3>
			<CodeMirror
				:code="forLoopSyntax"
				language="javascript"
				:readonly="true"
			/>
			<div class="notification is-info is-light mt-4">
				<p><strong>Parts of a for loop:</strong></p>
				<ul>
					<li><code>initialization</code>: Sets up your counter variable (usually <code>i</code>)</li>
					<li><code>condition</code>: Checks if the loop should continue</li>
					<li><code>increment</code>: Updates the counter each time through the loop</li>
				</ul>
			</div>
		</div>

		<!-- Real-world Example -->
		<div class="box">
			<h3 class="title is-4">Restaurant Example</h3>
			<CodeMirror
				:code="restaurantForLoop"
				language="javascript"
				:readonly="true"
			/>
		</div>

		<!-- While Loop -->
		<h2 id="while-loop" class="title is-2">The while Loop</h2>
		<p>
			Use a <code>while</code> loop when you don't know exactly how many iterations you need.
			It's like cooking pasta until it's al dente - you check the condition each time.
		</p>

		<!-- While Loop Diagram -->
		<div class="diagram-container mb-4">
			<svg width="400" height="300" viewBox="0 0 400 300">
				<!-- Condition Diamond -->
				<path d="M 150,100 L 200,150 L 150,200 L 100,150 Z" fill="#ffdd57"/>
				<text x="150" y="155" text-anchor="middle">Condition?</text>
				
				<!-- Code Block -->
				<rect x="250" y="125" width="100" height="50" rx="5" fill="#48c774"/>
				<text x="300" y="155" text-anchor="middle" fill="white">Code Block</text>
				
				<!-- Arrows -->
				<path d="M 200,150 L 250,150" stroke="#48c774" stroke-width="2" fill="none"/>
				<path d="M 350,150 L 400,150 L 400,50 L 150,50 L 150,100" stroke="#3273dc" stroke-width="2" fill="none"/>
				<path d="M 150,200 L 150,250" stroke="#f14668" stroke-width="2" fill="none"/>
				<text x="130" y="230" fill="#f14668">Done</text>
			</svg>
		</div>

		<div class="box">
			<h3 class="title is-4">While Loop Example</h3>
			<CodeMirror
				:code="whileLoopExample"
				language="javascript"
				:readonly="true"
			/>
		</div>

		<!-- Do...While Loop -->
		<h2 id="do-while-loop" class="title is-2">The do...while Loop</h2>
		<p>
			A <code>do...while</code> loop is like a while loop, but it always runs at least once.
			Think of it as taking the first order of the day before checking if the restaurant is actually open.
		</p>

		<!-- Do...While Diagram -->
		<div class="diagram-container mb-4">
			<svg width="400" height="400" viewBox="0 0 400 400">
				<!-- Code Block -->
				<rect x="150" y="50" width="100" height="50" rx="5" fill="#48c774"/>
				<text x="200" y="80" text-anchor="middle" fill="white">Code Block</text>
				
				<!-- Condition Diamond -->
				<path d="M 150,200 L 200,250 L 150,300 L 100,250 Z" fill="#ffdd57"/>
				<text x="150" y="255" text-anchor="middle">Condition?</text>
				
				<!-- Arrows -->
				<path d="M 150,100 L 150,200" stroke="#3273dc" stroke-width="2" fill="none"/>
				<path d="M 200,250 L 250,250 L 250,75 L 250,75" stroke="#48c774" stroke-width="2" fill="none"/>
				<path d="M 150,300 L 150,350" stroke="#f14668" stroke-width="2" fill="none"/>
				<text x="130" y="330" fill="#f14668">Done</text>
			</svg>
		</div>

		<div class="box">
			<h3 class="title is-4">Do...While Example</h3>
			<CodeMirror
				:code="doWhileExample"
				language="javascript"
				:readonly="true"
			/>
		</div>

		<!-- Loop Control -->
		<h2 id="loop-control" class="title is-2">Loop Control Statements</h2>
		<p>
			Sometimes you need to change how your loop behaves. JavaScript provides two special statements:
		</p>

		<div class="columns">
			<div class="column">
				<div class="box">
					<h4 class="title is-4">break</h4>
					<p>Exits the loop completely</p>
					<CodeMirror
						:code="breakExample"
						language="javascript"
						:readonly="true"
					/>
				</div>
			</div>
			<div class="column">
				<div class="box">
					<h4 class="title is-4">continue</h4>
					<p>Skips to the next iteration</p>
					<CodeMirror
						:code="continueExample"
						language="javascript"
						:readonly="true"
					/>
				</div>
			</div>
		</div>

		<!-- Common Pitfalls -->
		<h2 id="common-pitfalls" class="title is-2">Common Pitfalls</h2>
		<div class="box">
			<h3 class="title is-4">Watch Out For:</h3>
			<ul>
				<li>Infinite loops (forgetting to increment or update the condition)</li>
				<li>Off-by-one errors (using &lt; instead of &lt;= or vice versa)</li>
				<li>Modifying the loop variable inside the loop</li>
				<li>Performance issues with very large loops</li>
			</ul>
		</div>

		<!-- Practice Time -->
		<h2 id="practice" class="title is-2">Practice Time!</h2>
		<div class="box">
			<h3 class="title is-4">Try These Exercises:</h3>
			<ol>
				<li>Create a loop to display a restaurant menu (array of items)</li>
				<li>Use a while loop to simulate customers arriving until the restaurant is full</li>
				<li>Create a nested loop to assign tables (rows and columns)</li>
			</ol>
			<div class="notification is-info is-light mt-4">
				<p>
					<i class="fas fa-lightbulb page-icon"></i>
					Open your browser's console (F12) to try these exercises!
				</p>
			</div>
		</div>

		<TestYourKnowledgeSection
			tutorial-path="/tutorials/beginner/javascript-basics/loops"
		/>

		<!-- Hunter Element: Closure -->
		<ClosureSection
			:key-takeaways="closureKeyTakeaways"
			:objectives="closureObjectives"
			:reflection-prompts="closureReflectionPrompts"
			real-world-application="<p>Loops drive the core of data-heavy applications. Social media feeds loop through posts to render your timeline. E-commerce sites iterate over product catalogs to display search results. Game engines use loops to update every frame. Understanding loops means you can process any collection of data efficiently, from rendering UI lists to batch-processing API responses.</p>"
			next-steps="<p>Now that you can repeat actions efficiently, you're ready to learn about functions. In the next lesson, you'll discover how to package reusable blocks of logic, pass data in and get results back, and organize your code into clean, maintainable building blocks.</p>"
		/>

		<!-- Add recommendations before the quiz -->
		<TutorialRecommendations :current-path="'/tutorials/beginner/javascript-basics/loops'" />

		<!-- Tutorial Completion -->
		<TutorialCompletion tutorial-path="/tutorials/beginner/javascript-basics/loops" />
		</div>
	</div>
</template>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';
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

useTutorialHead({
  title: 'Loops in JavaScript',
  description: 'Learn how to repeat code in JavaScript — for loops, while loops, and iterating through arrays and objects.',
  path: '/tutorials/beginner/javascript-basics/loops',
});

const sections = [
	{ id: 'introduction-to-loops', title: 'Introduction to Loops' },
	{ id: 'for-loop', title: 'The for Loop' },
	{ id: 'while-loop', title: 'The while Loop' },
	{ id: 'do-while-loop', title: 'The do...while Loop' },
	{ id: 'loop-control', title: 'Loop Control Statements' },
	{ id: 'common-pitfalls', title: 'Common Pitfalls' },
	{ id: 'practice', title: 'Practice Time' },
];

const { pageSections } = usePageSections(sections);

const anticipatorySet = {
	title: '🔁 Prep Like a Pro Line Cook',
	hook: `<p>Imagine prepping 50 identical salads before guests arrive. You could write each instruction separately, or you could repeat the same block with a loop. Restaurants thrive on repeatable systems—so do JavaScript apps.</p>`,
	reflectionPrompts: [
		'Where do you perform the same action more than twice in your projects?',
		'What happens when you forget to stop a repetitive task (like a timer or subscription)?',
		'How could loops help you explore large datasets or UI collections faster?'
	],
	connection: 'This lesson helps you convert repetitive work into efficient loops so data lists, UI grids, and API responses become effortless to process.'
};

const learningObjectives = {
	objectives: [
		'Explain when to choose for, while, do...while, and for...of loops',
		'Iterate through arrays and objects without off-by-one errors',
		'Control loop execution with break and continue to guard edge cases',
		'Build nested loops responsibly for grid or seating assignments',
		'Troubleshoot infinite loops with clear exit conditions'
	],
	purpose: 'These objectives emphasize practical repetition skills that unlock data handling, rendering lists, and asynchronous polling later in the track.'
};

const loopsCheckpoint = {
	title: 'Checkpoint: Loop Intentionality',
	questions: [
		'Which loop structure best fits the menu-prep scenario you just read?',
		'How would you detect and fix an infinite loop before it freezes the UI?',
		'Where could break or continue simplify your table-assignment logic?'
	],
	tips: [
		'Sketch loop flow (init → condition → increment) before coding.',
		'Log counters or array lengths while debugging long iterations.',
		'Encapsulate loop bodies into helper functions when they grow.'
	]
};

const closureKeyTakeaways = [
	'for loops are ideal when you know the exact number of iterations needed',
	'while loops run as long as a condition is true—useful when the count is unknown',
	'do...while loops guarantee at least one execution before checking the condition',
	'break exits a loop immediately; continue skips to the next iteration',
	'Always ensure loops have a clear exit condition to prevent infinite loops',
	'Nested loops multiply iterations—use them carefully for grids or combinations',
];

const closureObjectives = [
	'Explain when to choose for, while, do...while, and for...of loops',
	'Iterate through arrays and objects without off-by-one errors',
	'Control loop execution with break and continue to guard edge cases',
	'Build nested loops responsibly for grid or seating assignments',
	'Troubleshoot infinite loops with clear exit conditions',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-sync-alt',
		title: 'Loop Selection',
		questions: [
			'How do you decide which loop type fits a given task?',
			'When would a for...of loop be more readable than a traditional for loop?',
		],
		content: 'Choosing the right loop structure signals intent. for loops suit counted iterations, while loops suit condition-driven repetition, and for...of loops suit iterating collections.',
	},
	{
		icon: 'fas fa-exclamation-triangle',
		title: 'Safety & Performance',
		questions: [
			'What strategies help you avoid infinite loops?',
			'How can you optimise loops that process large datasets?',
		],
		content: 'Always verify your exit condition before running a loop. For large arrays, consider early exits with break or functional methods like find and some that stop when a match is found.',
	},
];

// Example code snippets
const withoutLoopsExample = `// Without loops - repetitive and error-prone
console.log("Making salad 1");
console.log("Making salad 2");
console.log("Making salad 3");
// ... and so on`;

const withLoopsExample = `// With loops - clean and efficient
for (let i = 1; i <= 10; i++) {
    console.log("Making salad " + i);
}`;

const forLoopSyntax = `for (initialization; condition; increment) {
    // Code to repeat
}

// Example:
for (let i = 0; i < 5; i++) {
    console.log(i);  // Prints 0, 1, 2, 3, 4
}`;

const restaurantForLoop = `// Menu items array
const menuItems = ['Salad', 'Soup', 'Pasta', 'Steak'];

// Display menu with numbers
for (let i = 0; i < menuItems.length; i++) {
    console.log(\`\${i + 1}. \${menuItems[i]}\`);
}

// Using for...of (modern way to loop over arrays)
for (const item of menuItems) {
    console.log(item);
}`;

const whileLoopExample = `// Simulate customers until restaurant is full
let customersSeated = 0;
const maxCapacity = 50;

while (customersSeated < maxCapacity) {
    // Simulate random group size (1-6 people)
    const groupSize = Math.floor(Math.random() * 6) + 1;
    
    if (customersSeated + groupSize <= maxCapacity) {
        customersSeated += groupSize;
        console.log(\`Seated group of \${groupSize}. Total: \${customersSeated}\`);
    } else {
        break;  // Restaurant would exceed capacity
    }
}`;

const doWhileExample = `// Take first order before checking if kitchen is open
let isKitchenOpen = false;
do {
    console.log("Taking customer order...");
    // Check if kitchen is still open
    isKitchenOpen = checkKitchenStatus();  // Some function that checks time
} while (isKitchenOpen);`;

const breakExample = `// Stop taking orders when kitchen closes
for (let hour = 9; hour <= 22; hour++) {
    if (hour === 21) {
        console.log("Kitchen is closing!");
        break;  // Exit loop early
    }
    console.log(\`Taking orders for hour \${hour}\`);
}`;

const continueExample = `// Skip reserved tables
for (let tableNum = 1; tableNum <= 10; tableNum++) {
    if (reservedTables.includes(tableNum)) {
        continue;  // Skip to next table
    }
    console.log(\`Table \${tableNum} is available\`);
}`;
</script>

<style scoped>
.page-icon{
	width: 1em;
	height: 1em;
}

.diagram-container {
	background: white;
	padding: 1rem;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	margin: 1.5rem 0;
	overflow-x: auto;
}

svg {
	max-width: 100%;
	height: auto;
}

svg text {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	font-size: 12px;
}

.tip-box {
	background-color: #f0f8ff;
	border-left: 4px solid #3298dc;
}

.highlight-box {
	background-color: #fafafa;
	border-left: 4px solid #f7df1e;
}

.radio {
	display: block;
	margin: 0.5rem 0;
}
</style> 