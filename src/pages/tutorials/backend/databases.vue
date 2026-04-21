<template>
  <div class="content">
    <h1 class="title is-1">Databases: Firebase & Supabase</h1>
    <p>Overview of hosted DBs and choosing between Firebase and Supabase.</p>
  </div>

</template>

<script>
export const frontmatter = { title: 'Databases (Firebase/Supabase)', date: '2025-10-12' };
</script>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';

useTutorialHead({
  title: "Databases: Firebase & Supabase",
  description: "Compare Firebase and Supabase for your web project — hosted database options explained for beginner developers.",
  path: "/tutorials/backend/databases",
});
</script>
