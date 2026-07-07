<template>
  <SectionLandingPage section-id="design-to-code" />
</template>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';
import SectionLandingPage from '@/components/tutorials/SectionLandingPage.vue';

useTutorialHead({
  title: "Design to Code",
  description: "Overview of the design-to-code tutorial series — learn how to translate visual mockups into real, working websites.",
  path: "/tutorials/intermediate/design-to-code",
});
</script>
