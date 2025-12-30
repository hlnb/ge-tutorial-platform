<template>
  <aside class="menu module-nav">
    <p class="menu-label">Backend</p>
    <ul class="menu-list">
      <li><router-link :to="'/tutorials/backend/node-basics'">Node.js Basics</router-link></li>
      <li><router-link :to="'/tutorials/backend/rest-apis'">REST APIs</router-link></li>
      <li><router-link :to="'/tutorials/backend/databases'">Databases</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'BackendNav',
};
</script>

<style scoped>
@import './nav.css';

.module-nav { width: 220px; }
/* Backend teal */
.tutorial-nav { --tutorial-accent: #4db6ac; }
</style>
