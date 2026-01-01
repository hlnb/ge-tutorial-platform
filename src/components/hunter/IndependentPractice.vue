<template>
	<div class="box practice-independent">
		<h3>{{ icon }} {{ title }}</h3>
		<p v-if="description">{{ description }}</p>
		
		<div class="challenge-box">
			<h4>{{ taskTitle }}</h4>
			<div v-html="task"></div>
			
			<!-- Requirements -->
			<div v-if="requirements && requirements.length > 0" class="requirements mt-3">
				<h5>{{ requirementsTitle }}</h5>
				<ul>
					<li v-for="(requirement, index) in requirements" :key="index">
						{{ requirement }}
					</li>
				</ul>
			</div>

			<!-- Stretch Goals -->
			<div v-if="stretchGoals && stretchGoals.length > 0" class="stretch-goals mt-3">
				<h5>{{ stretchGoalsTitle }}</h5>
				<ul>
					<li v-for="(goal, index) in stretchGoals" :key="index">
						{{ goal }}
					</li>
				</ul>
			</div>
		</div>

		<!-- Rubric -->
		<div v-if="rubric && rubric.length > 0" class="rubric">
			<h4>{{ rubricTitle }}</h4>
			<table class="table is-bordered">
				<thead>
					<tr>
						<th>{{ rubricCriteriaHeader }}</th>
						<th>{{ rubricSuccessHeader }}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in rubric" :key="index">
						<td>{{ item.criteria }}</td>
						<td>{{ item.success }}</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Optional Code Area -->
		<slot name="code-area"></slot>
	</div>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		default: 'Independent Challenge'
	},
	icon: {
		type: String,
		default: '💪'
	},
	description: {
		type: String,
		default: 'Now try this on your own without hints!'
	},
	taskTitle: {
		type: String,
		default: 'Your Task:'
	},
	task: {
		type: String,
		required: true
	},
	requirementsTitle: {
		type: String,
		default: 'Requirements:'
	},
	requirements: {
		type: Array,
		default: () => []
	},
	stretchGoalsTitle: {
		type: String,
		default: 'Stretch Goals (Optional):'
	},
	stretchGoals: {
		type: Array,
		default: () => []
	},
	rubricTitle: {
		type: String,
		default: 'Success Criteria:'
	},
	rubricCriteriaHeader: {
		type: String,
		default: 'Criteria'
	},
	rubricSuccessHeader: {
		type: String,
		default: 'You\'ve succeeded if...'
	},
	rubric: {
		type: Array,
		default: () => []
	}
});
</script>

<style scoped>
.practice-independent {
	background: #fef2f2;
	border-left: 4px solid #dc2626;
	padding: 1.5rem;
	border-radius: 8px;
	margin: 2rem 0;
}

.practice-independent h3 {
	color: #991b1b;
	margin-bottom: 1rem;
	font-size: 1.5rem;
	font-weight: bold;
}

.practice-independent > p {
	margin-bottom: 1.5rem;
	line-height: 1.6;
}

.challenge-box {
	background: white;
	padding: 1.5rem;
	border-radius: 8px;
	margin: 1rem 0;
	border: 1px solid #fecaca;
}

.challenge-box h4 {
	color: #991b1b;
	margin-bottom: 0.75rem;
	font-size: 1.25rem;
	font-weight: bold;
}

.challenge-box h5 {
	color: #991b1b;
	margin-bottom: 0.5rem;
	font-size: 1.1rem;
	font-weight: bold;
}

.requirements ul,
.stretch-goals ul {
	margin-left: 1.5rem;
}

.requirements li,
.stretch-goals li {
	margin: 0.5rem 0;
	line-height: 1.6;
}

.stretch-goals {
	padding-top: 1rem;
	border-top: 1px dashed #fca5a5;
}

.rubric {
	background: white;
	padding: 1.5rem;
	border-radius: 8px;
	margin-top: 1rem;
	border: 2px solid #dc2626;
}

.rubric h4 {
	margin-bottom: 1rem;
	color: #991b1b;
	font-size: 1.25rem;
	font-weight: bold;
}

.rubric table {
	width: 100%;
	margin-top: 0.5rem;
}

.rubric th {
	background: #fee2e2;
	color: #991b1b;
	font-weight: bold;
	padding: 0.75rem;
}

.rubric td {
	padding: 0.75rem;
	line-height: 1.6;
}

.rubric tr:nth-child(even) {
	background: #fef2f2;
}
</style>
