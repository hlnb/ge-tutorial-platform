<template>
  <div class="project-brief-page rotto-brief-page">
    <nav class="breadcrumb no-print" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/">
            <i class="fa-solid fa-house mr-2"></i> Home
          </router-link>
        </li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/projects/rotto-rocks">Rotto Rocks</router-link></li>
        <li class="is-active">
          <a href="#" aria-current="page">Project Brief</a>
        </li>
      </ul>
    </nav>

    <div class="brief-shell">
      <header class="brief-hero">
        <div class="brief-hero__meta">
          <span class="tag is-info is-light">Student Reference</span>
          <span class="tag is-warning is-light">Guided multi-page build</span>
          <span class="tag is-success is-light">Late beginner to intermediate</span>
        </div>

        <div class="brief-hero__header">
          <div>
            <p class="brief-kicker">GraphitEdge Student Project</p>
            <h1 class="title is-1 brief-title">Rotto Rocks Project Brief</h1>
            <p class="subtitle is-4 brief-subtitle">
              A fictional tourism website for planning, designing, and building a responsive
              multi-page experience site.
            </p>
          </div>

          <div class="brief-actions no-print">
            <button class="button is-dark" type="button" @click="printBrief">Print / Save PDF</button>
            <a
              class="button is-link"
              href="/projects/rotto-rocks/rotto-rocks-student-project-brief.pdf"
              download
            >
              Download Brief + Wireframes PDF
            </a>
            <a
              class="button is-info is-light"
              href="/projects/rotto-rocks/wireframes/index.html"
              target="_blank"
              rel="noopener"
            >
              View Wireframes
            </a>
            <router-link class="button is-light" to="/projects/rotto-rocks">
              Back to Project
            </router-link>
          </div>
        </div>
      </header>

      <section id="overview" class="brief-section">
        <h2 class="title is-3">Project Overview</h2>
        <p class="brief-note no-print">
          Students can also
          <a href="/projects/rotto-rocks/rotto-rocks-student-project-brief.pdf" download>
            download the combined brief and wireframes PDF
          </a>
          for offline planning and annotation, and
          <a href="/projects/rotto-rocks/wireframes/index.html" target="_blank" rel="noopener">
            open the interactive wireframes
          </a>
          when choosing a design direction.
        </p>
        <p>
          Rotto Rocks is a fictional tourism business offering guided walking, cycling, wildlife,
          beach, and sunset experiences on Rottnest Island, Western Australia.
        </p>
        <p>
          Students will use this brief to create a working five-page responsive website using
          structured HTML, reusable CSS patterns, accessible content, and clear page planning.
        </p>

        <div class="brief-highlight-grid">
          <article class="brief-highlight">
            <h3 class="title is-5">Project Type</h3>
            <p>Multi-page tourism and experience website.</p>
          </article>
          <article class="brief-highlight">
            <h3 class="title is-5">Learning Focus</h3>
            <p>Planning, semantic HTML, CSS layout, responsive design, accessibility, and reuse.</p>
          </article>
          <article class="brief-highlight">
            <h3 class="title is-5">Final Deliverable</h3>
            <p>A five-page responsive website plus a short project reflection.</p>
          </article>
        </div>
      </section>

      <section id="wireframe-options" class="brief-section">
        <h2 class="title is-3">Wireframe Options</h2>
        <p>
          Each required page has two wireframe variations. Students should choose one variation per
          page before building. They may use all Variation A pages for a simpler, more conventional
          tourism site, all Variation B pages for a more editorial layout, or a considered mix if
          they can keep the final site visually consistent.
        </p>
        <p>
          The aim is not to build both versions. The aim is to practise reading a design option,
          making a decision, and implementing the chosen structure clearly.
        </p>

        <div class="brief-actions brief-actions--inline no-print">
          <a
            class="button is-info"
            href="/projects/rotto-rocks/wireframes/index.html"
            target="_blank"
            rel="noopener"
          >
            Open Interactive Wireframes
          </a>
        </div>

        <div class="brief-table-wrapper mt-4">
          <table class="table is-fullwidth is-striped">
            <thead>
              <tr>
                <th>Page</th>
                <th>Variation A</th>
                <th>Variation B</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="option in wireframeOptions" :key="option.page">
                <td><strong>{{ option.page }}</strong></td>
                <td>{{ option.a }}</td>
                <td>{{ option.b }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <aside class="brief-callout mt-4">
          <h3 class="title is-5">Student choice rule</h3>
          <p>
            Choose deliberately. If you mix variations, explain your reason in your reflection and
            keep shared components such as headers, tour cards, buttons, and footers consistent.
          </p>
        </aside>
      </section>

      <section id="client-brief" class="brief-section">
        <h2 class="title is-3">Client Brief</h2>
        <div class="brief-two-column">
          <div>
            <p><strong>Business name:</strong> Rotto Rocks</p>
            <p><strong>Possible tagline:</strong> Discover the island beyond the postcard.</p>
            <p>
              Rotto Rocks helps visitors explore the island's beaches, history, wildlife, and
              hidden corners through relaxed, small-group tours.
            </p>
            <p>
              The website needs to introduce the business, explain the available experiences, help
              visitors choose the right tour, and encourage bookings or enquiries.
            </p>
          </div>
          <aside class="brief-callout">
            <h3 class="title is-5">Project Tone</h3>
            <p>
              Coastal, friendly, trustworthy, relaxed, nature-aware, and adventurous without
              feeling extreme. Enthusiastic is good; breathless is not required.
            </p>
          </aside>
        </div>
      </section>

      <section id="audience-goals" class="brief-section">
        <h2 class="title is-3">Target Audience and Website Goals</h2>
        <div class="brief-two-column">
          <div>
            <h3 class="title is-5">Target Audience</h3>
            <ul>
              <li>Tourists visiting Perth or Western Australia</li>
              <li>Families planning a day trip to Rottnest Island</li>
              <li>Couples or small groups looking for relaxed outdoor experiences</li>
              <li>Local residents wanting a guided island experience</li>
              <li>Visitors interested in beaches, wildlife, history, photography, and slow travel</li>
            </ul>
          </div>
          <div>
            <h3 class="title is-5">Website Goals</h3>
            <ul>
              <li>Help users understand what Rotto Rocks offers</li>
              <li>Let users browse and compare different island experiences</li>
              <li>Show tour duration, activity level, and ideal audience clearly</li>
              <li>Provide practical planning information before visiting</li>
              <li>Encourage booking enquiries and build trust</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="required-pages" class="brief-section">
        <h2 class="title is-3">Required Pages</h2>
        <div class="brief-table-wrapper">
          <table class="table is-fullwidth is-striped">
            <thead>
              <tr>
                <th>Page</th>
                <th>Purpose</th>
                <th>Suggested Sections</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="page in requiredPages" :key="page.name">
                <td><strong>{{ page.name }}</strong></td>
                <td>{{ page.purpose }}</td>
                <td>{{ page.sections }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="title is-5 mt-5">Optional Pages</h3>
        <ul>
          <li>Tour detail page for one featured experience</li>
          <li>Gallery page</li>
          <li>Frequently Asked Questions page</li>
          <li>Responsible Tourism or Sustainability page</li>
          <li>Reviews or testimonials page</li>
        </ul>
      </section>

      <section id="tour-content" class="brief-section">
        <h2 class="title is-3">Sample Tour Content</h2>
        <div class="tour-grid">
          <article v-for="tour in tours" :key="tour.name" class="tour-card">
            <p class="tour-card__type">{{ tour.type }}</p>
            <h3 class="title is-5">{{ tour.name }}</h3>
            <dl>
              <div>
                <dt>Duration</dt>
                <dd>{{ tour.duration }}</dd>
              </div>
              <div>
                <dt>Activity level</dt>
                <dd>{{ tour.level }}</dd>
              </div>
              <div>
                <dt>Best for</dt>
                <dd>{{ tour.bestFor }}</dd>
              </div>
            </dl>
            <p>{{ tour.description }}</p>
          </article>
        </div>
      </section>

      <section id="brand-direction" class="brief-section">
        <h2 class="title is-3">Brand Direction</h2>
        <p>
          The visual direction should feel connected to Rottnest Island: ocean blues, warm sand,
          weathered rock, pale sea foam, and a restrained coral sunset accent.
        </p>

        <div class="brief-palette">
          <article v-for="color in brandPalette" :key="color.name" class="brief-palette__card">
            <span
              class="brief-palette__swatch"
              :style="{ background: color.hex }"
              :aria-label="`${color.name} colour swatch`"
            ></span>
            <div>
              <h3 class="title is-6">{{ color.name }}</h3>
              <p>{{ color.use }}</p>
              <p><code>{{ color.hex }}</code></p>
            </div>
          </article>
        </div>

        <h3 class="title is-5 mt-5">Typography Suggestions</h3>
        <ul>
          <li><strong>Friendly Tourism:</strong> Montserrat headings with Open Sans body text</li>
          <li><strong>Coastal Editorial:</strong> Playfair Display headings with Source Sans 3 body text</li>
          <li><strong>Clean Modern:</strong> Poppins headings with Inter body text</li>
        </ul>
      </section>

      <section id="images" class="brief-section">
        <h2 class="title is-3">Image Direction and Search Terms</h2>
        <p>
          Use images that show real places, activities, or details a visitor would care about:
          Rottnest beaches, coastal paths, bikes, ferries, limestone rocks, quokkas, clear water,
          people walking or exploring, and sunset coastline.
        </p>
        <div class="brief-token-grid">
          <article>
            <h3 class="title is-5">Useful Search Terms</h3>
            <ul>
              <li>Rottnest Island</li>
              <li>Western Australia beach</li>
              <li>Australian island coastline</li>
              <li>cycling by the coast</li>
              <li>coastal walking trail</li>
              <li>turquoise water beach</li>
              <li>island ferry</li>
              <li>quokka</li>
              <li>beach rocks</li>
              <li>sunset beach Australia</li>
            </ul>
          </article>
          <article>
            <h3 class="title is-5">Image Requirements</h3>
            <ul>
              <li>Use meaningful alt text for informative images</li>
              <li>Use empty alt text for purely decorative images</li>
              <li>Optimise image size before adding files</li>
              <li>Keep card images in consistent ratios</li>
              <li>Avoid random stock-style images that do not support the page goal</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="components" class="brief-section">
        <h2 class="title is-3">Reusable Component Inventory</h2>
        <div class="component-grid">
          <article v-for="component in components" :key="component.name" class="component-card">
            <h3 class="title is-5">{{ component.name }}</h3>
            <p>{{ component.description }}</p>
          </article>
        </div>
      </section>

      <section id="wireframes" class="brief-section">
        <h2 class="title is-3">Suggested Wireframe Sections</h2>
        <p>
          Use these structures as the content checklist for whichever wireframe variation you choose.
          The sections may be arranged differently between Variation A and Variation B.
        </p>
        <div class="brief-table-wrapper">
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>Page</th>
                <th>Suggested Structure</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="wireframe in wireframes" :key="wireframe.page">
                <td><strong>{{ wireframe.page }}</strong></td>
                <td>{{ wireframe.sections }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="requirements" class="brief-section">
        <h2 class="title is-3">Accessibility and Responsive Requirements</h2>
        <div class="brief-two-column">
          <div>
            <h3 class="title is-5">Accessibility Requirements</h3>
            <ul>
              <li>Use semantic HTML landmarks and sections</li>
              <li>Keep heading order logical on every page</li>
              <li>Use descriptive link text and button labels</li>
              <li>Make navigation keyboard accessible</li>
              <li>Provide visible focus states</li>
              <li>Use sufficient colour contrast</li>
              <li>Write useful image alt text</li>
              <li>Connect form labels to their inputs</li>
            </ul>
          </div>
          <div>
            <h3 class="title is-5">Responsive Design Requirements</h3>
            <ul>
              <li>Single-column layouts on mobile</li>
              <li>Card grids on wider screens</li>
              <li>Navigation that adapts on smaller screens</li>
              <li>Flexible images that do not overflow</li>
              <li>Readable line lengths</li>
              <li>Adequate spacing around buttons and form fields</li>
              <li>No horizontal scrolling at common viewport widths</li>
              <li>Comfortable tap targets on mobile</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="technical-structure" class="brief-section">
        <h2 class="title is-3">Technical Structure Options</h2>
        <div class="brief-two-column">
          <article>
            <h3 class="title is-5">Option A: Static HTML and CSS</h3>
            <pre><code>rotto-rocks/
├── index.html
├── experiences.html
├── about.html
├── plan-your-visit.html
├── contact.html
├── assets/
│   ├── images/
│   └── icons/
├── css/
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   └── utilities.css
└── README.md</code></pre>
          </article>
          <article>
            <h3 class="title is-5">Option B: Vue Practice Build</h3>
            <pre><code>rotto-rocks-vue/
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   └── assets/
├── public/
└── README.md</code></pre>
            <p>
              Use the static option first unless the tutorial specifically asks students to practise
              component-based routing or Vue data rendering.
            </p>
          </article>
        </div>
      </section>

      <section id="deliverables" class="brief-section">
        <h2 class="title is-3">Student Deliverables</h2>
        <ul>
          <li>A working responsive website with at least the five required pages</li>
          <li>Consistent navigation, header, footer, section spacing, and card patterns</li>
          <li>Reusable layout classes or components where appropriate</li>
          <li>Optimised images with alt text decisions recorded</li>
          <li>A contact or booking enquiry form with accessible labels</li>
          <li>A short README explaining the project structure</li>
          <li>A short project reflection using the questions below</li>
        </ul>
      </section>

      <section id="reflection" class="brief-section">
        <h2 class="title is-3">Reflection Questions</h2>
        <ol>
          <li>What content patterns appeared across the site?</li>
          <li>Which sections became reusable components or shared classes?</li>
          <li>How did the design change between mobile and desktop?</li>
          <li>What accessibility checks did you complete?</li>
          <li>What was the most difficult layout decision?</li>
          <li>How did the project brief guide your design choices?</li>
          <li>What would you improve if this became a real client website?</li>
        </ol>
      </section>

      <section id="success-criteria" class="brief-section">
        <h2 class="title is-3">Success Criteria</h2>
        <ul>
          <li>The business and tours are clearly explained</li>
          <li>Navigation is consistent across all pages</li>
          <li>Reusable components or repeated design patterns are visible</li>
          <li>The site works well on mobile and desktop</li>
          <li>HTML is semantic and content is readable</li>
          <li>Tour information is clear and scannable</li>
          <li>There is a strong enquiry or booking pathway</li>
          <li>The visual design feels connected to Rottnest Island and coastal tourism</li>
        </ul>
      </section>

      <section id="tutorial-sequence" class="brief-section">
        <h2 class="title is-3">Suggested Multi-Part Tutorial Sequence</h2>
        <div class="scope-grid">
          <article v-for="part in tutorialSequence" :key="part.title" class="scope-card">
            <p class="scope-card__part">{{ part.part }}</p>
            <h3 class="title is-5">{{ part.title }}</h3>
            <p>{{ part.description }}</p>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import { usePageSections } from '@/composables/usePageSections';

const requiredPages = [
  {
    name: 'Home',
    purpose: 'Introduce Rotto Rocks and guide users to key experiences.',
    sections: 'Hero, short intro, featured tours, why explore with us, island highlights, testimonial, CTA.',
  },
  {
    name: 'Experiences / Tours',
    purpose: 'Present available tours in a clear, scannable layout.',
    sections: 'Intro, tour cards, tour details, comparison section, booking CTA.',
  },
  {
    name: 'About Rotto Rocks',
    purpose: 'Build trust and explain the values behind the business.',
    sections: 'Story, guide expertise, slow tourism, sustainability, small-group benefits.',
  },
  {
    name: 'Plan Your Visit',
    purpose: 'Help visitors prepare for their Rottnest Island experience.',
    sections: 'What to bring, getting there, weather, accessibility, safety, FAQs.',
  },
  {
    name: 'Contact / Booking Enquiry',
    purpose: 'Let users enquire about a tour.',
    sections: 'Contact form, booking enquiry details, phone/email, social links, ferry/location notes.',
  },
];

const tours = [
  {
    type: 'Walking tour',
    name: 'Wadjemup Highlights Walk',
    duration: '2 hours',
    level: 'Easy',
    bestFor: 'First-time visitors, families, relaxed explorers',
    description:
      "A gentle walking tour introducing visitors to Rottnest Island's beaches, history, wildlife, and iconic coastal views.",
  },
  {
    type: 'Cycling tour',
    name: 'Beaches and Bays Cycling Tour',
    duration: 'Half day',
    level: 'Moderate',
    bestFor: 'Active visitors, couples, small groups',
    description:
      "A guided cycling experience through some of the island's most beautiful bays, with plenty of stops for photos, stories, and ocean views.",
  },
  {
    type: 'Wildlife tour',
    name: 'Quokka and Coastal Discovery',
    duration: '90 minutes',
    level: 'Easy',
    bestFor: 'Families, wildlife lovers, short-stay visitors',
    description:
      'A relaxed tour focused on quokkas, coastal habitats, and responsible wildlife encounters.',
  },
  {
    type: 'Sunset tour',
    name: 'Sunset Rocks Experience',
    duration: '2.5 hours',
    level: 'Easy to moderate',
    bestFor: 'Couples, photographers, reflective travellers',
    description:
      'An evening experience designed around golden-hour views, quiet beaches, and the changing colours of the island coastline.',
  },
];

const brandPalette = [
  { name: 'Deep Ocean', use: 'Primary headings, footer, dark navigation areas.', hex: '#123C55' },
  { name: 'Coastal Blue', use: 'Links, buttons, active states, section accents.', hex: '#2A9DAD' },
  { name: 'Sand', use: 'Warm surfaces, cards, and quiet backgrounds.', hex: '#F2D6A2' },
  { name: 'Rock', use: 'Secondary text, borders, and supporting UI.', hex: '#6E777A' },
  { name: 'Sea Foam', use: 'Soft background panels and calm content sections.', hex: '#D9F1EF' },
  { name: 'Sunset Coral', use: 'Sparingly used call-to-action accent.', hex: '#E76F51' },
  { name: 'White', use: 'Main page background and high-contrast card surfaces.', hex: '#FFFFFF' },
];

const wireframeOptions = [
  {
    page: 'Home',
    a: 'Classic hero with a scannable featured tour grid.',
    b: 'Editorial split hero with a story-driven flow and horizontal tour browsing.',
  },
  {
    page: 'Experiences / Tours',
    a: 'Filter chips with a two-by-two tour grid for quick comparison.',
    b: 'Sidebar filters with detailed list cards for richer browsing.',
  },
  {
    page: 'About Rotto Rocks',
    a: 'Story-led page with values strip, founder photo, sustainability, and CTA.',
    b: 'Magazine-style layout with pull quote and alternating image/text sections.',
  },
  {
    page: 'Plan Your Visit',
    a: 'Quick-info strip, checklists, and FAQ accordion.',
    b: 'In-page navigation with longer scrollable planning sections.',
  },
  {
    page: 'Contact / Booking Enquiry',
    a: 'Form-first two-column layout with contact information beside it.',
    b: 'Friendly intro, contact method cards, and a centred enquiry form.',
  },
];

const components = [
  { name: 'Header / Navigation', description: 'Shared brand and navigation used on every page.' },
  { name: 'Hero Section', description: 'Large introductory section for the homepage and page headers.' },
  { name: 'Tour Card', description: 'Reusable card for tour name, image, duration, level, audience, and CTA.' },
  { name: 'Feature Card', description: 'Small reusable card for benefits, highlights, or planning tips.' },
  { name: 'Content Section', description: 'Consistent section shell with heading, intro text, and inner layout.' },
  { name: 'CTA Banner', description: 'Repeated booking or enquiry prompt used near the end of pages.' },
  { name: 'Contact Form Layout', description: 'Accessible form pattern with labels, helper text, and submit button.' },
  { name: 'Footer', description: 'Shared footer with practical links, contact details, and copyright.' },
];

const wireframes = [
  {
    page: 'Home',
    sections:
      'Header, hero, intro, featured experiences, why choose us, island highlights, visitor quote, CTA, footer.',
  },
  {
    page: 'Experiences',
    sections: 'Header, page intro, tour grid, comparison section, booking info, CTA, footer.',
  },
  {
    page: 'About',
    sections: 'Header, page intro, business story, guide/values section, responsible tourism, CTA, footer.',
  },
  {
    page: 'Plan Your Visit',
    sections: 'Header, page intro, what to bring, getting there, safety/weather, FAQs, CTA, footer.',
  },
  {
    page: 'Contact',
    sections: 'Header, page intro, contact form, booking details, practical contact information, footer.',
  },
];

const tutorialSequence = [
  {
    part: 'Part 1',
    title: 'Read the Brief and Plan the Site',
    description:
      'Understand the client brief, identify required pages, create a content inventory, sketch page sections, and identify repeated patterns.',
  },
  {
    part: 'Part 2',
    title: 'Build the Home Page Structure',
    description:
      'Create semantic HTML for the header, hero, cards, footer, and basic responsive CSS layout.',
  },
  {
    part: 'Part 3',
    title: 'Create the Multi-Page Site',
    description:
      'Add Experiences, About, Plan Your Visit, and Contact pages while reusing the header, footer, and shared card patterns.',
  },
  {
    part: 'Part 4',
    title: 'Refactor Reusable Components',
    description:
      'Identify repeated layout blocks and refactor cards, CTA sections, page headers, and shared CSS classes.',
  },
  {
    part: 'Part 5',
    title: 'Polish, Test, and Deploy',
    description:
      'Run accessibility checks, responsive testing, image optimisation, SEO basics, and a deployment checklist.',
  },
];

usePageSections([
  { id: 'overview', title: 'Project Overview' },
  { id: 'wireframe-options', title: 'Wireframe Options' },
  { id: 'client-brief', title: 'Client Brief' },
  { id: 'audience-goals', title: 'Audience and Goals' },
  { id: 'required-pages', title: 'Pages' },
  { id: 'tour-content', title: 'Sample Tour Content' },
  { id: 'brand-direction', title: 'Brand Direction' },
  { id: 'images', title: 'Image Direction' },
  { id: 'components', title: 'Reusable Components' },
  { id: 'wireframes', title: 'Wireframes' },
  { id: 'requirements', title: 'Requirements' },
  { id: 'technical-structure', title: 'Technical Structure' },
  { id: 'deliverables', title: 'Deliverables' },
  { id: 'reflection', title: 'Reflection' },
  { id: 'success-criteria', title: 'Success Criteria' },
  { id: 'tutorial-sequence', title: 'Tutorial Sequence' },
]);

useHead({
  title: 'Rotto Rocks Project Brief - GraphitEdge',
  meta: [
    {
      name: 'description',
      content:
        'Student-facing Rotto Rocks project specification for a guided multi-page tourism website build.',
    },
  ],
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
  background: #f8fbfb;
  border: 1px solid #cfe5e3;
  border-radius: 1rem;
  padding: 2rem;
  color: #123c55;
}

.brief-hero {
  border-bottom: 1px solid #cfe5e3;
  margin-bottom: 2rem;
  padding-bottom: 1.75rem;
}

.brief-hero__meta,
.brief-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.brief-actions--inline {
  margin-top: 1rem;
}

.brief-hero__meta {
  margin-bottom: 1rem;
}

.brief-hero__header {
  align-items: flex-start;
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
}

.brief-kicker {
  color: #2a9dad;
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
}

.brief-title,
.brief-subtitle {
  color: #123c55;
}

.brief-section + .brief-section {
  margin-top: 2rem;
}

.brief-highlight-grid,
.brief-token-grid,
.component-grid,
.scope-grid,
.tour-grid,
.brief-palette {
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

.tour-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.brief-highlight,
.brief-callout,
.brief-token-grid article,
.component-card,
.scope-card,
.tour-card,
.brief-palette__card {
  background: #ffffff;
  border: 1px solid #d8e8e6;
  border-radius: 0.85rem;
  padding: 1rem;
}

.brief-two-column {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}

.brief-callout {
  background: #fff8ec;
  border-left: 4px solid #e76f51;
}

.brief-table-wrapper {
  overflow-x: auto;
}

.tour-card__type,
.scope-card__part {
  color: #2a9dad;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  margin-bottom: 0.35rem;
  text-transform: uppercase;
}

.tour-card dl {
  display: grid;
  gap: 0.45rem;
  margin-bottom: 0.85rem;
}

.tour-card dl div {
  border-top: 1px solid #e7f1f0;
  padding-top: 0.45rem;
}

.tour-card dt {
  color: #6e777a;
  font-size: 0.82rem;
  font-weight: 700;
}

.tour-card dd {
  margin: 0;
}

.brief-palette {
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  margin-top: 1rem;
}

.brief-palette__card {
  display: flex;
  gap: 0.85rem;
}

.brief-palette__swatch {
  border: 1px solid rgba(18, 60, 85, 0.18);
  border-radius: 0.65rem;
  flex: 0 0 52px;
  height: 52px;
  width: 52px;
}

pre {
  background: #0f2e3f;
  border-radius: 0.75rem;
  color: #f8fbfb;
  overflow-x: auto;
  padding: 1rem;
}

@media (max-width: 820px) {
  .brief-shell {
    padding: 1.25rem;
  }

  .brief-hero__header,
  .brief-two-column {
    grid-template-columns: 1fr;
  }

  .brief-hero__header {
    display: block;
  }

  .brief-actions {
    margin-top: 1rem;
  }
}

@media print {
  .no-print {
    display: none !important;
  }

  .brief-shell {
    border: 0;
    padding: 0;
  }
}
</style>
