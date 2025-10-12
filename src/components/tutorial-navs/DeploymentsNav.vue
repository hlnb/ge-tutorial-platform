<template>
  <aside class="menu module-nav">
    <p class="menu-label">Deployments</p>
    <ul class="menu-list">
      <li><router-link :to="{ name: 'deployments-vercel-netlify' }">Vercel & Netlify</router-link></li>
      <li><router-link :to="{ name: 'deployments-firebase-hosting' }">Firebase Hosting</router-link></li>
      <li><router-link :to="{ name: 'deployments-static-vs-dynamic' }">Static vs Dynamic</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'DeploymentsNav',
};
</script>

<style scoped>
.module-nav { width: 220px; }
</style>
