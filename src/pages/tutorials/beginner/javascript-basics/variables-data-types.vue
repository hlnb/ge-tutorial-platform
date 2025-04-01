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
					<a href="#" aria-current="page">Variables and Data Types</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">45 minutes</span>
			<span class="tag is-success">JavaScript</span>
			<span class="tag is-success">Level 2</span>
		</div>

		<h1 class="title is-1">
			<span class="js-logo-container" >
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
			Variables and Data Types
		</h1>
		<p class="subtitle">
			Learn how to store and work with different types of data in JavaScript.
		</p>

		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-lightbulb"></i> In this tutorial, you'll learn:
			</h3>
			<ul>
				<li>How to declare and use variables effectively</li>
				<li>Understanding different data types in JavaScript</li>
				<li>Working with strings, numbers, and other primitive types</li>
				<li>Using arrays and objects to organize data</li>
				<li>Best practices for variable naming and usage</li>
				<li>Common pitfalls and how to avoid them</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-code mr-2"></i>
				<strong>Interactive Learning:</strong> This tutorial includes live examples that you can try in your browser's console. 
				Press F12 or right-click and select "Inspect" to open the Developer Tools.
			</p>
		</div>

		<h2 class="title is-2" id="variables">Understanding Variables</h2>
		<p>
			Think of variables as labeled containers that store different types of information in your program. Just like a restaurant uses different containers to store ingredients, we use variables to store data.
		</p>

		<div class="columns">
			<div class="column">
				<div class="box">
					<h4 class="title is-5">Real-world Analogy</h4>
					<p>Imagine you're managing a restaurant:</p>
					<ul>
						<li><code>let</code> is like a whiteboard - you can erase and update the content</li>
						<li><code>const</code> is like a permanent sign - once written, it can't be changed</li>
						<li>Variable names are like labels on containers - they should be descriptive</li>
					</ul>
				</div>
			</div>
			<div class="column">
				<div class="box">
					<h4 class="title is-5">Best Practices</h4>
					<ul>
						<li>Use <code>const</code> by default</li>
						<li>Use <code>let</code> when you need to reassign values</li>
						<li>Avoid using <code>var</code> (it's outdated)</li>
						<li>Choose descriptive variable names</li>
						<li>Use camelCase for variable names</li>
					</ul>
				</div>
			</div>
		</div>

		<h3 class="title is-4">Variable Declaration Examples</h3>
		<CodeMirror
			:code="declaringVariablesCode"
			:value="declaringVariablesCode"
			language="javascript"
			:read-only="true"
		/>

		<div class="box try-it-box mt-4 mb-6">
			<h3 class="title is-4">
				<i class="fas fa-laptop-code"></i> Try It Yourself
			</h3>
			<p>Open your browser's console and try these examples:</p>
			<div class="buttons">
				<button class="button is-primary" @click="runVariableExample">
					<i class="fas fa-play mr-2"></i>Run Example
				</button>
				<button class="button is-info" @click="openConsole">
					<i class="fas fa-terminal mr-2"></i>Open Console
				</button>
			</div>
			<div class="notification is-light mt-3">
				<p><strong>Pro Tip:</strong> Watch the console output to see how variables behave!</p>
			</div>
		</div>

		<h2 class="title is-2" id="data-types">JavaScript Data Types</h2>
		<p>
			JavaScript has several built-in data types that help us work with different kinds of information. Let's explore each one with practical examples from a restaurant management system.
		</p>

		<div class="data-types-grid">
			<div class="box">
				<h3 class="title is-4">1. Strings</h3>
				<p>Text data enclosed in quotes. Perfect for names, descriptions, and messages.</p>
				<CodeMirror
					:code="stringsCode"
					:value="stringsCode"
					language="javascript"
					:read-only="true"
				/>
				<button class="button is-small is-primary mt-3" @click="runStringExample">
					Try String Example
				</button>
			</div>

			<div class="box">
				<h3 class="title is-4">2. Numbers</h3>
				<p>Used for prices, quantities, calculations, and any numeric data.</p>
				<CodeMirror
					:code="numbersCode"
					:value="numbersCode"
					language="javascript"
					:read-only="true"
				/>
				<button class="button is-small is-primary mt-3" @click="runNumberExample">
					Try Number Example
				</button>
			</div>

			<div class="box">
				<h3 class="title is-4">3. Booleans</h3>
				<p>True/false values for tracking states and making decisions.</p>
				<CodeMirror
					:code="booleansCode"
					:value="booleansCode"
					language="javascript"
					:read-only="true"
				/>
				<button class="button is-small is-primary mt-3" @click="runBooleanExample">
					Try Boolean Example
				</button>
			</div>

			<div class="box">
				<h3 class="title is-4">4. Arrays</h3>
				<p>Ordered lists of items, perfect for menus, orders, or any collection.</p>
				<CodeMirror
					:code="arraysCode"
					:value="arraysCode"
					language="javascript"
					:read-only="true"
				/>
				<button class="button is-small is-primary mt-3" @click="runArrayExample">
					Try Array Example
				</button>
			</div>

			<div class="box">
				<h3 class="title is-4">5. Objects</h3>
				<p>Complex data with properties, ideal for representing menu items, orders, etc.</p>
				<CodeMirror
					:code="objectsCode"
					:value="objectsCode"
					language="javascript"
					:read-only="true"
				/>
				<button class="button is-small is-primary mt-3" @click="runObjectExample">
					Try Object Example
				</button>
			</div>
		</div>

		<div class="notification is-warning is-light mt-6">
			<p>
				<i class="fas fa-exclamation-triangle mr-2"></i>
				<strong>Common Pitfalls to Avoid:</strong>
			</p>
			<ul>
				<li>Don't forget to declare variables before using them</li>
				<li>Be careful with type coercion (mixing different data types)</li>
				<li>Remember that arrays are zero-indexed</li>
				<li>Watch out for null vs undefined</li>
			</ul>
		</div>

		<h2 class="title is-2">Interactive Practice: Restaurant Menu System</h2>
		<p>Let's put everything together by creating a simple restaurant menu system:</p>

		<div class="box practice-box">
			<h3 class="title is-4">Step 1: Create Menu Items</h3>
			<p>First, let's create variables for different menu items:</p>
			<CodeMirror
				:code="practiceStep1Code"
				:value="practiceStep1Code"
				language="javascript"
				:read-only="true"
			/>
			<button class="button is-primary mt-3" @click="runPracticeStep1">
				Try Step 1
			</button>
		</div>

		<div class="box practice-box">
			<h3 class="title is-4">Step 2: Work with Arrays</h3>
			<p>Now, let's organize our menu items in an array:</p>
			<CodeMirror
				:code="practiceStep2Code"
				:value="practiceStep2Code"
				language="javascript"
				:read-only="true"
			/>
			<button class="button is-primary mt-3" @click="runPracticeStep2">
				Try Step 2
			</button>
		</div>

		<div class="box practice-box">
			<h3 class="title is-4">Step 3: Create an Order Object</h3>
			<p>Finally, let's create an object to represent a customer's order:</p>
			<CodeMirror
				:code="practiceStep3Code"
				:value="practiceStep3Code"
				language="javascript"
				:read-only="true"
			/>
			<button class="button is-primary mt-3" @click="runPracticeStep3">
				Try Step 3
			</button>
		</div>

		<div class="notification is-success is-light mt-6">
			<p>
				<i class="fas fa-check-circle mr-2"></i>
				<strong>Key Takeaways:</strong>
			</p>
			<ul>
				<li>Variables are containers for storing data</li>
				<li>Use the right data type for your needs</li>
				<li>Arrays and objects help organize related data</li>
				<li>Practice with real-world examples helps understanding</li>
			</ul>
		</div>

		<!-- Quiz section -->
		<TutorialQuiz />

		<!-- Tutorial Recommendations -->
		<TutorialRecommendations :current-path="'/tutorials/beginner/javascript-basics/variables-data-types'" />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import { createCodeRunner } from '@/utils/codeRunner';

// Updated code examples with more practical scenarios
const declaringVariablesCode = `// Menu item using let (value can change)
let specialOfTheDay = 'Grilled Salmon';
specialOfTheDay = 'Beef Steak'; // Can be reassigned

// Fixed price using const (value cannot change)
const taxRate = 0.08;
// taxRate = 0.09; // This would cause an error

// Menu categories using const array
const menuCategories = ['Appetizers', 'Main Course', 'Desserts'];
menuCategories.push('Drinks'); // Can modify array, but not reassign`;

const stringsCode = `// Basic string creation
let dishName = 'Grilled Salmon';
let description = "Fresh Atlantic salmon with herbs";

// Template literals for dynamic strings
let price = 24.99;
let menuItem = \`\${dishName} - $\${price}\`;

// String methods
console.log(dishName.toUpperCase());
console.log(description.length);
console.log(menuItem.includes('Salmon'));`;

const numbersCode = `// Basic numbers
let price = 24.99;
let quantity = 2;

// Calculations
let subtotal = price * quantity;
let tax = subtotal * 0.08;
let total = subtotal + tax;

// Number methods
console.log(total.toFixed(2)); // Format to 2 decimal places
console.log(Math.round(total)); // Round to nearest integer`;

const booleansCode = `// Menu item availability
let isAvailable = true;
let isVegetarian = false;

// Logical operations
let canServe = isAvailable && !isVegetarian;

// Boolean in conditions
if (isAvailable) {
    console.log('Ready to serve!');
} else {
    console.log('Item not available.');
}`;

const arraysCode = `// Menu items array
let menuItems = ['Salmon', 'Steak', 'Pasta'];
let prices = [24.99, 29.99, 19.99];

// Array methods
menuItems.push('Salad');           // Add item
console.log(menuItems.length);     // Get length
console.log(menuItems.includes('Steak')); // Check if exists
console.log(menuItems.join(', ')); // Convert to string`;

const objectsCode = `// Menu item object
let menuItem = {
    name: 'Grilled Salmon',
    price: 24.99,
    ingredients: ['salmon', 'herbs', 'lemon'],
    isAvailable: true,
    nutrition: {
        calories: 450,
        protein: '30g',
        fat: '22g'
    }
};

// Accessing object properties
console.log(menuItem.name);        // Dot notation
console.log(menuItem['price']);    // Bracket notation
console.log(menuItem.nutrition.calories); // Nested objects`;

const practiceStep1Code = `// Create menu items with different data types
const item1 = {
    name: 'Grilled Salmon',
    price: 24.99,
    isAvailable: true,
    ingredients: ['salmon', 'herbs', 'lemon']
};

const item2 = {
    name: 'Beef Steak',
    price: 29.99,
    isAvailable: true,
    ingredients: ['beef', 'garlic', 'butter']
};

console.log('Menu Items Created:', item1, item2);`;

const practiceStep2Code = `// Create and manipulate menu array
const menu = [item1, item2];

// Add a new item
menu.push({
    name: 'Vegetable Pasta',
    price: 18.99,
    isAvailable: true,
    ingredients: ['pasta', 'vegetables', 'olive oil']
});

// List all menu items
menu.forEach(item => {
    console.log(\`\${item.name} - $\${item.price}\`);
});`;

const practiceStep3Code = `// Create an order object
const order = {
    tableNumber: 5,
    items: [item1, item2],
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    },
    status: 'pending',
    timestamp: new Date()
};

// Display order details
console.log('Order Details:', order);
console.log('Total: $' + order.calculateTotal().toFixed(2));`;

// Create a code runner instance
const codeRunner = createCodeRunner();

// Interactive example functions
const runVariableExample = () => {
    const codeRunner = createCodeRunner();
    
    // Execute the safe version of the code
    const safeCode = `// Menu item using let (value can change)
let specialOfTheDay = 'Grilled Salmon';
specialOfTheDay = 'Beef Steak'; // Can be reassigned

// Fixed price using const (value cannot change)
const taxRate = 0.08;

// Menu categories using const array
const menuCategories = ['Appetizers', 'Main Course', 'Desserts'];
menuCategories.push('Drinks'); // Can modify array, but not reassign

console.log('specialOfTheDay:', specialOfTheDay);
console.log('taxRate:', taxRate);
console.log('menuCategories:', menuCategories);`;

    try {
        codeRunner.run(safeCode);
    } catch (error) {
        console.error('Error running example:', error);
    }
};

const runStringExample = () => {
    console.clear();
    console.log('Running String Examples...');
    codeRunner.run(stringsCode);
};

const runNumberExample = () => {
    console.clear();
    console.log('Running Number Examples...');
    codeRunner.run(numbersCode);
};

const runBooleanExample = () => {
    console.clear();
    console.log('Running Boolean Examples...');
    codeRunner.run(booleansCode);
};

const runArrayExample = () => {
    console.clear();
    console.log('Running Array Examples...');
    codeRunner.run(arraysCode);
};

const runObjectExample = () => {
    console.clear();
    console.log('Running Object Examples...');
    codeRunner.run(objectsCode);
};

const runPracticeStep1 = () => {
    console.clear();
    console.log('Running Practice Step 1...');
    codeRunner.run(practiceStep1Code);
};

const runPracticeStep2 = () => {
    console.clear();
    console.log('Running Practice Step 2...');
    codeRunner.run(practiceStep1Code + practiceStep2Code);
};

const runPracticeStep3 = () => {
    console.clear();
    console.log('Running Practice Step 3...');
    codeRunner.run(practiceStep1Code + practiceStep2Code + practiceStep3Code);
};

const openConsole = () => {
    console.clear();
    console.log('Welcome to the Interactive JavaScript Console!');
    console.log('Try creating your own variables and experimenting with different data types.');
    console.log('Example: let myName = "Your Name";');
    alert('Console opened! Look for the console tab in developer tools (F12).');
};
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
		tags: ['javascript', 'building blocks', 'variables', 'data types'],
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
	background-color: #f0f8ff;
	border-left: 5px solid #3273dc;
}

.try-it-box {
	background-color: #f0fff4;
	border-left: 5px solid #48c774;
}

.practice-box {
	background-color: #fff5eb;
	border-left: 5px solid #ffdd57;
}

.next-steps-box {
	background-color: #f5f5f5;
	border-left: 5px solid #363636;
}

.data-types-grid {
	display: grid;
	gap: 1.5rem;
	margin: 2rem 0;
	max-width: 100%;
}

.data-types-grid .box {
	height: 100%;
	display: flex;
	flex-direction: column;
	max-width: 500px;
	margin: 0 auto;
}

.data-types-grid .box :deep(.cm-editor) {
	max-width: 100%;
	overflow-x: auto;
}

.data-types-grid .box :deep(.cm-scroller) {
	overflow-x: auto;
}

.data-types-grid .box button {
	margin-top: auto;
}

.button {
	transition: all 0.3s ease;
}

.button:hover {
	transform: translateY(-2px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (min-width: 769px) {
	.data-types-grid {
		grid-template-columns: repeat(2, 50%);
		gap: 2rem;
	}

	.data-types-grid .box {
		width: 100%;
	}
}

@media (max-width: 768px) {
	.data-types-grid .box {
		width: 100%;
		margin: 0 auto;
	}
}
</style>
