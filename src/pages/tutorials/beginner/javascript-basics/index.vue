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

		<h1 class="title is-1"><i class="fab fa-js"></i> JavaScript Basics</h1>

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

		<h2 class="title is-2">What You'll Learn</h2>
		<div class="tutorials-list">
			<div class="card mb-4">
				<div class="card-content">
					<div class="media">
						<div class="media-left">
							<span class="icon is-large">
								<i class="fas fa-rocket fa-2x"></i>
							</span>
						</div>
						<div class="media-content">
							<p class="title is-4">
								<router-link
									to="/tutorials/beginner/javascript-basics/introduction"
								>
									Introduction to JavaScript
								</router-link>
							</p>
							<p class="subtitle is-6">
								Learn what JavaScript is and how to add it to your web pages
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="card mb-4">
				<div class="card-content">
					<div class="media">
						<div class="media-left">
							<span class="icon is-large">
								<i class="fas fa-box fa-2x"></i>
							</span>
						</div>
						<div class="media-content">
							<p class="title is-4">
								<router-link
									to="/tutorials/beginner/javascript-basics/variables-data-types"
								>
									Variables and Data Types
								</router-link>
							</p>
							<p class="subtitle is-6">
								Store and manipulate different types of information
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="card mb-4">
				<div class="card-content">
					<div class="media">
						<div class="media-left">
							<span class="icon is-large">
								<i class="fas fa-calculator fa-2x"></i>
							</span>
						</div>
						<div class="media-content">
							<p class="title is-4">
								<router-link
									to="/tutorials/beginner/javascript-basics/operators"
								>
									Operators and Expressions
								</router-link>
							</p>
							<p class="subtitle is-6">
								Perform calculations and combine values
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="card mb-4">
				<div class="card-content">
					<div class="media">
						<div class="media-left">
							<span class="icon is-large">
								<i class="fas fa-code-branch fa-2x"></i>
							</span>
						</div>
						<div class="media-content">
							<p class="title is-4">
								<router-link
									to="/tutorials/beginner/javascript-basics/conditionals"
								>
									Conditionals and Logic
								</router-link>
							</p>
							<p class="subtitle is-6">
								Make decisions in your code based on conditions
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="card mb-4">
				<div class="card-content">
					<div class="media">
						<div class="media-left">
							<span class="icon is-large">
								<i class="fas fa-redo fa-2x"></i>
							</span>
						</div>
						<div class="media-content">
							<p class="title is-4">
								<router-link to="/tutorials/beginner/javascript-basics/loops">
									Loops
								</router-link>
							</p>
							<p class="subtitle is-6">
								Repeat actions efficiently with different types of loops
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="card mb-4">
				<div class="card-content">
					<div class="media">
						<div class="media-left">
							<span class="icon is-large">
								<i class="fas fa-cogs fa-2x"></i>
							</span>
						</div>
						<div class="media-content">
							<p class="title is-4">
								<router-link
									to="/tutorials/beginner/javascript-basics/functions"
								>
									Functions
								</router-link>
							</p>
							<p class="subtitle is-6">Create reusable blocks of code</p>
						</div>
					</div>
				</div>
			</div>

			<div class="card mb-4">
				<div class="card-content">
					<div class="media">
						<div class="media-left">
							<span class="icon is-large">
								<i class="fas fa-sitemap fa-2x"></i>
							</span>
						</div>
						<div class="media-content">
							<p class="title is-4">
								<router-link
									to="/tutorials/beginner/javascript-basics/dom-manipulation"
								>
									DOM Manipulation
								</router-link>
							</p>
							<p class="subtitle is-6">
								Interact with HTML elements to create dynamic web pages
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="card mb-4">
				<div class="card-content">
					<div class="media">
						<div class="media-left">
							<span class="icon is-large">
								<i class="fas fa-mouse-pointer fa-2x"></i>
							</span>
						</div>
						<div class="media-content">
							<p class="title is-4">
								<router-link to="/tutorials/beginner/javascript-basics/events">
									Events
								</router-link>
							</p>
							<p class="subtitle is-6">
								Respond to user actions like clicks, key presses, and more
							</p>
						</div>
					</div>
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
				<router-link to="/tutorials/beginner/javascript-basics/introduction">
					Introduction to JavaScript
				</router-link>
				tutorial to take your first steps into programming!
			</p>
		</div>

		<!-- Recommendations for next steps -->
		<TutorialRecommendations />
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';
</script>

<script>
// Frontmatter for the tutorial
export default {
	frontmatter: {
		title: 'JavaScript Basics',
		description:
			'Learn the fundamentals of JavaScript programming for beginners',
		category: 'JavaScript',
		level: 'Beginner',
		order: 1,
		tags: ['javascript', 'programming', 'web development'],
		lastUpdated: '2023-10-15',
	},
};
</script>

<style scoped>
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
</style>
