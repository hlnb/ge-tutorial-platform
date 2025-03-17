<template>
	<div class="content">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/">
						<i class="fa-solid fa-house mr-2"></i> Home
					</router-link>
				</li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li><router-link to="/projects">Projects</router-link></li>
				<li class="is-active">
					<a href="#" aria-current="page">Personal Profile Page</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">30 minutes</span>
			<span class="tag is-success">HTML</span>
			<span class="tag is-primary">Structure</span>
		</div>

		<h1 class="title is-1">
			<i class="fas fa-id-card"></i> Personal Profile Page Project
		</h1>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Project Objectives
			</h3>
			<ul>
				<li>Create a complete HTML document structure</li>
				<li>Implement semantic HTML elements</li>
				<li>Add personal information using appropriate HTML tags</li>
				<li>Practice proper HTML document organization</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this project, you should
				complete the
				<router-link to="/tutorials/html-basics/first-page"
					>Your First HTML Page</router-link
				>
				tutorial.
			</p>
		</div>

		<section class="project-section">
			<h2 class="title is-2">Project Description</h2>
			<p>
				In this project, you'll create a personal profile page that showcases
				information about yourself (or a fictional character). This is a great
				way to practice HTML structure and semantic elements while creating
				something meaningful.
			</p>

			<div class="box mt-5">
				<h3 class="title is-4">Your Profile Page Should Include:</h3>
				<ul>
					<li>
						A proper HTML document structure with DOCTYPE, html, head, and body
						elements
					</li>
					<li>A header section with your name and a brief tagline</li>
					<li>A section about yourself (bio, interests, skills)</li>
					<li>A section for contact information</li>
					<li>
						Proper use of headings (h1-h6) to create a logical document outline
					</li>
					<li>At least one list (ordered or unordered)</li>
				</ul>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Getting Started</h2>

			<h3 class="title is-4">Step 1: Set Up Your HTML File</h3>
			<p>
				Create a new file called <code>index.html</code> and set up the basic
				HTML structure:
			</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="htmlStructure"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Step 2: Add Your Header</h3>
			<p>
				Inside the body element, add a header section with your name and
				tagline:
			</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="headerSection"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Step 3: Add Your Bio Section</h3>
			<p>Create a section for your bio information:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="bioSection"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Step 4: Add Contact Information</h3>
			<p>Add a section for your contact details:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="contactSection"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Project Example</h2>
			<p>Here's what your completed profile page might look like:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="completeExample"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<div class="notification is-success is-light mt-4">
				<p>
					<i class="fas fa-check-circle mr-2"></i>
					<strong>Remember:</strong> This is just an example. Feel free to
					customize your profile page with your own information and additional
					HTML elements you've learned about.
				</p>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Challenge Yourself</h2>
			<p>Once you've completed the basic requirements, try these challenges:</p>

			<div class="box">
				<h3 class="title is-5">Level Up Your Profile</h3>
				<ul>
					<li>Add a table to display your skills or education history</li>
					<li>Include links to your social media profiles</li>
					<li>
						Add a section for your hobbies with a description list (dl, dt, dd)
					</li>
					<li>Use the address element for your contact information</li>
					<li>Add comments to your HTML to explain different sections</li>
				</ul>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Submit Your Project</h2>
			<p>Once you've completed your personal profile page, you can:</p>
			<ul>
				<li>Save it to your computer for future reference</li>
				<li>Share it with friends to get feedback</li>
				<li>Deploy it to a free hosting service like GitHub Pages</li>
				<li>Add it to your portfolio of web development projects</li>
			</ul>

			<div class="notification is-info is-light mt-4">
				<p>
					<i class="fas fa-info-circle mr-2"></i>
					<strong>Next Steps:</strong> After completing this project, you might
					want to check out the
					<router-link to="/tutorials/html-basics/text"
						>Working with Text</router-link
					>
					tutorial to learn more ways to format your content.
				</p>
			</div>
		</section>

		<!-- Recommendations for next projects -->

	</div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';
import TutorialRecommendations from '@/components/TutorialRecommendations.vue';

// Code examples
const htmlStructure = ref(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Profile Page</title>
</head>
<body>
  <!-- Your content will go here -->
</body>
</html>`);

const headerSection = ref(`<header>
  <h1>John Doe</h1>
  <p>Web Developer & Designer</p>
</header>`);

const bioSection = ref(`<section>
  <h2>About Me</h2>
  <p>
    Hello! I'm John, a web developer based in New York. I'm passionate about creating 
    clean, user-friendly websites and applications.
  </p>
  
  <h3>My Skills</h3>
  <ul>
    <li>HTML & CSS</li>
    <li>JavaScript</li>
    <li>Responsive Design</li>
    <li>UI/UX Principles</li>
  </ul>
</section>`);

const contactSection = ref(`<section>
  <h2>Contact Information</h2>
  <p>Email: john.doe@example.com</p>
  <p>Phone: (123) 456-7890</p>
  <p>Location: New York, NY</p>
</section>`);

const completeExample = ref(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>John Doe - Web Developer</title>
</head>
<body>
  <header>
    <h1>John Doe</h1>
    <p>Web Developer & Designer</p>
  </header>
  
  <main>
    <section>
      <h2>About Me</h2>
      <p>
        Hello! I'm John, a web developer based in New York. I'm passionate about creating 
        clean, user-friendly websites and applications.
      </p>
      
      <h3>My Skills</h3>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>Responsive Design</li>
        <li>UI/UX Principles</li>
      </ul>
    </section>
    
    <section>
      <h2>Education</h2>
      <ul>
        <li>
          <h3>Bachelor of Science in Computer Science</h3>
          <p>University of Technology, 2018-2022</p>
        </li>
        <li>
          <h3>Web Development Bootcamp</h3>
          <p>Code Academy, 2022</p>
        </li>
      </ul>
    </section>
    
    <section>
      <h2>Hobbies & Interests</h2>
      <dl>
        <dt>Photography</dt>
        <dd>I enjoy landscape and street photography in my free time.</dd>
        
        <dt>Hiking</dt>
        <dd>Exploring nature trails and mountains whenever possible.</dd>
        
        <dt>Reading</dt>
        <dd>Science fiction and technical books are my favorites.</dd>
      </dl>
    </section>
  </main>
  
  <footer>
    <section>
      <h2>Contact Information</h2>
      <address>
        <p>Email: <a href="mailto:john.doe@example.com">john.doe@example.com</a></p>
        <p>Phone: <a href="tel:+11234567890">(123) 456-7890</a></p>
        <p>Location: New York, NY</p>
      </address>
      
      <h3>Connect With Me</h3>
      <ul>
        <li><a href="https://github.com/">GitHub</a></li>
        <li><a href="https://linkedin.com/">LinkedIn</a></li>
        <li><a href="https://twitter.com/">Twitter</a></li>
      </ul>
    </section>
    
    <p>&copy; 2023 John Doe. All rights reserved.</p>
  </footer>
</body>
</html>`);
</script>

<script>
// Frontmatter for the project
export default {
	frontmatter: {
		title: 'Personal Profile Page',
		description:
			'Create a simple personal profile page with basic HTML structure',
		category: 'HTML Projects',
		level: 'Beginner',
		tags: ['HTML', 'Structure', 'Beginner'],
		lastUpdated: '2023-09-15',
	},
};
</script>

<style scoped>
.project-section {
	margin-top: 3rem;
	margin-bottom: 3rem;
}

.codemirror-wrapper {
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	overflow: hidden;
	margin: 1.5rem 0;
}

code {
	background-color: #f5f5f5;
	color: #485fc7;
	padding: 0.2rem 0.4rem;
	border-radius: 4px;
}
</style>
