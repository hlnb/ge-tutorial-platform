<template>
	<div class="post-editor">
		<!-- Other post fields -->

		<div class="field">
			<label class="label">Publish Date</label>
			<div class="control">
				<input v-model="publishDate" type="datetime-local" :min="minDate" />
			</div>
		</div>

		<div class="field">
			<div class="control">
				<button
					class="button is-primary"
					:disabled="!canSchedule"
					@click="schedulePost"
				>
					Schedule Post
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { format } from 'date-fns';

const { postId } = defineProps({
	postId: {
		type: [String, Number],
		required: true,
	},
});

const publishDate = ref('');
const minDate = computed(() => {
	return format(new Date(), "yyyy-MM-dd'T'HH:mm");
});

const canSchedule = computed(() => {
	return publishDate.value && new Date(publishDate.value) > new Date();
});

async function schedulePost() {
	try {
		await fetch('/api/posts/schedule', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				postId: postId,
				publishDate: publishDate.value,
			}),
		});
		// Handle success
	} catch (error) {
		// Log error for debugging
		 
		console.error('Failed to schedule post:', error);
	}
}
</script>
