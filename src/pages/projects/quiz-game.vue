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
					<a href="#" aria-current="page">Quiz Game</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">120 minutes</span>
			<span class="tag is-success">JavaScript</span>
			<span class="tag is-primary">Arrays</span>
			<span class="tag is-link">Conditionals</span>
		</div>

		<h1 class="title is-1">
			<i class="fas fa-question-circle"></i> Quiz Game Project
		</h1>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Project Objectives
			</h3>
			<ul>
				<li>Build an interactive quiz game application</li>
				<li>Practice working with arrays and objects</li>
				<li>Implement conditional logic for answer checking</li>
				<li>Track and display user scores</li>
				<li>Handle user input and provide feedback</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this project, you should
				complete the
				<router-link to="/tutorials/javascript-basics/conditionals"
					>JavaScript Conditionals</router-link
				>
				tutorial.
			</p>
		</div>

		<section class="project-section">
			<h2 class="title is-2">Project Description</h2>
			<p>
				In this project, you'll create a quiz game that presents users with
				multiple-choice questions, tracks their score, and provides feedback on
				their answers. This project will help you understand how to work with
				arrays, objects, and conditional logic while creating an engaging user
				experience.
			</p>

			<div class="box mt-5">
				<h3 class="title is-4">Your Quiz Game Should Include:</h3>
				<ul>
					<li>A collection of quiz questions with multiple-choice answers</li>
					<li>A way to display questions one at a time</li>
					<li>Answer validation and score tracking</li>
					<li>Immediate feedback for correct/incorrect answers</li>
					<li>A final score display with results</li>
					<li>An option to restart the quiz</li>
				</ul>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Getting Started</h2>

			<h3 class="title is-4">Step 1: Set Up Your Project Files</h3>
			<p>Create the following files for your project:</p>
			<ul>
				<li><code>index.html</code> - The HTML structure</li>
				<li><code>styles.css</code> - CSS styles for your quiz game</li>
				<li><code>script.js</code> - JavaScript code for quiz logic</li>
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

			<h3 class="title is-4 mt-5">Step 4: Implement Quiz Logic</h3>
			<p>Add the quiz game logic to your <code>script.js</code> file:</p>

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
			<p>Once you've completed the basic quiz game, try these enhancements:</p>

			<div class="box">
				<h3 class="title is-5">Advanced Features</h3>
				<ul>
					<li>Add a timer for each question</li>
					<li>Implement different quiz categories</li>
					<li>Add difficulty levels</li>
					<li>Include a high score leaderboard</li>
					<li>Add sound effects for correct/incorrect answers</li>
					<li>Implement a hint system</li>
				</ul>
			</div>
		</section>

	</div>
</template>

<script setup>
/* eslint-disable no-useless-escape */
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';

// Code examples
const htmlStructure = ref('<!DOCTYPE html>\n' +
'<html lang="en">\n' +
'<head>\n' +
'  <meta charset="UTF-8">\n' +
'  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'  <title>Quiz Game</title>\n' +
'  <link rel="stylesheet" href="styles.css">\n' +
'</head>\n' +
'<body>\n' +
'  <div class="quiz-app">\n' +
'    <div id="start-screen" class="screen">\n' +
'      <h1>JavaScript Quiz</h1>\n' +
'      <p>Test your knowledge with these fun questions.</p>\n' +
'      <button id="start-btn">Start Quiz</button>\n' +
'    </div>\n\n' +
'    <div id="question-screen" class="screen hidden">\n' +
'      <div id="progress">Question <span id="current-question">1</span> of <span id="total-questions">5</span></div>\n' +
'      <h2 id="question-text">Question goes here</h2>\n' +
'      <div id="choices" class="choices-grid">\n' +
'        <!-- Choices will be added here -->\n' +
'      </div>\n' +
'      <p id="feedback" class="hidden"></p>\n' +
'    </div>\n\n' +
'    <div id="end-screen" class="screen hidden">\n' +
'      <h2>Quiz Complete!</h2>\n' +
'      <p>Your score: <span id="final-score">0</span>%</p>\n' +
'      <button id="restart-btn">Try Again</button>\n' +
'    </div>\n' +
'  </div>\n' +
'  <script src="script.js"><\/script>\n' +
'</body>\n' +
'</html>');

const cssStyles = ref(`.quiz-container {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.screen {
  text-align: center;
  padding: 20px;
}

.hidden {
  display: none;
}

#progress {
  text-align: right;
  margin-bottom: 20px;
  color: #666;
}

.choices-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 20px 0;
}

.choice-btn {
  padding: 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.choice-btn:hover {
  background: #f0f0f0;
  border-color: #999;
}

.choice-btn.correct {
  background: #4CAF50;
  color: white;
  border-color: #45a049;
}

.choice-btn.incorrect {
  background: #f44336;
  color: white;
  border-color: #da190b;
}

#feedback {
  margin: 20px 0;
  padding: 10px;
  border-radius: 4px;
}

#feedback.correct {
  background: #e8f5e9;
  color: #2e7d32;
}

#feedback.incorrect {
  background: #ffebee;
  color: #c62828;
}

button {
  padding: 10px 20px;
  background: #2196F3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;
}

button:hover {
  background: #1976D2;
}`);

const jsLogic = ref(`// Quiz questions
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1
  },
  {
    question: "What is 2 + 2?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: 1
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
    correctAnswer: 1
  },
  {
    question: "What is the largest ocean on Earth?",
    choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: 3
  }
];

// Game state
let currentQuestion = 0;
let score = 0;

// DOM elements
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const choicesDiv = document.getElementById('choices');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const feedbackText = document.getElementById('feedback');
const finalScoreSpan = document.getElementById('final-score');

// Initialize the quiz
function initQuiz() {
  currentQuestion = 0;
  score = 0;
  totalQuestionsSpan.textContent = questions.length;
  showScreen(startScreen);
}

// Show a specific screen
function showScreen(screen) {
  [startScreen, questionScreen, endScreen].forEach(s => s.classList.add('hidden'));
  screen.classList.remove('hidden');
}

// Display current question
function displayQuestion() {
  const question = questions[currentQuestion];
  currentQuestionSpan.textContent = currentQuestion + 1;
  questionText.textContent = question.question;
  
  // Clear previous choices
  choicesDiv.innerHTML = '';
  feedbackText.classList.add('hidden');
  
  // Create choice buttons
  question.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.className = 'choice-btn';
    button.textContent = choice;
    button.addEventListener('click', () => checkAnswer(index));
    choicesDiv.appendChild(button);
  });
}

// Check the selected answer
function checkAnswer(choiceIndex) {
  const question = questions[currentQuestion];
  const buttons = choicesDiv.getElementsByClassName('choice-btn');
  
  // Disable all buttons
  Array.from(buttons).forEach(btn => btn.disabled = true);
  
  // Show feedback
  feedbackText.classList.remove('hidden');
  if (choiceIndex === question.correctAnswer) {
    score++;
    buttons[choiceIndex].classList.add('correct');
    feedbackText.textContent = 'Correct!';
    feedbackText.className = 'correct';
  } else {
    buttons[choiceIndex].classList.add('incorrect');
    buttons[question.correctAnswer].classList.add('correct');
    feedbackText.textContent = 'Incorrect. The correct answer was ' + 
      question.choices[question.correctAnswer];
    feedbackText.className = 'incorrect';
  }
  
  // Move to next question after delay
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }, 1500);
}

// End the quiz and show results
function endQuiz() {
  const percentage = Math.round((score / questions.length) * 100);
  finalScoreSpan.textContent = percentage;
  showScreen(endScreen);
}

// Event listeners
startBtn.addEventListener('click', () => {
  showScreen(questionScreen);
  displayQuestion();
});

restartBtn.addEventListener('click', () => {
  initQuiz();
});

// Start the quiz
initQuiz();`);
</script>

<script>
// Frontmatter for the project
export default {
	frontmatter: {
		title: 'Quiz Game',
		description: 'Build an interactive quiz game with JavaScript',
		category: 'JavaScript Projects',
		level: 'Beginner',
		tags: ['JavaScript', 'Arrays', 'Conditionals'],
		lastUpdated: '2024-03-15',
	},
};
</script>

<style scoped>
.project-section {
	margin-top: 3rem;
	margin-bottom: 3rem;
}

.codemirror-wrapper {
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	overflow: hidden;
	margin: 1.5rem 0;
}

code {
	background-color: #f5f5f5;
	color: #485fc7;
	padding: 0.2rem 0.4rem;
	border-radius: 4px;
}
</style> 