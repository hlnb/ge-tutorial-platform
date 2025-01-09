<template>
	<div class="container">
		<h1 class="title">The Graphite Journal</h1>
		<div class="posts">
			<div v-if="posts && posts.length" class="post-list">
				<div v-for="post in posts" :key="post.url" class="post-item">
					<h2>
						<a :href="post.url">{{ post.title }}</a>
					</h2>
					<p>{{ post.description }}</p>
					<p class="post-date">
						{{ new Date(post.date).toLocaleDateString() }}
					</p>
				</div>
			</div>
			<div v-else>
				<p>No posts found.</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			posts: [],
		};
	},
	async created() {
		const postFiles = import.meta.glob('../pages/posts/\*.vue', {
			eager: true,
		});

		const posts = Object.entries(postFiles).map(([path, module]) => {
			// Access frontmatter directly from the module
			const frontmatter = module.frontmatter || {};

			console.log('Processing path:', path);
			console.log('Frontmatter:', frontmatter);

			return {
				url: path.replace('../pages', '').replace('.vue', ''),
				title: frontmatter.title || 'Untitled',
				description: frontmatter.description || '',
				date: frontmatter.date || new Date().toISOString(),
			};
		});

		// Sort posts by date
		this.posts = posts.sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		});

		console.log('Final posts:', this.posts);
	},
};
</script>

<style scoped>
.post-list {
	margin: 2rem 0;
}

.post-item {
	margin-bottom: 2rem;
	padding: 1rem;
	border-bottom: 1px solid #eee;
}

.post-item h2 {
	margin-bottom: 0.5rem;
}

.post-item a {
	color: var(--color-red-berry);
	text-decoration: none;
}

.post-item a:hover {
	text-decoration: underline;
}

.post-date {
	color: #666;
	font-size: 0.9rem;
}
</style>
