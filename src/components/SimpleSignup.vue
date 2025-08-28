<template>
	<div class="simple-signup">
		<form class="signup-form" @submit.prevent="handleSubmit">
			<div class="field">
				<input
					v-model="email"
					type="email"
					placeholder="Enter your email for updates"
					required
					class="input"
				/>
			</div>
			<button type="submit" class="button">
				<i class="fas fa-paper-plane"></i> Subscribe
			</button>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const handleSubmit = () => {
	console.log('Email submitted:', email.value);
	email.value = '';
};
</script>

<style scoped>
.simple-signup {
	max-width: 500px;
	margin: 2rem auto;
	padding: 1rem;
}

.signup-form {
	display: flex;
	gap: 0.5rem;
}

.field {
	flex: 1;
}

.input {
	width: 100%;
	padding: 0.5rem;
	border: 2px solid var(--color-red-berry);
	border-radius: 4px;
	font-size: 1rem;
}

.input:focus {
	outline: none;
	border-color: var(--color-red-berry);
	box-shadow: 0 0 0 2px rgba(var(--color-red-berry-rgb), 0.1);
}

.button {
	background: var(--color-red-berry);
	color: white;
	border: none;
	border-radius: 4px;
	padding: 0.5rem 1rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 1rem;
	transition: all 0.2s ease;
}

.button:hover {
	background: var(--color-red-berry-dark);
}

@media (max-width: 768px) {
	.signup-form {
		flex-direction: column;
	}

	.button {
		width: 100%;
		justify-content: center;
	}
}
</style>
