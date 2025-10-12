<template>
    <div v-if="isVisible">
        <slot></slot>
    </div>
    <div v-else class="not-available-container">
        <div class="notification is-warning">
            <h2 class="title">Not Available Yet</h2>
            <p>
                <i class="fa-solid fa-calendar"></i>
                This post will be available on {{ formatDate(publishDate) }}
            </p>
            <div v-if="suggestedPosts.length" class="mt-4">
                <h3 class="subtitle">In the meantime, check out these posts:</h3>
                <ul>
                    <li v-for="post in suggestedPosts" :key="post.slug">
                        <router-link :to="'/posts/' + post.slug" class="button is-link is-light">
                            <i class="fas fa-book-open mr-2"></i>
                            {{ post.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="mt-4">
                <router-link to="/" class="button is-primary">
                    <i class="fas fa-home mr-2"></i>
                    Return to Home Page
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { format } from 'date-fns';

// Try to import posts from router if available; otherwise use empty object
let posts = {};
try {
    // Optionally require posts from router if available (commented out to avoid build-time resolution issues)
    // posts = require('@/router').posts || {};
} catch {
    posts = {};
}

const props = defineProps({
    publishDate: String,
    status: String,
    series: { type: String, required: false },
    relatedPosts: { type: Array, required: false },
});

const isVisible = computed(() => {
    const now = new Date();
    const publishDate = new Date(props.publishDate);
    const isPublished = props.status === 'published';
    const isPastPublishDate = publishDate <= now;

    return isPublished && isPastPublishDate;
});

const formatDate = (date) => {
    return format(new Date(date), 'MMMM do, yyyy');
};

// Filter suggested posts based on series or relatedPosts
const suggestedPosts = computed(() => {
    const suggestions = [];

    // Add posts from the same series
    if (props.series && posts) {
        suggestions.push(
            ...Object.entries(posts)
                .filter(([, post]) => post.series === props.series && post.status === 'published')
                .map(([slug, post]) => ({ slug, title: post.title }))
        );
    }

    // Add related posts
    if (props.relatedPosts && posts) {
        suggestions.push(
            ...props.relatedPosts
                .filter((slug) => posts[slug]?.status === 'published')
                .map((slug) => ({ slug, title: posts[slug].title }))
        );
    }

    // Remove duplicates and return
    return suggestions.filter((post, index, self) => self.findIndex((p) => p.slug === post.slug) === index);
});

defineOptions({ name: 'PostVisibility' });
</script>

<style scoped>
.not-available-container {
	max-width: 600px;
	margin: 2rem auto;
	padding: 0 1rem;
}

.notification {
	text-align: center;
	padding: 2rem;
}

.title {
	color: #856404;
	margin-bottom: 1rem;
}

.button {
	margin-top: 1rem;
}

.fa-standard {
	margin-right: 0.5rem;
}
</style>
