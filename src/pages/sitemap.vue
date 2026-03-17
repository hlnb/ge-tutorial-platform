<template>
  <div class="sitemap-page">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/">
            <i class="fa-solid fa-house mr-2"></i> Home
          </router-link>
        </li>
        <li class="is-active">
          <a href="#" aria-current="page">Site Map</a>
        </li>
      </ul>
    </nav>

    <header class="sitemap-hero box">
      <div class="hero-copy">
        <p class="eyebrow">Global Navigation</p>
        <h1>Site Map</h1>
        <p>
          Explore every major corner of the Graphite Edge tutorial platform. Use this structured index to
          jump directly to tutorials, projects, resources, and support pages.
        </p>
      </div>
      <div class="hero-stats">
        <div v-for="stat in heroStats" :key="stat.label" class="stat-card">
          <p class="stat-value">{{ stat.value }}</p>
          <p class="stat-label">{{ stat.label }}</p>
        </div>
      </div>
    </header>

    <section class="sitemap-grid" aria-label="Primary navigation groups">
      <article v-for="section in quickSections" :key="section.title" class="sitemap-card">
        <div class="card-header">
          <span class="icon-circle">
            <i :class="section.icon"></i>
          </span>
          <div>
            <h2>{{ section.title }}</h2>
            <p>{{ section.description }}</p>
          </div>
        </div>
        <ul class="link-list">
          <li v-for="link in section.links" :key="link.label">
            <router-link :to="link.to">
              <span>{{ link.label }}</span>
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </li>
        </ul>
      </article>
    </section>

    <section class="tracks" aria-label="Tutorial tracks">
      <div class="track-header">
        <h2><i class="fas fa-graduation-cap"></i> Tutorial Tracks</h2>
        <p>Every learning path grouped by difficulty and focus area.</p>
      </div>
      <div class="track-grid">
        <article v-for="track in tutorialTracks" :key="track.title" class="track-card">
          <div class="track-title">
            <router-link :to="track.base" class="track-link">
              <span>{{ track.title }}</span>
              <i class="fas fa-arrow-up-right-from-square"></i>
            </router-link>
            <p>{{ track.description }}</p>
          </div>
          <ul>
            <li v-for="item in track.items" :key="item.label">
              <router-link :to="item.to">{{ item.label }}</router-link>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section class="resources" aria-label="Resources and support">
      <article class="sitemap-card">
        <div class="card-header">
          <span class="icon-circle secondary">
            <i class="fas fa-chalkboard-user"></i>
          </span>
          <div>
            <h2>Practice & Projects</h2>
            <p>Hands-on challenges to reinforce each track.</p>
          </div>
        </div>
        <ul class="link-list">
          <li v-for="link in practiceLinks" :key="link.label">
            <router-link :to="link.to">
              <span>{{ link.label }}</span>
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </li>
        </ul>
      </article>

      <article class="sitemap-card">
        <div class="card-header">
          <span class="icon-circle tertiary">
            <i class="fas fa-life-ring"></i>
          </span>
          <div>
            <h2>Community & Support</h2>
            <p>Connect with the team, share wins, and review policies.</p>
          </div>
        </div>
        <ul class="link-list">
          <li v-for="link in supportLinks" :key="link.label">
            <router-link :to="link.to">
              <span>{{ link.label }}</span>
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </li>
        </ul>
      </article>
    </section>
  </div>
</template>

<script setup>
const heroStats = [
  { label: 'Tutorial lessons', value: '60+' },
  { label: 'Practice projects', value: '20+' },
  { label: 'Active tracks', value: '10' },
];

const quickSections = [
  {
    title: 'Core Navigation',
    description: 'Jump to the most visited pages in a single click.',
    icon: 'fas fa-compass',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Tutorials Overview', to: '/tutorials' },
      { label: 'Projects Library', to: '/projects' },
      { label: 'Practice Hub', to: '/tutorials/practice' },
      { label: 'Student Progress', to: '/my-progress' },
    ],
  },
  {
    title: 'Getting Started',
    description: 'Orientation resources for brand-new learners.',
    icon: 'fas fa-rocket',
    links: [
      { label: 'Platform Overview', to: '/tutorials/getting-started' },
      { label: 'How the Internet Works', to: '/tutorials/getting-started/how-internet-works' },
      { label: 'Web Basics', to: '/tutorials/getting-started/web-basics' },
      { label: 'Developer Tools', to: '/tutorials/getting-started/dev-environment' },
      { label: 'Browser Tools', to: '/tutorials/getting-started/browser-tools' },
    ],
  },
  {
    title: 'Featured Reading',
    description: 'Popular long-form guides and case studies.',
    icon: 'fas fa-newspaper',
    links: [
      { label: 'Modern JavaScript Patterns', to: '/posts/modern-js-patterns' },
      { label: 'API Best Practices', to: '/posts/api-best-practices-beginner' },
      { label: 'Web Performance Optimization', to: '/posts/web-performance-optimization' },
      { label: 'Docker for Web Developers', to: '/posts/docker-basics-guide-for-web-developers' },
      { label: 'Web Security Essentials', to: '/posts/web-security-essentials' },
    ],
  },
];

const tutorialTracks = [
  {
    title: 'Beginner · HTML Basics',
    base: '/tutorials/beginner/html-basics',
    description: 'Structure, semantic tags, links, images, and forms.',
    items: [
      { label: 'Introduction', to: '/tutorials/beginner/html-basics/introduction' },
      { label: 'Document Structure', to: '/tutorials/beginner/html-basics/html-doc-structure' },
      { label: 'Links & Navigation', to: '/tutorials/beginner/html-basics/html-links' },
      { label: 'Images & Media', to: '/tutorials/beginner/html-basics/html-images' },
    ],
  },
  {
    title: 'Beginner · CSS Basics',
    base: '/tutorials/beginner/css-basics',
    description: 'Color, typography, layout, and responsive design.',
    items: [
      { label: 'Introduction', to: '/tutorials/beginner/css-basics/introduction' },
      { label: 'Colors & Typography', to: '/tutorials/beginner/css-basics/colors' },
      { label: 'Box Model', to: '/tutorials/beginner/css-basics/box-model' },
      { label: 'Flexbox', to: '/tutorials/beginner/css-basics/flexbox' },
    ],
  },
  {
    title: 'Beginner · JavaScript Basics',
    base: '/tutorials/beginner/javascript-basics',
    description: 'Variables, functions, logic, and loops.',
    items: [
      { label: 'Introduction', to: '/tutorials/beginner/javascript-basics/introduction' },
      { label: 'Variables & Data Types', to: '/tutorials/beginner/javascript-basics/variables-data-types' },
      { label: 'Functions', to: '/tutorials/beginner/javascript-basics/functions' },
      { label: 'Loops', to: '/tutorials/beginner/javascript-basics/loops' },
    ],
  },
  {
    title: 'Beginner · DOM Basics',
    base: '/tutorials/beginner/dom-basics',
    description: 'Hunter-mode lessons covering arrays, manipulation, and events.',
    items: [
      { label: 'Overview', to: '/tutorials/beginner/dom-basics' },
      { label: 'Introduction to DOM', to: '/tutorials/beginner/dom-basics/introduction' },
      { label: 'Arrays & Methods', to: '/tutorials/beginner/dom-basics/arrays' },
      { label: 'DOM Manipulation', to: '/tutorials/beginner/dom-basics/dom-manipulation' },
      { label: 'Event Handling', to: '/tutorials/beginner/dom-basics/dom-events' },
    ],
  },
  {
    title: 'Intermediate · Git Basics',
    base: '/tutorials/intermediate/git-basics',
    description: 'Branching, merging, workflows, and collaboration.',
    items: [
      { label: 'Installation', to: '/tutorials/intermediate/git-basics/installation' },
      { label: 'Branching', to: '/tutorials/intermediate/git-basics/branching' },
      { label: 'Merging', to: '/tutorials/intermediate/git-basics/merging' },
      { label: 'Workflow', to: '/tutorials/intermediate/git-basics/workflow' },
    ],
  },
  {
    title: 'Backend & Deployments',
    base: '/tutorials/backend',
    description: 'Server fundamentals, databases, and deployment strategies.',
    items: [
      { label: 'Backend Overview', to: '/tutorials/backend' },
      { label: 'Node Basics', to: '/tutorials/backend/node-basics' },
      { label: 'Databases', to: '/tutorials/backend/databases' },
      { label: 'Deployments', to: '/tutorials/deployments' },
      { label: 'Vercel & Netlify', to: '/tutorials/deployments/vercel-netlify' },
    ],
  },
  {
    title: 'Advanced & Capstone',
    base: '/tutorials/capstone',
    description: 'Portfolio projects, SEO, AI, and launch prep.',
    items: [
      { label: 'Capstone Overview', to: '/tutorials/capstone' },
      { label: 'Capstone Spec', to: '/tutorials/capstone/spec' },
      { label: 'AI-Assisted Track', to: '/tutorials/ai-assisted' },
      { label: 'SEO & Analytics', to: '/tutorials/seo-analytics' },
    ],
  },
];

const practiceLinks = [
  { label: 'Practice Overview', to: '/tutorials/practice' },
  { label: 'Project Library', to: '/projects' },
  { label: 'Calculator Project', to: '/projects/calculator' },
  { label: 'Todo List Series', to: '/projects/todo-list' },
  { label: 'Photo Gallery Series', to: '/projects/photo-gallery' },
];

const supportLinks = [
  { label: 'Community Hub', to: '/community' },
  { label: 'About the Platform', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
];
</script>

<style scoped>
.sitemap-page {
  padding: 2rem 0;
}

.breadcrumb {
  margin-bottom: 1.5rem;
}

.sitemap-hero {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;
  border-left: 4px solid #f7df1e;
}

.hero-copy h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.hero-copy .eyebrow {
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  color: #8c8c8c;
  margin-bottom: 0.4rem;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  flex: 1;
}

.stat-card {
  background: #f9fafb;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111;
}

.stat-label {
  font-size: 0.9rem;
  color: #555;
}

.sitemap-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.sitemap-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
}

.card-header {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #fef3c7;
  display: grid;
  place-items: center;
  color: #b45309;
}

.icon-circle.secondary {
  background: #e0f2fe;
  color: #0369a1;
}

.icon-circle.tertiary {
  background: #ede9fe;
  color: #5b21b6;
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.link-list a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0.75rem;
  border-radius: 6px;
  color: #1f2937;
  background: #f9fafb;
  transition: background 0.2s ease, color 0.2s ease;
}

.link-list a:hover {
  background: #f7df1e;
  color: #111;
}

.tracks {
  margin: 3rem 0;
}

.track-header {
  margin-bottom: 1.5rem;
}

.track-header h2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
}

.track-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.track-card {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1.25rem;
  background: #fdfdfd;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.track-title {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.track-link {
  font-weight: 600;
  display: inline-flex;
  gap: 0.35rem;
  align-items: center;
}

.track-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.track-card ul a {
  color: #1e3a8a;
}

.resources {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .sitemap-hero {
    flex-direction: column;
  }

  .hero-stats {
    width: 100%;
  }
}
</style>
