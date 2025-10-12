<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
	currentPath: {
		type: String,
		required: true,
	},
});

// router and route are not required here; remove to avoid unused warnings
const posts = ref([]);
const previousPost = ref(null);
const nextPost = ref(null);

onMounted(async () => {
	const postModules = import.meta.glob('/src/pages/posts/*.vue', { eager: true });
		posts.value = Object.entries(postModules).map(([path, module]) => ({
			path: path.replace('/src/pages/posts/', '').replace('.vue', ''),
			frontmatter: /** @type {any} */ (module).frontmatter,
		}));

	// Sort posts by date with a fallback for missing or invalid dates
	posts.value.sort((a, b) => {
		const dateA = new Date(a.frontmatter?.date || 0).getTime();
		const dateB = new Date(b.frontmatter?.date || 0).getTime();
		return dateB - dateA;
	});

	const currentIndex = posts.value.findIndex((post) => post.path === props.currentPath);

	if (currentIndex > 0) {
		previousPost.value = posts.value[currentIndex - 1];
	}
	if (currentIndex < posts.value.length - 1) {
		nextPost.value = posts.value[currentIndex + 1];
	}
});
</script>

<template>
    <nav v-if="previousPost || nextPost" class="post-navigation">
        <div class="nav-links">
            <router-link
                v-if="previousPost"
                :to="`/posts/${previousPost.path}`"
                class="prev-post"
            >
                <span class="nav-label">
                    <i class="fa-solid fa-arrow-left"></i> Previous
                </span>
                <span class="post-title">{{ previousPost.frontmatter?.title }}</span>
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
                <span class="post-title">{{ nextPost.frontmatter?.title }}</span>
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
