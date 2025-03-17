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
					<a href="#" aria-current="page">Grade Calculator</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">25 minutes</span>
			<span class="tag is-success">JavaScript</span>
		</div>

		<h1 class="title is-1">Grade Calculator Project</h1>
		<p class="subtitle">Build a calculator that computes final grades based on weighted assignments</p>

		<div class="box highlight-box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> What You'll Build
			</h3>
			<p>
				Create a grade calculator that helps students calculate their final grade based on
				different types of assignments (homework, quizzes, exams) with different weights.
				This project will help you practice:
			</p>
			<ul>
				<li>Working with numbers and arithmetic operators</li>
				<li>Using variables to store and update values</li>
				<li>Implementing weighted calculations</li>
				<li>Formatting output with proper decimal places</li>
				<li>Handling user input validation</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-info-circle mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this project, make sure you've completed:
				<ul>
					<li>
						<router-link to="/tutorials/beginner/javascript-basics/variables-data-types">
							Variables & Data Types
						</router-link>
					</li>
					<li>
						<router-link to="/tutorials/beginner/javascript-basics/operators">
							Operators & Expressions
						</router-link>
					</li>
				</ul>
			</p>
		</div>

		<h2 class="title is-2">Project Steps</h2>

		<div class="steps">
			<div class="step-1">
				<h3 class="title is-4">1. Set Up the HTML Structure</h3>
				<div class="box">
					<p>Create a new file called <code>index.html</code> with this structure:</p>
					<CodeMirror
						:code="htmlStructure"
						:value="htmlStructure"
						language="html"
						:read-only="true"
					/>
				</div>
			</div>

			<div class="step-2">
				<h3 class="title is-4">2. Add the JavaScript Logic</h3>
				<div class="box">
					<p>Create a new file called <code>script.js</code> and add the grade calculation logic:</p>
					<CodeMirror
						:code="jsLogic"
						:value="jsLogic"
						language="javascript"
						:read-only="true"
					/>
				</div>
			</div>

			<div class="step-3">
				<h3 class="title is-4">3. Style Your Calculator</h3>
				<div class="box">
					<p>Create a new file called <code>styles.css</code> to make your calculator look professional:</p>
					<CodeMirror
						:code="cssStyles"
						:value="cssStyles"
						language="css"
						:read-only="true"
					/>
				</div>
			</div>
		</div>

		<h2 class="title is-2">How It Works</h2>
		<div class="box">
			<h3 class="title is-4">Grade Calculation Formula</h3>
			<p>The final grade is calculated using this weighted formula:</p>
			<div class="notification is-light">
				<code>
					Final Grade = (Homework × 0.3) + (Quizzes × 0.3) + (Midterm × 0.15) + (Final × 0.25)
				</code>
			</div>
			<p>Where:</p>
			<ul>
				<li>Homework is worth 30% of the final grade</li>
				<li>Quizzes are worth 30% of the final grade</li>
				<li>Midterm exam is worth 15% of the final grade</li>
				<li>Final exam is worth 25% of the final grade</li>
			</ul>
		</div>

		<h2 class="title is-2">Challenge Yourself</h2>
		<div class="box">
			<p>Once you have the basic calculator working, try these enhancements:</p>
			<ol>
				<li>Add input validation to ensure grades are between 0 and 100</li>
				<li>Add a feature to calculate the minimum final exam score needed to achieve a desired grade</li>
				<li>Implement a grade scale that converts numerical grades to letter grades (A, B, C, etc.)</li>
				<li>Add the ability to customize the weight of each component</li>
				<li>Create a visual representation of the grade distribution using a chart or graph</li>
			</ol>
		</div>

		<div class="notification is-warning is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Pro Tips:</strong>
			</p>
			<ul>
				<li>Use <code>parseFloat()</code> to convert string inputs to numbers</li>
				<li>Use <code>.toFixed(2)</code> to round numbers to 2 decimal places</li>
				<li>Consider edge cases like missing inputs or invalid numbers</li>
				<li>Add helpful error messages for better user experience</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import CodeMirror from '@/components/CodeMirror.vue';

const htmlStructure = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grade Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="calculator">
        <h1>Grade Calculator</h1>
        
        <div class="input-group">
            <label for="homework">Homework Average (30%):</label>
            <input type="number" id="homework" min="0" max="100">
        </div>
        
        <div class="input-group">
            <label for="quizzes">Quiz Average (30%):</label>
            <input type="number" id="quizzes" min="0" max="100">
        </div>
        
        <div class="input-group">
            <label for="midterm">Midterm Exam (15%):</label>
            <input type="number" id="midterm" min="0" max="100">
        </div>
        
        <div class="input-group">
            <label for="final">Final Exam (25%):</label>
            <input type="number" id="final" min="0" max="100">
        </div>
        
        <button onclick="calculateGrade()">Calculate Grade</button>
        
        <div id="result" class="result"></div>
    </div>

    <script src="script.js"><\/script>
</body>
</html>`;

const jsLogic = `// Grade weights
const WEIGHTS = {
    homework: 0.30,
    quizzes: 0.30,
    midterm: 0.15,
    final: 0.25
};

function calculateGrade() {
    // Get input values
    const homework = parseFloat(document.getElementById('homework').value);
    const quizzes = parseFloat(document.getElementById('quizzes').value);
    const midterm = parseFloat(document.getElementById('midterm').value);
    const final = parseFloat(document.getElementById('final').value);
    
    // Validate inputs
    if (isNaN(homework) || isNaN(quizzes) || isNaN(midterm) || isNaN(final)) {
        showResult('Please enter all grades', 'error');
        return;
    }
    
    if (!isValidGrade(homework) || !isValidGrade(quizzes) || 
        !isValidGrade(midterm) || !isValidGrade(final)) {
        showResult('Grades must be between 0 and 100', 'error');
        return;
    }
    
    // Calculate weighted grade
    const finalGrade = (
        homework * WEIGHTS.homework +
        quizzes * WEIGHTS.quizzes +
        midterm * WEIGHTS.midterm +
        final * WEIGHTS.final
    ).toFixed(2);
    
    // Get letter grade
    const letterGrade = getLetterGrade(finalGrade);
    
    // Show result
    showResult(\`Final Grade: \${finalGrade}% (\${letterGrade})\`);
}

function isValidGrade(grade) {
    return grade >= 0 && grade <= 100;
}

function getLetterGrade(grade) {
    if (grade >= 90) return 'A';
    if (grade >= 80) return 'B';
    if (grade >= 70) return 'C';
    if (grade >= 60) return 'D';
    return 'F';
}

function showResult(message, type = 'success') {
    const result = document.getElementById('result');
    result.textContent = message;
    result.className = \`result \${type}\`;
}`;

const cssStyles = `.calculator {
    max-width: 500px;
    margin: 2rem auto;
    padding: 2rem;
    background: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
}

.input-group {
    margin-bottom: 1.5rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    color: #666;
}

input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

button {
    width: 100%;
    padding: 0.75rem;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background: #45a049;
}

.result {
    margin-top: 1.5rem;
    padding: 1rem;
    text-align: center;
    border-radius: 4px;
    font-weight: bold;
}

.result.success {
    background: #dff0d8;
    color: #3c763d;
}

.result.error {
    background: #f2dede;
    color: #a94442;
}`;
</script>

<style scoped>
.highlight-box {
	background-color: #f0f8ff;
	border-left: 5px solid #3273dc;
}

.steps {
	margin-top: 2rem;
}

.box {
	margin-bottom: 1.5rem;
}

.notification ul {
	margin-top: 0.5rem;
	margin-left: 1.5rem;
}

code {
	background-color: #f5f5f5;
	color: #ff3860;
	padding: 0.2em 0.4em;
	border-radius: 3px;
}
</style> 