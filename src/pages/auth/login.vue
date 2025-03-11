<template>
	<div class="login-page">
		<div class="container">
			<div class="columns is-centered">
				<div class="column is-half">
					<div class="box">
						<h1 class="title is-3 has-text-centered">
							<i class="fas fa-sign-in-alt mr-2"></i> Login
						</h1>

						<div v-if="errorMessage" class="notification is-danger">
							{{ errorMessage }}
						</div>

						<form @submit.prevent="handleLogin">
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
										placeholder="Your password"
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
									>
										Login
									</button>
								</div>
							</div>
						</form>

						<div class="has-text-centered mt-5">
							<p>
								Don't have an account?
								<router-link to="/auth/register">Register</router-link>
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import authService from '@/services/AuthService';

const router = useRouter();
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const isLoading = ref(false);

// Check if already logged in
if (authService.isUserAuthenticated()) {
	router.push('/my-progress');
}

const handleLogin = async () => {
	isLoading.value = true;
	errorMessage.value = '';

	try {
		const result = await authService.login(email.value, password.value);

		if (result.success) {
			// Redirect to progress page
			router.push('/my-progress');
		} else {
			errorMessage.value = result.message || 'Login failed. Please try again.';
		}
	} catch (error) {
		console.error('Login error:', error);
		errorMessage.value = 'An unexpected error occurred. Please try again.';
	} finally {
		isLoading.value = false;
	}
};
</script>

<style scoped>
.login-page {
	padding: 3rem 1.5rem;
}
</style>
