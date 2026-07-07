<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useTutorialHead } from "@/composables/useTutorialHead";

const router = useRouter();

useTutorialHead({
  title: "Website Care and Feeding",
  description:
    "Redirects to the Website Care and Feeding tutorial section for post-launch website maintenance.",
  path: "/tutorials/advanced/website-care-and-feeding",
  noindex: true,
});

onMounted(() => {
  router.replace("/tutorials/website-care-and-feeding");
});
</script>

<template>
  <div class="content">
    <p>Redirecting to Website Care and Feeding...</p>
  </div>
</template>
