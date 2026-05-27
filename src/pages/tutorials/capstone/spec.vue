<template>
  <div class="content capstone-spec">
    <h1 class="title is-1">Capstone Spec</h1>
    <p class="subtitle is-4">
      Use Rotto Rocks as your capstone-style build: a realistic tourism website project with a
      client brief, wireframe options, project notes, accessibility expectations, and deployment
      planning.
    </p>

    <section id="overview" class="box">
      <div class="tags mb-3">
        <span class="tag is-link">Capstone Project</span>
        <span class="tag is-info">Beginner and Builder</span>
        <span class="tag is-warning">Multi-page</span>
      </div>

      <h2 class="title is-3">Rotto Rocks overview</h2>
      <p>
        Rotto Rocks is a fictional Rottnest Island tourism website for guided walking, cycling,
        wildlife, beach, and sunset experiences. The project brings together the skills practised
        across HTML, CSS, responsive layout, accessibility, SEO, and deployment readiness.
      </p>
      <p>
        Start with the project page, then use the brief and wireframes to choose your build
        direction. The HTML and CSS reference notes are available as supporting material and can be
        updated later to match Variation A of the wireframes.
      </p>

      <div class="buttons mt-4">
        <router-link class="button is-link" to="/projects/rotto-rocks">
          View Rotto Rocks Project
        </router-link>
        <router-link class="button is-light" to="/projects/rotto-rocks/brief">
          View Student Brief
        </router-link>
        <a
          class="button is-light"
          href="/projects/rotto-rocks/rotto-rocks-student-project-brief.pdf"
          download
        >
          Download Brief + Wireframes PDF
        </a>
        <a
          class="button is-light"
          href="/projects/rotto-rocks/wireframes/index.html"
          target="_blank"
          rel="noopener"
        >
          View Wireframe Options
        </a>
      </div>
    </section>

    <section id="project-links" class="box">
      <h2 class="title is-3">Project resources</h2>
      <p>
        These are the same Rotto Rocks resources linked from the project page, gathered here so the
        capstone spec and project section point learners to the same source material.
      </p>

      <div class="columns is-multiline mt-3">
        <div class="column is-half">
          <h3 class="title is-5">Brief and planning</h3>
          <ul>
            <li><router-link to="/projects/rotto-rocks">Project overview</router-link></li>
            <li><router-link to="/projects/rotto-rocks/brief">Student project brief</router-link></li>
            <li>
              <a href="/projects/rotto-rocks/rotto-rocks-student-project-brief.pdf" download>
                Downloadable brief and wireframes PDF
              </a>
            </li>
            <li>
              <a href="/projects/rotto-rocks/wireframes/index.html" target="_blank" rel="noopener">
                Wireframe options
              </a>
            </li>
          </ul>
        </div>

        <div class="column is-half">
          <h3 class="title is-5">Reference notes</h3>
          <ul>
            <li><router-link to="/projects/rotto-rocks/html-notes">HTML project notes</router-link></li>
            <li><router-link to="/projects/rotto-rocks/css-notes">CSS project notes</router-link></li>
            <li>
              <a href="/projects/html-basics/rotto-rocks/index.html" target="_blank" rel="noopener">
                HTML reference version
              </a>
            </li>
            <li>
              <a href="/projects/css-basics/rotto-rocks/index.html" target="_blank" rel="noopener">
                CSS reference version
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="capstone-scope" class="box">
      <h2 class="title is-3">What the capstone should demonstrate</h2>
      <p>
        Treat this as more than a page-building exercise. A finished Rotto Rocks submission should
        show that you can make decisions from a brief, structure a multi-page site, style reusable
        sections, test for accessibility, and prepare the site for publishing.
      </p>
      <ul>
        <li>Clear multi-page information architecture and navigation</li>
        <li>Semantic HTML for headings, landmarks, images, cards, forms, and content sections</li>
        <li>Reusable CSS patterns for layout, spacing, typography, cards, buttons, and page sections</li>
        <li>Responsive behaviour across small, medium, and large screens</li>
        <li>Accessible labels, focus states, colour contrast, alt text, and keyboard checks</li>
        <li>Basic SEO, metadata, performance awareness, and deployment readiness</li>
      </ul>
    </section>

    <section id="recommended-tutorials" class="box">
      <h2 class="title is-3">Recommended tutorials</h2>
      <p>
        Because Rotto Rocks is the capstone build, the supporting tutorials span the full workflow:
        structure, styling, responsive refinement, accessibility, SEO, deployment, and project
        planning.
      </p>
      <ul>
        <li v-for="tutorial in relatedTutorials" :key="tutorial.slug">
          <router-link :to="`/tutorials/${tutorial.slug}`">{{ tutorial.title }}</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export const frontmatter = { title: 'Capstone Spec', date: '2025-10-12' };
</script>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';
import { usePageSections } from '@/composables/usePageSections';
import { getProjectBySlug, getRelatedTutorialsForProject } from '@/data/projects';

const rottoRocksProject = getProjectBySlug('rotto-rocks');
const relatedTutorials = getRelatedTutorialsForProject(rottoRocksProject).filter(
  (tutorial) => tutorial.slug !== 'capstone/spec',
);

usePageSections([
  { id: 'overview', title: 'Overview' },
  { id: 'project-links', title: 'Project Resources' },
  { id: 'capstone-scope', title: 'Capstone Scope' },
  { id: 'recommended-tutorials', title: 'Recommended Tutorials' },
]);

useTutorialHead({
  title: 'Capstone Project Spec',
  description:
    'The Rotto Rocks capstone project specification with links to the project brief, wireframes, reference notes, and supporting tutorials.',
  path: '/tutorials/capstone/spec',
});
</script>

<style scoped>
.capstone-spec {
  max-width: 960px;
}

.capstone-spec .box + .box {
  margin-top: 1.5rem;
}
</style>
