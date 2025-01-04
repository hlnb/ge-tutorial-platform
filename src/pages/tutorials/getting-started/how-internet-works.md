<template>
  <MainLayout>
    <div class="container section">
      <div class="content tutorial-content">
        <!-- Breadcrumb -->
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><router-link to="/tutorials">Tutorials</router-link></li>
            <li><router-link to="/tutorials/getting-started">Getting Started</router-link></li>
            <li class="is-active"><a href="#" aria-current="page">How the Internet Works</a></li>
          </ul>
        </nav>

        <!-- Tutorial Metadata -->
        <div class="tutorial-meta">
          <div class="tags">
            <span class="tag is-info">Beginner</span>
            <span class="tag is-light">45 minutes</span>
            <span class="tag is-light">Networking</span>
            <span class="tag is-light">Theory</span>
          </div>
        </div>

        <h1>How the Internet Works</h1>

        <p>Before diving into web development, it's essential to understand how the internet functions. This knowledge will help you make better decisions when building websites.</p>

        <div class="box highlight-box">
          <strong>In this lesson, you'll learn:</strong>
          <ul>
            <li>Basic network concepts and infrastructure</li>
            <li>How DNS converts domain names to IP addresses</li>
            <li>HTTP/HTTPS protocols and security</li>
            <li>How web servers handle requests</li>
          </ul>
        </div>

        <h2>Basic Network Concepts</h2>

        <div class="image-container">
          <img src="/images/tutorials/getting-started/network-basics.svg" alt="Network Basics Diagram" />
        </div>

        <h3>IP Addresses</h3>
        <p>Every device on the internet has a unique address, like a postal address for computers:</p>
        <ul>
          <li>IPv4: 192.168.1.1 (older, more common)</li>
          <li>IPv6: 2001:0db8:85a3:0000:0000:8a2e:0370:7334 (newer, more addresses)</li>
        </ul>

        <h3>Data Transmission</h3>
        <p>Information travels across the internet in small pieces called packets:</p>
        <ul>
          <li>Data is split into small packets</li>
          <li>Each packet finds its own route</li>
          <li>Packets are reassembled at destination</li>
        </ul>

        <div class="box analogy-box">
          <strong>Think of it like mail:</strong>
          <ul>
            <li>IP Address = Postal Address</li>
            <li>Packets = Individual Letters</li>
            <li>Routers = Post Offices</li>
            <li>Internet = Postal System</li>
          </ul>
        </div>

        <h2>Domain Name System (DNS)</h2>

        <div class="image-container">
          <img src="/images/tutorials/getting-started/dns-lookup.svg" alt="DNS Lookup Process" />
        </div>

        <p>DNS converts human-readable domain names into IP addresses:</p>

        <h3>DNS Hierarchy</h3>
        <ul>
          <li>Root Servers (.)</li>
          <li>Top-Level Domains (.com, .org, .net)</li>
          <li>Second-Level Domains (example.com)</li>
          <li>Subdomains (blog.example.com)</li>
        </ul>

        <h3>Common DNS Record Types</h3>
        <ul>
          <li><strong>A Record:</strong> Points domain to IPv4 address</li>
          <li><strong>AAAA Record:</strong> Points domain to IPv6 address</li>
          <li><strong>CNAME:</strong> Creates domain alias</li>
          <li><strong>MX:</strong> Directs email</li>
        </ul>

        <h2>HTTP and HTTPS</h2>

        <div class="image-container">
          <img src="/images/tutorials/getting-started/http-https.svg" alt="HTTP vs HTTPS" />
        </div>

        <h3>HTTP Methods</h3>
        <ul>
          <li><strong>GET:</strong> Request data</li>
          <li><strong>POST:</strong> Submit data</li>
          <li><strong>PUT:</strong> Update data</li>
          <li><strong>DELETE:</strong> Remove data</li>
        </ul>

        <h3>HTTPS Security</h3>
        <ul>
          <li>Encrypts data transmission</li>
          <li>Verifies website identity</li>
          <li>Required for sensitive data</li>
          <li>Better search engine ranking</li>
        </ul>

        <h2>Web Servers</h2>

        <div class="image-container">
          <img src="/images/tutorials/getting-started/web-server.svg" alt="Web Server Architecture" />
        </div>

        <h3>Types of Web Servers</h3>
        <ul>
          <li><strong>Apache:</strong> Most popular, versatile</li>
          <li><strong>Nginx:</strong> Fast, good for static content</li>
          <li><strong>IIS:</strong> Windows servers</li>
        </ul>

        <h3>Server Roles</h3>
        <ul>
          <li>Process incoming requests</li>
          <li>Execute server-side code</li>
          <li>Manage security</li>
          <li>Handle multiple users</li>
        </ul>

        <div class="box practice-box">
          <strong>Try It Yourself:</strong>
          <ol>
            <li>Open your terminal</li>
            <li>Use <code>ping google.com</code> to see IP addresses</li>
            <li>Use <code>traceroute google.com</code> to see network path</li>
            <li>Check website security in browser (look for padlock)</li>
          </ol>
        </div>

        <h2>Common Terms</h2>
        <dl class="terms-list">
          <dt>IP Address</dt>
          <dd>Unique identifier for devices on a network</dd>
          <dt>DNS</dt>
          <dd>System that converts domain names to IP addresses</dd>
          <dt>HTTP</dt>
          <dd>Protocol for transferring web content</dd>
          <dt>HTTPS</dt>
          <dd>Secure version of HTTP using encryption</dd>
          <dt>SSL/TLS</dt>
          <dd>Security protocols for encrypted communication</dd>
        </dl>

        <!-- Navigation -->
        <div class="tutorial-navigation">
          <router-link to="/tutorials/getting-started" class="button is-light">
            ← Getting Started
          </router-link>
          <router-link to="/tutorials/getting-started/web-basics" class="button is-primary">
            Web Basics →
          </router-link>
        </div>
      </div>
    </div>

  </MainLayout>
</template>

<script setup>
import MainLayout from '../../../components/MainLayout.vue'
</script>

<style scoped>
.tutorial-content {
  max-width: 800px;
  margin: 0 auto;
}

.tutorial-meta {
  margin: 2rem 0;
}

.image-container {
  margin: 2rem 0;
  text-align: center;
}

.image-container img {
  max-width: 100%;
  height: auto;
}

.box.highlight-box {
  background-color: #f5f5f5;
}

.box.analogy-box {
  background-color: #f0f7ff;
}

.box.practice-box {
  background-color: #f0fff4;
}

.terms-list dt {
  font-weight: bold;
  margin-top: 1rem;
}

.terms-list dd {
  margin-left: 1rem;
}

.tutorial-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}
</style>
