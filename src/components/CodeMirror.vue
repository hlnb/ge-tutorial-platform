<template>
	<div class="codemirror-container">
		<pre><code ref="codeElement" :class="language"></code></pre>
	</div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

// Props with defaults
const props = defineProps({
	modelValue: {
		type: String,
		default: '',
	},
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
		default: 'html',
	},
	readOnly: {
		type: Boolean,
		default: true,
	},
});

const codeElement = ref(null);

// Decode HTML entities
function decodeHtml(html) {
	const txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
}

// Computed property to handle all possible props
const codeContent = computed(() => {
	const content = props.modelValue || props.code || props.value || '';
	return decodeHtml(content);
});

// Watch for changes in code content and update highlighting
watch([codeContent, () => props.language], () => {
	if (codeElement.value) {
		codeElement.value.textContent = codeContent.value;
		hljs.highlightElement(codeElement.value);
	}
}, { immediate: true });

// Initialize highlight.js
onMounted(() => {
	if (codeElement.value) {
		codeElement.value.textContent = codeContent.value;
		hljs.highlightElement(codeElement.value);
	}
});
</script>

<script>
export default {
	name: 'CodeMirror',
};
</script>

<style>
.codemirror-container {
	margin: 1rem 0;
	border-radius: 4px;
	overflow: hidden;
}

.codemirror-container pre {
	margin: 0;
	padding: 1rem;
	background-color: #282c34;
	color: #abb2bf;
	border-radius: 4px;
	overflow-x: auto;
	font-family: 'Fira Code', 'Consolas', monospace;
	font-size: 0.9rem;
	line-height: 1.5;
	tab-size: 2;
	white-space: pre-wrap;
}

.codemirror-container code {
	font-family: inherit;
	padding: 0;
	background: none;
}

/* Syntax highlighting colors */
.hljs-keyword { color: #c678dd; }
.hljs-string { color: #98c379; }
.hljs-number { color: #d19a66; }
.hljs-comment { color: #5c6370; font-style: italic; }
.hljs-tag { color: #e06c75; }
.hljs-attr { color: #d19a66; }
.hljs-selector-class { color: #61afef; }
.hljs-selector-id { color: #61afef; }
.hljs-property { color: #56b6c2; }
</style>
