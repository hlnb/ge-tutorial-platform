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
				<router-link
					v-for="post in posts"
					:key="post.slug"
					:to="post.path"
					class="post-card"
				>
					<div class="post-image" v-if="post.frontmatter.image">
						<img :src="post.frontmatter.image" :alt="post.frontmatter.title" />
					</div>
					<div class="post-content">
						<h2>{{ post.frontmatter.title }}</h2>
						<p class="post-meta">
							<span class="post-date">{{
								formatDate(post.frontmatter.date)
							}}</span>
							<span class="post-author" v-if="post.frontmatter.author">
								by {{ post.frontmatter.author }}
							</span>
						</p>
						<p class="post-excerpt">{{ post.frontmatter.description }}</p>
						<div class="post-tags" v-if="post.frontmatter.tags">
							<span v-for="tag in post.frontmatter.tags" :key="tag" class="tag">
								{{ tag }}
							</span>
						</div>
					</div>
				</router-link>
			</div>
		</div>
	</MainLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import MainLayout from '../components/MainLayout.vue';

const posts = ref([]);

const formatDate = (dateString) => {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-AU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	});
};

// Import all images from the src directory
const images = import.meta.glob('../assets/images/\*.svg', { eager: true });

onMounted(async () => {
	const modules = import.meta.glob('./posts/\*.vue');
	const postPromises = Object.entries(modules).map(async ([path, module]) => {
		const component = await module();
		const slug = path.split('/').pop().replace('.vue', '');
		
		// Process the image path to use the imported image
		let imagePath = component.frontmatter.image;
		if (imagePath) {
			const imageKey = Object.keys(images).find(key => key.includes(imagePath.split('/').pop()));
			imagePath = imageKey ? images[imageKey].default : null;
		}
		
		return {
			slug,
			frontmatter: {
				...component.frontmatter,
				image: imagePath
			},
			path: `/posts/${slug}`
		};
	});

	const unsortedPosts = await Promise.all(postPromises);
	
	posts.value = unsortedPosts.sort((a, b) => {
		const dateA = new Date(a.frontmatter.date);
		const dateB = new Date(b.frontmatter.date);
		return dateB - dateA;
	});
});
</script>

<style scoped>
.journal-content {
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
}

.journal-intro {
	max-width: 600px;
	margin: 2rem auto;
	text-align: center;
	color: var(--color-graphite);
}

.posts-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 2rem;
	margin-top: 3rem;
}

.post-card {
	display: flex;
	flex-direction: column;
	text-decoration: none;
	color: inherit;
	background: white;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
	transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.post-card:hover {
	transform: translateY(-4px);
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.post-image {
	aspect-ratio: 16 / 9;
	overflow: hidden;
	background: var(--color-snow);
}

.post-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.post-content {
	padding: 1.5rem;
	flex: 1;
	display: flex;
	flex-direction: column;
}

.post-content h2 {
	font-size: 1.25rem;
	margin: 0 0 1rem;
	color: var(--color-charcoal);
	line-height: 1.4;
}

.post-meta {
	font-size: 0.875rem;
	color: var(--color-graphite);
	margin-bottom: 1rem;
	display: flex;
	gap: 0.5rem;
}

.post-date::after {
	content: '•';
	margin-left: 0.5rem;
}

.post-excerpt {
	font-size: 0.95rem;
	line-height: 1.6;
	color: var(--color-graphite);
	margin-bottom: 1.5rem;
	flex: 1;
}

.post-tags {
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-top: auto;
}

.tag {
	font-size: 0.75rem;
	padding: 0.25rem 0.75rem;
	background: var(--color-snow);
	color: var(--color-graphite);
	border-radius: 999px;
	transition: background-color 0.2s ease;
}

.tag:hover {
	background: var(--color-red-berry);
	color: white;
}

@media (max-width: 768px) {
	.journal-content {
		padding: 1rem;
	}

	.posts-grid {
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	.post-content h2 {
		font-size: 1.2rem;
	}
}
</style>
