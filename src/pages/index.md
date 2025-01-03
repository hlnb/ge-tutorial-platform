<template>
  <MainLayout>
    <div class="main-content">
     
      <!-- Hero Section -->
      <section class="hero is-large mb-6">
        <div class="hero-body has-text-centered">
          <h2 class="title has-text-white">{{ hero.title }}</h2>
          <p class="subtitle has-text-white">{{ hero.description }}</p>
        </div>
      </section>

      <!-- Mission Section -->
      <section class="section mb-6">
        <div class="container">
          <h2 class="title is-3">Our Mission</h2>
          <p class="subtitle is-5">At GraphitEdge, we're dedicated to helping aspiring developers master web technologies through hands-on learning.</p>
        </div>
      </section>

      <!-- Approach Section -->
      <section class="section mb-6">
        <div class="container">
          <h2 class="title is-3">Our Approach</h2>
          <p class="subtitle is-5">Learn by building "Rotto Rocks" - a real-world project showcasing Rottnest Island's beauty and the Black Swan Bistro - a typical Western Australian restaurant, using:</p>
          <div class="tech-stack">
            <span class="tech-badge tag is-medium">HTML</span>
            <span class="tech-badge tag is-medium">CSS</span>
            <span class="tech-badge tag is-medium">JavaScript</span>
            <span class="tech-badge tag is-medium">Vue.js</span>
            <span class="tech-badge tag is-medium">Bulma</span>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features">
        <h2>Features</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <MarkdownWrapper v-if="markdownContent" :content="markdownContent" />
    </div>

  </MainLayout>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import MainLayout from '../components/MainLayout.vue'
import MarkdownWrapper from '../components/MarkdownWrapper.vue'

const frontmatter = {
  title: 'GraphitEdge',
  description: 'Welcome to GraphitEdge - Web Development Tutorials and Practical Projects'
}

// SEO metadata
useHead({
  title: frontmatter.title,
  meta: [
    { name: 'description', content: frontmatter.description },
    { 
      name: 'keywords', 
      content: 'web development, tutorials, beginner to advanced, practical projects, Western Australia, Vue.js, HTML, CSS, JavaScript'
    },
    // Open Graph tags for social sharing
    { property: 'og:title', content: frontmatter.title },
    { property: 'og:description', content: frontmatter.description },
    { property: 'og:type', content: 'website' },
    // Twitter Card tags
    { name: 'twitter:title', content: frontmatter.title },
    { name: 'twitter:description', content: frontmatter.description },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

const hero = {
  title: 'Learn Web Development with Confidence',
  description: 'Build skills through practical, hands-on tutorials and real-world projects'
}

const features = [
  {
    title: 'Interactive Tutorials',
    description: 'Step-by-step guides with hands-on examples'
  },
  {
    title: 'Best Practices',
    description: 'Learn industry-standard approaches and patterns'
  },
  {
    title: 'Real-world Examples',
    description: 'Practical applications and use cases'
  },
  {
    title: 'Community Support',
    description: 'Join our growing community of developers'
  }
]

const markdownContent = ''  // Empty string
</script>

<style>
@import '../assets/styles/main.css';

.hero {
  background-image: url('../assets/images/home-hero-background.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.hero-body {
  background-color: var(--color-mine-shaft);
  opacity: 0.7;
}

/* Basic styling - you can replace these with Bulma classes later */
.features {
  padding: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.feature-card {
  padding: 1.5rem;
  border: 1px solid #eee;
  border-radius: 4px;
}

.main-content {
  padding: 2rem;
}

.tech-stack {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-badge {
  background-color: var(--color-primary);
  color: var(--color-red-berry);
  padding: 0.5rem 1rem;
  border-radius: 4px;
}
</style>
