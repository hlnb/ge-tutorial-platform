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
					<a href="#" aria-current="page">Interactive Message Board</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">30 minutes</span>
			<span class="tag is-success">JavaScript</span>
		</div>

		<h1 class="title is-1">
			<i class="fas fa-comments mr-2"></i>
			Interactive Message Board
		</h1>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-info-circle mr-2"></i>
				<strong>Project Structure:</strong> This project is split into two parts:
			</p>
			<ul>
				<li><strong>Part 1:</strong> Data Planning and Variables - Perfect for practicing with different data types</li>
				<li><strong>Part 2:</strong> DOM Manipulation and Interactivity - Build the interactive features</li>
			</ul>
			<p class="mt-2">
				<i class="fas fa-lightbulb mr-2"></i>
				Complete Part 1 after learning about variables and data types, then return for Part 2 after learning about DOM manipulation.
			</p>
		</div>

		<!-- Part 1: Data Planning -->
		<div class="box">
			<h2 class="title is-3">Part 1: Data Planning and Variables</h2>
			<p>
				Before building the interactive features, let's plan our data structures and declare the variables we'll need:
			</p>

			<div class="step-section mb-6">
				<h3 class="title is-4">1. Message Data Structure</h3>
				<p>First, let's plan how to represent a message in our system:</p>
				<div class="codemirror-wrapper">
					<CodeMirror
						:code="messageDataStructure"
						language="javascript"
						:readonly="true"
					/>
				</div>
			</div>

			<div class="step-section mb-6">
				<h3 class="title is-4">2. Message Board State</h3>
				<p>Define variables to track the state of our message board:</p>
				<div class="codemirror-wrapper">
					<CodeMirror
						:code="boardStateVariables"
						language="javascript"
						:readonly="true"
					/>
				</div>
			</div>

			<div class="step-section mb-6">
				<h3 class="title is-4">3. Configuration Constants</h3>
				<p>Set up configuration values that won't change:</p>
				<div class="codemirror-wrapper">
					<CodeMirror
						:code="configConstants"
						language="javascript"
						:readonly="true"
					/>
				</div>
			</div>

			<div class="notification is-warning is-light">
				<p>
					<i class="fas fa-lightbulb mr-2"></i>
					<strong>Practice Exercise:</strong> Try creating these data structures in your browser's console:
				</p>
				<ol>
					<li>Create a message object with your own text and timestamp</li>
					<li>Create an array of message objects</li>
					<li>Try accessing and modifying different properties</li>
					<li>Experiment with different data types</li>
				</ol>
			</div>
		</div>

		<!-- Part 2: Implementation -->
		<div class="box">
			<h2 class="title is-3">Part 2: DOM Manipulation and Interactivity</h2>
			<p class="notification is-info is-light">
				<i class="fas fa-info-circle mr-2"></i>
				Return to this section after completing the DOM manipulation tutorial.
			</p>
			
			<h3 class="title is-4">1. Set Up Your Files</h3>
			<p>Create these files in your project folder:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					:code="fileStructure"
					language="plaintext"
					:readonly="true"
				/>
			</div>

			<h3 class="title is-5 mt-5">2. Create the HTML Structure</h3>
			<p>Add this basic structure to your <code>index.html</code>:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					:code="htmlStructure"
					language="html"
					:readonly="true"
				/>
			</div>

			<h3 class="title is-5 mt-5">3. Implement the JavaScript</h3>
			<p>Using the data structures from Part 1, implement the interactive features:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					:code="javascriptCode"
					language="javascript"
					:readonly="true"
				/>
			</div>

			<h3 class="title is-5 mt-5">4. Style Your Message Board</h3>
			<p>Add these styles to your <code>styles.css</code> file:</p>
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
			<p>Try these enhancements after completing both parts:</p>
			<ul>
				<li>Add message categories with different colors</li>
				<li>Implement message editing</li>
				<li>Add a search function</li>
				<li>Save messages to localStorage</li>
				<li>Add emoji reactions</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<strong>Pro Tips:</strong>
			</p>
			<ul>
				<li>Use descriptive variable names that indicate their purpose</li>
				<li>Consider using TypeScript for better type safety</li>
				<li>Use your browser's Developer Tools (F12) to experiment</li>
				<li>Practice with the console before implementing the UI</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import CodeMirror from '@/components/CodeMirror.vue';

// Part 1: Data Structures and Variables
const messageDataStructure = `// Define the structure of a message
const message = {
    id: 1,                        // Unique identifier (number)
    text: 'Hello, World!',        // Message content (string)
    author: 'John',               // Author name (string)
    timestamp: new Date(),        // Creation time (Date object)
    likes: 0,                     // Like count (number)
    isEdited: false,             // Edit status (boolean)
    color: '#f5f5f5',           // Background color (string)
    reactions: ['👍', '❤️']      // Array of emoji reactions (array of strings)
};

// Example of creating a message
function createMessage(text, author) {
    return {
        id: Date.now(),          // Use timestamp as unique ID
        text: text,
        author: author,
        timestamp: new Date(),
        likes: 0,
        isEdited: false,
        color: '#f5f5f5',
        reactions: []
    };
}`;

const boardStateVariables = `// Message board state variables
let messages = [];              // Array to store all messages
let messageCount = 0;          // Track total number of messages
let currentUser = null;        // Track current user
let selectedCategory = 'all';  // Track selected message category
let isEditing = false;        // Track if we're editing a message
let lastUpdateTime = null;    // Track last update timestamp

// Example of message categories
const categories = ['General', 'Questions', 'Announcements'];

// Example of message statistics
const stats = {
    totalMessages: 0,
    totalLikes: 0,
    activeUsers: new Set(),    // Using Set for unique users
    popularCategories: {}      // Object to track category usage
};`;

const configConstants = `// Configuration constants
const MAX_MESSAGE_LENGTH = 500;    // Maximum characters per message
const MAX_MESSAGES = 100;          // Maximum messages to display
const REFRESH_INTERVAL = 60000;    // Refresh interval in milliseconds
const DEFAULT_COLOR = '#f5f5f5';   // Default message background color
const ALLOWED_COLORS = [           // Array of allowed colors
    '#ffeb3b',
    '#4caf50',
    '#2196f3',
    '#f44336'
];

// Message type definitions
const MESSAGE_TYPES = {
    NORMAL: 'normal',
    ANNOUNCEMENT: 'announcement',
    QUESTION: 'question',
    REPLY: 'reply'
};

// Validation rules
const VALIDATION = {
    minLength: 1,
    maxLength: MAX_MESSAGE_LENGTH,
    allowedTypes: Object.values(MESSAGE_TYPES),
    allowHtml: false
};`;

// Part 2: Implementation
const fileStructure = `project-folder/
  ├── index.html
  ├── styles.css
  └── script.js`;

const htmlStructure = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Message Board</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="message-board">
        <h1>Message Board</h1>
        
        <div class="message-form">
            <input type="text" id="messageInput" placeholder="Type your message...">
            <button id="addMessage">Add Message</button>
        </div>

        <div id="messageList" class="message-list">
            <!-- Messages will be added here -->
        </div>
    </div>

    <script src="script.js"><\/script>
</body>
</html>`;

const javascriptCode = `// Import our data structures from Part 1
// ... (previous data structure code) ...

// Get DOM elements
const messageInput = document.getElementById('messageInput');
const addMessageBtn = document.getElementById('addMessage');
const messageList = document.getElementById('messageList');

// Add message function
function addMessage() {
    // Get input value
    const text = messageInput.value.trim();
    if (!text || text.length > MAX_MESSAGE_LENGTH) return;

    // Create new message using our data structure
    const newMessage = createMessage(text, currentUser || 'Anonymous');
    messages.push(newMessage);
    messageCount++;

    // Create message element
    const message = document.createElement('div');
    message.className = 'message';

    // Add message content
    message.innerHTML = \`
        <p class="message-text">\${newMessage.text}</p>
        <div class="message-actions">
            <button class="like-btn">👍 \${newMessage.likes}</button>
            <button class="color-btn">🎨</button>
            <button class="delete-btn">🗑️</button>
        </div>
        <span class="timestamp">\${newMessage.timestamp.toLocaleTimeString()}</span>
    \`;

    // Add event listeners
    const likeBtn = message.querySelector('.like-btn');
    const colorBtn = message.querySelector('.color-btn');
    const deleteBtn = message.querySelector('.delete-btn');

    likeBtn.addEventListener('click', () => {
        newMessage.likes++;
        stats.totalLikes++;
        likeBtn.textContent = \`👍 \${newMessage.likes}\`;
    });

    colorBtn.addEventListener('click', () => {
        const newColor = ALLOWED_COLORS[Math.floor(Math.random() * ALLOWED_COLORS.length)];
        newMessage.color = newColor;
        message.style.backgroundColor = newColor;
    });

    deleteBtn.addEventListener('click', () => {
        const index = messages.indexOf(newMessage);
        if (index > -1) {
            messages.splice(index, 1);
            messageCount--;
            stats.totalMessages = messageCount;
            message.remove();
            updateMessageCount();
        }
    });

    // Add to message list
    messageList.prepend(message);
    messageInput.value = '';
    
    // Update statistics
    stats.totalMessages = messageCount;
    stats.activeUsers.add(newMessage.author);
    updateMessageCount();
}

// Update message count display
function updateMessageCount() {
    document.title = \`Message Board (\${messageCount})\`;
}

// Add event listeners
addMessageBtn.addEventListener('click', addMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addMessage();
});`;

const cssStyles = `.message-board {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.message-form {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

#messageInput {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #2196f3;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #1976d2;
}

.message-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.message {
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.message-text {
    margin: 0 0 10px 0;
    font-size: 16px;
}

.message-actions {
    display: flex;
    gap: 10px;
}

.message-actions button {
    padding: 5px 10px;
    font-size: 14px;
}

.timestamp {
    display: block;
    margin-top: 5px;
    font-size: 12px;
    color: #666;
}`;
</script>

<style scoped>
.codemirror-wrapper {
	margin: 1rem 0;
	border-radius: 4px;
	overflow: hidden;
	border: 1px solid #ddd;
}

.step-section {
	border-bottom: 1px solid #dbdbdb;
	padding-bottom: 2rem;
}

.step-section:last-child {
	border-bottom: none;
}
</style> 