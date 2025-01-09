<template>
	<MainLayout>
		<div class="container">
			<section class="section">
				<div class="content">
       <!-- Hero Section -->
      <section class="hero is-large mb-6">
        <div class="hero-body has-text-centered">
          <h2 class="title has-text-white">{{ hero.title }}</h2>
          <p class="subtitle has-text-white">{{ hero.description }}</p>
           <a href="/tutorials" class="button is-primary is-large mt-4">
            Start Your Journey
          </a>
        </div>
      </section>

      <!-- About GraphitEdge Section -->
      <section class="section mb-6">
        <div class="container">
          <h2 class="title is-3">Web Development Isn't Just Code—It's a Whole Ecosystem</h2>

          <div class="content">
            <p class="is-size-5 mb-5">
              Most web development tutorials teach you how to write code, but they leave out the bigger picture—the crucial elements that make a website functional, discoverable, and successful. That's where GraphiteEdge comes in.
            </p>

            <p class="is-size-5 mb-5">
              I'm Helen Burgess, and with over 20 years in the web industry, I've seen too many developers struggle not because they can't code, but because they don't know the stuff no one talks about—how the internet actually works, how to deploy a site, how to optimize for SEO, and how to make designs translate into real, effective websites.
            </p>

            <p class="is-size-5 mb-4">
              At GraphiteEdge, I break down these missing pieces in plain English, with visuals, flowcharts, and practical examples, helping:
            </p>

            <ul class="benefits-list mb-5">
              <li>Beginners build confidence in understanding web development beyond just syntax.</li>
              <li>Self-taught developers fill in the gaps that hold them back from leveling up.</li>
              <li>Designers transitioning into development bridge the gap between aesthetics and functionality.</li>
            </ul>

            <div class="mission-statement has-background-light p-5 has-text-centered">
              <h3 class="title is-4 mb-3">Our Mission</h3>
              <p class="is-size-5 is-italic">
                "Web development isn't just code—demystifying the full process from DNS to SEO, design to deployment."
              </p>
            </div>

            <p class="is-size-5 mt-5">
              If you've ever felt overwhelmed by the technical side of launching and managing websites, you're in the right place. Let's make web development clearer, together.
            </p>

            <h3 class="title is-4 mt-6 mb-4">Learn Web Development by Building Real Projects</h3>

            <p class="is-size-5 mb-5">
              At GraphiteEdge, we believe the best way to learn is by doing. That's why our tutorials center around "Rotto Rocks", a real-world web project inspired by Rottnest Island's beauty and the Black Swan Bistro, a classic Western Australian restaurant.
            </p>

            <p class="is-size-5 mb-4">
              Through hands-on learning, you'll go beyond just writing HTML, CSS, and JavaScript. You'll also understand:
            </p>

            <ul class="benefits-list mb-5">
              <li>How the internet works (domains, DNS, hosting, and deployment).</li>
              <li>How to take a design and turn it into a real website.</li>
              <li>The science behind effective web pages (SEO, CTAs, performance optimization).</li>
              <li>How to build interactive, modern web experiences using Vue.js & Bulma.</li>
            </ul>

            <p class="is-size-5 mb-5">
              No more disconnected tutorials—GraphiteEdge gives you the missing pieces of web development in one structured, practical learning experience.
            </p>

            <div class="tech-stack">
              <span class="tech-badge tag is-medium">HTML</span>
              <span class="tech-badge tag is-medium">CSS</span>
              <span class="tech-badge tag is-medium">JavaScript</span>
              <span class="tech-badge tag is-medium">Vue.js</span>
              <span class="tech-badge tag is-medium">Bulma</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="section features mb-6">
        <div class="container">
          <h2 class="title is-3 has-text-centered mb-6">What You'll Learn with GraphiteEdge</h2>

          <p class="is-size-5 has-text-centered mb-6">
            At GraphiteEdge, our tutorials go beyond just writing code. We help beginners, self-taught developers,
            and designers understand the entire web development process by building real-world projects.
          </p>

          <div class="features-grid">
            <div v-for="feature in features" :key="feature.title" class="feature-card">
              <h3 class="title is-4">
                <span class="icon-text">
                  <span class="icon">{{ feature.icon }}</span>
                  <span>{{ feature.title }}</span>
                </span>
              </h3>
              <ul class="feature-list">
                <li v-for="item in feature.items" :key="item.heading">
                  <strong>{{ item.heading }}:</strong> {{ item.description }}
                </li>
              </ul>
            </div>
          </div>

          <div class="notification is-light is-info mt-6">
            <p class="has-text-centered mb-0">
              <span class="icon">💡</span>
              Everything is taught through "Rotto Rocks"—a real-world project that makes learning practical, fun, and effective.
            </p>
          </div>
					</div>
				</section>
			</div>
		</section>
	</MainLayout>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import MainLayout from '../components/MainLayout.vue'


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
  title: 'Web Development Isn’t Just Code',
  description: 'Demystifying the full process from DNS to SEO, design to deployment.'
}

const features = [
  {
    title: 'Foundations of Web Development',
    icon: '📌',
    items: [
      {
        heading: 'Understand the Internet',
        description: 'Learn about domains, DNS, hosting, and how websites actually work behind the scenes.'
      },
      {
        heading: 'HTML, CSS & JavaScript',
        description: 'Master the building blocks of web development with clear, visual explanations.'
      },
      {
        heading: 'Vue.js & Bulma',
        description: 'Build modern, responsive interfaces with real-world frameworks.'
      }
    ]
  },
  {
    title: 'Turning Design into Reality',
    icon: '📌',
    items: [
      {
        heading: 'Design to Code',
        description: 'Learn how to translate a mockup or an image into a functional website.'
      },
      {
        heading: 'CSS & Layouts',
        description: 'Discover best practices for structuring and styling web pages.'
      }
    ]
  },
  {
    title: 'Web Performance & SEO',
    icon: '📌',
    items: [
      {
        heading: 'SEO Optimization',
        description: 'Understand how search engines rank pages and how to create SEO-friendly content.'
      },
      {
        heading: 'Page Speed & Performance',
        description: 'Learn why speed matters and how to optimize your site for fast loading times.'
      }
    ]
  },
  {
    title: 'Deployment & Security',
    icon: '📌',
    items: [
      {
        heading: 'Hosting & Deployment',
        description: 'Learn how to launch your site on the web.'
      },
      {
        heading: 'Security Best Practices',
        description: 'Keep your website safe and resilient from threats.'
      }
    ]
  }
]
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

.hero .button {
  background-color: var(--color-red-berry);
  color: var(--color-white);
  font-weight: bold;
  transition: transform 0.2s ease;
}

.hero .button:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.benefits-list {
  list-style: none;
  padding-left: 1.5rem;
}

.benefits-list li {
  position: relative;
  padding: 0.5rem 0;
}

.benefits-list li::before {
  content: "✅";
  position: absolute;
  left: -1.5rem;
}

.mission-statement {
  border-radius: 8px;
  margin: 2rem 0;
}
</style>

