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
					<a href="#" aria-current="page">Number Guessing Game</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">20 minutes</span>
			<span class="tag is-success">JavaScript</span>
			<span class="tag is-primary">Logic</span>
		</div>

		<h1 class="title is-1">
			<i class="fas fa-dice mr-2"></i>
			Number Guessing Game
		</h1>

		<div class="box">
			<h2 class="title is-4">Project Overview</h2>
			<p>
				Create a number guessing game that demonstrates these JavaScript concepts:
			</p>
			<ul>
				<li>Working with numbers and random values</li>
				<li>Using conditional statements (if/else)</li>
				<li>Handling user input and validation</li>
				<li>Keeping track of game state with variables</li>
			</ul>
		</div>

		<div class="box">
			<h2 class="title is-4">What You'll Build</h2>
			<p>A fun number guessing game that:</p>
			<ul>
				<li>Generates a random number for the player to guess</li>
				<li>Provides feedback if the guess is too high or too low</li>
				<li>Keeps track of the number of attempts</li>
				<li>Lets players start a new game when they win</li>
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

			<h3 class="title is-5 mt-5">3. Style Your Game</h3>
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
			<p>Once you have the basic game working, try these enhancements:</p>
			<ul>
				<li>Add a high score system</li>
				<li>Add different difficulty levels (change the number range)</li>
				<li>Add a timer to limit how long players have to guess</li>
				<li>Add sound effects for correct/incorrect guesses</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<strong>Pro Tips:</strong>
			</p>
			<ul>
				<li>Use <code>parseInt()</code> to convert string input to numbers</li>
				<li>Add input validation to handle non-number entries</li>
				<li>Use template literals to create dynamic messages</li>
				<li>Consider using the ternary operator for simple conditions</li>
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
    <title>Number Guessing Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Number Guessing Game</h1>
        <p id="gameInfo">I'm thinking of a number between 1 and 100...</p>
        
        <div class="game-controls">
            <input type="number" id="guessInput" placeholder="Enter your guess">
            <button id="guessButton">Make Guess</button>
            <button id="newGameButton" style="display: none;">New Game</button>
        </div>
        
        <p id="message"></p>
        <p id="attempts">Attempts: 0</p>
    </div>
    <script src="script.js"><\/script>
</body>
</html>`;

const javascriptCode = `// Game variables
let targetNumber;
let attempts;
let gameActive;

// Get DOM elements
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const newGameButton = document.getElementById('newGameButton');
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');

// Initialize the game
function initGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameActive = true;
    
    // Reset UI
    guessInput.value = '';
    messageElement.textContent = '';
    attemptsElement.textContent = 'Attempts: 0';
    guessButton.style.display = 'inline-block';
    newGameButton.style.display = 'none';
    guessInput.disabled = false;
}

// Handle player's guess
function handleGuess() {
    if (!gameActive) return;
    
    const guess = parseInt(guessInput.value);
    
    // Validate input
    if (isNaN(guess) || guess < 1 || guess > 100) {
        messageElement.textContent = 'Please enter a valid number between 1 and 100';
        return;
    }
    
    // Increment attempts
    attempts++;
    attemptsElement.textContent = \`Attempts: \${attempts}\`;
    
    // Check guess
    if (guess === targetNumber) {
        messageElement.textContent = \`Congratulations! You found the number in \${attempts} attempts!\`;
        gameActive = false;
        guessButton.style.display = 'none';
        newGameButton.style.display = 'inline-block';
        guessInput.disabled = true;
    } else if (guess < targetNumber) {
        messageElement.textContent = 'Too low! Try a higher number.';
    } else {
        messageElement.textContent = 'Too high! Try a lower number.';
    }
    
    // Clear input
    guessInput.value = '';
}

// Event listeners
guessButton.addEventListener('click', handleGuess);
newGameButton.addEventListener('click', initGame);
guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleGuess();
});

// Start the game
initGame();`;

const cssStyles = `.container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    text-align: center;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #2c3e50;
    margin-bottom: 20px;
}

.game-controls {
    margin: 20px 0;
}

input[type="number"] {
    padding: 10px;
    font-size: 16px;
    width: 150px;
    margin-right: 10px;
    border: 2px solid #ddd;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

#guessButton {
    background-color: #4CAF50;
    color: white;
}

#guessButton:hover {
    background-color: #45a049;
}

#newGameButton {
    background-color: #2196F3;
    color: white;
}

#newGameButton:hover {
    background-color: #1976D2;
}

#message {
    margin: 20px 0;
    font-size: 18px;
    color: #666;
}

#attempts {
    font-size: 16px;
    color: #888;
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