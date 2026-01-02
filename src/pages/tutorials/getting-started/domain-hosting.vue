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

			<!-- Anticipatory Set -->
			<section class="anticipatory-set">
				<div class="box engagement-hook">
					<h3>🎯 Start Here</h3>
					<p>You've built your website, but right now it only lives on your computer. How do you make it visible to the world?</p>
					<p>Think of it like opening a store: you need both a physical address (domain name) and a building where your products live (web hosting). Without both, customers can't find you!</p>
					
					<div class="reflection-prompt">
						<strong>Quick Reflection:</strong>
						<ul>
							<li>When you type "google.com" in your browser, what do you think happens behind the scenes?</li>
							<li>Why do some websites have extensions like .com, .org, or .com.au?</li>
						</ul>
						<p><em>By the end of this lesson, you'll know exactly how to launch your site to the world!</em></p>
					</div>
				</div>
			</section>

			<!-- Learning Objectives -->
			<section class="objectives">
				<div class="box highlight-box">
					<h3><i class="fas fa-graduation-cap"></i> Learning Objectives</h3>
					<p><strong>By the end of this lesson, you'll be able to:</strong></p>
					<ul class="objectives-list">
						<li>✓ <strong>Explain</strong> what domain names and DNS do</li>
						<li>✓ <strong>Identify</strong> different types of web hosting and their use cases</li>
						<li>✓ <strong>Choose</strong> appropriate domain registrars and hosting providers</li>
						<li>✓ <strong>Connect</strong> a domain name to a hosting service</li>
						<li>✓ <strong>Evaluate</strong> hosting options based on your project needs</li>
					</ul>
					
					<div class="purpose-statement">
						<h4><i class="fas fa-lightbulb"></i> Why This Matters:</h4>
						<p>Understanding domains and hosting is essential for launching any website. Whether you're building a personal portfolio, starting a business, or creating an app, you need to know how to make it accessible to users around the world. Making the right choices here can save you hundreds of dollars and countless hours of frustration.</p>
					</div>
				</div>
			</section>

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

		<!-- Checkpoint #1 -->
		<section class="check-understanding">
			<div class="box checkpoint">
				<h3>⏸️ Pause & Check: Domain Names</h3>
				<p><strong>Test your understanding of domain names:</strong></p>
				<ol class="checkpoint-questions">
					<li>What are the two main parts of a domain name? (Give an example)</li>
					<li>Why is DNS important for the internet?</li>
					<li>What's special about .com.au domains in Australia?</li>
				</ol>
				
				<details>
					<summary class="button is-info is-light mt-3"><i class="fas fa-eye"></i> Check Your Answers</summary>
					<div class="answer-key mt-3">
						<ol>
							<li><strong>Answer:</strong> (1) Second-level domain (e.g., "graphitedge") and (2) Top-level domain or TLD (e.g., ".com"). Together they form "graphitedge.com"</li>
							<li><strong>Answer:</strong> DNS (Domain Name System) translates human-friendly domain names like "google.com" into IP addresses that computers use to find each other on the network.</li>
							<li><strong>Answer:</strong> .com.au domains require an ABN (Australian Business Number) or ACN (Australian Company Number) to register, so they're primarily for Australian businesses and organizations.</li>
						</ol>
					</div>
				</details>
				
				<div class="self-assessment mt-4">
					<p><strong>How confident are you?</strong></p>
					<p class="confidence-scale">😕 Still confused | 🤔 Getting there | 😊 Clear now | 🎉 Could explain to someone!</p>
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

		<!-- Checkpoint #2 -->
		<section class="check-understanding">
			<div class="box checkpoint">
				<h3>⏸️ Quick Check: Hosting Types</h3>
				<p><strong>Match the hosting type to the scenario:</strong></p>
				<ol class="checkpoint-questions">
					<li>You're building a simple portfolio website with HTML/CSS. Which hosting type is best?</li>
					<li>Your website gets 100,000 visitors per day and needs maximum performance. What should you use?</li>
					<li>What's the main advantage of shared hosting?</li>
				</ol>
				
				<details>
					<summary class="button is-info is-light mt-3"><i class="fas fa-eye"></i> Check Your Answers</summary>
					<div class="answer-key mt-3">
						<ol>
							<li><strong>Answer:</strong> Static hosting (like GitHub Pages or Netlify) is perfect for simple HTML/CSS/JS sites. It's often free and very fast!</li>
							<li><strong>Answer:</strong> Dedicated hosting or Cloud hosting would be best for high-traffic sites that need dedicated resources and scalability.</li>
							<li><strong>Answer:</strong> Shared hosting is the most economical option ($3-10/month), making it great for beginners and small websites with lower traffic.</li>
						</ol>
					</div>
				</details>
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

		<!-- Guided Practice -->
		<div class="box practice-guided">
			<h2 id="setup-process" class="title is-2"><i class="fas fa-hands-helping"></i> Guided Practice: Connecting Domain to Hosting</h2>
			<p>Let's walk through the process of connecting your domain to your hosting step by step.</p>
			
			<div class="steps">
				<div class="step-item">
					<h4>Step 1: Log Into Your Domain Registrar</h4>
					<p>Access your domain registrar's dashboard (Namecheap, Google Domains, VentraIP, etc.)</p>
					<div class="hint-box">
						<details>
							<summary><i class="fas fa-lightbulb"></i> 💡 Need a hint?</summary>
							<div class="hint-content">
								<div class="hint">Keep your login credentials safe! Consider using a password manager.</div>
								<div class="hint">Look for a "Domains" or "Manage Domains" section in your account dashboard.</div>
							</div>
						</details>
					</div>
				</div>
				
				<div class="step-item">
					<h4>Step 2: Find DNS Settings</h4>
					<p>Locate the DNS settings or nameserver settings for your domain. This might be called:</p>
					<ul>
						<li>DNS Settings</li>
						<li>Nameserver Settings</li>
						<li>DNS Management</li>
						<li>Advanced DNS</li>
					</ul>
					<div class="hint-box">
						<details>
							<summary><i class="fas fa-lightbulb"></i> 💡 Need a hint?</summary>
							<div class="hint-content">
								<div class="hint">Every registrar has a slightly different interface, but DNS settings are always available somewhere in the domain management section.</div>
								<div class="hint">If you can't find it, try searching for "DNS" or "nameserver" in the help documentation.</div>
							</div>
						</details>
					</div>
				</div>
				
				<div class="step-item">
					<h4>Step 3: Add Your Hosting Provider's DNS Records</h4>
					<p>Your hosting provider will give you either:</p>
					<ul>
						<li><strong>Nameservers</strong> (e.g., ns1.example.com, ns2.example.com)</li>
						<li><strong>DNS Records</strong> (A records, CNAME records pointing to an IP address)</li>
					</ul>
					<p>Copy these from your hosting provider and paste them into your domain registrar's DNS settings.</p>
					<div class="hint-box">
						<details>
							<summary><i class="fas fa-lightbulb"></i> 💡 Need a hint?</summary>
							<div class="hint-content">
								<div class="hint">For platforms like GitHub Pages, Netlify, or Vercel, they'll provide specific DNS instructions in their documentation.</div>
								<div class="hint">Double-check you've copied the values exactly—one typo can break your connection!</div>
								<div class="hint">Most platforms provide both "www" and "non-www" (apex domain) configuration—set up both for best results.</div>
							</div>
						</details>
					</div>
				</div>
				
				<div class="step-item">
					<h4>Step 4: Wait for DNS Propagation</h4>
					<p>After saving your DNS changes, it can take anywhere from a few minutes to 48 hours for changes to propagate worldwide.</p>
					<div class="hint-box">
						<details>
							<summary><i class="fas fa-lightbulb"></i> 💡 Need a hint?</summary>
							<div class="hint-content">
								<div class="hint">Most DNS changes happen within 1-4 hours, but allow up to 48 hours to be safe.</div>
								<div class="hint">You can check DNS propagation status using tools like whatsmydns.net</div>
								<div class="hint">Be patient! This is normal and there's nothing you can do to speed it up.</div>
							</div>
						</details>
					</div>
				</div>
			</div>
			
			<div class="success-criteria">
				<h4><i class="fas fa-check-circle"></i> You're on track if:</h4>
				<ul>
					<li>☐ You can log into your domain registrar account</li>
					<li>☐ You've found the DNS settings section</li>
					<li>☐ You understand the difference between nameservers and DNS records</li>
					<li>☐ You know where to find your hosting provider's DNS information</li>
				</ul>
			</div>
			
			<div class="notification is-warning is-light mt-4">
				<p>
					<strong>⚠️ Important:</strong> Keep your domain registration and
					hosting credentials safe. Set up two-factor authentication when
					available.
				</p>
			</div>
		</div>

		<!-- Independent Practice -->
		<div class="box practice-independent">
			<h3>💪 Independent Challenge: Plan Your Launch</h3>
			<p>Now create a launch plan for your own website!</p>
			
			<div class="challenge-box">
				<h4>Your Task:</h4>
				<p>Research and document your domain and hosting choices for a real or hypothetical website project.</p>
				
				<div class="requirements mt-3">
					<h5>Requirements:</h5>
					<ul>
						<li>Choose 3 potential domain names for your project (check availability)</li>
						<li>Identify the best domain registrar for your needs and explain why</li>
						<li>Determine what type of hosting you need (shared, static, VPS, etc.)</li>
						<li>Select a hosting provider and note the cost</li>
						<li>Create a budget estimate for your first year (domain + hosting)</li>
					</ul>
				</div>
				
				<div class="stretch-goals mt-3">
					<h5>Stretch Goals (Optional):</h5>
					<ul>
						<li>Actually register a domain and set up free hosting (GitHub Pages/Netlify)</li>
						<li>Document the complete DNS setup process with screenshots</li>
						<li>Set up a custom email address with your domain</li>
						<li>Configure SSL certificate for HTTPS</li>
					</ul>
				</div>
			</div>
			
			<div class="rubric">
				<h4>Success Criteria:</h4>
				<table class="table is-bordered">
					<thead>
						<tr>
							<th>Criteria</th>
							<th>You've succeeded if...</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Research</td>
							<td>You've checked domain availability and compared registrar prices</td>
						</tr>
						<tr>
							<td>Decision Making</td>
							<td>You can justify your hosting choice based on your project requirements</td>
						</tr>
						<tr>
							<td>Budget Planning</td>
							<td>You have a realistic cost estimate and understand ongoing vs. one-time costs</td>
						</tr>
						<tr>
							<td>Understanding</td>
							<td>You can explain the connection between domains, DNS, and hosting</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<!-- Closure -->
		<section class="closure">
			<div class="box closure-section">
				<h2><i class="fas fa-flag-checkered"></i> You're Ready to Launch!</h2>
				
				<div class="key-takeaways">
					<h3><i class="fas fa-star"></i> Key Takeaways:</h3>
					<ul>
						<li>Domain names are your website's address; DNS translates them into IP addresses</li>
						<li>Web hosting stores your website files and serves them to visitors 24/7</li>
						<li>For beginners, free options like GitHub Pages and Netlify are excellent starting points</li>
						<li>Different hosting types serve different needs—choose based on your project requirements</li>
						<li>Connecting domains to hosting involves DNS configuration and waiting for propagation</li>
						<li>Always enable SSL/HTTPS and two-factor authentication for security</li>
					</ul>
				</div>
				
				<div class="objectives-review mt-5">
					<h3><i class="fas fa-check-double"></i> Learning Objectives Review:</h3>
					<p>Can you now confidently:</p>
					<ul class="objectives-checklist">
						<li>✅ Explain what domain names and DNS do <span class="has-text-success">DNS expert!</span></li>
						<li>✅ Identify different types of web hosting <span class="has-text-success">Know the options!</span></li>
						<li>✅ Choose appropriate registrars and hosting providers <span class="has-text-success">Ready to decide!</span></li>
						<li>✅ Connect a domain to hosting <span class="has-text-success">Can configure DNS!</span></li>
						<li>✅ Evaluate hosting based on project needs <span class="has-text-success">Smart choices!</span></li>
					</ul>
				</div>
				
				<div class="reflection-prompts mt-5">
					<h3><i class="fas fa-brain"></i> Think & Reflect:</h3>
					<div class="reflection-questions">
						<div class="question-card">
							<p><strong>💭 Real-World Connection:</strong></p>
							<ul>
								<li>How does understanding domains and hosting change the way you think about websites?</li>
								<li>Why might a business want to own multiple domain names?</li>
							</ul>
						</div>
						<div class="question-card">
							<p><strong>🚀 Next Steps:</strong></p>
							<p>With domains and hosting understood, you're ready to build! The next section covers HTML basics, where you'll learn to create the structure of web pages. If you've already registered a domain, you'll soon deploy your first real website to it!</p>
						</div>
					</div>
				</div>
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

/* Hunter Framework Styles */
.anticipatory-set {
	margin: 2rem 0;
}

.engagement-hook {
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
	color: white;
	border: none;
	padding: 1.5rem;
}

.engagement-hook h3 {
	color: white;
	margin-bottom: 1rem;
	font-size: 1.5rem;
	font-weight: bold;
}

.reflection-prompt {
	background: rgba(255, 255, 255, 0.1);
	padding: 1rem;
	border-radius: 8px;
	margin-top: 1rem;
}

.reflection-prompt strong {
	color: #ffd700;
	font-size: 1.1rem;
}

.reflection-prompt ul {
	margin: 0.75rem 0;
	margin-left: 1.5rem;
}

.reflection-prompt li {
	margin: 0.5rem 0;
}

.objectives {
	margin: 2rem 0;
}

.objectives-list {
	list-style: none;
	padding-left: 0;
	margin: 1rem 0;
}

.objectives-list li {
	padding: 0.75rem 0;
	padding-left: 1.5rem;
	position: relative;
	line-height: 1.6;
}

.purpose-statement {
	background: #fff9e6;
	padding: 1rem;
	border-radius: 8px;
	margin-top: 1rem;
	border-left: 4px solid #ffd700;
}

.purpose-statement h4 {
	color: #d97706;
	margin-bottom: 0.5rem;
	font-size: 1.1rem;
	font-weight: bold;
}

.purpose-statement p {
	color: #78350f;
	line-height: 1.6;
}

.check-understanding {
	margin: 3rem 0;
}

.checkpoint {
	background: #f0f9ff;
	border-left: 4px solid #3b82f6;
	padding: 1.5rem;
	border-radius: 8px;
}

.checkpoint h3 {
	color: #1e40af;
	margin-bottom: 1rem;
	font-size: 1.5rem;
	font-weight: bold;
}

.checkpoint-questions {
	margin: 1rem 0;
	margin-left: 1.5rem;
}

.checkpoint-questions li {
	margin: 0.75rem 0;
	line-height: 1.6;
}

.answer-key {
	background: white;
	padding: 1rem;
	border-radius: 4px;
	border: 2px solid #3b82f6;
}

.answer-key ol {
	margin-left: 1.5rem;
}

.answer-key li {
	margin: 0.75rem 0;
	line-height: 1.6;
}

.self-assessment {
	background: white;
	padding: 1rem;
	border-radius: 4px;
	text-align: center;
}

.confidence-scale {
	font-size: 1.1rem;
	margin-top: 0.5rem;
}

.practice-guided {
	background: #f0fdf4;
	border-left: 4px solid #22c55e;
	padding: 1.5rem;
	border-radius: 8px;
	margin: 2rem 0;
}

.practice-guided h2, .practice-guided h3 {
	color: #15803d;
	margin-bottom: 1rem;
	font-size: 1.5rem;
	font-weight: bold;
}

.practice-guided > p {
	margin-bottom: 1.5rem;
	line-height: 1.6;
}

.steps {
	margin: 1.5rem 0;
}

.step-item {
	background: white;
	padding: 1.5rem;
	border-radius: 8px;
	margin-bottom: 1.5rem;
	border: 1px solid #e5e7eb;
}

.step-item:last-child {
	margin-bottom: 0;
}

.step-item h4 {
	color: #15803d;
	margin-bottom: 0.75rem;
	font-size: 1.25rem;
	font-weight: bold;
}

.hint-box {
	margin-top: 1rem;
	padding: 0.75rem;
	background: #fef3c7;
	border-radius: 4px;
}

.hint-box details summary {
	cursor: pointer;
	color: #92400e;
	font-weight: 600;
	list-style: none;
}

.hint-box details summary::-webkit-details-marker {
	display: none;
}

.hint-box details[open] {
	padding: 0.5rem;
}

.hint-content {
	margin-top: 0.75rem;
	padding-left: 0.5rem;
}

.hint {
	margin: 0.5rem 0;
	padding: 0.5rem;
	background: white;
	border-radius: 4px;
	line-height: 1.6;
}

.success-criteria {
	background: white;
	padding: 1rem;
	border-radius: 4px;
	margin-top: 1.5rem;
	border: 2px solid #22c55e;
}

.success-criteria h4 {
	color: #15803d;
	margin-bottom: 0.75rem;
	font-size: 1.1rem;
	font-weight: bold;
}

.success-criteria ul {
	list-style: none;
	padding-left: 0;
	margin: 0;
}

.success-criteria li {
	padding: 0.25rem 0;
	padding-left: 1.5rem;
	position: relative;
}

.practice-independent {
	background: #fef2f2;
	border-left: 4px solid #dc2626;
	padding: 1.5rem;
	border-radius: 8px;
	margin: 2rem 0;
}

.practice-independent h3 {
	color: #991b1b;
	margin-bottom: 1rem;
	font-size: 1.5rem;
	font-weight: bold;
}

.practice-independent > p {
	margin-bottom: 1.5rem;
	line-height: 1.6;
}

.challenge-box {
	background: white;
	padding: 1.5rem;
	border-radius: 8px;
	margin: 1rem 0;
	border: 1px solid #fecaca;
}

.challenge-box h4, .challenge-box h5 {
	color: #991b1b;
	margin-bottom: 0.75rem;
	font-size: 1.25rem;
	font-weight: bold;
}

.challenge-box h5 {
	font-size: 1.1rem;
}

.requirements ul, .stretch-goals ul {
	margin-left: 1.5rem;
}

.requirements li, .stretch-goals li {
	margin: 0.5rem 0;
	line-height: 1.6;
}

.stretch-goals {
	padding-top: 1rem;
	border-top: 1px dashed #fca5a5;
}

.rubric {
	background: white;
	padding: 1.5rem;
	border-radius: 8px;
	margin-top: 1rem;
	border: 2px solid #dc2626;
}

.rubric h4 {
	margin-bottom: 1rem;
	color: #991b1b;
	font-size: 1.25rem;
	font-weight: bold;
}

.rubric table {
	width: 100%;
	margin-top: 0.5rem;
}

.rubric th {
	background: #fee2e2;
	color: #991b1b;
	font-weight: bold;
	padding: 0.75rem;
}

.rubric td {
	padding: 0.75rem;
	line-height: 1.6;
}

.rubric tr:nth-child(even) {
	background: #fef2f2;
}

.closure {
	margin: 3rem 0;
}

.closure-section {
	background: linear-gradient(135deg, #10b981 0%, #059669 100%);
	color: white;
	border: none;
	padding: 2rem;
	border-radius: 8px;
}

.closure-section h2, .closure-section h3 {
	color: white;
	margin-bottom: 1rem;
}

.closure-section h2 {
	font-size: 1.75rem;
	font-weight: bold;
}

.closure-section h3 {
	font-size: 1.5rem;
	font-weight: bold;
}

.key-takeaways, .objectives-review, .reflection-prompts {
	background: rgba(255, 255, 255, 0.1);
	padding: 1.5rem;
	border-radius: 8px;
}

.key-takeaways ul, .objectives-review ul {
	list-style: none;
	padding-left: 0;
	margin: 1rem 0;
}

.key-takeaways li, .objectives-checklist li {
	padding: 0.5rem 0;
	padding-left: 1.5rem;
	position: relative;
	line-height: 1.6;
}

.key-takeaways li:before {
	content: '→';
	position: absolute;
	left: 0;
	color: #ffd700;
	font-weight: bold;
	font-size: 1.2rem;
}

.objectives-review p {
	margin: 0.5rem 0;
	line-height: 1.6;
}

.reflection-questions {
	margin-top: 1rem;
}

.question-card {
	background: white;
	color: #1f2937;
	padding: 1.5rem;
	border-radius: 8px;
	border-left: 4px solid #10b981;
	margin-bottom: 1rem;
}

.question-card:last-child {
	margin-bottom: 0;
}

.question-card strong {
	color: #059669;
	font-size: 1.1rem;
}

.question-card ul, .question-card ol {
	margin: 0.75rem 0;
	margin-left: 1.5rem;
}

.question-card li {
	margin: 0.5rem 0;
	line-height: 1.6;
}

.question-card p {
	line-height: 1.6;
}
</style>
