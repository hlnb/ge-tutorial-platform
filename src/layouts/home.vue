<template>
  <div class="home-layout">
    <slot name="hero" />

    <section class="home-section">
      <div class="container">
        <slot name="about" />
        <slot name="mission" />
      </div>
    </section>

    <slot name="projects" />
    <slot name="techstack" />

    <section class="features-section">
      <div class="container">
        <div class="features-header">
          <h2>{{ frontmatter.systemsSection.title }}</h2>
          <p>{{ frontmatter.systemsSection.description }}</p>
        </div>

        <div class="features-grid">
          <article
            v-for="feature in frontmatter.systemsSection.items || []"
            :key="feature.heading"
            class="feature-card"
          >
            <h3>{{ feature.heading }}</h3>
            <p>{{ feature.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section
      v-if="frontmatter.learningPaths && frontmatter.learningPaths.length"
      class="home-section"
    >
      <div class="container">
        <div class="learning-paths-header">
          <h2>{{ frontmatter.learningPathsSection.title }}</h2>
          <p>{{ frontmatter.learningPathsSection.description }}</p>
        </div>
        <div class="learning-paths-grid">
          <article
            v-for="pathway in frontmatter.learningPaths"
            :key="pathway.link"
            class="learning-path-card"
          >
            <h3>
              <router-link :to="pathway.link">{{ pathway.title }}</router-link>
            </h3>
            <p>{{ pathway.description }}</p>
            <router-link :to="pathway.link" class="read-more">
              {{ pathway.cta }}
            </router-link>
          </article>
        </div>
      </div>
    </section>

    <slot name="faqs" />
    <slot />
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

<style scoped>
.home-layout {
  background: var(--bg-page);
}

.home-section {
  padding: clamp(2rem, 5vw, 3.5rem) 0;
  background: var(--color-white);
}

.features-section {
  padding: clamp(2rem, 5vw, 3.5rem) 0;
  background: var(--color-dark);
}

.features-header,
.learning-paths-header {
  margin-bottom: 1.75rem;
}

.features-header h2,
.learning-paths-header h2 {
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: var(--weight-bold);
}

.features-header h2 {
  color: var(--color-white);
}

.features-header p,
.learning-paths-header p {
  max-width: 44rem;
  margin-top: 0.75rem;
  font-size: 0.95rem;
  line-height: 1.6;
}

.features-header p {
  color: rgba(255, 255, 255, 0.75);
}

.learning-paths-header p {
  color: var(--fg-muted);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
}

.feature-card,
.learning-path-card {
  border-radius: 0.5rem;
  background: var(--color-white);
}

.feature-card {
  padding: 1.25rem;
  box-shadow: var(--shadow-sm);
}

.feature-card h3,
.learning-path-card h3 {
  font-family: var(--font-heading);
  font-size: 0.9375rem;
  font-weight: var(--weight-bold);
  color: var(--fg-default);
}

.feature-card p {
  margin: 0.75rem 0 0;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--fg-muted);
}

.learning-paths-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.learning-path-card {
  padding: 1.25rem;
  border: 1px solid #dde3e9;
}

.learning-path-card p {
  margin-top: 0.75rem;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--fg-subtle);
}

.read-more {
  display: inline-flex;
  margin-top: 1rem;
  font-family: var(--font-heading);
  font-size: 0.8125rem;
  font-weight: var(--weight-bold);
  color: var(--color-primary);
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
