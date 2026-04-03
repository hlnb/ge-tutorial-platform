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
        <p class="eyebrow">Comprehensive Site Map</p>
        <h1>Site Map</h1>
        <p>
          Explore the full GraphiteEdge site structure in one place. This map is designed for both people
          and search engines, with section overviews, lesson pages, projects, resources, and support links
          grouped by how the site is actually organised.
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
        <h2><i class="fas fa-graduation-cap"></i> Tutorial Sections</h2>
        <p>Every tutorial section and lesson in curriculum order.</p>
      </div>
      <div class="track-grid">
        <article v-for="track in tutorialTracks" :key="track.id" class="track-card">
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
import {
  getSectionNavItems,
  levels,
  pathways,
  sections,
  tutorials,
} from '@/data/tutorials';

const levelTitleById = Object.fromEntries(levels.map((level) => [level.id, level.title]));

function getOverviewLabel(section) {
  const sectionTitle = section.introCopy?.title || section.title;
  return section.id === 'getting-started' ? `${sectionTitle} Overview` : `${sectionTitle} Overview`;
}

const heroStats = [
  { label: 'Tutorial Pages', value: String(tutorials.length) },
  { label: 'Tutorial Sections', value: String(sections.length) },
  { label: 'Learning Pathways', value: String(pathways.length) },
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
    title: 'Start Here',
    description: 'Entry points for understanding the curriculum and beginning the first pathway.',
    icon: 'fas fa-rocket',
    links: [
      { label: 'Tutorials Overview', to: '/tutorials' },
      { label: 'Getting Started Overview', to: '/tutorials/getting-started' },
      { label: 'How the Web Actually Works', to: '/tutorials/getting-started/how-internet-works' },
      { label: 'Web Development Basics', to: '/tutorials/getting-started/web-basics' },
      { label: 'Files, Folders, and Project Structure', to: '/tutorials/getting-started/files-folders-project-structure' },
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

const tutorialTracks = sections
  .slice()
  .sort((a, b) => (a.stage ?? Number.MAX_SAFE_INTEGER) - (b.stage ?? Number.MAX_SAFE_INTEGER))
  .map((section) => ({
    id: section.id,
    title: `${levelTitleById[section.level] || 'Curriculum'} · ${section.introCopy?.title || section.title}`,
    base: `/tutorials/${section.slug}`,
    description: section.introCopy?.description || section.introCopy?.summary || '',
    items: getSectionNavItems(section.id, {
      includeOverview: true,
      overviewTitle: getOverviewLabel(section),
    }).map((item) => ({
      label: item.title,
      to: item.path,
    })),
  }));

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
