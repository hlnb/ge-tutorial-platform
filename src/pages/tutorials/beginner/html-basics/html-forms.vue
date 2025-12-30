<template>
	<div class="tutorial-content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/"
						><i class="fa-solid fa-house mr-2"></i> Home</router-link
					>
				</li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link to="/tutorials/beginner/html-basics/">HTML Basics</router-link>
				</li>
				<li class="is-active">
					<a href="#" aria-current="page">Working with Forms</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">45 minutes</span>
			<span class="tag is-success">Theory</span>
			<span class="tag is-primary">Practice</span>
			<span class="tag is-link">Project</span>
		</div>

		<h1 class="title is-1">
			<i class="fab fa-html5 html-icon"></i> HTML Forms
		</h1>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Learning Objectives
			</h3>
			<ul>
				<li>Understand form structure and attributes</li>
				<li>Learn different types of form inputs</li>
				<li>Master form validation and submission</li>
				<li>Create user-friendly forms</li>
			</ul>
		</div>

		<CodingOptions filename="form.html" />

		<h2 class="title is-3">Basic Form Structure</h2>
		<p>
			Forms are used to collect user input. Let's start with a basic form
			structure:
		</p>

		<div class="box">
			<h4 class="title is-4">Example:</h4>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="basicFormExample"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>
			<div
				class="preview-container mt-4"
				v-html="sanitizedBasicFormPreview"
			></div>
		</div>

		<h2 class="title is-3 mt-6">Common Input Types</h2>
		<p>
			HTML5 provides many specialized input types for different kinds of data:
		</p>

		<div class="box">
			<h4 class="title is-4">Input Types Example:</h4>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="inputTypesExample"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>
			<div
				class="preview-container mt-4"
				v-html="sanitizedInputTypesPreview"
			></div>
		</div>

		<div class="notification is-info is-light">
			<p>
				<strong>Note:</strong> Different browsers may display these input types
				differently. Mobile devices often provide specialized keyboards based on
				the input type.
			</p>
		</div>

		<h2 class="title is-3 mt-6">Select Menus and Radio Buttons</h2>
		<p>For options and choices, use select menus and radio buttons:</p>

		<div class="box">
			<h4 class="title is-4">Select and Radio Example:</h4>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="selectRadioExample"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>
			<div
				class="preview-container mt-4"
				v-html="sanitizedSelectRadioPreview"
			></div>
		</div>

		<h2 class="title is-3 mt-6">Form Validation</h2>
		<p>HTML5 provides built-in form validation features:</p>

		<div class="box">
			<h4 class="title is-4">Validation Example:</h4>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="validationExample"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>
			<div
				class="preview-container mt-4"
				v-html="sanitizedValidationPreview"
			></div>
		</div>

		<h2 class="title is-3 mt-6">Form Accessibility</h2>
		<div class="box">
			<h3 class="title is-4">Best Practices:</h3>
			<ul>
				<li>
					Always use <code>label</code> elements with matching
					<code>for</code> attributes
				</li>
				<li>
					Group related fields with <code>fieldset</code> and
					<code>legend</code>
				</li>
				<li>Provide clear error messages</li>
				<li>Use ARIA attributes when needed</li>
				<li>Ensure keyboard navigation works</li>
			</ul>
		</div>

		<h2 class="title is-3 mt-6">Common Form Patterns</h2>
		<div class="box">
			<h3 class="title is-4">Login Form Template</h3>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="loginFormExample"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>
		</div>

		<div class="box">
			<h3 class="title is-4">Contact Form Template</h3>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="contactFormExample"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>
		</div>
		<div class="box mt-6">
			<h2 class="title is-3">
				<i class="fas fa-laptop-code"></i> Practice Exercise
			</h2>
			<p>
				In your Text Editor, please create a complete registration form that
				includes:
			</p>
			<ul>
				<li>Personal information (name, email, date of birth)</li>
				<li>Address details</li>
				<li>Password with confirmation</li>
				<li>Terms and conditions checkbox</li>
				<li>Proper validation and error messages</li>
			</ul>
			<div class="notification is-info is-light mt-4">
				<p>
					<strong>Tip:</strong> Try building the form progressively, testing
					each field's validation as you go. Use the browser's built-in form
					validation first, then consider adding custom JavaScript validation
					later.
				</p>
			</div>
		</div>
		<h2 class="title is-3 mt-6">Form Security Best Practices</h2>
		<div class="box">
			<div class="content">
				<h3 class="title is-4">Essential Security Measures</h3>
				<ul class="security-checklist">
					<li>
						<i class="fa-regular fa-square-check"></i>
						<strong> Use HTTPS:</strong> Always submit forms over HTTPS to
						encrypt data in transit
					</li>
					<li>
						<i class="fa-regular fa-square-check"></i>
						<strong> CSRF Protection:</strong> Include CSRF tokens in your forms
					</li>
					<li>
						<i class="fa-regular fa-square-check"></i>
						<strong> Input Validation:</strong> Validate on both client and
						server side
					</li>
					<li>
						<i class="fa-regular fa-square-check"></i>
						<strong> Rate Limiting:</strong> Implement submission limits to
						prevent abuse
					</li>
				</ul>

				<div class="notification is-warning is-light">
					<p>
						<strong>Important:</strong> Never trust client-side validation
						alone. Always validate and sanitize data on the server side.
					</p>
				</div>
			</div>
		</div>

		<h2 class="title is-3 mt-6">Project Contact Forms</h2>

		<div class="box">
			<h3 class="title is-4">Black Swan Bistro Contact Form</h3>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="blackSwanContactForm"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>
		</div>

		<div class="box">
			<h3 class="title is-4">Rotto Rocks Contact Form</h3>
			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="rottoContactForm"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>
		</div>

		<div class="box mt-6">
			<h2 class="title is-3"><i class="fas fa-book"></i> Further Reading</h2>
			<div class="content">
				<h3 class="title is-4">Official Documentation</h3>
				<ul>
					<li>
						<a
							href="https://developer.mozilla.org/en-US/docs/Learn/Forms"
							target="_blank"
						>
							MDN Web Docs: HTML Forms Guide
						</a>
					</li>
					<li>
						<a href="https://www.w3.org/WAI/tutorials/forms/" target="_blank">
							W3C Web Accessibility Initiative - Forms Tutorial
						</a>
					</li>
				</ul>

				<h3 class="title is-4">Additional Resources</h3>
				<ul>
					<li>
						<a href="https://web.dev/learn/forms/" target="_blank">
							web.dev: Learn Forms
						</a>
					</li>
					<li>
						<a
							href="https://www.smashingmagazine.com/guides/form-design/"
							target="_blank"
						>
							Smashing Magazine: Form Design Patterns
						</a>
					</li>
				</ul>
			</div>
		</div>

		<!-- Add recommendations before the quiz -->
		<TutorialRecommendations :current-path="'/tutorials/beginner/html-basics/forms'" />

		<!-- Add quiz before the completion section -->
		<TutorialQuiz />

		<!-- Completion Section -->
		<div v-if="progressEnabled" class="completion-section mt-6">
			<h2 class="title is-3"><i class="fas fa-check-circle"></i> Completion</h2>
			<p>Congratulations! You've completed the HTML Forms tutorial.</p>
			<div class="notification is-success is-light">
				<p>
					<strong>Next Steps:</strong>
					<br />
					Keep practicing to master HTML forms.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted, inject } from 'vue';
import progressService from '@/services/ProgressService';
import DOMPurify from 'dompurify';
import CodingOptions from '@/components/CodingOptions.vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialQuiz from '@/components/TutorialQuiz.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';

// Get the pageSections array from the parent component
const pageSections = inject('pageSections');

// Define the sections for this tutorial
onMounted(() => {
	if (pageSections) {
		pageSections.value = [
			{
				id: 'introduction',
				title: 'Introduction to HTML Forms',
				subsections: [],
			},
			{
				id: 'form-basics',
				title: 'Form Basics',
				subsections: [],
			},
			{
				id: 'input-types',
				title: 'Input Types',
				subsections: [
					{ id: 'text-inputs', title: 'Text Inputs' },
					{ id: 'radio-checkboxes', title: 'Radio Buttons and Checkboxes' },
					{ id: 'select-menus', title: 'Select Menus' },
					{ id: 'other-inputs', title: 'Other Input Types' },
				],
			},
			{
				id: 'form-validation',
				title: 'Form Validation',
				subsections: [],
			},
			{
				id: 'form-styling',
				title: 'Form Styling',
				subsections: [],
			},
			{
				id: 'practice',
				title: 'Practice Exercise',
				subsections: [],
			},
		];
	}
});

const basicFormExample = ref(`<form action="/submit" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required>

  <button type="submit">Login</button>
</form>`);

const sanitizedBasicFormPreview = computed(() =>
	DOMPurify.sanitize(basicFormExample.value),
);

const inputTypesExample = ref(`<form action="/submit" method="post">
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>

  <div>
    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}">
  </div>

  <div>
    <label for="birthday">Birthday:</label>
    <input type="date" id="birthday" name="birthday">
  </div>

  <div>
    <label for="quantity">Quantity:</label>
    <input type="number" id="quantity" name="quantity" min="1" max="10">
  </div>

  <div>
    <label for="favorite-color">Favorite Color:</label>
    <input type="color" id="favorite-color" name="favorite-color">
  </div>

  <div>
    <label for="satisfaction">Satisfaction (1-5):</label>
    <input type="range" id="satisfaction" name="satisfaction" min="1" max="5">
  </div>

  <button type="submit">Submit</button>
</form>`);

const selectRadioExample = ref(`<form action="/submit" method="post">
  <div>
    <label for="country">Select Country:</label>
    <select id="country" name="country">
      <option value="">--Please choose--</option>
      <option value="au">Australia</option>
      <option value="nz">New Zealand</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div>
    <p>Preferred Contact Method:</p>
    <input type="radio" id="email-contact" name="contact" value="email">
    <label for="email-contact">Email</label>

    <input type="radio" id="phone-contact" name="contact" value="phone">
    <label for="phone-contact">Phone</label>

    <input type="radio" id="sms-contact" name="contact" value="sms">
    <label for="sms-contact">SMS</label>
  </div>

  <button type="submit">Submit</button>
</form>`);

const sanitizedInputTypesPreview = computed(() =>
	DOMPurify.sanitize(inputTypesExample.value),
);

const sanitizedSelectRadioPreview = computed(() =>
	DOMPurify.sanitize(selectRadioExample.value),
);

const validationExample = ref(`<form action="/submit" method="post">
  <div>
    <label for="email">Email:</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      required
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
      title="Please enter a valid email address"
    >
  </div>

  <div>
    <label for="password">Password:</label>
    <input 
      type="password" 
      id="password" 
      name="password"
      required
      minlength="8"
      pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 characters"
    >
  </div>

  <fieldset>
    <legend>Subscription Options</legend>
    
    <div>
      <input 
        type="checkbox" 
        id="newsletter" 
        name="newsletter"
        aria-describedby="newsletter-desc"
      >
      <label for="newsletter">Subscribe to newsletter</label>
      <small id="newsletter-desc">
        Receive weekly updates about our products
      </small>
    </div>
  </fieldset>

  <button type="submit">Sign Up</button>
</form>`);

const sanitizedValidationPreview = computed(() =>
	DOMPurify.sanitize(validationExample.value),
);

const loginFormExample =
	ref(`<form action="/login" method="post" class="login-form">
  <!-- CSRF Protection -->
  <input type="hidden" name="csrf_token" value="YOUR_CSRF_TOKEN">
  
  <div class="form-group">
    <label for="username">Username or Email:</label>
    <input 
      type="text" 
      id="username" 
      name="username" 
      required 
      autocomplete="username"
    >
  </div>

  <div class="form-group">
    <label for="password">Password:</label>
    <input 
      type="password" 
      id="password" 
      name="password" 
      required
      autocomplete="current-password"
    >
  </div>

  <div class="form-group">
    <input type="checkbox" id="remember" name="remember">
    <label for="remember">Remember me</label>
  </div>

  <button type="submit">Log In</button>
  
  <div class="form-links">
    <a href="/forgot-password">Forgot Password?</a>
    <a href="/signup">Create Account</a>
  </div>
</form>`);

const contactFormExample =
	ref(`<form action="/contact" method="post" class="contact-form">
  <input type="hidden" name="csrf_token" value="YOUR_CSRF_TOKEN">
  
  <div class="form-group">
    <label for="name">Full Name:</label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      required 
      minlength="2"
    >
  </div>

  <div class="form-group">
    <label for="email">Email Address:</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      required
    >
  </div>

  <div class="form-group">
    <label for="subject">Subject:</label>
    <input 
      type="text" 
      id="subject" 
      name="subject" 
      required
    >
  </div>

  <div class="form-group">
    <label for="message">Message:</label>
    <textarea 
      id="message" 
      name="message" 
      required 
      minlength="10"
      rows="5"
    ></textarea>
  </div>

  <button type="submit">Send Message</button>
</form>`);

const blackSwanContactForm =
	ref(`<form action="/contact" method="post" class="contact-form">
  <input type="hidden" name="csrf_token" value="YOUR_CSRF_TOKEN">
  
  <div class="form-group">
    <label for="name">Full Name:</label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      required 
      minlength="2"
    >
  </div>

  <div class="form-group">
    <label for="email">Email Address:</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      required
    >
  </div>

  <div class="form-group">
    <label for="phone">Phone Number:</label>
    <input 
      type="tel" 
      id="phone" 
      name="phone" 
      pattern="[0-9]{10}"
    >
  </div>

  <div class="form-group">
    <label for="reservation-type">Inquiry Type:</label>
    <select id="reservation-type" name="reservation-type" required>
      <option value="">Select an option</option>
      <option value="reservation">Make a Reservation</option>
      <option value="private-event">Private Event Inquiry</option>
      <option value="feedback">Feedback</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div class="form-group">
    <label for="message">Message:</label>
    <textarea 
      id="message" 
      name="message" 
      required 
      minlength="10"
      rows="5"
      placeholder="Please provide details about your inquiry..."
    ></textarea>
  </div>

  <div class="form-group">
    <input type="checkbox" id="newsletter" name="newsletter">
    <label for="newsletter">Subscribe to our newsletter for special offers</label>
  </div>

  <button type="submit">Send Message</button>
</form>`);

const rottoContactForm =
	ref(`<form action="/contact" method="post" class="contact-form">
  <input type="hidden" name="csrf_token" value="YOUR_CSRF_TOKEN">
  
  <div class="form-group">
    <label for="name">Full Name:</label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      required 
      minlength="2"
    >
  </div>

  <div class="form-group">
    <label for="email">Email Address:</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      required
    >
  </div>

  <div class="form-group">
    <label for="inquiry-type">Inquiry Type:</label>
    <select id="inquiry-type" name="inquiry-type" required>
      <option value="">Select an option</option>
      <option value="tour">Tour Booking</option>
      <option value="accommodation">Accommodation</option>
      <option value="activities">Activities</option>
      <option value="general">General Inquiry</option>
    </select>
  </div>

  <div class="form-group">
    <label for="visit-date">Planned Visit Date:</label>
    <input 
      type="date" 
      id="visit-date" 
      name="visit-date"
      min="{{ today }}"
    >
  </div>

  <div class="form-group">
    <label for="group-size">Group Size:</label>
    <input 
      type="number" 
      id="group-size" 
      name="group-size"
      min="1"
      max="50"
    >
  </div>

  <div class="form-group">
    <label for="message">Message:</label>
    <textarea 
      id="message" 
      name="message" 
      required 
      minlength="10"
      rows="5"
      placeholder="Tell us about your plans..."
    ></textarea>
  </div>

  <div class="form-group">
    <input type="checkbox" id="newsletter" name="newsletter">
    <label for="newsletter">Keep me updated about Rottnest Island events and offers</label>
  </div>

  <button type="submit">Send Inquiry</button>
</form>`);

const progressEnabled = ref(progressService.isProgressTrackingEnabled());
</script>

<script>
// Frontmatter for the tutorial
export default {
	frontmatter: {
		title: 'HTML Forms',
		description: 'Learn how to create interactive forms to collect user input.',
		category: 'HTML Basics',
		level: 'Beginner',
		order: 7,
		tags: ['html', 'forms', 'input', 'user interaction'],
		lastUpdated: '2024-03-25',
	},
};
</script>

<style scoped>
.tutorial-content {
	max-width: 960px;
	margin: 0 auto;
}

.html-icon {
	color: #e34f26;
	margin-right: 0.5rem;
}

.preview-container {
	padding: 1rem;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	background: white;
	min-height: 200px;
}

:deep(.coding-options) {
	position: relative;
	z-index: 1;
	width: 100%;
	display: block;
	margin: 1rem 0;
}

:deep(.box) {
	overflow: visible;
	position: relative;
}

:deep(.columns) {
	margin: 0;
	overflow: visible;
}

.codemirror-wrapper {
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	overflow: hidden;
}

/* Add some form styling */
:deep(form) {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

:deep(label) {
	display: block;
	margin-bottom: 0.5rem;
	font-weight: bold;
}

:deep(input),
:deep(select) {
	padding: 0.5rem;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	width: 100%;
	max-width: 300px;
}

:deep(input[type='radio']) {
	width: auto;
	margin-right: 0.5rem;
}

:deep(button) {
	padding: 0.5rem 1rem;
	background-color: #485fc7;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	width: fit-content;
}

:deep(button:hover) {
	background-color: #3e56c4;
}

:deep(fieldset) {
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	padding: 1rem;
	margin-bottom: 1rem;
}

:deep(legend) {
	padding: 0 0.5rem;
	font-weight: bold;
}

:deep(small) {
	display: block;
	color: #666;
	margin-top: 0.25rem;
}

.content a {
	color: #485fc7;
	text-decoration: none;
}

.content a:hover {
	text-decoration: underline;
}

:deep(.form-group) {
	margin-bottom: 1.5rem;
}

:deep(textarea) {
	width: 100%;
	padding: 0.5rem;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	resize: vertical;
}

:deep(select) {
	width: 100%;
	max-width: 300px;
	padding: 0.5rem;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
}

:deep(.form-links) {
	margin-top: 1rem;
	display: flex;
	gap: 1rem;
}

:deep(.form-links a) {
	color: #485fc7;
	text-decoration: none;
}

:deep(.form-links a:hover) {
	text-decoration: underline;
}

:deep(.security-checklist) {
	list-style: none;
	padding-left: 0;
}

:deep(.security-checklist li) {
	display: flex;
	align-items: flex-start;
	margin-bottom: 1rem;
}

:deep(.security-checklist i) {
	color: #485fc7;
	margin-right: 0.75rem;
	margin-top: 0.25rem;
}
</style>
