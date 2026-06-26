<template>
	<img
		:src="src"
		:alt="alt"
		:width="width"
		:height="height"
		:loading="loading"
		:decoding="decoding"
		:fetchpriority="fetchpriority"
	/>
</template>

<script setup>
defineProps({
	src: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		required: true,
	},
	width: {
		type: [Number, String],
		required: true,
	},
	height: {
		type: [Number, String],
		required: true,
	},
	loading: {
		type: String,
		default: 'lazy',
		validator: (value) => ['lazy', 'eager'].includes(value),
	},
	decoding: {
		type: String,
		default: 'async',
		validator: (value) => ['async', 'auto', 'sync'].includes(value),
	},
	fetchpriority: {
		type: String,
		default: undefined,
		validator: (value) => ['high', 'low', 'auto'].includes(value),
	},
});
</script>
