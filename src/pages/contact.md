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
import { ref, onMounted } from 'vue'
import emailjs from '@emailjs/browser'
import MainLayout from '../components/MainLayout.vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const status = ref('')
const statusClass = ref('')
const honeypot = ref('')
const errors = ref({})
const recaptchaElement = ref(null)

// Email validation regex
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

const validateForm = () => {
  errors.value = {}
  
  // Name validation
  if (formData.value.name.length < 2) {
    errors.value.name = 'Name must be at least 2 characters long'
  }

  // Email validation
  if (!emailRegex.test(formData.value.email)) {
    errors.value.email = 'Please enter a valid email address'
  }

  // Subject validation
  if (formData.value.subject.length < 3) {
    errors.value.subject = 'Subject must be at least 3 characters long'
  }

  // Message validation
  if (formData.value.message.length < 10) {
    errors.value.message = 'Message must be at least 10 characters long'
  }

  return Object.keys(errors.value).length === 0
}

const executeRecaptcha = () => {
  return new Promise((resolve) => {
    window.grecaptcha.execute()
    window.onRecaptchaSuccess = (token) => {
      resolve(token)
    }
  })
}

const validateAndSubmit = async () => {
  if (honeypot.value) {
    console.log('Spam detected')
    return
  }

  if (!validateForm()) {
    status.value = 'Please fix the errors in the form'
    statusClass.value = 'is-danger'
    return
  }

  try {
    await executeRecaptcha()
    await handleSubmit()
  } catch (error) {
    console.error('Recaptcha error:', error)
    status.value = 'Error verifying human status. Please try again.'
    statusClass.value = 'is-danger'
  }
}

const handleSubmit = async () => {
  isSubmitting.value = true
  status.value = ''
  
  try {
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.value.name,
        from_email: formData.value.email,
        subject: formData.value.subject,
        message: formData.value.message,
        to_email: 'info@graphitedge.com.au'
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    status.value = 'Thank you! Your message has been sent.'
    statusClass.value = 'is-success'
    
    // Clear form
    formData.value = { name: '', email: '', subject: '', message: '' }
    window.grecaptcha?.reset()

  } catch (error) {
    console.error('Form Submission Error:', error)
    status.value = 'Sorry, something went wrong. Please try again.'
    statusClass.value = 'is-danger'
  } finally {
    isSubmitting.value = false
  }
}

// Add reCAPTCHA callback to window
window.onRecaptchaSuccess = (token) => {
  console.log('reCAPTCHA verified')
}

onMounted(() => {
  // Load reCAPTCHA script
  const script = document.createElement('script')
  script.src = 'https://www.google.com/recaptcha/api.js'
  document.head.appendChild(script)
})
</script>

<style>
.contact-info {
  background-color: var(--color-light);
  padding: 2rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.contact-info p {
  margin-bottom: 1.5rem;
}

.contact-info p:last-child {
  margin-bottom: 0;
}

.contact-form {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.notification {
  margin-bottom: 1.5rem;
}

.is-hidden {
  display: none;
}
</style>
