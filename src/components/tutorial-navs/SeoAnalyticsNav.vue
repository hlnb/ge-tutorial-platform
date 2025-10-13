<template>
  <aside class="menu module-nav">
    <p class="menu-label">SEO & Analytics</p>
    <ul class="menu-list">
      <li><router-link :to="{ name: 'seo-on-page' }">On-page SEO</router-link></li>
      <li><router-link :to="{ name: 'seo-analytics-setup' }">Analytics Setup</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'SeoAnalyticsNav',
};
</script>

<style scoped>
@import './nav.css';

.module-nav { width: 220px; }
/* SEO accent (teal-blue) */
.tutorial-nav { --tutorial-accent: #118ab2; }
</style>
