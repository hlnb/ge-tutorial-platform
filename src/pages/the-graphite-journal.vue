<template>
	<div class="container">
		<h1 class="title">The Graphite Journal</h1>
		<div class="posts">
			<pre style="background: #f5f5f5; padding: 1rem; margin: 1rem 0">
				Debug Posts: {{ JSON.stringify(posts, null, 2) }}
			</pre
			>

			<div v-if="posts && posts.length" class="post-list">
				<div v-for="post in posts" :key="post.url" class="post-item">
					<h2>
						<router-link :to="post.url">{{ post.title }}</router-link>
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

		console.log('Found post files:', postFiles);

		const posts = Object.entries(postFiles).map(([path, module]) => {
			console.log('Processing module:', module);
			console.log('Module frontmatter:', module.frontmatter);

			const frontmatter =
				module.frontmatter ||
				module.default?.frontmatter ||
				(typeof module.default === 'function'
					? module.default().frontmatter
					: {});

			console.log('Extracted frontmatter:', frontmatter);

			const url = '/posts/' + path.split('/').pop().replace('.vue', '');

			const post = {
				url,
				title: frontmatter?.title || 'Untitled',
				description: frontmatter?.description || '',
				date: frontmatter?.date || new Date().toISOString(),
			};

			console.log('Created post object:', post);

			return post;
		});

		this.posts = posts.sort((a, b) => {
			return new Date(b.date) - new Date(a.date);
		});

		console.log('Final sorted posts:', this.posts);
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
