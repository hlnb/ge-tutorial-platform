<template>

    <div class="container section">
      <div class="content tutorial-content">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><router-link to="/tutorials">Tutorials</router-link></li>
            <li><router-link to="/tutorials/getting-started">Getting Started</router-link></li>
            <li class="is-active"><a href="#" aria-current="page">Domain Names & Hosting</a></li>
          </ul>
        </nav>

        <div class="tutorial-meta mb-6">
          <div class="tags">
            <span class="tag is-info">Beginner</span>
            <span class="tag is-light">45 minutes</span>
            <span class="tag is-light">Hosting</span>
            <span class="tag is-light">Domains</span>
          </div>
        </div>

        <h1 class="title is-1">Domain Names & Web Hosting</h1>

        <p class="mb-5">To make your website available on the internet, you'll need two things: a domain name (your website's address) and web hosting (where your website's files live).</p>

        <div class="box has-background-light mb-6">
          <strong>In this tutorial, you'll learn:</strong>
          <ul>
            <li>What domain names and DNS are</li>
            <li>How web hosting works</li>
            <li>How to choose a domain registrar</li>
            <li>How to select a hosting provider</li>
            <li>How to connect your domain to your hosting</li>
          </ul>
        </div>

        <h2 class="title is-3">Understanding Domain Names</h2>

        <p>A domain name is your website's address on the internet (like www.example.com). Think of it as your digital street address that helps people find your website.</p>

        <h3 class="title is-4">Domain Name Basics</h3>
        <ul class="mb-5">
          <li>Choose a memorable and relevant name</li>
          <li>Keep it short and easy to type</li>
          <li>Avoid numbers and hyphens if possible</li>
          <li>Check for trademark issues</li>
        </ul>

        <div class="box box-info mb-6">
          <p>
            <strong>🇦🇺 Australian Note:</strong> For .com.au domains, you need an ABN (Australian Business Number) or ACN (Australian Company Number). Consider .com or other TLDs if you don't have these.
          </p>
        </div>

        <h3 class="title is-4">Recommended Domain Registrars</h3>
        <div class="box mb-6">
          <ul>
            <li><strong>Namecheap</strong> - Affordable pricing and free WhoisGuard</li>
            <li><strong>Google Domains</strong> - Clean interface and good integration with Google services</li>
            <li><strong>VentraIP</strong> - Australian registrar, good for .au domains</li>
            <li><strong>GoDaddy</strong> - Wide selection of TLDs (watch for renewal prices)</li>
          </ul>
        </div>

        <h2 class="title is-3">Web Hosting Explained</h2>

        <p>Web hosting is where your website's files are stored and served to visitors. Different types of hosting suit different needs:</p>

        <div class="columns mb-6">
          <div class="column">
            <div class="box">
              <h4 class="title is-5">Shared Hosting</h4>
              <p><strong>Best for:</strong> Beginners, small websites</p>
              <p><strong>Cost:</strong> $3-10/month</p>
              <p>Your website shares server resources with others. Most economical option.</p>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <h4 class="title is-5">Static Hosting</h4>
              <p><strong>Best for:</strong> Simple websites, portfolios</p>
              <p><strong>Cost:</strong> Often free</p>
              <p>Perfect for HTML/CSS/JavaScript websites without databases.</p>
            </div>
          </div>
        </div>

        <h3 class="title is-4">Recommended Hosting Providers</h3>

        <h4 class="title is-5">Free Options:</h4>
        <div class="box mb-5">
          <ul>
            <li><strong>GitHub Pages</strong> - Free hosting for static sites
              <ul>
                <li>Perfect for portfolios</li>
                <li>Free SSL certificates</li>
                <li>Easy deployment from Git</li>
              </ul>
            </li>
            <li><strong>Netlify</strong> - Modern hosting platform
              <ul>
                <li>Generous free tier</li>
                <li>Automatic deployments</li>
                <li>Great developer features</li>
              </ul>
            </li>
            <li><strong>Vercel</strong> - Similar to Netlify
              <ul>
                <li>Great for React projects</li>
                <li>Excellent performance</li>
                <li>Good developer experience</li>
              </ul>
            </li>
        </ul>
        </div>

        <h4 class="title is-5">Paid Options:</h4>
        <div class="box mb-6">
          <ul>
            <li><strong>DigitalOcean</strong> - $5/month starting
              <ul>
                <li>App Platform for easy deployment</li>
                <li>Good documentation</li>
                <li>Reliable service</li>
              </ul>
            </li>
            <li><strong>VentraIP</strong> - Australian hosting
              <ul>
                <li>Local support</li>
                <li>Data centers in Australia</li>
                <li>Good for WordPress sites</li>
              </ul>
            </li>
            <li><strong>SiteGround</strong> - $3.99/month starting
              <ul>
                <li>Good performance</li>
                <li>Excellent support</li>
                <li>WordPress-friendly</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="box box-info mb-6">
          <p>
            <strong>💡 Pro Tip:</strong> For your first projects, start with GitHub Pages or Netlify. They're free, reliable, and provide excellent learning opportunities. You can always upgrade to paid hosting as your needs grow.
          </p>
        </div>

        <h2 class="title is-3">Connecting Domain to Hosting</h2>

        <p>Once you have your domain and hosting, you'll need to connect them:</p>

        <ol class="mb-6">
          <li>Log into your domain registrar</li>
          <li>Find DNS settings or nameserver settings</li>
          <li>Add your hosting provider's nameservers or DNS records</li>
          <li>Wait for DNS propagation (can take up to 48 hours)</li>
        </ol>

        <div class="box has-background-warning-light mb-6">
          <p>
            <strong>⚠️ Important:</strong> Keep your domain registration and hosting credentials safe. Set up two-factor authentication when available.
          </p>
        </div>

        <h2 class="title is-3">Next Steps</h2>

        <p>After setting up your domain and hosting:</p>
        <ul class="mb-6">
          <li>Set up SSL certificate (often free with Let's Encrypt)</li>
          <li>Configure email if needed</li>
          <li>Test your website on different devices</li>
          <li>Set up regular backups</li>
        </ul>

        <!-- Navigation -->
        <TutorialNavigation />
      </div>
    </div>


</template>

<script setup>
import TutorialNavigation from '@/components/TutorialNavigation.vue';
import '@/assets/styles/tutorials.css';
</script>
