<template>
  <div>
    <section class="hero">
      <h1>{{ frontmatter.hero.title }}</h1> <!-- Changed from name to title -->
      <p>{{ frontmatter.hero.description }}</p> <!-- Changed from text to description -->
      <!-- Conditionally render tagline if it exists, or remove if not used -->
      <p v-if="frontmatter.hero.tagline">{{ frontmatter.hero.tagline }}</p>
      <!-- Conditionally render actions if they exist -->
      <div v-if="frontmatter.hero.actions && frontmatter.hero.actions.length">
        <a v-for="action in frontmatter.hero.actions" :key="action.text" :href="action.link" :class="action.theme || 'primary'">
          {{ action.text }}
        </a>
      </div>
    </section>
    <section class="features">
      <div v-for="feature in frontmatter.features" :key="feature.title">
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
        <!-- If you had a simple 'details' string before, this part is no longer used with the new structure -->
        <!-- <p v-if="feature.details && !feature.items">{{ feature.details }}</p> -->
      </div>
    </section>
    <section class="latest-posts" v-if="frontmatter.latestPosts && frontmatter.latestPosts.length">
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
/* Hero Section Styles (example) */
.hero {
  text-align: center;
  padding: 4rem 1rem;
  background-color: #f4f4f4; /* Example background */
}
.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
.hero p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #555;
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
  justify-content: space-around;
  padding: 2rem 1rem;
}
.features > div {
  flex-basis: 30%;
  text-align: center;
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
