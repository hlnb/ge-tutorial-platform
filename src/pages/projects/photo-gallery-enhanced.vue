<template>
	<div class="container">
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/projects">Projects</router-link></li>
				<li class="is-active"><a href="#" aria-current="page">Enhanced Photo Gallery</a></li>
			</ul>
		</nav>

		<div class="content">
			<h1 class="title">Enhanced Photo Gallery</h1>
			<p class="subtitle">
				Build a responsive photo gallery using CSS Grid, Flexbox, and modern CSS features
			</p>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-bullseye"></i> Project Objectives
				</h2>
				<ul>
					<li>Create a responsive photo gallery using CSS Grid and Flexbox</li>
					<li>Implement smooth animations and transitions</li>
					<li>Add interactive features like hover effects and filters</li>
					<li>Ensure accessibility with proper ARIA attributes</li>
					<li>Optimize performance with lazy loading</li>
				</ul>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-graduation-cap"></i> Learning Outcomes
				</h2>
				<ul>
					<li>Master CSS Grid and Flexbox for responsive layouts</li>
					<li>Understand CSS animations and transitions</li>
					<li>Learn about CSS custom properties (variables)</li>
					<li>Practice modern CSS features and best practices</li>
					<li>Improve accessibility in web applications</li>
				</ul>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-tasks"></i> Project Steps
				</h2>
				<div class="steps">
					<div class="step">
						<h3 class="title is-5">1. Setup & Structure</h3>
						<p>Create the basic HTML structure and organize your files:</p>
						<CodeMirror
							:code="htmlStructure"
							:options="{ mode: 'htmlmixed', readOnly: true }"
						/>
					</div>

					<div class="step">
						<h3 class="title is-5">2. Grid Layout</h3>
						<p>Implement the CSS Grid layout for the gallery:</p>
						<CodeMirror
							:code="gridLayout"
							:options="{ mode: 'css', readOnly: true }"
						/>
					</div>

					<div class="step">
						<h3 class="title is-5">3. Responsive Design</h3>
						<p>Add media queries for different screen sizes:</p>
						<CodeMirror
							:code="responsiveDesign"
							:options="{ mode: 'css', readOnly: true }"
						/>
					</div>

					<div class="step">
						<h3 class="title is-5">4. Animations & Transitions</h3>
						<p>Add smooth animations and hover effects:</p>
						<CodeMirror
							:code="animations"
							:options="{ mode: 'css', readOnly: true }"
						/>
					</div>

					<div class="step">
						<h3 class="title is-5">5. Filter & Search</h3>
						<p>Implement the filter and search functionality:</p>
						<CodeMirror
							:code="filterSearch"
							:options="{ mode: 'javascript', readOnly: true }"
						/>
					</div>
				</div>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-lightbulb"></i> Tips & Best Practices
				</h2>
				<div class="content">
					<ul>
						<li>Use CSS Grid for the main layout and Flexbox for card content</li>
						<li>Implement lazy loading for better performance</li>
						<li>Add proper alt text and ARIA labels for accessibility</li>
						<li>Use CSS custom properties for consistent theming</li>
						<li>Optimize images for different screen sizes</li>
					</ul>
				</div>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-code"></i> Complete Example
				</h2>
				<CodeMirror
					:code="completeExample"
					:options="{ mode: 'htmlmixed', readOnly: true }"
				/>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-exclamation-circle"></i> Common Issues & Solutions
				</h2>
				<div class="content">
					<ul>
						<li>
							<strong>Grid items not aligning properly:</strong> Check grid-template-columns and
							grid-gap values
						</li>
						<li>
							<strong>Animations not smooth:</strong> Use transform and opacity for better
							performance
						</li>
						<li>
							<strong>Images not loading:</strong> Verify image paths and implement proper error
							handling
						</li>
					</ul>
				</div>
			</div>

			<div class="box">
				<h2 class="title is-4">
					<i class="fas fa-tachometer-alt"></i> Performance Tips
				</h2>
				<div class="content">
					<ul>
						<li>Use appropriate image sizes and formats</li>
						<li>Implement lazy loading for images</li>
						<li>Minimize CSS animations on mobile devices</li>
						<li>Use CSS containment for better rendering performance</li>
					</ul>
				</div>
			</div>
		</div>


	</div>
</template>

<script setup>
import { ref } from 'vue';
import CodeMirror from '@/components/CodeMirror.vue';

const htmlStructure = ref(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nature Photography Gallery</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Nature Photography Gallery</h1>
    <div class="search-filters">
      <input type="search" placeholder="Search images...">
      <div class="filter-buttons">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="landscape">Landscape</button>
        <button class="filter-btn" data-filter="wildlife">Wildlife</button>
        <button class="filter-btn" data-filter="macro">Macro</button>
      </div>
    </div>
  </header>

  <main>
    <div class="gallery-container">
      <div class="gallery-grid">
        <!-- Gallery items will be dynamically added here -->
      </div>
    </div>
  </main>

  <footer>
    <p>&copy; 2024 Nature Photography Gallery</p>
  </footer>

  <script src="gallery.js"><\/script>
</body>
</html>`);

const gridLayout = ref(`/* CSS Grid Layout */
.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-item .overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 1rem;
  color: white;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .overlay {
  transform: translateY(0);
}`);

const responsiveDesign = ref(`/* Responsive Design */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .gallery-item img {
    height: 250px;
  }

  .search-filters {
    flex-direction: column;
    gap: 1rem;
  }

  .filter-buttons {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .gallery-item img {
    height: 300px;
  }
}`);

const animations = ref(`/* Animations & Transitions */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.gallery-item {
  animation: fadeIn 0.5s ease forwards;
}

.gallery-item:nth-child(2) { animation-delay: 0.1s; }
.gallery-item:nth-child(3) { animation-delay: 0.2s; }
.gallery-item:nth-child(4) { animation-delay: 0.3s; }
.gallery-item:nth-child(5) { animation-delay: 0.4s; }
.gallery-item:nth-child(6) { animation-delay: 0.5s; }

/* Smooth transitions */
.gallery-item,
.gallery-item img,
.gallery-item .overlay {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}`);

const filterSearch = ref(`// Filter and Search Functionality
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery-grid');
  const searchInput = document.querySelector('input[type="search"]');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // Sample image data
  const images = [
    {
      id: 1,
      src: 'images/landscape-1.jpg',
      title: 'Mountain Vista',
      category: 'landscape',
      description: 'Beautiful mountain landscape at sunset'
    },
    // Add more image objects...
  ];

  // Render gallery items
  function renderGallery(filteredImages = images) {
    gallery.innerHTML = filteredImages
      .map(image => \`
        <div class="gallery-item" data-category="\${image.category}">
          <img src="\${image.src}" alt="\${image.title}" loading="lazy">
          <div class="overlay">
            <h3>\${image.title}</h3>
            <p>\${image.description}</p>
          </div>
        </div>
      \`)
      .join('');
  }

  // Search functionality
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredImages = images.filter(image => 
      image.title.toLowerCase().includes(searchTerm) ||
      image.description.toLowerCase().includes(searchTerm)
    );
    renderGallery(filteredImages);
  });

  // Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter images
      const filteredImages = filter === 'all'
        ? images
        : images.filter(image => image.category === filter);
      
      renderGallery(filteredImages);
    });
  });

  // Initial render
  renderGallery();
});`);

const completeExample = ref(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nature Photography Gallery</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Nature Photography Gallery</h1>
    <div class="search-filters">
      <input type="search" placeholder="Search images...">
      <div class="filter-buttons">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="landscape">Landscape</button>
        <button class="filter-btn" data-filter="wildlife">Wildlife</button>
        <button class="filter-btn" data-filter="macro">Macro</button>
      </div>
    </div>
  </header>

  <main>
    <div class="gallery-container">
      <div class="gallery-grid">
        <!-- Gallery items will be dynamically added here -->
      </div>
    </div>
  </main>

  <footer>
    <p>&copy; 2024 Nature Photography Gallery</p>
  </footer>

  <script src="gallery.js"><\/script>
</body>
</html>`);
</script>

<style scoped>
.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem;
}

.steps {
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

.step {
	background-color: #f5f5f5;
	padding: 1.5rem;
	border-radius: 8px;
}

.step h3 {
	margin-bottom: 1rem;
	color: #2c3e50;
}

.content ul {
	list-style-type: disc;
	margin-left: 1.5rem;
}

.content li {
	margin-bottom: 0.5rem;
}

.box {
	margin-bottom: 2rem;
}

.title {
	color: #2c3e50;
}

.subtitle {
	color: #666;
	margin-bottom: 2rem;
}
</style> 