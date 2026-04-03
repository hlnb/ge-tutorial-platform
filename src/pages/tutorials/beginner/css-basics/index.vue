<script setup>
import '@/assets/styles/tutorials.css';
import { computed, inject, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import TutorialCard from '@/components/tutorials/TutorialCard.vue';
import { sections, tutorials } from '@/data/tutorials';

const pageSections = inject('pageSections');
const sectionMeta = sections.find((section) => section.id === 'css-basics');

const sectionTutorials = computed(() => {
	return tutorials
		.filter(
			(tutorial) =>
				tutorial.section === 'css-basics' && tutorial.slug !== sectionMeta?.slug,
		)
		.sort((a, b) => a.stage - b.stage);
});

onMounted(() => {
	pageSections.value = [
		{ id: 'introduction', title: 'Introduction to CSS' },
		{ id: 'how-css-works', title: 'How CSS Works' },
		{ id: 'adding-css', title: 'Adding CSS to HTML' },
		{ id: 'next-steps', title: 'Next Steps' },
	];
});

useHead({
	title: `${sectionMeta?.introCopy?.title || 'CSS Basics'} - GraphiteEdge Tutorials`,
	meta: [
		{
			name: 'description',
			content:
				sectionMeta?.introCopy?.summary ||
				'Learn how to style pages with selectors, layout, colour, and responsive design.',
		},
	],
});
</script>

<template>
	<div class="content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/"
						><i class="fa-solid fa-house mr-2"></i> Home</router-link
					>
				</li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li class="is-active">
					<a href="#" aria-current="page">CSS Basics</a>
				</li>
			</ul>
		</nav>
		<div class="tags mb-4">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">Series</span>
		</div>

		<h1 class="title is-1">
			<i class="fa-brands fa-css css-icon"></i>
			{{ sectionMeta?.introCopy?.title || 'CSS Basics' }}
		</h1>
		<p class="subtitle is-4 mb-6">
			{{
				sectionMeta?.introCopy?.summary ||
				'Learn how to style pages with selectors, layout, colour, and responsive design.'
			}}
		</p>

		<div class="box box-info mb-6">
			<h3 class="title is-5 mb-2">What You'll Learn</h3>
			<ul>
				<li>Understanding CSS selectors and properties</li>
				<li>Working with colors and typography</li>
				<li>Mastering layouts with CSS</li>
				<li>Creating responsive designs</li>
				<li>Modern CSS techniques and best practices</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p><strong>Total Course Duration:</strong> Approximately 3 hours</p>
		</div>

		<div class="tutorials-grid">
			<TutorialCard
				v-for="tutorial in sectionTutorials"
				:key="tutorial.id"
				:tutorial="tutorial"
			/>
		</div>

		<div class="box box-info mt-6">
			<h3 class="title is-5 mb-2">Prerequisites</h3>
			<ul>
				<li>Basic computer skills</li>
				<li>Text editor installed (VS Code recommended)</li>
				<li>Web browser (Chrome or Firefox recommended)</li>
				<li>Completion of HTML Basics tutorials</li>
			</ul>
		</div>

		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-graduation-cap section-icon"></i> Course Projects
			</h2>

			<p>
				Throughout this tutorial series, you'll style two complete websites:
			</p>

			<div class="projects mt-4">
				<div class="notification is-primary is-light mb-4">
					<h3 class="title is-4">
						<i class="fas fa-utensils mr-2"></i> Project 1: Black Swan Bistro
					</h3>
					<p>
						Style the restaurant website from our HTML tutorials with beautiful
						CSS layouts and designs.
					</p>
					<div class="buttons mt-3">
						<a
							href="/projects/css-basics/black-swan-bistro/index.html"
							target="_blank"
							class="button is-primary"
						>
							<span class="icon"><i class="fas fa-external-link-alt"></i></span>
							<span>View Styled CSS Project</span>
						</a>
						<a
							href="/projects/css-basics/black-swan-bistro/README.md"
							target="_blank"
							class="button is-light"
						>
							<span class="icon"><i class="fas fa-book"></i></span>
							<span>Project Documentation</span>
						</a>
					</div>
				</div>

				<div class="notification is-link is-light">
					<h3 class="title is-4">
						<i class="fas fa-island-tropical mr-2"></i> Project 2: Rotto Rocks
					</h3>
					<p>
						Transform the tourism website with responsive designs and modern CSS
						techniques.
					</p>
					<div class="buttons mt-3">
						<a
							href="/projects/css-basics/rotto-rocks/index.html"
							target="_blank"
							class="button is-link"
						>
							<span class="icon"><i class="fas fa-external-link-alt"></i></span>
							<span>View Styled CSS Project</span>
						</a>
						<a
							href="/projects/css-basics/rotto-rocks/README.md"
							target="_blank"
							class="button is-light"
						>
							<span class="icon"><i class="fas fa-book"></i></span>
							<span>Project Documentation</span>
						</a>
					</div>
				</div>

				<div class="notification is-warning is-light mt-4">
					<p>
						<strong>Note:</strong> Each tutorial builds upon the HTML projects,
						adding styles progressively as you learn new CSS concepts.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.css-icon {
	color: rebeccapurple;
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
	background: #3298dc;
	border-radius: 2px;
}

.section-group:not(:last-child) {
	padding-bottom: 2rem;
}
</style>
