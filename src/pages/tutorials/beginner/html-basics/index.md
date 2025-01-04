<template>
  <MainLayout>
    <div class="container section">
      <div class="content">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><router-link to="/tutorials">Tutorials</router-link></li>
            <li><router-link to="/tutorials/beginner">Beginner</router-link></li>
            <li class="is-active"><a href="#" aria-current="page">HTML Basics</a></li>
          </ul>
        </nav>

        <h1 class="title is-1">HTML Basics</h1>

        <p class="subtitle is-4 mb-6">Learn the fundamentals of HTML structure and elements</p>

        <div class="box box-info mb-6">
          <h3 class="title is-5 mb-2">🚧 Coming Soon</h3>
          <p>This tutorial section will be released next week. Topics will include:</p>
          <ul>
            <li>HTML Document Structure</li>
            <li>Working with Text Elements</li>
            <li>Links and Images</li>
            <li>Lists and Tables</li>
            <li>Forms and Input Elements</li>
            <li>Semantic HTML</li>
            <li>HTML Best Practices</li>
            <li>Accessibility Basics</li>
          </ul>
        </div>

        <div class="notification is-warning is-light">
          <p><strong>Expected Release Date:</strong> [Insert Date]</p>
          <p>Subscribe to our newsletter or follow us on social media to be notified when this content is available.</p>
        </div>

        <!-- Navigation -->
        <div class="tutorial-navigation">
          <router-link to="/tutorials/getting-started/domain-hosting" class="button is-light">
            ← Domain & Hosting
          </router-link>
        </div>
      </div>
    </div>

  </MainLayout>
</template>

<script setup>
import MainLayout from '../../../../components/MainLayout.vue'
import '@/assets/styles/tutorials.css'
</script>
