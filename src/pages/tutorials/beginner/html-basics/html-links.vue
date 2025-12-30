<template>
	<div class="tutorial-content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
				import { ref, computed, onMounted, inject } from 'vue';
				import progressService from '@/services/ProgressService';
				import CodeMirror from '@/components/CodeMirror.vue';
				import DOMPurify from 'dompurify';
				import TutorialQuiz from '@/components/TutorialQuiz.vue';
					>
				</li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link to="/tutorials/beginner/html-basics/">HTML Basics</router-link>
				</li>
				<li class="is-active"><a href="#" aria-current="page">Links</a></li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">30 minutes</span>
			<span class="tag is-success">Theory</span>
			<span class="tag is-primary">Practice</span>
			<span class="tag is-link">Project</span>
		</div>

		<h1 class="title is-1">
			<i class="fab fa-html5 html-icon"></i> Links and Navigation
		</h1>

		<div class="box is-primary">
			<h2 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Learning Goals
			</h2>
			<div class="content">
				<p>After completing this tutorial, you will be able to:</p>
				<ul>
					<li>Create links to other pages within your website</li>
					<li>Link to external websites and resources</li>
					<li>Understand and use relative and absolute paths</li>
					<li>Create navigation menus for your websites</li>
					<li>Add links to specific parts of a page using IDs</li>
					<li>Apply best practices for accessible link text</li>
					<li>Implement different link states (hover, visited, active)</li>
					<li>Create links to email addresses and phone numbers</li>
					<li>Understand when to open links in new tabs</li>
				</ul>
			</div>

			<div class="notification is-info is-light mt-4">
				<h3 class="title is-5">
					<i class="fas fa-book section-icon"></i> Additional Resources
				</h3>
				<ul>
					<li>
						<a
							href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
							target="_blank"
							rel="noopener"
						>
							MDN: Creating Hyperlinks
						</a>
					</li>
					<li>
						<a
							href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
							target="_blank"
							rel="noopener"
						>
							MDN: The Anchor Element
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="box">
			<h2 id="what-makes-the-web-a-web" class="title is-3">
			</h2>
			<p>
				Links are what make the World Wide Web truly a "web". They allow us to
				connect pages and resources together, creating an interconnected network
				of information. Without links, each webpage would be isolated - like
				islands without bridges.
			</p>

			<div class="notification is-info is-light mt-4">
				<p>
					<strong>Did you know?</strong> The term "hypertext" in HTML refers to
					text that contains links to other texts, creating a network of
					connected information. This was one of Tim Berners-Lee's core ideas
					when creating the World Wide Web.
				</p>
			</div>
		</div>

		<CodingOptions filename="links.html" class="mt-4" />

		<div class="box mt-4">
			<h2 id="understanding-links" class="title is-3">Understanding Links</h2>
			<p>
				HTML links (anchor tags) allow users to navigate between pages and
				resources. Here's the anatomy of a link:
			</p>

			<CodeMirror v-model="linkAnatomy" :height="150" :readonly="true" />

			<div class="notification is-light mt-4">
				<h4 class="title is-5">Link Parts Explained:</h4>
				<ul>
					<li><code>&lt;a&gt;</code> - The anchor element</li>
					<li><code>href</code> - Hypertext Reference (the destination)</li>
					<li><code>target</code> - How the link should open</li>
					<li><code>rel</code> - Relationship to the destination</li>
					<li>Link text - What users see and click</li>
				</ul>
			</div>
		</div>

		<div class="box mt-4">
			<h2 id="types-of-links" class="title is-3">Types of Links</h2>

			<div class="content">
				<div class="link-types">
					<div class="link-type">
						<h4 class="title is-5">1. Internal Page Links</h4>
						<div class="box has-background-light">
							<CodeMirror
								v-model="internalLink"
								:height="80"
								:readonly="true"
							/>
						</div>
						<p class="mt-2">
							Used for navigation within your website. Points to other pages or
							files in your site.
						</p>
					</div>

					<div class="link-type mt-5">
						<h4 class="title is-5">2. External Links</h4>
						<div class="box has-background-light">
							<CodeMirror
								v-model="externalLink"
								:height="100"
								:readonly="true"
							/>
						</div>
						<p class="mt-2">
							Links to other websites. Best practice is to use target="_blank"
							and rel="external".
						</p>
					</div>

					<div class="link-type mt-5">
						<h4 class="title is-5">3. Email Links</h4>
						<div class="box has-background-light">
							<CodeMirror v-model="emailLink" :height="80" :readonly="true" />
						</div>
						<p class="mt-2">
							Opens the user's default email client with the specified address.
						</p>
					</div>

					<div class="link-type mt-5">
						<h4 class="title is-5">4. Phone Links</h4>
						<div class="box has-background-light">
							<CodeMirror v-model="phoneLink" :height="80" :readonly="true" />
						</div>
						<p class="mt-2">
							Initiates a phone call on mobile devices. Use international format
							for better compatibility.
						</p>
					</div>

					<div class="link-type mt-5">
						<h4 class="title is-5">5. Section Links (Fragment Identifiers)</h4>
						<div class="box has-background-light">
							<CodeMirror v-model="sectionLink" :height="80" :readonly="true" />
						</div>
						<p class="mt-2">
							Jumps to a specific section within the same page. The # symbol
							indicates an ID reference.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="box mt-6">
			<h2 id="accessible-links" class="title is-3">
				<i class="fas fa-universal-access section-icon"></i> Accessible Links
			</h2>

			<div class="tutorial-card">
				<p>
					Making links accessible ensures all users can navigate your website
					effectively.
				</p>

				<h3 id="writing-descriptive-link-text" class="title is-4">
					Writing Descriptive Link Text
				</h3>
				<div class="columns">
					<div class="column">
						<div class="notification is-danger is-light">
							<h4 class="title is-5">❌ Poor Link Text</h4>
							<pre
								class="wrong-code-block"
							><code>&lt;p&gt;To learn about quokkas, 
  &lt;a href="quokkas.html"&gt;click here&lt;/a&gt;.
&lt;/p&gt;

&lt;a href="map.pdf"&gt;Read more...&lt;/a&gt;

&lt;a href="contact.html"&gt;Here&lt;/a&gt;</code></pre>
						</div>
					</div>
					<div class="column">
						<div class="notification is-success is-light">
							<h4 class="title is-5">✅ Good Link Text</h4>
							<CodeMirror
								v-model="goodLinkText"
								:readonly="true"
								:height="150"
								language="html"
							/>
						</div>
					</div>
				</div>

				<div class="notification is-info is-light mt-4">
					<h4 class="title is-5">Accessibility Guidelines</h4>
					<ul>
						<li>
							<strong>Be Descriptive:</strong> Link text should make sense out
							of context
						</li>
						<li>
							<strong>Avoid Generic Text:</strong> No "click here" or "read
							more"
						</li>
						<li>
							<strong>Indicate External Links:</strong> Let users know when
							links open in new tabs
						</li>
						<li>
							<strong>Maintain Focus Visibility:</strong> Never remove focus
							outline without replacement
						</li>
						<li>
							<strong>Consider Screen Readers:</strong> Use aria-label when
							needed
						</li>
					</ul>
				</div>

				<h3 id="screen-reader-considerations" class="title is-4 mt-5">
					Screen Reader Considerations
				</h3>
				<CodeMirror
					v-model="screenReaderLinks"
					:readonly="true"
					:height="200"
					language="html"
				/>
			</div>
		</div>

		<div class="box mt-6">
			<h2 id="link-states-and-styling" class="title is-3">
				<i class="fas fa-paint-brush section-icon"></i> Link States and Styling
			</h2>

			<div class="content">
				<p>
					Links have different states that help users understand interactivity:
				</p>

				<div class="columns">
					<div class="column">
						<h3 id="html-link-states" class="title is-4">HTML</h3>
						<CodeMirror
							v-model="linkStatesHTML"
							:readonly="true"
							:height="150"
							language="html"
						/>
					</div>
					<div class="column">
						<h3 id="css-link-states" class="title is-4">CSS</h3>
						<CodeMirror
							v-model="linkStatesCSS"
							:readonly="true"
							:height="250"
							language="css"
						/>
					</div>
				</div>

				<div class="notification is-warning is-light mt-4">
					<h4 class="title is-5">Important State Guidelines</h4>
					<ul>
						<li>
							<strong>:link</strong> - Unvisited links should be clearly
							distinguishable
						</li>
						<li>
							<strong>:visited</strong> - Show users which pages they've already
							seen
						</li>
						<li>
							<strong>:hover</strong> - Provide clear feedback for mouse
							interaction
						</li>
						<li>
							<strong>:focus</strong> - Must be visible for keyboard navigation
						</li>
						<li><strong>:active</strong> - Shows the link is being clicked</li>
					</ul>
				</div>

				<div class="notification is-info is-light mt-4">
					<h4 class="title is-5">Color Contrast Requirements</h4>
					<ul>
						<li>Link text must have a 4.5:1 contrast ratio with background</li>
						<li>
							Links within text need to be distinguishable beyond just color
						</li>
						<li>Hover and focus states should be clearly visible</li>
						<li>
							Consider users with color blindness when choosing link colors
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="box mt-6">
			<h2 id="link-types-and-attributes" class="title is-3">
				<i class="fas fa-link section-icon"></i> Link Types and Attributes
			</h2>

			<div class="content">
				<h3 id="essential-link-attributes" class="title is-4">
					Essential Link Attributes
				</h3>
				<div class="table-container">
					<table class="table is-bordered">
						<thead>
							<tr>
								<th>Attribute</th>
								<th>Purpose</th>
								<th>Example</th>
								<th>Accessibility Impact</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><code>href</code></td>
								<td>Specifies the link destination</td>
								<td><code>&lt;a href="about.html"&gt;</code></td>
								<td>
									Required for the link to be recognized by assistive technology
								</td>
							</tr>
							<tr>
								<td><code>target</code></td>
								<td>Controls how the link opens</td>
								<td><code>&lt;a target="_blank"&gt;</code></td>
								<td>Must warn users when opening in new window</td>
							</tr>
							<tr>
								<td><code>rel</code></td>
								<td>Relationship between pages</td>
								<td><code>&lt;a rel="noopener"&gt;</code></td>
								<td>Improves security for external links</td>
							</tr>
							<tr>
								<td><code>aria-label</code></td>
								<td>Provides accessible name</td>
								<td>
									<code>&lt;a aria-label="Learn more about services"&gt;</code>
								</td>
								<td>Essential for descriptive link purposes</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h3 id="link-types" class="title is-4 mt-5">Link Types</h3>
				<div class="columns">
					<div class="column">
						<div class="notification">
							<h4 class="title is-5">Internal Navigation</h4>
							<CodeMirror
								v-model="internalLinks"
								:readonly="true"
								:height="150"
								language="html"
							/>
						</div>
					</div>
					<div class="column">
						<div class="notification">
							<h4 class="title is-5">External Links</h4>
							<CodeMirror
								v-model="externalLinks"
								:readonly="true"
								:height="150"
								language="html"
							/>
						</div>
					</div>
				</div>

				<div class="notification is-warning is-light mt-4">
					<h4 class="title is-5">Accessibility Requirements</h4>
					<ul>
						<li>
							<strong>Descriptive Link Text:</strong> Avoid "click here" or
							"read more"
						</li>
						<li>
							<strong>New Window Warning:</strong> Alert users when links open
							in new tabs
						</li>
						<li>
							<strong>Visual Indicators:</strong> Links should be visually
							distinct from regular text
						</li>
						<li>
							<strong>Focus States:</strong> Links must have visible focus
							indicators
						</li>
						<li>
							<strong>Skip Links:</strong> Provide skip navigation for keyboard
							users
						</li>
					</ul>
				</div>

				<h3 id="special-link-types" class="title is-4 mt-5">
					Special Link Types
				</h3>
				<div class="columns">
					<div class="column">
						<h4 class="title is-5">Email Links</h4>
						<CodeMirror
							v-model="emailLinks"
							:readonly="true"
							:height="120"
							language="html"
						/>
					</div>
					<div class="column">
						<h4 class="title is-5">Phone Links</h4>
						<CodeMirror
							v-model="phoneLinks"
							:readonly="true"
							:height="120"
							language="html"
						/>
					</div>
				</div>

				<div class="notification is-info is-light mt-4">
					<h4 class="title is-5">Best Practices for Link Accessibility</h4>
					<CodeMirror
						v-model="accessibleLinks"
						:readonly="true"
						:height="200"
						language="html"
					/>
				</div>
			</div>
			<div class="box mt-6">
				<h2 id="navigation-structures" class="title is-3">
					<i class="fas fa-sitemap section-icon"></i> Navigation Structures
				</h2>

				<div class="content">
					<p>
						A well-organized navigation structure is crucial for website
						usability. Here are common navigation patterns:
					</p>

					<h3 id="primary-navigation" class="title is-4">Primary Navigation</h3>
					<CodeMirror
						v-model="primaryNav"
						:readonly="true"
						:height="200"
						language="html"
					/>

					<h3 id="secondary-navigation" class="title is-4 mt-5">
						Secondary Navigation
					</h3>
					<div class="columns">
						<div class="column">
							<h4 class="title is-5">Sidebar Navigation</h4>
							<CodeMirror
								v-model="sidebarNav"
								:readonly="true"
								:height="200"
								language="html"
							/>
						</div>
						<div class="column">
							<h4 class="title is-5">Footer Navigation</h4>
							<CodeMirror
								v-model="footerNav"
								:readonly="true"
								:height="200"
								language="html"
							/>
						</div>
					</div>

					<div class="notification is-info is-light mt-4">
						<h4 class="title is-5">Navigation Best Practices</h4>
						<ul>
							<li>
								<strong>Use Semantic HTML:</strong> Always wrap navigation in
								<code>&lt;nav&gt;</code> elements
							</li>
							<li>
								<strong>ARIA Labels:</strong> Add descriptive
								<code>aria-label</code> to distinguish multiple navigation
								sections
							</li>
							<li>
								<strong>Current Page:</strong> Indicate the current page using
								<code>aria-current="page"</code>
							</li>
							<li>
								<strong>List Structure:</strong> Use <code>&lt;ul&gt;</code> and
								<code>&lt;li&gt;</code> for navigation items
							</li>
							<li>
								<strong>Skip Links:</strong> Provide skip navigation for
								keyboard users
							</li>
						</ul>
					</div>

					<h3 id="breadcrumb-navigation" class="title is-4 mt-5">
						Breadcrumb Navigation
					</h3>
					<CodeMirror
						v-model="breadcrumbNav"
						:readonly="true"
						:height="150"
						language="html"
					/>

					<div class="notification is-warning is-light mt-4">
						<p>
							<strong>Note:</strong> Navigation structures will be styled with
							CSS later. Focus on creating semantic, accessible HTML structure
							now.
						</p>
					</div>
				</div>
			</div>

			<div class="box mt-6">
				<h2 id="your-task" class="title is-3">
					<i class="fas fa-laptop-code"></i> Your Task
				</h2>
				<p>
					Create a navigation section for a restaurant website using different
					types of links.
				</p>

				<div class="notification is-info is-light mt-4">
					<h3 class="title is-4">Include:</h3>
					<ul>
						<li>Internal page links (Menu, About, Contact)</li>
						<li>Reservation link (external booking system)</li>
						<li>Contact information (phone and email)</li>
						<li>Social media links (external sites)</li>
					</ul>
				</div>

				<CodeMirror v-model="practiceCode" :height="300" />
				<div
					class="preview-container mt-4"
					v-html="sanitizedPracticePreview"
				></div>
			</div>

			<div class="box mt-6">
				<h2 id="further-reading" class="title is-3">
					<i class="fas fa-book"></i> Further Reading
				</h2>
				<p>
					For more detailed information about HTML links, check out these
					resources:
				</p>
				<ul>
					<li>
						<a
							href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
							target="_blank"
							rel="external"
						>
							MDN Web Docs: Creating Hyperlinks
						</a>
					</li>
					<li>
						<a
							href="https://www.w3.org/WAI/tips/writing/#make-link-text-meaningful"
							target="_blank"
							rel="external"
						>
							W3C Web Accessibility Initiative: Link Text Best Practices
						</a>
					</li>
				</ul>
			</div>

			<div class="box mt-6">
				<h2 id="whats-next" class="title is-3">
					<i class="fas fa-forward"></i> What's Next?
				</h2>
				<p>
					Now that you can create links, let's learn how to add images to make
					your pages more engaging!
				</p>
			</div>
		</div>

		<!-- Add recommendations before the quiz -->
		<TutorialRecommendations :current-path="'/tutorials/beginner/html-basics/links'" />

		<!-- Add quiz before the completion section -->
		<TutorialQuiz />

		<!-- Completion Section -->
		<div v-if="progressEnabled" class="completion-section mt-6">
			<h2 class="title is-3">
				<i class="fas fa-check-circle"></i> Congratulations!
			</h2>
			<p>
				You've completed the tutorial on HTML Links and Navigation. Well done!
			</p>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted, inject } from 'vue';
import progressService from '@/services/ProgressService';
import CodeMirror from '@/components/CodeMirror.vue';
import DOMPurify from 'dompurify';
import TutorialQuiz from '@/components/TutorialQuiz.vue';

// Get the pageSections array from the parent component
const pageSections = inject('pageSections');

// Define the sections for this tutorial
onMounted(() => {
	if (pageSections) {
		pageSections.value = [
			{
				id: 'introduction',
				title: 'Introduction to HTML Links',
				subsections: [],
			},
			{
				id: 'basic-link-syntax',
				title: 'Basic Link Syntax',
				subsections: [],
			},
			{
				id: 'link-attributes',
				title: 'Link Attributes',
				subsections: [
					{ id: 'target-attribute', title: 'Target Attribute' },
					{ id: 'rel-attribute', title: 'Rel Attribute' },
				],
			},
			{
				id: 'internal-links',
				title: 'Internal Links',
				subsections: [
					{ id: 'page-sections', title: 'Linking to Page Sections' },
					{ id: 'other-pages', title: 'Linking to Other Pages' },
				],
			},
			{
				id: 'email-links',
				title: 'Email Links',
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

const linkAnatomy =
	ref(`<a href="destination.html" target="_blank" rel="external">
  Link Text
</a>`);

const internalLink = ref(`<a href="menu.html">View Our Menu</a>`);

const externalLink = ref(`<a href="https://example.com" 
   target="_blank" 
   rel="external">Visit External Site</a>`);

const emailLink = ref(`<a href="mailto:info@restaurant.com">Email Us</a>`);

const phoneLink = ref(`<a href="tel:+61234567890">Call Us: (02) 3456 7890</a>`);

const sectionLink = ref(`<a href="#location">Find Our Location</a>`);

const practiceCode = ref(`<!-- Create your restaurant navigation here -->
<nav>
  <!-- Add your navigation links -->
</nav>`);

const sanitizedPracticePreview = computed(() =>
	DOMPurify.sanitize(practiceCode.value),
);

// Progress tracking flag (used in template)
const progressEnabled = computed(() =>
	progressService.isProgressTrackingEnabled(),
);

const internalLinks = ref(
	`<!-- Basic internal link -->
<a href="about.html">About Us</a>

<!-- Skip navigation link -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<!-- Section link -->
<a href="#contact">Contact Section</a>`,
);

const externalLinks = ref(
	`<!-- Secure external link -->
<a href="https://example.com"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Visit Example.com (opens in new tab)">
  Example Website
  <span class="sr-only">(opens in new tab)</span>
</a>`,
);

const emailLinks = ref(
	`<!-- Basic email link -->
<a href="mailto:contact@example.com">
  Email Us
</a>

<!-- Email with subject -->
<a href="mailto:contact@example.com?subject=Website%20Inquiry">
  Send Inquiry
</a>`,
);

const phoneLinks = ref(
	`<!-- Phone link -->
<a href="tel:+61234567890">
  Call Us: (02) 3456 7890
</a>

<!-- SMS link -->
<a href="sms:+61234567890">
  Text Us
</a>`,
);

const accessibleLinks = ref(
	`<!-- Accessible navigation link -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/products">Products</a></li>
  </ul>
</nav>

<!-- Accessible external link -->
<a href="https://example.com"
   class="external-link"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Read our privacy policy (opens in new tab)">
  Privacy Policy
  <span class="sr-only">(opens in new tab)</span>
</a>`,
);

const primaryNav = ref(
	`<nav aria-label="Main navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a>
      <ul>
        <li><a href="/services/web">Web Design</a></li>
        <li><a href="/services/marketing">Marketing</a></li>
      </ul>
    </li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>`,
);

const sidebarNav = ref(
	`<nav aria-label="Section navigation">
  <h2>In This Section</h2>
  <ul>
    <li><a href="/services">Services Overview</a></li>
    <li><a href="/services/consulting">Consulting</a></li>
    <li><a href="/services/training">Training</a></li>
    <li><a href="/services/support">Support</a></li>
  </ul>
</nav>`,
);

const footerNav = ref(
	`<footer>
  <nav aria-label="Footer navigation">
    <div class="footer-links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/sitemap">Sitemap</a></li>
      </ul>
    </div>
  </nav>
</footer>`,
);

const breadcrumbNav = ref(
	`<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/services/web" aria-current="page">Web Design</a></li>
  </ol>
</nav>`,
);

const goodLinkText = ref(
	`<p>Learn more about 
  <a href="quokkas.html">Rottnest Island's quokkas</a>
</p>

<a href="map.pdf">Download island trail map (PDF, 2.5MB)</a>

<a href="contact.html">Contact our tour guides</a>`,
);

const screenReaderLinks = ref(
	`<!-- Additional context for screen readers -->
<a href="menu.pdf" aria-label="Download menu (PDF, 500KB)">
  Download Menu
</a>

<!-- Hidden text for context -->
<a href="book.html">
  Reserve a table
  <span class="sr-only">at Black Swan Bistro</span>
</a>

<!-- Indicating external links -->
<a href="https://weather.com" 
   aria-label="Check weather forecast (opens in new tab)"
   target="_blank"
   rel="noopener">
  Check Weather
  <span class="sr-only">(opens in new tab)</span>
</a>`,
);

const linkStatesHTML = ref(
	`<nav class="main-nav">
  <a href="/" class="active">Home</a>
  <a href="/about">About</a>
  <a href="/contact">Contact</a>
  <a href="https://blog.example.com" 
     target="_blank">Blog</a>
</nav>`,
);

const linkStatesCSS = ref(
	`/* Unvisited links */
a:link {
  color: #0066cc;
  text-decoration: underline;
}

/* Visited links */
a:visited {
  color: #800080;
}

/* Mouse hover */
a:hover {
  color: #003366;
  text-decoration: none;
  border-bottom: 2px solid currentColor;
}

/* Keyboard focus */
a:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* Active/clicking */
a:active {
  color: #cc0000;
}`,
);
</script>

<script>
// Frontmatter for the tutorial
export default {
	frontmatter: {
		title: 'Links & Navigation',
		description:
			'Learn how to create links to connect pages and resources in your website.',
		category: 'HTML Basics',
		level: 'Beginner',
		order: 4,
		tags: ['html', 'links', 'navigation', 'anchors'],
		lastUpdated: '2024-03-22',
	},
};
</script>

<style scoped>
.html-icon {
	color: #e34f26;
}

.link-types {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.link-type {
	border-bottom: 1px solid #dbdbdb;
	padding-bottom: 2rem;
}

.link-type:last-child {
	border-bottom: none;
}

.box.has-background-light {
	margin-bottom: 0;
}

/* Add CodeMirror styling */
:deep(.CodeMirror) {
	font-family: 'Fira Code', 'Consolas', 'Monaco', 'Andale Mono', 'Ubuntu Mono',
		monospace;
	font-size: 14px;
}

:deep(.CodeMirror pre) {
	font-family: inherit;
}

/* Add container width control */
.tutorial-content {
	max-width: 80vw;
	margin: 0 auto;
}

.box {
	width: 100%;
	max-width: 960px;
}
</style>
