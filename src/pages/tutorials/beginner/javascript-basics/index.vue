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
				<li class="is-active">
					<a href="#" aria-current="page">JavaScript Basics</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">10 minutes</span>
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
			JavaScript Basics
		</h1>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Learning Path
			</h3>
			<p>
				Welcome to JavaScript Basics! This series of tutorials will teach you
				the fundamentals of JavaScript programming, even if you've never written
				code before.
			</p>
			<p>
				By the end of this series, you'll be able to add interactivity to web
				pages and understand the core concepts of programming.
			</p>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this series, we
				recommend completing the
				<router-link to="/tutorials/html-basics">HTML Basics</router-link> and
				<router-link to="/tutorials/css-basics">CSS Basics</router-link>
				tutorials.
			</p>
		</div>

		<h2 class="title is-2">What is JavaScript?</h2>
		<p>
			If HTML is the skeleton of a webpage (structure) and CSS is the skin and
			clothing (appearance), then JavaScript is the muscles and brain that make
			it move and think.
		</p>
		<p>
			JavaScript is the programming language that brings websites to life by:
		</p>
		<ul>
			<li>Responding to user actions (like clicks and key presses)</li>
			<li>Updating content on the page without reloading</li>
			<li>Creating interactive elements like sliders, popups, and forms</li>
			<li>Communicating with servers to fetch or send data</li>
			<li>Storing information in the user's browser</li>
		</ul>

		<div class="box">
			<h3 class="title is-4">Real-World Analogy</h3>
			<p>Think of a website like a house:</p>

			<!-- Add SVG illustration here -->
			<div class="web-layers-illustration">
				<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
					<!-- House foundation and structure (HTML) -->
					<g class="html-layer">
						<!-- Foundation -->
						<rect x="100" y="250" width="400" height="30" fill="#e34c26" />
						<text
							x="300"
							y="270"
							text-anchor="middle"
							fill="white"
							font-weight="bold"
						>
							HTML: Structure
						</text>

						<!-- Walls -->
						<rect
							x="150"
							y="150"
							width="300"
							height="100"
							fill="#ebebeb"
							stroke="#e34c26"
							stroke-width="4"
						/>

						<!-- Roof -->
						<polygon
							points="150,150 300,80 450,150"
							fill="#ebebeb"
							stroke="#e34c26"
							stroke-width="4"
						/>

						<!-- Door frame - Move up by changing y value from 200 to 175 -->
						<rect
							x="250"
							y="170"
							width="50"
							height="80"
							fill="#ebebeb"
							stroke="#e34c26"
							stroke-width="2"
						/>

						<!-- Window frames -->
						<rect
							x="180"
							y="180"
							width="40"
							height="40"
							fill="#ebebeb"
							stroke="#e34c26"
							stroke-width="2"
						/>
						<rect
							x="380"
							y="180"
							width="40"
							height="40"
							fill="#ebebeb"
							stroke="#e34c26"
							stroke-width="2"
						/>
					</g>

					<!-- House appearance (CSS) -->
					<g class="css-layer">
						<!-- Door - Move up by changing y value from 195 to 180 -->
						<rect x="255" y="175" width="40" height="75" fill="#264de4" />
						<circle cx="285" cy="225" r="3" fill="#ebebeb" />
						<!-- Change text color from white to a darker color and reposition -->
						<text
							x="300"
							y="170"
							text-anchor="middle"
							fill="#000"
							font-weight="bold"
							font-size="12"
						>
							CSS: Appearance
						</text>

						<!-- Windows -->
						<rect
							x="185"
							y="185"
							width="30"
							height="30"
							fill="#264de4"
							opacity="0.7"
						/>
						<rect
							x="385"
							y="185"
							width="30"
							height="30"
							fill="#264de4"
							opacity="0.7"
						/>

						<!-- Window panes -->
						<line
							x1="185"
							y1="200"
							x2="215"
							y2="200"
							stroke="white"
							stroke-width="1"
						/>
						<line
							x1="200"
							y1="185"
							x2="200"
							y2="215"
							stroke="white"
							stroke-width="1"
						/>
						<line
							x1="385"
							y1="200"
							x2="415"
							y2="200"
							stroke="white"
							stroke-width="1"
						/>
						<line
							x1="400"
							y1="185"
							x2="400"
							y2="215"
							stroke="white"
							stroke-width="1"
						/>

						<!-- Decorative elements -->
						<rect x="150" y="150" width="300" height="5" fill="#264de4" />
						<rect x="150" y="245" width="300" height="5" fill="#264de4" />
					</g>

					<!-- House functionality (JavaScript) -->
					<g class="js-layer">
						<!-- Light rays from windows (animated in CSS) -->
						<polygon
							points="185,200 160,180 160,220"
							fill="#f7df1e"
							class="light-ray"
						/>
						<polygon
							points="415,200 440,180 440,220"
							fill="#f7df1e"
							class="light-ray"
						/>

						<!-- Smoke from chimney -->
						<path
							d="M330,100 Q340,80 330,60 Q320,40 330,20"
							fill="none"
							stroke="#f7df1e"
							stroke-width="3"
							class="smoke"
						/>
						<path
							d="M340,100 Q350,70 340,50 Q330,30 340,10"
							fill="none"
							stroke="#f7df1e"
							stroke-width="2"
							class="smoke"
						/>

						<!-- Chimney -->
						<rect
							x="320"
							y="100"
							width="20"
							height="30"
							fill="#ebebeb"
							stroke="#e34c26"
							stroke-width="2"
						/>

						<!-- Label -->
						<text
							x="450"
							y="100"
							text-anchor="middle"
							fill="#333"
							font-weight="bold"
							font-size="12"
						>
							JavaScript: Functionality
						</text>
						<line
							x1="350"
							y1="100"
							x2="390"
							y2="100"
							stroke="#f7df1e"
							stroke-width="2"
						/>
					</g>
				</svg>
			</div>

			<ul>
				<li>
					<strong>HTML</strong> is the foundation, walls, and roof (structure)
				</li>
				<li>
					<strong>CSS</strong> is the paint, decorations, and furniture
					(appearance)
				</li>
				<li>
					<strong>JavaScript</strong> is the electricity, plumbing, and smart
					home features (functionality)
				</li>
			</ul>
			<p>
				Without JavaScript, websites would be static like a paper brochure. With
				JavaScript, they become interactive like a video game or app.
			</p>
		</div>

		<div class="tutorial-structure">
			<!-- Quick Start Section -->
			<div class="box quick-start">
				<h2 class="title is-3">
					<i class="fas fa-rocket"></i> Quick Start
				</h2>
				<div class="columns">
					<div class="column">
						<div class="card">
							<div class="card-content">
								<h4 class="title is-5">How to Use This Tutorial</h4>
								<ul>
									<li>Each section builds on previous knowledge</li>
									<li>Practice with interactive examples</li>
									<li>Complete challenges to reinforce learning</li>
									<li>Build mini-projects to apply skills</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="column">
						<div class="card">
							<div class="card-content">
								<h4 class="title is-5">What You'll Need</h4>
								<ul>
									<li>A modern web browser</li>
									<li>No previous coding experience required</li>
									<li>About 30 minutes per section</li>
									<li>Willingness to experiment and learn</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Learning Path -->
			<div class="learning-path">
				<h2 class="title is-2">
					<i class="fas fa-map-signs"></i> Learning Path
				</h2>
				
				<!-- Level 1: Foundations -->
				<div class="level-section">
					<h3 class="title is-3">Level 1: Foundations</h3>
					<div class="path-item">
						<router-link to="javascript-basics/introduction" class="box" :class="{ 'is-completed': isSectionCompleted('introduction') }">
							<h4 class="title is-4">
								<i class="fas fa-flag-checkered"></i> Getting Started
								<span v-if="isSectionCompleted('introduction')" class="icon has-text-success">
									<i class="fas fa-check-circle"></i>
								</span>
							</h4>
							<p>Learn what JavaScript is and how it powers the modern web.</p>
							<div class="tags">
								<span class="tag is-success">Beginner Friendly</span>
								<span class="tag is-info">15 minutes</span>
							</div>
						</router-link>
					</div>
				</div>

				<!-- Level 2: Basic Building Blocks -->
				<div class="level-section">
					<h3 class="title is-3">Level 2: Basic Building Blocks</h3>
					<div class="path-item">
						<router-link to="javascript-basics/variables-data-types" class="box" :class="{ 'is-completed': isSectionCompleted('variables-data-types') }">
							<h4 class="title is-4">
								<i class="fas fa-cube"></i> Variables & Data Types
								<span v-if="isSectionCompleted('variables-data-types')" class="icon has-text-success">
									<i class="fas fa-check-circle"></i>
								</span>
							</h4>
							<p>Store and work with different types of data in JavaScript.</p>
							<div class="tags">
								<span class="tag is-warning">Core Concept</span>
								<span class="tag is-info">30 minutes</span>
							</div>
						</router-link>
					</div>
				</div>

				<!-- Level 3: Operations & Logic -->
				<div class="level-section">
					<h3 class="title is-3">Level 3: Operations & Logic</h3>
					<div class="columns">
						<div class="column">
							<router-link to="javascript-basics/operators" class="box" :class="{ 'is-completed': isSectionCompleted('operators') }">
								<h4 class="title is-4">
									<i class="fas fa-calculator"></i> Operators
									<span v-if="isSectionCompleted('operators')" class="icon has-text-success">
										<i class="fas fa-check-circle"></i>
									</span>
								</h4>
								<p>Perform calculations and combine values.</p>
								<div class="tags">
									<span class="tag is-warning">Core Concept</span>
									<span class="tag is-info">30 minutes</span>
								</div>
							</router-link>
						</div>
						<div class="column">
							<router-link to="javascript-basics/conditionals" class="box" :class="{ 'is-completed': isSectionCompleted('conditionals') }">
								<h4 class="title is-4">
									<i class="fas fa-code-branch"></i> Conditionals
									<span v-if="isSectionCompleted('conditionals')" class="icon has-text-success">
										<i class="fas fa-check-circle"></i>
									</span>
								</h4>
								<p>Make decisions in your code.</p>
								<div class="tags">
									<span class="tag is-warning">Core Concept</span>
									<span class="tag is-info">45 minutes</span>
								</div>
							</router-link>
						</div>
					</div>
				</div>

				<!-- Level 4: Repetition & Functions -->
				<div class="level-section">
					<h3 class="title is-3">Level 4: Repetition & Functions</h3>
					<div class="columns">
						<div class="column">
							<router-link to="javascript-basics/loops" class="box" :class="{ 'is-completed': isSectionCompleted('loops') }">
								<h4 class="title is-4">
									<i class="fas fa-redo"></i> Loops
									<span v-if="isSectionCompleted('loops')" class="icon has-text-success">
										<i class="fas fa-check-circle"></i>
									</span>
								</h4>
								<p>Repeat actions efficiently.</p>
								<div class="tags">
									<span class="tag is-warning">Core Concept</span>
									<span class="tag is-info">45 minutes</span>
								</div>
							</router-link>
						</div>
						<div class="column">
							<router-link to="javascript-basics/functions" class="box" :class="{ 'is-completed': isSectionCompleted('functions') }">
								<h4 class="title is-4">
									<i class="fas fa-box"></i> Functions
									<span v-if="isSectionCompleted('functions')" class="icon has-text-success">
										<i class="fas fa-check-circle"></i>
									</span>
								</h4>
								<p>Create reusable blocks of code.</p>
								<div class="tags">
									<span class="tag is-warning">Core Concept</span>
									<span class="tag is-info">60 minutes</span>
								</div>
							</router-link>
						</div>
					</div>
				</div>
			</div>

			<!-- Progress Tracking -->
			<div class="progress-section box">
				<h2 class="title is-3">
					<i class="fas fa-chart-line"></i> Your Progress
				</h2>
				<progress class="progress is-success" :value="completedSections" :max="totalSections">
					{{ progressPercentage }}%
				</progress>
				<p class="has-text-centered">
					{{ completedSections }} of {{ totalSections }} sections completed ({{ progressPercentage }}%)
				</p>
				<div class="mt-4" v-if="completedSections < totalSections">
					<p class="has-text-centered">
						<strong>Next up:</strong> 
						<span v-if="nextSection" class="tag is-primary is-medium">
							{{ nextSection.name }}
						</span>
					</p>
				</div>
				<div class="mt-4" v-else>
					<p class="has-text-centered has-text-success">
						<i class="fas fa-trophy"></i>
						<strong>Congratulations!</strong> You've completed all sections!
					</p>
				</div>
			</div>
		</div>

		<div class="box mt-6">
			<h3 class="title is-4"><i class="fas fa-tools"></i> Tools You'll Need</h3>
			<ul>
				<li>
					<strong>Web Browser</strong> - Chrome, Firefox, or Edge (with
					Developer Tools)
				</li>
				<li>
					<strong>Text Editor</strong> - VS Code, Sublime Text, or any code
					editor
				</li>
				<li>
					<strong>Curiosity</strong> - The most important tool for learning!
				</li>
			</ul>
		</div>

		<div class="notification is-success is-light mt-6">
			<p>
				<i class="fas fa-check-circle mr-2"></i>
				<strong>Ready to start?</strong> Begin with the
				<router-link to="/tutorials/javascript-basics/introduction">
					Introduction to JavaScript
				</router-link>
				tutorial to take your first steps into programming!
			</p>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

// Tutorial sections in order
const tutorialSections = [
	{ id: 'introduction', name: 'Introduction', path: '/tutorials/javascript-basics/introduction' },
	{ id: 'variables-data-types', name: 'Variables & Data Types', path: '/tutorials/javascript-basics/variables-data-types' },
	{ id: 'operators', name: 'Operators', path: '/tutorials/javascript-basics/operators' },
	{ id: 'conditionals', name: 'Conditionals', path: '/tutorials/javascript-basics/conditionals' },
	{ id: 'loops', name: 'Loops', path: '/tutorials/javascript-basics/loops' },
	{ id: 'functions', name: 'Functions', path: '/tutorials/javascript-basics/functions' }
];

const totalSections = tutorialSections.length;
const completedSections = ref(0);
const route = useRoute();

// Check all possible localStorage keys to help debug
const debugLocalStorage = () => {
	console.log('All localStorage keys:');
	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);
		console.log(`${key}:`, localStorage.getItem(key));
	}
};

// Load progress from localStorage
const loadProgress = () => {
	try {
		debugLocalStorage();
		
		// Get cookie consent and settings
		const consent = localStorage.getItem('cookieConsent');
		const settingsStr = localStorage.getItem('cookieSettings');
		
		console.log('Cookie Consent:', consent);
		console.log('Cookie Settings:', settingsStr);
		
		// Check if progress tracking should be enabled
		const isTrackingEnabled = () => {
			try {
				if (consent !== 'true') return false;
				
				const settings = JSON.parse(settingsStr);
				const isEnabled = settings && settings.progress === true;
				console.log('Progress tracking enabled:', isEnabled);
				return isEnabled;
			} catch (error) {
				console.error('Error parsing cookie settings:', error);
				return false;
			}
		};

		if (!isTrackingEnabled()) {
			console.warn('Progress tracking is disabled.');
			return { completed: [], lastVisited: null };
		}

		const savedProgress = localStorage.getItem('js-basics-progress');
		if (savedProgress) {
			const progress = JSON.parse(savedProgress);
			completedSections.value = progress.completed.length;
			console.log('Loaded progress:', progress);
			return progress;
		}
	} catch (error) {
		console.error('Error loading progress:', error);
		console.error('Error details:', {
			message: error.message,
			stack: error.stack
		});
	}
	return { completed: [], lastVisited: null };
};

// Save progress to localStorage
const saveProgress = (progress) => {
	try {
		const consent = localStorage.getItem('cookieConsent');
		const settingsStr = localStorage.getItem('cookieSettings');
		
		// Check if progress tracking should be enabled
		const isTrackingEnabled = () => {
			try {
				if (consent !== 'true') return false;
				
				const settings = JSON.parse(settingsStr);
				return settings && settings.progress === true;
			} catch {
				return false;
			}
		};

		if (!isTrackingEnabled()) {
			console.warn('Cannot save progress: tracking is disabled');
			return;
		}

		localStorage.setItem('js-basics-progress', JSON.stringify(progress));
		console.log('Saved progress:', progress);
	} catch (error) {
		console.error('Error saving progress:', error);
	}
};

// Check if a section is completed
const isSectionCompleted = (sectionId) => {
	const progress = loadProgress();
	return progress.completed.includes(sectionId);
};

// Mark a section as completed
const markSectionCompleted = (sectionId) => {
	const progress = loadProgress();
	if (!progress.completed.includes(sectionId)) {
		progress.completed.push(sectionId);
		completedSections.value = progress.completed.length;
		saveProgress(progress);
	}
};

// Computed properties
const progressPercentage = computed(() => {
	return Math.round((completedSections.value / totalSections) * 100);
});

const currentProgress = computed(() => {
	return {
		completed: completedSections.value,
		total: totalSections,
		percentage: progressPercentage.value
	};
});

const nextSection = computed(() => {
	const progress = loadProgress();
	const nextUncompletedSection = tutorialSections.find(section => 
		!progress.completed.includes(section.id)
	);
	return nextUncompletedSection;
});

// Initialize progress on component mount
onMounted(() => {
	const progress = loadProgress();
	completedSections.value = progress.completed.length;
	
	// Update last visited section
	const currentSection = route.path.split('/').pop();
	if (currentSection) {
		progress.lastVisited = currentSection;
		saveProgress(progress);
	}
});
</script>

<script>
// Frontmatter for the tutorial
export default {
	name: 'JavaScriptBasics',
	frontmatter: {
		title: 'JavaScript Basics',
		description: 'Learn the fundamentals of JavaScript programming for beginners',
		category: 'JavaScript',
		level: 'Beginner',
		order: 1,
		tags: ['javascript', 'programming', 'web development'],
		lastUpdated: '2023-10-15',
	}
};
</script>

<style scoped>
.js-logo-container {
	display: inline-block;
	width: 50px;
	height: 50px;
	margin-right: 10px;
	vertical-align: middle;
}

.js-logo {
	width: 100%;
	height: 100%;
}

.tutorials-list .card {
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tutorials-list .card:hover {
	transform: translateY(-5px);
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.media-left .icon {
	color: #3273dc;
}

/* SVG Illustration Styles */
.web-layers-illustration {
	margin: 2rem 0;
	max-width: 600px;
	margin-left: auto;
	margin-right: auto;
}

.light-ray {
	animation: flicker 3s infinite alternate;
	transform-origin: center;
	opacity: 0.7;
}

.smoke {
	animation: float 8s infinite ease-in-out;
	opacity: 0.6;
}

@keyframes flicker {
	0%,
	100% {
		opacity: 0.7;
	}
	50% {
		opacity: 0.3;
	}
}

@keyframes float {
	0% {
		transform: translateY(0);
		opacity: 0.6;
	}
	50% {
		transform: translateY(-10px);
		opacity: 0.3;
	}
	100% {
		transform: translateY(-20px);
		opacity: 0;
	}
}

.level-section {
	margin-bottom: 2rem;
	padding: 1rem;
	border-radius: 8px;
	background-color: #f5f5f5;
}

.path-item {
	margin-bottom: 1rem;
}

.path-item .box {
	transition: transform 0.2s;
}

.path-item .box:hover {
	transform: translateY(-5px);
}

.progress-section {
	margin-top: 3rem;
}

.is-completed {
	border-left: 4px solid #48c774;
	background-color: #f0fdf4;
}

.is-completed:hover {
	background-color: #e1fae5;
}

.progress-section {
	background-color: white;
	padding: 2rem;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.progress {
	height: 1.5rem;
	margin: 1rem 0;
}

.next-section {
	margin-top: 1rem;
	padding: 1rem;
	background-color: #f5f5f5;
	border-radius: 4px;
}
</style>
