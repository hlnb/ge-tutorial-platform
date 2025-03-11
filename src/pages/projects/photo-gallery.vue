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
					<a href="#" aria-current="page">Photo Gallery</a>
				</li>
			</ul>
		</nav>

		<div class="tags">
			<span class="tag is-info">Beginner</span>
			<span class="tag is-warning">60 minutes</span>
			<span class="tag is-success">HTML</span>
			<span class="tag is-primary">Images</span>
		</div>

		<h1 class="title is-1">
			<i class="fas fa-images"></i> Photo Gallery Project
		</h1>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Project Objectives
			</h3>
			<ul>
				<li>Create a responsive photo gallery using HTML</li>
				<li>Implement proper image elements with attributes</li>
				<li>Add descriptive captions for each image</li>
				<li>Practice organizing visual content</li>
				<li>Use semantic HTML for better accessibility</li>
			</ul>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this project, you should
				complete the
				<router-link to="/tutorials/html-basics/images"
					>Working with Images</router-link
				>
				tutorial.
			</p>
		</div>

		<section class="project-section">
			<h2 class="title is-2">Project Description</h2>
			<p>
				In this project, you'll create a photo gallery webpage that showcases a
				collection of images with captions. This is a great way to practice
				working with the HTML <code>&lt;img&gt;</code> element and its
				attributes, while creating an engaging visual experience.
			</p>

			<div class="box mt-5">
				<h3 class="title is-4">Your Photo Gallery Should Include:</h3>
				<ul>
					<li>A proper HTML document structure</li>
					<li>A heading and brief introduction to your gallery</li>
					<li>At least 6-8 images with appropriate alt text</li>
					<li>Captions for each image</li>
					<li>Proper organization using semantic HTML elements</li>
					<li>Optional: image thumbnails that link to larger versions</li>
				</ul>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Getting Started</h2>

			<h3 class="title is-4">Step 1: Set Up Your HTML File</h3>
			<p>
				Create a new file called <code>gallery.html</code> and set up the basic
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

			<h3 class="title is-4 mt-5">Step 2: Add Your Gallery Header</h3>
			<p>
				Inside the body element, add a header section with your gallery title
				and introduction:
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

			<h3 class="title is-4 mt-5">Step 3: Create Your Gallery Structure</h3>
			<p>Set up the main gallery section using semantic HTML:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="galleryStructure"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<h3 class="title is-4 mt-5">Step 4: Add Individual Gallery Items</h3>
			<p>Add your images with captions to the gallery:</p>

			<div class="codemirror-wrapper">
				<CodeMirror
					v-model="galleryItems"
					:options="{
						mode: 'html',
						theme: 'material',
						lineNumbers: true,
						lineWrapping: true,
						tabSize: 2,
					}"
				/>
			</div>

			<div class="notification is-warning is-light mt-4">
				<p>
					<i class="fas fa-exclamation-triangle mr-2"></i>
					<strong>Important:</strong> For this project, you'll need to have some
					image files. You can use your own photos or download free stock images
					from sites like
					<a href="https://unsplash.com/" target="_blank">Unsplash</a>,
					<a href="https://www.pexels.com/" target="_blank">Pexels</a>, or
					<a href="https://pixabay.com/" target="_blank">Pixabay</a>.
				</p>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Project Example</h2>
			<p>Here's what your completed photo gallery might look like:</p>

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
					<strong>Remember:</strong> This is just an example. Use your own
					images and customize the gallery to reflect your personal style or
					theme!
				</p>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Challenge Yourself</h2>
			<p>Once you've completed the basic requirements, try these challenges:</p>

			<div class="box">
				<h3 class="title is-5">Level Up Your Photo Gallery</h3>
				<ul>
					<li>
						Create thumbnail images that link to larger versions of each photo
					</li>
					<li>
						Add a lightbox effect using the <code>&lt;dialog&gt;</code> element
					</li>
					<li>Organize your images into different categories or sections</li>
					<li>
						Add metadata like the date taken, location, or camera settings
					</li>
					<li>Include a contact or about section for the photographer</li>
					<li>Add proper image dimensions using width and height attributes</li>
				</ul>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Submit Your Project</h2>
			<p>Once you've completed your photo gallery, you can:</p>
			<ul>
				<li>Save it to your computer for future reference</li>
				<li>Share it with friends and family to showcase your photos</li>
				<li>Deploy it to a free hosting service like GitHub Pages</li>
				<li>Continue to expand it with more photos and features</li>
			</ul>

			<div class="notification is-info is-light mt-4">
				<p>
					<i class="fas fa-info-circle mr-2"></i>
					<strong>Next Steps:</strong> After completing this project, you might
					want to check out the
					<router-link to="/tutorials/css-basics">CSS Basics</router-link>
					tutorials to learn how to style your gallery and make it even more
					visually appealing.
				</p>
			</div>
		</section>

		<!-- Recommendations for next projects -->
		<TutorialRecommendations />
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
  <title>My Photo Gallery</title>
</head>
<body>
  <!-- Your gallery content will go here -->
</body>
</html>`);

const headerSection = ref(`<header>
  <h1>Nature Photography Gallery</h1>
  <p>
    A collection of my favorite nature photographs taken during my travels.
    Each image captures a unique moment in the natural world.
  </p>
</header>`);

const galleryStructure = ref(`<main>
  <section class="gallery">
    <h2>Photo Collection</h2>
    
    <!-- Gallery items will go here -->
    
  </section>
</main>`);

const galleryItems = ref(`<!-- Example of a gallery item -->
<figure class="gallery-item">
  <img src="images/mountain.jpg" alt="Mountain landscape with snow-capped peaks" width="800" height="600">
  <figcaption>Mountain vista in the Canadian Rockies, taken during sunrise in summer 2023</figcaption>
</figure>

<!-- Another gallery item -->
<figure class="gallery-item">
  <img src="images/beach.jpg" alt="Sandy beach with turquoise water" width="800" height="600">
  <figcaption>Tropical beach in Bali, Indonesia with crystal clear waters</figcaption>
</figure>`);

const completeExample = ref(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nature Photography Gallery</title>
</head>
<body>
  <header>
    <h1>Nature Photography Gallery</h1>
    <p>
      A collection of my favorite nature photographs taken during my travels.
      Each image captures a unique moment in the natural world.
    </p>
  </header>
  
  <main>
    <section class="gallery">
      <h2>Photo Collection</h2>
      
      <figure class="gallery-item">
        <img 
          src="images/mountain.jpg" 
          alt="Mountain landscape with snow-capped peaks" 
          width="800" 
          height="600"
        >
        <figcaption>Mountain vista in the Canadian Rockies, taken during sunrise in summer 2023</figcaption>
      </figure>
      
      <figure class="gallery-item">
        <img 
          src="images/beach.jpg" 
          alt="Sandy beach with turquoise water" 
          width="800" 
          height="600"
        >
        <figcaption>Tropical beach in Bali, Indonesia with crystal clear waters</figcaption>
      </figure>
      
      <figure class="gallery-item">
        <img 
          src="images/forest.jpg" 
          alt="Dense forest with sunlight streaming through trees" 
          width="800" 
          height="600"
        >
        <figcaption>Ancient redwood forest in Northern California, early morning fog</figcaption>
      </figure>
      
      <figure class="gallery-item">
        <img 
          src="images/waterfall.jpg" 
          alt="Cascading waterfall in a lush green setting" 
          width="800" 
          height="600"
        >
        <figcaption>Hidden waterfall discovered during a hike in Costa Rica</figcaption>
      </figure>
      
      <figure class="gallery-item">
        <img 
          src="images/desert.jpg" 
          alt="Desert landscape with sand dunes at sunset" 
          width="800" 
          height="600"
        >
        <figcaption>Sahara Desert sand dunes at sunset, Morocco</figcaption>
      </figure>
      
      <figure class="gallery-item">
        <img 
          src="images/lake.jpg" 
          alt="Calm lake reflecting mountains and sky" 
          width="800" 
          height="600"
        >
        <figcaption>Mirror-like reflection on Lake Louise in Banff National Park</figcaption>
      </figure>
    </section>
    
    <section class="about">
      <h2>About the Photographer</h2>
      <p>
        All photos were taken by Jane Smith, an amateur nature photographer with a passion for 
        capturing the beauty of our natural world. I've been photographing landscapes for over 
        5 years and have traveled to 15 countries in search of breathtaking scenery.
      </p>
      <p>
        Camera: Canon EOS 5D Mark IV with various lenses
      </p>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2023 Jane Smith Photography. All rights reserved.</p>
    <p>
      <a href="mailto:jane@example.com">Contact Me</a> | 
      <a href="https://instagram.com/">Follow on Instagram</a>
    </p>
  </footer>
</body>
</html>`);
</script>

<script>
// Frontmatter for the project
export default {
	frontmatter: {
		title: 'Photo Gallery',
		description: 'Build a simple photo gallery with images and captions',
		category: 'HTML Projects',
		level: 'Beginner',
		tags: ['HTML', 'Images', 'Gallery'],
		lastUpdated: '2023-09-20',
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
