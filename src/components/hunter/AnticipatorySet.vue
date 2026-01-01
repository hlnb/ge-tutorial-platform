<template>
	<section class="anticipatory-set">
		<div class="box engagement-hook">
			<h3>{{ icon }} {{ title }}</h3>
			<div v-html="hook"></div>
			
			<div v-if="reflectionPrompts && reflectionPrompts.length > 0" class="reflection-prompt">
				<strong>{{ reflectionTitle }}:</strong>
				<ul>
					<li v-for="(prompt, index) in reflectionPrompts" :key="index">{{ prompt }}</li>
				</ul>
				<p v-if="connection"><em>{{ connection }}</em></p>
			</div>
		</div>
	</section>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		default: 'Start Here'
	},
	icon: {
		type: String,
		default: '🎯'
	},
	hook: {
		type: String,
		required: true
	},
	reflectionTitle: {
		type: String,
		default: 'Quick Reflection'
	},
	reflectionPrompts: {
		type: Array,
		default: () => []
	},
	connection: {
		type: String,
		default: ''
	}
});
</script>

<style scoped>
.anticipatory-set {
	margin: 2rem 0;
}

.engagement-hook {
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	color: white;
	border: none;
	padding: 1.5rem;
}

.engagement-hook h3 {
	color: white;
	margin-bottom: 1rem;
	font-size: 1.5rem;
	font-weight: bold;
}

.reflection-prompt {
	background: rgba(255, 255, 255, 0.1);
	padding: 1rem;
	border-radius: 8px;
	margin-top: 1rem;
}

.reflection-prompt strong {
	color: #ffd700;
	font-size: 1.1rem;
}

.reflection-prompt ul {
	margin: 0.75rem 0;
	margin-left: 1.5rem;
}

.reflection-prompt li {
	margin: 0.5rem 0;
}
</style>
