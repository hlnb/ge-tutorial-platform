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
				<SimpleSignup />
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
							{{ post.publishDate ? formatDate(post.publishDate) : '' }}
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

		<!-- Pagination -->
		<nav class="pagination is-centered mt-6" v-if="totalPages > 1">
			<ul class="pagination-list">
				<li>
					<a
						class="pagination-link"
						:class="{ 'is-disabled': currentPage === 1 }"
						@click="currentPage > 1 && changePage(currentPage - 1)"
					>
						<i class="fas fa-chevron-left"></i>
					</a>
				</li>
				<li v-for="page in totalPages" :key="page">
					<a
						class="pagination-link"
						:class="{ 'is-current': page === currentPage }"
						@click="changePage(page)"
					>
						{{ page }}
					</a>
				</li>
				<li>
					<a
						class="pagination-link"
						:class="{ 'is-disabled': currentPage === totalPages }"
						@click="currentPage < totalPages && changePage(currentPage + 1)"
					>
						<i class="fas fa-chevron-right"></i>
					</a>
				</li>
			</ul>
		</nav>
	</div>

	<RSSFeedInfo class="mt-6" />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { format, parseISO } from 'date-fns';
import SimpleSignup from '@/components/SimpleSignup.vue';
import { posts } from '@/router'; // Import posts from router
import RSSFeedInfo from '@/components/RSSFeedInfo.vue';

const publishedPosts = computed(() => {
	return Object.entries(posts)
		.map(([slug, post]) => ({
			title: post.title,
			slug,
			description: post.description,
			publishDate: post.date,
			readingTime: post.readingTime,
			tags: post.tags,
			status: post.status,
			image: post.imageUrl,
		}))
		.filter((post) => post.status === 'published')
		.sort((a, b) => {
			const dateA = new Date(a.publishDate);
			const dateB = new Date(b.publishDate);
			return dateB - dateA;
		});
});

const currentPage = ref(1);
const postsPerPage = 12;

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
	try {
		if (!date) return '';
		// Ensure we're working with a valid date string
		const parsedDate =
			typeof date === 'string' ? parseISO(date) : new Date(date);
		return format(parsedDate, 'MMMM d, yyyy');
	} catch (error) {
		console.warn('Invalid date:', date);
		return '';
	}
}

onMounted(async () => {
	try {
		if (import.meta.env.DEV) {
			console.info('Development mode: Using router posts');
			return;
		}

		const response = await fetch('/api/posts/published');
		if (!response.ok) {
			console.info('API not available, using router posts');
			return;
		}
		const apiPosts = await response.json();
		// Merge API posts with router posts, avoiding duplicates
		const newPosts = apiPosts.filter(
			(post) => !publishedPosts.value.find((p) => p.slug === post.slug),
		);
		publishedPosts.value = [...publishedPosts.value, ...newPosts];
	} catch (error) {
		console.info('Using router posts only');
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

.pagination-list {
	display: flex;
	justify-content: center;
	gap: 0.5rem;
	list-style: none;
	padding: 0;
}

.pagination-link {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: 2.5rem;
	height: 2.5rem;
	padding: 0 0.5rem;
	border-radius: 4px;
	background: var(--color-alabaster);
	color: var(--color-mine-shaft);
	cursor: pointer;
	transition: all 0.2s ease;
}

.pagination-link.is-current {
	background: var(--color-red-berry);
	color: white;
}

.pagination-link:hover:not(.is-current):not(.is-disabled) {
	background: var(--color-silver);
}

.pagination-link.is-disabled {
	opacity: 0.5;
	cursor: not-allowed;
}

@media (max-width: 768px) {
	.pagination-link {
		min-width: 2rem;
		height: 2rem;
		font-size: 0.9rem;
	}
}
</style>
