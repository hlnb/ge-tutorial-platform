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
					<a href="#" aria-current="page">Dynamic Color Switcher</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">20 minutes</span>
			<span class="tag is-success">JavaScript</span>
		</div>

		<h1 class="title is-1">
			<i class="fas fa-palette mr-2"></i>
			Dynamic Color Switcher
		</h1>

		<div class="box">
			<h2 class="title is-4">Project Overview</h2>
			<p>
				Create an interactive color switcher that demonstrates these JavaScript concepts:
			</p>
			<ul>
				<li>Event handling with buttons</li>
				<li>DOM manipulation to change styles</li>
				<li>Working with arrays and loops</li>
				<li>Using template literals</li>
			</ul>
		</div>

		<div class="box">
			<h2 class="title is-4">What You'll Build</h2>
			<p>A color switcher application that allows users to:</p>
			<ul>
				<li>Change background colors with buttons</li>
				<li>See the current color code</li>
				<li>Copy color codes to clipboard</li>
				<li>Generate random colors</li>
				<li>Save favorite colors</li>
			</ul>
		</div>

		<div class="box">
			<h2 class="title is-4">Step-by-Step Instructions</h2>
			
			<h3 class="title is-5">1. Set Up Your Files</h3>
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

			<h3 class="title is-5 mt-5">3. Add the JavaScript</h3>
			<p>In your <code>script.js</code> file, add the core functionality:</p>
			<div class="codemirror-wrapper">
				<CodeMirror
					:code="javascriptCode"
					language="javascript"
					:readonly="true"
				/>
			</div>

			<h3 class="title is-5 mt-5">4. Style Your Color Switcher</h3>
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
			<p>Once you have the basic functionality working, try these enhancements:</p>
			<ul>
				<li>Add color sliders for RGB values</li>
				<li>Implement color schemes (complementary, analogous, etc.)</li>
				<li>Add color name suggestions</li>
				<li>Save color palettes to localStorage</li>
				<li>Add a color history feature</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<strong>Pro Tips:</strong>
			</p>
			<ul>
				<li>Use CSS custom properties (variables) for dynamic color changes</li>
				<li>Learn about different color formats (HEX, RGB, HSL)</li>
				<li>Consider accessibility with high contrast text</li>
				<li>Add keyboard shortcuts for color changes</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
/* eslint-disable no-useless-escape */
import CodeMirror from '@/components/CodeMirror.vue';

const fileStructure = `project-folder/
  ├── index.html
  ├── styles.css
  └── script.js`;

const htmlStructure = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Color Switcher</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="color-switcher">
        <h1>Color Switcher</h1>
        
        <div class="color-display">
            <span id="currentColor">#FFFFFF</span>
            <button id="copyColor">Copy</button>
        </div>

        <div class="color-controls">
            <button id="randomColor">Random Color</button>
            <button id="saveColor">Save Color</button>
        </div>

        <div id="savedColors" class="saved-colors">
            <!-- Saved colors will appear here -->
        </div>
    </div>

    <script src="script.js"><\/script>
</body>
</html>`;

const javascriptCode = `// Get DOM elements
const currentColorDisplay = document.getElementById('currentColor');
const copyColorBtn = document.getElementById('copyColor');
const randomColorBtn = document.getElementById('randomColor');
const saveColorBtn = document.getElementById('saveColor');
const savedColorsContainer = document.getElementById('savedColors');

// Generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Update page color
function updateColor(color) {
    document.body.style.backgroundColor = color;
    currentColorDisplay.textContent = color;
    
    // Update text color based on background brightness
    const r = parseInt(color.substr(1,2), 16);
    const g = parseInt(color.substr(3,2), 16);
    const b = parseInt(color.substr(5,2), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    document.body.style.color = brightness > 128 ? '#000000' : '#FFFFFF';
}

// Copy color code
copyColorBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(currentColorDisplay.textContent)
        .then(() => {
            copyColorBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyColorBtn.textContent = 'Copy';
            }, 1000);
        });
});

// Generate random color
randomColorBtn.addEventListener('click', () => {
    const newColor = getRandomColor();
    updateColor(newColor);
});

// Save color
saveColorBtn.addEventListener('click', () => {
    const color = currentColorDisplay.textContent;
    const colorBox = document.createElement('div');
    colorBox.className = 'color-box';
    colorBox.style.backgroundColor = color;
    colorBox.setAttribute('data-color', color);
    
    colorBox.addEventListener('click', () => {
        updateColor(color);
    });
    
    savedColorsContainer.appendChild(colorBox);
});

// Initialize with random color
updateColor(getRandomColor());`;

const cssStyles = `.color-switcher {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    text-align: center;
}

.color-display {
    margin: 20px 0;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    font-family: monospace;
    font-size: 24px;
}

.color-controls {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 20px 0;
}

button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.2);
    color: inherit;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: rgba(255, 255, 255, 0.3);
}

.saved-colors {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
}

.color-box {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s;
}

.color-box:hover {
    transform: scale(1.1);
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