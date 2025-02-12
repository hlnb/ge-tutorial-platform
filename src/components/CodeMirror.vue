<template>
	<div class="codemirror-wrapper">
		<textarea ref="textarea"></textarea>
	</div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/css/css.js';

const props = defineProps({
	modelValue: {
		type: String,
		default: '',
	},
	height: {
		type: [String, Number],
		default: 'auto',
	},
	readonly: {
		type: Boolean,
		default: false,
	},
	mode: {
		type: String,
		default: 'text/html',
	},
	theme: {
		type: String,
		default: 'default',
	},
});

const emit = defineEmits(['update:modelValue']);
const textarea = ref(null);
let editor = null;

// Handle scroll events with passive listeners
const handlePassiveEvent = (event) => {
	// Event handling logic if needed
};

onMounted(() => {
	// Create CodeMirror instance with passive event listener options
	const cmOptions = {
		mode: props.mode,
		theme: props.theme,
		lineNumbers: true,
		readOnly: props.readonly,
		viewportMargin: Infinity,
		lineWrapping: true,
		extraKeys: { 'Ctrl-Space': 'autocomplete' },
	};

	editor = CodeMirror.fromTextArea(textarea.value, cmOptions);

	// Set up the editor
	if (props.height !== 'auto') {
		editor.setSize(
			null,
			typeof props.height === 'number' ? `${props.height}px` : props.height,
		);
	}

	// Add passive event listeners
	const wrapper = editor.getWrapperElement();
	['touchstart', 'touchmove', 'mousewheel', 'wheel'].forEach((event) => {
		wrapper.addEventListener(event, handlePassiveEvent, { passive: true });
	});

	editor.setValue(props.modelValue);

	editor.on('change', (cm) => {
		emit('update:modelValue', cm.getValue());
	});
});

onUnmounted(() => {
	if (editor) {
		// Clean up event listeners
		const wrapper = editor.getWrapperElement();
		['touchstart', 'touchmove', 'mousewheel', 'wheel'].forEach((event) => {
			wrapper.removeEventListener(event, handlePassiveEvent);
		});

		editor.toTextArea();
	}
});

watch(
	() => props.modelValue,
	(newValue) => {
		if (editor && newValue !== editor.getValue()) {
			editor.setValue(newValue);
		}
	},
);

watch(
	() => props.height,
	(newValue) => {
		if (editor) {
			editor.setSize(null, newValue);
		}
	},
);
</script>

<style scoped>
.codemirror-wrapper {
	border-radius: 6px;
	overflow: hidden;
	border: 1px solid #363636;
}

:deep(.CodeMirror) {
	font-family: 'Fira Code', monospace;
	font-size: 14px;
	height: v-bind(height + 'px');
	padding: 0;
}

:deep(.CodeMirror-scroll) {
	overflow: hidden !important;
	margin-bottom: -30px;
	margin-right: -30px;
	padding-bottom: 30px;
	padding-right: 30px;
	height: 100%;
}

:deep(.CodeMirror-gutters) {
	border-right: 1px solid #363636;
}

:deep(.CodeMirror-lines) {
	padding: 4px 0;
}

:deep(.CodeMirror pre.CodeMirror-line, .CodeMirror pre.CodeMirror-line-like) {
	padding: 0 4px;
}
</style>
