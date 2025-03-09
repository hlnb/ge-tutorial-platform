<template>
	<div class="container section">
		<div class="content">
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li>
						<router-link to="/">Home</router-link>
					</li>
					<li>
						<router-link to="/tutorials">Tutorials</router-link>
					</li>
					<li class="is-active">
						<a href="#" aria-current="page">Getting Started</a>
					</li>
				</ul>
			</nav>

			<h1 class="title is-1">Getting Started</h1>

			<p class="subtitle is-4 mb-6">
				Essential concepts and tools for web development
			</p>

			<div class="box box-info mb-6">
				<p>
					<strong>🎯 Learning Path:</strong> Complete these tutorials in order
					to understand how the web works and set up your development
					environment.
				</p>
			</div>

			<div class="tutorials-grid">
				<!-- How Internet Works -->
				<div class="box tutorial-card">
					<h2 class="title is-4">
						<router-link to="/tutorials/getting-started/how-internet-works">
							How the Internet Works
						</router-link>
					</h2>
					<div class="tags mb-4">
						<span class="tag is-info">Beginner</span>
						<span class="tag is-light">30 mins</span>
						<span class="tag is-primary">Theory</span>
					</div>
					<p>
						Learn the fundamental concepts of how the internet and web browsers
						work.
					</p>
					<router-link
						to="/tutorials/getting-started/how-internet-works"
						class="button is-primary is-outlined mt-4"
					>
						Start Tutorial
					</router-link>
				</div>

				<!-- Web Basics -->
				<div class="box tutorial-card">
					<h2 class="title is-4">
						<router-link to="/tutorials/getting-started/web-basics">
							Web Development Basics
						</router-link>
					</h2>
					<div class="tags mb-4">
						<span class="tag is-info">Beginner</span>
						<span class="tag is-light">25 mins</span>
						<span class="tag is-primary">Theory</span>
					</div>
					<p>
						Understand the basic components of websites and web applications.
					</p>
					<router-link
						to="/tutorials/getting-started/web-basics"
						class="button is-primary is-outlined mt-4"
					>
						Start Tutorial
					</router-link>
				</div>

				<!-- Dev Environment -->
				<div class="box tutorial-card">
					<h2 class="title is-4">
						<router-link to="/tutorials/getting-started/dev-environment">
							Development Environment
						</router-link>
					</h2>
					<div class="tags mb-4">
						<span class="tag is-info">Beginner</span>
						<span class="tag is-light">45 mins</span>
						<span class="tag is-success">Practice</span>
					</div>
					<p>
						Set up your computer for web development with essential tools and
						software.
					</p>
					<router-link
						to="/tutorials/getting-started/dev-environment"
						class="button is-primary is-outlined mt-4"
					>
						Start Tutorial
					</router-link>
				</div>

				<!-- Text Editors -->
				<div class="box tutorial-card">
					<h2 class="title is-4">
						<router-link to="/tutorials/getting-started/text-editors">
							Text Editors
						</router-link>
					</h2>
					<div class="tags mb-4">
						<span class="tag is-info">Beginner</span>
						<span class="tag is-light">20 mins</span>
						<span class="tag is-success">Practice</span>
					</div>
					<p>
						Learn about different code editors and set up VS Code for web
						development.
					</p>
					<router-link
						to="/tutorials/getting-started/text-editors"
						class="button is-primary is-outlined mt-4"
					>
						Start Tutorial
					</router-link>
				</div>

				<!-- Browser Tools -->
				<div class="box tutorial-card">
					<h2 class="title is-4">
						<router-link to="/tutorials/getting-started/browser-tools">
							Browser Developer Tools
						</router-link>
					</h2>
					<div class="tags mb-4">
						<span class="tag is-info">Beginner</span>
						<span class="tag is-light">30 mins</span>
						<span class="tag is-success">Practice</span>
					</div>
					<p>
						Master the essential browser tools for inspecting, debugging, and
						testing web pages.
					</p>
					<router-link
						to="/tutorials/getting-started/browser-tools"
						class="button is-primary is-outlined mt-4"
					>
						Start Tutorial
					</router-link>
				</div>

				<!-- Domain & Hosting -->
				<div class="box tutorial-card">
					<h2 class="title is-4">
						<router-link to="/tutorials/getting-started/domain-hosting">
							Domain Names & Hosting
						</router-link>
					</h2>
					<div class="tags mb-4">
						<span class="tag is-info">Beginner</span>
						<span class="tag is-light">45 mins</span>
						<span class="tag is-warning">Project</span>
					</div>
					<p>Learn how to register domains and host your websites online.</p>
					<router-link
						to="/tutorials/getting-started/domain-hosting"
						class="button is-primary is-outlined mt-4"
					>
						Start Tutorial
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import '@/assets/styles/tutorials.css';
import { useHead } from '@vueuse/head';

useHead({
	title: 'Getting Started - GraphitEdge Tutorials',
	meta: [
		{
			name: 'description',
			content: 'Essential concepts and tools for web development',
		},
	],
});
</script>
