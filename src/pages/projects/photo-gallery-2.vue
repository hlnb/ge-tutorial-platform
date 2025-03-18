<template>
  <div class="content">
    <h1 class="title is-1">
      <i class="fas fa-images"></i> Dynamic Photo Gallery
    </h1>

    <div class="box project-intro">
      <h2 class="title is-4">Project Overview</h2>
      <p>
        Build an interactive photo gallery that demonstrates your understanding of arrays and DOM manipulation.
        This project builds on the basic photo gallery by adding dynamic features and array operations.
      </p>

      <div class="tags mt-4">
        <span class="tag is-info">Arrays</span>
        <span class="tag is-info">DOM Manipulation</span>
        <span class="tag is-info">Event Handling</span>
        <span class="tag is-success">Intermediate</span>
        <span class="tag is-warning">45 minutes</span>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Learning Objectives</h2>
      <ul>
        <li>Work with arrays to manage image collections</li>
        <li>Use array methods to filter and sort images</li>
        <li>Implement dynamic DOM updates</li>
        <li>Handle user interactions with event listeners</li>
        <li>Practice array transformation methods</li>
      </ul>
    </div>

    <div class="box">
      <h2 class="title is-4">Project Requirements</h2>
      
      <div class="requirement-group">
        <h3 class="title is-5">1. Gallery Setup</h3>
        <ul>
          <li>Create an array of image objects with properties:
            <ul>
              <li>url: string (image URL)</li>
              <li>title: string (image title)</li>
              <li>category: string (image category)</li>
              <li>date: Date (when added)</li>
            </ul>
          </li>
          <li>Display images in a responsive grid layout</li>
          <li>Show image title and category below each image</li>
        </ul>
      </div>

      <div class="requirement-group">
        <h3 class="title is-5">2. Array Operations</h3>
        <ul>
          <li>Implement category filtering using array filter() method</li>
          <li>Add sorting options (by date, title) using array sort() method</li>
          <li>Create a search function using array find() or filter()</li>
          <li>Allow adding new images to the array using push()</li>
        </ul>
      </div>

      <div class="requirement-group">
        <h3 class="title is-5">3. Interactive Features</h3>
        <ul>
          <li>Click image to view larger version in a modal</li>
          <li>Add/remove images from favorites using array methods</li>
          <li>Implement a slideshow feature using array iteration</li>
          <li>Add image upload capability (URL input)</li>
        </ul>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Getting Started</h2>
      
      <div class="steps">
        <div class="step-item">
          <h3 class="title is-5">Step 1: Set Up Data Structure</h3>
          <pre><code>const gallery = {
  images: [
    {
      url: 'path/to/image1.jpg',
      title: 'Mountain Landscape',
      category: 'Nature',
      date: new Date('2024-01-15')
    },
    // Add more images...
  ],
  favorites: [],
  currentCategory: 'all'
};</code></pre>
        </div>

        <div class="step-item">
          <h3 class="title is-5">Step 2: Create Display Functions</h3>
          <pre><code>function displayImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images
    .map(img => `
      &lt;div class="gallery-item"&gt;
        &lt;img src="${img.url}" alt="${img.title}"&gt;
        &lt;h3&gt;${img.title}&lt;/h3&gt;
        &lt;p&gt;${img.category}&lt;/p&gt;
      &lt;/div&gt;
    `).join('');</code></pre>
        </div>

        <div class="step-item">
          <h3 class="title is-5">Step 3: Implement Array Operations</h3>
          <pre><code>// Filter by category
function filterByCategory(category) {
  return gallery.images
    .filter(img => category === 'all' || img.category === category);
}

// Sort by date
function sortByDate() {
  return [...gallery.images]
    .sort((a, b) => b.date - a.date);
}

// Search by title
function searchImages(query) {
  return gallery.images
    .filter(img => 
      img.title.toLowerCase()
        .includes(query.toLowerCase())
    );
}</code></pre>
        </div>
      </div>
    </div>

    <div class="box">
      <h2 class="title is-4">Tips for Success</h2>
      <ul>
        <li>Use array methods instead of loops where possible</li>
        <li>Keep your code DRY (Don't Repeat Yourself)</li>
        <li>Add error handling for image loading</li>
        <li>Use meaningful variable and function names</li>
        <li>Comment your code to explain complex operations</li>
      </ul>
    </div>

    <div class="box">
      <h2 class="title is-4">Bonus Challenges</h2>
      <ul>
        <li>Add image lazy loading for better performance</li>
        <li>Implement drag-and-drop reordering of images</li>
        <li>Add image categories using array grouping</li>
        <li>Create an image carousel using array rotation</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// Component logic will be added here
</script>

<style scoped>
.project-intro {
  background-color: #f8f9fa;
  border-left: 4px solid #3273dc;
}

.requirement-group {
  margin-bottom: 2rem;
}

.step-item {
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 4px;
}

.step-item pre {
  margin-top: 1rem;
  padding: 1rem;
  background: #2c3e50;
  color: #fff;
  border-radius: 4px;
}

.step-item code {
  color: #fff;
}
</style> 