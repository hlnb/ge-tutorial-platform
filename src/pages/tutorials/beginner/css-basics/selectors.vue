<script setup>
import TutorialNavigation from '@/components/TutorialNavigation.vue';
import CodeMirror from '@/components/CodeMirror.vue';
import { format } from 'date-fns';

const frontmatter = {
	title: 'CSS Selectors & Properties',
	date: '2024-03-20',
	author: 'Helen Burgess',
	description: 'Learn how to select HTML elements and apply CSS properties',
	tags: ['CSS', 'Selectors', 'Properties', 'Styling'],
	duration: '25 minutes',
	difficulty: 'beginner',
};
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
					<a href="#" aria-current="page">Selectors & Properties</a>
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

		<TutorialNavigation
			prev="css-basics-introduction"
			next="css-basics-colors"
		/>
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
