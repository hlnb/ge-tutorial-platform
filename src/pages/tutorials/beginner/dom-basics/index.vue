
<script setup>
import '@/assets/styles/tutorials.css';
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import TutorialCard from '@/components/tutorials/TutorialCard.vue';
import { sections, tutorials } from '@/data/tutorials';

const sectionMeta = sections.find((section) => section.id === 'dom-basics');

const sectionTutorials = computed(() => {
  return tutorials
    .filter(
      (tutorial) =>
        tutorial.section === 'dom-basics' && tutorial.slug !== sectionMeta?.slug,
    )
    .sort((a, b) => a.stage - b.stage);
});

useHead({
  title: `${sectionMeta?.introCopy?.title || 'DOM Basics'} - GraphiteEdge Tutorials`,
  meta: [
    {
      name: 'description',
      content:
        sectionMeta?.introCopy?.summary ||
        'Learn how JavaScript works with page elements, events, and dynamic content.',
    },
  ],
});
</script>

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

    <h1 class="title is-1">
      <span class="js-lesson-icon" aria-hidden="true">DOM</span>
      {{ sectionMeta?.title || 'Document Object Model' }}
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
      <p>{{ sectionMeta?.introCopy?.description }}</p>

      <div class="tutorials-grid">
        <TutorialCard
          v-for="tutorial in sectionTutorials"
          :key="tutorial.id"
          :tutorial="tutorial"
        />
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
