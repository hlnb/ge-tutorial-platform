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
					<router-link to="/tutorials/beginner/javascript-basics">
						JavaScript Basics
					</router-link>
				</li>
				<li class="is-active">
					<a href="#" aria-current="page">Variables and Data Types</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">45 minutes</span>
			<span class="tag is-success">JavaScript</span>
		</div>

		<h1 class="title is-1">Variables and Data Types</h1>
		<p class="subtitle">Learn how to store and work with different types of data in JavaScript.</p>

		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb"></i> In this tutorial, you'll learn:
			</h3>
			<ul>
				<li>How to declare variables</li>
				<li>Different types of data</li>
				<li>Working with strings and numbers</li>
				<li>Basic arrays and objects</li>
			</ul>
		</div>

		<h2 class="title is-2">Declaring Variables</h2>
		<p>
			Variables are like containers that store data. Think of them as labeled boxes where you can put different types of information.
		</p>
		<p>There are three ways to declare variables in JavaScript:</p>

		<CodeMirror
			:code="declaringVariablesCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-info-circle mr-2"></i>
				<strong>Real-world analogy:</strong> Think of variables like name tags. The <code>let</code> keyword creates a name tag that can be moved to different people (values can change). The <code>const</code> keyword creates a permanent name tag that can't be moved (values can't change).
			</p>
		</div>

		<h3 class="title is-4">Try in Console:</h3>
		<CodeMirror
			:code="tryInConsoleCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="box try-it-box mt-4 mb-6">
			<h3 class="title is-4">
				<i class="fas fa-laptop-code"></i> Try It Yourself
			</h3>
			<p>
				Open your browser's console (press F12 or right-click and select "Inspect" then go to "Console") and try the examples above. Then try creating your own variables!
			</p>
			<div class="buttons">
				<button class="button is-primary" @click="openConsole">
					<i class="fas fa-terminal mr-2"></i> Open Console
				</button>
			</div>
		</div>

		<h2 class="title is-2">Data Types</h2>
		<p>
			JavaScript has several built-in data types. Let's explore them using a restaurant theme:
		</p>

		<h3 class="title is-4">1. Strings</h3>
		<p>
			Strings are text data enclosed in quotes. They're perfect for storing names, descriptions, and other text information.
		</p>

		<CodeMirror
			:code="stringsCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-info-circle mr-2"></i>
				<strong>Tip:</strong> Template literals (using backticks) allow you to embed variables directly in your strings using <code>${variable}</code> syntax.
			</p>
		</div>

		<h3 class="title is-4">2. Numbers</h3>
		<p>
			JavaScript uses a single number type for both integers and decimals.
		</p>

		<CodeMirror
			:code="numbersCode"
			language="javascript"
			:read-only="true"
		/>

		<h3 class="title is-4">3. Booleans</h3>
		<p>
			Booleans are simple true or false values. They're useful for tracking states like availability or options.
		</p>

		<CodeMirror
			:code="booleansCode"
			language="javascript"
			:read-only="true"
		/>

		<h3 class="title is-4">4. Arrays</h3>
		<p>
			Arrays are ordered lists of values. They're perfect for storing collections of related items.
		</p>

		<CodeMirror
			:code="arraysCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-info-circle mr-2"></i>
				<strong>Remember:</strong> Array indexes start at 0, not 1. So the first item is at position 0.
			</p>
		</div>

		<h3 class="title is-4">5. Objects</h3>
		<p>
			Objects are collections of related data stored as key-value pairs. They're ideal for representing complex entities.
		</p>

		<CodeMirror
			:code="objectsCode"
			language="javascript"
			:read-only="true"
		/>

		<h2 class="title is-2">Practice Exercise: Menu Item Creator</h2>

		<div class="box tip-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-cog"></i> Setup
			</h3>
			<p>You can practice these exercises in two ways:</p>
			<ol>
				<li>
					<strong>Browser Console:</strong>
					<ul>
						<li>Open your browser's DevTools (F12 or Cmd+Option+I)</li>
						<li>Go to the Console tab</li>
						<li>Type or paste the code directly</li>
					</ul>
				</li>
				<li>
					<strong>HTML File:</strong>
					<ul>
						<li>Create a new file called <code>practice.html</code></li>
						<li>Add this basic structure:</li>
					</ul>
				</li>
			</ol>

			<CodeMirror
				:code="htmlSetupCode"
				language="html"
				:read-only="true"
			/>
		</div>

		<h2 class="title is-2">Challenge: Black Swan Bistro Menu Manager</h2>
		<p>
			Let's put everything together by creating a program to manage menu items for a restaurant:
		</p>

		<h3 class="title is-4">Step 1: Create Menu Items</h3>
		<CodeMirror
			:code="step1Code"
			language="javascript"
			:read-only="true"
		/>

		<h3 class="title is-4">Step 2: Create Menu Array</h3>
		<CodeMirror
			:code="step2Code"
			language="javascript"
			:read-only="true"
		/>

		<h3 class="title is-4">Step 3: Menu Functions</h3>
		<CodeMirror
			:code="step3Code"
			language="javascript"
			:read-only="true"
		/>

		<div class="box tip-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb"></i> Hints
			</h3>
			<ul>
				<li>Use array methods like <code>push()</code> to add items</li>
				<li>Use dot notation to access object properties</li>
				<li>Remember to check data types with <code>typeof</code></li>
			</ul>
		</div>

		<div class="box solution-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-check-circle"></i> Solution
			</h3>
			<p>
				<button class="button is-info" @click="toggleSolution">
					{{ showSolution ? 'Hide Solution' : 'Show Solution' }}
				</button>
			</p>
			<div v-if="showSolution">
				<CodeMirror
					:code="solutionCode"
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
						href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables"
						target="_blank"
					>
						MDN: JavaScript Variables
					</a>
				</li>
				<li>
					<a href="https://javascript.info/variables" target="_blank">
						JavaScript.info: Variables
					</a>
				</li>
				<li>
					<a
						href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript"
						target="_blank"
					>
						freeCodeCamp: Basic JavaScript
					</a>
				</li>
			</ul>
		</div>

		<div class="notification is-success is-light mt-6">
			<p>
				<i class="fas fa-check-circle mr-2"></i>
				<strong>What's Next?</strong> In the next tutorial, we'll learn about control flow in JavaScript - how to make decisions and repeat actions.
			</p>
			<div class="mt-4">
				<router-link
					to="/tutorials/beginner/javascript-basics/conditionals"
					class="button is-success"
				>
					Continue to Conditionals & Logic
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
import { ref, onMounted } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import TutorialQuiz from '@/components/TutorialQuiz.vue';

// Toggle solution visibility
const showSolution = ref(false);
const toggleSolution = () => {
	showSolution.value = !showSolution.value;
};

// Open console function
const openConsole = () => {
	console.log('Try creating variables here!');
	console.log('Example: let myName = "Your Name";');
	console.log('Then type myName and press Enter to see the value');
	alert('Console opened! Look for the console tab in developer tools.');
};

// Code examples
const declaringVariablesCode = `let name = 'Black Swan Bistro'; // Can be changed later
const price = 19.99; // Cannot be changed
var oldWay = 'Not recommended'; // Old way, avoid using`;

const tryInConsoleCode = `let restaurant = 'Black Swan';
console.log(restaurant); // Black Swan

restaurant = 'Black Swan Bistro';
console.log(restaurant); // Black Swan Bistro

const tax = 0.1;
// This will cause an error:
// tax = 0.2;    // Cannot reassign a constant`;

const stringsCode = `let dishName = 'Grilled Salmon';
let description = 'Fresh Atlantic salmon';
let special = \`Today's special: \${dishName}\`; // Template literal

// String methods
console.log(dishName.length); // 13
console.log(dishName.toUpperCase()); // GRILLED SALMON
console.log(description.toLowerCase()); // fresh atlantic salmon`;

const numbersCode = `let price = 24.99;
let quantity = 2;
let total = price * quantity;

console.log(total); // 49.98
console.log(Math.round(total)); // 50`;

const booleansCode = `let isAvailable = true;
let isVegetarian = false;

console.log(isAvailable); // true
console.log(!isAvailable); // false`;

const arraysCode = `let menuItems = ['Salmon', 'Steak', 'Pasta'];
let prices = [24.99, 29.99, 19.99];

console.log(menuItems[0]); // Salmon
console.log(menuItems.length); // 3
menuItems.push('Salad'); // Add new item`;

const objectsCode = `let menuItem = {
  name: 'Grilled Salmon',
  price: 24.99,
  isAvailable: true,
  ingredients: ['salmon', 'herbs', 'lemon']
};

console.log(menuItem.name); // Grilled Salmon
console.log(menuItem.price); // 24.99`;

const htmlSetupCode = `<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Practice</title>
  </head>
  <body>
    <h1>Check the console for results</h1>

    <script>
      // Your practice code goes here
    </script>
  </body>
</html>`;

const step1Code = `// Create variables for different menu items
let dish1 = {
  name: 'Grilled Salmon',
  price: 24.99,
  isAvailable: true,
  ingredients: ['salmon', 'herbs', 'lemon']
};

// Your turn: Create dish2 and dish3`;

const step2Code = `// Create an array of menu items
let menu = [dish1];

// Your turn: Add dish2 and dish3 to the menu array`;

const step3Code = `// Calculate total value of menu
function calculateMenuValue() {
  // Your code here: Add up all item prices
}

// List available items
function listAvailableItems() {
  // Your code here: Show only available items
}`;

const solutionCode = `// Create menu items
let dish1 = {
  name: 'Grilled Salmon',
  price: 24.99,
  isAvailable: true,
  ingredients: ['salmon', 'herbs', 'lemon']
};

let dish2 = {
  name: 'Beef Steak',
  price: 29.99,
  isAvailable: true,
  ingredients: ['beef', 'garlic', 'butter']
};

let dish3 = {
  name: 'Pasta Primavera',
  price: 19.99,
  isAvailable: false,
  ingredients: ['pasta', 'vegetables', 'olive oil']
};

// Create menu array
let menu = [dish1, dish2, dish3];

// Calculate total value
function calculateMenuValue() {
  let total = 0;
  for (let dish of menu) {
    total += dish.price;
  }
  return total;
}

// List available items
function listAvailableItems() {
  let available = menu.filter(dish => dish.isAvailable);
  return available.map(dish => dish.name);
}

// Test the functions
console.log('Total menu value: $' + calculateMenuValue());
console.log('Available items:', listAvailableItems());`;
</script>

<script>
// Frontmatter for the tutorial
export default {
	frontmatter: {
		title: 'Variables and Data Types',
		description: 'Learn about JavaScript variables and different types of data',
		category: 'JavaScript',
		level: 'Beginner',
		order: 2,
		tags: ['javascript', 'variables', 'data types'],
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

.solution-box {
	background-color: #f5f5f5;
	border-left: 5px solid #363636;
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