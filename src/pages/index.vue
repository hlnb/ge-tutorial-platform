<template>
  <HomeLayout :frontmatter="frontmatter">
    <template #hero>
      <section class="home-hero">
        <div class="home-hero__overlay">
          <div class="container home-hero__content">
            <p class="home-hero__eyebrow">
              GraphitEdge Web Development Education
            </p>
            <h1>{{ frontmatter.hero.title }}</h1>
            <p class="home-hero__tagline">{{ frontmatter.hero.tagline }}</p>
            <p class="home-hero__description">
              {{ frontmatter.hero.description }}
            </p>
            <p class="home-hero__description">
              {{ frontmatter.hero.supportingDescription }}
            </p>
            <div class="home-hero__actions">
              <a href="/tutorials" class="button is-primary">Start Learning</a>
              <a href="/about" class="button home-hero__secondary-button"
                >Learn More</a
              >
            </div>
          </div>
        </div>
      </section>
    </template>

    <template #about>
      <div class="home-about">
        <h2>Start with the Foundations</h2>
        <p class="home-about__lead">
          Learn the building blocks of the web: HTML for structure, CSS for
          layout and design, and JavaScript for interaction.
        </p>
        <div class="home-card-grid">
          <article
            v-for="foundation in foundations"
            :key="foundation.heading"
            class="home-topic-card"
          >
            <h3>{{ foundation.heading }}</h3>
            <p>{{ foundation.description }}</p>
          </article>
        </div>
      </div>
    </template>

    <template #mission>
      <div class="mission-statement">
        <p class="mission-statement__label">GraphitEdge approach</p>
        <p>Understand the system. Build with confidence.</p>
      </div>
    </template>

    <template #projects>
      <section class="section home-learning">
        <div class="container">
          <h2>Build Real Projects</h2>
          <p class="home-learning__lead">
            Practise your skills through guided projects that move from planning
            and page structure to reusable components, responsive layouts, and
            deployment.
          </p>
          <div class="home-card-grid">
            <article
              v-for="project in projectHighlights"
              :key="project.heading"
              class="home-topic-card"
            >
              <h3>{{ project.heading }}</h3>
              <p>{{ project.description }}</p>
            </article>
          </div>
        </div>
      </section>
    </template>
  </HomeLayout>
</template>

<script setup>
import HomeLayout from "@/layouts/home.vue";
import { useHead } from "@vueuse/head";

const foundations = [
  {
    heading: "HTML",
    description: "Learn how page structure gives content meaning.",
  },
  {
    heading: "CSS",
    description: "Style layouts, spacing, typography, and responsive designs.",
  },
  {
    heading: "JavaScript",
    description: "Add interaction and behaviour to your pages.",
  },
];

const projectHighlights = [
  {
    heading: "Black Swan Bistro",
    description:
      "Plan and build a practical restaurant website from content structure to interface patterns.",
  },
  {
    heading: "Rotto Rocks",
    description:
      "Turn a real brief into a responsive project with clearer layout and content decisions.",
  },
  {
    heading: "Guided project workflow",
    description:
      "Practise planning, component thinking, testing, deployment, and maintenance as one connected process.",
  },
];

const frontmatter = {
  title: "GraphitEdge",
  description:
    "GraphitEdge teaches practical web development from HTML, CSS, and JavaScript to accessibility, SEO, hosting, and deployment.",
  hero: {
    title: "Learn Web Development from Code to Deployment",
    tagline: "Understand the system. Build with confidence.",
    description:
      "GraphitEdge is a practical web development education site created by Helen Burgess for beginners, emerging developers, designers, and small business owners who want to understand how websites are planned, built, tested, launched, and maintained.",
    supportingDescription:
      "Start with HTML, CSS, and JavaScript, then build confidence with accessibility, SEO, hosting, deployment, and real-world project workflows.",
  },
  systemsSection: {
    title: "Learn the Systems Behind the Web",
    description:
      "Go beyond code by learning the practical systems that support every website, including domains, DNS, hosting, accessibility, SEO, analytics, deployment workflows, and ethical AI-assisted development.",
    items: [
      {
        heading: "Accessibility",
        description:
          "Build pages that are readable, usable, and easier to navigate with keyboards and assistive technology.",
      },
      {
        heading: "SEO",
        description:
          "Understand how clear structure, content, metadata, and performance help people and search systems understand a page.",
      },
      {
        heading: "Hosting and deployment",
        description:
          "Learn how domains, hosting platforms, deployment, testing, and maintenance fit together after code leaves your computer.",
      },
      {
        heading: "AI-assisted development",
        description:
          "Use AI as a practical assistant while still learning the fundamentals that let you review, debug, and improve the work.",
      },
    ],
  },
  learningPathsSection: {
    title: "Choose Your Learning Path",
    description:
      "Follow a structured pathway based on your current skill level, whether you are starting from scratch, improving your foundations, or building complete projects.",
  },
  learningPaths: [
    {
      title: "Beginner tutorials",
      description:
        "Start with the essentials and build a practical foundation in HTML, CSS, JavaScript, accessibility, and website structure.",
      link: "/tutorials",
      cta: "Explore beginner tutorials",
    },
    {
      title: "Intermediate builder pathway",
      description:
        "Strengthen your workflow with responsive layouts, reusable patterns, debugging, SEO, deployment, and project decisions.",
      link: "/tutorials/intermediate",
      cta: "View intermediate pathway",
    },
    {
      title: "Project-based learning",
      description:
        "Apply the pieces together through guided website projects that connect planning, building, testing, and launch.",
      link: "/projects",
      cta: "Browse projects",
    },
  ],
};

useHead({
  title: "GraphitEdge – Web Development Tutorials for Beginners",
  meta: [
    {
      name: "description",
      content:
        "GraphitEdge teaches practical web development for beginners, emerging developers, designers, and small business owners, from HTML, CSS, and JavaScript to accessibility, SEO, hosting, and deployment.",
    },
    {
      property: "og:title",
      content: "GraphitEdge – Learn Web Development from Code to Deployment",
    },
    {
      property: "og:description",
      content:
        "Practical web development education for beginners, emerging developers, designers, and small business owners, from foundations to deployment.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.graphitedge.com.au/" },
    {
      property: "og:image",
      content: "https://www.graphitedge.com.au/og-image.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "GraphitEdge – Learn Web Development from Code to Deployment",
    },
    {
      name: "twitter:description",
      content:
        "Learn practical web development from HTML, CSS, and JavaScript to accessibility, SEO, hosting, and deployment.",
    },
  ],
  link: [{ rel: "canonical", href: "https://www.graphitedge.com.au/" }],
});
</script>

<style scoped>
.home-hero {
  background-image: url("@/assets/images/home-hero-background.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.home-hero__overlay {
  min-height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  background: rgba(77, 77, 77, 0.72);
}

.home-hero__content {
  max-width: 780px;
  text-align: center;
}

.home-hero__eyebrow {
  margin: 0 0 0.85rem;
  font-family: var(--font-heading);
  font-size: 0.8125rem;
  font-weight: var(--weight-bold);
  letter-spacing: 0;
  color: rgba(255, 255, 255, 0.78);
  text-transform: uppercase;
}

.home-hero__content h1 {
  font-size: var(--text-hero);
  font-weight: var(--weight-black);
  line-height: 1.15;
  color: var(--color-white);
}

.home-hero__tagline,
.home-hero__description {
  margin-top: 1rem;
  line-height: var(--leading-normal);
  color: rgba(255, 255, 255, 0.88);
}

.home-hero__tagline {
  font-size: var(--text-md);
  font-weight: var(--weight-bold);
}

.home-hero__description {
  font-size: 1rem;
}

.home-hero__actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.75rem;
}

.home-hero__secondary-button {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: var(--color-white);
}

.home-hero__secondary-button:hover {
  color: var(--color-white);
  background: rgba(255, 255, 255, 0.18);
}

.home-about,
.home-learning .container {
  max-width: 58rem;
}

.home-about h2,
.home-learning h2 {
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: var(--weight-bold);
}

.home-about__lead,
.home-learning__lead {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--fg-muted);
}

.home-about p,
.home-learning p {
  margin-top: 1rem;
  color: var(--fg-muted);
  line-height: 1.7;
}

.home-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.home-topic-card {
  padding: 1.25rem;
  border: 1px solid #dde3e9;
  border-radius: 0.5rem;
  background: var(--color-white);
}

.home-topic-card h3 {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: var(--weight-bold);
  color: var(--fg-default);
}

.home-topic-card p {
  margin-top: 0.75rem;
  font-size: 0.9rem;
}

.benefits-list {
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 0;
}

.benefits-list li {
  position: relative;
  padding-left: 1.75rem;
  line-height: 1.6;
  color: var(--fg-muted);
}

.benefits-list li + li {
  margin-top: 0.75rem;
}

.benefits-list li::before {
  content: "✅";
  position: absolute;
  left: 0;
  top: 0;
}

.mission-statement {
  margin-top: 2rem;
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  background: var(--color-navy);
  text-align: center;
}

.mission-statement__label {
  margin-top: 0;
  font-size: 1rem;
  font-weight: var(--weight-bold);
  color: var(--color-white);
}

.mission-statement p {
  margin-top: 0.5rem;
  font-size: 1rem;
  font-style: italic;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
}

.home-learning {
  background: var(--color-white);
}

@media (max-width: 768px) {
  .home-hero__overlay {
    padding: 3rem 0;
  }
}
</style>
