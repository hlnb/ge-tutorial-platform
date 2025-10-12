<template>
	<div class="container">
		<section class="section">
			<div class="content">
				<h1 class="title">Contact Us</h1>

				<div v-if="status" class="notification" :class="status.type">
					{{ status.message }}
				</div>

				<form @submit.prevent="handleSubmit">
					<div class="field">
						<label class="label">Name</label>
						<div class="control">
							<input
								v-model="formData.name"
								class="input"
								:class="{ 'is-danger': errors?.name }"
								type="text"
								placeholder="Your name"
							/>
							<p v-if="errors?.name" class="help is-danger">
								{{ errors.name }}
							</p>
						</div>
					</div>

					<div class="field">
						<label class="label">Email</label>
						<div class="control">
							<input
								v-model="formData.email"
								class="input"
								:class="{ 'is-danger': errors?.email }"
								type="email"
								placeholder="Your email"
							/>
							<p v-if="errors?.email" class="help is-danger">
								{{ errors.email }}
							</p>
						</div>
					</div>

					<div class="field">
						<label class="label">Message</label>
						<div class="control">
							<textarea
								v-model="formData.message"
								class="textarea"
								:class="{ 'is-danger': errors?.message }"
								placeholder="Your message"
							></textarea>
							<p v-if="errors?.message" class="help is-danger">
								{{ errors.message }}
							</p>
						</div>
					</div>

					<div class="field">
						<div class="control">
							<button class="button is-primary" :disabled="isSubmitting">
								{{ isSubmitting ? 'Sending...' : 'Send Message' }}
							</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useHead } from '@vueuse/head';

// Head metadata
useHead({
	title: 'Contact Us - GraphitEdge',
	meta: [{ name: 'description', content: 'Get in touch with GraphitEdge' }],
});

// Form state
const formData = reactive({
	name: '',
	email: '',
	message: '',
});

const status = ref(null);
const errors = ref({});
const isSubmitting = ref(false);

// Form submission handler
const handleSubmit = async () => {
	try {
		isSubmitting.value = true;
		errors.value = {};

		// Basic validation
		if (!formData.name) errors.value.name = 'Name is required';
		if (!formData.email) errors.value.email = 'Email is required';
		if (!formData.message) errors.value.message = 'Message is required';

		// If there are validation errors, stop submission
		if (Object.keys(errors.value).length > 0) {
			isSubmitting.value = false;
			return;
		}

		// Here you would typically make an API call to send the message
	// For now, we'll just simulate a successful submission
	await new Promise((resolve) => window.setTimeout(resolve, 1000));

		status.value = {
			type: 'is-success',
			message: "Thank you for your message! We'll get back to you soon.",
		};

		// Reset form
		formData.name = '';
		formData.email = '';
		formData.message = '';
	} catch (error) {
		// Log error for diagnostics
		 
		console.error('Contact form submit error:', error);
		status.value = {
			type: 'is-danger',
			message:
				'Sorry, there was an error sending your message. Please try again.',
		};
	} finally {
		isSubmitting.value = false;
	}
};
</script>

<style scoped>
.field {
	margin-bottom: 1rem;
}
</style>
