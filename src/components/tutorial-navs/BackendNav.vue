<template>
  <aside class="menu module-nav">
    <p class="menu-label">Backend</p>
    <ul class="menu-list">
      <li><router-link :to="{ name: 'backend-node-basics' }">Node.js Basics</router-link></li>
      <li><router-link :to="{ name: 'backend-rest-apis' }">REST APIs</router-link></li>
      <li><router-link :to="{ name: 'backend-databases' }">Databases</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'BackendNav',
};
</script>

<style scoped>
.module-nav { width: 220px; }
</style>
