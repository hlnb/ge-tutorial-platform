<template>
  <HomeLayout :frontmatter="frontmatter">
    <template #hero>
      <section class="home-hero">
        <div class="home-hero__overlay">
          <div class="container home-hero__content">
            <h1>{{ frontmatter.hero.title }}</h1>
            <p>{{ frontmatter.hero.description }}</p>
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
        <h2>Web Development Isn't Just Code. It's a Whole Ecosystem.</h2>
        <p class="home-about__lead">
          Most tutorials teach syntax, but skip the bigger picture that makes a
          site functional, discoverable, and successful.
        </p>
        <p>
          I'm Helen Burgess, and with more than 20 years in the web industry,
          I've seen too many developers struggle because no one explained how
          the internet works, how deployment fits in, or how design decisions
          turn into real interfaces.
        </p>
        <p>
          At GraphiteEdge, I break those missing pieces down in plain English
          with diagrams, practical examples, and structured pathways.
        </p>
        <ul class="benefits-list">
          <li>Beginners build confidence beyond syntax.</li>
          <li>Self-taught developers fill in the gaps that hold them back.</li>
          <li>
            Designers moving into development learn how aesthetics become usable
            interfaces.
          </li>
        </ul>
      </div>
    </template>

    <template #mission>
      <div class="mission-statement">
        <h3>Our Mission</h3>
        <p>
          "Web development isn't just code. Demystifying the full process from
          DNS to SEO, design to deployment."
        </p>
      </div>
    </template>

    <template #learning>
      <section class="section home-learning">
        <div class="container">
          <h2>Learn Web Development by Building Real Projects</h2>
          <p class="home-learning__lead">
            GraphiteEdge teaches through practical projects, not disconnected
            exercises. You learn by building something that feels real.
          </p>
          <p>
            As you work through the curriculum, you learn not only HTML, CSS,
            and JavaScript, but also the wider system that makes a site useful
            and publishable.
          </p>
          <ul class="benefits-list">
            <li>
              How the internet works: domains, DNS, hosting, and deployment.
            </li>
            <li>How to take a design and turn it into a real website.</li>
            <li>How effective pages support SEO, CTAs, and performance.</li>
            <li>How to build modern interfaces with Vue and Bulma.</li>
          </ul>
          <p>
            No more disconnected lessons that leave you with loose fragments.
            GraphiteEdge gives you the missing pieces in one structured learning
            experience.
          </p>
        </div>
      </section>
    </template>

    <template #faqs>
      <FaqSection :faqs="generalFaqs" />
    </template>
  </HomeLayout>
</template>

<script setup>
import HomeLayout from "@/layouts/home.vue";
import { useHead } from "@vueuse/head";
import generalFaqs from "@/data/faqs";
import FaqSection from "@/components/FaqSection.vue";

const postModules = import.meta.glob("/src/pages/posts/*.vue", { eager: true });

const getLatestPosts = () => {
  return Object.entries(postModules)
    .map(([path, module]) => {
      let frontmatter;

      if (module && typeof module === "object") {
        frontmatter = module.frontmatter || module.default?.frontmatter;
      }

      if (
        !frontmatter ||
        frontmatter.status !== "published" ||
        !frontmatter.date
      ) {
        return null;
      }

      const slug = path.split("/").pop().replace(".vue", "");
      const date = new Date(frontmatter.date);

      if (Number.isNaN(date.getTime())) {
        return null;
      }

      return {
        title: frontmatter.title,
        link: `/posts/${slug}`,
        snippet: frontmatter.description || "",
        date,
      };
    })
    .filter(Boolean)
    .sort(
      (firstPost, secondPost) =>
        secondPost.date.getTime() - firstPost.date.getTime(),
    )
    .slice(0, 3);
};

const frontmatter = {
  title: "GraphiteEdge",
  description:
    "Welcome to GraphiteEdge - Web Development Tutorials and Practical Projects",
  hero: {
    title: "Web Development Isn't Just Code",
    description:
      "Demystifying the full process from DNS to SEO, design to deployment.",
  },
  features: [
    {
      title: "Foundations of Web Development",
      items: [
        {
          heading: "Understand the Internet",
          description:
            "Domains, DNS, hosting, and what actually happens behind the scenes.",
        },
        {
          heading: "HTML, CSS, and JavaScript",
          description: "The building blocks explained clearly and practically.",
        },
        {
          heading: "Vue and Bulma",
          description: "Modern tools introduced with context instead of magic.",
        },
      ],
    },
    {
      title: "Turning Design into Reality",
      items: [
        {
          heading: "Design to Code",
          description: "Translate layouts and mockups into working interfaces.",
        },
        {
          heading: "Responsive Design",
          description:
            "Make pages work well on phones, tablets, and desktop screens.",
        },
        {
          heading: "Accessibility and Usability",
          description:
            "Build websites that are readable, inclusive, and clear.",
        },
      ],
    },
    {
      title: "Web Performance and SEO",
      items: [
        {
          heading: "SEO Optimization",
          description:
            "Understand search engines and write pages that can be found.",
        },
        {
          heading: "Page Speed and Performance",
          description: "Learn why speed matters and how to improve it.",
        },
        {
          heading: "Analytics and Measurement",
          description: "Track what is working and what needs attention.",
        },
      ],
    },
    {
      title: "Deployment and Security",
      items: [
        {
          heading: "Hosting and Deployment",
          description: "Move from a local project to a live website calmly.",
        },
        {
          heading: "Security Best Practices",
          description:
            "Protect your project and avoid common beginner mistakes.",
        },
        {
          heading: "Maintenance",
          description: "Understand what happens after a site launches.",
        },
      ],
    },
    {
      title: "Project-Based Learning",
      items: [
        {
          heading: "Real-World Projects",
          description:
            "Apply your skills through complete, teachable examples.",
        },
        {
          heading: "Step-by-Step Guidance",
          description: "Learn each phase in a sequence that builds confidence.",
        },
      ],
    },
    {
      title: "Community and Support",
      items: [
        {
          heading: "Join the Community",
          description:
            "Find support, feedback, and encouragement from other learners.",
        },
        {
          heading: "Track Your Progress",
          description:
            "Keep moving forward with a clearer sense of what comes next.",
        },
      ],
    },
  ],
  latestPosts: getLatestPosts(),
};

useHead({
  title: "GraphiteEdge – Web Development Tutorials for Beginners",
  meta: [
    {
      name: "description",
      content:
        "Free web development tutorials for beginners. Learn HTML, CSS, JavaScript, DNS, and how the web works — step by step, with real-world projects.",
    },
    {
      property: "og:title",
      content: "GraphiteEdge – Web Development Tutorials for Beginners",
    },
    {
      property: "og:description",
      content:
        "Free web development tutorials for beginners. Learn HTML, CSS, JavaScript, DNS, and how the web works — step by step.",
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
      content: "GraphiteEdge – Web Development Tutorials for Beginners",
    },
    {
      name: "twitter:description",
      content:
        "Free web development tutorials for beginners. Learn HTML, CSS, JavaScript, DNS, and how the web works.",
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
  max-width: 700px;
  text-align: center;
}

.home-hero__content h1 {
  font-size: var(--text-hero);
  font-weight: var(--weight-black);
  line-height: 1.15;
  color: var(--color-white);
}

.home-hero__content p {
  margin-top: 1rem;
  font-size: var(--text-md);
  line-height: var(--leading-normal);
  color: rgba(255, 255, 255, 0.88);
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

.mission-statement h3 {
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
