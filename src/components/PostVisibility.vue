<template>
	<div v-if="isVisible">
		<slot></slot>
	</div>
	<div v-else class="notification is-warning">
		<p>
			<i class="fas fa-clock"></i>
			This post will be available on {{ formatDate(publishDate) }}
		</p>
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
