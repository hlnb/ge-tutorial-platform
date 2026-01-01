<script setup>
import { onBeforeUnmount } from 'vue';

// Clean up any side effects when component unmounts
onBeforeUnmount(() => {
	// Any cleanup code if needed
});
</script>

<template>
	<div class="tutorial-content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/"
						><i class="fa-solid fa-house mr-2"></i> Home</router-link
					>
				</li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li class="is-active">
					<a href="#" aria-current="page">HTML Basics</a>
				</li>
			</ul>
		</nav>

		<div>
			<div class="tags mb-4">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">Series</span>
		</div>

		<h1 class="title is-1">
			<i class="fab fa-html5 html-icon"></i> HTML Basics
		</h1>
		<p class="subtitle is-4 mb-6">
			Learn the fundamentals of HTML structure and elements
		</p>
			<h3 class="title is-5 mb-2">What You'll Learn</h3>
			<ul>
				<li>Understanding HTML elements and structure</li>
				<li>Creating your first HTML page</li>
				<li>Working with text, links, and images</li>
				<li>Building proper document structure</li>
				<li>Best practices for modern HTML</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<strong>Total Course Duration:</strong> Approximately 2 hours 50 minutes
			</p>
		</div>

		<div class="tutorial-grid">
			<div class="columns is-multiline">
				<div
					v-for="(link, index) in [
						{
							path: '/tutorials/beginner/html-basics/introduction',
							text: 'Introduction',
							time: '15 minutes',
						},
						{
							path: '/tutorials/beginner/html-basics/html-first-page',
							text: 'Your First HTML Page',
							time: '20 minutes',
						},
						{
							path: '/tutorials/beginner/html-basics/html-text',
							text: 'Working with Text',
							time: '30 minutes',
						},
						{
							path: '/tutorials/beginner/html-basics/html-links',
							text: 'Links & Navigation',
							time: '30 minutes',
						},
						{
							path: '/tutorials/beginner/html-basics/html-images',
							text: 'Images',
							time: '25 minutes',
						},
						{
							path: '/tutorials/beginner/html-basics/html-doc-structure',
							text: 'Document Structure',
							time: '20 minutes',
						},
						{ path: '/tutorials/beginner/html-basics/html-forms', text: 'Forms', time: '35 minutes' },
						{
							path: '/tutorials/beginner/html-basics/html-emmet',
							text: 'Emmet Workflow',
							time: '20 minutes',
						},
					]"
					:key="index"
					class="column is-one-third"
				>
					<div class="card">
						<div class="card-content">
							<h3 class="title is-4">
								<router-link :to="link.path">{{
									link.text
								}}</router-link>
							</h3>
							<div class="tags">
								<span class="tag is-warning">{{ link.time }}</span>
								<span class="tag is-success">Theory</span>
								<span class="tag is-primary">Practice</span>
								<span class="tag is-link">Project</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="box box-info mt-6">
			<h3 class="title is-5 mb-2">Prerequisites</h3>
			<ul>
				<li>Basic computer skills</li>
				<li>Text editor installed (VS Code recommended)</li>
				<li>Web browser (Chrome or Firefox recommended)</li>
				<li>Completion of Getting Started tutorials</li>
			</ul>
		</div>

		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-graduation-cap section-icon"></i> Course Projects
			</h2>

			<p>
				Throughout this tutorial series, you'll build two real-world websites:
			</p>

			<div class="projects mt-4">
				<div class="notification is-primary is-light mb-4">
					<h3 class="title is-4">
						<i class="fas fa-utensils mr-2"></i> Project 1: Black Swan Bistro
					</h3>
					<p>
						A restaurant website that grows with your knowledge. Perfect for
						learning the basics!
					</p>
				</div>

				<div class="notification is-link is-light">
					<h3 class="title is-4">
						<i class="fas fa-island-tropical mr-2"></i> Project 2: Rotto Rocks
					</h3>
					<p>
						A tourism website for Rottnest Island. This more complex project
						will help you master HTML!
					</p>
				</div>

				<div class="notification is-warning is-light mt-4">
					<p>
						<strong>Note:</strong> Each tutorial adds new features to these
						projects. Keep your code organized as we'll be building on it
						throughout the series!
					</p>
				</div>
			</div>
		</div>

	</div>
</template>

<style scoped>
.html-icon {
	color: #e34f26;
}

.content {
	max-width: 100%;
	padding: 0 1rem;
}

.tutorial-content {
	width: 100%;
	max-width: 1344px;
	margin: 0 auto;
}

.tutorials-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1.5rem;
	width: 100%;
}

.tutorial-card {
	height: 100%;
	transition: transform 0.2s ease;
	display: flex;
	flex-direction: column;
}

.tutorial-card:hover {
	transform: translateY(-2px);
}

.tutorial-card .tags {
	margin-top: auto;
}

.box-info {
	background-color: #f5f5f5;
}

.section-group {
	position: relative;
	padding-left: 2rem;
}

.section-group::before {
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	width: 4px;
	background: #3298dc; /* Bulma's is-info color */
	border-radius: 2px;
}

.section-group:not(:last-child) {
	padding-bottom: 2rem;
}
</style>
