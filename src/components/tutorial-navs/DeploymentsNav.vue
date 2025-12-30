<template>
  <aside class="menu module-nav">
    <p class="menu-label">Deployments</p>
    <ul class="menu-list">
      <li><router-link :to="'/tutorials/deployments/vercel-netlify'">Vercel & Netlify</router-link></li>
      <li><router-link :to="'/tutorials/deployments/firebase-hosting'">Firebase Hosting</router-link></li>
      <li><router-link :to="'/tutorials/deployments/static-vs-dynamic'">Static vs Dynamic</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'DeploymentsNav',
};
</script>

<style scoped>
@import './nav.css';

.module-nav { width: 220px; }
/* Deployments accent (green) */
.tutorial-nav { --tutorial-accent: #2ecc71; }
</style>
