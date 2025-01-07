<template>
	<MainLayout>
	  <div class="main-content">
      <section class="section">
        <div class="container">
          <h1 class="title is-2">Contact Us</h1>
          <p class="subtitle is-4">Get in touch with GraphitEdge</p>

          <div class="columns mt-6">
            <!-- Contact Form -->
            <div class="column is-7">
              <form class="contact-form" @submit.prevent="validateAndSubmit">
                <!-- Form Status Messages -->
                <div v-if="status" :class="['notification', statusClass]">
                  {{ status }}
                </div>

                <div class="field">
                  <label class="label">Name</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="formData.name"
                      placeholder="Your name"
                      required
                      minlength="2"
                      :class="{ 'is-danger': errors.name }"
                    >
                  </div>
                  <p v-if="errors.name" class="help is-danger">{{ errors.name }}</p>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      class="input"
                      type="email"
                      v-model="formData.email"
                      placeholder="Your email"
                      required
                      :class="{ 'is-danger': errors.email }"
                    >
                  </div>
                  <p v-if="errors.email" class="help is-danger">{{ errors.email }}</p>
                </div>

                <div class="field">
                  <label class="label">Subject</label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      v-model="formData.subject"
                      placeholder="Subject"
                      required
                      minlength="3"
                      :class="{ 'is-danger': errors.subject }"
                    >
                  </div>
                  <p v-if="errors.subject" class="help is-danger">{{ errors.subject }}</p>
                </div>

                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      v-model="formData.message"
                      placeholder="Your message"
                      required
                      minlength="10"
                      :class="{ 'is-danger': errors.message }"
                    ></textarea>
                  </div>
                  <p v-if="errors.message" class="help is-danger">{{ errors.message }}</p>
                </div>

                <!-- Honeypot field -->
                <div class="is-hidden">
                  <input
                    type="text"
                    name="website"
                    v-model="honeypot"
                    autocomplete="off"
                  >
                </div>

                <!-- reCAPTCHA - modified for invisible version -->
                <div
                  class="g-recaptcha"
                  data-sitekey="6LcoSAAVAAAAAOptntyKZVKD2CneuzN8h4SBtHX0"
                  data-callback="onRecaptchaSuccess"
                  data-size="invisible"
                  ref="recaptchaElement"
                ></div>

                <div class="field">
                  <div class="control">
                    <button
                      class="button is-primary"
                      type="submit"
                      :class="{ 'is-loading': isSubmitting }"
                      :disabled="isSubmitting"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <!-- Contact Information -->
            <div class="column is-4 is-offset-1">
              <div class="content">
                <h3 class="title is-4">Contact Information</h3>
                <div class="contact-info">
                  <p>
                    <strong>Location:</strong><br>
                    Perth, Western Australia
                  </p>
                  <p>
                    <strong>Email:</strong><br>
                    <a href="mailto:info@graphitedge.com.au">info@graphitedge.com.au</a>
                  </p>
                  <p>
                    <strong>Hours:</strong><br>
                    Monday - Friday: 9:00 AM - 5:00 PM AWST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
	</MainLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import emailjs from '@emailjs/browser';
import MainLayout from '../components/MainLayout.vue';

// Add meta information
useHead({
	title: 'Contact GraphitEdge',
	meta: [
		{
			name: 'description',
			content: 'Get in touch with GraphitEdge - Contact form and information',
		},
	],
});

// Rest of your existing script code stays the same
</script>

<style>
/* Your existing styles stay the same */
</style>
