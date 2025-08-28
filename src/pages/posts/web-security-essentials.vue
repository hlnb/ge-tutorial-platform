<template>
	<PostVisibility :publish-date="frontmatter.date" :status="frontmatter.status">
		<div class="box container">
			<section v-if="frontmatter" class="hero">
				<div class="hero-content">
					<h1>{{ frontmatter.title }}</h1>
					<div class="meta">
						<time class="date">{{ formatDate(frontmatter.date) }}</time>
						<span v-if="frontmatter.tags?.length" class="tags">
							Tags: {{ frontmatter.tags.join(', ') }}
						</span>
					</div>
				</div>
			</section>
	
			<article class=" content blog-post">
						<p class="lead">
							Ever noticed that little padlock icon in your browser? It's not just decoration—it's your first clue about a website's security. Whether you're a new developer or a business owner managing your site, understanding web security doesn't have to be overwhelming. Let's break it down together into practical, actionable steps.
						</p>

						<h2>Why Web Security Matters 🔐</h2>

						<p>
							Picture this: You've invested time and money into your website. The design looks great, everything works perfectly—but without proper security measures, it's like leaving your front door wide open. In 2023 alone, over 40% of cyber attacks targeted small businesses, often through basic security oversights. The scary part? Most of these attacks could have been prevented with simple precautions.
						</p>

						<p>
							The good news? Most common web vulnerabilities can be addressed with straightforward solutions that don't require advanced technical knowledge.
						</p>

						<h2>SSL/TLS: Your Website's First Line of Defense</h2>

						<p>
							Remember that padlock icon I mentioned? That's SSL/TLS in action. Think of it as an encrypted tunnel between your website and its visitors. Here's what you need to know:
						</p>

						<ul>
							<li><strong>SSL (Secure Sockets Layer)</strong> and its modern version <strong>TLS (Transport Layer Security)</strong> encrypt data traveling between the server and user</li>
							<li>They prevent attackers from "listening in" on sensitive information like passwords or credit card details</li>
							<li>Google actually ranks secure (HTTPS) websites higher in search results</li>
						</ul>

						<div class="callout">
							<h3>Quick Win</h3>
							<p>Get a free SSL certificate from Let's Encrypt and ensure your hosting provider enables HTTPS by default. Most modern hosting platforms like Netlify, Vercel, and AWS automatically provide this protection.</p>
						</div>

						<h2>Security Headers: Setting Clear Rules for Your Website</h2>

						<p>
							Security headers are like a security guard's rulebook—they tell browsers how to handle your website's content. Here are the essential ones:
						</p>

						<ul>
							<li><strong>Content-Security-Policy (CSP):</strong> Controls which resources can load on your page</li>
							<li><strong>X-Frame-Options:</strong> Prevents clickjacking attacks where malicious sites embed your site in hidden frames</li>
							<li><strong>X-Content-Type-Options:</strong> Stops browsers from guessing file types, preventing MIME-type confusion attacks</li>
							<li><strong>Strict-Transport-Security (HSTS):</strong> Forces HTTPS connections, even if users type "http://"</li>
						</ul>

						<div class="callout">
							<h3>Real-World Example</h3>
							<p>In our Rotto Rocks project, we implemented these headers and saw our <a href="http://SecurityHeaders.com">SecurityHeaders.com</a> score jump from D to A+, significantly improving our site's security posture with just a few lines of configuration code.</p>
						</div>

						<h2>XSS Prevention: Don't Trust User Input</h2>

						<p>
							Cross-Site Scripting (XSS) is like letting someone slip a malicious note into your website's guestbook. When that "note" contains JavaScript, it can steal user data or take over accounts. Here's how to prevent it:
						</p>

						<ul>
							<li>Always sanitize user input using libraries like DOMPurify</li>
							<li>Use framework escape functions (Vue.js, React, and Angular do this automatically for most cases!)</li>
							<li>Implement Content Security Policy headers to restrict script execution</li>
							<li>Validate input on both client and server sides (never trust client-side validation alone)</li>
						</ul>

						<h2>The Top 10 Security Risks You Need to Know About</h2>

						<p>
							Let's look at the most common security risks (as identified by security experts at OWASP) and, more importantly, how to protect against them. I've ranked these based on what typically matters most for small to medium websites
						</p>

						<div class="security-risks">
							<div class="risk-item">
								<h3>1. Broken Access Control</h3>
								<p>When users can access areas or functions they shouldn't</p>
								<ul>
									<li><strong>Solution:</strong> Implement proper authorization checks on all protected resources</li>
									<li>Deny access by default and require explicit permissions</li>
									<li>Use role-based access control (RBAC) with principle of least privilege</li>
									<li>Disable directory listing on your web server</li>
									<li>Log and alert on access control failures</li>
								</ul>
							</div>

							<div class="risk-item">
								<h3>2. Cryptographic Failures</h3>
								<p>Poor encryption implementation or using outdated algorithms</p>
								<ul>
									<li><strong>Solution:</strong> Use up-to-date, strong encryption algorithms (AES-256, RSA-2048+)</li>
									<li>Store sensitive data encrypted at rest, not just in transit</li>
									<li>Never store passwords in plain text; use secure hashing algorithms (bcrypt, Argon2)</li>
									<li>Disable outdated protocols (TLS 1.0, TLS 1.1) and weak cipher suites</li>
									<li>Keep encryption keys secure and rotate them regularly</li>
								</ul>
							</div>

							<!-- Add remaining risks similarly -->
						</div>

						<h2>Your "Get It Done" Security Checklist 📋</h2>

						<p>
							Let's turn all this information into action. Here's your step-by-step security checklist (I've marked the most crucial items with 🔥):
						</p>

						<div class="checklist">
							<ul>
								<li class="critical">🔥 Enable HTTPS (that padlock icon we talked about!)</li>
								<li class="critical">🔥 Keep your website's software updated (WordPress, plugins, everything!)</li>
								<li class="critical">🔥 Use strong passwords and two-factor authentication</li>
								<li>✅ Set up automated backups</li>
								<li>✅ Add security headers (we'll show you how)</li>
								<li>✅ Clean up any forms on your site to prevent attacks</li>
								<li>✅ Choose a hosting provider with good security features</li>
								<li>✅ Set up basic security monitoring</li>
								<li>✅ Regular security check-ups (mark your calendar!)</li>
								<li>✅ Document your security measures</li>
							</ul>
						</div>

						<h2>Beyond the Basics</h2>

						<p>
							Think of web security like maintaining a car—it needs regular check-ups, not just a one-time fix. Start with the basics we've covered here, and build up your security knowledge over time. You don't need to do everything at once!
						</p>

						<p>
							In our next tutorials, we'll dive deeper into implementing these security measures in the Rotto Rocks project, showing you exactly how to:
						</p>

						<ul>
							<li>Set up SSL certificates with automatic renewal</li>
							<li>Configure security headers in different environments (Apache, Nginx, serverless)</li>
							<li>Implement input validation with practical code examples</li>
							<li>Create secure contact forms that resist spam and attacks</li>
							<li>Monitor for security issues using free and paid tools</li>
						</ul>

						<h2>Need Help?</h2>

						<p>
							Feeling overwhelmed? That's normal! Security can seem complex at first, but taking it step by step makes it manageable. Start with the checklist above, and remember: good security doesn't have to be complicated—it just needs to be consistent.
						</p>

						<p>
							Want to learn more? Check out our <router-link to="/tutorials">hands-on tutorial</router-link> where we secure the Rotto Rocks website from the ground up, or join our <router-link to="/community">community</router-link> to discuss security best practices with other developers.
						</p>

						<p class="conclusion">
							Remember: The most secure website is one that's regularly maintained and monitored. Let's make web security clearer, together! 🚀
						</p>

						<hr>

						<p class="comment-prompt">
							<em>What security challenge are you facing with your website? Share in the comments below, and I'll help point you in the right direction!</em>
						</p>
					</article>
				</div>
	</PostVisibility>
	<PostNavigation :current-path="'web-security-essentials'" />
</template>

<script>

// Define frontmatter for the post
export const frontmatter = {
	title: 'Web Security Essentials: Protecting Your Site From Common Threats',
	date: '2024-04-15',
	author: 'Helen Burgess',
	description: 'Learn essential web security practices to protect your website from common threats. From SSL/TLS to security headers, we cover everything you need to know.',
	tags: ['Security', 'Web Development', 'Best Practices'],
	status: 'published',
	series: 'Web Development Fundamentals',
	seriesOrder: 2,
	readingTime: '12 min',
	relatedPosts: [
		{
			title: 'Speed Matters: A Practical Guide to Web Performance Optimization',
			path: '/posts/web-performance-optimization',
			date: '2024-04-30'
		},

	],
	imageUrl: '/images/posts/web-security-essentials.svg',
	excerpt: 'Learn how to protect your website from common security threats with practical, actionable steps that don\'t require advanced technical knowledge.',
	featured: true,
};
const formatDate = (date) =>
{
	return format(new Date(date),'MMMM do, yyyy');
};
</script>
<script setup>
import { ref, onMounted } from 'vue';
import { usePageSections } from '@/composables/usePageSections';
import { useHead } from '@vueuse/head';
import { format } from 'date-fns';
import PostVisibility from '@/components/PostVisibility.vue';
import PostNavigation from '@/components/PostNavigation.vue';
import BlogSignup from '@/components/BlogSignup.vue';

const postData = ref(frontmatter);



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
	background-image: url('/images/posts/web-security-essentials.svg');
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

ul {
	margin-bottom: 1.5rem;
	padding-left: 1.5rem;
}

li {
	margin-bottom: 0.5rem;
}

.callout {
	background: var(--color-snow);
	border-left: 4px solid var(--color-red-berry);
	padding: 1.5rem;
	margin: 2rem 0;
	border-radius: 0 4px 4px 0;
}

.callout h3 {
	margin-top: 0;
	color: var(--color-red-berry);
}

.security-risks {
	display: grid;
	gap: 2rem;
	margin: 2rem 0;
}

.risk-item {
	background: var(--color-snow);
	padding: 1.5rem;
	border-radius: 8px;
}

.checklist ul {
	list-style: none;
	padding-left: 0;
}

.checklist li {
	margin-bottom: 1rem;
	padding-left: 2rem;
	position: relative;
}

.checklist li.critical {
	color: var(--color-red-berry);
	font-weight: 500;
}

.conclusion {
	font-size: 1.2rem;
	font-weight: 500;
	margin: 2rem 0;
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