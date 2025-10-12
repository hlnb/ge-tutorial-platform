<template>
	<div class="tutorial-navigation">
		<!-- Quiz Indicator (if available) -->
		<div v-if="hasQuiz && !hideQuizIndicator" class="quiz-indicator mb-4">
			<div class="notification is-info is-light">
				<p>
					<i class="fas fa-question-circle"></i>
					<strong>Quiz Available:</strong> Test your knowledge with the
					interactive quiz at the end of this tutorial.
				</p>
				<a href="#quiz" class="button is-info is-small mt-2"> Jump to Quiz </a>
			</div>
		</div>

		<!-- Tutorial Completion Component (only shown if not hidden) -->
		<TutorialCompletion
			v-if="!hideCompletion"
			@tutorial-completed="handleTutorialCompleted"
			@tutorial-incomplete="handleTutorialIncomplete"
		/>

		<!-- Navigation Buttons -->
		<div
			class="navigation-buttons"
			:class="{ 'no-completion': hideCompletion }"
		>
			<router-link v-if="prev" :to="prev.path" class="button is-light">
				<span class="icon">
					<i class="fas fa-arrow-left"></i>
				</span>
				<span>{{ prev.title }}</span>
			</router-link>

			<div class="spacer"></div>

			<router-link v-if="next" :to="next.path" class="button is-primary">
				<span>{{ next.title }}</span>
				<span class="icon">
					<i class="fas fa-arrow-right"></i>
				</span>
			</router-link>
		</div>
	</div>
</template>

<script setup>
import { onMounted, inject } from 'vue';
import { defineAsyncComponent } from 'vue';
const TutorialCompletion = defineAsyncComponent(() => import('@/components/TutorialCompletion.vue'));

defineProps({
	prev: {
		type: Object,
		default: null,
	},
	next: {
		type: Object,
		default: null,
	},
	hideCompletion: {
		type: Boolean,
		default: false,
	},
	hideQuizIndicator: {
		type: Boolean,
		default: false,
	},
});

// Get quiz availability from parent component
const hasQuiz = inject('hasQuiz', false);

// Handle tutorial completion
const handleTutorialCompleted = () => {
	// Placeholder for future logic
};

// Handle tutorial marked as incomplete
const handleTutorialIncomplete = () => {
	// Placeholder for future logic
};

onMounted(() => {
	// Component mounted
});
</script> // Removed redundant export default
<style scoped>
.tutorial-navigation {
	margin-top: 3rem;
	margin-bottom: 2rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.navigation-buttons {
	display: flex;
	justify-content: space-between;
	padding-top: 1rem;
	border-top: 1px solid #f0f0f0;
}

/* When completion component is hidden, remove the top border and padding */
.navigation-buttons.no-completion {
	padding-top: 0;
	border-top: none;
}

.spacer {
	flex: 1;
}

@media (max-width: 768px) {
	.navigation-buttons {
		flex-direction: column;
		gap: 1rem;
	}

	.navigation-buttons .button {
		width: 100%;
	}
}

.button {
	transition: transform 0.2s ease;
}

.button:hover {
	transform: translateX(0);
}

.button.is-outlined:hover {
	transform: translateX(-2px);
}

.quiz-indicator {
	border-left: 4px solid #3e8ed0;
}
</style>
