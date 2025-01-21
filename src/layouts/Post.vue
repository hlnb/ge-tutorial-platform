<template>
	<div class="post-layout">
		<!-- Post-specific layout elements -->
		<router-view v-slot="{ Component }">
			<Suspense>
				<component :is="Component" @update:frontmatter="updateFrontmatter" />
			</Suspense>
		</router-view>
	</div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useHead } from '@vueuse/head';

const frontmatter = ref(null);
const head = ref({
	title: '',
	meta: [],
});

const updateFrontmatter = (data) => {
	frontmatter.value = data;
};

// Set up head configuration in setup
const updateHead = () => {
	if (frontmatter.value) {
		head.value = {
			title: `${frontmatter.value.title} | Your Site Name`,
			meta: [
				{
					name: 'description',
					content: frontmatter.value.description,
				},
				{
					name: 'keywords',
					content: frontmatter.value.keywords,
				},
				// Open Graph tags for social sharing
				{
					property: 'og:title',
					content: frontmatter.value.title,
				},
				{
					property: 'og:description',
					content: frontmatter.value.description,
				},
				{
					property: 'og:image',
					content: frontmatter.value.image,
				},
				{
					name: 'author',
					content: frontmatter.value.author,
				},
			],
		};
	}
};

// Use head in setup context
useHead(head);

// Watch for frontmatter changes
watch(
	frontmatter,
	() => {
		updateHead();
	},
	{ immediate: true },
);
</script>

<style scoped>
.post-layout {
	width: 80vw;
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem 0;
}

.post-meta {
	color: var(--text-muted);
	margin-bottom: 2rem;
}

.post-meta time {
	margin-right: 1rem;
}

/* Add responsive adjustments */
@media (max-width: 768px) {
	.post-layout {
		width: 90vw;
	}
}

/* Add your other styles here */
</style>
