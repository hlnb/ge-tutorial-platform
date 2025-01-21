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

	<div class="articles-container">
		<div class="articles-grid">
			<article v-for="post in paginatedPosts" :key="post.slug" class="box">
				<div class="article-image">
					<router-link :to="`/posts/${post.slug}`">
						<img
							:src="post.image"
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
	</div>

	<!-- Pagination -->
	<nav class="pagination is-centered mt-6" v-if="totalPages > 1">
		<ul class="pagination-list">
			<li v-for="page in totalPages" :key="page">
				<a
					class="pagination-link"
					:class="{ 'is-current': page === currentPage }"
					@click="changePage(page)"
				>
					{{ page }}
				</a>
			</li>
		</ul>
	</nav>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { format } from 'date-fns';
import BlogSignup from '@/components/BlogSignup.vue';

const publishedPosts = ref([
	{
		title: 'DNS and Web Browsing',
		slug: 'dns-web-browsing',
		description: 'Understanding how DNS works and its role in web browsing',
		publishDate: '2025-01-29T09:00:00Z',
		readingTime: '5 min',
		tags: ['DNS', 'Web', 'Networking', 'Technical'],
		status: 'scheduled',
		image: '/images/posts/dns-web-browsing.svg',
	},
	{
		title:
			'The Internet is Everywhere—But Do You Really Understand How It Works?',
		slug: 'internet-everywhere',
		description:
			'Discover the hidden layers of web development, from DNS to deployment, and learn why modern developers need to think beyond just code.',
		publishDate: '2025-01-20T09:00:00Z',
		readingTime: '5 min',
		tags: ['Web Development', 'DNS', 'SEO', 'Infrastructure'],
		status: 'published',
		image: '/images/posts/internet-everywhere-guide.svg',
	},
	{
		title: 'How to Work with Clients as a Web Developer: The Essential Guide',
		slug: 'work-with-clients',
		description:
			'Learn how to communicate effectively with clients as a web developer. Avoid scope creep, set expectations, and manage web projects smoothly.',
		publishDate: '2025-01-07T09:00:00Z',
		readingTime: '5 min',
		tags: [
			'web development',
			'client management',
			'freelancing',
			'working with clients',
			'web design process',
		],
		status: 'published',
		image: '/images/posts/web-development-client-guide.svg',
	},
]);

const currentPage = ref(1);
const postsPerPage = 12; // 3 rows of 4 cards

const paginatedPosts = computed(() => {
	const start = (currentPage.value - 1) * postsPerPage;
	const end = start + postsPerPage;
	return publishedPosts.value.slice(start, end);
});

const totalPages = computed(() =>
	Math.ceil(publishedPosts.value.length / postsPerPage),
);

function changePage(page) {
	currentPage.value = page;
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

function formatDate(date) {
	return format(new Date(date), 'MMMM d, yyyy');
}

onMounted(async () => {
	try {
		// Check if we're in development mode
		if (import.meta.env.DEV) {
			console.info('Development mode: Using static posts only');
			return;
		}

		const response = await fetch('/api/posts/published');
		if (!response.ok) {
			console.info('API not available, using static posts');
			return;
		}
		const posts = await response.json();
		// Merge API posts with static posts, avoiding duplicates
		const apiPosts = posts.filter(
			(post) => !publishedPosts.value.find((p) => p.slug === post.slug),
		);
		publishedPosts.value = [...publishedPosts.value, ...apiPosts];
	} catch (error) {
		console.info('Using static posts only');
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

.articles-container {
	width: 80vw;
	margin: 0 auto;
	padding: 2rem 0;
}

.articles-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 2rem;
	width: 100%;
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

/* Responsive grid columns */
@media (max-width: 768px) {
	.articles-container {
		width: 90vw; /* Slightly wider on mobile for better readability */
	}
}
</style>
