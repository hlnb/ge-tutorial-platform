<template>
	<section class="test-your-knowledge mt-6">
		<div v-if="questionCount > 0" class="box knowledge-overview">
			<div class="knowledge-header">
				<div>
					<p class="eyebrow">Lesson checkpoint</p>
					<h2 class="title is-3">{{ sectionTitle }}</h2>
				</div>
				<span class="question-count">
					{{ questionCount }}
					{{ questionCount === 1 ? 'question' : 'questions' }}
				</span>
			</div>
			<p class="knowledge-copy">
				Strengthen your understanding of {{ tutorialTitle || 'this lesson' }} by answering
				the quiz below.
			</p>

			<TutorialQuiz
				:title="quizTitle"
				:description="quizDescription"
				:tutorial-path="tutorialPath"
				hide-header
			/>
		</div>
	</section>
</template>

<script setup>
import { computed } from 'vue';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import { getQuizQuestionsForPath, getTutorialTitle } from '@/utils/quizUtils';

const props = defineProps({
	tutorialPath: {
		type: String,
		required: true,
	},
	sectionTitle: {
		type: String,
		default: 'Test Your Knowledge',
	},
});

const questions = computed(() => getQuizQuestionsForPath(props.tutorialPath) || []);
const questionCount = computed(() => questions.value.length);
const tutorialTitle = computed(() => getTutorialTitle(props.tutorialPath));

const quizTitle = computed(() => {
	if (tutorialTitle.value) {
		return `${tutorialTitle.value} Quiz`;
	}
	return 'Tutorial Quiz';
});

const quizDescription = computed(() => {
	if (!questionCount.value) {
		return 'Quickly review what you learned before moving on.';
	}
	const plural = questionCount.value === 1 ? 'question' : 'questions';
	return `Answer ${questionCount.value} ${plural} to make sure the key ideas from this lesson stick.`;
});
</script>

<style scoped>
.test-your-knowledge {
	border-top: 1px solid #f0f4f8;
	padding-top: 2rem;
}

.knowledge-overview {
	background: #f8fafc;
	border-left: 4px solid #f7df1e;
	margin-bottom: 2rem;
}

.knowledge-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
}

.eyebrow {
	text-transform: uppercase;
	font-size: 0.8rem;
	letter-spacing: 0.08em;
	color: #64748b;
	margin-bottom: 0.25rem;
}

.question-count {
	font-weight: 700;
	color: #111827;
	font-size: 1rem;
	background: #fff7cc;
	padding: 0.35rem 0.85rem;
	border-radius: 999px;
}

.knowledge-copy {
	color: #475569;
}

.sample-questions {
	list-style: none;
	margin: 1rem 0 0;
	padding: 0;
	display: grid;
	gap: 0.65rem;
}

.sample-questions li {
	display: flex;
	align-items: flex-start;
	gap: 0.5rem;
	color: #1f2937;
}

.sample-questions i {
	color: #10b981;
	margin-top: 0.2rem;
}
</style>
