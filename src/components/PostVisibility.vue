<template>
	<div v-if="isVisible">
		<slot></slot>
	</div>
	<div v-else class="not-available-container">
		<div class="notification is-warning">
			<h2 class="title">Not Available Yet</h2>
			<p>
				<i class="fas fa-clock"></i>
				This post will be available on {{ formatDate(publishDate) }}
			</p>
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

const props = defineProps({
	publishDate: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
});

// Let's log these values to debug
console.log('PostVisibility props:', {
	date: props.publishDate,
	status: props.status,
});

const isVisible = computed(() => {
	const now = new Date();
	const publishDate = new Date(props.publishDate);
	const isPublished = props.status === 'published';
	const isPastPublishDate = publishDate <= now;

	console.log('Visibility check:', {
		now: now.toISOString(),
		publishDate: publishDate.toISOString(),
		isPublished,
		isPastPublishDate,
		comparison: `${publishDate} <= ${now}`,
	});

	return isPublished && isPastPublishDate;
});

const formatDate = (date) => {
	return format(new Date(date), 'MMMM do, yyyy');
};
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

.fas {
	margin-right: 0.5rem;
}
</style>
