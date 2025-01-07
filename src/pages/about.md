<template>
  <MainLayout>
    <div class="container section">
      <div class="content">
        <h1 class="title is-2">About GraphiteEdge</h1>

        <div class="hero-section mb-6">
          <h2 class="title is-3">Web Development Isn't Just Code—It's a Whole Ecosystem.</h2>

          <p class="is-size-5">Most web tutorials only teach you how to write code—but what about everything else that makes a website successful? How the internet actually works, how to deploy a site, how to optimize for SEO, how to make designs functional in the real world?</p>

          <p class="is-size-5">That's where GraphiteEdge comes in.</p>

          <p class="feature-text">
            <i class="fas fa-rocket"></i> We teach web development beyond just code—demystifying the full process from DNS to SEO, design to deployment.
          </p>
        </div>

        <div class="meet-helen mb-6">
          <h2 class="title is-3">Meet Helen Burgess</h2>

          <p class="feature-text">
            <i class="fas fa-hand-wave"></i> Hi, I'm Helen, and I've been in the web industry for over 20 years.
          </p>

          <p class="is-size-5">I started my career when the internet was still in its early days, building websites from scratch and watching web technologies evolve. Over the years, I've worked as a developer, educator, and mentor, and I've seen countless beginners struggle—not because they can't code, but because they're missing the bigger picture of how web development really works.</p>

          <p class="feature-text">
            <i class="fas fa-lightbulb"></i> The problem? Most tutorials focus on syntax but leave out the crucial skills developers actually need.
          </p>

          <p class="is-size-5">I created GraphiteEdge to change that—to bridge the gap between code, design, and real-world web development using plain, visual, and practical explanations.</p>
        </div>

        <div class="mission-section has-background-light p-5 mb-6">
          <h2 class="title is-3">Our Mission</h2>

          <p class="feature-text">
            <i class="fas fa-rocket"></i> "Web development isn't just code—demystifying the full process from DNS to SEO, design to deployment."
          </p>

          <p class="is-size-5">We help:</p>
          <ul class="checkmark-list">
            <li>Beginners build confidence in understanding web development beyond syntax.</li>
            <li>Self-taught developers fill in the missing knowledge that holds them back.</li>
            <li>Designers transitioning into development bridge the gap between aesthetics and functionality.</li>
          </ul>
        </div>

        <div class="approach-section mb-6">
          <h2 class="title is-3">Our Approach: Learn by Building a Real-World Project</h2>

          <p class="is-size-5">At GraphiteEdge, we believe the best way to learn is by doing. That's why our tutorials are centered around "Rotto Rocks", a real-world project inspired by Rottnest Island's beauty and the Black Swan Bistro, a typical Western Australian restaurant.</p>

          <p class="is-size-5">Through this hands-on learning experience, you'll go beyond just writing HTML, CSS, and JavaScript. You'll also learn:</p>

          <ul class="checkmark-list">
            <li>How the internet works (domains, DNS, hosting, and deployment).</li>
            <li>How to take a design and turn it into a functional website.</li>
            <li>The science behind effective web pages (SEO, CTAs, performance optimization).</li>
            <li>How to build interactive, modern web experiences using Vue.js & Bulma.</li>
          </ul>

          <p class="feature-text">
            <i class="fas fa-bullseye"></i> No more disconnected tutorials—GraphiteEdge gives you the missing pieces of web development in a structured, practical learning experience.
          </p>
        </div>

        <div class="audience-section mb-6">
          <h2 class="title is-3">Who GraphiteEdge Is For</h2>

          <ul class="checkmark-list">
            <li>Beginners who feel lost beyond writing code.</li>
            <li>Self-taught developers who want to master the full web development process.</li>
            <li>Designers who want to transition into web development with a structured, practical approach.</li>
            <li>Anyone who wants to go beyond tutorials and actually understand how websites work in the real world.</li>
          </ul>
        </div>

        <div class="newsletter-section has-background-light p-5">
          <h2 class="title is-3">Join the GraphiteEdge Community <i class="fas fa-rocket"></i></h2>

          <p class="is-size-5">Want to be the first to know when new tutorials drop?</p>

          <p class="feature-text">
            <i class="fas fa-envelope"></i> Join the GraphiteEdge Insider Newsletter for:
          </p>

          <ul class="checkmark-list">
            <li>Early access to new tutorials</li>
            <li>Exclusive web development tips & tricks</li>
            <li>Updates on real-world projects like "Rotto Rocks"</li>
          </ul>

          <p class="feature-text">
            <i class="fas fa-lightbulb"></i> Sign up today and start learning beyond just code!
          </p>

          <NewsletterSignup />
        </div>
      </div>
    </div>

  </MainLayout>
</template>

<script setup>
import MainLayout from '../components/MainLayout.vue'
import NewsletterSignup from '../components/NewsletterSignup.vue'
</script>

<style scoped>
.feature-text {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.5rem 0;
  color: var(--color-primary);
}

.feature-text i {
  margin-right: 0.5rem;
}

.checkmark-list {
  list-style: none;
  padding-left: 1.5rem;
}

.checkmark-list li {
  position: relative;
  margin-bottom: 1rem;
}

.checkmark-list li::before {
  content: "\f00c";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  position: absolute;
  left: -1.5rem;
  color: var(--color-primary);
}

.mission-section, .newsletter-section {
  border-radius: 8px;
}

.button .icon {
  margin-left: 0.5rem;
}
</style>
