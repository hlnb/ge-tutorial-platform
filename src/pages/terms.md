<template>
  <MainLayout>
    <div class="container section">
      <h1 class="title is-2">Terms of Use</h1>
      <div class="content">
        <!-- Add your terms of use content here -->
        <p>Last updated: {{ currentDate }}</p>
        <!-- ... rest of terms ... -->
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../components/MainLayout.vue'

const currentDate = new Date().toLocaleDateString('en-AU')
</script>
