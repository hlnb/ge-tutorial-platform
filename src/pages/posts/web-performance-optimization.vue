<template>
	<PostVisibility :publish-date="frontmatter.date" :status="frontmatter.status">
		<div class="box container">
			<section class="hero" v-if="frontmatter">
				<div class="hero-content">
					<h1>{{ frontmatter.title }}</h1>
					<div class="meta">
						<time class="date">{{ formatDate(frontmatter.date) }}</time>
						<span class="tags" v-if="frontmatter.tags?.length">
							Tags: {{ frontmatter.tags.join(', ') }}
						</span>
					</div>
				</div>
			</section>
			<article class="content blog-post">
				<p class="lead">
					Ever wondered why some websites feel lightning-fast while others make you want to close the tab? Let's dive into the real-world impact of web performance and how you can make your site blazingly fast.
				</p>

						<h2 class="title is-1">The Business Case for Speed 📈</h2>

						<p>
							Here's a reality check: A 1-second delay in page load time leads to:
						</p>

						<ul>
							<li>7% loss in conversions</li>
							<li>11% fewer page views</li>
							<li>16% decrease in customer satisfaction</li>
						</ul>

						<p>
							Just ask Walmart—they saw a 2% increase in conversions for every second of improvement in load time. That's real money on the table.
						</p>

						<h2>Core Web Vitals: Your Performance North Star</h2>

						<p>
							Google's Core Web Vitals aren't just buzzwords. They're metrics that directly impact user experience and SEO:
						</p>

						<ul>
							<li><strong>Largest Contentful Paint (LCP)</strong>: Aim for under 2.5 seconds</li>
							<li><strong>First Input Delay (FID)</strong>: Keep it below 100ms</li>
							<li><strong>Cumulative Layout Shift (CLS)</strong>: Maintain under 0.1</li>
						</ul>

						<h3>Real World Case Study: GraphitEdge's Performance Journey</h3>

						<p>
							When I first launched GraphitEdge, our tutorial platform's LCP was sitting at 3.8 seconds—not ideal for a site teaching web development best practices! Here's how we transformed our performance:
						</p>

						<ol>
							<li>Implemented a strategic caching layer for our tutorial content</li>
							<li>Built a custom image optimization pipeline for our technical diagrams and screenshots</li>
							<li>Lazy loaded our code examples and interactive components</li>
							<li>Reduced initial JavaScript payload by 60%</li>
							<li>Leveraged Vercel's edge network and automatic asset optimization</li>
						</ol>

						<p>
							The result? Our LCP now sits comfortably at 1.6 seconds, and our tutorial completion rates have increased by 25%.
						</p>

						<h2>Let's Make Your Site Faster: Practical Steps</h2>

						<h3>1. Smart Caching Strategies 🚀</h3>

						<div class="code-block">
							<pre><code># Example Nginx caching configuration
location /static/ {
    expires 1y;
    add_header Cache-Control "public, no-transform";
}</code></pre>
						</div>

						<ul>
							<li>Set appropriate cache headers for static assets</li>
							<li>Implement browser caching</li>
							<li>Use service workers for offline functionality</li>
						</ul>

						<h3>2. Image Optimization That Works</h3>

						<p>
							Don't just compress—optimize intelligently:
						</p>

						<ul>
							<li>Use WebP with fallbacks to JPEG/PNG</li>
							<li>Implement responsive images using srcset</li>
							<li>Compress without visible quality loss</li>
							<li>Consider using a CDN with automatic image optimization</li>
						</ul>

						<div class="code-block">
							<pre><code>&lt;picture&gt;
  &lt;source srcset="image.webp" type="image/webp"&gt;
  &lt;img src="image.jpg" alt="Description" loading="lazy"&gt;
&lt;/picture&gt;</code></pre>
						</div>

						<h3>3. Lazy Loading Done Right</h3>

						<p>
							Not everything needs to load immediately. At GraphitEdge, we prioritize what users see first:
						</p>

						<ul>
							<li>Use native lazy loading for images and iframes</li>
							<li>Implement intersection observer for custom lazy loading</li>
							<li>Defer non-critical resources like syntax highlighting and interactive demos</li>
						</ul>

						<h3>4. Measuring Performance</h3>

						<p>
							You can't improve what you don't measure. Here's your toolbox:
						</p>

						<ul>
							<li><strong>Lighthouse</strong>: Your first stop for performance audits</li>
							<li><strong>WebPageTest</strong>: Detailed performance analysis</li>
							<li><strong>Chrome DevTools</strong>: Real-time performance monitoring</li>
							<li><strong>PageSpeed Insights</strong>: Mobile and desktop performance metrics</li>
						</ul>

						<h2>How We Optimize GraphitEdge</h2>

						<h3>1. Performance Monitoring</h3>

						<ul>
							<li>Custom monitoring dashboard for tutorial load times</li>
							<li>Lighthouse CI in our deployment pipeline</li>
							<li>Real-user metrics tracking for different tutorial sections</li>
							<li>Vercel Analytics for real-time performance insights</li>
						</ul>

						<h3>2. Optimization Tools</h3>

						<ul>
							<li>Custom image optimization pipeline for technical diagrams</li>
							<li>Code-splitting for tutorial modules</li>
							<li>Edge caching for static content</li>
							<li>Vercel's built-in features
								<ul>
									<li>Automatic edge caching</li>
									<li>Smart image optimization</li>
									<li>Automatic asset compression</li>
									<li>Global edge network distribution</li>
								</ul>
							</li>
						</ul>

						<h3>3. SVG Strategy</h3>

						<ul>
							<li>Inline SVGs for frequently used icons to reduce HTTP requests</li>
							<li>External SVGs for larger, less frequently used graphics</li>
							<li>SVG optimization using SVGO</li>
							<li>Responsive SVGs that scale without quality loss</li>
							<li>CSS-controlled SVG animations for better performance</li>
						</ul>

						<h2>Quick Wins You Can Implement Today</h2>

						<ol>
							<li>Enable GZIP/Brotli compression</li>
							<li>Optimize your largest images</li>
							<li>Remove unused CSS/JavaScript</li>
							<li>Implement critical CSS</li>
							<li>Use a CDN</li>
							<li>Optimize your SVGs
								<ul>
									<li>Use tools like SVGO</li>
									<li>Remove unnecessary paths and attributes</li>
									<li>Consider inlining frequently used icons</li>
									<li>Implement sprite sheets for multiple SVGs</li>
								</ul>
							</li>
						</ol>

						<h2>Measuring Success</h2>

						<p>
							Here's how to track your improvements:
						</p>

						<ol>
							<li>Take baseline measurements using Lighthouse</li>
							<li>Implement changes one at a time</li>
							<li>Monitor Core Web Vitals in Google Search Console</li>
							<li>Track real user metrics (RUM) over time</li>
						</ol>

						<p>
							Remember: Performance optimization is an ongoing process, not a one-time fix. At GraphitEdge, we're constantly monitoring and tweaking our performance to ensure the best possible learning experience for our students.
						</p>

						<h2>Need Help?</h2>

						<p>
							Want to discuss performance optimization further? Let's connect! You can find me on:
						</p>

						<ul>
							<li>Mastodon: <a href="https://mastodon.au/@hlnbee">@hlnbee</a></li>
							<li>BlueSky: <a href="https://bsky.app/profile/graphitedge-au.bsky.social">@graphitedge-au.bsky.social</a></li>
							<li>LinkedIn: <a href="https://www.linkedin.com/company/graphitedge/">graphitedge</a></li>
						</ul>

						<p>
							Share your performance challenges and wins—I love diving deep into web optimization discussions with fellow developers!
						</p>

						<div class="tags">
							<span class="tag">#WebDev</span>
							<span class="tag">#Performance</span>
							<span class="tag">#CoreWebVitals</span>
							<span class="tag">#WebPerformance</span>
						</div>

						<hr>

						<p class="comment-prompt">
							<em>What performance challenges are you facing with your website? Share in the comments below, and I'll help point you in the right direction!</em>
						</p>
				</article>
		</div>
	</PostVisibility>
	<PostNavigation :current-path="'web-performance-optimization'" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePageSections } from '@/composables/usePageSections';
import { useHead } from '@vueuse/head';
import { format } from 'date-fns';
import PostVisibility from '@/components/PostVisibility.vue';
import PostNavigation from '@/components/PostNavigation.vue';
import BlogSignup from '@/components/BlogSignup.vue';

// Define frontmatter for the post
const frontmatter = {
	title: 'Speed Matters: A Practical Guide to Web Performance Optimization',
	date: '2025-04-30',
	author: 'Helen Burgess',
	description: 'Learn practical strategies to optimize your website\'s performance, from caching to image optimization, with real-world examples and case studies.',
	tags: ['Performance', 'Web Development', 'Optimization'],
	status: 'published',
	series: 'Web Development Fundamentals',
	seriesOrder: 3,
	readingTime: '15 min',
	relatedPosts: [
		{
			title: 'Web Security Essentials: Protecting Your Site From Common Threats',
			path: '/posts/web-security-essentials',
			date: '2025-04-15'
		},
	],
	imageUrl: '/images/posts/web-performance-optimization.svg',
	excerpt: 'Discover how to make your website blazingly fast with practical optimization strategies, real-world case studies, and actionable tips you can implement today.',
	featured: true,
};

const postData = ref(frontmatter);

const formatDate = (date) => {
	return format(new Date(date), 'MMMM do, yyyy');
};

useHead({
	title: postData.value.title,
	meta: [
		{ name: 'description', content: postData.value.description },
		{ property: 'og:title', content: postData.value.title },
		{ property: 'og:description', content: postData.value.description },
		{ property: 'og:image', content: postData.value.imageUrl },
	],
});

// Initialize page sections
const { sections } = usePageSections();

onMounted(() => {
	// Add any post-specific initialization here
});
</script>

<style scoped>
.hero {
	background-image: url('/images/posts/web-performance-optimization.svg');
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

.blog-post {
	max-width: 80vw;
	margin: 0 auto;
	padding: 2rem;
}

.content {
	line-height: 1.6;
	font-size: 1.1rem;
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

.lead {
	font-size: 1.2rem;
	line-height: 1.6;
	color: #666;
	margin-bottom: 2rem;
}

p {
	margin-bottom: 1.5rem;
	line-height: 1.6;
}

ul, ol {
	margin-bottom: 1.5rem;
	padding-left: 1.5rem;
}

li {
	margin-bottom: 0.5rem;
}

.code-block {
	background: var(--color-snow);
	padding: 1.5rem;
	border-radius: 8px;
	margin: 1.5rem 0;
	overflow-x: auto;
}

.code-block pre {
	margin: 0;
}

.code-block code {
	font-family: 'Fira Code', monospace;
	font-size: 0.9rem;
}

.tags {
	margin: 2rem 0;
}

.tag {
	background: var(--color-snow);
	color: var(--color-red-berry);
	padding: 0.5rem 1rem;
	border-radius: 20px;
	margin-right: 0.5rem;
	font-size: 0.9rem;
}

.comment-prompt {
	text-align: center;
	color: #666;
	font-style: italic;
	margin-top: 2rem;
}

hr {
	border: none;
	border-top: 1px solid var(--color-snow);
	margin: 2rem 0;
}

a {
	color: var(--color-red-berry);
	text-decoration: none;
	transition: color 0.2s ease;
}

a:hover {
	color: var(--color-red-berry-dark);
	text-decoration: underline;
}

@media (max-width: 768px) {
	.hero {
		min-height: 300px;
	}

	.hero h1 {
		font-size: 1.8rem;
	}

	.blog-post {
		padding: 1rem;
	}

	h1 {
		font-size: 2rem;
	}

	h2 {
		font-size: 1.6rem;
	}

	h3 {
		font-size: 1.2rem;
	}
}
</style> 