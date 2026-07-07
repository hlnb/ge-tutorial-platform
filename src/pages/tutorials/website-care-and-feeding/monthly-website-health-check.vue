<script setup>
import WebsiteCareLesson from "@/components/tutorials/WebsiteCareLesson.vue";
import { getWebsiteCareLesson } from "@/data/tutorials/websiteCareAndFeeding";

const lesson = getWebsiteCareLesson("monthly-website-health-check");
</script>

<template>
  <WebsiteCareLesson :lesson="lesson" />
</template>
