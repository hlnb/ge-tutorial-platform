<template>
	<MainLayout>
		<div class="container">
			<header class="journal-header">
				<h1>The Graphite Journal</h1>
				<p class="subtitle">
					A space for reflections, insights, and deep dives into the world of
					web development—beyond just code. From practical tutorials to musings
					on the web industry, this is where we explore the missing pieces of
					web development, one post at a time.
				</p>
			</header>

			<div class="posts-grid">
				<article v-for="post in posts" :key="post.path" class="post-card">
					<div class="post-card-content">
						<h2 class="post-title">
							<router-link :to="post.path || ''">
								{{ post.frontmatter?.title }}
							</router-link>
						</h2>
						<div class="post-meta">
							<time v-if="post.frontmatter?.date">
								{{ new Date(post.frontmatter.date).toLocaleDateString() }}
							</time>
						</div>
						<p class="post-description">
							{{ post.frontmatter?.description }}
						</p>
						<div class="post-tags" v-if="post.frontmatter?.tags?.length">
							<span v-for="tag in post.frontmatter.tags" :key="tag" class="tag">
								{{ tag }}
							</span>
						</div>
					</div>
				</article>
			</div>
		</div>
	</MainLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MainLayout from '../components/MainLayout.vue';

const posts = ref([]);

onMounted(async () => {
	const modules = import.meta.glob('../pages/posts/\*.vue', { eager: true });

	const postData = Object.entries(modules).map(([path, module]) => {
		// Try different ways of accessing frontmatter
		const frontmatter =
			module.frontmatter ||
			module.default?.frontmatter ||
			(typeof module.default === 'function'
				? module.default().frontmatter
				: undefined);

		return {
			path: path.replace('../pages', '').replace('.vue', ''),
			frontmatter: frontmatter || {},
		};
	});

	posts.value = postData
		.filter((post) => post.frontmatter && post.frontmatter.title)
		.sort((a, b) => {
			return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
		});

	console.log('Posts loaded:', posts.value); // Debug log
});
</script>

<style scoped>
.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
}

.journal-header {
	text-align: center;
	margin-bottom: 4rem;
	padding: 2rem 0;
	border-bottom: 2px solid var(--color-snow);
}

.journal-header h1 {
	font-size: 3rem;
	color: var(--color-red-berry);
	margin-bottom: 1rem;
}

.subtitle {
	font-size: 1.2rem;
	color: var(--color-mine-shaft);
	opacity: 0.8;
}

.posts-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 2rem;
	margin-top: 2rem;
}

.post-card {
	background: white;
	border-radius: 12px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: transform 0.2s ease, box-shadow 0.2s ease;
	overflow: hidden;
	height: 100%;
	display: flex;
	flex-direction: column;
}

.post-card:hover {
	transform: translateY(-4px);
	box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.post-card-content {
	padding: 1.5rem;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
}

.post-title {
	font-size: 1.5rem;
	margin-bottom: 1rem;
}

.post-title a {
	color: var(--color-red-berry);
	text-decoration: none;
}

.post-title a:hover {
	text-decoration: underline;
}

.post-meta {
	font-size: 0.9rem;
	color: #666;
	margin-bottom: 1rem;
}

.post-description {
	color: var(--color-mine-shaft);
	margin-bottom: 1.5rem;
	line-height: 1.6;
	flex-grow: 1;
}

.post-tags {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-top: auto;
}

.tag {
	background: var(--color-snow);
	color: var(--color-mine-shaft);
	padding: 0.25rem 0.75rem;
	border-radius: 16px;
	font-size: 0.85rem;
}

@media (max-width: 768px) {
	.container {
		padding: 1rem;
	}

	.journal-header h1 {
		font-size: 2rem;
	}

	.posts-grid {
		grid-template-columns: 1fr;
	}
}
</style>
