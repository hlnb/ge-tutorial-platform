<template>
  <div class="project-brief-page">
    <nav class="breadcrumb no-print" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/">
            <i class="fa-solid fa-house mr-2"></i> Home
          </router-link>
        </li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/projects/black-swan-bistro">Black Swan Bistro</router-link></li>
        <li class="is-active">
          <a href="#" aria-current="page">Project Brief</a>
        </li>
      </ul>
    </nav>

    <div class="brief-shell">
      <header class="brief-hero">
        <div class="brief-hero__meta">
          <span class="tag is-warning is-light">Student Reference</span>
          <span class="tag is-info is-light">Printable A4</span>
          <span class="tag is-link is-light">BSB Parts 2-4</span>
        </div>

        <div class="brief-hero__header">
          <div class="brief-brand">
            <img
              src="/assets/images/projects/black-swan-bistro/bsb-logo.png"
              alt="Black Swan Bistro logo"
              class="brief-brand__logo"
            />
            <div>
              <p class="brief-kicker">GraphiteEdge Guided Project</p>
              <h1 class="title is-1 brief-title">Black Swan Bistro Project Brief</h1>
              <p class="subtitle is-4 brief-subtitle">
                A premium restaurant website brief for building layout, reusable components, and a
                consistent multi-page site.
              </p>
            </div>
          </div>

          <div class="brief-actions no-print">
            <button class="button is-dark" type="button" @click="printBrief">Print / Save PDF</button>
            <router-link class="button is-light" to="/tutorials/intermediate/black-swan-bistro-part-2">
              Start Part 2
            </router-link>
          </div>
        </div>
      </header>

      <section id="overview" class="brief-section">
        <h2 class="title is-3">Project Overview</h2>
        <p>
          Build a multi-page restaurant website that evolves from a static layout into a reusable,
          scalable site. This project simulates a real client brief and introduces a more
          professional design-to-code workflow than a one-page exercise.
        </p>
        <div class="brief-highlight-grid">
          <article class="brief-highlight">
            <h3 class="title is-5">Project Goal</h3>
            <p>Turn a client brief, branding direction, and wireframes into a calm, premium site.</p>
          </article>
          <article class="brief-highlight">
            <h3 class="title is-5">What You Will Practise</h3>
            <p>HTML structure, CSS layout, reusable components, and multi-page consistency.</p>
          </article>
          <article class="brief-highlight">
            <h3 class="title is-5">Working Habit</h3>
            <p>Read the brief before coding so your layout decisions come from the project goals.</p>
          </article>
        </div>
      </section>

      <section id="how-to-use" class="brief-section">
        <h2 class="title is-3">How to Use This Brief</h2>
        <ol class="brief-steps">
          <li>Read the project brief.</li>
          <li>Review the wireframes.</li>
          <li>Build the HTML structure.</li>
          <li>Apply layout with CSS.</li>
          <li>Identify reusable components.</li>
          <li>Expand to a multi-page site.</li>
        </ol>
        <p class="brief-note">
          Treat this page like a real project reference. Return to it while working through Parts 2,
          3, and 4 so your decisions stay connected to the client goals instead of becoming random
          one-off code changes.
        </p>
      </section>

      <section id="client" class="brief-section">
        <h2 class="title is-3">The Client</h2>
        <div class="brief-two-column">
          <div>
            <p>
              Black Swan Bistro is a modern Australian restaurant focused on seasonal ingredients and
              relaxed dining.
            </p>
            <ul>
              <li><strong>Audience:</strong> locals, couples, and tourists</li>
              <li><strong>Tone:</strong> warm, modern, premium</li>
              <li><strong>Main need:</strong> a polished website that feels trustworthy and easy to browse</li>
            </ul>
          </div>
          <aside class="brief-callout">
            <h3 class="title is-5">Working assumption</h3>
            <p>
              This is a restaurant that should feel calm and high quality, not loud or crowded. Your
              structure, spacing, and navigation should support that tone.
            </p>
          </aside>
        </div>
      </section>

      <section id="branding" class="brief-section">
        <h2 class="title is-3">Branding &amp; Design Direction</h2>
        <div class="brief-token-grid">
          <article class="brief-token-card">
            <h3 class="title is-5">Logo</h3>
            <p>Use the supplied Black Swan Bistro logo as the brand anchor in the header and footer.</p>
          </article>
          <article class="brief-token-card">
            <h3 class="title is-5">Colour palette</h3>
            <p>Deep charcoal, warm gold accents, and soft neutral backgrounds.</p>
          </article>
          <article class="brief-token-card">
            <h3 class="title is-5">Typography</h3>
            <p>Elegant serif headings with a clean sans-serif body style.</p>
          </article>
          <article class="brief-token-card">
            <h3 class="title is-5">Spacing</h3>
            <p>Generous whitespace to create a premium feel and reduce visual noise.</p>
          </article>
        </div>
      </section>

      <section id="wireframes" class="brief-section">
        <h2 class="title is-3">Wireframes</h2>
        <p>
          These wireframe panels are based on the design handoff for the Black Swan Bistro project.
          Use them to guide section order, repeated patterns, and page-to-page consistency.
        </p>

        <div class="wireframe-grid">
          <article
            v-for="wireframe in wireframes"
            :key="wireframe.title"
            class="wireframe-card"
          >
            <header class="wireframe-card__header">
              <div>
                <p class="wireframe-card__eyebrow">{{ wireframe.eyebrow }}</p>
                <h3 class="title is-4">{{ wireframe.title }}</h3>
              </div>
              <span class="wireframe-card__badge">{{ wireframe.mobile }}</span>
            </header>

            <div class="wireframe-artboard">
              <div class="wireframe-bar">
                <img
                  src="/assets/images/projects/black-swan-bistro/bsb-logo.png"
                  alt=""
                  class="wireframe-bar__logo"
                />
                <div class="wireframe-nav">
                  <span v-for="navItem in navItems" :key="`${wireframe.title}-${navItem}`">
                    {{ navItem }}
                  </span>
                </div>
              </div>

              <div class="wireframe-stack">
                <div
                  v-for="section in wireframe.sections"
                  :key="section"
                  class="wireframe-block"
                >
                  {{ section }}
                </div>
              </div>
            </div>

            <p class="wireframe-card__note">{{ wireframe.note }}</p>
          </article>
        </div>
      </section>

      <section id="content-pack" class="brief-section">
        <h2 class="title is-3">Content Pack</h2>
        <div class="brief-two-column">
          <div>
            <h3 class="title is-5">Core site content</h3>
            <ul>
              <li><strong>Navigation:</strong> Home, Menu, About, Contact</li>
              <li><strong>Menu item:</strong> Barramundi - Lemon butter sauce - $28</li>
              <li><strong>Menu item:</strong> Steak Sandwich - With chips - $22</li>
              <li><strong>Menu item:</strong> Garden Salad - Seasonal greens - $14</li>
              <li><strong>Contact:</strong> 123 Coastal Rd, Perth WA</li>
              <li><strong>Phone:</strong> (08) 1234 5678</li>
              <li><strong>Hours:</strong> 9am - 9pm daily</li>
            </ul>
          </div>
          <div>
            <h3 class="title is-5">Page purposes</h3>
            <ul>
              <li><strong>Home:</strong> introduce the bistro and drive reservations</li>
              <li><strong>Menu:</strong> display dishes with clear categories</li>
              <li><strong>About:</strong> tell the story and build trust</li>
              <li><strong>Contact:</strong> provide practical details and a clear way to reach out</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="images-media" class="brief-section">
        <h2 class="title is-3">Images &amp; Media Guidance</h2>
        <ul>
          <li>Use free sources such as Unsplash or Pexels for food and interior photography.</li>
          <li>Helpful search terms include “restaurant food plating” and “modern restaurant interior”.</li>
          <li>Hero images should support the premium tone without overpowering the content hierarchy.</li>
          <li>Menu and gallery images should feel consistent, not like random stock placeholders.</li>
          <li>Canva AI can be used for hero visuals, menu item imagery, or social preview graphics.</li>
        </ul>
      </section>

      <section id="components" class="brief-section">
        <h2 class="title is-3">Reusable Components / Component Inventory</h2>
        <div class="component-grid">
          <article v-for="component in componentInventory" :key="component.name" class="component-card">
            <h3 class="title is-5">{{ component.name }}</h3>
            <p>{{ component.description }}</p>
          </article>
        </div>
      </section>

      <section id="technical-scope" class="brief-section">
        <h2 class="title is-3">Technical Scope</h2>
        <div class="scope-grid">
          <article v-for="step in technicalScope" :key="step.part" class="scope-card">
            <p class="scope-card__part">{{ step.part }}</p>
            <h3 class="title is-5">{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </article>
        </div>
      </section>

      <section id="thinking-prompts" class="brief-section">
        <h2 class="title is-3">Developer Thinking Prompts</h2>
        <ul class="prompt-list">
          <li>What sections repeat across pages?</li>
          <li>What can become reusable?</li>
          <li>How does layout change across screen sizes?</li>
        </ul>
      </section>

      <section id="success-criteria" class="brief-section">
        <h2 class="title is-3">Success Criteria</h2>
        <ul>
          <li>Functional multi-page site</li>
          <li>Consistent layout and styling</li>
          <li>Reusable components implemented</li>
        </ul>
      </section>

      <section id="reflection" class="brief-section">
        <h2 class="title is-3">Reflection Questions</h2>
        <ol>
          <li>What did you learn about layout?</li>
          <li>What patterns did you reuse?</li>
          <li>What would you improve next?</li>
        </ol>
      </section>

      <footer id="copyright" class="brief-footer">
        <p>
          Copyright Graphitedge, Author Helen Burgess 2026. This brief is provided as a student
          project reference for the Black Swan Bistro learning sequence.
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import { usePageSections } from '@/composables/usePageSections';

const navItems = ['Home', 'Menu', 'About', 'Contact'];

const wireframes = [
  {
    eyebrow: 'Home Page',
    title: 'Homepage Layout',
    mobile: 'Mobile stacks to a single column',
    sections: [
      'Hero image + tagline + reserve CTA',
      'Featured dishes card grid',
      'About preview split section',
      'CTA banner',
      'Newsletter strip',
      'Four-column footer',
    ],
    note:
      'Use this page to establish the main tone, repeated section spacing, and the shared header/footer shell.',
  },
  {
    eyebrow: 'Menu Page',
    title: 'Menu Layout',
    mobile: 'Filter tabs scroll horizontally',
    sections: [
      'Dark page title banner',
      'Category tabs / pill filters',
      'Menu card grid',
      'Card image + badge + description + price',
      'Shared footer',
    ],
    note:
      'This page reinforces repeated card structure. One card pattern should support multiple dishes and categories.',
  },
  {
    eyebrow: 'About Page',
    title: 'About Layout',
    mobile: 'Split sections stack vertically',
    sections: [
      'Hero banner',
      'Story section',
      'Image + text split',
      'Values / stats strip',
      'Team or testimonial section',
      'CTA banner + shared footer',
    ],
    note:
      'Look for which sections feel unique and which still depend on shared heading, button, and shell patterns.',
  },
  {
    eyebrow: 'Contact Page',
    title: 'Contact Layout',
    mobile: 'Details and form collapse into one flow',
    sections: [
      'Page title block',
      'Contact detail rows',
      'Opening hours',
      'Map placeholder',
      'Contact form',
      'Shared footer',
    ],
    note:
      'This page should stay practical and easy to scan. Prioritise clarity over decoration.',
  },
];

const componentInventory = [
  {
    name: 'Header',
    description: 'Reusable logo and navigation structure shared across all pages.',
  },
  {
    name: 'Footer',
    description: 'Repeated footer with brand details, navigation, hours, and supporting links.',
  },
  {
    name: 'Menu Card',
    description: 'Card pattern used for featured dishes and the full menu listing.',
  },
  {
    name: 'Section Heading',
    description: 'Consistent heading treatment that keeps page hierarchy readable.',
  },
  {
    name: 'CTA Button',
    description: 'Primary and secondary button styles used across hero and call-to-action sections.',
  },
  {
    name: 'Contact Detail Row',
    description: 'Repeated icon-label-value rows for practical contact information.',
  },
];

const technicalScope = [
  {
    part: 'Part 1',
    title: 'HTML structure',
    description: 'Build the semantic page structure and organise the core content blocks.',
  },
  {
    part: 'Part 2',
    title: 'CSS layout',
    description: 'Use the brief and wireframes to shape spacing, hierarchy, and page layout.',
  },
  {
    part: 'Part 3',
    title: 'Reusable components',
    description: 'Identify repeated sections and turn them into consistent reusable patterns.',
  },
  {
    part: 'Part 4',
    title: 'Multi-page structure',
    description: 'Expand the project into a consistent site with shared layout decisions across pages.',
  },
];

usePageSections([
  { id: 'overview', title: 'Project Overview' },
  { id: 'how-to-use', title: 'How to Use This Brief' },
  { id: 'client', title: 'The Client' },
  { id: 'branding', title: 'Branding & Design Direction' },
  { id: 'wireframes', title: 'Wireframes' },
  { id: 'content-pack', title: 'Content Pack' },
  { id: 'images-media', title: 'Images & Media Guidance' },
  { id: 'components', title: 'Component Inventory' },
  { id: 'technical-scope', title: 'Technical Scope' },
  { id: 'thinking-prompts', title: 'Developer Thinking Prompts' },
  { id: 'success-criteria', title: 'Success Criteria' },
  { id: 'reflection', title: 'Reflection Questions' },
  { id: 'copyright', title: 'Copyright' },
]);

useHead({
  title: 'Black Swan Bistro Project Brief - GraphiteEdge',
  meta: [
    {
      name: 'description',
      content:
        'Student-facing Black Swan Bistro project brief with wireframes, component guidance, and printable A4 styling for Parts 2, 3, and 4.',
    },
  ],
  bodyAttrs: {
    class: 'bsb-project-brief-view',
  },
});

const printBrief = () => {
  window.print();
};
</script>

<style scoped>
.project-brief-page {
  max-width: 1120px;
}

.brief-shell {
  background: #fcfaf5;
  border: 1px solid #ded7ca;
  border-radius: 1rem;
  padding: 2rem;
  color: #2f2923;
}

.brief-hero {
  border-bottom: 1px solid #d8cfbf;
  padding-bottom: 1.75rem;
  margin-bottom: 2rem;
}

.brief-hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.brief-hero__header {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: flex-start;
}

.brief-brand {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

.brief-brand__logo {
  width: 88px;
  height: 88px;
  object-fit: contain;
  flex-shrink: 0;
}

.brief-kicker {
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.8rem;
  color: #8d6c24;
  margin-bottom: 0.4rem;
}

.brief-title,
.brief-subtitle {
  color: #2a2521;
}

.brief-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.brief-section + .brief-section {
  margin-top: 2rem;
}

.brief-highlight-grid,
.brief-token-grid,
.component-grid,
.scope-grid,
.wireframe-grid {
  display: grid;
  gap: 1rem;
}

.brief-highlight-grid,
.brief-token-grid,
.component-grid,
.scope-grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: 1rem;
}

.brief-highlight,
.brief-token-card,
.component-card,
.scope-card,
.brief-callout {
  background: #fff;
  border: 1px solid #e0d7c8;
  border-radius: 0.9rem;
  padding: 1rem;
}

.brief-two-column {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: minmax(0, 2fr) minmax(260px, 1fr);
}

.brief-callout {
  background: #fffaf0;
}

.brief-steps {
  margin: 1rem 0 1rem 1.25rem;
}

.brief-note {
  padding: 1rem 1.1rem;
  background: #fff;
  border-left: 4px solid #a07820;
  border-radius: 0.5rem;
}

.wireframe-grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-top: 1rem;
}

.wireframe-card {
  background: #fff;
  border: 1px solid #ddd3c2;
  border-radius: 1rem;
  padding: 1rem;
  break-inside: avoid;
}

.wireframe-card__header {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 0.9rem;
}

.wireframe-card__eyebrow,
.scope-card__part {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #8d6c24;
  margin-bottom: 0.35rem;
}

.wireframe-card__badge {
  font-size: 0.8rem;
  color: #5f564c;
  background: #f4efe4;
  border-radius: 999px;
  padding: 0.45rem 0.7rem;
  line-height: 1.3;
}

.wireframe-artboard {
  background: #f7f4ee;
  border: 2px solid #2f2923;
  border-radius: 0.8rem;
  padding: 0.8rem;
}

.wireframe-bar {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  align-items: center;
  padding-bottom: 0.65rem;
  border-bottom: 2px solid #2f2923;
}

.wireframe-bar__logo {
  width: 34px;
  height: 34px;
  object-fit: contain;
}

.wireframe-nav {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.wireframe-nav span,
.wireframe-block {
  border: 1.5px solid #2f2923;
  background: #fff;
  border-radius: 0.4rem;
  font-size: 0.82rem;
}

.wireframe-nav span {
  padding: 0.2rem 0.45rem;
}

.wireframe-stack {
  display: grid;
  gap: 0.6rem;
  padding-top: 0.8rem;
}

.wireframe-block {
  padding: 0.65rem 0.75rem;
  min-height: 2.6rem;
  display: flex;
  align-items: center;
}

.wireframe-card__note {
  margin-top: 0.8rem;
  color: #4f463d;
}

.prompt-list {
  font-size: 1.05rem;
}

.brief-footer {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #d8cfbf;
  color: #5f564c;
}

@media (max-width: 900px) {
  .brief-hero__header,
  .brief-two-column {
    grid-template-columns: 1fr;
    display: grid;
  }

  .brief-brand {
    align-items: flex-start;
  }

  .brief-actions {
    justify-content: flex-start;
  }
}

@media (max-width: 640px) {
  .brief-shell {
    padding: 1.25rem;
  }

  .brief-brand {
    flex-direction: column;
  }

  .wireframe-card__header {
    flex-direction: column;
  }
}

@media print {
  @page {
    size: A4;
    margin: 14mm;
  }

  :global(.navbar),
  :global(footer),
  :global(.cookie-consent-container),
  :global(.project-mobile-toggle),
  :global(.desktop-sidebar),
  :global(.mobile-sidebar-drawer),
  :global(.mobile-sidebar-backdrop),
  :global(.project-navigation) {
    display: none !important;
  }

  :global(#app),
  :global(main),
  :global(.project-layout),
  :global(.main-content),
  :global(.content) {
    display: block !important;
    padding: 0 !important;
    margin: 0 !important;
    max-width: none !important;
    background: #fff !important;
  }

  .project-brief-page,
  .brief-shell {
    max-width: none !important;
    width: 100% !important;
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    background: #fff !important;
    color: #000 !important;
    padding: 0 !important;
  }

  .no-print {
    display: none !important;
  }

  .brief-section,
  .wireframe-card,
  .brief-highlight,
  .brief-token-card,
  .component-card,
  .scope-card,
  .brief-callout {
    break-inside: avoid;
    page-break-inside: avoid;
    background: #fff !important;
    color: #000 !important;
  }

  .wireframe-grid {
    grid-template-columns: 1fr 1fr;
  }

  .wireframe-artboard,
  .wireframe-nav span,
  .wireframe-block,
  .brief-note {
    color: #000 !important;
    background: #fff !important;
    border-color: #000 !important;
  }

  .brief-kicker,
  .wireframe-card__eyebrow,
  .scope-card__part,
  .wireframe-card__badge,
  .brief-footer {
    color: #000 !important;
  }

  .brief-brand__logo,
  .wireframe-bar__logo {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact;
  }
}
</style>
