---
slug: design-to-code-pt1
title: 'Design to Code – Part 1: Breaking Down a Mockup into Sections'
date: 2025-12-30
author: Helen Burgess
description: A practical guide to breaking down a design mockup into code-ready sections for developers.
tags:
  - Design
  - HTML
  - CSS
  - Workflow
status: published
excerpt: A practical guide to breaking down a design mockup into code-ready sections for developers.
---
<template>
	   <PostVisibility :publish-date="postData.date" :status="postData.status">
		   <div class="container">
			   <section v-if="postData" class="hero">
				   <div class="hero-content">
					   <h1>{{ postData.title }}</h1>
					   <div class="meta">
						   <time class="date">{{ formatDate(postData.date) }}</time>
						   <span v-if="postData.tags && postData.tags.length" class="tags">
							   Tags: {{ postData.tags.join(', ') }}
						   </span>
					   </div>
				   </div>
			   </section>
				 <section class="section">
					 <div class="content">	
			<article class="blog-post">
				<h2><strong>Design to Code – Part 1: Breaking Down a Mockup into Sections</strong></h2>
				<p><em>"The secret to turning design into code isn't in writing perfect syntax—it's in seeing the patterns that make websites work."</em></p>
				<p>Ever opened a design file and felt your stomach drop? Maybe you're looking at a complex homepage design with animations, fancy layouts, and interactive elements—and your mind is racing with questions:</p>
				<p>"How do I even start organizing this?""What should I build first?""How do I make sure I'm not missing anything important?"</p>
				<p>You're not alone. That overwhelming feeling is something every developer faces, whether they're just starting out or have years of experience. The good news? There's a systematic way to break down any design into manageable, buildable pieces—and it's a skill you can learn.</p>
				<p>In this first post of a short series, we’re going to do something most tutorials skip over—turn a <strong>visual design mockup</strong> into something code-ready. If you’re a developer handed a JPG, PDF, or Figma link and told, “Build this,” this is your roadmap.</p>
				<p>We’re starting with the <strong>Homepage</strong> and <strong>About Page</strong> from the Amethyst mockup series.</p>

				<h2><strong>🎯 What You'll Need</strong></h2>
				<ul>
					<li><p>A design mockup (we'll use Amethyst, but you can follow along with any design)</p></li>
					<li><p>Basic understanding of HTML and CSS</p></li>
					<li><p>A code editor (VS Code, Sublime Text, or similar)</p></li>
					<li><p><img src="@/assets/images/posts/01_home.jpg" alt="amethyst home page"></p></li>
				</ul>

				<h2><strong>⚠️ Common Pitfalls to Watch For</strong></h2>
				<ul>
					<li><p><strong>Diving in too quickly</strong>: Resist the urge to start coding immediately</p></li>
					<li><p><strong>Missing mobile views</strong>: Always check if there are mobile/tablet versions of the design</p></li>
					<li><p><strong>Overlooking states</strong>: Remember to look for hover states, active states, and animations</p></li>
					<li><p><strong>Inconsistent naming</strong>: Start with a naming convention and stick to it</p></li>
					<li><p><img src="@/assets/images/posts/design-to-code-pitfalls.svg" alt="Common pitfalls in design to code"></p></li>
				</ul>

				<h2><strong>✨ Quick Wins Checklist</strong></h2>
				<p>As you work through this tutorial, you'll hit these milestone moments:</p>
				<ul>
					<li><p>⬜ Identifying all major sections of the page</p></li>
					<li><p>⬜ Spotting repeated patterns</p></li>
					<li><p>⬜ Creating your first HTML skeleton</p></li>
					<li><p>⬜ Setting up your base styles</p></li>
					<li><p><img src="@/assets/images/posts/design-to-code-checklist.svg" alt="Quick wins checklist"></p></li>
				</ul>
				<p>💡 <strong>Checkpoint</strong>: Before moving to each new section, make sure you can explain why you've grouped elements the way you have. If you can't explain it, revisit your structure.</p>

				<h2><strong>🧱 Step 1: Look at the Page as a Whole</strong></h2>
				<p>Here’s the <strong>Home Page Mockup</strong> (uploaded as 01_home.jpeg):</p>
				<p>At first glance, this page is just a tall scroll of content. But zoom out and you’ll start to see natural <strong>section breaks</strong>:</p>
				<ul>
					<li><p><strong>Hero section</strong> with headline and call to action</p></li>
					<li><p><strong>About us / Features</strong> blocks</p></li>
					<li><p><strong>Portfolio preview / “Works”</strong></p></li>
					<li><p><strong>Service icons</strong></p></li>
					<li><p><strong>Testimonials</strong></p></li>
					<li><p><strong>Stats &amp; Facts</strong></p></li>
					<li><p><strong>Team</strong> and <strong>Skills</strong></p></li>
					<li><p><strong>Pricing Tables</strong></p></li>
					<li><p><strong>Blog previews</strong></p></li>
					<li><p><strong>Contact/Footer</strong></p></li>
				</ul>
				<figure><img src="@/assets/images/posts/annotated_home.png" alt="amethyst home page"><figcaption></figcaption></figure>
				<p>Each of these is a <strong>logical unit</strong> that will become its own section in code. These sections often mirror HTML5 semantic tags like &lt;header&gt;, &lt;section&gt;, &lt;article&gt;, &lt;footer&gt;.</p>
				<p class="note">💡 <strong>Checkpoint</strong>: Can you identify at least 5 major sections in your design? Try explaining your breakdown to someone else—if they understand it, you're on the right track!</p>

				<h2><strong>🔁 Step 2: Identify Reusable Patterns</strong></h2>
				<p>Look closely at any website, and you'll start noticing the same patterns showing up again and again. This isn't lazy design—it's smart development! Here's why this matters for you:</p>
				<p>Think of these patterns like LEGO blocks. Once you build one piece well, you can reuse it anywhere:</p>
				<ul>
					<li><p><strong>Icon + Title + Text blocks</strong> → Build it once, use it in Services, Skills, and What We Do sections</p></li>
					<li><p><strong>Card Grids</strong> → Perfect it once, reuse for Works, Blog, and Team sections</p></li>
					<li><p><strong>Full-width CTA banners</strong> → Design one great banner, use it throughout</p></li>
					<li><p><strong>Testimonials / Quotes</strong> → Create one quote style, apply it everywhere</p></li>
				</ul>

				<h3>Why this makes your life easier:</h3>
				<ul>
					<li><p>🔨 Build once, use many times (less coding!)</p></li>
					<li><p>🐛 Fix bugs in one place, fixes everywhere</p></li>
					<li><p>🎨 Change styles site-wide with one update</p></li>
					<li><p>⚡ Work faster as your pattern library grows</p></li>
				</ul>
				<p>Whether you're using a framework like Vue/React or just plain HTML/CSS, organising your code into these reusable pieces will save you hours of work later. Start with simple classes or partials—you can always make them fancier as you learn more.</p>
				<p class="note">💡 <strong>Checkpoint</strong>: Look at your pattern list. For each one, can you find at least 2-3 places where it appears in the design? If not, it might not be a true pattern.</p>

				<h2><strong>🔎 Example: Breaking Down the “About Company” Page</strong></h2>
				<figure><img src="@/assets/images/posts/annotated-section-breakdown-code-ideas.png" alt="amethyst patterns"><figcaption>example of reusable patterns</figcaption></figure>
				<p>Now let’s look at 04_about_company.jpeg — the <strong>About Page</strong> mockup.</p>
				<p>This page can be broken into the following:</p>
				<ol>
					<li><p><strong>Intro Section: Who We Are</strong></p><ul><li><p>Left-aligned text block with mission/vision/goals.</p></li></ul></li>
					<li><p><strong>Cards Grid: Services</strong></p><ul><li><p>Three-column layout with title and CTA button.</p></li></ul></li>
					<li><p><strong>Team Section</strong></p><ul><li><p>3–4 team member blocks with photos, titles, and links.</p></li></ul></li>
					<li><p><strong>Skills Section</strong></p><ul><li><p>Circular progress indicators (likely svg, canvas, or CSS-only).</p></li></ul></li>
					<li><p><strong>How We Work</strong></p><ul><li><p>Icons + short text (very similar to the homepage service layout).</p></li></ul></li>
					<li><p><strong>FAQ Section</strong></p><ul><li><p>Accordion-style (requires interactive component)</p></li></ul></li>
					<li><p><strong>Stats Bar</strong></p><ul><li><p>Numbers over purple background (call to action or just credibility)</p></li></ul></li>
					<li><p><strong>Footer</strong></p></li>
				</ol>
				<p>These are not just static bits of design—they’re <strong>codeable chunks</strong>.</p>

				<h2><strong>🧩 Step 3: Sketch Out the HTML Skeleton</strong></h2>
				<p>Now comes the fun part—turning our visual sections into actual HTML structure. But before we dive into the code, let's talk about why we use specific HTML tags instead of just <code>&lt;div&gt;</code> everywhere: </p>
				<ol>
					<li><p><strong>Semantic HTML tells a story</strong>: Just like a book has chapters and paragraphs, your webpage needs a clear structure. Here's how we'll organise it:</p></li>
				</ol>
				   
				<p>When breaking down designs, thinking ahead about consistency pays off big time. Here's why it matters in the real world: </p>
				<h3>💨 Faster Development</h3>
				<ul>
					<li><p><strong>Time-saving example</strong>: Need to add a new team member? With consistent card styles, it's a 5-minute job instead of an hour of rebuilding styles</p></li>
					<li><p><strong>Quick updates</strong>: Change your brand color in one CSS variable, watch it update across 50+ components instantly</p></li>
				</ul>
				<h3>🛠️ Easier Maintenance</h3>
				<ul>
					<li><p><strong>Real scenario</strong>: Client wants all buttons rounded? With consistent components, it's one line of CSS instead of hunting through 20 different button styles</p></li>
					<li><p><strong>Bug fixing</strong>: Found a spacing issue in your card layout? Fix it once, fixes everywhere that card pattern is used</p></li>
				</ul>
				<h3>👥 Better User Experience</h3>
				<ul>
					<li><p><strong>Navigation</strong>: Users learn your interface faster when buttons, links, and cards behave consistently</p></li>
					<li><p><strong>Brand trust</strong>: Consistent design elements (like that specific shade of blue in your CTAs) build recognition and trust</p></li>
				</ul>
				<h3>📱 Responsive Design Wins</h3>
				<ul>
					<li><p><strong>Mobile-friendly</strong>: Consistent spacing units make responsive designs work smoothly across all screens</p></li>
					<li><p><strong>Performance</strong>: Reusing styles means less CSS to load, faster page speeds</p></li>
				</ul>
				<p>Start by identifying:</p>
				<ol>
					<li><p><strong>Core patterns</strong>: What elements keep showing up? (buttons, cards, spacing units)</p></li>
					<li><p><strong>Global styles</strong>: What should be consistent everywhere? (colours, typography, grid systems)</p></li>
					<li><p><strong>Component variations</strong>: Where do you need flexibility while maintaining consistency?</p></li>
				</ol>
				<p>Pro tip: Document these decisions in a simple style guide—future you will thank you!</p>
				<p class="note">💡 <strong>Checkpoint</strong>: Before moving on, create a simple style guide document listing your core patterns, global styles, and component variations. This will be your reference as you build.</p>

				<h2><strong>🛠️ What’s Next?</strong></h2>
				<p>In Part 2, we’ll take one of these sections (likely the Team or Skills area) and <strong>code it from scratch</strong>, from HTML structure to responsive CSS layout. We’ll also look at using utility classes, CSS variables, and reusable design tokens.</p>

				<h2><strong>💬 Want to Follow Along?</strong></h2>
				<p>You can download the same mockups we used here (just shout if you want a link), or follow along with your own designs.</p>
				<p></p>
				<ol class="footnotes"></ol>

				<!-- CTA Box -->
				<div class="cta-box">
					<h3>Ready to level up?</h3>
					<p>
						<i class="fas fa-envelope"></i> Join The Graphite Journal
						Newsletter for web development insights beyond just code.
					</p>
					<BlogSignup />
								 </div>
						 </article>
				 </div>
				 </section>
				 </div>
		 </PostVisibility>
		 <PostNavigation :current-path="'design-to-code'" />
	</template>

	<script>
export const frontmatter = {
  title: 'Design to Code – Part 1: Breaking Down a Mockup into Sections',
  date: '2025-09-29',
  author: 'Helen Burgess',
  image: '/images/posts/design-to-code.svg',
  description: 'A practical guide to breaking down a design mockup into code-ready sections for developers.',
  tags: ['Design', 'HTML', 'CSS', 'Workflow'],
  status: 'published',
};
</script>

<script setup>
import PostVisibility from '@/components/PostVisibility.vue';
import PostNavigation from '@/components/PostNavigation.vue';
import BlogSignup from '../../components/BlogSignup.vue';
import { ref } from 'vue';
import { useHead } from '@vueuse/head';

const postData = ref(frontmatter);

useHead({
  title: postData.value.title,
  meta: [
    { name: 'description', content: postData.value.description },
    { property: 'og:title', content: postData.value.title },
    { property: 'og:description', content: postData.value.description },
    { property: 'og:image', content: postData.value.image },
  ],
});

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
</script>
	
	<style scoped>
.blog-post {
	max-width: 80vw;
	margin: 0 auto;
	padding: 2rem;
}

.content {
	line-height: 1.6;
	font-size: 1.1rem;
}

.hero {
	background-image: url('/images/posts/design-to-code.svg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	min-height: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin-bottom: 2rem;
}

.hero::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
}

.hero-content {
	position: relative;
	z-index: 1;
	text-align: center;
	color: white;
	padding: 2rem;
	max-width: 800px;
}

.hero h1 {
	color: white;
	margin-bottom: 1rem;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.meta {
	color: white;
	margin: 1rem 0;
}

.meta .date {
	background: rgba(255, 255, 255, 0.2);
	padding: 0.25rem 0.75rem;
	border-radius: 12px;
	font-family: monospace;
	font-size: 0.9rem;
	letter-spacing: 0.02em;
}

.meta .tags {
	margin-left: 1rem;
	background: rgba(255, 255, 255, 0.2);
	padding: 0.25rem 0.75rem;
	border-radius: 12px;
}

h1 {
	font-size: 2.5rem;
	margin-bottom: 2rem;
	color: var(--color-red-berry);
}

h2 {
	font-size: 1.8rem;
	margin: 2rem 0 1rem;
	color: var(--color-mine-shaft);
}

.cta-box {
	background-color: var(--color-snow);
	border-radius: 8px;
	padding: 2rem;
	margin: 2rem 0;
	text-align: center;
}

.cta-box h3 {
	color: var(--color-red-berry);
	margin-bottom: 1rem;
}

.cta-box i {
	color: var(--color-red-berry);
	margin-right: 0.5rem;
}

@media (max-width: 768px) {
	.blog-post {
		padding: 1rem;
	}

	h1 {
		font-size: 2rem;
	}

	h2 {
		font-size: 1.5rem;
	}

	.hero {
		min-height: 300px;
	}

	.hero h1 {
		font-size: 1.8rem;
	}
}
</style>
