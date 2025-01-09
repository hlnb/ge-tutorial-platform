<template>
	<form @submit="handleSubmit" class="newsletter-form">
		<div class="form-content">
			<input
				type="email"
				v-model="email"
				placeholder="Enter your email"
				required
				:disabled="status === 'loading' || status === 'success'"
			/>
			<button
				type="submit"
				:disabled="status === 'loading' || status === 'success'"
			>
				<span v-if="status === 'idle'">
					<i class="fa-regular fa-paper-plane"></i> Subscribe
				</span>
				<span v-else-if="status === 'loading'">
					<i class="fa-solid fa-circle-notch fa-spin"></i> Subscribing...
				</span>
				<span v-else-if="status === 'success'">
					<i class="fa-solid fa-check"></i> Subscribed!
				</span>
				<span v-else>
					<i class="fa-solid fa-exclamation-triangle"></i> Try Again
				</span>
			</button>
		</div>

		<div v-if="status === 'success'" class="message success">
			<i class="fa-solid fa-check-circle"></i>
			Thanks for subscribing! Please check your email to confirm.
		</div>

		<div v-if="status === 'error'" class="message error">
			<i class="fa-solid fa-exclamation-circle"></i>
			{{ errorMessage }}
		</div>
	</form>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const status = ref('idle');
const errorMessage = ref('');

const handleSubmit = async (e) => {
	e.preventDefault();
	status.value = 'loading';

	try {
		const response = await fetch('/api/subscribe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email.value,
				source: 'blog',
			}),
		});

		if (!response.ok) {
			throw new Error('Subscription failed. Please try again.');
		}

		const data = await response.json();
		status.value = 'success';
		email.value = '';
	} catch (error) {
		console.error('Subscription error:', error);
		status.value = 'error';
		errorMessage.value = 'Sorry, something went wrong. Please try again later.';
	}
};
</script>

<style scoped>
.newsletter-form {
	max-width: 500px;
	margin: 0 auto;
}

.form-content {
	display: flex;
	gap: 0.5rem;
	margin-bottom: 1rem;
}

input {
	flex: 1;
	padding: 0.75rem 1rem;
	border: 1px solid var(--color-snow);
	border-radius: 4px;
	font-size: 1rem;
	background: white;
}

input:disabled {
	background-color: var(--color-snow);
	cursor: not-allowed;
}

button {
	padding: 0.75rem 1.5rem;
	background-color: var(--color-red-berry);
	color: white;
	border: none;
	border-radius: 4px;
	font-size: 1rem;
	cursor: pointer;
	transition: background-color 0.2s ease;
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

button:hover:not(:disabled) {
	background-color: var(--color-red-berry-dark, #8b0000);
}

button:disabled {
	opacity: 0.7;
	cursor: not-allowed;
}

.message {
	padding: 1rem;
	border-radius: 4px;
	margin-top: 1rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.success {
	background-color: #d1fae5;
	color: #065f46;
}

.error {
	background-color: #fee2e2;
	color: #991b1b;
}

@media (max-width: 768px) {
	.form-content {
		flex-direction: column;
	}

	button {
		width: 100%;
		justify-content: center;
	}
}
</style>
