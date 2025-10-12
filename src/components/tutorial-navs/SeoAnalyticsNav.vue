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
.module-nav { width: 220px; }
</style>
