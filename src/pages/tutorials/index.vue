<template>
	<div class="container section">
		<h1 class="title is-1">Web Development Tutorials</h1>
		<p class="subtitle is-4 mb-6">
			Learn modern web development through practical, project-based tutorials
		</p>

		<div class="box box-info mb-6">
			<h3 class="title is-5 mb-2">Why Learn with Graphitedge?</h3>
			<ul>
				<li>Project-based learning with real-world examples</li>
				<li>Clear progression from basics to advanced topics</li>
				<li>Focus on modern web development practices</li>
				<li>Australian context and resources where relevant</li>
				<li>Comprehensive coverage from setup to deployment</li>
			</ul>
		</div>

		<h2 class="title is-3 mb-4">Tutorial Structure</h2>
		<div class="columns mb-6">
			<div class="column">
				<div class="box has-background-light">
					<h3 class="title is-5">📚 Theory</h3>
					<p>
						Clear explanations of concepts with examples and best practices.
						Each topic is broken down into digestible sections with visual aids
						and code samples.
					</p>
				</div>
			</div>
			<div class="column">
				<div class="box has-background-light">
					<h3 class="title is-5">💻 Practical Exercises</h3>
					<p>
						Hands-on coding exercises to reinforce learning. Practice what
						you've learned with guided examples and challenges of increasing
						difficulty.
					</p>
				</div>
			</div>
			<div class="column">
				<div class="box has-background-light">
					<h3 class="title is-5">🚀 Projects</h3>
					<p>
						Real-world projects that combine multiple concepts. Build
						portfolio-worthy websites and applications while learning
						professional workflows.
					</p>
				</div>
			</div>
		</div>

		<h2 class="title is-2 mt-6">Learning Path</h2>

		<div class="level-section mb-6">
			<h3 class="title is-3">
				<span class="tag is-info is-large mb-2">Beginner</span>
			</h3>
			<div class="box">
				<h4 class="title is-4">Getting Started</h4>
				<p>Essential concepts and development environment setup</p>
				<router-link
					to="/tutorials/getting-started"
					class="button is-primary is-outlined mt-3"
					>Start Here</router-link
				>
			</div>
			<div class="tutorials-grid">
				<div class="box tutorial-card">
					<h4 class="title is-4">
						<i class="fab fa-html5 html-icon"></i> HTML Basics
					</h4>
					<p>Learn the fundamentals of HTML structure and elements</p>
					<div class="tags">
						<span class="tag is-light">8 tutorials</span>
						<span class="tag is-light">3-4 hours</span>
						<span class="tag is-success">Available Now</span>
					</div>
					<ul class="tutorial-topics mt-3">
						<li><i class="fas fa-check"></i> Introduction to HTML</li>
						<li><i class="fas fa-check"></i> Document Structure</li>
						<li><i class="fas fa-check"></i> Working with Text</li>
						<li><i class="fas fa-check"></i> Links & Images</li>
						<li><i class="fas fa-check"></i> Forms</li>
						<li><i class="fas fa-check"></i> Emmet Workflow</li>
					</ul>
					<router-link
						to="/tutorials/html-basics"
						class="button is-primary is-outlined mt-3"
						>Start Your HTML Journey</router-link
					>
				</div>
				<div class="box tutorial-card">
					<h4 class="title is-4">
						<i class="fab fa-css css-icon"></i> CSS Basics
					</h4>
					<p>Master the basics of styling and layout</p>
					<div class="tags">
						<span class="tag is-light">10 tutorials</span>
						<span class="tag is-light">4-5 hours</span>
						<span class="tag is-success">Available Now</span>
					</div>
					<ul class="tutorial-topics mt-3">
						<li><i class="fas fa-check"></i> Introduction to CSS</li>
						<li><i class="fas fa-check"></i> Selectors & Properties</li>
						<li><i class="fas fa-check"></i> Colors & Typography</li>
						<li><i class="fas fa-check"></i> Box Model</li>
						<li><i class="fas fa-check"></i> Layout & Flexbox</li>
						<li><i class="fas fa-check"></i> Responsive Design</li>
					</ul>
					<router-link
						to="/tutorials/css-basics"
						class="button is-primary is-outlined mt-3"
						>Start Your CSS Journey</router-link
					>
				</div>
				<div class="box tutorial-card">
					<h4 class="title is-4">JavaScript Fundamentals</h4>
					<p>Introduction to programming with JavaScript</p>
					<div class="tags">
						<span class="tag is-light">12 tutorials</span>
						<span class="tag is-light">6-8 hours</span>
					</div>
				</div>
			</div>
		</div>

		<div class="level-section mb-6">
			<h3 class="title is-3">
				<span class="tag is-success is-large mb-2">Intermediate</span>
			</h3>
			<div class="tutorials-grid">
				<div class="box tutorial-card">
					<h4 class="title is-4">Common Page Sections</h4>
					<p>Build professional navigation, galleries, forms, and more</p>
					<div class="tags">
						<span class="tag is-light">8 tutorials</span>
						<span class="tag is-light">4-5 hours</span>
					</div>
				</div>
				<div class="box tutorial-card">
					<h4 class="title is-4">CSS Libraries</h4>
					<p>Working with Bootstrap, Bulma, and Tailwind CSS</p>
					<div class="tags">
						<span class="tag is-light">6 tutorials</span>
						<span class="tag is-light">3-4 hours</span>
					</div>
				</div>
				<div class="box tutorial-card">
					<h4 class="title is-4">Responsive Design</h4>
					<p>Create websites that work on all devices</p>
					<div class="tags">
						<span class="tag is-light">5 tutorials</span>
						<span class="tag is-light">3-4 hours</span>
					</div>
				</div>
			</div>
		</div>

		<div class="level-section mb-6">
			<h3 class="title is-3">
				<span class="tag is-warning is-large mb-2">Advanced</span>
			</h3>
			<div class="tutorials-grid">
				<div class="box tutorial-card">
					<h4 class="title is-4">Git & Deployment</h4>
					<p>Professional version control and deployment practices</p>
					<div class="tags">
						<span class="tag is-light">6 tutorials</span>
						<span class="tag is-light">4-5 hours</span>
					</div>
				</div>
				<div class="box tutorial-card">
					<h4 class="title is-4">Static Site Generators</h4>
					<p>Building with Eleventy and modern tooling</p>
					<div class="tags">
						<span class="tag is-light">8 tutorials</span>
						<span class="tag is-light">5-6 hours</span>
					</div>
				</div>
				<div class="box tutorial-card">
					<h4 class="title is-4">Vue.js Framework</h4>
					<p>Modern web development with Vue 3</p>
					<div class="tags">
						<span class="tag is-light">10 tutorials</span>
						<span class="tag is-light">8-10 hours</span>
					</div>
				</div>
			</div>
		</div>

		<div class="box box-info mt-6">
			<h3 class="title is-5 mb-2">Learning Tips</h3>
			<ul>
				<li>Complete tutorials in order within each level</li>
				<li>Practice with the provided exercises</li>
				<li>Build the example projects</li>
				<li>Review code in the practice sessions</li>
				<li>Take breaks between tutorials</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
.tutorials-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1.5rem;
	margin-top: 1.5rem;
}

.tutorial-card {
	height: 100%;
}

.box-info {
	background-color: #f5f5f5;
}

.level-section {
	position: relative;
	padding-left: 2rem;
}

.level-section::before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	width: 4px;
	background: linear-gradient(
		180deg,
		#3298dc 0%,
		/* Bulma's is-info color for Beginner */ #48c774 50%,
		/* Bulma's is-success color for Intermediate */ #ffdd57 100%
			/* Bulma's is-warning color for Advanced */
	);
	border-radius: 2px;
}

.level-section:not(:last-child) {
	padding-bottom: 2rem;
}
.html-icon {
	color: #e34f26;
}

.css-icon {
	color: #264de4;
}

.tutorial-topics {
	list-style: none;
	padding-left: 0;
	margin-top: 1rem;
	font-size: 0.9em;
}

.tutorial-topics li {
	margin-bottom: 0.5rem;
	display: flex;
	align-items: center;
}

.tutorial-topics li i {
	color: #48c774;
	margin-right: 0.5rem;
	font-size: 0.8em;
}

.tutorial-card {
	transition: transform 0.2s ease;
}

.tutorial-card:hover {
	transform: translateY(-2px);
}
</style>
