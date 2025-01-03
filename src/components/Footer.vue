<template>
	<footer class="footer is-primary">
		<div class="container">
			<div class="columns">
				<!-- Logo and About -->
				<div class="column is-4">
					<img
						src="../assets/logo.svg"
						alt="GraphitEdge Logo"
						class="footer-logo"
					/>
					<p class="mt-4">
						Helping aspiring developers master web technologies through hands-on
						learning.
					</p>
				</div>

				<!-- Navigation -->
				<div class="column is-2 is-offset-1">
					<h3 class="footer-heading">Sitemap</h3>
					<ul class="footer-links">
						<li><router-link to="/">Home</router-link></li>
						<li><router-link to="/tutorials">Tutorials</router-link></li>
						<li><router-link to="/contact">Contact</router-link></li>
					</ul>
				</div>

				<!-- Legal -->
				<div class="column is-4 is-offset-1">
					<h3 class="footer-heading">Legal</h3>
					<ul class="footer-links">
						<li><router-link to="/privacy">Privacy Policy</router-link></li>
						<li><router-link to="/terms">Terms of Use</router-link></li>
					</ul>
				</div>
			</div>

			<!-- Copyright -->
			<div class="copyright has-text-centered mt-6">
				<p>&copy; 2015-{{ currentYear }} GraphitEdge. All rights reserved.</p>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
	background-color: var(--color-light-gray);
	color: var(--color-mine-shaft-2);
	padding: 4rem 1.5rem;
	margin-top: 3rem;
}

.footer-logo {
	max-width: 200px;
	height: auto;
}

.footer-heading {
	color: var(--color-mine-shaft-2);
	font-size: 1.2rem;
	font-weight: bold;
	margin-bottom: 1.5rem;
}

.footer-links {
	list-style: none;
	padding: 0;
}

.footer-links li {
	margin-bottom: 0.75rem;
}

.footer-links a {
	color: var(--color-mine-shaft-2);
	text-decoration: none;
	transition: color 0.3s ease;
}

.footer-links a:hover {
	color: var(--color-primary);
}

.copyright {
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	padding-top: 2rem;
	color: var(--color-mine-shaft-2);
}
</style>
