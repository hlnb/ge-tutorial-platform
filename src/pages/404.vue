<template>
	<div class="container">
		<section class="section">
			<div class="content has-text-centered">
				<h1 class="title">404 - Page Not Found</h1>
				<p class="subtitle">
					Sorry, we couldn't find the page you're looking for.
				</p>
				<router-link to="/" class="button is-primary">
					Return Home
				</router-link>
			</div>
		</section>
	</div>
</template>

<script setup>
import { useHead } from '@vueuse/head';

const frontmatter = {
	title: '404 - Page Not Found',
	description: 'Page not found',
};

useHead({
	title: frontmatter.title,
	meta: [{ name: 'description', content: frontmatter.description }],
});
</script>
