<template>

<div class="content">
    <slot name="hero" />

    <slot name="about" />
    <slot name="mission" />
    <slot name="learning" />
    <slot name="techstack" />
    <section class="features">
      <div>
        <h2 class="title is-3 has-text-white">What You'll Learn with GraphiteEdge</h2>
        <p class="has-text-white">At GraphiteEdge, our tutorials go beyond just writing code. We help beginners, self-taught developers, and designers understand the entire web development process by building real-world projects</p>
      </div>
      <div class="features-cards">
        <div v-for="feature in visibleFeatures" :key="feature.title" class="feature-card">
          <h2>
            <span v-if="feature.icon" class="icon-text">
              <span class="icon">{{ feature.icon }}</span>
              <span>{{ feature.title }}</span>
            </span>
            <span v-else>{{ feature.title }}</span>
          </h2>
          <ul v-if="feature.items && feature.items.length">
            <li v-for="item in feature.items" :key="item.heading">
              <strong>{{ item.heading }}:</strong> {{ item.description }}
            </li>
          </ul>
        </div>
      </div>
      <div class="features-carousel-controls">
        <button :disabled="!canGoPrev" class="carousel-arrow" @click="prevFeatures">&#8592;</button>
        <button :disabled="!canGoNext" class="carousel-arrow" @click="nextFeatures">&#8594;</button>
      </div>
    </section>

    <section v-if="frontmatter.latestPosts && frontmatter.latestPosts.length" class="latest-posts">
      <h2>Latest from The Graphite Journal</h2>
      <div class="posts-grid">
        <article v-for="post in frontmatter.latestPosts" :key="post.link" class="post-card">
          <h3>
            <router-link :to="post.link">{{ post.title }}</router-link>
          </h3>
          <p v-if="post.snippet">{{ post.snippet }}</p>
          <router-link :to="post.link" class="read-more">
            Read More &rarr;
          </router-link>
        </article>
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
  data() {
    return {
      featureStart: 0,
      featuresPerPage: 3,
    };
  },
  computed: {
    visibleFeatures() {
      if (!this.frontmatter.features) return [];
      return this.frontmatter.features.slice(this.featureStart, this.featureStart + this.featuresPerPage);
    },
    canGoPrev() {
      return this.featureStart > 0;
    },
    canGoNext() {
      return this.featureStart + this.featuresPerPage < (this.frontmatter.features ? this.frontmatter.features.length : 0);
    }
  },
  methods: {
    prevFeatures() {
      if (this.canGoPrev) {
        this.featureStart = Math.max(0, this.featureStart - this.featuresPerPage);
      }
    },
    nextFeatures() {
      if (this.canGoNext) {
        this.featureStart = Math.min((this.frontmatter.features ? this.frontmatter.features.length : 0) - this.featuresPerPage, this.featureStart + this.featuresPerPage);
      }
    }
  }
};
</script>

<style>
/* Hero Section Styles (example) */
.hero {
  text-align: center;
  padding: 4rem 1rem;
  background-color: #23272f; /* Match hero background, dark slate */
  color: #fff;
}
.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
.hero p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #ddd;
}
.hero div a {
  display: inline-block;
  margin: 0.5rem;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
}
.hero div a.primary { /* Assuming 'theme' can be 'primary' */
  background-color: #007bff;
  color: white;
}
.hero div a.secondary { /* Assuming 'theme' can be 'secondary' */
  background-color: #6c757d;
  color: white;
}

/* Features Section Styles (example) */
.features {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background-color: #23272f; /* Match hero background */
}
.features > div {
  flex-basis: 30%;
  text-align: center;
}

.features-cards {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 2rem 0;
}
.feature-card {
  background: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 2rem 1.5rem;
  min-width: 260px;
  max-width: 320px;
  flex: 1 1 0;
  text-align: left;
  transition: box-shadow 0.2s;
  /* Bulma card style */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.feature-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}
.features-carousel-controls {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-bottom: 0.5rem;
}
.carousel-arrow {
  background: #23272f;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 1px 4px rgba(0,0,0,0.10);
}
.carousel-arrow:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.feature-card h2 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #23272f;
}
.feature-card ul {
  margin: 0;
  padding-left: 1.2rem;
}
.feature-card li {
  margin-bottom: 0.5rem;
  color: #23272f;
}
/* Use Bulma card helpers */
.feature-card {
  box-shadow: var(--bulma-box-shadow, 0 2px 8px rgba(0,0,0,0.08));
}

/* Latest Posts Section Styles */
.latest-posts {
  padding: 2rem 1rem;
  text-align: center;
}
.latest-posts h2 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
}
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  text-align: left;
}
.post-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  background-color: #fff;
}
.post-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}
.post-card h3 a, .post-card .read-more {
  text-decoration: none;
  color: #333;
}
.post-card h3 a:hover, .post-card .read-more:hover {
  text-decoration: underline;
}
.post-card p {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}
.post-card .read-more {
  font-weight: bold;
  text-decoration: none;
  color: #007bff; /* Or your primary link color */
  display: inline-block; /* Ensures it behaves like a block for margin/padding if needed */
  margin-top: 0.5rem; /* Add some space if needed */
}
</style>
