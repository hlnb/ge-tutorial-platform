<template>
	<footer class="footer is-primary">
		<div class="container">
			<div class="columns">
				<!-- Main Content -->
				<div class="column is-4">
					<img
						src="../assets/logo.svg"
						alt="GraphitEdge Logo"
						class="footer-logo"
					/>
					<h3 class="footer-tagline mt-4">Web Development Isn't Just Code.</h3>
					<p class="mt-3">
						Demystifying the full process from DNS to SEO, design to deployment.
					</p>
					<p class="mt-3">
						Learn how the internet works, how to build websites from scratch,
						and how to launch them successfully—without the confusion.
					</p>
					<p class="mt-3">
						Join the community and level up your web development skills!
					</p>
				</div>

				<!-- Quick Links -->
				<div class="column is-2 is-offset-1">
					<h3 class="footer-heading">Quick Links</h3>
					<ul class="footer-links">
						<li><router-link to="/about">About GraphiteEdge</router-link></li>
						<li><router-link to="/tutorials">Tutorials</router-link></li>
						<li>
							<router-link to="/the-graphite-journal"
								>The Graphite Journal</router-link
							>
						</li>
						<li><router-link to="/contact">Contact</router-link></li>
						<li><router-link to="/privacy">Privacy Policy</router-link></li>
						<li><router-link to="/terms">Terms & Conditions</router-link></li>
					</ul>
				</div>

				<!-- Contact & Social -->
				<div class="column is-2">
					<h3 class="footer-heading">Contact</h3>
					<p class="footer-contact">hello@graphitedge.com.au</p>
					<h3 class="footer-heading mt-4">Follow Us</h3>
					<div class="social-links-container">
						<div class="social-links">
							<div class="social-row">
								<a
									href="https://github.com/hlnb"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
								>
									<i class="fab fa-github"></i>
								</a>
								<a
									href="https://www.linkedin.com/company/graphitedge/"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="LinkedIn"
								>
									<i class="fab fa-linkedin"></i>
								</a>
								<a
									href="https://www.facebook.com/GraphitEdge"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Facebook"
								>
									<i class="fab fa-facebook"></i>
								</a>
							</div>
							<div class="social-row">
								<a
									href="https://www.instagram.com/graphitedge_au"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Instagram"
								>
									<i class="fab fa-instagram"></i>
								</a>
								<a
									href="https://mastodon.au/@hlnbee"
									target="_blank"
									rel="me noopener noreferrer"
									aria-label="Mastodon"
								>
									<i class="fab fa-mastodon"></i>
								</a>
								<a
									href="https://bsky.app/profile/graphitedge-au.bsky.social"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Bluesky"
								>
									<i class="fas fa-cloud"></i>
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Newsletter Signup -->
				<div class="column is-3">
					<h3 class="footer-heading">Never Miss a New Tutorial!</h3>
					<p class="mt-3">
						Want to be the first to know when new tutorials drop? Join our
						GraphiteEdge Insider Newsletter.
					</p>
					<NewsletterSignup />
				</div>
			</div>

			<!-- Copyright -->
			<div class="copyright has-text-centered mt-6">
				<p>&copy; 2015-{{ currentYear }} GraphiteEdge. All rights reserved.</p>
			</div>
		</div>
	</footer>
</template>

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

.footer-tagline {
	font-size: 1.25rem;
	font-weight: bold;
	color: var(--color-mine-shaft-2);
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

.footer-contact {
	color: var(--color-mine-shaft-2);
}

.social-links-container {
	display: flex;
	justify-content: center;
	margin: 1rem 0;
}

.social-links {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.social-row {
	display: flex;
	gap: 2rem;
	justify-content: center;
}

.social-links a {
	color: var(--color-mine-shaft-2);
	font-size: 1.5rem;
	transition: color 0.3s ease;
	padding: 0.5rem;
}

.social-links a:hover {
	color: var(--color-primary);
}

/* Add responsive design for smaller screens */
@media (max-width: 768px) {
	.social-row {
		gap: 1.5rem;
	}

	.social-links a {
		font-size: 1.25rem;
	}
}

.newsletter-benefits {
	list-style: none;
	padding: 0;
	margin-top: 1rem;
}

.newsletter-benefits li {
	margin-bottom: 0.5rem;
	position: relative;
	padding-left: 1.5rem;
}

.newsletter-benefits li::before {
	content: '•';
	position: absolute;
	left: 0;
	color: var(--color-primary);
}

.copyright {
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	padding-top: 2rem;
	color: var(--color-mine-shaft-2);
}
</style>

<script setup>
import { computed } from 'vue';
import NewsletterSignup from './NewsletterSignup.vue';

const currentYear = computed(() => new Date().getFullYear());
</script>
