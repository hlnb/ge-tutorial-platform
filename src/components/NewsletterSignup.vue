<template>
	<div class="newsletter-form">
		<form @submit.prevent="handleSubmit" ref="form">
			<div class="field">
				<div class="control has-icons-left">
					<input
						class="input"
						type="text"
						name="name"
						v-model="name"
						placeholder="Your name"
						:class="{ 'is-danger': error }"
						required
					/>
					<span class="icon is-small is-left">
						<i class="fas fa-user"></i>
					</span>
				</div>
			</div>

			<div class="field has-addons">
				<div class="control has-icons-left is-expanded">
					<input
						class="input"
						type="email"
						name="email"
						v-model="email"
						placeholder="Your email address"
						:class="{ 'is-danger': error }"
						required
					/>
					<span class="icon is-small is-left">
						<i class="fas fa-envelope"></i>
					</span>
				</div>
				<div class="control">
					<button
						class="button is-primary"
						type="submit"
						:class="{ 'is-loading': isLoading }"
						:disabled="isLoading"
					>
						<span class="icon">
							<i class="fas fa-paper-plane"></i>
						</span>
						<span>Subscribe</span>
					</button>
				</div>
			</div>

			<p class="help is-danger" v-if="error">{{ error }}</p>
			<div class="notification is-success is-light mt-3" v-if="successMessage">
				<button class="delete" @click="successMessage = ''"></button>
				{{ successMessage }}
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const error = ref('');
const successMessage = ref('');
const isLoading = ref(false);

const handleSubmit = async () => {
	error.value = '';
	successMessage.value = '';
	isLoading.value = true;

	try {
		const response = await fetch('/api/subscribe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email.value,
				name: name.value,
			}),
		});

		const data = await response.json().catch(() => ({
			error: 'Invalid server response',
		}));

		if (response.ok && data.success) {
			successMessage.value = data.message;
			name.value = '';
			email.value = '';
		} else {
			throw new Error(data.error || 'Subscription failed');
		}
	} catch (e) {
		error.value =
			e.message || 'Sorry, something went wrong. Please try again later.';
		console.error('Subscription Error:', e);
	} finally {
		isLoading.value = false;
	}
};
</script>

<style scoped>
.newsletter-form {
	max-width: 500px;
	margin: 0 auto;
}

.notification {
	animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(-10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.field.has-addons {
	justify-content: center;
}

.control.is-expanded {
	max-width: 300px;
}

.field:not(:last-child) {
	margin-bottom: 0.75rem;
}
</style>
