<template>
	<div class="box practice-guided">
		<h3><i class="fas fa-hands-helping"></i> {{ title }}</h3>
		<p v-if="description">{{ description }}</p>
		
		<div class="steps">
			<div v-for="(step, index) in steps" :key="index" class="step-item">
				<h4>{{ step.title || `Step ${index + 1}` }}</h4>
				<div v-html="step.instructions"></div>
				
				<!-- Hints -->
				<div v-if="step.hints && step.hints.length > 0" class="hint-box">
					<details>
						<summary><i class="fas fa-lightbulb"></i> 💡 {{ step.hintLabel || 'Need a hint?' }}</summary>
						<div class="hint-content">
							<div v-for="(hint, hintIndex) in step.hints" :key="hintIndex" class="hint">
								{{ hint }}
							</div>
						</div>
					</details>
				</div>
			</div>
		</div>

		<!-- Success Criteria -->
		<div v-if="successCriteria && successCriteria.length > 0" class="success-criteria">
			<h4><i class="fas fa-check-circle"></i> {{ successCriteriaTitle }}</h4>
			<ul>
				<li v-for="(criterion, index) in successCriteria" :key="index">
					☐ {{ criterion }}
				</li>
			</ul>
		</div>

		<!-- Optional Code Area -->
		<slot name="code-area"></slot>
	</div>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		default: 'Guided Practice (Support Available)'
	},
	description: {
		type: String,
		default: ''
	},
	steps: {
		type: Array,
		required: true
	},
	successCriteria: {
		type: Array,
		default: () => []
	},
	successCriteriaTitle: {
		type: String,
		default: 'You\'re on track if you can:'
	}
});
</script>

<style scoped>
.practice-guided {
	background: #f0fdf4;
	border-left: 4px solid #22c55e;
	padding: 1.5rem;
	border-radius: 8px;
	margin: 2rem 0;
}

.practice-guided h3 {
	color: #15803d;
	margin-bottom: 1rem;
	font-size: 1.5rem;
	font-weight: bold;
}

.practice-guided > p {
	margin-bottom: 1.5rem;
	line-height: 1.6;
}

.steps {
	margin: 1.5rem 0;
}

.step-item {
	background: white;
	padding: 1.5rem;
	border-radius: 8px;
	margin-bottom: 1.5rem;
	border: 1px solid #e5e7eb;
}

.step-item:last-child {
	margin-bottom: 0;
}

.step-item h4 {
	color: #15803d;
	margin-bottom: 0.75rem;
	font-size: 1.25rem;
	font-weight: bold;
}

.hint-box {
	margin-top: 1rem;
	padding: 0.75rem;
	background: #fef3c7;
	border-radius: 4px;
}

.hint-box details summary {
	cursor: pointer;
	color: #92400e;
	font-weight: 600;
	list-style: none;
}

.hint-box details summary::-webkit-details-marker {
	display: none;
}

.hint-box details[open] {
	padding: 0.5rem;
}

.hint-content {
	margin-top: 0.75rem;
	padding-left: 0.5rem;
}

.hint {
	margin: 0.5rem 0;
	padding: 0.5rem;
	background: white;
	border-radius: 4px;
	line-height: 1.6;
}

.success-criteria {
	background: white;
	padding: 1rem;
	border-radius: 4px;
	margin-top: 1.5rem;
	border: 2px solid #22c55e;
}

.success-criteria h4 {
	color: #15803d;
	margin-bottom: 0.75rem;
	font-size: 1.1rem;
	font-weight: bold;
}

.success-criteria ul {
	list-style: none;
	padding-left: 0;
	margin: 0;
}

.success-criteria li {
	padding: 0.25rem 0;
	padding-left: 1.5rem;
	position: relative;
}
</style>
