<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<router-link class="navbar-item" to="/">
				<img src="../assets/logo.svg" alt="GraphitEdge Logo" />
			</router-link>
		</div>

		<div class="navbar-menu">
			<div class="navbar-end">
				<router-link class="navbar-item has-text-dark" to="/tutorials">
					Tutorials
				</router-link>
				<router-link class="navbar-item has-text-dark" to="/contact">
					Contact
				</router-link>
			</div>
		</div>
	</nav>
</template>

<style>
@import '../assets/styles/main.css';

.navbar {
	padding: 1rem;
	background-color: var(--color-light-gray) !important;
	border-bottom: 1px solid var(--color-slate-gray) !important;
}

.navbar-brand {
	font-size: 1.5rem;
	font-weight: bold;
}

.navbar-menu {
	display: flex;
	justify-content: flex-end;
}

.navbar-item {
	text-decoration: none;
	padding: 0.5rem 1rem;
}

.navbar-item:hover {
	color: var(--color-mine-shaft-2) !important;
}
</style>
