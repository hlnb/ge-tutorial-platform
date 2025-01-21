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
		default: 'draft',
	},
});

const isVisible = computed(() => {
	if (props.status === 'published') return true;
	if (props.status === 'scheduled') {
		return new Date(props.publishDate) <= new Date();
	}
	return false;
});

const formatDate = (date) => {
	return format(new Date(date), 'MMMM do, yyyy');
};
</script>
