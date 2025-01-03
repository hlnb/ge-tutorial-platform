<template>
  <div>
    <section class="hero">
      <h1>{{ frontmatter.hero.name }}</h1>
      <p>{{ frontmatter.hero.text }}</p>
      <p>{{ frontmatter.hero.tagline }}</p>
      <div>
        <a v-for="action in frontmatter.hero.actions" :key="action.text" :href="action.link" :class="action.theme">
          {{ action.text }}
        </a>
      </div>
    </section>
    <section class="features">
      <div v-for="feature in frontmatter.features" :key="feature.title">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    frontmatter: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
/* Add your styles here */
</style>
