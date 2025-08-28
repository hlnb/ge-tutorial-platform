<template>
	<div id="quiz" class="quiz-container">
		<div class="box quiz-box" :class="{ 'is-success': quizCompleted }">
			<h3 class="title is-4">
				<i class="fas fa-question-circle"></i> {{ title }}
			</h3>

			<p class="quiz-description">{{ description }}</p>

			<div v-if="!quizStarted && !quizCompleted" class="quiz-intro">
				<button
					class="button is-primary"
					:disabled="!quizQuestions || quizQuestions.length === 0"
					@click="startQuiz"
				>
					Start Quiz
				</button>
				<p
					v-if="!quizQuestions || quizQuestions.length === 0"
					class="notification is-warning mt-3"
				>
					No quiz questions available for this tutorial.
				</p>
			</div>

			<div
				v-if="
					quizStarted &&
					!quizCompleted &&
					quizQuestions &&
					quizQuestions.length > 0
				"
				class="quiz-questions"
			>
				<div
					v-for="(question, index) in quizQuestions"
					v-show="currentQuestionIndex === index"
					:key="index"
					class="quiz-question"
				>
					<p class="question-text">{{ index + 1 }}. {{ question.question }}</p>

					<div class="options">
						<div
							v-for="(option, optIndex) in question.options"
							:key="optIndex"
							class="option"
							:class="{
								selected: selectedAnswers[index] === optIndex,
								correct: showResults && optIndex === question.correctAnswer,
								incorrect:
									showResults &&
									selectedAnswers[index] === optIndex &&
									optIndex !== question.correctAnswer,
							}"
							@click="selectAnswer(index, optIndex)"
						>
							<span class="option-letter">{{
								['A', 'B', 'C', 'D'][optIndex]
							}}</span>
							<span class="option-text">{{ option }}</span>
						</div>
					</div>

					<div
						v-if="showResults && index === currentQuestionIndex"
						class="feedback mt-4"
					>
						<div
							v-if="selectedAnswers[index] === question.correctAnswer"
							class="notification is-success"
						>
							<i class="fas fa-check-circle"></i> Correct!
							<p v-if="question.explanation" class="mt-2">
								{{ question.explanation }}
							</p>
						</div>
						<div v-else class="notification is-danger">
							<i class="fas fa-times-circle"></i> Incorrect. The correct answer
							is {{ ['A', 'B', 'C', 'D'][question.correctAnswer] }}.
							<p v-if="question.explanation" class="mt-2">
								{{ question.explanation }}
							</p>
						</div>
					</div>

					<div class="quiz-navigation mt-4">
						<button
							v-if="index > 0"
							class="button is-light"
							:disabled="showResults"
							@click="currentQuestionIndex--"
						>
							Previous
						</button>

						<div class="spacer"></div>

						<button
							v-if="!showResults && index < quizQuestions.length - 1"
							class="button is-primary"
							:disabled="selectedAnswers[index] === undefined"
							@click="currentQuestionIndex++"
						>
							Next
						</button>

						<button
							v-if="!showResults && index === quizQuestions.length - 1"
							class="button is-primary"
							:disabled="selectedAnswers[index] === undefined"
							@click="submitQuiz"
						>
							Submit
						</button>

						<button
							v-if="showResults && index < quizQuestions.length - 1"
							class="button is-primary"
							@click="currentQuestionIndex++"
						>
							Next
						</button>

						<button
							v-if="showResults && index === quizQuestions.length - 1"
							class="button is-success"
							@click="finishQuiz"
						>
							Finish Quiz
						</button>
					</div>
				</div>

				<div
					v-if="quizQuestions && quizQuestions.length > 0"
					class="progress-indicator mt-4"
				>
					<div class="progress-dots">
						<span
							v-for="(question, index) in quizQuestions"
							:key="index"
							class="progress-dot"
							:class="{
								active: currentQuestionIndex === index,
								completed: selectedAnswers[index] !== undefined,
								correct:
									showResults &&
									selectedAnswers[index] === question.correctAnswer,
								incorrect:
									showResults &&
									selectedAnswers[index] !== undefined &&
									selectedAnswers[index] !== question.correctAnswer,
							}"
							@click="showResults ? (currentQuestionIndex = index) : null"
						></span>
					</div>
					<div class="progress-text">
						Question {{ currentQuestionIndex + 1 }} of
						{{ quizQuestions.length }}
					</div>
				</div>
			</div>

			<div v-if="quizCompleted" class="quiz-results">
				<div class="result-summary">
					<div class="score-circle" :class="getScoreClass">
						<span class="score">{{ score }}</span>
						<span class="total"
							>/ {{ quizQuestions ? quizQuestions.length : 0 }}</span
						>
					</div>
					<p class="result-message">
						<span v-if="quizQuestions && score === quizQuestions.length"
							>Perfect score! Excellent work!</span
						>
						<span
							v-else-if="quizQuestions && score >= quizQuestions.length * 0.8"
							>Great job! You've mastered most of the content.</span
						>
						<span
							v-else-if="quizQuestions && score >= quizQuestions.length * 0.6"
							>Good effort! You're on the right track.</span
						>
						<span v-else
							>Keep practicing! Review the material and try again.</span
						>
					</p>
				</div>

				<div class="actions mt-4">
					<button class="button is-primary" @click="resetQuiz">
						Try Again
					</button>
					<button class="button is-info ml-2" @click="reviewAnswers">
						Review Answers
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import progressService from '@/services/ProgressService';
import { getQuizQuestionsForPath, getTutorialTitle } from '@/utils/quizUtils';

const route = useRoute();

// Define props
const props = defineProps({
	title: {
		type: String,
		default: null, // Will be auto-generated if not provided
	},
	description: {
		type: String,
		default: null, // Will be auto-generated if not provided
	},
	questions: {
		type: Array,
		default: null, // Will be auto-loaded if not provided
	},
	tutorialPath: {
		type: String,
		default: null, // Will use current route path if not provided
	},
});

// Define emits
const emit = defineEmits(['quiz-completed', 'quiz-started', 'quiz-reset']);

// State
const quizStarted = ref(false);
const quizCompleted = ref(false);
const currentQuestionIndex = ref(0);
const selectedAnswers = ref([]);
const showResults = ref(false);
const score = ref(0);

// Computed properties
const currentPath = computed(() => props.tutorialPath || route.path);

const quizTitle = computed(() => {
	if (props.title) return props.title;
	return `${getTutorialTitle(currentPath.value)} Quiz`;
});

const quizDescription = computed(() => {
	if (props.description) return props.description;
	return `Test your understanding of ${getTutorialTitle(
		currentPath.value,
)} concepts.`;
});

const quizQuestions = computed(() => {
	if (props.questions) return props.questions;
	return getQuizQuestionsForPath(currentPath.value) || [];
});

const getScoreClass = computed(() => {
	const percentage =
		quizQuestions.value && quizQuestions.value.length > 0
			? (score.value / quizQuestions.value.length) * 100
			: 0;
	if (percentage >= 80) return 'is-success';
	if (percentage >= 60) return 'is-warning';
	return 'is-danger';
});

// Check if quiz was previously completed
const checkQuizStatus = async () => {
	const progress = await progressService.getProgress();
	if (progress?.completedQuizzes?.includes(currentPath.value)) {
		quizCompleted.value = true;
		if (progress?.quizResults?.[currentPath.value]?.score) {
			score.value = progress.quizResults[currentPath.value].score;
		}
	}
};

// Start the quiz
const startQuiz = () => {
	quizStarted.value = true;
	selectedAnswers.value = new Array(
		quizQuestions.value ? quizQuestions.value.length : 0,
	);
	emit('quiz-started');
};

// Select an answer for a question
const selectAnswer = (questionIndex, answerIndex) => {
	if (!showResults.value) {
		selectedAnswers.value[questionIndex] = answerIndex;
	}
};

// Submit the quiz for grading
const submitQuiz = () => {
	showResults.value = true;
	score.value = calculateScore();
};

// Calculate the score
const calculateScore = () => {
	if (!quizQuestions.value || quizQuestions.value.length === 0) return 0;

	let correctAnswers = 0;
	quizQuestions.value.forEach((question, index) => {
		if (selectedAnswers.value[index] === question.correctAnswer) {
			correctAnswers++;
		}
	});
	return correctAnswers;
};

// Finish the quiz and save progress
const finishQuiz = () => {
	quizCompleted.value = true;
	showResults.value = false;

	// Save quiz completion to progress service
	if (progressService.isProgressTrackingEnabled() && quizQuestions.value) {
		progressService.saveQuizResult(
			currentPath.value,
			String(score.value),
			String(quizQuestions.value.length)
		);
	}

	emit('quiz-completed', {
		score: score.value,
		total: quizQuestions.value ? quizQuestions.value.length : 0,
	});
};

// Reset the quiz
const resetQuiz = () => {
	quizStarted.value = false;
	quizCompleted.value = false;
	currentQuestionIndex.value = 0;
	selectedAnswers.value = new Array(
		quizQuestions.value ? quizQuestions.value.length : 0,
	);
	showResults.value = false;
	score.value = 0;
	emit('quiz-reset');
};

// Review answers after completing the quiz
const reviewAnswers = () => {
	quizStarted.value = true;
	quizCompleted.value = false;
	currentQuestionIndex.value = 0;
	showResults.value = true;
};

// Watch for route changes to reset the quiz
watch(
	() => route.path,
	() => {
		resetQuiz();
		checkQuizStatus();
	},
);

// Lifecycle hooks
onMounted(() => {
	checkQuizStatus();
});
</script>

<script>
export default {
	name: 'QuizComponent'
}
</script>

<style scoped>
.quiz-container {
	margin: 2rem 0;
	scroll-margin-top: 2rem;
}

.quiz-box {
	border-radius: 8px;
	transition: all 0.3s ease;
}

.quiz-box.is-success {
	border-left: 5px solid #48c78e;
}

.quiz-description {
	margin-bottom: 1.5rem;
}

.quiz-intro {
	text-align: center;
	padding: 2rem 0;
}

.quiz-question {
	margin-bottom: 1rem;
}

.question-text {
	font-weight: 600;
	font-size: 1.1rem;
	margin-bottom: 1rem;
}

.options {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.option {
	display: flex;
	align-items: center;
	padding: 0.75rem 1rem;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	cursor: pointer;
	transition: all 0.2s ease;
}

.option:hover {
	background-color: #f5f5f5;
}

.option.selected {
	border-color: #3e8ed0;
	background-color: #eff5fb;
}

.option.correct {
	border-color: #48c78e;
	background-color: #effaf5;
}

.option.incorrect {
	border-color: #f14668;
	background-color: #feecf0;
}

.option-letter {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: #f5f5f5;
	margin-right: 1rem;
	font-weight: bold;
}

.option.selected .option-letter {
	background-color: #3e8ed0;
	color: white;
}

.option.correct .option-letter {
	background-color: #48c78e;
	color: white;
}

.option.incorrect .option-letter {
	background-color: #f14668;
	color: white;
}

.quiz-navigation {
	display: flex;
	justify-content: space-between;
	margin-top: 1.5rem;
}

.spacer {
	flex: 1;
}

.progress-indicator {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
}

.progress-dots {
	display: flex;
	gap: 0.5rem;
	margin-bottom: 0.5rem;
}

.progress-dot {
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background-color: #dbdbdb;
	cursor: pointer;
	transition: all 0.2s ease;
}

.progress-dot.active {
	background-color: #3e8ed0;
	transform: scale(1.2);
}

.progress-dot.completed {
	background-color: #3e8ed0;
}

.progress-dot.correct {
	background-color: #48c78e;
}

.progress-dot.incorrect {
	background-color: #f14668;
}

.progress-text {
	font-size: 0.9rem;
	color: #666;
}

.quiz-results {
	text-align: center;
	padding: 1rem 0;
}

.result-summary {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
}

.score-circle {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: #f5f5f5;
	border: 3px solid #dbdbdb;
}

.score-circle.is-success {
	background-color: #effaf5;
	border-color: #48c78e;
}

.score-circle.is-warning {
	background-color: #fffaeb;
	border-color: #ffe08a;
}

.score-circle.is-danger {
	background-color: #feecf0;
	border-color: #f14668;
}

.score {
	font-size: 2.5rem;
	font-weight: bold;
	line-height: 1;
}

.total {
	font-size: 1.2rem;
	color: #666;
}

.result-message {
	font-size: 1.1rem;
	max-width: 400px;
}

@media (max-width: 768px) {
	.option {
		padding: 0.5rem 0.75rem;
	}

	.option-letter {
		width: 25px;
		height: 25px;
		margin-right: 0.75rem;
	}
}
</style>
