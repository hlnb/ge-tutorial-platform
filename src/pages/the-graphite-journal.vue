<template>
	<MainLayout>
		<div class="container">
			<section class="section">
				<div class="content">
					<div class="blog-container">
						<h1 class="title is-2 has-text-centered mb-6">
							{{ frontmatter.title }}
						</h1>

						<div v-if="posts.length" class="post-list">
							<div v-for="post in posts" :key="post.path" class="card mb-6">
								<div class="card-content">
									<h2 class="title is-4 mb-3">
										<router-link :to="post.path" class="has-text-primary">
											{{ post.frontmatter.title }}
										</router-link>
									</h2>

									<div class="post-meta mb-4">
										<time class="has-text-grey">
											<i class="fas fa-calendar-alt mr-2"></i>
											{{ formatDate(post.frontmatter.date) }}
										</time>
									</div>

									<p
										v-if="post.frontmatter.description"
										class="description mb-4"
									>
										{{ post.frontmatter.description }}
									</p>

									<div class="tags" v-if="post.frontmatter.tags">
										<span
											v-for="tag in post.frontmatter.tags"
											:key="tag"
											class="tag is-primary is-light"
										>
											<i class="fas fa-tag mr-1"></i>
											{{ tag }}
										</span>
									</div>

									<div class="read-more mt-4">
										<router-link
											:to="post.path"
											class="button is-primary is-outlined"
										>
											Read More
											<i class="fas fa-arrow-right ml-2"></i>
										</router-link>
									</div>
								</div>
							</div>
						</div>
						<div v-else class="no-posts has-text-centered">
							<p class="is-size-5">Loading posts...</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</MainLayout>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
import { useHead } from '@vueuse/head';
import MainLayout from '../components/MainLayout.vue';

const modules = import.meta.glob('./posts/\*.md', {
	eager: true,
});
const posts = ref([]);

onMounted(() => {
	try {
		const instance = getCurrentInstance();

		const mappedPosts = Object.entries(modules)
			.map(([path, module]) => {
				const component = module.default;
				console.log('Component setup:', component.setup);

				// Create a mock context for the setup function
				const ctx = {
					expose: () => {},
					attrs: {},
					slots: {},
					emit: () => {},
				};

				// Execute the setup function with proper context
				let frontmatterData = {};
				try {
					const setupResult = component.setup({}, ctx);
					console.log('Setup result:', setupResult);
					frontmatterData = setupResult.frontmatter;
					console.log('Extracted frontmatter:', frontmatterData);
				} catch (e) {
					console.error('Setup execution error:', e);
				}

				return {
					path: path.replace('./posts/', '/posts/').replace('.md', ''),
					frontmatter: frontmatterData,
				};
			})
			.filter((post) => {
				const hasTitle = Boolean(post.frontmatter?.title);
				console.log(`Post ${post.path} has title:`, hasTitle, post.frontmatter);
				return hasTitle;
			})
			.sort((a, b) => {
				if (!a.frontmatter?.date || !b.frontmatter?.date) return 0;
				return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
			});

		console.log('Final mapped posts:', mappedPosts);
		posts.value = mappedPosts;
	} catch (error) {
		console.error('Error loading posts:', error);
		posts.value = [];
	}
});

const frontmatter = {
	title: 'The Graphite Journal',
	description: 'Web development tutorials, tips, and insights beyond just code',
};

useHead({
	title: frontmatter.title,
	meta: [
		{ name: 'description', content: frontmatter.description },
		{ property: 'og:title', content: frontmatter.title },
		{ property: 'og:description', content: frontmatter.description },
		{ property: 'og:type', content: 'blog' },
		{ name: 'twitter:title', content: frontmatter.title },
		{ name: 'twitter:description', content: frontmatter.description },
		{ name: 'twitter:card', content: 'summary_large_image' },
	],
});

function formatDate(date) {
	if (!date) return '';
	try {
		return new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	} catch (error) {
		console.error('Error formatting date:', error);
		return '';
	}
}

const markdownContent = '';
</script>

<style scoped>
.blog-container {
	max-width: 900px;
	margin: 0 auto;
	padding: 2rem;
}

.card {
	transition: transform 0.2s ease, box-shadow 0.2s ease;
	border: 1px solid var(--border-color);
	border-radius: 8px;
}

.card:hover {
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card-content {
	padding: 2rem;
}

.title a {
	text-decoration: none;
	transition: color 0.2s ease;
}

.title a:hover {
	color: var(--color-red-berry);
}

.post-meta {
	font-size: 0.9rem;
	display: flex;
	align-items: center;
}

.description {
	color: var(--color-mine-shaft);
	line-height: 1.6;
	font-size: 1.1rem;
}

.tags {
	margin-top: 1rem;
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
}

.tag {
	padding: 0.5rem 1rem;
	border-radius: 20px;
	font-size: 0.9rem;
	transition: background-color 0.2s ease;
}

.tag:hover {
	background-color: var(--color-red-berry);
	color: white;
}

.read-more {
	display: flex;
	justify-content: flex-end;
}

.read-more .button {
	transition: all 0.2s ease;
}

.read-more .button:hover {
	transform: translateX(4px);
}

.no-posts {
	padding: 4rem 0;
	color: var(--color-mine-shaft);
}

@media (max-width: 768px) {
	.blog-container {
		padding: 1rem;
	}

	.card-content {
		padding: 1.5rem;
	}

	.title.is-2 {
		font-size: 1.75rem;
	}

	.title.is-4 {
		font-size: 1.25rem;
	}
}
</style>
