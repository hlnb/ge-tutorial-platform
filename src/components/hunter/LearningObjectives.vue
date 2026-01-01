<template>
	<section class="objectives">
		<div class="box highlight-box">
			<h3><i class="fas fa-graduation-cap"></i> Learning Objectives</h3>
			<p><strong>{{ objectivesHeader }}</strong></p>
			<ul class="objectives-list">
				<li v-for="(objective, index) in objectives" :key="index">
					✓ <strong>{{ typeof objective === 'string' ? getVerbFromText(objective) : (objective.verb || getVerbFromText(objective.text)) }}</strong> 
					{{ getObjectiveContent(objective) }}
					<span v-if="typeof objective === 'object' && objective.bloomsLevel" class="blooms-tag">{{ objective.bloomsLevel }}</span>
				</li>
			</ul>
			
			<div v-if="purpose" class="purpose-statement">
				<h4><i class="fas fa-lightbulb"></i> Why This Matters:</h4>
				<p>{{ purpose }}</p>
			</div>

			<div v-if="prerequisites && prerequisites.length > 0" class="prerequisites mt-4">
				<h4><i class="fas fa-clipboard-check"></i> Before You Start:</h4>
				<p>You should be familiar with:</p>
				<ul>
					<li v-for="(prereq, index) in prerequisites" :key="index">
						<i class="fas fa-check-circle has-text-success"></i>
						{{ prereq.topic }}
						<router-link v-if="prereq.link" :to="prereq.link" class="ml-2">
							Review here
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script setup>
const props = defineProps({
	objectivesHeader: {
		type: String,
		default: 'By the end of this lesson, you\'ll be able to:'
	},
	objectives: {
		type: Array,
		required: true
	},
	purpose: {
		type: String,
		default: ''
	},
	prerequisites: {
		type: Array,
		default: () => []
	}
});

const getVerbFromText = (text) => {
	// Extract the first word if it's a common Bloom's verb
	const bloomsVerbs = ['Understand', 'Explain', 'Identify', 'Describe', 'Demonstrate', 'Create', 'Analyze', 'Apply', 'Evaluate', 'Remember'];
	const firstWord = text.split(' ')[0];
	return bloomsVerbs.includes(firstWord) ? firstWord : '';
};

const getObjectiveContent = (objective) => {
	if (typeof objective === 'string') return objective;
	if (objective.verb) {
		// Remove the verb from the text if it's already at the start
		return objective.text.replace(new RegExp(`^${objective.verb}\\s*`, 'i'), '');
	}
	return objective.text;
};
</script>

<style scoped>
.objectives {
	margin: 2rem 0;
}

.highlight-box {
	background-color: #f5f5f5;
	padding: 1.5rem;
	border-radius: 8px;
	border: 2px solid #e5e7eb;
}

.highlight-box h3 {
	color: #1f2937;
	margin-bottom: 1rem;
	font-size: 1.5rem;
}

.objectives-list {
	list-style: none;
	padding-left: 0;
	margin: 1rem 0;
}

.objectives-list li {
	padding: 0.75rem 0;
	padding-left: 1.5rem;
	position: relative;
	line-height: 1.6;
}

.blooms-tag {
	display: inline-block;
	background: #e0e7ff;
	color: #4338ca;
	padding: 0.125rem 0.5rem;
	border-radius: 4px;
	font-size: 0.75rem;
	margin-left: 0.5rem;
	font-weight: 600;
}

.purpose-statement {
	background: #fff9e6;
	padding: 1rem;
	border-radius: 8px;
	margin-top: 1rem;
	border-left: 4px solid #ffd700;
}

.purpose-statement h4 {
	color: #d97706;
	margin-bottom: 0.5rem;
	font-size: 1.1rem;
	font-weight: bold;
}

.purpose-statement p {
	color: #78350f;
	line-height: 1.6;
}

.prerequisites {
	background: #f0f9ff;
	padding: 1rem;
	border-radius: 8px;
	border-left: 4px solid #3b82f6;
}

.prerequisites h4 {
	color: #1e40af;
	margin-bottom: 0.5rem;
	font-size: 1.1rem;
	font-weight: bold;
}

.prerequisites ul {
	list-style: none;
	padding-left: 0;
	margin: 0.5rem 0;
}

.prerequisites li {
	padding: 0.25rem 0;
}
</style>
