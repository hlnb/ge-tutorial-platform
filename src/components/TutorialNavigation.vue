<template>
	<nav class="tutorial-navigation" aria-label="Tutorial Navigation">
		<div class="box">
			<h2 class="title is-4">
				<i class="fas fa-book section-icon"></i> Tutorial Sections
			</h2>
			<div class="menu">
				<ul class="menu-list">
					<li>
						<router-link
							to="introduction"
							:class="{ 'is-active': isActive('introduction') }"
						>
							Introduction
						</router-link>
					</li>
					<li>
						<router-link
							to="html-first-page"
							:class="{ 'is-active': isActive('html-first-page') }"
						>
							Your First HTML Page
						</router-link>
					</li>
					<li>
						<router-link
							to="html-text"
							:class="{ 'is-active': isActive('html-text') }"
						>
							Working with Text
						</router-link>
					</li>
					<li>
						<router-link
							to="html-links"
							:class="{ 'is-active': isActive('html-links') }"
						>
							Links & Navigation
						</router-link>
					</li>
					<li>
						<router-link
							to="html-images"
							:class="{ 'is-active': isActive('html-images') }"
						>
							Images
						</router-link>
					</li>
					<li>
						<router-link
							to="html-doc-structure"
							:class="{ 'is-active': isActive('html-doc-structure') }"
						>
							Document Structure
						</router-link>
					</li>
					<li>
						<router-link
							to="html-forms"
							:class="{ 'is-active': isActive('html-forms') }"
						>
							Forms
						</router-link>
					</li>
					<li>
						<router-link
							to="html-emmet"
							:class="{ 'is-active': isActive('html-emmet') }"
						>
							Emmet Workflow
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'TutorialNavigation',
	methods: {
		isActive(route) {
			return this.$route.path.includes(route);
		},
	},
};
</script>

<style scoped>
.tutorial-navigation {
	position: sticky;
	top: 20px;
}

.menu-list a {
	display: block;
	padding: 0.5em 0.75em;
	text-decoration: none;
	border-radius: 4px;
}

.menu-list a:hover {
	background-color: #f5f5f5;
}

.menu-list a.is-active {
	background-color: #3273dc;
	color: white;
}

.section-icon {
	margin-right: 0.5rem;
}
</style>
