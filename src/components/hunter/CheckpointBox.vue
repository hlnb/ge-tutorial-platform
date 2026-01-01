<template>
	<section class="check-understanding">
		<div class="box checkpoint">
			<h3>{{ icon }} {{ title }}</h3>
			<p v-if="description"><strong>{{ description }}</strong></p>
			
			<!-- Questions Format -->
			<ol v-if="questions && questions.length > 0" class="checkpoint-questions">
				<li v-for="(question, index) in questions" :key="index">
					{{ question.question }}
				</li>
			</ol>

			<!-- Quiz Format -->
			<div v-if="quizQuestions && quizQuestions.length > 0" class="quiz-questions">
				<div v-for="(question, index) in quizQuestions" :key="index" class="question-box">
					<p><strong>Question:</strong> {{ question.question }}</p>
					<details>
						<summary class="button is-info is-light is-small">Show Answer</summary>
						<p class="mt-2"><strong>Answer:</strong> {{ question.answer }}</p>
					</details>
				</div>
			</div>
			
			<!-- Answers Section -->
			<details v-if="questions && questions.length > 0 && !hideAnswers">
				<summary class="button is-info is-light mt-3">
					<i class="fas fa-eye"></i> {{ answersButtonText }}
				</summary>
				<div class="answer-key mt-3">
					<ol>
						<li v-for="(question, index) in questions" :key="index">
							<strong v-if="question.answerLabel">{{ question.answerLabel }}:</strong>
							{{ question.answer }}
						</li>
					</ol>
				</div>
			</details>
			
			<!-- Self Assessment -->
			<div v-if="showSelfAssessment" class="self-assessment mt-4">
				<p><strong>{{ selfAssessmentPrompt }}</strong></p>
				<p class="confidence-scale">{{ confidenceScale }}</p>
			</div>
		</div>
	</section>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		default: 'Pause & Check: Do You Understand?'
	},
	icon: {
		type: String,
		default: '⏸️'
	},
	description: {
		type: String,
		default: 'Before moving forward, can you answer these?'
	},
	questions: {
		type: Array,
		default: () => []
	},
	quizQuestions: {
		type: Array,
		default: () => []
	},
	answersButtonText: {
		type: String,
		default: 'Check Your Answers'
	},
	hideAnswers: {
		type: Boolean,
		default: false
	},
	showSelfAssessment: {
		type: Boolean,
		default: true
	},
	selfAssessmentPrompt: {
		type: String,
		default: 'How confident are you with this concept?'
	},
	confidenceScale: {
		type: String,
		default: '😕 Still confused | 🤔 Getting there | 😊 Got it! | 🎉 Could explain it to a friend!'
	}
});
</script>

<style scoped>
.check-understanding {
	margin: 3rem 0;
}

.checkpoint {
	background: #f0f9ff;
	border-left: 4px solid #3b82f6;
	padding: 1.5rem;
	border-radius: 8px;
}

.checkpoint h3 {
	color: #1e40af;
	margin-bottom: 1rem;
	font-size: 1.5rem;
	font-weight: bold;
}

.checkpoint p {
	margin-bottom: 1rem;
}

.checkpoint-questions {
	margin: 1rem 0;
	margin-left: 1.5rem;
}

.checkpoint-questions li {
	margin: 0.75rem 0;
	line-height: 1.6;
}

.quiz-questions {
	margin: 1rem 0;
}

.question-box {
	background: white;
	padding: 1rem;
	border-radius: 4px;
	border: 1px solid #e5e7eb;
	margin-bottom: 1rem;
}

.question-box:last-child {
	margin-bottom: 0;
}

.question-box p {
	margin-bottom: 0.5rem;
}

.question-box details summary {
	cursor: pointer;
	margin-top: 0.5rem;
}

.answer-key {
	background: white;
	padding: 1rem;
	border-radius: 4px;
	border: 2px solid #3b82f6;
}

.answer-key ol {
	margin-left: 1.5rem;
}

.answer-key li {
	margin: 0.75rem 0;
	line-height: 1.6;
}

.self-assessment {
	background: white;
	padding: 1rem;
	border-radius: 4px;
	text-align: center;
}

.self-assessment p:first-child {
	margin-bottom: 0.5rem;
}

.confidence-scale {
	font-size: 1.1rem;
	margin-top: 0.5rem;
}
</style>
