<template>
  <div class="content">
    <h1 class="title is-1">Analytics Setup (GA4, Plausible, PostHog)</h1>
    <p>Integrating analytics and respecting privacy.</p>
  </div>

</template>

<script>
export const frontmatter = { title: 'Analytics Setup', date: '2025-10-12' };
</script>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';

useTutorialHead({
  title: "Analytics Setup: GA4, Plausible & PostHog",
  description: "Set up web analytics with GA4, Plausible, or PostHog — track visitor behaviour while respecting user privacy.",
  path: "/tutorials/seo-analytics/analytics-setup",
});
</script>
