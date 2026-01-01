<template>
	<div class="container section">
		<div class="content tutorial-content">
			<!-- Breadcrumb -->
			<nav class="breadcrumb" aria-label="breadcrumbs">
				<ul>
					<li>
						<router-link to="/"
							><i class="fa-solid fa-house mr-2"></i> Home</router-link
						>
					</li>
					<li>
						<router-link to="/tutorials">Tutorials</router-link>
					</li>
					<li>
						<router-link to="/tutorials/getting-started"
							>Getting Started</router-link
						>
					</li>
					<li class="is-active">
						<a href="#" aria-current="page">How the Internet Works</a>
					</li>
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

		<!-- HUNTER ELEMENT 1: ANTICIPATORY SET -->
		<section class="anticipatory-set">
			<div class="box engagement-hook">
				<h3>🌍 Start Here: A Mind-Blowing Fact</h3>
				<p>
					You just opened this page. In less than a second, data traveled through cables under oceans, 
					bounced between satellites, passed through dozens of routers, and arrived at your screen. 
					How did that happen? More importantly, why do you need to know?
				</p>
				
				<div class="reflection-prompt">
					<strong>Quick Reflection:</strong> Think about your daily internet use...
					<ul>
						<li>When you type "google.com," how does your computer know where to go?</li>
						<li>Why does some content load instantly while other sites take forever?</li>
						<li>What makes a website "secure" with that padlock icon?</li>
					</ul>
					<p><em>Understanding the internet isn't just theory - it's the foundation for building better, faster, safer websites.</em></p>
				</div>
			</div>
		</section>

		<!-- HUNTER ELEMENT 2: OBJECTIVES & PURPOSE -->
		<section class="objectives">
			<div class="box highlight-box">
				<h3><i class="fas fa-graduation-cap"></i> Learning Objectives</h3>
				<p><strong>By the end of this lesson, you'll be able to:</strong></p>
				<ul class="objectives-list">
					<li>✓ <strong>Explain</strong> how data travels across the internet using packets and IP addresses</li>
					<li>✓ <strong>Describe</strong> the DNS lookup process and why domain names exist</li>
					<li>✓ <strong>Identify</strong> the difference between HTTP and HTTPS and when each is used</li>
					<li>✓ <strong>Understand</strong> how web servers process requests and deliver content</li>
				</ul>
				
				<div class="purpose-statement">
					<h4><i class="fas fa-lightbulb"></i> Why This Matters:</h4>
					<p>
						Every website performance issue, security vulnerability, and user experience problem 
						traceback to how the internet works. Knowing this helps you debug faster, optimize better, 
						and make smarter architectural decisions. This isn't background knowledge - it's your 
						superpower as a developer.
					</p>
				</div>
			</div>
		</section>

			<div class="image-container">
				<img
					src="/images/tutorials/getting-started/network-basics.svg"
					alt="Network Basics Diagram"
				/>
			</div>

			<h3>IP Addresses</h3>
			<p>
				Every device on the internet has a unique address, like a postal address
				for computers:
			</p>
			<ul>
				<li>IPv4: 192.168.1.1 (older, more common)</li>
				<li>
					IPv6: 2001:0db8:85a3:0000:0000:8a2e:0370:7334 (newer, more addresses)
				</li>
			</ul>

			<h3>Data Transmission</h3>
			<p>
				Information travels across the internet in small pieces called packets:
			</p>
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

		<!-- HUNTER ELEMENT 5: CHECKING FOR UNDERSTANDING #1 -->
		<section class="check-understanding">
			<div class="box checkpoint">
				<h3>⏸️ Pause & Check: Network Basics</h3>
				<p><strong>Before we continue, can you explain:</strong></p>
				<ol>
					<li>What is an IP address and why does every device need one?</li>
					<li>Why is data sent in "packets" instead of all at once?</li>
					<li>Using the postal system analogy, what would a "router" do?</li>
				</ol>
				
				<details>
					<summary class="button is-info is-light mt-3">
						<i class="fas fa-eye"></i> Check Your Answers
					</summary>
					<div class="answer-key mt-3">
						<ol>
							<li><strong>IP Address:</strong> Like a mailing address for computers. Every device needs a unique identifier so data knows where to go and where it came from.</li>
							<li><strong>Packets:</strong> Breaking data into small pieces allows for efficient routing (different packets can take different paths), error recovery (if one packet fails, just resend that piece), and sharing bandwidth (packets from many users can share the same connection).</li>
							<li><strong>Routers:</strong> Like post offices, routers receive packets, read the destination address, and forward them to the next stop on their journey to the destination.</li>
						</ol>
					</div>
				</details>
				
				<div class="self-assessment mt-4">
					<p><strong>Confidence check:</strong></p>
					<p class="confidence-scale">😕 Still fuzzy | 🤔 Making connections | 😊 Clear picture | 🎉 Could teach this!</p>
				</div>
			</div>
		</section>


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
				<img
					src="/images/tutorials/getting-started/http-https.svg"
					alt="HTTP vs HTTPS"
				/>
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
				<img
					src="/images/tutorials/getting-started/web-server.svg"
					alt="Web Server Architecture"
				/>
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

		<!-- HUNTER ELEMENT 5: CHECKING FOR UNDERSTANDING #2 -->
		<section class="check-understanding">
			<div class="box checkpoint">
				<h3>⏸️ Quick Knowledge Check</h3>
				<p><strong>Test your understanding:</strong></p>
				<div class="quiz-questions">
					<div class="question-box">
						<p><strong>Question:</strong> When you type "github.com" in your browser, what happens first?</p>
						<details>
							<summary class="button is-info is-light is-small">Show Answer</summary>
							<p class="mt-2"><strong>Answer:</strong> DNS lookup! Your computer doesn't know where "github.com" is, so it asks DNS servers to translate that domain name into an IP address (like 140.82.121.4). Only then can it make the actual HTTP request.</p>
						</details>
					</div>
					<div class="question-box mt-3">
						<p><strong>Question:</strong> Why should you use HTTPS instead of HTTP for a login form?</p>
						<details>
							<summary class="button is-info is-light is-small">Show Answer</summary>
							<p class="mt-2"><strong>Answer:</strong> HTTPS encrypts the data being sent. With HTTP, passwords travel as plain text that anyone monitoring the network can read. HTTPS ensures even if someone intercepts the packets, they can't read the password.</p>
						</details>
					</div>
				</div>
			</div>
		</section>

		<!-- HUNTER ELEMENT 6 & 7: GUIDED & INDEPENDENT PRACTICE -->
		<h2>🧑‍🏫 Hands-On Exploration</h2>

		<div class="box practice-guided">
			<h3><i class="fas fa-hands-helping"></i> Guided Practice: Explore Network Commands</h3>
			<p>Let's use command-line tools to see the internet in action!</p>
			
			<div class="steps">
				<div class="step-item">
					<h4>Step 1: Find an IP Address</h4>
					<ul>
						<li>Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux)</li>
						<li>Type: <code>ping google.com</code></li>
						<li><strong>Watch:</strong> The IP address appears in the results!</li>
					</ul>
					<div class="hint-box">
						<details>
							<summary><i class="fas fa-lightbulb"></i> 💡 What am I seeing?</summary>
							<p>The ping command shows Google's IP address (like 142.250.80.46) and how long packets take to travel there and back (measured in milliseconds).</p>
						</details>
					</div>
				</div>

				<div class="step-item">
					<h4>Step 2: Trace the Route</h4>
					<ul>
						<li>In terminal, type: <code>traceroute google.com</code> (Mac/Linux) or <code>tracert google.com</code> (Windows)</li>
						<li><strong>Watch:</strong> See every router between you and Google!</li>
					</ul>
					<div class="hint-box">
						<details>
							<summary><i class="fas fa-lightbulb"></i> 💡 Understanding the output</summary>
							<p>Each line represents a "hop" - a router your data passes through. Notice how packets might travel through your ISP, then regional networks, then Google's network. This is the internet's distributed nature in action!</p>
						</details>
					</div>
				</div>

				<div class="step-item">
					<h4>Step 3: Check Security</h4>
					<ul>
						<li>Open a browser and visit any website</li>
						<li>Click the padlock icon in the address bar</li>
						<li><strong>Explore:</strong> Certificate details, connection security, cookies</li>
					</ul>
					<div class="hint-box">
						<details>
							<summary><i class="fas fa-lightbulb"></i> 💡 What makes it secure?</summary>
							<p>The certificate proves the website is who it claims to be, and the "TLS" or "SSL" encryption means your data is scrambled so only you and the server can read it.</p>
						</details>
					</div>
				</div>
			</div>

			<div class="success-criteria">
				<h4><i class="fas fa-check-circle"></i> You're on track if you can:</h4>
				<ul>
					<li>☐ See an IP address using the ping command</li>
					<li>☐ Count how many "hops" it takes to reach a website</li>
					<li>☐ Identify whether a site uses HTTPS</li>
				</ul>
			</div>
		</div>

		<div class="box practice-independent">
			<h3>💪 Independent Challenge: Network Detective</h3>
			<p>Now apply what you've learned without hints!</p>
			
			<div class="challenge-box">
				<h4>Your Task:</h4>
				<ol>
					<li>Pick 3 different websites (e.g., social media, news site, shopping site)</li>
					<li>For each site:
						<ul>
							<li>Find the IP address using ping</li>
							<li>Count the number of hops using traceroute</li>
							<li>Check if it uses HTTPS</li>
							<li>Note how fast it responds (ping time)</li>
						</ul>
					</li>
					<li>Compare: Which site is fastest? Which has the most hops? Why might that be?</li>
				</ol>
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
							<td>Data Collection</td>
							<td>You recorded IP addresses, hop counts, and response times for all 3 sites</td>
						</tr>
						<tr>
							<td>Analysis</td>
							<td>You can explain why one site might be faster than another</td>
						</tr>
						<tr>
							<td>Security Understanding</td>
							<td>You identified which sites use HTTPS and why it matters</td>
						</tr>
					</tbody>
				</table>
			</div>
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
		<!-- HUNTER ELEMENT 8: CLOSURE -->
		<section class="closure">
			<div class="box closure-section">
				<h2><i class="fas fa-flag-checkered"></i> Lesson Complete: You Now See the Invisible</h2>
				
				<!-- Summary -->
				<div class="key-takeaways">
					<h3><i class="fas fa-star"></i> Key Takeaways:</h3>
					<ul>
						<li>The internet is a <strong>network of networks</strong> where data travels in packets between IP addresses</li>
						<li><strong>DNS is the internet's phonebook</strong> - converting memorable domain names into computer-readable IP addresses</li>
						<li><strong>HTTP transfers data</strong> while <strong>HTTPS adds encryption</strong> for security (always use HTTPS for sensitive data!)</li>
						<li>Web servers are always listening, waiting to process your requests and send back responses</li>
						<li>Every website interaction involves: DNS lookup → Connect to IP → HTTP request → Server processing → Response delivery</li>
					</ul>
				</div>
				
				<!-- Objectives Review -->
				<div class="objectives-review mt-5">
					<h3><i class="fas fa-check-double"></i> Learning Objectives Review:</h3>
					<p>Can you now:</p>
					<ul class="objectives-checklist">
						<li>✅ <strong>Explain</strong> how data travels using packets and IP addresses? <span class="has-text-success">Check!</span></li>
						<li>✅ <strong>Describe</strong> the DNS lookup process? <span class="has-text-success">Phonebook analogy!</span></li>
						<li>✅ <strong>Identify</strong> HTTP vs HTTPS differences? <span class="has-text-success">Security matters!</span></li>
						<li>✅ <strong>Understand</strong> how servers work? <span class="has-text-success">Request and respond!</span></li>
					</ul>
				</div>
				
				<!-- Real-World Application -->
				<div class="reflection-prompts mt-5">
					<h3><i class="fas fa-brain"></i> Think & Reflect:</h3>
					<div class="reflection-questions">
						<div class="question-card">
							<p><strong>🔍 Real-World Connection:</strong></p>
							<p>Next time a website loads slowly or fails, you'll know why:</p>
							<ul>
								<li>DNS lookup taking too long? The domain name system might be slow</li>
								<li>Many hops in traceroute? Your data is traveling far or through congested networks</li>
								<li>No padlock? Don't enter sensitive information!</li>
								<li>High ping times? Server might be geographically distant or overloaded</li>
							</ul>
							<p class="has-text-success"><strong>You can now diagnose network issues like a pro!</strong></p>
						</div>
						
						<div class="question-card mt-4">
							<p><strong>💭 Reflection Questions:</strong></p>
							<ul>
								<li>What surprised you most about how the internet works?</li>
								<li>How will understanding DNS help you as a web developer?</li>
								<li>Why is HTTPS more important today than ever?</li>
								<li>If you had to explain the internet to someone, what analogy would you use?</li>
							</ul>
						</div>

						<div class="question-card mt-4">
							<p><strong>🎯 Looking Ahead:</strong></p>
							<p>Now that you understand the infrastructure, you're ready to build ON it! In upcoming lessons, you'll:</p>
							<ul>
								<li>Set up your development environment</li>
								<li>Choose the right tools for web development</li>
								<li>Start writing actual HTML, CSS, and JavaScript</li>
							</ul>
							<p><em>The theory becomes practice!</em></p>
						</div>
					</div>
				</div>
			</div>
		</section>
			<!-- Navigation -->
			<TutorialNavigation />
		</div>
	</div>
</template>

<script setup>
import TutorialNavigation from '@/components/TutorialNavigation.vue';
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

/* Hunter Framework Styles */
.anticipatory-set { margin: 2rem 0; }
.engagement-hook { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 1.5rem; }
.engagement-hook h3 { color: white; margin-bottom: 1rem; }
.reflection-prompt { background: rgba(255, 255, 255, 0.1); padding: 1rem; border-radius: 8px; margin-top: 1rem; }
.reflection-prompt strong { color: #ffd700; }
.objectives { margin: 2rem 0; }
.objectives-list { list-style: none; padding-left: 0; }
.objectives-list li { padding: 0.5rem 0; padding-left: 1.5rem; position: relative; }
.purpose-statement { background: #fff9e6; padding: 1rem; border-radius: 8px; margin-top: 1rem; border-left: 4px solid #ffd700; }
.purpose-statement h4 { color: #d97706; margin-bottom: 0.5rem; }
.check-understanding { margin: 3rem 0; }
.checkpoint { background: #f0f9ff; border-left: 4px solid #3b82f6; }
.checkpoint h3 { color: #1e40af; margin-bottom: 1rem; }
.answer-key { background: white; padding: 1rem; border-radius: 4px; border: 2px solid #3b82f6; }
.answer-key ol { margin-left: 1.5rem; }
.answer-key li { margin: 0.5rem 0; }
.self-assessment { background: white; padding: 1rem; border-radius: 4px; text-align: center; }
.confidence-scale { font-size: 1.1rem; margin-top: 0.5rem; }
.question-box { background: white; padding: 1rem; border-radius: 4px; border: 1px solid #e5e7eb; }
.practice-guided { background: #f0fdf4; border-left: 4px solid #22c55e; }
.practice-guided h3 { color: #15803d; margin-bottom: 1rem; }
.step-item { background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; border: 1px solid #e5e7eb; }
.step-item h4 { color: #15803d; margin-bottom: 0.75rem; }
.hint-box { margin-top: 1rem; padding: 0.75rem; background: #fef3c7; border-radius: 4px; }
.hint-box details summary { cursor: pointer; color: #92400e; font-weight: 600; }
.hint-box details[open] { padding: 0.5rem; }
.success-criteria { background: white; padding: 1rem; border-radius: 4px; margin-top: 1.5rem; }
.success-criteria h4 { color: #15803d; margin-bottom: 0.75rem; }
.success-criteria ul { list-style: none; padding-left: 0; }
.success-criteria li { padding: 0.25rem 0; }
.practice-independent { background: #fef2f2; border-left: 4px solid #dc2626; margin-top: 2rem; }
.practice-independent h3 { color: #991b1b; margin-bottom: 1rem; }
.challenge-box { background: white; padding: 1.5rem; border-radius: 8px; margin: 1rem 0; }
.challenge-box h4 { color: #991b1b; margin-bottom: 0.75rem; }
.rubric { background: white; padding: 1.5rem; border-radius: 8px; margin-top: 1rem; }
.rubric h4 { margin-bottom: 1rem; color: #991b1b; }
.rubric table { width: 100%; margin-top: 0.5rem; }
.closure { margin: 3rem 0; }
.closure-section { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; border: none; padding: 2rem; }
.closure-section h2, .closure-section h3 { color: white; }
.key-takeaways, .objectives-review, .reflection-prompts { background: rgba(255, 255, 255, 0.1); padding: 1.5rem; border-radius: 8px; }
.key-takeaways ul, .objectives-review ul { list-style: none; padding-left: 0; }
.key-takeaways li, .objectives-checklist li { padding: 0.5rem 0; padding-left: 1.5rem; position: relative; }
.key-takeaways li:before { content: '→'; position: absolute; left: 0; color: #ffd700; font-weight: bold; }
.reflection-questions { margin-top: 1rem; }
.question-card { background: white; color: #1f2937; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #10b981; }
.question-card strong { color: #059669; }
.question-card ul, .question-card ol { margin: 0.75rem 0; margin-left: 1.5rem; }
</style>
