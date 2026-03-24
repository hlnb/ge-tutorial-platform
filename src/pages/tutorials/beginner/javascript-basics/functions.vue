<template>
	<div class="container section">
		<div class="content tutorial-content">
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
				<span class="js-lesson-icon" aria-hidden="true">JS</span>
				JavaScript Functions</h1>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Think of it this way:</strong> Functions are like recipes - they're reusable sets of instructions that can take ingredients (parameters) and produce a result (return value)!
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

		<h2 id="function-basics" class="title is-2">Function Basics</h2>
		
		<div class="box mb-6">
			<FunctionBasicsDiagram />
			<p class="mt-4">A function is like a recipe - it takes ingredients (parameters) and produces a result (return value).</p>
		</div>

		<CheckpointBox
			:title="functionsCheckpoint.title"
			:questions="functionsCheckpoint.questions"
			:tips="functionsCheckpoint.tips"
			class="mb-6"
		/>

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

		<h2 id="arrow-functions" class="title is-2 mt-6">Arrow Functions</h2>
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

		<h2 id="function-scope" class="title is-2 mt-6">Function Scope</h2>
		<p>Variables inside functions are only accessible within that function:</p>
		<div class="codemirror-wrapper">
			<CodeMirror
				v-model="scopeExample"
				:code="scopeExample"
				language="javascript"
				:read-only="true"
			/>
		</div>

		<h2 id="practice" class="title is-2 mt-6">Practice Exercise: Restaurant Calculator</h2>
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
			<p class="mb-2">
				<i class="fas fa-exclamation-triangle mr-2"></i>
				<strong>Common Issues:</strong>
			</p>
			<ul>
				<li>Function not defined: Make sure you declared the function before calling it</li>
				<li>NaN results: Check if all your numbers are actually numbers, not strings</li>
				<li>Undefined values: Verify all parameters are passed when calling functions</li>
				<li>Scope errors: Make sure you're not trying to access variables outside their scope</li>
			</ul>
		</div>

		<h2 id="why-functions" class="title is-2">Why Use Functions?</h2>
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

		<h2 id="modern-patterns" class="title is-2 mt-6">Modern Function Patterns</h2>
		
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

		<TestYourKnowledgeSection
			tutorial-path="/tutorials/beginner/javascript-basics/functions"
		/>

		<!-- Hunter Element: Closure -->
		<ClosureSection
			:key-takeaways="closureKeyTakeaways"
			:objectives="closureObjectives"
			:reflection-prompts="closureReflectionPrompts"
			real-world-application="<p>Functions are the backbone of every JavaScript application. React components are functions. Express route handlers are functions. Event listeners, array methods like map and filter, API calls—all built on functions. Professional codebases are organized entirely around well-named, focused functions that compose together to create complex features from simple, testable parts.</p>"
			next-steps="<p>Congratulations on completing JavaScript Basics! You're now ready to move on to DOM Basics, where you'll learn how to use JavaScript to interact with HTML elements on the page—selecting elements, changing content, and responding to user events to build truly interactive web applications.</p>"
		/>

		<TutorialRecommendations :current-path="'/tutorials/beginner/javascript-basics/functions'" />

		<!-- Tutorial Completion -->
		<TutorialCompletion tutorial-path="/tutorials/beginner/javascript-basics/functions" />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import FunctionBasicsDiagram from '@/components/diagrams/FunctionBasicsDiagram.vue';
import FunctionFlowDiagram from '@/components/diagrams/FunctionFlowDiagram.vue';
import ArrowFunctionDiagram from '@/components/diagrams/ArrowFunctionDiagram.vue';
import { usePageSections } from '@/composables/usePageSections';
import AnticipatorySet from '@/components/hunter/AnticipatorySet.vue';
import LearningObjectives from '@/components/hunter/LearningObjectives.vue';
import CheckpointBox from '@/components/hunter/CheckpointBox.vue';
import ClosureSection from '@/components/hunter/ClosureSection.vue';
import TutorialCompletion from '@/components/TutorialCompletion.vue';
import TestYourKnowledgeSection from '@/components/TestYourKnowledgeSection.vue';

const sections = [
	{ id: 'function-basics', title: 'Function Basics' },
	{ id: 'arrow-functions', title: 'Arrow Functions' },
	{ id: 'function-scope', title: 'Function Scope' },
	{ id: 'practice', title: 'Practice Exercise' },
	{ id: 'why-functions', title: 'Why Use Functions?' },
	{ id: 'modern-patterns', title: 'Modern Function Patterns' },
];

const { pageSections } = usePageSections(sections);

const anticipatorySet = {
	title: '👩‍🍳 Signature Recipes on Repeat',
	hook: `<p>Restaurants rely on detailed recipes so every dish tastes the same no matter who is cooking. Functions give your codebase that same consistency—wrap a process once, reuse it everywhere.</p>`,
	reflectionPrompts: [
		'Which steps in your current project do you repeat in multiple files?',
		'How could reusable functions reduce bugs when requirements change?',
		'What information (parameters) do your "recipes" always need to succeed?'
	],
	connection: 'Mastering functions lets you compose complex features from reliable, testable building blocks rather than rewriting logic each time.'
};

const learningObjectives = {
	objectives: [
		'Declare named and anonymous functions that accept meaningful parameters',
		'Return values intentionally and understand when side effects are acceptable',
		'Leverage arrow functions for concise callbacks and array helpers',
		'Explain scope, closures, and how they affect variable access',
		'Compose small utilities into larger workflows such as calculators or galleries'
	],
	purpose: 'These objectives keep your focus on writing functions that are reusable, testable, and expressive.'
};

const functionsCheckpoint = {
	title: 'Checkpoint: Reusability Audit',
	questions: [
		'Where could a helper function replace duplicated logic above?',
		'What data should be passed as parameters versus captured from outer scope?',
		'How will you document the purpose and expected return value of each function?'
	],
	tips: [
		'Keep each function responsible for one task—compose instead of nesting.',
		'Default parameters make helpers more resilient to missing data.',
		'Name functions with verbs so their intent is obvious in call sites.'
	]
};

const closureKeyTakeaways = [
	'Functions package reusable logic that can be called by name with different arguments',
	'Parameters let functions accept input; return values send results back to the caller',
	'Arrow functions provide concise syntax especially useful for callbacks and array methods',
	'Scope determines where variables are accessible—function scope keeps data private',
	'Default and rest parameters make functions more flexible and resilient',
	'Closures allow inner functions to remember variables from their outer scope',
];

const closureObjectives = [
	'Declare named and anonymous functions that accept meaningful parameters',
	'Return values intentionally and understand when side effects are acceptable',
	'Leverage arrow functions for concise callbacks and array helpers',
	'Explain scope, closures, and how they affect variable access',
	'Compose small utilities into larger workflows such as calculators or galleries',
];

const closureReflectionPrompts = [
	{
		icon: 'fas fa-cubes',
		title: 'Reusability',
		questions: [
			'Which repeated patterns in your code could be extracted into a reusable function?',
			'How does the Single Responsibility Principle apply to function design?',
		],
		content: 'Well-designed functions do one thing and do it well. Composing small, focused functions together is the key to building maintainable applications.',
	},
	{
		icon: 'fas fa-project-diagram',
		title: 'Modern Patterns',
		questions: [
			'When would you choose an arrow function over a traditional function declaration?',
			'How do closures help with data privacy and encapsulation?',
		],
		content: 'Arrow functions shine in callbacks and array methods. Closures enable patterns like private counters and factory functions that are cornerstones of professional JavaScript.',
	},
];

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