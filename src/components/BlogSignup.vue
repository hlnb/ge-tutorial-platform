<template>
	<div class="newsletter-signup">
		<form @submit.prevent="handleSubmit" class="signup-form">
			<div class="field">
				<div class="control has-icons-left">
					<input
						v-model="email"
						class="input"
						:class="{ 'is-danger': error }"
						type="email"
						placeholder="Your email address"
						required
					/>
					<span class="icon is-small is-left">
						<i class="fas fa-envelope"></i>
					</span>
				</div>
				<p v-if="error" class="help is-danger">{{ error }}</p>
			</div>

			<button
				type="submit"
				class="button is-primary is-fullwidth"
				:class="{ 'is-loading': loading }"
			>
				<span>Subscribe to Blog Updates</span>
				<span class="icon">
					<i class="fas fa-arrow-right"></i>
				</span>
			</button>

			<div v-if="success" class="notification is-success is-light mt-3">
				<i class="fas fa-check-circle mr-2"></i>
				Thanks for subscribing to our blog updates!
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const loading = ref(false);
const error = ref('');
const success = ref(false);

const handleSubmit = async () => {
	loading.value = true;
	error.value = '';
	success.value = false;

	try {
		console.log('Attempting to subscribe with:', {
			email: email.value,
			source: 'blog',
		});

		const response = await fetch('http://localhost:3000/subscribe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email.value,
				source: 'blog',
			}),
		});

		const data = await response.json();
		console.log('Server response:', data);

		if (response.ok) {
			success.value = true;
			email.value = '';
		} else {
			throw new Error(data.message || data.error || 'Subscription failed');
		}
	} catch (err) {
		console.error('Subscription error:', err);
		error.value = err.message || 'Something went wrong. Please try again.';
	} finally {
		loading.value = false;
	}
};
</script>

<style scoped>
.newsletter-signup {
	max-width: 400px;
	margin: 0 auto;
}

.signup-form {
	background-color: var(--color-light);
	padding: 1.5rem;
	border-radius: 8px;
}

.field {
	margin-bottom: 1rem;
}

.button {
	background-color: var(--color-dark-sea-green);
	border: none;
	transition: background-color 0.2s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
}

.button:hover {
	background-color: var(--color-red-berry-dark);
}

.button .icon {
	transition: transform 0.2s ease;
}

.button:hover .icon {
	transform: translateX(4px);
}

.notification {
	margin-top: 1rem;
	padding: 0.75rem;
	border-radius: 4px;
	display: flex;
	align-items: center;
}

.notification i {
	color: var(--color-success);
}

@media (max-width: 768px) {
	.signup-form {
		padding: 1rem;
	}
}
</style>
