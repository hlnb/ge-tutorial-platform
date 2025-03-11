<template>
	<div class="codemirror-container">
		<pre><code>{{ codeContent }}</code></pre>
	</div>
</template>

<script setup>
import { computed } from 'vue';

// Props with defaults
const props = defineProps({
	// Support both 'code' and 'value' props for compatibility
	code: {
		type: String,
		default: '',
	},
	value: {
		type: String,
		default: '',
	},
	language: {
		type: String,
		default: 'javascript',
	},
	readOnly: {
		type: Boolean,
		default: true,
	},
});

// Computed property to handle both code and value props
const codeContent = computed(() => {
	return props.code || props.value || '';
});
</script>

<style scoped>
.codemirror-container {
	margin: 1rem 0;
	border-radius: 4px;
	overflow: hidden;
}

pre {
	margin: 0;
	padding: 1rem;
	background-color: #2d2d2d;
	color: #ccc;
	border-radius: 4px;
	overflow-x: auto;
	font-family: monospace;
	font-size: 0.9rem;
	line-height: 1.5;
	tab-size: 2;
	white-space: pre-wrap;
}

code {
	font-family: inherit;
}
</style>
