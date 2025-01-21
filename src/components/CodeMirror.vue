<template>
	<div class="codemirror-wrapper">
		<textarea ref="textarea"></textarea>
	</div>
</template>

<script>
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/css/css.js';

export default {
	name: 'CodeMirror',
	props: {
		modelValue: {
			type: String,
			default: '',
		},
		height: {
			type: Number,
			default: 200,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			editor: null,
		};
	},
	mounted() {
		this.editor = CodeMirror.fromTextArea(this.$refs.textarea, {
			mode: 'html',
			theme: 'material-darker',
			lineNumbers: true,
			lineWrapping: true,
			readOnly: this.readonly,
			viewportMargin: Infinity,
		});

		this.editor.setValue(this.modelValue);

		this.editor.on('change', () => {
			this.$emit('update:modelValue', this.editor.getValue());
			this.$emit('change', this.editor.getValue());
		});
	},
	watch: {
		modelValue(newValue) {
			if (this.editor && newValue !== this.editor.getValue()) {
				this.editor.setValue(newValue);
			}
		},
		height(newValue) {
			if (this.editor) {
				this.editor.setSize(null, newValue);
			}
		},
	},
	beforeUnmount() {
		if (this.editor) {
			this.editor.toTextArea();
		}
	},
};
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
