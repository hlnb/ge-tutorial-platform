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
			Introduction to JavaScript
		</h1>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Learning Objectives
			</h3>
			<ul>
				<li>What JavaScript is and why we use it</li>
				<li>How to add JavaScript to HTML</li>
				<li>Using the browser console</li>
				<li>Basic DOM manipulation</li>
				<li>Simple conditions</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Think of it this way:</strong> If a website were a car, HTML
				would be the frame and body, CSS would be the paint and interior, and
				JavaScript would be the engine and controls that make it actually work!
			</p>
		</div>

		<h2 class="title is-2" id="what-is-javascript">What is JavaScript?</h2>
		<p>
			JavaScript is the programming language that makes websites interactive.
			It's like giving instructions to your website so it can respond to what
			users do.
		</p>

		<div class="columns">
			<div class="column">
				<div class="card">
					<div class="card-content">
						<h4 class="title is-5">JavaScript lets websites:</h4>
						<ul>
							<li>Respond when you click buttons</li>
							<li>Update information without reloading the page</li>
							<li>Remember things about you (like items in a shopping cart)</li>
							<li>Show or hide elements based on what you do</li>
							<li>Communicate with servers to get new information</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="column">
				<div class="card">
					<div class="card-content">
						<h4 class="title is-5">Real-world examples:</h4>
						<ul>
							<li>Social media feeds that load new posts as you scroll</li>
							<li>Maps that let you zoom and drag to explore</li>
							<li>Forms that check if your password is strong enough</li>
							<li>Games you can play right in your browser</li>
							<li>Shopping carts that update totals instantly</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<h2 class="title is-2 mt-6" id="adding-javascript">Adding JavaScript to HTML</h2>
		<p>
			There are three ways to add JavaScript to your webpage. Think of these
			like different ways to attach an instruction manual to a product:
		</p>

		<div class="box">
			<h3 class="title is-4" id="inline-javascript">1. Inline JavaScript</h3>
			<p>
				This is like writing instructions directly on a button. It's quick but
				gets messy for complex instructions.
			</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="inlineJsExample"
					:code="inlineJsExample"
					:value="inlineJsExample"
					language="html"
					:read-only="true"
				/>
			</div>
			<div class="mt-3">
				<button class="button" @click="showInlineAlert">
					Try it: Click me
				</button>
			</div>
		</div>

		<div class="box">
			<h3 class="title is-4" id="internal-javascript">2. Internal JavaScript</h3>
			<p>
				This is like including an instruction manual inside the product box. All
				the instructions are in one place within your HTML file.
			</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="internalJsExample"
					:code="internalJsExample"
					:value="internalJsExample"
					language="html"
					:read-only="true"
				/>
			</div>
		</div>

		<div class="box">
			<h3 class="title is-4" id="external-javascript">3. External JavaScript (Recommended)</h3>
			<p>
				This is like having a separate instruction manual that comes with the
				product. It keeps your HTML clean and your JavaScript organized in its
				own file.
			</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="externalJsExample"
					:code="externalJsExample"
					:value="externalJsExample"
					language="html"
					:read-only="true"
				/>
			</div>
			<p class="mt-3">And in a separate file named <code>script.js</code>:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="externalJsFileExample"
					:code="externalJsFileExample"
					:value="externalJsFileExample"
					language="javascript"
					:read-only="true"
				/>
			</div>
		</div>

		<div class="notification is-warning is-light">
			<p>
				<i class="fas fa-exclamation-triangle mr-2"></i>
				<strong>Best Practice:</strong> External JavaScript is usually the best
				choice for real projects. It keeps your code organized and makes it
				easier to maintain.
			</p>
		</div>

		<h2 class="title is-2 mt-6" id="developer-tools">Using the Console</h2>
		<p>
			The browser console is like a backstage pass to your website. It lets you
			see what's happening behind the scenes and try out JavaScript code
			directly.
		</p>

		<div class="box">
			<h3 class="title is-4" id="console">Opening the Console</h3>
			<p>To open your browser's DevTools:</p>
			<ul>
				<li>
					<strong>Windows/Linux:</strong> Press <kbd>F12</kbd> or
					<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>
				</li>
				<li>
					<strong>Mac:</strong> Press <kbd>Cmd</kbd> + <kbd>Option</kbd> +
					<kbd>I</kbd>
				</li>
			</ul>
			<p>Then click on the "Console" tab.</p>
		</div>

		<div class="box">
			<h3 class="title is-4">Try These Commands</h3>
			<p>Type these commands in your browser's console to see what happens:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					:code="consoleExamples"
					:value="consoleExamples"
					language="javascript"
					:read-only="true"
				/>
			</div>
			<div class="mt-3">
				<button class="button is-info" @click="runConsoleExample">
					Run in Console
				</button>
				<div v-if="consoleOutput" class="console-output mt-3">
					<div
						v-for="(line, index) in consoleOutput"
						:key="index"
						class="console-line"
					>
						<span v-if="line.type === 'input'" class="console-input">
							> {{ line.text }}
						</span>
						<span
							v-else-if="line.type === 'output'"
							class="console-output-text"
						>
							{{ line.text }}
						</span>
					</div>
				</div>
			</div>
		</div>

		<h2 class="title is-2 mt-6">Working with the DOM</h2>
		<p>
			The DOM (Document Object Model) is like a family tree for your webpage. It
			represents every element on your page as objects that JavaScript can
			interact with.
		</p>
		<p>
			Think of it like this: The DOM is a map of your webpage that JavaScript
			can read and modify.
		</p>

		<div class="box">
			<h3 class="title is-4">1. Finding Elements</h3>
			<p>
				Before you can change something on your page, you need to find it first.
				This is like looking up someone's address before you can send them a
				letter.
			</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					:code="findElementExample"
					:value="findElementExample"
					language="javascript"
					:read-only="true"
				/>
			</div>
		</div>

		<div class="box">
			<h3 class="title is-4">2. Changing Content</h3>
			<p>
				Once you've found an element, you can change what it says. This is like
				erasing a message on a whiteboard and writing a new one.
			</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					:code="changeContentExample"
					:value="changeContentExample"
					language="javascript"
					:read-only="true"
				/>
			</div>
			<div class="mt-3 demo-area">
				<p id="message-demo">Original message</p>
				<button class="button is-primary" @click="changeMessage">
					Change Message
				</button>
			</div>
		</div>

		<h2 class="title is-2 mt-6">Simple Conditions</h2>
		<p>
			Conditions in JavaScript are like forks in a road - they let your code
			take different paths based on certain situations.
		</p>

		<div class="box">
			<h3 class="title is-4">Basic if/else Structure</h3>
			<p>Think of an if/else statement like a bouncer at a club:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					:code="conditionExample"
					:value="conditionExample"
					language="javascript"
					:read-only="true"
				/>
			</div>
			<div class="mt-3">
				<div class="field has-addons">
					<div class="control">
						<input
							v-model="ageInput"
							class="input"
							type="number"
							placeholder="Enter your age"
						/>
					</div>
					<div class="control">
						<button class="button is-info" @click="checkAge">Check Age</button>
					</div>
				</div>
				<p v-if="ageResult" class="mt-2" :class="ageResult.color">
					{{ ageResult.message }}
				</p>
			</div>
		</div>

		<h2 class="title is-2 mt-6">Simple Practice Exercise</h2>
		<p>
			Let's try a basic counter. This is like a simple clicker game where you
			press a button and see a number go up.
		</p>

		<div class="box">
			<h3 class="title is-4">Counter Example</h3>
			<div class="columns">
				<div class="column">
					<h4 class="title is-5">HTML:</h4>
					<div class="codemirror-wrapper">
						<CodeMirror
							:code="counterHtmlExample"
							:value="counterHtmlExample"
							language="html"
							:read-only="true"
						/>
					</div>
				</div>
				<div class="column">
					<h4 class="title is-5">JavaScript:</h4>
					<div class="codemirror-wrapper">
						<CodeMirror
							:code="counterJsExample"
							:value="counterJsExample"
							language="javascript"
							:read-only="true"
						/>
					</div>
				</div>
			</div>
			<div class="mt-3 demo-area has-text-centered">
				<p id="counter-demo" class="title is-1">0</p>
				<button class="button is-primary" @click="incrementCounter">
					Add One
				</button>
			</div>
		</div>

		<div class="box">
			<h3 class="title is-4">Challenge: Menu Item Toggle</h3>
			<p>
				Let's create a button that toggles whether a menu item is available or
				sold out. This is like a light switch that you can flip back and forth.
			</p>
			<div class="columns">
				<div class="column">
					<h4 class="title is-5">HTML:</h4>
					<div class="codemirror-wrapper">
						<CodeMirror
							:code="toggleHtmlExample"
							:value="toggleHtmlExample"
							language="html"
							:read-only="true"
						/>
					</div>
				</div>
				<div class="column">
					<h4 class="title is-5">JavaScript:</h4>
					<div class="codemirror-wrapper">
						<CodeMirror
							:code="toggleJsExample"
							:value="toggleJsExample"
							language="javascript"
							:read-only="true"
						/>
					</div>
				</div>
			</div>
			<div class="mt-3 demo-area">
				<div class="menu-item-demo">
					<h3>Grilled Salmon</h3>
					<p>Fresh Atlantic salmon with herbs</p>
					<p id="availability-demo" :class="availabilityClass">Available</p>
					<button class="button is-primary" @click="toggleAvailability">
						Toggle Availability
					</button>
				</div>
			</div>
		</div>

		<div class="notification is-danger is-light mt-6">
			<h3 class="title is-4">
				<i class="fas fa-exclamation-triangle"></i> Common Mistakes
			</h3>
			<ul>
				<li>
					<strong>Forgetting to link the JavaScript file</strong> - Make sure
					your script tag has the correct path
				</li>
				<li>
					<strong>Missing semicolons</strong> - While JavaScript can sometimes
					work without them, it's good practice to end statements with
					semicolons
				</li>
				<li>
					<strong>Case sensitivity</strong> - JavaScript is case-sensitive, so
					<code>getElementById</code> is not the same as
					<code>getElementByID</code>
				</li>
				<li>
					<strong>Confusing = and ===</strong> - Single equals (=) assigns
					values, triple equals (===) compares values
				</li>
			</ul>
		</div>

		<h2 class="title is-2 mt-6" id="next-steps">Interactive Resources</h2>
		<div class="box">
			<h3 class="title is-4">Practice More</h3>
			<ul>
				<li>
					<a href="https://console.learn.co" target="_blank"
						>JavaScript Console Practice</a
					>
					- Try JavaScript in an online console
				</li>
				<li>
					<a href="https://javascript.info" target="_blank">JavaScript.info</a>
					- Comprehensive JavaScript guide
				</li>
				<li>
					<a
						href="https://www.codecademy.com/learn/introduction-to-javascript"
						target="_blank"
						>Codecademy's JavaScript Course</a
					>
					- Interactive JavaScript lessons
				</li>
			</ul>
		</div>

		<div class="notification is-success is-light mt-6">
			<p>
				<i class="fas fa-check-circle mr-2"></i>
				<strong>What's Next?</strong> In the next tutorial, we'll learn about
				variables and data types in JavaScript - the building blocks for storing
				and working with information.
			</p>
			<div class="mt-3">
				<router-link
					to="/tutorials/javascript-basics/variables-data-types"
					class="button is-success"
				>
					Continue to Variables and Data Types
					<i class="fas fa-arrow-right ml-2"></i>
				</router-link>
			</div>
		</div>

		<!-- Recommendations for next steps -->
		<TutorialRecommendations />

		<!-- Quiz Section -->
		<TutorialQuiz />
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import { usePageSections } from '@/composables/usePageSections';

const sections = [
	{
		id: 'what-is-javascript',
		title: 'What is JavaScript?',
		subsections: []
	},
	{
		id: 'adding-javascript',
		title: 'Adding JavaScript to Your Page',
		subsections: [
			{ id: 'inline-javascript', title: 'Inline JavaScript' },
			{ id: 'internal-javascript', title: 'Internal JavaScript' },
			{ id: 'external-javascript', title: 'External JavaScript' }
		]
	},
	{
		id: 'developer-tools',
		title: 'Developer Tools',
		subsections: [
			{ id: 'console', title: 'The Console' },
			{ id: 'debugging', title: 'Debugging' }
		]
	},
	{
		id: 'next-steps',
		title: 'Next Steps',
		subsections: []
	}
];

const { pageSections } = usePageSections(sections);

// Code examples
const inlineJsExample = ref(
	`<button onclick="alert('Hello!')">Click me</button>`,
);
const internalJsExample = ref(`<script>
  function sayHello() {
    alert('Hello from internal JavaScript!');
  }
<\/script>

<button onclick="sayHello()">Say Hello</button>`);
const externalJsExample = ref(`<!-- In your HTML file -->
<script src="script.js"><\/script>

<button onclick="sayHello()">Say Hello</button>`);
const externalJsFileExample = ref(`// In script.js
function sayHello() {
  alert('Hello from external JavaScript!');
}`);

const consoleExamples = ref(`// Output text
console.log('Hello, World!');

// Simple math
console.log(2 + 2);

// Check data type
console.log(typeof 'JavaScript');

// Test a condition
console.log(5 > 3); // true
console.log(5 < 3); // false`);

const findElementExample = ref(`// Get element by ID
const element = document.getElementById('myElement');

// Check what we found
console.log(element);`);

const changeContentExample = ref(`// Get the element
const message = document.getElementById('message');

// Change its text
message.textContent = 'New message';

// Check the result
console.log(message.textContent);`);

const conditionExample = ref(`// Basic if/else structure
const age = 18;

if (age >= 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}`);

const counterHtmlExample = ref(`<div>
  <p id="counter">0</p>
  <button onclick="increment()">Add One</button>
</div>`);

const counterJsExample = ref(`function increment() {
  // Get the counter element
  const counterElement = document.getElementById('counter');

  // Get current value and convert to number
  const currentValue = Number(counterElement.textContent);

  // Add one
  const newValue = currentValue + 1;

  // Update the display
  counterElement.textContent = newValue;
}`);

const toggleHtmlExample = ref(`<div class="menu-item">
  <h3>Grilled Salmon</h3>
  <p>Fresh Atlantic salmon with herbs</p>
  <p id="availability">Available</p>
  <button onclick="toggleAvailability()">Toggle Availability</button>
</div>`);

const toggleJsExample = ref(`function toggleAvailability() {
  // Get the element
  const availabilityElement = document.getElementById('availability');

  // If it's "Available", change to "Sold Out"
  if (availabilityElement.textContent === 'Available') {
    availabilityElement.textContent = 'Sold Out';
    availabilityElement.style.color = 'red';
  } else {
    // Otherwise, change to "Available"
    availabilityElement.textContent = 'Available';
    availabilityElement.style.color = 'green';
  }
}`);

// Interactive demo functionality
const consoleOutput = ref([]);
const ageInput = ref('');
const ageResult = ref(null);
const counterValue = ref(0);
const availabilityStatus = ref('Available');
const availabilityClass = ref('has-text-success');

// Show alert for inline JS example
const showInlineAlert = () => {
	alert('Hello!');
};

// Run console examples
const runConsoleExample = () => {
	consoleOutput.value = [];

	// Split the example into lines
	const lines = consoleExamples.value
		.split('\n')
		.filter((line) => line.trim() && !line.startsWith('//'));

	// Process each line
	lines.forEach((line) => {
		consoleOutput.value.push({ type: 'input', text: line.trim() });

		try {
			// Safely evaluate the line
			const result = new Function(`return ${line.trim()}`)();
			consoleOutput.value.push({ type: 'output', text: result });
		} catch (error) {
			consoleOutput.value.push({
				type: 'output',
				text: `Error: ${error.message}`,
			});
		}
	});
};

// Change message demo
const changeMessage = () => {
	const message = document.getElementById('message-demo');
	message.textContent = 'Message changed!';
};

// Check age demo
const checkAge = () => {
	const age = Number(ageInput.value);

	if (isNaN(age)) {
		ageResult.value = {
			message: 'Please enter a valid age',
			color: 'has-text-danger',
		};
	} else if (age >= 18) {
		ageResult.value = { message: 'Adult', color: 'has-text-success' };
	} else {
		ageResult.value = { message: 'Minor', color: 'has-text-warning' };
	}
};

// Increment counter demo
const incrementCounter = () => {
	const counterElement = document.getElementById('counter-demo');
	counterValue.value += 1;
	counterElement.textContent = String(counterValue.value);
};

// Toggle availability demo
const toggleAvailability = () => {
	const availabilityElement = document.getElementById('availability-demo');

	if (availabilityStatus.value === 'Available') {
		availabilityStatus.value = 'Sold Out';
		availabilityClass.value = 'has-text-danger';
		availabilityElement.textContent = 'Sold Out';
	} else {
		availabilityStatus.value = 'Available';
		availabilityClass.value = 'has-text-success';
		availabilityElement.textContent = 'Available';
	}
};

// Initialize demo elements
onMounted(() => {
	// Set initial counter value
	const counterElement = document.getElementById('counter-demo');
	if (counterElement) {
		counterElement.textContent = String(counterValue.value);
	}
});
</script>

<script>
// Frontmatter for the tutorial
export default {
	frontmatter: {
		title: 'Introduction to JavaScript',
		description: 'Get started with JavaScript programming',
		category: 'JavaScript Basics',
		level: 'Beginner',
		order: 1,
		tags: ['javascript', 'basics', 'web development'],
		lastUpdated: '2023-10-15',
	},
};
</script>

<style scoped>
.codemirror-wrapper {
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	overflow: hidden;
	margin-top: 1rem;
}

kbd {
	background-color: #f5f5f5;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	padding: 0.2rem 0.4rem;
	font-size: 0.9em;
}

.console-output {
	background-color: #2d2d2d;
	color: #fff;
	padding: 1rem;
	border-radius: 4px;
	font-family: monospace;
}

.console-input {
	color: #64b5f6;
}

.console-output-text {
	color: #a5d6a7;
}

.demo-area {
	background-color: #f5f5f5;
	padding: 1.5rem;
	border-radius: 4px;
}

.menu-item-demo {
	background-color: white;
	padding: 1.5rem;
	border-radius: 4px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}

.menu-item-demo h3 {
	margin-bottom: 0.5rem;
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

.js-icon {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background-color: #f7df1e;
	color: black;
	width: 1.5em;
	height: 1.5em;
	border-radius: 4px;
	margin-right: 0.3em;
}

.has-text-success {
	color: #48c774 !important;
}

.has-text-danger {
	color: #f14668 !important;
}

.has-text-warning {
	color: #ffdd57 !important;
}
</style>
