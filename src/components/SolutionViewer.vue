<script setup>
import { ref, computed } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	solution: {
		type: String,
		required: true,
	},
	preview: {
		type: Boolean,
		default: true,
	},
	explanation: {
		type: String,
		required: true,
	},
	previewHtml: {
		type: String,
		default: '<div>No preview available</div>',
	},
});

const showSolution = ref(false);
const solutionCode = ref(props.solution);
const activeTab = ref('code'); // Track active tab

// Function to handle tab switching
const switchTab = (tab) => {
	activeTab.value = tab;
};

// Create a style element with the solution CSS
const previewStyle = computed(
	() => `
	<style>
		${solutionCode.value}
	</style>
	${props.previewHtml}
`,
);
</script>

<template>
	<div class="solution-viewer">
		<div class="solution-header">
			<h3 class="title is-4">{{ title }}</h3>
			<p class="subtitle is-6">{{ description }}</p>

			<button class="button is-info" @click="showSolution = !showSolution">
				<span class="icon">
					<i :class="showSolution ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
				</span>
				<span>{{ showSolution ? 'Hide Solution' : 'Show Solution' }}</span>
			</button>
		</div>

		<div v-if="showSolution" class="solution-content">
			<div class="tabs">
				<ul>
					<li :class="{ 'is-active': activeTab === 'code' }">
						<a @click="switchTab('code')">Code</a>
					</li>
					<li v-if="preview" :class="{ 'is-active': activeTab === 'preview' }">
						<a @click="switchTab('preview')">Preview</a>
					</li>
					<li :class="{ 'is-active': activeTab === 'explanation' }">
						<a @click="switchTab('explanation')">Explanation</a>
					</li>
				</ul>
			</div>

			<div class="solution-body">
				<!-- Code Tab -->
				<div v-if="activeTab === 'code'">
					<CodeMirror
						:model-value="solutionCode"
						:readonly="true"
						:height="300"
					/>
				</div>

				<!-- Preview Tab -->
				<div v-if="activeTab === 'preview'" class="preview-container">
					<div v-html="previewStyle" class="solution-preview"></div>
				</div>

				<!-- Explanation Tab -->
				<div v-if="activeTab === 'explanation'" class="explanation-content">
					<div class="content" v-html="explanation"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.solution-viewer {
	margin: 2rem 0;
	border: 1px solid #dbdbdb;
	border-radius: 6px;
}

.solution-header {
	padding: 1.5rem;
	background-color: #f8f9fa;
	border-bottom: 1px solid #dbdbdb;
}

.solution-content {
	padding: 1.5rem;
}

.solution-body {
	margin-top: 1rem;
}

.tabs li a {
	cursor: pointer;
}

.preview-container {
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	padding: 1rem;
	background-color: white;
	min-height: 300px;
	overflow: auto;
}

.solution-preview {
	height: 100%;
}

.solution-preview :deep(*) {
	/* Allow styling of preview content */
	all: revert;
}

.explanation-content {
	padding: 1rem;
	background-color: #f8f9fa;
	border-radius: 4px;
}
</style>
