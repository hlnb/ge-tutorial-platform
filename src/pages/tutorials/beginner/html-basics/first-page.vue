<template>
  <MainLayout>
    <div class="container section">
      <div class="content">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><router-link to="/tutorials">Tutorials</router-link></li>
            <li><router-link to="/tutorials/beginner">Beginner</router-link></li>
            <li><router-link to="/tutorials/beginner/html-basics">HTML Basics</router-link></li>
            <li class="is-active"><a href="#" aria-current="page">Creating Your First Page</a></li>
          </ul>
        </nav>

        <div class="box box-info mb-6">
          <h3 class="title is-5 mb-2">🚧 Coming Soon</h3>
          <p>This tutorial is currently under development and will be available soon.</p>
        </div>

        <!-- Navigation -->
        <div class="tutorial-navigation">
          <router-link to="/tutorials/beginner/html-basics" class="button is-light">
            ← Back to HTML Basics
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
