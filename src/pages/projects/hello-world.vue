<template>
	<div class="content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/">
						<i class="fa-solid fa-house mr-2"></i> Home
					</router-link>
				</li>
				<li><router-link to="/projects">Projects</router-link></li>
				<li class="is-active">
					<a href="#" aria-current="page">Hello World App</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">15 minutes</span>
			<span class="tag is-success">JavaScript</span>
			<span class="tag is-primary">DOM</span>
		</div>

		<h1 class="title is-1">
			<i class="fas fa-comment-dots mr-2"></i>
			Hello World App
		</h1>

		<div class="box">
			<h2 class="title is-4">Project Overview</h2>
			<p>
				Create a simple interactive greeting application that demonstrates these JavaScript concepts:
			</p>
			<ul>
				<li>Getting user input with <code>prompt()</code></li>
				<li>Storing values in variables</li>
				<li>Manipulating the DOM to display messages</li>
				<li>Handling button clicks with event listeners</li>
			</ul>
		</div>

		<div class="box">
			<h2 class="title is-4">What You'll Build</h2>
			<p>A simple web app that:</p>
			<ul>
				<li>Asks for the user's name</li>
				<li>Displays a personalized greeting</li>
				<li>Changes the greeting when a button is clicked</li>
				<li>Updates text colors dynamically</li>
			</ul>
		</div>

		<div class="box">
			<h2 class="title is-4">Step-by-Step Instructions</h2>
			
			<h3 class="title is-5">1. Create Your HTML Structure</h3>
			<p>Create a new file called <code>index.html</code> with this structure:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					:code="htmlStructure"
					language="html"
					:readonly="true"
				/>
			</div>

			<h3 class="title is-5 mt-5">2. Add Your JavaScript</h3>
			<p>Create a file called <code>script.js</code> and add this code:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					:code="javascriptCode"
					language="javascript"
					:readonly="true"
				/>
			</div>

			<h3 class="title is-5 mt-5">3. Style Your App</h3>
			<p>Create a file called <code>styles.css</code> and add these styles:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					:code="cssStyles"
					language="css"
					:readonly="true"
				/>
			</div>
		</div>

		<div class="box">
			<h2 class="title is-4">Challenge Yourself!</h2>
			<p>Once you have the basic app working, try these enhancements:</p>
			<ul>
				<li>Add a button to change the background color</li>
				<li>Add an input field instead of using <code>prompt()</code></li>
				<li>Display the current time with the greeting</li>
				<li>Add different greetings for different times of day</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<strong>Pro Tips:</strong>
			</p>
			<ul>
				<li>Use <code>console.log()</code> to debug your code</li>
				<li>Try different string concatenation methods</li>
				<li>Experiment with different DOM methods like <code>querySelector</code></li>
				<li>Practice using template literals for strings</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
/* eslint-disable no-useless-escape */
import CodeMirror from '@/components/CodeMirror.vue';

const htmlStructure = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1 id="greeting">Welcome!</h1>
        <p id="message">Click the button below to start</p>
        <button id="greetButton">Say Hello</button>
        <button id="changeColorButton">Change Color</button>
    </div>
    <script src="script.js"><\/script>
</body>
</html>`;

const javascriptCode = `// Get references to DOM elements
const greetingElement = document.getElementById('greeting');
const messageElement = document.getElementById('message');
const greetButton = document.getElementById('greetButton');
const colorButton = document.getElementById('changeColorButton');

// Store the user's name
let userName = '';

// Function to get user's name and display greeting
function greetUser() {
    // Ask for user's name if we don't have it
    if (!userName) {
        userName = prompt('What is your name?');
    }
    
    // Update the greeting with the user's name
    if (userName) {
        greetingElement.textContent = \`Hello, \${userName}!\`;
        messageElement.textContent = 'Nice to meet you!';
    }
}

// Function to change text color randomly
function changeColor() {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    greetingElement.style.color = randomColor;
}

// Add click event listeners to buttons
greetButton.addEventListener('click', greetUser);
colorButton.addEventListener('click', changeColor);

// Initial greeting
greetingElement.textContent = 'Welcome to My First JavaScript App!';`;

const cssStyles = `.container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    text-align: center;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #333;
    font-size: 2.5em;
    margin-bottom: 20px;
    transition: color 0.3s ease;
}

p {
    color: #666;
    font-size: 1.2em;
    margin-bottom: 30px;
}

button {
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 1.1em;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #45a049;
}

#changeColorButton {
    background-color: #2196F3;
}

#changeColorButton:hover {
    background-color: #1976D2;
}`;
</script>

<style scoped>
.codemirror-wrapper {
	margin: 1rem 0;
	border-radius: 4px;
	overflow: hidden;
	border: 1px solid #ddd;
}
</style>