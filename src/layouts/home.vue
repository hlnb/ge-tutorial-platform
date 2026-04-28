<template>
  <div class="home-layout">
    <slot name="hero" />

    <section class="home-section">
      <div class="container">
        <slot name="about" />
        <slot name="mission" />
      </div>
    </section>

    <slot name="learning" />
    <slot name="techstack" />

    <section class="features-section">
      <div class="container">
        <div class="features-header">
          <h2>What You'll Learn with GraphiteEdge</h2>
          <p>
            Our tutorials go beyond writing code. We help learners understand
            the full web-development process from structure to shipping.
          </p>
        </div>

        <div class="features-grid">
          <article
            v-for="feature in frontmatter.features || []"
            :key="feature.title"
            class="feature-card"
          >
            <h3>{{ feature.title }}</h3>
            <ul v-if="feature.items && feature.items.length">
              <li v-for="item in feature.items" :key="item.heading">
                {{ item.heading }}
                <span v-if="item.description">: {{ item.description }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section
      v-if="frontmatter.latestPosts && frontmatter.latestPosts.length"
      class="home-section"
    >
      <div class="container">
        <div class="latest-posts-header">
          <h2>Latest from The Graphite Journal</h2>
        </div>
        <div class="posts-grid">
          <article
            v-for="post in frontmatter.latestPosts"
            :key="post.link"
            class="post-card"
          >
            <h3>
              <router-link :to="post.link">{{ post.title }}</router-link>
            </h3>
            <p v-if="post.snippet">{{ post.snippet }}</p>
            <router-link :to="post.link" class="read-more">
              Read More &rarr;
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
.latest-posts-header {
  margin-bottom: 1.75rem;
}

.features-header h2,
.latest-posts-header h2 {
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: var(--weight-bold);
}

.features-header h2 {
  color: var(--color-white);
}

.features-header p {
  max-width: 44rem;
  margin-top: 0.75rem;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.95rem;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
}

.feature-card,
.post-card {
  border-radius: 0.5rem;
  background: var(--color-white);
}

.feature-card {
  padding: 1.25rem;
  box-shadow: var(--shadow-sm);
}

.feature-card h3,
.post-card h3 {
  font-family: var(--font-heading);
  font-size: 0.9375rem;
  font-weight: var(--weight-bold);
  color: var(--fg-default);
}

.feature-card ul {
  list-style: none;
  padding: 0;
  margin: 0.75rem 0 0;
}

.feature-card li {
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--fg-muted);
}

.feature-card li + li {
  margin-top: 0.5rem;
}

.feature-card li::before {
  content: "→ ";
  color: var(--color-primary);
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.post-card {
  padding: 1.25rem;
  border: 1px solid #dde3e9;
}

.post-card p {
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
</style>
