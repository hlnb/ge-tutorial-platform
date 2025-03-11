<template>
	<div class="sidebar-nav">
		<div class="sidebar-header">
			<h3 class="title is-5"><i class="fab fa-js"></i> JavaScript Basics</h3>
		</div>

		<div class="sidebar-menu">
			<ul class="menu-list">
				<li>
					<router-link to="/tutorials/beginner/javascript-basics">
						<i class="fas fa-home"></i> Overview
					</router-link>
				</li>
				<li>
					<router-link to="/tutorials/beginner/javascript-basics/introduction">
						<i class="fas fa-rocket"></i> Introduction
					</router-link>
				</li>
				<li>
					<router-link
						to="/tutorials/beginner/javascript-basics/variables-data-types"
					>
						<i class="fas fa-box"></i> Variables & Data Types
					</router-link>
				</li>
				<li>
					<router-link to="/tutorials/beginner/javascript-basics/operators">
						<i class="fas fa-calculator"></i> Operators & Expressions
					</router-link>
				</li>
				<li>
					<router-link to="/tutorials/beginner/javascript-basics/conditionals">
						<i class="fas fa-code-branch"></i> Conditionals & Logic
					</router-link>
				</li>
				<li>
					<router-link to="/tutorials/beginner/javascript-basics/loops">
						<i class="fas fa-redo"></i> Loops
					</router-link>
				</li>
				<li>
					<router-link to="/tutorials/beginner/javascript-basics/functions">
						<i class="fas fa-cogs"></i> Functions
					</router-link>
				</li>
				<li>
					<router-link
						to="/tutorials/beginner/javascript-basics/dom-manipulation"
					>
						<i class="fas fa-sitemap"></i> DOM Manipulation
					</router-link>
				</li>
				<li>
					<router-link to="/tutorials/beginner/javascript-basics/events">
						<i class="fas fa-mouse-pointer"></i> Events
					</router-link>
				</li>
			</ul>
		</div>

		<div class="sidebar-footer">
			<div class="buttons">
				<router-link to="/tutorials" class="button is-small is-outlined">
					<i class="fas fa-arrow-left"></i> All Tutorials
				</router-link>
				<router-link to="/my-progress" class="button is-small is-outlined">
					<i class="fas fa-chart-line"></i> My Progress
				</router-link>
			</div>
		</div>
	</div>
</template>

<script setup>
// No special setup needed
</script>

<style scoped>
.sidebar-nav {
	display: flex;
	flex-direction: column;
	height: 100%;
}

.sidebar-header {
	padding: 1rem;
	border-bottom: 1px solid #dbdbdb;
}

.sidebar-menu {
	flex-grow: 1;
	overflow-y: auto;
	padding: 1rem 0;
}

.menu-list {
	list-style: none;
	margin: 0;
	padding: 0;
}

.menu-list li {
	margin-bottom: 0.5rem;
}

.menu-list a {
	display: flex;
	align-items: center;
	padding: 0.75rem 1rem;
	color: #4a4a4a;
	text-decoration: none;
	border-radius: 4px;
	transition: background-color 0.2s ease;
}

.menu-list a:hover {
	background-color: #f5f5f5;
}

.menu-list a.router-link-active {
	background-color: #f0f8ff;
	color: #3273dc;
	font-weight: bold;
}

.menu-list a i {
	margin-right: 0.5rem;
	width: 20px;
	text-align: center;
}

.sidebar-footer {
	padding: 1rem;
	border-top: 1px solid #dbdbdb;
}

.sidebar-footer .buttons {
	display: flex;
	justify-content: space-between;
}
</style>
