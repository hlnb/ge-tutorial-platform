

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
      <span class="js-lesson-icon" aria-hidden="true">DOM</span>
      Document Object Model
    </h1>

    <!-- Introduction to the DOM -->
    <div class="notification is-info is-light mb-6">
      <p>
        <i class="fas fa-info-circle mr-2"></i>
        <strong>What is the DOM?</strong> The Document Object Model is a programming interface that lets JavaScript interact with HTML and CSS on a webpage. When a browser loads a page, it creates a tree-like structure of every element — that tree is the DOM.
      </p>
    </div>

    <div class="columns mb-6">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <h4 class="title is-5"><i class="fas fa-sitemap mr-2"></i>The DOM Tree</h4>
            <p>Every HTML document becomes a tree of nodes. The <code>&lt;html&gt;</code> element is the root, and every tag, attribute, and piece of text is a node within it. JavaScript can read, add, change, or remove any node in this tree.</p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <h4 class="title is-5"><i class="fas fa-plug mr-2"></i>JavaScript + the DOM</h4>
            <p>JavaScript uses DOM methods like <code>querySelector</code>, <code>createElement</code>, and <code>addEventListener</code> to select elements, build new content, and respond to user actions — turning static HTML into dynamic, interactive applications.</p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="card">
          <div class="card-content">
            <h4 class="title is-5"><i class="fas fa-bolt mr-2"></i>Why It Matters</h4>
            <p>Every interactive feature you see on the web — dropdown menus, form validation, live search, infinite scroll — works because JavaScript manipulates the DOM in real time. Mastering the DOM is the gateway to building real web applications.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Prerequisites (moved before learning path) -->
    <div class="box is-info mb-6" style="background-color: #f1f8ff;">
      <h3 class="title is-4">
        <i class="fas fa-lightbulb"></i> Prerequisites
      </h3>
      <p>Before starting this tutorial series, you should have:</p>
      <ul>
        <li><i class="fas fa-check mr-2"></i><strong>HTML & CSS basics</strong> — understanding of elements, attributes, and styling (<router-link to="/tutorials/beginner/html-basics">HTML tutorials</router-link> | <router-link to="/tutorials/beginner/css-basics">CSS tutorials</router-link>)</li>
        <li><i class="fas fa-check mr-2"></i><strong>JavaScript fundamentals</strong> — variables, functions, loops, and conditionals (<router-link to="/tutorials/beginner/javascript-basics">JS tutorials</router-link>)</li>
        <li><i class="fas fa-check mr-2"></i><strong>A modern web browser</strong> with developer tools (Chrome, Firefox, or Edge)</li>
      </ul>
    </div>

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
                <router-link to="/tutorials/beginner/dom-basics/introduction" class="button is-primary is-small">
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
                <router-link to="/tutorials/beginner/dom-basics/arrays" class="button is-primary is-small">
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
                <router-link to="/tutorials/beginner/dom-basics/dom-manipulation" class="button is-primary is-small">
                  Start Learning
                </router-link>
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
                <h5 class="title is-6">Event Handling</h5>
                <p>Master event handling, form validation, and event delegation.</p>
                <router-link to="/tutorials/beginner/dom-basics/dom-events" class="button is-primary is-small">
                  Start Learning
                </router-link>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div class="card">
              <div class="card-content">
                <h5 class="title is-6">Advanced Events</h5>
                <p>Learn custom events, throttle, debounce, and focus trapping.</p>
                <router-link to="/tutorials/beginner/dom-basics/advanced-events" class="button is-primary is-small">
                  Start Learning
                </router-link>
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
                <router-link to="/tutorials/beginner/dom-basics/dom-traversal" class="button is-primary is-small">
                  Start Learning
                </router-link>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div class="card">
              <div class="card-content">
                <h5 class="title is-6">Dynamic Content</h5>
                <p>Create, insert, clone, and manage DOM elements dynamically.</p>
                <router-link to="/tutorials/beginner/dom-basics/dynamic-content" class="button is-primary is-small">
                  Start Learning
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="notification is-success is-light">
      <p>
        <i class="fas fa-check-circle mr-2"></i>
        <strong>Ready to start?</strong> Begin with the
        <router-link to="/tutorials/beginner/dom-basics/introduction">Introduction to DOM</router-link>
        to learn how the browser turns HTML into a live, programmable structure.
      </p>
    </div>
  </div>
</template>

<script setup>
</script>
<script>
export default {
  name: 'DOMBasicsOverview'
}
</script>

<style scoped>
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
