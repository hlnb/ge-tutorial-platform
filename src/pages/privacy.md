<template>
  <MainLayout>
    <div class="container section">
      <h1 class="title is-2">Privacy Policy</h1>
      <div class="content">
        <!-- Add your privacy policy content here -->
        <p>Last updated: {{ currentDate }}</p>
        <!-- ... rest of privacy policy ... -->
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../components/MainLayout.vue'

const currentDate = new Date().toLocaleDateString('en-AU')
</script>
