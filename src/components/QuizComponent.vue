<template>
	<div id="quiz" class="quiz-container">
		<div class="box quiz-box" :class="{ 'is-success': quizCompleted }">
			<h3 class="title is-4">
				<i class="fas fa-question-circle"></i> {{ title }}
			</h3>

			<p class="quiz-description">{{ description }}</p>

			<div v-if="!quizStarted && !quizCompleted" class="quiz-intro">
				<button @click="startQuiz" class="button is-primary">Start Quiz</button>
			</div>

			<div v-if="quizStarted && !quizCompleted" class="quiz-questions">
				<div
					v-for="(question, index) in questions"
					:key="index"
					class="quiz-question"
					v-show="currentQuestionIndex === index"
				>
					<p class="question-text">{{ index + 1 }}. {{ question.text }}</p>

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
							@click="currentQuestionIndex--"
							class="button is-light"
							:disabled="showResults"
						>
							Previous
						</button>

						<div class="spacer"></div>

						<button
							v-if="!showResults && index < questions.length - 1"
							@click="currentQuestionIndex++"
							class="button is-primary"
							:disabled="selectedAnswers[index] === undefined"
						>
							Next
						</button>

						<button
							v-if="!showResults && index === questions.length - 1"
							@click="submitQuiz"
							class="button is-primary"
							:disabled="selectedAnswers[index] === undefined"
						>
							Submit
						</button>

						<button
							v-if="showResults && index < questions.length - 1"
							@click="currentQuestionIndex++"
							class="button is-primary"
						>
							Next
						</button>

						<button
							v-if="showResults && index === questions.length - 1"
							@click="finishQuiz"
							class="button is-success"
						>
							Finish Quiz
						</button>
					</div>
				</div>

				<div class="progress-indicator mt-4">
					<div class="progress-dots">
						<span
							v-for="(question, index) in questions"
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
						Question {{ currentQuestionIndex + 1 }} of {{ questions.length }}
					</div>
				</div>
			</div>

			<div v-if="quizCompleted" class="quiz-results">
				<div class="result-summary">
					<div class="score-circle">
						<span class="score">{{ score }}</span>
						<span class="total">/ {{ questions.length }}</span>
					</div>
					<p class="result-message">
						<span v-if="score === questions.length"
							>Perfect score! Excellent work!</span
						>
						<span v-else-if="score >= questions.length * 0.8"
							>Great job! You've mastered most of the content.</span
						>
						<span v-else-if="score >= questions.length * 0.6"
							>Good effort! You're on the right track.</span
						>
						<span v-else
							>Keep practicing! Review the material and try again.</span
						>
					</p>
				</div>

				<div class="actions mt-4">
					<button @click="resetQuiz" class="button is-primary">
						Try Again
					</button>
					<button @click="reviewAnswers" class="button is-info ml-2">
						Review Answers
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import progressService from '@/services/ProgressService';

// Define props using standard JavaScript
const props = defineProps({
	title: {
		type: String,
		default: 'Knowledge Check',
	},
	description: {
		type: String,
		default:
			'Test your understanding of the concepts covered in this tutorial.',
	},
	questions: {
		type: Array,
		required: true,
		// Add a validator function to check question structure
		validator: (questions) => {
			if (!Array.isArray(questions)) return false;

			return questions.every(
				(question) =>
					question &&
					typeof question === 'object' &&
					typeof question.text === 'string' &&
					Array.isArray(question.options) &&
					typeof question.correctAnswer === 'number',
			);
		},
	},
	tutorialPath: {
		type: String,
		required: true,
	},
});

// Define emits using standard JavaScript
const emit = defineEmits(['quiz-completed', 'quiz-started', 'quiz-reset']);

const quizStarted = ref(false);
const quizCompleted = ref(false);
const currentQuestionIndex = ref(0);
const selectedAnswers = ref([]);
const showResults = ref(false);
const score = ref(0);

// Check if quiz was previously completed
const checkQuizStatus = () => {
	const progress = progressService.getProgress();
	if (
		progress &&
		progress.completedQuizzes &&
		progress.completedQuizzes.includes(props.tutorialPath)
	) {
		quizCompleted.value = true;
	}
};

// Start the quiz
const startQuiz = () => {
	quizStarted.value = true;
	selectedAnswers.value = new Array(props.questions.length);
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
	let correctAnswers = 0;
	props.questions.forEach((question, index) => {
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
	if (progressService.isProgressTrackingEnabled()) {
		// Use the saveQuizResult method to save both completion status and score
		progressService.saveQuizResult(
			props.tutorialPath,
			score.value,
			props.questions.length,
		);
	}

	emit('quiz-completed', {
		score: score.value,
		total: props.questions.length,
	});
};

// Reset the quiz
const resetQuiz = () => {
	quizStarted.value = false;
	quizCompleted.value = false;
	currentQuestionIndex.value = 0;
	selectedAnswers.value = new Array(props.questions.length);
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

// Check quiz status on component mount
checkQuizStatus();
</script>

<style scoped>
.quiz-container {
	margin: 2rem 0;
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
	background-color: #effaf5;
	border: 3px solid #48c78e;
}

.score {
	font-size: 2.5rem;
	font-weight: bold;
	color: #257953;
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
