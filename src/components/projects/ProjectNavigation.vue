<template>
  <div class="project-navigation">
    <div class="project-navigation__buttons">
      <router-link v-if="prev" :to="prev.path" class="button is-light">
        <span class="icon">
          <i class="fas fa-arrow-left"></i>
        </span>
        <span>{{ prev.title }}</span>
      </router-link>

      <div class="spacer"></div>

      <router-link to="/projects" class="button is-info is-light">
        All Projects
      </router-link>

      <div class="spacer"></div>

      <router-link v-if="next" :to="next.path" class="button is-primary">
        <span>{{ next.title }}</span>
        <span class="icon">
          <i class="fas fa-arrow-right"></i>
        </span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  prev: {
    type: Object,
    default: null,
  },
  next: {
    type: Object,
    default: null,
  },
});
</script>

<style scoped>
.project-navigation {
  margin-top: 3rem;
  margin-bottom: 2rem;
}

.project-navigation__buttons {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #ececec;
}

.spacer {
  flex: 1;
}

@media (max-width: 768px) {
  .project-navigation__buttons {
    flex-direction: column;
  }

  .project-navigation__buttons .button {
    width: 100%;
  }
}
</style>
