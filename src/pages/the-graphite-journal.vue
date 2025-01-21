<template>
	<div class="journal-hero">
		<div class="hero-content">
			<h1>The Graphite Journal</h1>
			<p class="hero-intro">
				Insights and tutorials about web development, design, and building
				digital products.
			</p>
			<div class="hero-cta">
				<p>Don't miss out on the latest insights and tutorials.</p>
				<BlogSignup />
			</div>
		</div>
		<div class="hero-pattern"></div>
	</div>

	<div class="articles-grid">
		<article v-for="post in publishedPosts" :key="post.slug" class="box">
			<div class="article-image">
				<router-link :to="`/posts/${post.slug}`">
					<img
						:src="`/src/assets/posts/${post.slug}.svg`"
						:alt="`Illustration for ${post.title}`"
						class="post-illustration"
					/>
				</router-link>
			</div>
			<div class="article-content">
				<h2 class="title is-4">
					<router-link :to="`/posts/${post.slug}`">
						{{ post.title }}
					</router-link>
				</h2>
				<p class="description">{{ post.description }}</p>
				<div class="meta">
					<span class="tag is-light">
						<i class="far fa-clock"></i>
						{{ formatDate(post.publishDate) }}
					</span>
					<span v-if="post.readingTime" class="tag is-light">
						<i class="far fa-file-alt"></i>
						{{ post.readingTime }}
					</span>
				</div>
				<div class="tags mt-2">
					<span
						v-for="tag in post.tags"
						:key="tag"
						class="tag is-info is-light"
					>
						{{ tag }}
					</span>
				</div>
			</div>
		</article>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { format } from 'date-fns';
import BlogSignup from '@/components/BlogSignup.vue';

const publishedPosts = ref([
	{
		title: 'DNS and Web Browsing',
		slug: 'dns-web-browsing',
		description: 'Understanding how DNS works and its role in web browsing',
		publishDate: '2025-01-29T09:00:00Z',
		readingTime: '5 min',
		tags: ['DNS', 'Web', 'Networking'],
		status: 'published',
	},
	// Add other posts here as needed
	{
		title: 'Internet Everywhere: A Guide to Modern Web Development',
		slug: 'internet-everywhere',
		description:
			'Explore how the internet has evolved and what it means for modern web development.',
		publishDate: '2025-01-14T09:00:00Z',
		readingTime: '5 min',
		tags: ['web development', 'internet', 'technology', 'modern web'],
		status: 'published',
	},
	{
		title: 'Work with clients',
		slug: 'work-with-clients',
		description: 'How to work with clients and get the best results',
		publishDate: '2025-01-07T09:00:00Z',
		readingTime: '5 min',
		tags: ['clients', 'work', 'business'],
		status: 'published',
	},
]);

function formatDate(date) {
	return format(new Date(date), 'MMMM d, yyyy');
}

onMounted(async () => {
	try {
		const response = await fetch('/api/posts/published');
		if (!response.ok) {
			console.warn('API not available, using static posts');
			return;
		}
		const posts = await response.json();
		// Merge API posts with static posts, avoiding duplicates
		const apiPosts = posts.filter(
			(post) => !publishedPosts.value.find((p) => p.slug === post.slug),
		);
		publishedPosts.value = [...publishedPosts.value, ...apiPosts];
	} catch (error) {
		console.warn('Using static posts:', error);
	}
});
</script>

<style scoped>
.journal-hero {
	background-color: var(--color-mine-shaft);
	height: 45vh;
	color: var(--color-white);
	text-align: center;
	padding: 10vh 0;
}
.journal-hero h1 {
	font-size: 2.5rem;
	margin-bottom: 1rem;
}
.journal-hero p.hero-intro {
	font-size: 1.2rem;
	padding-bottom: 2rem;
}
.journal-hero .hero-cta {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
}

.articles-grid {
	display: grid;
	gap: 1.5rem;
	margin-top: 2rem;
}

.article-image {
	margin-bottom: 1rem;
	border-radius: 6px;
	overflow: hidden;
}

.post-illustration {
	width: 100%;
	height: 350px;
	object-fit: cover;
	transition: transform 0.3s ease;
}

.article-image:hover .post-illustration {
	transform: scale(1.05);
}

.article-content {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.meta {
	display: flex;
	gap: 0.5rem;
}

.tag i {
	margin-right: 0.3rem;
}

.description {
	color: #4a4a4a;
}

@media (min-width: 768px) {
	.articles-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}
</style>
