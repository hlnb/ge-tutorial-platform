<template>
	<div class="progress-section-list">
		<div v-if="tutorials.length === 0" class="notification is-light">
			<p>You haven't started any tutorials in this section yet.</p>
			<router-link :to="sectionPath" class="button is-small is-primary mt-2">
				Start Learning
			</router-link>
		</div>

		<div v-else class="tutorials-list">
			<div v-for="tutorial in tutorials" :key="tutorial.path" class="card mb-3">
				<div class="card-content">
					<div class="columns is-vcentered">
						<div class="column">
							<h4 class="title is-5">{{ getTutorialTitle(tutorial.path) }}</h4>
						</div>
						<div class="column is-narrow">
							<span class="tag" :class="getStatusClass(tutorial.status)">
								{{ formatStatus(tutorial.status) }}
							</span>
						</div>
						<div class="column">
							<progress
								class="progress"
								:class="getProgressClass(tutorial.progress)"
								:value="tutorial.progress"
								max="100"
							></progress>
							<p class="has-text-right is-size-7">{{ tutorial.progress }}%</p>
						</div>
						<div class="column is-narrow">
							<router-link
								:to="tutorial.path"
								class="button is-small is-primary"
							>
								{{ getButtonText(tutorial.status) }}
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';

const { tutorials, sectionPath } = defineProps({
	tutorials: {
		type: Array,
		required: true,
	},
	sectionPath: {
		type: String,
		required: true,
	},
});

function getTutorialTitle(path) {
	// Extract the last part of the path
	const parts = path.split('/');
	const lastPart = parts[parts.length - 1];

	// Convert to title case with spaces
	return lastPart.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
}

function getStatusClass(status) {
	if (status === 'completed') return 'is-success';
	if (status === 'in-progress') return 'is-warning';
	return 'is-info';
}

function formatStatus(status) {
	if (status === 'completed') return 'Completed';
	if (status === 'in-progress') return 'In Progress';
	return 'Not Started';
}

function getProgressClass(progress) {
	if (progress === 100) return 'is-success';
	if (progress >= 50) return 'is-warning';
	return 'is-info';
}

function getButtonText(status) {
	if (status === 'completed') return 'Review';
	if (status === 'in-progress') return 'Continue';
	return 'Start';
}
</script>

<style scoped>
.progress-section-list {
	margin-top: 1rem;
}

.tutorials-list {
	max-width: 100%;
}
</style>
