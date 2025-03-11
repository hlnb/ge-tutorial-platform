<template>
	<div class="register-page">
		<div class="container">
			<div class="columns is-centered">
				<div class="column is-half">
					<div class="box">
						<h1 class="title is-3 has-text-centered">
							<i class="fas fa-user-plus mr-2"></i> Create Account
						</h1>

						<div v-if="errorMessage" class="notification is-danger">
							{{ errorMessage }}
						</div>

						<form @submit.prevent="handleRegister">
							<div class="field">
								<label class="label">Name</label>
								<div class="control has-icons-left">
									<input
										v-model="name"
										class="input"
										type="text"
										placeholder="Your name"
										required
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-user"></i>
									</span>
								</div>
							</div>

							<div class="field">
								<label class="label">Email</label>
								<div class="control has-icons-left">
									<input
										v-model="email"
										class="input"
										type="email"
										placeholder="your@email.com"
										required
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-envelope"></i>
									</span>
								</div>
							</div>

							<div class="field">
								<label class="label">Password</label>
								<div class="control has-icons-left">
									<input
										v-model="password"
										class="input"
										type="password"
										placeholder="Choose a password"
										required
										minlength="8"
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-lock"></i>
									</span>
								</div>
								<p class="help">Password must be at least 8 characters long</p>
							</div>

							<div class="field">
								<label class="label">Confirm Password</label>
								<div class="control has-icons-left">
									<input
										v-model="confirmPassword"
										class="input"
										type="password"
										placeholder="Confirm your password"
										required
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-lock"></i>
									</span>
								</div>
							</div>

							<div class="field">
								<div class="control">
									<button
										type="submit"
										class="button is-primary is-fullwidth"
										:class="{ 'is-loading': isLoading }"
										:disabled="!isFormValid"
									>
										Create Account
									</button>
								</div>
							</div>
						</form>

						<div class="has-text-centered mt-5">
							<p>
								Already have an account?
								<router-link to="/auth/login">Login</router-link>
							</p>
							<p class="mt-2">
								<router-link to="/">Back to Home</router-link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import authService from '@/services/AuthService';

const router = useRouter();
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const isLoading = ref(false);

// Check if already logged in
if (authService.isUserAuthenticated()) {
	router.push('/my-progress');
}

// Validate form
const isFormValid = computed(() => {
	return (
		name.value.trim() !== '' &&
		email.value.trim() !== '' &&
		password.value.length >= 8 &&
		password.value === confirmPassword.value
	);
});

const handleRegister = async () => {
	// Validate passwords match
	if (password.value !== confirmPassword.value) {
		errorMessage.value = 'Passwords do not match';
		return;
	}

	isLoading.value = true;
	errorMessage.value = '';

	try {
		const result = await authService.register(
			email.value,
			password.value,
			name.value,
		);

		if (result.success) {
			// Redirect to progress page
			router.push('/my-progress');
		} else {
			errorMessage.value =
				result.message || 'Registration failed. Please try again.';
		}
	} catch (error) {
		console.error('Registration error:', error);
		errorMessage.value = 'An unexpected error occurred. Please try again.';
	} finally {
		isLoading.value = false;
	}
};
</script>

<style scoped>
.register-page {
	padding: 3rem 1.5rem;
}
</style>
