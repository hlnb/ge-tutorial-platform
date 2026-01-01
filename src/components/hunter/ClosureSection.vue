<template>
	<section class="closure">
		<div class="box closure-section">
			<h2><i class="fas fa-flag-checkered"></i> {{ title }}</h2>
			
			<!-- Key Takeaways -->
			<div v-if="keyTakeaways && keyTakeaways.length > 0" class="key-takeaways">
				<h3><i class="fas fa-star"></i> {{ takeawaysTitle }}</h3>
				<ul>
					<li v-for="(takeaway, index) in keyTakeaways" :key="index">
						{{ takeaway }}
					</li>
				</ul>
			</div>
			
			<!-- Objectives Review -->
			<div v-if="objectives && objectives.length > 0" class="objectives-review mt-5">
				<h3><i class="fas fa-check-double"></i> {{ objectivesReviewTitle }}</h3>
				<p>{{ objectivesPrompt }}</p>
				<ul class="objectives-checklist">
					<li v-for="(objective, index) in objectives" :key="index">
						✅ {{ objective }} <span class="has-text-success">{{ checkmarks[index % checkmarks.length] }}</span>
					</li>
				</ul>
				<p v-if="readinessMessage" class="mt-3">{{ readinessMessage }}</p>
			</div>
			
			<!-- Reflection Prompts -->
			<div v-if="reflectionPrompts && reflectionPrompts.length > 0" class="reflection-prompts mt-5">
				<h3><i class="fas fa-brain"></i> {{ reflectionTitle }}</h3>
				<div class="reflection-questions">
					<div v-for="(prompt, index) in reflectionPrompts" :key="index" class="question-card">
						<p v-if="prompt.title"><strong>{{ prompt.icon || '💭' }} {{ prompt.title }}</strong></p>
						<div v-if="prompt.content" v-html="prompt.content"></div>
						<ul v-if="prompt.questions && prompt.questions.length > 0">
							<li v-for="(question, qIndex) in prompt.questions" :key="qIndex">
								{{ question }}
							</li>
						</ul>
						<p v-if="prompt.note" class="mt-2" :class="prompt.noteClass || ''">{{ prompt.note }}</p>
					</div>
				</div>
			</div>

			<!-- Real World Application -->
			<div v-if="realWorldApplication" class="question-card mt-4">
				<p><strong>🤔 Real-World Test:</strong></p>
				<div v-html="realWorldApplication"></div>
			</div>

			<!-- Next Steps -->
			<div v-if="nextSteps" class="question-card mt-4">
				<p><strong>🎯 Looking Ahead:</strong></p>
				<div v-html="nextSteps"></div>
			</div>
		</div>
	</section>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		default: 'Lesson Complete: What You Learned'
	},
	takeawaysTitle: {
		type: String,
		default: 'Key Takeaways:'
	},
	keyTakeaways: {
		type: Array,
		default: () => []
	},
	objectivesReviewTitle: {
		type: String,
		default: 'Learning Objectives Review:'
	},
	objectivesPrompt: {
		type: String,
		default: 'Look back at what you set out to learn. Can you now:'
	},
	objectives: {
		type: Array,
		default: () => []
	},
	checkmarks: {
		type: Array,
		default: () => ['Check!', 'Got it!', 'Can explain it!', 'Could teach this!']
	},
	readinessMessage: {
		type: String,
		default: 'If you can confidently answer "yes" to most of these, you\'re ready to move on!'
	},
	reflectionTitle: {
		type: String,
		default: 'Think & Reflect:'
	},
	reflectionPrompts: {
		type: Array,
		default: () => []
	},
	realWorldApplication: {
		type: String,
		default: ''
	},
	nextSteps: {
		type: String,
		default: ''
	}
});
</script>

<style scoped>
.closure {
	margin: 3rem 0;
}

.closure-section {
	background: linear-gradient(135deg, #10b981 0%, #059669 100%);
	color: white;
	border: none;
	padding: 2rem;
	border-radius: 8px;
}

.closure-section h2,
.closure-section h3 {
	color: white;
	margin-bottom: 1rem;
}

.closure-section h2 {
	font-size: 1.75rem;
	font-weight: bold;
}

.closure-section h3 {
	font-size: 1.5rem;
	font-weight: bold;
}

.key-takeaways,
.objectives-review,
.reflection-prompts {
	background: rgba(255, 255, 255, 0.1);
	padding: 1.5rem;
	border-radius: 8px;
}

.key-takeaways ul,
.objectives-review ul {
	list-style: none;
	padding-left: 0;
	margin: 1rem 0;
}

.key-takeaways li,
.objectives-checklist li {
	padding: 0.5rem 0;
	padding-left: 1.5rem;
	position: relative;
	line-height: 1.6;
}

.key-takeaways li:before {
	content: '→';
	position: absolute;
	left: 0;
	color: #ffd700;
	font-weight: bold;
	font-size: 1.2rem;
}

.objectives-review p {
	margin: 0.5rem 0;
	line-height: 1.6;
}

.reflection-questions {
	margin-top: 1rem;
}

.question-card {
	background: white;
	color: #1f2937;
	padding: 1.5rem;
	border-radius: 8px;
	border-left: 4px solid #10b981;
	margin-bottom: 1rem;
}

.question-card:last-child {
	margin-bottom: 0;
}

.question-card strong {
	color: #059669;
	font-size: 1.1rem;
}

.question-card ul,
.question-card ol {
	margin: 0.75rem 0;
	margin-left: 1.5rem;
}

.question-card li {
	margin: 0.5rem 0;
	line-height: 1.6;
}

.question-card p {
	line-height: 1.6;
}

.has-text-success {
	color: #10b981;
	font-style: italic;
	font-weight: 600;
}
</style>
