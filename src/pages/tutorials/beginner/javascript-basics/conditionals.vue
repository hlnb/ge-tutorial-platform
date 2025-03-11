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
					<a href="#" aria-current="page">Control Flow</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">45 minutes</span>
			<span class="tag is-success">JavaScript</span>
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
			Control Flow in JavaScript
		</h1>
		<p class="subtitle">
			Learn how to make decisions and repeat actions in your code.
		</p>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this tutorial, we
				recommend completing the
				<router-link to="/tutorials/javascript-basics/variables-data-types"
					>Variables & Data Types</router-link
				>
				and
				<router-link to="/tutorials/javascript-basics/operators"
					>Operators & Expressions</router-link
				>
				tutorials to understand the concepts used here.
			</p>
		</div>

		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb"></i> In this tutorial, you'll learn:
			</h3>
			<ul>
				<li>If statements and conditions</li>
				<li>Different types of loops</li>
				<li>Switch statements</li>
				<li>Comparison operators</li>
			</ul>
		</div>

		<h2 class="title is-2">Conditions with If Statements</h2>
		<p>
			Conditions allow your code to make decisions based on different
			situations. Think of them as forks in a road - your code can take
			different paths depending on certain conditions.
		</p>

		<h3 class="title is-4">Basic If Statement</h3>
		<p>
			The simplest form of a condition. If the condition is true, the code
			inside the curly braces will run:
		</p>

		<CodeMirror
			:code="basicIfCode"
			:value="basicIfCode"
			language="javascript"
			:read-only="true"
		/>

		<h3 class="title is-4">If-Else Statement</h3>
		<p>
			This adds an alternative path. If the condition is true, the first block
			runs; otherwise, the else block runs:
		</p>

		<CodeMirror
			:code="ifElseCode"
			:value="ifElseCode"
			language="javascript"
			:read-only="true"
		/>

		<h3 class="title is-4">If-Else If-Else</h3>
		<p>
			For multiple conditions, you can chain them together. The code checks each
			condition in order until one is true:
		</p>

		<CodeMirror
			:code="ifElseIfCode"
			:value="ifElseIfCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-info-circle mr-2"></i>
				<strong>Real-world analogy:</strong> Think of conditions like a
				restaurant host deciding where to seat guests. If it's a party of 2,
				seat them at a small table. If it's a party of 4-6, seat them at a
				medium table. Otherwise, seat them at a large table.
			</p>
		</div>

		<h2 class="title is-2">Comparison Operators</h2>
		<p>
			These operators compare values and return true or false. They're essential
			for creating conditions.
		</p>

		<CodeMirror
			:code="comparisonCode"
			:value="comparisonCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="box tip-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-exclamation-triangle"></i> Common Mistake
			</h3>
			<p>
				Be careful with <code>==</code> vs <code>===</code>. The triple equals
				(<code>===</code>) checks both value AND type, which is usually safer.
				For example:
			</p>
			<ul>
				<li><code>5 == "5"</code> is true (same value, different types)</li>
				<li><code>5 === "5"</code> is false (different types)</li>
			</ul>
			<p>
				It's generally recommended to use <code>===</code> to avoid unexpected
				behavior.
			</p>
		</div>

		<h2 class="title is-2">Loops</h2>
		<p>
			Loops allow you to repeat code multiple times. They're perfect for
			processing lists of data or doing something a specific number of times.
		</p>
		<p>
			Here's a brief introduction to loops - we'll cover these in much more
			detail in the
			<router-link to="/tutorials/javascript-basics/loops"
				>Loops tutorial</router-link
			>.
		</p>

		<h3 class="title is-4">For Loop</h3>
		<p>
			The most common loop. It has three parts: initialization, condition, and
			increment:
		</p>

		<CodeMirror
			:code="forLoopCode"
			:value="forLoopCode"
			language="javascript"
			:read-only="true"
		/>

		<h3 class="title is-4">While Loop</h3>
		<p>
			Repeats as long as a condition is true. Make sure the condition eventually
			becomes false, or you'll create an infinite loop:
		</p>

		<CodeMirror
			:code="whileLoopCode"
			:value="whileLoopCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-info-circle mr-2"></i>
				<strong>Want to learn more about loops?</strong> Check out our dedicated
				<router-link to="/tutorials/javascript-basics/loops"
					>Loops tutorial</router-link
				>
				where we cover all types of loops in JavaScript in much more detail,
				including for...of, for...in, do...while, and advanced loop techniques.
			</p>
		</div>

		<h2 class="title is-2">Switch Statements</h2>
		<p>
			Switch statements are useful when you have multiple possible values for a
			single variable. They're cleaner than writing many if/else statements:
		</p>

		<CodeMirror
			:code="switchCode"
			:value="switchCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="box tip-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb"></i> Important Note
			</h3>
			<p>
				Don't forget the <code>break</code> statement after each case! Without
				it, the code will "fall through" and continue executing the next cases,
				which is rarely what you want.
			</p>
		</div>

		<h2 class="title is-2">Practice Exercise: Menu Availability Checker</h2>

		<div class="box tip-box mb-6">
			<h3 class="title is-4"><i class="fas fa-cog"></i> Setup</h3>
			<p>Choose one of these methods to practice:</p>
			<ol>
				<li>
					<strong>Browser Console:</strong>
					<ul>
						<li>Open DevTools (F12 or Cmd+Option+I)</li>
						<li>Go to the Console tab</li>
						<li>Type or paste the code directly</li>
					</ul>
				</li>
				<li>
					<strong>HTML File:</strong>
					<ul>
						<li>
							Create a new file called <code>practice.html</code> or use your
							existing one
						</li>
						<li>Add this basic structure:</li>
					</ul>
				</li>
			</ol>

			<CodeMirror
				:code="htmlSetupCode"
				:value="htmlSetupCode"
				language="html"
				:read-only="true"
			/>
		</div>

		<div class="box warning-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-exclamation-triangle"></i> Common Issues & Solutions
			</h3>
			<ul>
				<li>
					<strong>Console shows nothing:</strong> Make sure you're using
					console.log() to see results
				</li>
				<li>
					<strong>Syntax Errors:</strong> Check for missing curly braces {} or
					semicolons ;
				</li>
				<li>
					<strong>File not updating:</strong> Make sure you saved the file and
					refreshed the browser
				</li>
				<li>
					<strong>Cannot find console:</strong>
					<ul>
						<li>Chrome/Edge: Press F12 or right-click → Inspect</li>
						<li>Firefox: Press F12 or right-click → Inspect Element</li>
						<li>Safari: Enable Developer Tools in Preferences first</li>
					</ul>
				</li>
			</ul>
		</div>

		<h2 class="title is-2">Challenge: Black Swan Bistro Menu Filter</h2>
		<p>
			Let's put everything together by creating a menu filtering system for our
			restaurant:
		</p>

		<h3 class="title is-4">Step 1: Setup Menu Items</h3>
		<CodeMirror
			:code="menuItemsCode"
			:value="menuItemsCode"
			language="javascript"
			:read-only="true"
		/>

		<h3 class="title is-4">Step 2: Create Filter Functions</h3>
		<CodeMirror
			:code="filterFunctionsCode"
			:value="filterFunctionsCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="box tip-box mb-6">
			<h3 class="title is-4"><i class="fas fa-lightbulb"></i> Hints</h3>
			<ul>
				<li>Use array methods like filter()</li>
				<li>Check multiple conditions with && (AND) or || (OR)</li>
				<li>Remember to handle edge cases</li>
			</ul>
		</div>

		<div class="box solution-box mb-6">
			<h3 class="title is-4"><i class="fas fa-check-circle"></i> Solution</h3>
			<p>
				<button class="button is-info" @click="toggleSolution">
					{{ showSolution ? 'Hide Solution' : 'Show Solution' }}
				</button>
			</p>
			<div v-if="showSolution">
				<CodeMirror
					:code="solutionCode"
					:value="solutionCode"
					language="javascript"
					:read-only="true"
				/>
			</div>
		</div>

		<h2 class="title is-2">Interactive Resources</h2>
		<div class="box tip-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-external-link-alt"></i> Practice More
			</h3>
			<ul>
				<li>
					<a
						href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling"
						target="_blank"
					>
						MDN: Control Flow
					</a>
				</li>
				<li>
					<a href="https://javascript.info/logical-operators" target="_blank">
						JavaScript.info: Logical Operators
					</a>
				</li>
				<li>
					<a
						href="https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-control-flow"
						target="_blank"
					>
						Codecademy: Control Flow
					</a>
				</li>
			</ul>
		</div>

		<div class="notification is-success is-light mt-6">
			<p>
				<i class="fas fa-check-circle mr-2"></i>
				<strong>What's Next?</strong> In the next tutorial, we'll dive deeper
				into loops in JavaScript - exploring different types of loops and
				advanced techniques for repeating actions efficiently.
			</p>
			<div class="mt-4">
				<router-link
					to="/tutorials/javascript-basics/loops"
					class="button is-success"
				>
					Continue to Loops
					<i class="fas fa-arrow-right ml-2"></i>
				</router-link>
			</div>
		</div>

		<!-- Quiz section -->
		<TutorialQuiz />

		<!-- Recommendations for next steps -->
		<TutorialRecommendations />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import TutorialQuiz from '@/components/TutorialQuiz.vue';

// Toggle solution visibility
const showSolution = ref(false);
const toggleSolution = () => {
	showSolution.value = !showSolution.value;
};

// Code examples
const basicIfCode = `let price = 24.99;

if (price > 20) {
  console.log('This is a premium dish');
}`;

const ifElseCode = `let isVegetarian = true;

if (isVegetarian) {
  console.log('Offer vegetarian menu');
} else {
  console.log('Offer regular menu');
}`;

const ifElseIfCode = `let time = 14; // 24-hour format

if (time < 11) {
  console.log('Serve breakfast menu');
} else if (time < 16) {
  console.log('Serve lunch menu');
} else {
  console.log('Serve dinner menu');
}`;

const comparisonCode = `// Equal to (value)
console.log(5 == '5'); // true

// Strictly equal to (value and type)
console.log(5 === '5'); // false

// Not equal to
console.log(5 != '6'); // true

// Greater than
console.log(10 > 5); // true

// Less than or equal to
console.log(5 <= 5); // true

// Logical AND
console.log(true && true); // true
console.log(true && false); // false

// Logical OR
console.log(true || false); // true
console.log(false || false); // false`;

const forLoopCode = `// Basic for loop
for (let i = 0; i < 3; i++) {
  console.log(\`Dish \${i + 1}\`);
}

// Loop through array
let menuItems = ['Salmon', 'Steak', 'Pasta'];
for (let i = 0; i < menuItems.length; i++) {
  console.log(menuItems[i]);
}`;

const forOfCode = `let prices = [24.99, 29.99, 19.99];
for (let price of prices) {
  console.log(\`$\${price}\`);
}`;

const forInCode = `let dish = {
  name: 'Salmon',
  price: 24.99,
  isAvailable: true
};

for (let key in dish) {
  console.log(\`\${key}: \${dish[key]}\`);
}`;

const whileLoopCode = `let orders = 3;
while (orders > 0) {
  console.log(\`Processing order: \${orders}\`);
  orders--;
}`;

const switchCode = `let dayOfWeek = 'Monday';

switch (dayOfWeek) {
  case 'Monday':
    console.log('Chef Special: Pasta');
    break;
  case 'Tuesday':
    console.log('Chef Special: Fish');
    break;
  case 'Wednesday':
    console.log('Chef Special: Steak');
    break;
  default:
    console.log('Regular menu');
}`;

const htmlSetupCode = `<!DOCTYPE html>
<html>
  <head>
    <title>Control Flow Practice</title>
  </head>
  <body>
    <h1>Check the console for results</h1>

    <script>
      // Your practice code goes here
    <\/script>
  </body>
</html>`;

const menuItemsCode = `const menuItems = [
  {
    name: 'Grilled Salmon',
    price: 24.99,
    category: 'Seafood',
    isAvailable: true,
    quantity: 5
  },
  {
    name: 'Beef Steak',
    price: 29.99,
    category: 'Meat',
    isAvailable: true,
    quantity: 3
  },
  {
    name: 'Vegetable Pasta',
    price: 18.99,
    category: 'Vegetarian',
    isAvailable: true,
    quantity: 8
  }
];`;

const filterFunctionsCode = `// Your challenge: Create these functions

function getAvailableItems() {
  // Return only available items
}

function getItemsByCategory(category) {
  // Return items in a specific category
}

function getItemsByPriceRange(min, max) {
  // Return items within price range
}

function getLowStockItems(threshold) {
  // Return items with quantity below threshold
}`;

const solutionCode = `function getAvailableItems() {
  return menuItems.filter(item => item.isAvailable && item.quantity > 0);
}

function getItemsByCategory(category) {
  return menuItems.filter(item => 
    item.category === category && item.isAvailable
  );
}

function getItemsByPriceRange(min, max) {
  return menuItems.filter(item => 
    item.price >= min && item.price <= max
  );
}

function getLowStockItems(threshold = 5) {
  return menuItems.filter(item => item.quantity <= threshold);
}

// Test the functions
console.log('Available items:', getAvailableItems());
console.log('Seafood items:', getItemsByCategory('Seafood'));
console.log('Items $15-$25:', getItemsByPriceRange(15, 25));
console.log('Low stock items:', getLowStockItems(3));`;
</script>

<script>
// Frontmatter for the tutorial
export default {
	frontmatter: {
		title: 'Control Flow in JavaScript',
		description: 'Learn how to control program flow with conditions and loops',
		category: 'JavaScript',
		level: 'Beginner',
		order: 3,
		tags: ['javascript', 'control flow', 'conditions', 'loops'],
		lastUpdated: '2023-10-15',
	},
};
</script>

<style scoped>
.highlight-box {
	background-color: #f0f8ff;
	border-left: 5px solid #3273dc;
}

.try-it-box {
	background-color: #f0fff4;
	border-left: 5px solid #48c774;
}

.tip-box {
	background-color: #fff5eb;
	border-left: 5px solid #ffdd57;
}

.warning-box {
	background-color: #feecf0;
	border-left: 5px solid #f14668;
}

.solution-box {
	background-color: #f5f5f5;
	border-left: 5px solid #363636;
}

.js-logo-container {
	display: inline-block;
	width: 40px;
	height: 40px;
	margin-right: 10px;
	vertical-align: middle;
}

.js-logo {
	width: 100%;
	height: 100%;
}

.box h3 {
	margin-bottom: 1rem;
}

.box ul,
.box ol {
	margin-left: 1.5rem;
}

.notification {
	margin: 1.5rem 0;
}

.button {
	transition: all 0.3s ease;
}

.button:hover {
	transform: translateY(-2px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
