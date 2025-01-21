<template>
	<div class="social-share">
		<h4 class="title is-5">Share This Post</h4>
		<div class="buttons">
			<a
				:href="twitterUrl"
				target="_blank"
				class="button is-info"
				aria-label="Share on Twitter"
			>
				<i class="fab fa-twitter"></i>
			</a>
			<a
				:href="linkedinUrl"
				target="_blank"
				class="button is-link"
				aria-label="Share on LinkedIn"
			>
				<i class="fab fa-linkedin"></i>
			</a>
			<a
				:href="facebookUrl"
				target="_blank"
				class="button is-primary"
				aria-label="Share on Facebook"
			>
				<i class="fab fa-facebook"></i>
			</a>
			<button class="button is-light" @click="copyLink" aria-label="Copy link">
				<i class="fas fa-link"></i>
			</button>
		</div>
		<div v-if="showCopyMessage" class="notification is-success is-light mt-2">
			Link copied to clipboard!
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
});

const showCopyMessage = ref(false);

const encodedUrl = computed(() => encodeURIComponent(props.url));
const encodedTitle = computed(() => encodeURIComponent(props.title));
const encodedDescription = computed(() =>
	encodeURIComponent(props.description),
);

const twitterUrl = computed(
	() =>
		`https://twitter.com/intent/tweet?text=${encodedTitle.value}&url=${encodedUrl.value}`,
);

const linkedinUrl = computed(
	() =>
		`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl.value}`,
);

const facebookUrl = computed(
	() => `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl.value}`,
);

async function copyLink() {
	try {
		await navigator.clipboard.writeText(props.url);
		showCopyMessage.value = true;
		setTimeout(() => {
			showCopyMessage.value = false;
		}, 2000);
	} catch (error) {
		console.error('Failed to copy link:', error);
	}
}
</script>

<style scoped>
.social-share {
	margin: 2rem 0;
	padding: 1rem;
	border-top: 1px solid #dbdbdb;
	border-bottom: 1px solid #dbdbdb;
}

.buttons {
	margin-top: 0.5rem;
}

.button {
	margin-right: 0.5rem;
}

.notification {
	padding: 0.5rem;
	text-align: center;
}
</style>
