<template>
  <aside class="menu module-nav">
    <p class="menu-label">Capstone</p>
    <ul class="menu-list">
      <li><router-link :to="'/tutorials/capstone/'">Project Overview</router-link></li>
      <li><router-link :to="'/tutorials/capstone/spec'">Spec</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'CapstoneNav',
};
</script>

<style scoped>
@import './nav.css';

.module-nav { width: 220px; }
/* Capstone accent (dark slate) */
.tutorial-nav { --tutorial-accent: #2b2d42; }
</style>
