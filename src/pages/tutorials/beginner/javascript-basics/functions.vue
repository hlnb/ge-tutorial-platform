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
					<a href="#" aria-current="page">Functions</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">45 minutes</span>
			<span class="tag is-success">JavaScript</span>
			<span class="tag is-success">Level 4</span>
		</div>

		<h1 class="title is-1">
			<span class="js-logo-container page-icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630" class="js-logo">
					<g id="js-logo">
						<rect id="background" x="0" y="0" width="630" height="630" fill="#f7df1e" />
						<path id="j" d="m 165.65,526.47375 48.2125,-29.1775 C 223.16375,513.7875 231.625,527.74 251.92,527.74 c 19.45375,0 31.71875,-7.60975 31.71875,-37.21 l 0,-201.3 59.20375,0 0,202.1375 c 0,61.32 -35.94375,89.23125 -88.385,89.23125 -47.36125,0 -74.8525,-24.52875 -88.8075,-54.13" />
						<path id="s" d="m 375,520.13 48.20625,-27.91125 c 12.69,20.72375 29.1825,35.9475 58.36125,35.9475 24.53125,0 40.17375,-12.26475 40.17375,-29.18125 0,-20.29875 -16.06875,-27.48875 -43.135,-39.32625 l -14.7975,-6.3475 c -42.715,-18.18125 -71.05,-41.0175 -71.05,-89.2275 0,-44.40375 33.83125,-78.2375 86.695,-78.2375 37.6375,0 64.7025,13.11125 84.15375,47.36625 l -46.09625,29.60125 c -10.15,-18.1825 -21.1425,-25.37125 -38.0575,-25.37125 -17.33875,0 -28.335,10.995 -28.335,25.37125 0,17.7625 10.99625,24.9525 36.3675,35.94875 l 14.8,6.3425 c 50.325,21.56875 78.66,43.5575 78.66,93.03375 0,53.2875 -41.86625,82.465 -98.11,82.465 -54.97625,0 -90.5,-26.2175 -107.83625,-60.47375" />
					</g>
				</svg>
			</span>
			JavaScript Functions</h1>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Learning Objectives
			</h3>
			<ul>
				<li>How to declare functions</li>
				<li>Function parameters and return values</li>
				<li>Arrow functions</li>
				<li>Function scope</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Think of it this way:</strong> Functions are like recipes - they're reusable sets of instructions that can take ingredients (parameters) and produce a result (return value)!
			</p>
		</div>

		<h2 class="title is-2">Function Basics</h2>
		
		<div class="box mb-6">
			<FunctionBasicsDiagram />
			<p class="mt-4">A function is like a recipe - it takes ingredients (parameters) and produces a result (return value).</p>
		</div>

		<div class="box">
			<h3 class="title is-4">Function Declaration</h3>
			<p>Here's how to create a basic function:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="basicFunctionExample"
					:code="basicFunctionExample"
					language="javascript"
					:read-only="true"
				/>
			</div>
			<button class="button mt-3" @click="runBasicFunction">Try it</button>
		</div>

		<div class="box">
			<h3 class="title is-4">Function Execution Flow</h3>
			<FunctionFlowDiagram />
			<p class="mt-4">When you call a function:</p>
			<ol>
				<li>Parameters are passed into the function</li>
				<li>The function processes the parameters</li>
				<li>A value is returned (if specified)</li>
			</ol>
		</div>

		<div class="box">
			<h3 class="title is-4">Functions with Parameters</h3>
			<p>Functions can take inputs called parameters:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="parameterExample"
					:code="parameterExample"
					language="javascript"
					:read-only="true"
				/>
			</div>
			<button class="button mt-3" @click="runParameterExample">Try it</button>
		</div>

		<div class="box">
			<h3 class="title is-4">Return Values</h3>
			<p>Functions can send back results using return:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="returnExample"
					:code="returnExample"
					language="javascript"
					:read-only="true"
				/>
			</div>
			<button class="button mt-3" @click="runReturnExample">Try it</button>
		</div>

		<h2 class="title is-2 mt-6">Arrow Functions</h2>
		<div class="box">
			<ArrowFunctionDiagram />
			<p class="mt-4">Arrow functions provide a shorter syntax for writing function expressions.</p>
		</div>
		<div class="codemirror-wrapper">
			<CodeMirror
				v-model="arrowExample"
				:code="arrowExample"
				language="javascript"
				:read-only="true"
			/>
		</div>

		<h2 class="title is-2 mt-6">Function Scope</h2>
		<p>Variables inside functions are only accessible within that function:</p>
		<div class="codemirror-wrapper">
			<CodeMirror
				v-model="scopeExample"
				:code="scopeExample"
				language="javascript"
				:read-only="true"
			/>
		</div>

		<h2 class="title is-2 mt-6">Practice Exercise: Restaurant Calculator</h2>
		<div class="box">
			<h3 class="title is-4">Step 1: Basic Price Calculator</h3>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="calculatorExample"
					:code="calculatorExample"
					language="javascript"
					:read-only="true"
				/>
			</div>
			<button class="button mt-3" @click="runCalculatorExample">Try it</button>
		</div>

		<div class="notification is-warning is-light mt-6">
			<p>
				<i class="fas fa-exclamation-triangle mr-2"></i>
				<strong>Common Issues:</strong>
				<ul>
					<li>Function not defined: Make sure you declared the function before calling it</li>
					<li>NaN results: Check if all your numbers are actually numbers, not strings</li>
					<li>Undefined values: Verify all parameters are passed when calling functions</li>
					<li>Scope errors: Make sure you're not trying to access variables outside their scope</li>
				</ul>
			</p>
		</div>

		<h2 class="title is-2">Why Use Functions?</h2>
		<div class="box">
			<h3 class="title is-4">Benefits of Functions</h3>
			<div class="content">
				<ul>
					<li><strong>Code Reusability:</strong> Write once, use many times</li>
					<li><strong>Organization:</strong> Break complex problems into smaller, manageable pieces</li>
					<li><strong>Maintainability:</strong> Easier to update and debug isolated pieces of code</li>
					<li><strong>DRY Principle:</strong> "Don't Repeat Yourself" - avoid code duplication</li>
				</ul>
			</div>
		</div>

		<h2 class="title is-2 mt-6">Modern Function Patterns</h2>
		
		<div class="box">
			<h3 class="title is-4">Default Parameters</h3>
			<p>Set default values for parameters that aren't provided:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="defaultParamsExample"
					:code="defaultParamsExample"
					language="javascript"
					:read-only="true"
				/>
			</div>
			<button class="button mt-3" @click="runDefaultParams">Try it</button>
		</div>

		<div class="box">
			<h3 class="title is-4">Rest Parameters</h3>
			<p>Handle multiple arguments as an array:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="restParamsExample"
					:code="restParamsExample"
					language="javascript"
					:read-only="true"
				/>
			</div>
			<button class="button mt-3" @click="runRestParams">Try it</button>
		</div>

		<div class="box">
			<h3 class="title is-4">Closures</h3>
			<p>Functions that remember their outer scope:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="closureExample"
					:code="closureExample"
					language="javascript"
					:read-only="true"
				/>
			</div>
			<button class="button mt-3" @click="runClosureExample">Try it</button>
		</div>

		<div class="box">
			<h3 class="title is-4">Callback Functions</h3>
			<p>Functions passed as arguments to other functions:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="callbackExample"
					:code="callbackExample"
					language="javascript"
					:read-only="true"
				/>
			</div>
			<button class="button mt-3" @click="runCallbackExample">Try it</button>
		</div>

		<div class="notification is-info is-light mt-6">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Best Practices:</strong>
				<ul>
					<li>Give functions clear, descriptive names that indicate what they do</li>
					<li>Keep functions focused on a single task (Single Responsibility Principle)</li>
					<li>Use parameters instead of relying on global variables</li>
					<li>Return values instead of modifying external state when possible</li>
					<li>Document complex functions with comments explaining their purpose and parameters</li>
				</ul>
			</p>
		</div>

		<div class="box">
			<h3 class="title is-4">Common Use Cases</h3>
			<div class="content">
				<ul>
					<li><strong>Event Handlers:</strong> Functions that respond to user actions</li>
					<li><strong>Data Transformation:</strong> Functions that process and convert data</li>
					<li><strong>API Calls:</strong> Functions that fetch or send data to servers</li>
					<li><strong>Validation:</strong> Functions that check if data meets certain criteria</li>
					<li><strong>Calculations:</strong> Functions that perform mathematical operations</li>
				</ul>
			</div>
		</div>

		<div class="box">
			<h3 class="title is-4">Practical Project Application</h3>
			<p>Let's look at how functions are used in real projects, like our photo gallery:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="galleryExample"
					:code="galleryExample"
					language="javascript"
					:read-only="true"
				/>
			</div>
			<button class="button mt-3" @click="runGalleryExample">Try it</button>
		</div>

		<TutorialQuiz />
		<TutorialRecommendations />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import FunctionBasicsDiagram from '@/components/diagrams/FunctionBasicsDiagram.vue';
import FunctionFlowDiagram from '@/components/diagrams/FunctionFlowDiagram.vue';
import ArrowFunctionDiagram from '@/components/diagrams/ArrowFunctionDiagram.vue';

const basicFunctionExample = ref(`function greetCustomer() {
    console.log('Welcome to Black Swan Bistro!');
}

// Call the function
greetCustomer();`);

const parameterExample = ref(`function greetCustomerByName(name) {
    console.log(\`Welcome to Black Swan Bistro, \${name}!\`);
}

greetCustomerByName('Alice');`);

const returnExample = ref(`function calculateTotal(price, quantity) {
    return price * quantity;
}

let total = calculateTotal(24.99, 2);
console.log(\`Total: $\${total}\`);`);

const arrowExample = ref(`// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;

// Arrow function with multiple lines
const calculateBill = (price, tax) => {
    const taxAmount = price * tax;
    return price + taxAmount;
};`);

const scopeExample = ref(`function processOrder() {
    let orderNumber = 123; // Local variable
    console.log(orderNumber); // Works
}

processOrder();
// console.log(orderNumber);  // Error - orderNumber not accessible`);

const calculatorExample = ref(`// Create a function to calculate price with tax
function calculatePriceWithTax(basePrice) {
    const taxRate = 0.1; // 10% tax
    return basePrice * (1 + taxRate);
}

// Test the function
console.log(calculatePriceWithTax(20)); // Should show 22`);

const defaultParamsExample = ref(`function greetCustomer(name = 'Guest', greeting = 'Welcome') {
    console.log(\`\${greeting}, \${name}!\`);
}

greetCustomer();               // Welcome, Guest!
greetCustomer('Alice');       // Welcome, Alice!
greetCustomer('Bob', 'Hello') // Hello, Bob!`);

const restParamsExample = ref(`function calculateTotal(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}

console.log(calculateTotal(10, 20, 30)); // 60
console.log(calculateTotal(25, 25));     // 50`);

const closureExample = ref(`function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    }
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2`);

const callbackExample = ref(`function processOrder(orderNumber, callback) {
    console.log(\`Processing order #\${orderNumber}\`);
    callback(\`Order #\${orderNumber} completed!\`);
}

processOrder(123, (message) => {
    console.log(message);
});`);

const galleryExample = ref(`// Photo gallery search function
function searchPhotos(photos, searchTerm) {
    return photos.filter(photo => {
        const caption = photo.caption.toLowerCase();
        const search = searchTerm.toLowerCase();
        return caption.includes(search);
    });
}

// Example usage
const galleryPhotos = [
    { caption: "Dinner at Black Swan", id: 1 },
    { caption: "Restaurant Interior", id: 2 }
];

console.log(searchPhotos(galleryPhotos, "dinner"));`);

// Function to run examples
const runBasicFunction = () => {
    console.log('Welcome to Black Swan Bistro!');
};

const runParameterExample = () => {
    console.log('Welcome to Black Swan Bistro, Alice!');
};

const runReturnExample = () => {
    const total = 24.99 * 2;
    console.log(`Total: $${total}`);
};

const runCalculatorExample = () => {
    const result = 20 * 1.1;
    console.log(result);
};

const runDefaultParams = () => {
    console.log('Welcome, Guest!');
    console.log('Welcome, Alice!');
    console.log('Hello, Bob!');
};

const runRestParams = () => {
    console.log(60); // Sum of 10, 20, 30
    console.log(50); // Sum of 25, 25
};

const runClosureExample = () => {
    console.log(1);
    console.log(2);
};

const runCallbackExample = () => {
    console.log('Processing order #123');
    console.log('Order #123 completed!');
};

const runGalleryExample = () => {
    console.log([{ caption: "Dinner at Black Swan", id: 1 }]);
};
</script>

<style scoped>
.codemirror-wrapper {
	margin: 1rem 0;
	border-radius: 6px;
	overflow: hidden;
}

.console-output {
	background: #2d2d2d;
	color: #fff;
	padding: 1rem;
	border-radius: 6px;
	font-family: monospace;
}

.console-input {
	color: #64dd17;
}

.console-output-text {
	color: #fff;
}
</style> 