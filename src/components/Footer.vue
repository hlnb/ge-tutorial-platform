<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <img
            src="@/assets/ColourLogo.svg"
            alt="GraphiteEdge logo"
            class="footer-logo"
          />
          <h3 class="footer-tagline">Web Development Isn't Just Code.</h3>
          <p class="footer-copy">
            Demystifying the full process from DNS to SEO, design to deployment.
          </p>
          <p class="footer-copy">
            Learn how the internet works, how to build websites from scratch,
            and how to launch them successfully without the confusion.
          </p>
        </div>

        <div>
          <h3 class="footer-heading">Explore</h3>
          <ul class="footer-links">
            <li><router-link to="/about">About GraphiteEdge</router-link></li>
            <li><router-link to="/tutorials">Tutorials</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li>
              <router-link to="/the-graphite-journal"
                >The Graphite Journal</router-link
              >
            </li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/privacy">Privacy Policy</router-link></li>
            <li><router-link to="/terms">Terms & Conditions</router-link></li>
            <li><a href="/rss.xml">RSS Feed</a></li>
          </ul>
          <h3 class="footer-heading footer-heading--spaced">Follow Us</h3>
          <div class="social-links">
            <a
              href="https://github.com/hlnb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i class="fab fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/graphitedge/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.facebook.com/GraphitEdge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.instagram.com/graphitedge_au"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 class="footer-heading">Never Miss a New Tutorial</h3>
          <p class="footer-copy">
            Join the GraphiteEdge newsletter for platform updates, new
            tutorials, and practical learning notes.
          </p>
          <NewsletterSignup />
        </div>
      </div>

      <div class="footer-copyright">
        <p>&copy; 2015-{{ currentYear }} GraphiteEdge. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import NewsletterSignup from "./NewsletterSignup.vue";

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.site-footer {
  margin-top: 3rem;
  padding: 3rem 0 2rem;
  background: var(--bg-footer);
  color: var(--fg-muted);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1.4fr 2fr;
  gap: 2.5rem;
}

.footer-logo {
  height: 46px;
  width: auto;
}

.footer-tagline,
.footer-heading {
  font-family: var(--font-heading);
  font-weight: var(--weight-bold);
  color: var(--fg-muted);
}

.footer-tagline {
  margin-top: 1rem;
  font-size: 1.1rem;
}

.footer-heading {
  font-size: 0.875rem;
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
}

.footer-heading--spaced {
  margin-top: 1.5rem;
}

.footer-copy,
.footer-links a,
.footer-copyright {
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--fg-muted);
}

.footer-copy + .footer-copy {
  margin-top: 0.75rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li + li {
  margin-top: 0.75rem;
}

.footer-links a:hover {
  color: var(--color-primary);
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-round);
  background: #bbbcc2;
  color: var(--color-white);
  font-size: 0.95rem;
}

.footer-copyright {
  margin-top: 2rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .site-footer {
    padding-top: 2.5rem;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
