<template>
	<div class="signup-cta">
		<div class="signup-content">
			<h3>
				<i class="fas fa-rocket"></i> Stay Ahead of Web Development Trends
			</h3>
			<p>Join our newsletter and receive:</p>
			<ul>
				<li><i class="fas fa-check"></i> Monthly development tips & tricks</li>
				<li><i class="fas fa-check"></i> In-depth tutorials and guides</li>
				<li><i class="fas fa-check"></i> Early access to new content</li>
			</ul>
		</div>
		<form class="signup-form" @submit="handleSubmit">
			<div class="field">
				<input
					v-model="email"
					type="email"
					placeholder="Enter your email address"
					required
					class="input"
				/>
			</div>
			<button type="submit" class="button">
				<i class="fas fa-paper-plane"></i> Subscribe Now
			</button>
		</form>
	</div>
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

	await response.json();
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
.signup-cta {
	background: linear-gradient(135deg, var(--color-red-berry) 0%, #ff6b6b 100%);
	border-radius: 12px;
	padding: 2rem;
	color: white;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	margin: 2rem 0;
}

.signup-content {
	margin-bottom: 1.5rem;
}

.signup-content h3 {
	font-size: 1.5rem;
	margin-bottom: 1rem;
	color: white;
}

.signup-content p {
	font-size: 1.1rem;
	margin-bottom: 1rem;
}

.signup-content ul {
	list-style: none;
	padding: 0;
	margin-bottom: 1.5rem;
}

.signup-content li {
	margin: 0.5rem 0;
	font-size: 1rem;
}

.signup-content i {
	margin-right: 0.5rem;
}

.signup-form {
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
}

.field {
	flex: 1;
	min-width: 200px;
}

.input {
	width: 100%;
	padding: 0.75rem 1rem;
	border: 2px solid rgba(255, 255, 255, 0.2);
	border-radius: 6px;
	background: rgba(255, 255, 255, 0.1);
	color: white;
	font-size: 1rem;
	transition: all 0.3s ease;
}

.input::placeholder {
	color: rgba(255, 255, 255, 0.7);
}

.input:focus {
	outline: none;
	background: rgba(255, 255, 255, 0.2);
	border-color: rgba(255, 255, 255, 0.4);
}

.button {
	padding: 0.75rem 1.5rem;
	background: white;
	color: var(--color-red-berry);
	border: none;
	border-radius: 6px;
	font-weight: bold;
	cursor: pointer;
	transition: all 0.3s ease;
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.button:hover {
	transform: translateY(-2px);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.button i {
	font-size: 0.9rem;
}

@media (max-width: 768px) {
	.signup-cta {
		padding: 1.5rem;
	}

	.signup-form {
		flex-direction: column;
	}

	.button {
		width: 100%;
		justify-content: center;
	}
}
</style>
