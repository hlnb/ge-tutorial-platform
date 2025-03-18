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
        <li class="is-active">
          <a href="#" aria-current="page">Document Object Model</a>
        </li>
      </ul>
    </nav>

    <h1>
      <i class="fa-solid fa-sitemap fa-rotate-270 mr-2 page-icon" style="color: #ffd43b;"></i>
      Document Object Model
    </h1>

    <div class="box highlight-box mb-6">
      <h3 class="title is-4">
        <i class="fas fa-graduation-cap"></i> Learning Path
      </h3>
      <p>Master DOM manipulation through our structured learning path:</p>
      
      <!-- Foundation -->
      <div class="level-section">
        <h4 class="title is-5">Foundation: Getting Started</h4>
        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="card">
              <div class="card-content">
                <h5 class="title is-6">Introduction to DOM</h5>
                <p>Learn the basics of Document Object Model and its structure.</p>
                <router-link to="/tutorials/dom-basics/introduction" class="button is-primary is-small">
                  Start Learning
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Level 1 -->
      <div class="level-section">
        <h4 class="title is-5">Level 1: Basic Manipulation</h4>
        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="card">
              <div class="card-content">
                <h5 class="title is-6">Arrays and Methods</h5>
                <p>Master JavaScript arrays and their methods for data management.</p>
                <router-link to="/tutorials/dom-basics/arrays" class="button is-primary is-small">
                  Start Learning
                </router-link>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div class="card">
              <div class="card-content">
                <h5 class="title is-6">DOM Manipulation</h5>
                <p>Learn to select and modify HTML elements dynamically.</p>
                <span class="tag is-warning">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Level 2 -->
      <div class="level-section">
        <h4 class="title is-5">Level 2: Event Handling</h4>
        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="card">
              <div class="card-content">
                <h5 class="title is-6">Event Basics</h5>
                <p>Handle user interactions and browser events.</p>
                <span class="tag is-warning">Coming Soon</span>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div class="card">
              <div class="card-content">
                <h5 class="title is-6">Event Propagation</h5>
                <p>Master event bubbling and capturing.</p>
                <span class="tag is-warning">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Level 3 -->
      <div class="level-section">
        <h4 class="title is-5">Level 3: Advanced DOM</h4>
        <div class="columns is-multiline">
          <div class="column is-6">
            <div class="card">
              <div class="card-content">
                <h5 class="title is-6">DOM Traversal</h5>
                <p>Navigate and manipulate complex DOM structures.</p>
                <span class="tag is-warning">Coming Soon</span>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div class="card">
              <div class="card-content">
                <h5 class="title is-6">Dynamic Content</h5>
                <p>Create and manage dynamic content efficiently.</p>
                <span class="tag is-warning">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box is-info mb-6" style="background-color: #f1f8ff;">
      <h3 class="title is-4">
        <i class="fas fa-lightbulb"></i> Prerequisites
      </h3>
      <p>Before starting this tutorial series, you should have:</p>
      <ul>
        <li><i class="fas fa-check"></i> Basic understanding of HTML and CSS</li>
        <li><i class="fas fa-check"></i> Familiarity with JavaScript fundamentals</li>
        <li><i class="fas fa-check"></i> A modern web browser with developer tools</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DOMBasicsOverview'
}
</script>

<style scoped>
.page-icon {
  font-size: 2rem;
}

.level-section {
  margin-bottom: 2rem;
}

.level-section:last-child {
  margin-bottom: 0;
}

.card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-content p {
  flex-grow: 1;
  margin-bottom: 1rem;
}

.button {
  align-self: flex-start;
}

.tag.is-warning {
  background-color: #ffe08a;
  color: #946c00;
}
</style>
