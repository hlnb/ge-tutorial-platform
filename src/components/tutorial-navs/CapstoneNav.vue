<template>
  <aside class="menu module-nav">
    <p class="menu-label">Capstone</p>
    <ul class="menu-list">
      <li><router-link :to="{ name: 'capstone-index' }">Project Overview</router-link></li>
      <li><router-link :to="{ name: 'capstone-spec' }">Spec</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'CapstoneNav',
};
</script>

<style scoped>
.module-nav { width: 220px; }
</style>
