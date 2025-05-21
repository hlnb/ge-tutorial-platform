<template>
	<PostVisibility :publish-date="frontmatter.date" :status="frontmatter.status">
		<div class="container">
			<section class="hero" v-if="frontmatter">
				<div class="hero-content">
					<h1>{{ frontmatter.title }}</h1>
					<div class="meta">
						<time class="date">{{ formatDate(frontmatter.date) }}</time>
						<span class="tags" v-if="frontmatter.tags?.length">
							Tags: {{ frontmatter.tags.join(', ') }}
						</span>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="content">
					<article class="blog-post">
						<!-- Hero Image Section -->
						<div class="post-hero">
							<h1 class="title is-1">
								<i class="fas fa-[ICON-NAME] section-icon"></i> [YOUR TITLE
								HERE]
							</h1>
						</div>

						<!-- Introduction -->
						<p>[Your introduction paragraph here]</p>

						<!-- Main Content -->
						<h2>[Your First Section]</h2>
						<p>[Content here]</p>

						<!-- Add more sections as needed -->

						<!-- CTA Box -->
						<div class="cta-box">
							<h3>Ready to level up?</h3>
							<p>
								<i class="fas fa-envelope"></i> Join The Graphite Journal
								Newsletter for web development insights beyond just code.
							</p>
							<BlogSignup />
						</div>
					</article>
				</div>
			</section>
		</div>
	</PostVisibility>
	<PostNavigation :current-path="'[YOUR-URL-SLUG]'" />
</template>

<script>
export const frontmatter = {
	title: '[Your Post Title]',
	date: '[YYYY-MM-DD]',
	author: 'Helen Burgess',
	image: '/images/posts/[your-image-name].svg',
	description: '[Your meta description here]',
	tags: ['Tag1', 'Tag2', 'Tag3'],
	status: 'draft', // Change to 'published' when ready
};
</script>

<script setup>
import Mirror from '@/components/Mirror.vue';
import PostVisibility from '@/components/PostVisibility.vue';
import PostNavigation from '@/components/PostNavigation.vue';
import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import BlogSignup from '../../components/BlogSignup.vue';

const postData = ref(frontmatter);

useHead({
	title: postData.value.title,
	meta: [
		{ name: 'description', content: postData.value.description },
		{ property: 'og:title', content: postData.value.title },
		{ property: 'og:description', content: postData.value.description },
		{ property: 'og:image', content: postData.value.image },
	],
});

// Emit frontmatter to parent layout
const emit = defineEmits(['update:frontmatter']);

onMounted(() => {
	emit('update:frontmatter', frontmatter);
});
</script>

<style scoped>
.blog-post {
	max-width: 80vw;
	margin: 0 auto;
	padding: 2rem;
}

.content {
	line-height: 1.6;
	font-size: 1.1rem;
}

.hero {
	background-image: url('/images/posts/[your-image-name].svg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	min-height: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin-bottom: 2rem;
}

.hero::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
}

.hero-content {
	position: relative;
	z-index: 1;
	text-align: center;
	color: white;
	padding: 2rem;
	max-width: 800px;
}

.hero h1 {
	color: white;
	margin-bottom: 1rem;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.meta {
	color: white;
	margin: 1rem 0;
}

.meta .date {
	background: rgba(255, 255, 255, 0.2);
	padding: 0.25rem 0.75rem;
	border-radius: 12px;
	font-family: monospace;
	font-size: 0.9rem;
	letter-spacing: 0.02em;
}

.meta .tags {
	margin-left: 1rem;
	background: rgba(255, 255, 255, 0.2);
	padding: 0.25rem 0.75rem;
	border-radius: 12px;
}

h1 {
	font-size: 2.5rem;
	margin-bottom: 2rem;
	color: var(--color-red-berry);
}

h2 {
	font-size: 1.8rem;
	margin: 2rem 0 1rem;
	color: var(--color-mine-shaft);
}

.cta-box {
	background-color: var(--color-snow);
	border-radius: 8px;
	padding: 2rem;
	margin: 2rem 0;
	text-align: center;
}

.cta-box h3 {
	color: var(--color-red-berry);
	margin-bottom: 1rem;
}

.cta-box i {
	color: var(--color-red-berry);
	margin-right: 0.5rem;
}

@media (max-width: 768px) {
	.blog-post {
		padding: 1rem;
	}

	h1 {
		font-size: 2rem;
	}

	h2 {
		font-size: 1.5rem;
	}

	.hero {
		min-height: 300px;
	}

	.hero h1 {
		font-size: 1.8rem;
	}
}
</style>
