<template>
	<div class="tutorial-content">
		<!-- Breadcrumb Navigation -->
		<nav class="breadcrumb" aria-label="breadcrumbs">
			<ul>
				<li>
					<router-link to="/"
						><i class="fa-solid fa-house mr-2"></i> Home</router-link
					>
				</li>
				<li><router-link to="/tutorials">Tutorials</router-link></li>
				<li>
					<router-link to="/tutorials/getting-started"
						>Getting Started</router-link
					>
				</li>
				<li class="is-active">
					<a href="#" aria-current="page">Domain Hosting</a>
				</li>
			</ul>
		</nav>

		<!-- Tutorial Header with Tags and Title -->
		<div class="tutorial-header">
			<div class="tags">
				<span class="tag is-info">Getting Started</span>
				<span class="tag is-success">Beginner</span>
			</div>
			<h1 class="title is-1">Domain Names & Web Hosting</h1>
			<p class="description">
				Learn how to make your website available on the internet with domain
				names and web hosting.
			</p>
		</div>

		<section id="introduction">
			<h2 class="title is-2">Introduction</h2>
			<p>
				To make your website available on the internet, you'll need two things:
				a domain name (your website's address) and web hosting (where your
				website's files live).
			</p>
			<p>In this tutorial, you'll learn:</p>
			<ul>
				<li>What domain names and DNS are</li>
				<li>How web hosting works</li>
				<li>How to choose a domain registrar</li>
				<li>How to select a hosting provider</li>
				<li>How to connect your domain to your hosting</li>
			</ul>
		</section>

		<section id="domain-names">
			<h2 class="title is-2">Understanding Domain Names</h2>
			<p>
				A domain name is your website's address on the internet (like
				www.example.com). Think of it as your digital street address that helps
				people find your website.
			</p>

			<h3 class="title is-3">Domain Name Basics</h3>
			<ul>
				<li>Choose a memorable and relevant name</li>
				<li>Keep it short and easy to type</li>
				<li>Avoid numbers and hyphens if possible</li>
				<li>Check for trademark issues</li>
			</ul>
			<div class="notification is-info is-light">
				<p>
					<strong>🇦🇺 Australian Note:</strong> For .com.au domains, you need an
					ABN (Australian Business Number) or ACN (Australian Company Number).
					Consider .com or other TLDs if you don't have these.
				</p>
			</div>

			<h3 class="title is-3">How Domain Names Work</h3>
			<p>
				Domain names are part of the Domain Name System (DNS), which translates
				human-friendly domain names into IP addresses that computers use to
				identify each other on the network.
			</p>

			<h3 class="title is-3">Domain Name Structure</h3>
			<p>A domain name consists of two main parts:</p>
			<ul>
				<li>
					<strong>Second-level domain</strong>: The unique name you register
					(e.g., "graphitedge")
				</li>
				<li>
					<strong>Top-level domain (TLD)</strong>: The extension (.com, .org,
					.net, .com.au, etc.)
				</li>
			</ul>

			<h3 class="title is-3">Recommended Domain Registrars</h3>
			<div class="columns is-multiline">
				<div class="column is-6">
					<div class="box">
						<h4 class="title is-5">Namecheap</h4>
						<p>Affordable pricing and free WhoisGuard</p>
					</div>
				</div>
				<div class="column is-6">
					<div class="box">
						<h4 class="title is-5">Google Domains</h4>
						<p>Clean interface and good integration with Google services</p>
					</div>
				</div>
				<div class="column is-6">
					<div class="box">
						<h4 class="title is-5">VentraIP</h4>
						<p>Australian registrar, good for .au domains</p>
					</div>
				</div>
				<div class="column is-6">
					<div class="box">
						<h4 class="title is-5">GoDaddy</h4>
						<p>Wide selection of TLDs (watch for renewal prices)</p>
					</div>
				</div>
			</div>
		</section>

		<section id="web-hosting">
			<h2 class="title is-2">Web Hosting Explained</h2>
			<p>
				Web hosting is where your website's files are stored and served to
				visitors. It's a service that allows you to store your website files on
				a server that's connected to the internet 24/7, making your website
				accessible to visitors around the clock.
			</p>

			<h3 class="title is-3">Types of Web Hosting</h3>
			<div class="columns is-multiline">
				<div class="column is-6">
					<div class="box">
						<h4 class="title is-5">Shared Hosting</h4>
						<p><strong>Best for:</strong> Beginners, small websites</p>
						<p><strong>Cost:</strong> $3-10/month</p>
						<p>
							Your website shares server resources with others. Most economical
							option.
						</p>
					</div>
				</div>
				<div class="column is-6">
					<div class="box">
						<h4 class="title is-5">Static Hosting</h4>
						<p><strong>Best for:</strong> Simple websites, portfolios</p>
						<p><strong>Cost:</strong> Often free</p>
						<p>Perfect for HTML/CSS/JavaScript websites without databases.</p>
					</div>
				</div>
				<div class="column is-6">
					<div class="box">
						<h4 class="title is-5">VPS (Virtual Private Server)</h4>
						<p><strong>Best for:</strong> Growing websites, more control</p>
						<p><strong>Cost:</strong> $10-50/month</p>
						<p>Dedicated resources within a shared environment.</p>
					</div>
				</div>
				<div class="column is-6">
					<div class="box">
						<h4 class="title is-5">Dedicated Hosting</h4>
						<p><strong>Best for:</strong> High-traffic websites</p>
						<p><strong>Cost:</strong> $80-500/month</p>
						<p>An entire server dedicated to your website.</p>
					</div>
				</div>
				<div class="column is-6">
					<div class="box">
						<h4 class="title is-5">Cloud Hosting</h4>
						<p><strong>Best for:</strong> Scalable applications</p>
						<p><strong>Cost:</strong> Pay-as-you-go</p>
						<p>Resources distributed across multiple servers.</p>
					</div>
				</div>
			</div>
		</section>

		<section id="hosting-providers">
			<h2 class="title is-2">Recommended Hosting Providers</h2>

			<h3 class="title is-3">Free Options</h3>
			<div class="columns is-multiline">
				<div class="column is-6">
					<div class="box">
						<h4 class="title is-5">GitHub Pages</h4>
						<ul>
							<li>Free hosting for static sites</li>
							<li>Perfect for portfolios</li>
							<li>Free SSL certificates</li>
							<li>Easy deployment from Git</li>
						</ul>
					</div>
				</div>
				<div class="column is-6">
					<div class="box">
						<h4 class="title is-5">Netlify</h4>
						<ul>
							<li>Modern hosting platform</li>
							<li>Generous free tier</li>
							<li>Automatic deployments</li>
							<li>Great developer features</li>
						</ul>
					</div>
				</div>
				<div class="column is-6">
					<div class="box">
						<h4 class="title is-5">Vercel</h4>
						<ul>
							<li>Similar to Netlify</li>
							<li>Great for React projects</li>
							<li>Excellent performance</li>
							<li>Good developer experience</li>
						</ul>
					</div>
				</div>
			</div>

			<h3 class="title is-3">Paid Options</h3>
			<div class="columns is-multiline">
				<div class="column is-6">
					<div class="box">
						<h4 class="title is-5">DigitalOcean</h4>
						<p><strong>Starting at:</strong> $5/month</p>
						<ul>
							<li>App Platform for easy deployment</li>
							<li>Good documentation</li>
							<li>Reliable service</li>
						</ul>
					</div>
				</div>
				<div class="column is-6">
					<div class="box">
						<h4 class="title is-5">VentraIP</h4>
						<p><strong>Australian hosting</strong></p>
						<ul>
							<li>Local support</li>
							<li>Data centers in Australia</li>
							<li>Good for WordPress sites</li>
						</ul>
					</div>
				</div>
				<div class="column is-6">
					<div class="box">
						<h4 class="title is-5">SiteGround</h4>
						<p><strong>Starting at:</strong> $3.99/month</p>
						<ul>
							<li>Good performance</li>
							<li>Excellent support</li>
							<li>WordPress-friendly</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="notification is-success is-light mt-4">
				<p>
					<strong>💡 Pro Tip:</strong> For your first projects, start with
					GitHub Pages or Netlify. They're free, reliable, and provide excellent
					learning opportunities. You can always upgrade to paid hosting as your
					needs grow.
				</p>
			</div>
		</section>

		<section id="setup-process">
			<h2 class="title is-2">Connecting Domain to Hosting</h2>
			<p>Once you have your domain and hosting, you'll need to connect them:</p>
			<ol>
				<li>Log into your domain registrar</li>
				<li>Find DNS settings or nameserver settings</li>
				<li>Add your hosting provider's nameservers or DNS records</li>
				<li>Wait for DNS propagation (can take up to 48 hours)</li>
			</ol>

			<div class="notification is-warning is-light">
				<p>
					<strong>⚠️ Important:</strong> Keep your domain registration and
					hosting credentials safe. Set up two-factor authentication when
					available.
				</p>
			</div>
		</section>

		<section id="next-steps">
			<h2 class="title is-2">Next Steps</h2>
			<p>After setting up your domain and hosting:</p>
			<ul>
				<li>Set up SSL certificate (often free with Let's Encrypt)</li>
				<li>Configure email if needed</li>
				<li>Test your website on different devices</li>
				<li>Set up regular backups</li>
			</ul>
			<p class="mt-4">
				Now that you understand the basics of domain names and web hosting,
				you're ready to move on to learning HTML, the foundation of all
				websites.
			</p>
			<p>
				In the next section, we'll begin our journey into HTML basics, where
				you'll learn how to create your first web page.
			</p>
		</section>
	</div>
</template>

<script>
// Frontmatter for the tutorial
export default {
	frontmatter: {
		title: 'Domain Names & Web Hosting',
		description:
			'Learn how to make your website available on the internet with domain names and web hosting.',
		category: 'Getting Started',
		level: 'Beginner',
		order: 7,
		tags: ['domains', 'hosting', 'DNS', 'web servers', 'registrars'],
		lastUpdated: '2023-07-15',
	},
};
</script>

<script setup>
import { onMounted, inject } from 'vue';

// Get the pageSections array from the parent component
const pageSections = inject('pageSections');

// Define the sections for this tutorial
onMounted(() => {
	if (pageSections) {
		pageSections.value = [
			{
				id: 'introduction',
				title: 'Introduction',
				subsections: [],
			},
			{
				id: 'domain-names',
				title: 'Understanding Domain Names',
				subsections: [
					{ id: 'domain-name-basics', title: 'Domain Name Basics' },
					{ id: 'domain-names-how', title: 'How Domain Names Work' },
					{ id: 'domain-names-structure', title: 'Domain Name Structure' },
					{ id: 'domain-registrars', title: 'Recommended Domain Registrars' },
				],
			},
			{
				id: 'web-hosting',
				title: 'Web Hosting Explained',
				subsections: [{ id: 'hosting-types', title: 'Types of Web Hosting' }],
			},
			{
				id: 'hosting-providers',
				title: 'Recommended Hosting Providers',
				subsections: [
					{ id: 'free-options', title: 'Free Options' },
					{ id: 'paid-options', title: 'Paid Options' },
				],
			},
			{
				id: 'setup-process',
				title: 'Connecting Domain to Hosting',
				subsections: [],
			},
			{
				id: 'next-steps',
				title: 'Next Steps',
				subsections: [],
			},
		];
	}
});
</script>

<style scoped>
.tutorial-content {
	max-width: 800px;
	margin: 0 auto;
}

.tutorial-header {
	margin-bottom: 2rem;
}

.description {
	font-size: 1.25rem;
	color: #555;
	margin-top: 1rem;
}

section {
	margin-bottom: 3rem;
}

ul,
ol {
	margin-left: 1.5rem;
	margin-top: 1rem;
}

li {
	margin-bottom: 0.5rem;
}

.breadcrumb {
	margin-bottom: 2rem;
}

.notification {
	border-radius: 6px;
}

.box {
	height: 100%;
	transition: transform 0.2s ease;
}

.box:hover {
	transform: translateY(-3px);
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
</style>
