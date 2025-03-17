<template>
	<section class="tutorial-quiz mt-6" v-if="quizAvailable">
		<h2 class="title is-3">{{ title }}</h2>
		<p class="mb-4">{{ description }}</p>

		<QuizComponent
			:title="quizTitle"
			:description="quizDescription"
			:tutorial-path="tutorialPath"
			@quiz-completed="handleQuizCompleted"
		/>
	</section>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import QuizComponent from '@/components/QuizComponent.vue';
import { hasQuiz } from '@/utils/quizUtils';
import { useProgressTracking } from '@/utils/progressUtils';

const route = useRoute();
const quizAvailable = ref(true);

// Initialize progress tracking
const { saveQuizResult } = useProgressTracking();

const props = defineProps({
	title: {
		type: String,
		default: 'Test Your Knowledge',
	},
	description: {
		type: String,
		default:
			"Let's see how well you understand the concepts covered in this tutorial. Take this quick quiz to test your knowledge!",
	},
	quizTitle: {
		type: String,
		default: null,
	},
	quizDescription: {
		type: String,
		default: null,
	},
	tutorialPath: {
		type: String,
		default: null,
	},
});

const emit = defineEmits(['quiz-completed']);

// Use current route path if tutorialPath is not provided
const currentPath = computed(() => props.tutorialPath || route.path);

// Check if quiz is available for this tutorial
onMounted(() => {
	quizAvailable.value = hasQuiz(currentPath.value);
});

// Handle quiz completion
const handleQuizCompleted = (result) => {
	// Save quiz result
	if (result) {
		saveQuizResult(currentPath.value, result.score, result.total);
	}
	emit('quiz-completed', result);
};
</script>

<script>
export default {
	name: 'TutorialQuiz'
}
</script>

<style scoped>
.tutorial-quiz {
	margin-bottom: 3rem;
}
</style>
