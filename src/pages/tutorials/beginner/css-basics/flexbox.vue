<script setup>
import { ref, computed, inject, onMounted } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import { usePageSections } from '@/composables/usePageSections';

const sections = [
	{
		id: 'flexbox-basics',
		title: 'Flexbox Basics',
		subsections: [
			{ id: 'flex-container', title: 'Flex Container' },
			{ id: 'flex-items', title: 'Flex Items' },
		],
	},
	{
		id: 'flex-properties',
		title: 'Flex Properties',
		subsections: [
			{ id: 'flex-direction', title: 'Flex Direction' },
			{ id: 'justify-content', title: 'Justify Content' },
			{ id: 'align-items', title: 'Align Items' },
		],
	},
	{
		id: 'practical-examples',
		title: 'Practical Examples',
		subsections: [
			{ id: 'navigation', title: 'Navigation Bar' },
			{ id: 'card-layout', title: 'Card Layout' },
		],
	},
];

const { pageSections } = usePageSections(sections);
</script>

<template>
	<div class="content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link to="/tutorials/beginner/css-basics"
						>CSS Basics</router-link
					>
				</li>
				<li class="is-active">
					<a href="#" aria-current="page">Flexbox Basics</a>
				</li>
			</ul>
		</nav>

		<header class="tutorial-header">
			<div class="tags mb-4">
				<span class="tag is-info">{{ frontmatter.difficulty }}</span>
				<span class="tag is-warning">{{ frontmatter.duration }}</span>
				<span v-for="tag in frontmatter.tags" :key="tag" class="tag is-light">{{
					tag
				}}</span>
			</div>

			<h1 class="title is-1">
				<i class="fa-brands fa-css3 css-icon"></i>
				{{ frontmatter.title }}
			</h1>
			<p class="subtitle is-4">{{ frontmatter.description }}</p>
		</header>

		<!-- Content to be added -->
		<div class="notification is-info is-light">
			This tutorial is under construction. Check back soon!
		</div>

		<TutorialNavigation prev="css-basics-layout" next="css-basics-responsive" />
	</div>
</template>

<style scoped>
.css-icon {
	color: #264de4;
	margin-right: 0.5rem;
}

.tutorial-header {
	margin-bottom: 3rem;
	padding-bottom: 2rem;
	border-bottom: 1px solid var(--color-border);
}
</style>
