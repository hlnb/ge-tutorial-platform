<template>
  <div class="container section">
    <div class="tutorial-content">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link to="/">
              <i class="fa-solid fa-house mr-2"></i> Home
            </router-link>
          </li>
          <li>
            <router-link to="/tutorials">Tutorials</router-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">CSS Grid for Repeated Layouts</a>
          </li>
        </ul>
      </nav>

      <div class="tutorial-meta">
        <div class="tags">
          <span class="tag is-info">Intermediate</span>
          <span class="tag is-light">35 min</span>
          <span class="tag is-light">CSS</span>
          <span class="tag is-light">Grid</span>
        </div>
      </div>

      <h1 class="title is-1">CSS Grid for Repeated Layouts</h1>

      <p class="subtitle is-5">
        Learn when Grid is the better choice for galleries, card collections, and page regions that need rows and columns together.
      </p>

      <div class="notification is-info is-light">
        <p>
          <i class="fas fa-hard-hat mr-2"></i><strong>Under Construction</strong>
        </p>
        <p>This tutorial is currently being developed. Check back soon for the full content.</p>
      </div>

      <router-link to="/tutorials/intermediate/design-to-code" class="button is-primary is-outlined mt-4">
        <span class="icon"><i class="fas fa-arrow-left"></i></span>
        <span>Back to Design to Code</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>
