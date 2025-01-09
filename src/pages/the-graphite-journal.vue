<template>
	<MainLayout>
		<div class="journal-hero">
			<div class="hero-content">
				<h1>The Graphite Journal</h1>
				<p class="hero-intro">
					Insights and tutorials about web development, design, and building
					digital products.
				</p>
				<div class="hero-cta">
					<BlogSignup />
				</div>
			</div>
			<div class="hero-pattern"></div>
		</div>

		<div class="journal-content">
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
import BlogSignup from '../components/BlogSignup.vue';

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
			const imageKey = Object.keys(images).find((key) =>
				key.includes(imagePath.split('/').pop()),
			);
			imagePath = imageKey ? images[imageKey].default : null;
		}

		return {
			slug,
			frontmatter: {
				...component.frontmatter,
				image: imagePath,
			},
			path: `/posts/${slug}`,
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
.journal-hero {
	position: relative;
	background: linear-gradient(
		to right,
		var(--color-charcoal),
		var(--color-graphite)
	);
	color: white;
	padding: 4rem 2rem;
	overflow: hidden;
}

.hero-content {
	max-width: 800px;
	margin: 0 auto;
	position: relative;
	z-index: 2;
	text-align: center;
}

.hero-pattern {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	opacity: 0.1;
	z-index: 1;
}

.hero-content h1 {
	font-size: 3rem;
	margin: 0 0 1.5rem;
	font-weight: 700;
	line-height: 1.2;
}

.hero-intro {
	font-size: 1.25rem;
	max-width: 600px;
	margin: 0 auto 2rem;
	line-height: 1.6;
	opacity: 0.9;
}

.hero-cta {
	max-width: 500px;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.1);
	padding: 2rem;
	border-radius: 12px;
	backdrop-filter: blur(10px);
}

.journal-content {
	max-width: 1200px;
	margin: 0 auto;
	padding: 4rem 2rem;
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
	.journal-hero {
		padding: 3rem 1rem;
	}

	.hero-content h1 {
		font-size: 2rem;
	}

	.hero-intro {
		font-size: 1.1rem;
	}

	.hero-cta {
		padding: 1.5rem;
	}

	.journal-content {
		padding: 2rem 1rem;
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
