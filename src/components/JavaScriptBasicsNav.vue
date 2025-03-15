<template>
	<div class="tutorial-nav">
			<h3 class="title is-5">
			<span class="js-logo-container">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 630 630"
					class="js-logo"
				>
					<rect width="630" height="630" fill="#f7df1e" />
					<path
						d="m 165.65,526.47375 48.2125,-29.1775 C 223.16375,513.7875 231.625,527.74 251.92,527.74 c 19.45375,0 31.71875,-7.60975 31.71875,-37.21 l 0,-201.3 59.20375,0 0,202.1375 c 0,61.32 -35.94375,89.23125 -88.385,89.23125 -47.36125,0 -74.8525,-24.52875 -88.8075,-54.13"
						fill="#000000"
					/>
					<path
						d="m 375,520.13 48.20625,-27.91125 c 12.69,20.72375 29.1825,35.9475 58.36125,35.9475 24.53125,0 40.17375,-12.26475 40.17375,-29.18125 0,-20.29875 -16.06875,-27.48875 -43.135,-39.32625 l -14.7975,-6.3475 c -42.715,-18.18125 -71.05,-41.0175 -71.05,-89.2275 0,-44.40375 33.83125,-78.2375 86.695,-78.2375 37.6375,0 64.7025,13.11125 84.15375,47.36625 l -46.09625,29.60125 c -10.15,-18.1825 -21.1425,-25.37125 -38.0575,-25.37125 -17.33875,0 -28.335,10.995 -28.335,25.37125 0,17.7625 10.99625,24.9525 36.3675,35.94875 l 14.8,6.3425 c 50.325,21.56875 78.66,43.5575 78.66,93.03375 0,53.2875 -41.86625,82.465 -98.11,82.465 -54.97625,0 -90.5,-26.2175 -107.83625,-60.47375"
						fill="#000000"
					/>
				</svg>
			</span>
		JavaScript Basics</h3>


			<aside class="menu tutorial-nav">
					<ul class="menu-list">
					<li>
						<router-link to="/tutorials/javascript-basics/">
							<i class="fas fa-home"></i> Overview
						</router-link>
					</li>
					<li>
						<router-link to="/tutorials/javascript-basics/introduction">
							<i class="fas fa-flag"></i> Introduction
						</router-link>
					</li>
					<li>
						<router-link to="/tutorials/javascript-basics/variables-data-types">
							<i class="fas fa-cube"></i> Variables & Data Types
						</router-link>
					</li>
					<li>
						<router-link to="/tutorials/javascript-basics/operators">
							<i class="fas fa-calculator"></i> Operators & Expressions
						</router-link>
					</li>
					<li>
						<router-link to="/tutorials/javascript-basics/conditionals">
							<i class="fas fa-code-branch"></i> Control Flow
						</router-link>
					</li>
					<li>
						<router-link to="/tutorials/javascript-basics/loops">
							<i class="fas fa-sync"></i> Loops
						</router-link>
					</li>
					<li>
						<router-link to="/tutorials/javascript-basics/functions">
							<i class="fas fa-cogs"></i> Functions
						</router-link>
					</li>
					<li>
						<router-link to="/tutorials/javascript-basics/dom">
							<i class="fas fa-sitemap"></i> DOM Manipulation
						</router-link>
					</li>
					<li>
						<router-link to="/tutorials/javascript-basics/events">
							<i class="fas fa-bolt"></i> Events
						</router-link>
					</li>
				</ul>
				<div class="sidebar-footer">
					<router-link to="/tutorials" class="button is-small is-fullwidth">
						<i class="fas fa-arrow-left"></i> All Tutorials
					</router-link>
					<router-link to="/progress" class="button is-small is-fullwidth mt-2">
						<i class="fas fa-chart-line"></i> My Progress
					</router-link>
				</div>
			</aside>
</div>
</template>

<script setup>
// No special setup needed
</script>

<style scoped>

.tutorial-nav {
	padding: 1.5rem;
	background-color: white;
	border-radius: 6px;
	box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
}

.js-logo-container {
	width: 40px;
	height: 40px;
	margin-right: 10px;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: visible;
}

.js-logo {
	width: 100%;
	height: 100%;
	display: block;
}


.menu-list a {
	border-radius: 4px;
	padding: 0.75rem 1rem;
	margin-bottom: 0.5rem;
	color: #4a4a4a;
	transition: all 0.2s ease;
}

.menu-list a:hover {
	background-color: #f5f5f5;
}

.menu-list a.is-active {
	background-color: #f0db4f;
	color: white;
	font-weight: 600;
}

.menu-list a.is-next {
	background-color: #fff5f2;
	border-left: 3px solid #f0db4f;
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
