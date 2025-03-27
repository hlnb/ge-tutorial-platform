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
			<span class="tag is-danger">JavaScript</span>
			<span class="tag is-primary">Images</span>
			<span class="tag is-link">Interactive</span>
		</div>

		<h1 class="title is-1">
			<i class="fas fa-images"></i> Photo Gallery Project
		</h1>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-graduation-cap"></i> Project Objectives
			</h3>
			<ul>
				<li v-for="objective in objectives" :key="objective">
					{{ objective }}
				</li>
			</ul>
		</div>

		<div class="box mb-6">
			<h3 class="title is-4">
				<i class="fas fa-check-square"></i> What You'll Learn
			</h3>
			<div class="columns">
				<div class="column">
					<h4 class="title is-5">Basic Skills</h4>
					<ul>
						<li>HTML image elements</li>
						<li>Semantic HTML structure</li>
						<li>Basic file organization</li>
					</ul>
				</div>
				<div class="column">
					<h4 class="title is-5">Advanced Topics</h4>
					<ul>
						<li>Image optimization</li>
						<li>Search functionality</li>
						<li>Accessibility practices</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="notification is-info is-light">
			<p>
				<i class="fas fa-lightbulb mr-2"></i>
				<strong>Prerequisites:</strong> Before starting this project, you should complete these tutorials:
			</p>
			<ul class="mt-2">
				<li v-for="prereq in prerequisites" :key="prereq.path">
					<router-link :to="prereq.path">{{ prereq.title }}</router-link>
				</li>
			</ul>
		</div>

		<div class="box">
			<h3 class="title is-4">
				<i class="fas fa-tools"></i> Required Knowledge
			</h3>
			<ul>
				<li>
					<router-link to="/tutorials/html-basics">HTML Basics</router-link>
					- Understanding of basic HTML structure
				</li>
				<li>
					<router-link to="/tutorials/html-basics/images">HTML Images</router-link>
					- Working with image elements
				</li>
				<li>
					<router-link to="/tutorials/javascript-basics">JavaScript Basics</router-link>
					(for search functionality) - Coming Soon!
				</li>
			</ul>
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

			<h3 class="title is-4">Step 1: Set Up Your Project</h3>
			<p>{{ instructions.setup }}</p>

			<h3 class="title is-4 mt-5">Step 2: Create the Structure</h3>
			<p>{{ instructions.structure }}</p>

			<h3 class="title is-4 mt-5">Step 3: Add Content</h3>
			<p>{{ instructions.content }}</p>

			<h3 class="title is-4 mt-5">Step 4: Enhance Your Project</h3>
			<p>{{ instructions.enhancement }}</p>

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

		<section class="project-section">
			<h2 class="title is-2">Search Your Gallery</h2>
			<div class="search-controls mb-4">
				<input
					type="text"
					v-model="searchQuery"
					placeholder="Search images by caption..."
					class="input"
				/>
				<div class="filter-options mt-2">
					<label class="checkbox mr-4">
						<input type="checkbox" v-model="searchInTags"> Search in tags
					</label>
					<div class="select is-small">
						<select v-model="sortBy">
							<option value="caption">Sort by Caption</option>
							<option value="date">Sort by Date</option>
							<option value="location">Sort by Location</option>
						</select>
					</div>
				</div>
			</div>

			<div v-if="filteredImages.length === 0" class="notification is-warning">
				No images found matching your search criteria.
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">JavaScript Guidance</h2>
			<p>
				To add interactivity to your photo gallery, you can implement a search
				functionality using JavaScript. This will allow users to filter images
				based on their captions. Here's how you can do it:
			</p>

			<div class="box mt-5">
				<h3 class="title is-4">Example JavaScript Code:</h3>
				<pre><code class="language-javascript">
const searchQuery = ref('');

const images = ref([
	{ id: 1, src: 'image1.jpg', alt: 'Image 1', caption: 'Beautiful Landscape' },
	{ id: 2, src: 'image2.jpg', alt: 'Image 2', caption: 'City Skyline' },
	{ id: 3, src: 'image3.jpg', alt: 'Image 3', caption: 'Mountain View' },
	{ id: 4, src: 'image4.jpg', alt: 'Image 4', caption: 'Ocean Breeze' },
	{ id: 5, src: 'image5.jpg', alt: 'Image 5', caption: 'Forest Path' },
	{ id: 6, src: 'image6.jpg', alt: 'Image 6', caption: 'Desert Dunes' },
]);

const filteredImages = computed(() => {
	return images.value.filter(image =>
		image.caption.toLowerCase().includes(searchQuery.value.toLowerCase())
	);
});
				</code></pre>
			</div>

			<p>
				In this example, we use a <code>ref</code> to store the search query and
				an array of image objects. The <code>computed</code> property
				<code>filteredImages</code> dynamically filters the images based on the
				search query, updating the displayed images in real-time.
			</p>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Your Photo Gallery</h2>
			<div class="gallery">
				<div
					v-for="image in filteredImages"
					:key="image.id"
					class="gallery-item"
				>
					<img :src="image.src" :alt="image.alt" />
					<p>{{ image.caption }}</p>
				</div>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Setting Up Your Images</h2>
			<div class="box">
				<h3 class="title is-4">Getting Free Images</h3>
				<p>You can get high-quality, free images from these websites:</p>
				<ul>
					<li>
						<a href="https://unsplash.com/license" target="_blank" rel="noopener">Unsplash</a> 
						- Free to use images, no attribution required
					</li>
					<li>
						<a href="https://www.pexels.com/license/" target="_blank" rel="noopener">Pexels</a> 
						- Free to use images, attribution appreciated but not required
					</li>
					<li>
						<a href="https://pixabay.com/service/license/" target="_blank" rel="noopener">Pixabay</a> 
						- Free to use images under Pixabay license
					</li>
				</ul>
				
				<div class="box">
					<h3 class="title is-4">Tips for Image Management</h3>
					<div class="content">
						<p>
							<i class="fas fa-info-circle mr-2"></i>
							<strong>Tip:</strong> When downloading images, make sure to:
						</p>
						<ul>
							<li>Choose appropriate sizes (800px to 1200px width is usually good)</li>
							<li>Save them with meaningful filenames (e.g., "mountain-sunset.jpg")</li>
							<li>Store them in an "images" folder in your project</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Adding Search Functionality</h2>
			<p>To make your gallery searchable, you'll need to:</p>
			
			<div class="box">
				<h3 class="title is-4">1. Create an Image Data Structure</h3>
				<pre><code class="language-javascript">
const images = [
	{
		id: 1,
		src: 'images/mountain-sunset.jpg',
		alt: 'Beautiful mountain landscape at sunset',
		caption: 'Mountain Sunset',
		tags: ['nature', 'mountains', 'sunset']
	},
	// Add more images here
];
				</code></pre>
			</div>

			<div class="box">
				<h3 class="title is-4">2. Add the Search Input</h3>
				<pre><code class="language-html">
&lt;div class="search-section"&gt;
	&lt;input 
		type="text"
		placeholder="Search images..."
		id="gallery-search"
	&gt;
&lt;/div&gt;
				</code></pre>
			</div>

			<div class="box">
				<h3 class="title is-4">3. Add JavaScript for Search</h3>
				<pre><code class="language-javascript">
const searchInput = document.getElementById('gallery-search');
const galleryContainer = document.querySelector('.gallery');

searchInput.addEventListener('input', (e) => {
	const searchTerm = e.target.value.toLowerCase();
	
	images.forEach(image => {
		const galleryItem = document.getElementById(`gallery-item-${image.id}`);
		const matchesSearch = image.caption.toLowerCase().includes(searchTerm) ||
							 image.tags.some(tag => tag.toLowerCase().includes(searchTerm));
		
		galleryItem.style.display = matchesSearch ? 'block' : 'none';
	});
});
				</code></pre>
			</div>

			<div class="box">
				<h3 class="title is-4">Challenge</h3>
				<div class="content">
					<p>
						<i class="fas fa-lightbulb mr-2"></i>
						<strong>Challenge:</strong> Try extending the search functionality to:
					</p>
					<ul>
						<li>Add filters for different categories</li>
						<li>Sort images by date or name</li>
						<li>Add a "no results found" message</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="project-section">
			<h2 class="title is-2">Common Issues & Solutions</h2>
			
			<div class="box">
				<h3 class="title is-4">Images Not Loading</h3>
				<ul>
					<li>Check file paths are correct</li>
					<li>Verify image file extensions</li>
					<li>Ensure images are in the correct folder</li>
				</ul>
			</div>

			<div class="box">
				<h3 class="title is-4">Performance Tips</h3>
				<ul>
					<li>Optimize images before uploading (use tools like ImageOptim)</li>
					<li>Use appropriate image dimensions</li>
					<li>Consider using WebP format with fallbacks</li>
				</ul>
			</div>
		</section>


	</div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';

const props = defineProps({
	currentTutorial: {
		type: String,
		required: false,
		default: null
	}
});

// Default values for project content
const objectives = ref([
	'Create a responsive photo gallery using HTML',
	'Practice working with image elements and their attributes',
	'Implement proper semantic HTML structure',
	'Add captions and descriptions to images',
	'Ensure accessibility with proper alt text'
]);

const prerequisites = ref([
	{
		title: 'HTML Basics',
		path: '/tutorials/html-basics'
	},
	{
		title: 'HTML Images',
		path: '/tutorials/html-basics/images'
	}
]);

const instructions = ref({
	setup: 'Create a new directory for your project and set up the basic file structure. You\'ll need an index.html file and an images folder to store your photos.',
	structure: 'Start with a basic HTML5 document structure. Include proper meta tags and a title for your gallery.',
	content: 'Add your images to the gallery, making sure to include descriptive alt text and captions for each image.',
	enhancement: 'Consider adding features like image thumbnails, a grid layout, or hover effects to make your gallery more engaging.'
});

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

const images = ref([
	{
		id: 1,
		src: 'image1.jpg',
		alt: 'Beautiful mountain landscape',
		caption: 'Beautiful Mountain Landscape',
		date: '2023-09-15',
		location: 'Canadian Rockies',
		tags: ['mountains', 'nature', 'landscape']
	},
	{
		id: 2,
		src: 'image2.jpg',
		alt: 'City skyline at sunset',
		caption: 'City Skyline',
		date: '2023-08-20',
		location: 'New York',
		tags: ['urban', 'sunset', 'architecture']
	},
	// ... add more images with similar structure
]);

const searchQuery = ref('');
const searchInTags = ref(false);
const sortBy = ref('caption');

const filteredImages = computed(() => {
	let filtered = images.value.filter(image => {
		const query = searchQuery.value.toLowerCase();
		const matchesCaption = image.caption.toLowerCase().includes(query);
		const matchesTags = searchInTags.value && 
			image.tags.some(tag => tag.toLowerCase().includes(query));
		
		return matchesCaption || matchesTags;
	});

	// Sort the filtered results
	return filtered.sort((a, b) => {
		switch (sortBy.value) {
			case 'date':
				return new Date(b.date) - new Date(a.date);
			case 'location':
				return a.location.localeCompare(b.location);
			default:
				return a.caption.localeCompare(b.caption);
		}
	});
});

// Add a watcher for logging/debugging
watch(searchQuery, (newValue) => {
	console.log('Search query changed:', newValue);
	console.log('Filtered results:', filteredImages.value.length);
});
</script>

<script>
// Frontmatter for the project
export default {
	frontmatter: {
		title: 'Photo Gallery',
		description: 'Build an interactive photo gallery with images, captions, and search functionality',
		category: 'HTML Projects',
		level: 'Beginner',
		tags: ['HTML', 'JavaScript', 'Images', 'Gallery', 'Interactive'],
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

.search-controls {
	max-width: 600px;
}

.filter-options {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}

.gallery {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 1.5rem;
	padding: 1rem 0;
}

.gallery-item {
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	overflow: hidden;
	transition: transform 0.2s;
}

.gallery-item:hover {
	transform: translateY(-5px);
	box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.gallery-item img {
	width: 100%;
	height: 200px;
	object-fit: cover;
}

.gallery-item p {
	padding: 0.75rem;
	margin: 0;
	font-size: 0.9rem;
}
</style>
