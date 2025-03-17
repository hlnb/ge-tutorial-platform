<template>
	<div class="container">
		<!-- Breadcrumb navigation -->
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li><router-link to="/tutorials/javascript-basics">JavaScript Basics</router-link></li>
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
			<span class="js-logo-container">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630" class="js-logo">
					<g id="js-logo">
						<rect id="background" x="0" y="0" width="630" height="630" fill="#f7df1e" />
						<path id="j" d="m 165.65,526.47375 48.2125,-29.1775 C 223.16375,513.7875 231.625,527.74 251.92,527.74 c 19.45375,0 31.71875,-7.60975 31.71875,-37.21 l 0,-201.3 59.20375,0 0,202.1375 c 0,61.32 -35.94375,89.23125 -88.385,89.23125 -47.36125,0 -74.8525,-24.52875 -88.8075,-54.13" />
						<path id="s" d="m 375,520.13 48.20625,-27.91125 c 12.69,20.72375 29.1825,35.9475 58.36125,35.9475 24.53125,0 40.17375,-12.26475 40.17375,-29.18125 0,-20.29875 -16.06875,-27.48875 -43.135,-39.32625 l -14.7975,-6.3475 c -42.715,-18.18125 -71.05,-41.0175 -71.05,-89.2275 0,-44.40375 33.83125,-78.2375 86.695,-78.2375 37.6375,0 64.7025,13.11125 84.15375,47.36625 l -46.09625,29.60125 c -10.15,-18.1825 -21.1425,-25.37125 -38.0575,-25.37125 -17.33875,0 -28.335,10.995 -28.335,25.37125 0,17.7625 10.99625,24.9525 36.3675,35.94875 l 14.8,6.3425 c 50.325,21.56875 78.66,43.5575 78.66,93.03375 0,53.2875 -41.86625,82.465 -98.11,82.465 -54.97625,0 -90.5,-26.2175 -107.83625,-60.47375" />
					</g>
				</svg>
			</span>
			Loops in JavaScript
		</h1>
		<p class="subtitle is-3">Learn how to repeat actions and iterate through data</p>

		<!-- Learning objectives -->
		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-bullseye page-icon"></i> Learning Objectives
			</h3>
			<p>By the end of this tutorial, you'll be able to:</p>
			<ul>
				<li>Understand the purpose of loops in programming</li>
				<li>Use <code>for</code> loops to execute code a specific number of times</li>
				<li>Use <code>while</code> and <code>do...while</code> loops for conditional iteration</li>
				<li>Iterate through arrays and objects using loops</li>
				<li>Use <code>break</code> and <code>continue</code> to control loop execution</li>
				<li>Choose the appropriate loop for different scenarios</li>
			</ul>
		</div>

		<!-- Prerequisites notification -->
		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-info-circle page-icon mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this tutorial, you should be familiar with JavaScript variables, data types, and control flow (if/else statements). If you're new to these concepts, check out our 
				<router-link to="/tutorials/javascript-basics/variables">Variables &amp; Data Types</router-link> and 
				<router-link to="/tutorials/javascript-basics/conditionals">Control Flow</router-link> tutorials first.
			</p>
		</div>

		<!-- Introduction -->
		<h2 class="title is-2">Introduction to Loops</h2>
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

		<!-- For Loop -->
		<h2 class="title is-2">The for Loop</h2>
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
		<h2 class="title is-2">The while Loop</h2>
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
		<h2 class="title is-2">The do...while Loop</h2>
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
		<h2 class="title is-2">Loop Control Statements</h2>
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
		<h2 class="title is-2">Common Pitfalls</h2>
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
		<h2 class="title is-2">Practice Time!</h2>
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

		<!-- Quiz -->
		<h2 class="title is-2">Test Your Knowledge</h2>
		<div class="box">
			<TutorialQuiz section="loops" />
		</div>

		<!-- Next Steps -->
		<TutorialRecommendations :recommendations="getTutorialRecommendations('loops')" />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { getTutorialRecommendations } from '@/utils/tutorialUtils';

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