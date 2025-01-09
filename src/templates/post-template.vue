<template>
	<MainLayout>
		<div class="container">
			<section class="section">
				<div class="content">
					<article class="blog-post" v-if="frontmatter">
						<h1>{{ frontmatter.title }}</h1>
						<div class="meta">
							<span class="date">{{
								new Date(frontmatter.date).toLocaleDateString()
							}}</span>
							<span class="tags" v-if="frontmatter.tags?.length">
								Tags: {{ frontmatter.tags.join(', ') }}
							</span>
						</div>

						<div class="content">
							<!-- Your post content goes here -->
							<p>Your content here...</p>

							<!-- Optional call-to-action section -->
							<div class="cta-box">
								<h3>Ready to learn more?</h3>
								<p>
									<i class="fas fa-envelope"></i> Join The Graphite Journal
									Newsletter for web development insights.
								</p>
								<BlogSignup />
							</div>
						</div>
					</article>
					<div v-else>
						<p>Loading post...</p>
					</div>
				</div>
			</section>
		</div>
	</MainLayout>
</template>

<script>
// Update these values for each new post
export const frontmatter = {
	title: 'Your Post Title',
	date: '2024-00-00', // Update with actual date
	description: 'A brief description of your post (used for SEO and previews)',
	tags: ['Tag1', 'Tag2'], // Add relevant tags
	author: 'Your Name', // Optional
	image: '/path/to/image.jpg', // Optional featured image
};
</script>

<script setup>
import { ref, onMounted } from 'vue';
import MainLayout from '../../components/MainLayout.vue';
import { useHead } from '@vueuse/head';
import BlogSignup from '../../components/BlogSignup.vue';

const postData = ref(frontmatter);

onMounted(() => {
	console.log('Post mounted:', postData.value.title);
});

useHead({
	title: postData.value.title,
	meta: [
		{ name: 'description', content: postData.value.description },
		{ property: 'og:title', content: postData.value.title },
		{ property: 'og:description', content: postData.value.description },
		// Add Open Graph image if available
		...(postData.value.image
			? [{ property: 'og:image', content: postData.value.image }]
			: []),
	],
});
</script>

<style scoped>
.blog-post {
	max-width: 80vw;
	margin: 0 auto;
	padding: 2rem;
}

.meta {
	margin: 1rem 0 2rem;
	color: #666;
	font-size: 0.9rem;
}

.meta .tags {
	margin-left: 1rem;
}

.content {
	line-height: 1.6;
	font-size: 1.1rem;
}

h1 {
	font-size: 2.5rem;
	margin-bottom: 1rem;
	color: var(--color-red-berry);
}

h2 {
	font-size: 1.8rem;
	margin: 2rem 0 1rem;
	color: var(--color-mine-shaft);
}

.cta-box {
	background-color: var(--color-snow);
	border-radius: 8px;
	padding: 2rem;
	margin: 2rem 0;
	text-align: center;
}

.cta-box h3 {
	color: var(--color-red-berry);
	margin-bottom: 1rem;
}

.cta-box i {
	color: var(--color-red-berry);
	margin-right: 0.5rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
	.blog-post {
		padding: 1rem;
	}

	h1 {
		font-size: 2rem;
	}

	h2 {
		font-size: 1.5rem;
	}
}
</style>
