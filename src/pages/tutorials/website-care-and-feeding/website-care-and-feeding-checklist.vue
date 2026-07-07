<script setup>
import WebsiteCareLesson from "@/components/tutorials/WebsiteCareLesson.vue";
import { getWebsiteCareLesson } from "@/data/tutorials/websiteCareAndFeeding";

const lesson = getWebsiteCareLesson("website-care-and-feeding-checklist");
</script>

<template>
  <WebsiteCareLesson :lesson="lesson" />
</template>
