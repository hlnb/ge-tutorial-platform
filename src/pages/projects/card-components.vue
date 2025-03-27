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
					<a href="#" aria-current="page">Card Components</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">90 minutes</span>
			<span class="tag is-success">CSS</span>
			<span class="tag is-primary">Box Model</span>
		</div>

		<h1 class="title is-1">
			<i class="fas fa-layer-group"></i> Card Components Project
		</h1>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Project Objectives
			</h3>
			<ul>
				<li>Create different card designs using CSS box model properties</li>
				<li>Practice working with margins, padding, and borders</li>
				<li>Implement shadows and hover effects</li>
				<li>Create responsive card layouts</li>
				<li>Apply CSS styling to create visually appealing components</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this project, you should
				complete the
				<router-link to="/tutorials/css-basics/box-model"
					>CSS Box Model</router-link
				>
				tutorial.
			</p>
		</div>

		<section class="project-section">
			<h2 class="title is-2">Project Description</h2>
			<p>
				In this project, you'll create a collection of card components using CSS
				box model properties. Cards are versatile UI elements used across the
				web for displaying content in a clean, organized way. You'll build
				several different card styles, each showcasing different aspects of the
				CSS box model.
			</p>

			<div class="box mt-5">
				<h3 class="title is-4">Your Card Components Project Should Include:</h3>
				<ul>
					<li>
						A basic product card with image, title, description, and price
					</li>
					<li>A profile card with avatar, name, and bio</li>
					<li>A feature card with icon, title, and description</li>
					<li>
						A news/blog card with image, date, title, excerpt, and read more
						link
					</li>
					<li>Hover effects to enhance user interaction</li>
					<li>Responsive design that works on different screen sizes</li>
				</ul>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Getting Started</h2>

			<h3 class="title is-4">Step 1: Set Up Your Project Files</h3>
			<p>Create the following files for your project:</p>
			<ul>
				<li><code>index.html</code> - Main HTML file</li>
				<li><code>styles.css</code> - CSS styles for your cards</li>
			</ul>

			<h3 class="title is-4 mt-5">Step 2: Set Up Your HTML Structure</h3>
			<p>
				Create the basic HTML structure in your <code>index.html</code> file:
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

			<h3 class="title is-4 mt-5">Step 3: Create Basic CSS Styles</h3>
			<p>Add some basic styles to your <code>styles.css</code> file:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="basicCSS"
					:options="{
						mode: 'css',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Building the Cards</h2>

			<h3 class="title is-4">Card 1: Product Card</h3>
			<p>Add this HTML for your product card:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="productCardHTML"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<p class="mt-4">Add these styles to your CSS file:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="productCardCSS"
					:options="{
						mode: 'css',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Card 2: Profile Card</h3>
			<p>Add this HTML for your profile card:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="profileCardHTML"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<p class="mt-4">Add these styles to your CSS file:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="profileCardCSS"
					:options="{
						mode: 'css',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Card 3: Feature Card</h3>
			<p>Add this HTML for your feature card:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="featureCardHTML"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<p class="mt-4">Add these styles to your CSS file:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="featureCardCSS"
					:options="{
						mode: 'css',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Card 4: Blog Card</h3>
			<p>Add this HTML for your blog card:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="blogCardHTML"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<p class="mt-4">Add these styles to your CSS file:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="blogCardCSS"
					:options="{
						mode: 'css',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Making Cards Responsive</h2>
			<p>Add these media queries to make your cards responsive:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="responsiveCSS"
					:options="{
						mode: 'css',
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
					<strong>Tip:</strong> Test your cards at different screen sizes using
					your browser's developer tools.
				</p>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Challenge Yourself</h2>
			<p>Once you've completed the basic requirements, try these challenges:</p>

			<div class="box">
				<h3 class="title is-5">Level Up Your Card Components</h3>
				<ul>
					<li>Add a pricing card with tiered options</li>
					<li>Create a testimonial card with a quote and author</li>
					<li>Add animations to your card hover effects</li>
					<li>Implement a card flip effect using CSS transforms</li>
					<li>Create a dark mode version of your cards</li>
					<li>
						Add accessibility features like focus states and ARIA attributes
					</li>
				</ul>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Submit Your Project</h2>
			<p>Once you've completed your card components project, you can:</p>
			<ul>
				<li>Save it to your computer for future reference</li>
				<li>Share it with friends to get feedback</li>
				<li>Deploy it to a free hosting service like GitHub Pages</li>
				<li>Add it to your portfolio to showcase your CSS skills</li>
				<li>Use these card components in your future web projects</li>
			</ul>

			<div class="notification is-info is-light mt-4">
				<p>
					<i class="fas fa-info-circle mr-2"></i>
					<strong>Next Steps:</strong> After completing this project, you might
					want to check out the
					<router-link to="/tutorials/css-basics/text-properties"
						>CSS Text Properties</router-link
					>
					tutorial to learn more ways to enhance the typography in your cards.
				</p>
			</div>
		</section>

	</div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';

// Code examples
const htmlStructure = ref(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Components</title>
  <link rel="stylesheet" href="styles.css">
  <!-- Font Awesome for icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
  <header>
    <h1>Card Component Examples</h1>
    <p>A collection of different card designs using CSS box model properties</p>
  </header>
  
  <main>
    <section class="card-section">
      <h2>Product Cards</h2>
      <div class="card-container">
        <!-- Product cards will go here -->
      </div>
    </section>
    
    <section class="card-section">
      <h2>Profile Cards</h2>
      <div class="card-container">
        <!-- Profile cards will go here -->
      </div>
    </section>
    
    <section class="card-section">
      <h2>Feature Cards</h2>
      <div class="card-container">
        <!-- Feature cards will go here -->
      </div>
    </section>
    
    <section class="card-section">
      <h2>Blog Cards</h2>
      <div class="card-container">
        <!-- Blog cards will go here -->
      </div>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2023 Card Components Project</p>
  </footer>
</body>
</html>`);

const basicCSS = ref(`/* Base styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f5f5f5;
  padding: 20px;
}

header, footer {
  text-align: center;
  padding: 20px;
  margin-bottom: 30px;
}

h1, h2, h3 {
  margin-bottom: 15px;
}

.card-section {
  margin-bottom: 40px;
}

.card-section h2 {
  text-align: center;
  margin-bottom: 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

/* Common card styles */
.card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}`);

const productCardHTML = ref(`<div class="product-card card">
  <div class="product-image">
    <img src="https://via.placeholder.com/300x200" alt="Product Image">
    <span class="product-tag">New</span>
  </div>
  <div class="product-info">
    <h3 class="product-title">Wireless Headphones</h3>
    <p class="product-description">High-quality wireless headphones with noise cancellation and long battery life.</p>
    <div class="product-price-container">
      <span class="product-price">$129.99</span>
      <button class="product-button">Add to Cart</button>
    </div>
  </div>
</div>`);

const productCardCSS = ref(`/* Product Card Styles */
.product-card {
  width: 300px;
  position: relative;
}

.product-image {
  position: relative;
  height: 200px;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff6b6b;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}

.product-info {
  padding: 20px;
}

.product-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.product-description {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.product-price-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
}

.product-button {
  background-color: #4a6cf7;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.product-button:hover {
  background-color: #3a5cf7;
}`);

const profileCardHTML = ref(`<div class="profile-card card">
  <div class="profile-cover"></div>
  <div class="profile-avatar">
    <img src="https://via.placeholder.com/150" alt="Profile Avatar">
  </div>
  <div class="profile-info">
    <h3 class="profile-name">Jane Doe</h3>
    <p class="profile-title">UX Designer</p>
    <p class="profile-bio">Passionate about creating intuitive user experiences and beautiful interfaces.</p>
    <div class="profile-social">
      <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
      <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
      <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
    </div>
    <button class="profile-button">View Profile</button>
  </div>
</div>`);

const profileCardCSS = ref(`/* Profile Card Styles */
.profile-card {
  width: 300px;
  text-align: center;
  position: relative;
  padding-top: 80px;
}

.profile-cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(45deg, #6a11cb, #2575fc);
}

.profile-avatar {
  position: relative;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.profile-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-info {
  padding: 20px;
}

.profile-name {
  font-size: 1.4rem;
  margin-bottom: 5px;
}

.profile-title {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.profile-bio {
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.profile-social {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #f5f5f5;
  color: #333;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: #2575fc;
  color: white;
}

.profile-button {
  background-color: transparent;
  color: #2575fc;
  border: 1px solid #2575fc;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.profile-button:hover {
  background-color: #2575fc;
  color: white;
}`);

const featureCardHTML = ref(`<div class="feature-card card">
  <div class="feature-icon">
    <i class="fas fa-rocket"></i>
  </div>
  <div class="feature-content">
    <h3 class="feature-title">Fast Performance</h3>
    <p class="feature-description">Our optimized platform ensures lightning-fast loading times and smooth performance.</p>
  </div>
</div>`);

const featureCardCSS = ref(`/* Feature Card Styles */
.feature-card {
  width: 250px;
  padding: 30px 20px;
  text-align: center;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.feature-icon {
  font-size: 2.5rem;
  color: #6a11cb;
  margin-bottom: 20px;
}

.feature-title {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.feature-description {
  color: #666;
  font-size: 0.9rem;
}

.feature-card:hover {
  background-color: #6a11cb;
}

.feature-card:hover .feature-icon,
.feature-card:hover .feature-title,
.feature-card:hover .feature-description {
  color: white;
}`);

const blogCardHTML = ref(`<div class="blog-card card">
  <div class="blog-image">
    <img src="https://via.placeholder.com/400x250" alt="Blog Post Image">
  </div>
  <div class="blog-content">
    <div class="blog-date">June 15, 2023</div>
    <h3 class="blog-title">The Future of Web Design</h3>
    <p class="blog-excerpt">Exploring upcoming trends and technologies that will shape the future of web design and development.</p>
    <a href="#" class="blog-link">Read More <i class="fas fa-arrow-right"></i></a>
  </div>
</div>`);

const blogCardCSS = ref(`/* Blog Card Styles */
.blog-card {
  width: 350px;
  display: flex;
  flex-direction: column;
}

.blog-image {
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-content {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.blog-date {
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 10px;
}

.blog-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.blog-excerpt {
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 20px;
  flex-grow: 1;
}

.blog-link {
  align-self: flex-start;
  color: #6a11cb;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
}

.blog-link i {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.blog-link:hover {
  color: #2575fc;
}

.blog-link:hover i {
  transform: translateX(5px);
}`);

const responsiveCSS = ref(`/* Responsive Styles */
@media (max-width: 1200px) {
  .card-container {
    gap: 15px;
  }
}

@media (max-width: 768px) {
  .product-card,
  .profile-card,
  .feature-card,
  .blog-card {
    width: 100%;
    max-width: 350px;
  }
  
  .card-section {
    padding: 0 15px;
  }
}

@media (max-width: 480px) {
  body {
    padding: 10px;
  }
  
  .product-price-container {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
  
  .product-button {
    width: 100%;
  }
  
  .profile-card {
    padding-top: 60px;
  }
  
  .profile-cover {
    height: 80px;
  }
  
  .profile-avatar {
    width: 80px;
    height: 80px;
  }
}`);
</script>

<script>
// Frontmatter for the project
export default {
	frontmatter: {
		title: 'Card Components',
		description: 'Create different card designs using the CSS box model',
		category: 'CSS Projects',
		level: 'Beginner',
		tags: ['CSS', 'Box Model', 'Components'],
		lastUpdated: '2023-09-25',
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
