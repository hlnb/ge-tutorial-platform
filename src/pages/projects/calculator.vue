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
				<li><router-link to="/projects">Projects</router-link></li>
				<li class="is-active">
					<a href="#" aria-current="page">Calculator App</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">60 minutes</span>
			<span class="tag is-success">JavaScript</span>
			<span class="tag is-primary">DOM</span>
			<span class="tag is-link">Math</span>
		</div>

		<h1 class="title is-1">
			<i class="fas fa-calculator"></i> Calculator App Project
		</h1>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Project Objectives
			</h3>
			<ul>
				<li>Build a functional calculator using JavaScript</li>
				<li>Practice working with arithmetic operators</li>
				<li>Implement event handling for button clicks</li>
				<li>Manipulate the DOM to update the display</li>
				<li>Handle user input and validation</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this project, you should
				complete the
				<router-link to="/tutorials/javascript-basics/operators"
					>JavaScript Operators</router-link
				>
				tutorial.
			</p>
		</div>

		<section class="project-section">
			<h2 class="title is-2">Project Description</h2>
			<p>
				In this project, you'll create a calculator application that can perform
				basic arithmetic operations. This project will help you understand how
				to work with JavaScript operators, handle user input, and update the
				display dynamically.
			</p>

			<div class="box mt-5">
				<h3 class="title is-4">Your Calculator Should Include:</h3>
				<ul>
					<li>A display area for input and results</li>
					<li>Buttons for numbers 0-9</li>
					<li>Buttons for basic operations (+, -, *, /)</li>
					<li>Clear and equals buttons</li>
					<li>Basic error handling for invalid operations</li>
					<li>A clean, user-friendly interface</li>
				</ul>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Getting Started</h2>

			<h3 class="title is-4">Step 1: Set Up Your Project Files</h3>
			<p>Create the following files for your project:</p>
			<ul>
				<li><code>index.html</code> - The HTML structure</li>
				<li><code>styles.css</code> - CSS styles for your calculator</li>
				<li><code>script.js</code> - JavaScript code for calculator logic</li>
			</ul>

			<h3 class="title is-4 mt-5">Step 2: Create the HTML Structure</h3>
			<p>Set up the basic HTML structure in your <code>index.html</code> file:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="htmlStructure"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Step 3: Add Basic Styles</h3>
			<p>Add some basic styles to your <code>styles.css</code> file:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="cssStyles"
					:options="{
						mode: 'css',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Step 4: Implement Calculator Logic</h3>
			<p>Add the basic calculator logic to your <code>script.js</code> file:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="jsLogic"
					:options="{
						mode: 'javascript',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Challenge Yourself</h2>
			<p>Once you've completed the basic calculator, try these enhancements:</p>

			<div class="box">
				<h3 class="title is-5">Advanced Features</h3>
				<ul>
					<li>Add support for decimal numbers</li>
					<li>Implement keyboard input support</li>
					<li>Add memory functions (M+, M-, MR, MC)</li>
					<li>Include scientific calculator functions</li>
					<li>Add a calculation history feature</li>
				</ul>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Testing Your Calculator</h2>
			<p>Test your calculator with these scenarios:</p>
			<ul>
				<li>Basic arithmetic operations (2 + 2 = 4)</li>
				<li>Multiple operations (2 + 3 * 4 = 14)</li>
				<li>Division by zero (should show error)</li>
				<li>Large numbers (check for overflow)</li>
				<li>Decimal calculations (0.1 + 0.2 = 0.3)</li>
			</ul>
		</section>

		<!-- Recommendations for next projects -->
		<TutorialRecommendations />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';

// Code examples
const htmlStructure = ref('<!DOCTYPE html>\n' +
// ... rest of the code stays the same ...

const cssStyles = ref(`.calculator {
  width: 300px;
  margin: 50px auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.display {
  margin-bottom: 10px;
}

#result {
  width: 100%;
  height: 40px;
  font-size: 24px;
  text-align: right;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
}

button {
  padding: 15px;
  font-size: 18px;
  border: 1px solid #ddd;
  border-radius: 3px;
  background: #f9f9f9;
  cursor: pointer;
}

button:hover {
  background: #eee;
}

.operator {
  background: #f0f0f0;
}

.equals {
  background: #4CAF50;
  color: white;
}

.clear {
  background: #ff9800;
  color: white;
}

.zero {
  grid-column: span 2;
}`);

const jsLogic = ref(`// Get DOM elements
const display = document.getElementById('result');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let firstOperand = null;
let operator = null;
let shouldResetDisplay = false;

// Add click handlers to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('number')) {
      handleNumber(button.textContent);
    } else if (button.classList.contains('operator')) {
      handleOperator(button.textContent);
    } else if (button.classList.contains('equals')) {
      handleEquals();
    } else if (button.classList.contains('clear')) {
      handleClear();
    } else if (button.classList.contains('decimal')) {
      handleDecimal();
    }
  });
});

function handleNumber(num) {
  if (shouldResetDisplay) {
    display.value = num;
    shouldResetDisplay = false;
  } else {
    display.value += num;
  }
  currentNumber = display.value;
}

function handleOperator(op) {
  if (firstOperand === null) {
    firstOperand = parseFloat(currentNumber);
  } else if (operator) {
    const result = calculate();
    display.value = result;
    firstOperand = result;
  }
  operator = op;
  shouldResetDisplay = true;
}

function handleEquals() {
  if (operator && firstOperand !== null) {
    const result = calculate();
    display.value = result;
    firstOperand = null;
    operator = null;
    shouldResetDisplay = true;
  }
}

function handleClear() {
  display.value = '';
  currentNumber = '';
  firstOperand = null;
  operator = null;
  shouldResetDisplay = false;
}

function handleDecimal() {
  if (!display.value.includes('.')) {
    display.value += '.';
    currentNumber = display.value;
  }
}

function calculate() {
  const secondOperand = parseFloat(currentNumber);
  let result = 0;
  
  switch(operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      if (secondOperand === 0) {
        alert('Cannot divide by zero!');
        handleClear();
        return 0;
      }
      result = firstOperand / secondOperand;
      break;
  }
  
  return Math.round(result * 1000) / 1000; // Round to 3 decimal places
}`);
</script>

<script>
// Frontmatter for the project
export default {
	frontmatter: {
		title: 'Calculator App',
		description: 'Build a basic calculator with arithmetic operators',
		category: 'JavaScript Projects',
		level: 'Beginner',
		tags: ['JavaScript', 'DOM', 'Math'],
		lastUpdated: '2024-03-15',
	},
};
</script>

<style scoped>
.project-section {
	margin-bottom: 2rem;
}

.codemirror-wrapper {
	margin: 1rem 0;
	border: 1px solid #ddd;
	border-radius: 4px;
}
</style> 