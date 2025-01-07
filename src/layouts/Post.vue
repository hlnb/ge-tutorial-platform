<template>
	<article class="blog-post">
		<h1>{{ frontmatter.title }}</h1>
		<div class="post-meta">
			<time :datetime="frontmatter.date">
				{{ formatDate(frontmatter.date) }}
			</time>
			<span class="author" v-if="frontmatter.author">
				by {{ frontmatter.author }}
			</span>
		</div>
		<div class="content">
			<slot />
			<!-- This is where your markdown content will be rendered -->
		</div>
	</article>
</template>

<script setup>
import { useHead } from '@vueuse/head'; // Make sure to install @vueuse/head

const props = defineProps({
	frontmatter: {
		type: Object,
		required: true,
	},
});

// Add SEO metadata
useHead({
	title: `${props.frontmatter.title} | Your Site Name`,
	meta: [
		{
			name: 'description',
			content: props.frontmatter.description,
		},
		{
			name: 'keywords',
			content: props.frontmatter.keywords,
		},
		// Open Graph tags for social sharing
		{
			property: 'og:title',
			content: props.frontmatter.title,
		},
		{
			property: 'og:description',
			content: props.frontmatter.description,
		},
		{
			name: 'author',
			content: props.frontmatter.author,
		},
	],
});
</script>

<style scoped>
.blog-post {
	max-width: 800px;
	margin: 0 auto;
	padding: 2rem;
}

.post-meta {
	color: var(--text-muted);
	margin-bottom: 2rem;
}

.post-meta time {
	margin-right: 1rem;
}

/* Add your other styles here */
</style>
