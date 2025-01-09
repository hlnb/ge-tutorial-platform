<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
	currentPath: {
		type: String,
		required: true,
	},
});

const router = useRouter();
const prevPost = ref(null);
const nextPost = ref(null);

onMounted(async () => {
	// Get all posts and sort them by date
	const modules = import.meta.glob('../pages/posts/\*.vue');
	const posts = await Promise.all(
		Object.entries(modules).map(async ([path, module]) => {
			const component = await module();
			return {
				path: path.replace('../pages/posts/', '').replace('.vue', ''),
				frontmatter: component.frontmatter,
			};
		}),
	);

	// Sort posts by date (newest first)
	const sortedPosts = posts.sort((a, b) => {
		return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
	});

	// Find current post index
	const currentIndex = sortedPosts.findIndex(
		(post) => post.path === props.currentPath,
	);

	// Set previous and next posts
	if (currentIndex > 0) {
		nextPost.value = sortedPosts[currentIndex - 1];
	}
	if (currentIndex < sortedPosts.length - 1) {
		prevPost.value = sortedPosts[currentIndex + 1];
	}
});
</script>

<template>
	<nav class="post-navigation" v-if="prevPost || nextPost">
		<div class="nav-links">
			<router-link
				v-if="prevPost"
				:to="`/posts/${prevPost.path}`"
				class="prev-post"
			>
				<span class="nav-label">
					<i class="fa-solid fa-arrow-left"></i> Previous
				</span>
				<span class="post-title">{{ prevPost.frontmatter.title }}</span>
			</router-link>
			<div v-else class="nav-placeholder"></div>

			<router-link
				v-if="nextPost"
				:to="`/posts/${nextPost.path}`"
				class="next-post"
			>
				<span class="nav-label">
					Next <i class="fa-solid fa-arrow-right"></i>
				</span>
				<span class="post-title">{{ nextPost.frontmatter.title }}</span>
			</router-link>
			<div v-else class="nav-placeholder"></div>
		</div>
	</nav>
</template>

<style scoped>
.post-navigation {
	margin: 4rem 0;
	padding-top: 2rem;
	border-top: 1px solid var(--color-snow);
}

.nav-links {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;
}

.prev-post,
.next-post {
	display: flex;
	flex-direction: column;
	text-decoration: none;
	color: inherit;
	padding: 1rem;
	border-radius: 8px;
	transition: background-color 0.2s ease;
}

.prev-post:hover,
.next-post:hover {
	background-color: var(--color-snow);
}

.next-post {
	text-align: right;
}

.nav-label {
	font-size: 0.875rem;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	color: var(--color-red-berry);
	margin-bottom: 0.5rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.next-post .nav-label {
	justify-content: flex-end;
}

.post-title {
	font-weight: 500;
}

.nav-placeholder {
	width: 100%;
}

@media (max-width: 768px) {
	.nav-links {
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.next-post {
		text-align: left;
	}

	.next-post .nav-label {
		justify-content: flex-start;
	}
}
</style>
