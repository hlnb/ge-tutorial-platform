<script setup>
import '@/assets/styles/tutorials.css';
import { computed } from 'vue';
import { useHead } from '@vueuse/head';
import TutorialCard from '@/components/tutorials/TutorialCard.vue';
import { getTutorialByPath, getTutorialNavigationByPath } from '@/data/tutorials';

const lessonSlugs = [
  'technical-seo-basics',
  'crawlable-site-architecture',
  'robots-noindex-access-control',
  'sitemaps-robots-indexing',
  'canonical-urls-and-duplicates',
  'status-codes-redirects-and-removals',
  'javascript-seo-vite-vue',
  'structured-data-implementation',
  'google-search-console',
  'measuring-and-improving-a-website',
];

const currentPath = '/tutorials/seo-analytics/technical-seo';
const overviewTutorial = computed(() => getTutorialByPath(currentPath));
const firstLessonPath = '/tutorials/seo-analytics/technical-seo-basics';
const navigation = computed(() => getTutorialNavigationByPath(currentPath));
const lessons = computed(() =>
  lessonSlugs
    .map((slug) => getTutorialByPath(`/tutorials/seo-analytics/${slug}`))
    .filter(Boolean),
);

useHead({
  title: 'Technical SEO Pathway - GraphitEdge Tutorials',
  meta: [
    {
      name: 'description',
      content:
        'Work through the complete GraphitEdge Technical SEO pathway: crawlability, directives, sitemaps, canonicals, HTTP responses, JavaScript rendering, structured data, diagnostics, and audits.',
    },
  ],
});
</script>

<template>
  <div class="content section technical-seo-overview">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/">
            <i class="fa-solid fa-house mr-2"></i> Home
          </router-link>
        </li>
        <li><router-link to="/tutorials">Tutorials</router-link></li>
        <li><router-link to="/tutorials/seo-analytics">SEO & Analytics</router-link></li>
        <li class="is-active">
          <a href="#" aria-current="page">Technical SEO Pathway</a>
        </li>
      </ul>
    </nav>

    <div class="tags mb-4">
      <span class="tag is-info">Advanced</span>
      <span class="tag is-warning">Pathway</span>
      <span class="tag is-light">10 lessons</span>
      <span class="tag is-light">7.5-9 hours</span>
    </div>

    <h1 class="title is-1">Technical SEO Pathway</h1>
    <p class="subtitle is-4">
      Learn how search systems reach, read, index, and diagnose a website.
    </p>

    <div class="box technical-seo-overview__intro">
      <h2 class="title is-5">How to use this pathway</h2>
      <p>
        Start after SEO Fundamentals. Work through the lessons in order, because each
        one adds another part of the technical search system: discovery, crawling,
        directives, sitemaps, canonicals, HTTP responses, JavaScript rendering,
        structured data, diagnostics, and final audit practice.
      </p>
      <p>
        Keep Analytics Setup as the follow-on after the audit. Technical SEO evidence
        tells you whether search systems can reach and interpret important pages;
        analytics helps you understand what people do after they arrive.
      </p>

      <div class="buttons mt-4">
        <router-link :to="firstLessonPath" class="button is-primary">
          Start Lesson 1
          <i class="fas fa-arrow-right ml-2"></i>
        </router-link>
        <router-link
          v-if="navigation.prev"
          :to="navigation.prev.path"
          class="button is-light"
        >
          Review {{ navigation.prev.title }}
        </router-link>
      </div>
    </div>

    <section class="technical-seo-overview__lessons mt-6" aria-labelledby="technical-seo-lessons">
      <h2 id="technical-seo-lessons" class="title is-3">Lessons in this pathway</h2>
      <div class="technical-seo-overview__grid">
        <TutorialCard
          v-for="lesson in lessons"
          :key="lesson.id"
          :tutorial="lesson"
        />
      </div>
    </section>

    <section class="technical-seo-overview__outcome mt-6" aria-labelledby="technical-seo-outcome">
      <h2 id="technical-seo-outcome" class="title is-3">Pathway outcome</h2>
      <p>
        By the end, you will have a technical SEO audit and repair plan with
        reproducible evidence, prioritised fixes, and retests. The goal is not to
        promise rankings. The goal is to understand the system clearly enough to make
        sound technical decisions.
      </p>
      <router-link
        v-if="overviewTutorial"
        :to="`/tutorials/${overviewTutorial.slug}`"
        class="is-sr-only"
        aria-current="page"
      >
        {{ overviewTutorial.title }}
      </router-link>
    </section>
  </div>
</template>

<style scoped>
.technical-seo-overview {
  width: 100%;
}

.technical-seo-overview__intro {
  border-left: 4px solid #d6e8ef;
}

.technical-seo-overview__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.technical-seo-overview__outcome {
  max-width: 52rem;
}
</style>
