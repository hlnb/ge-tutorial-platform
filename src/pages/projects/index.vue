<template>
	<div class="content">
		<h1 class="title is-1">
			<i class="fas fa-laptop-code"></i> Practice Projects
		</h1>

		<p class="subtitle">
			Apply what you've learned with these hands-on projects
		</p>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Learning Tip:</strong> The best way to improve your web
				development skills is through practice. These projects are designed to
				reinforce concepts from our tutorials and help you build a portfolio of
				work.
			</p>
		</div>

		<!-- HTML Projects -->
		<section class="project-category">
			<h2 class="title is-2"><i class="fas fa-code"></i> HTML Projects</h2>

			<div class="columns is-multiline">
				<!-- Personal Profile Project -->
				<div class="column is-one-third">
					<div class="card project-card">
						<div class="card-content">
							<p class="title is-4">Personal Profile Page</p>
							<p class="subtitle is-6">
								<span class="tag is-info">Beginner</span>
								<span class="tag is-warning">30 minutes</span>
							</p>
							<div class="content">
								Create a simple personal profile page with basic HTML structure.
								Practice using semantic HTML elements and document organization.
							</div>
						</div>
						<footer class="card-footer">
							<router-link
								:to="{ name: 'personal-profile' }"
								class="card-footer-item"
							>
								Start Project <i class="fas fa-arrow-right ml-2"></i>
							</router-link>
						</footer>
					</div>
				</div>

				<!-- Recipe Page Project -->
				<div class="column is-one-third">
					<div class="card project-card">
						<div class="card-content">
							<p class="title is-4">Recipe Page</p>
							<p class="subtitle is-6">
								<span class="tag is-info">Beginner</span>
								<span class="tag is-warning">45 minutes</span>
							</p>
							<div class="content">
								Build a page for your favorite recipe using HTML structure.
								Practice organizing content with lists, headings, and sections.
							</div>
						</div>
						<footer class="card-footer">
							<router-link
								:to="{ name: 'recipe-page' }"
								class="card-footer-item"
							>
								Start Project <i class="fas fa-arrow-right ml-2"></i>
							</router-link>
						</footer>
					</div>
				</div>

				<!-- Photo Gallery Project -->
				<div class="column is-one-third">
					<div class="card project-card">
						<div class="card-content">
							<p class="title is-4">Photo Gallery</p>
							<p class="subtitle is-6">
								<span class="tag is-info">Beginner</span>
								<span class="tag is-warning">60 minutes</span>
							</p>
							<div class="content">
								Build a simple photo gallery with images and captions. Practice
								working with the HTML image element and its attributes.
							</div>
						</div>
						<footer class="card-footer">
							<router-link
								:to="{ name: 'photo-gallery' }"
								class="card-footer-item"
							>
								Start Project <i class="fas fa-arrow-right ml-2"></i>
							</router-link>
						</footer>
					</div>
				</div>
			</div>
		</section>

		<!-- CSS Projects -->
		<section class="project-category">
			<h2 class="title is-2">
				<i class="fas fa-paint-brush"></i> CSS Projects
			</h2>

			<div class="columns is-multiline">
				<!-- Card Components Project -->
				<div class="column is-one-third">
					<div class="card project-card">
						<div class="card-content">
							<p class="title is-4">Card Components</p>
							<p class="subtitle is-6">
								<span class="tag is-info">Beginner</span>
								<span class="tag is-warning">90 minutes</span>
							</p>
							<div class="content">
								Create different card designs using CSS box model properties.
								Practice working with margins, padding, borders, and shadows.
							</div>
						</div>
						<footer class="card-footer">
							<router-link
								:to="{ name: 'card-components' }"
								class="card-footer-item"
							>
								Start Project <i class="fas fa-arrow-right ml-2"></i>
							</router-link>
						</footer>
					</div>
				</div>

				<!-- Selector Challenge Project -->
				<div class="column is-one-third">
					<div class="card project-card">
						<div class="card-content">
							<p class="title is-4">CSS Selector Challenge</p>
							<p class="subtitle is-6">
								<span class="tag is-info">Beginner</span>
								<span class="tag is-warning">60 minutes</span>
							</p>
							<div class="content">
								Practice using different CSS selectors to style elements without
								modifying the HTML structure. Master the art of targeting
								elements precisely.
							</div>
						</div>
						<footer class="card-footer">
							<router-link
								:to="{ name: 'selector-challenge' }"
								class="card-footer-item"
							>
								Start Project <i class="fas fa-arrow-right ml-2"></i>
							</router-link>
						</footer>
					</div>
				</div>
			</div>
		</section>

		<section class="mt-6">
			<h2 class="title is-3">
				<i class="fas fa-graduation-cap"></i> Learning Path
			</h2>
			<p>
				These projects are designed to complement our tutorials. For the best
				learning experience, we recommend:
			</p>
			<ol>
				<li>Complete the related tutorial</li>
				<li>Try the corresponding practice project</li>
				<li>Review the solution and learn from any challenges you faced</li>
				<li>Move on to the next tutorial in the learning path</li>
			</ol>

			<div class="notification is-success is-light mt-4">
				<p>
					<i class="fas fa-check-circle mr-2"></i>
					<strong>Pro Tip:</strong> Don't worry about making mistakes! The
					learning happens when you troubleshoot and solve problems on your own.
				</p>
			</div>
		</section>

		<section class="mt-6">
			<h2 class="title is-3">
				<i class="fas fa-question-circle"></i> Need Help?
			</h2>
			<p>If you get stuck on a project, try these resources:</p>
			<ul>
				<li>Review the related tutorial content</li>
				<li>Check out the example solutions provided in each project</li>
				<li>Use browser developer tools to debug your code</li>
				<li>Search for similar problems on MDN or Stack Overflow</li>
			</ul>
		</section>
	</div>
</template>

<script setup>
// No special setup needed for this page
</script>

<script>
// Frontmatter for the page
export default {
	frontmatter: {
		title: 'Practice Projects',
		description:
			"Apply what you've learned with these hands-on web development projects",
		lastUpdated: '2023-09-30',
	},
};
</script>

<style scoped>
.project-category {
	margin-top: 3rem;
	margin-bottom: 3rem;
}

.project-card {
	height: 100%;
	display: flex;
	flex-direction: column;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.card-content {
	flex-grow: 1;
}

.card-footer-item {
	background-color: #f5f5f5;
	transition: background-color 0.3s ease;
}

.card-footer-item:hover {
	background-color: #e8e8e8;
}
</style>
