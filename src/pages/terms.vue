<template>
	<div class="container section">
		<h1 class="title is-2">Terms and Conditions</h1>
		<div class="content">
			<p>Last updated: {{ currentDate }}</p>

			<h2>1. Agreement to Terms</h2>
			<p>
				By accessing and using GraphiteEdge (the "Website"), you agree to be
				bound by these Terms and Conditions. If you disagree with any part of
				these terms, you may not access the Website.
			</p>

			<h2>2. Intellectual Property Rights</h2>
			<p>
				All content published and made available on GraphiteEdge is our property
				and is protected by copyright laws. This includes, but is not limited
				to:
			</p>
			<ul>
				<li>Educational materials and tutorials</li>
				<li>Source code examples</li>
				<li>Images and graphics</li>
				<li>Website design and layout</li>
				<li>Written content and blog posts</li>
			</ul>

			<h2>3. User Accounts</h2>
			<p>
				When you create an account with us, you must provide accurate and
				complete information. You are responsible for maintaining the
				confidentiality of your account and password.
			</p>

			<h2>4. Acceptable Use</h2>
			<p>You agree not to:</p>
			<ul>
				<li>Copy or redistribute content without written permission</li>
				<li>Use the Website for any unlawful purpose</li>
				<li>Share your account credentials with others</li>
				<li>Attempt to gain unauthorized access to any part of the Website</li>
				<li>
					Use the Website in any way that could damage or impair its
					functionality
				</li>
			</ul>

			<h2>5. Educational Content</h2>
			<p>
				While we strive to keep all information up-to-date and accurate, web
				development technologies evolve rapidly. We make no guarantees about the
				completeness or accuracy of our tutorials and educational materials.
			</p>

			<h2>6. User-Generated Content</h2>
			<p>
				By posting comments or submitting content on our Website, you grant us a
				non-exclusive, worldwide, irrevocable license to use, reproduce, and
				publish that content.
			</p>

			<h2>7. Limitation of Liability</h2>
			<p>
				GraphiteEdge shall not be liable for any indirect, incidental, special,
				consequential, or punitive damages resulting from your use of or
				inability to use the Website.
			</p>

			<h2>8. Changes to Terms</h2>
			<p>
				We reserve the right to modify these terms at any time. We will notify
				users of any changes by updating the "Last updated" date of these terms.
			</p>

			<h2>9. Contact Information</h2>
			<p>
				For any questions about these Terms and Conditions, please contact us
				at:
			</p>
			<ul>
				<li>Email: hello@graphitedge.com.au</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
const currentDate = new Date()
	.toLocaleDateString('en-AU', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	})
	.replace(/\//g, '/');
</script>

<style>
.content h2 {
	margin-top: 2rem;
	color: var(--color-primary);
}

.content ul {
	margin-left: 2rem;
	margin-bottom: 1rem;
}

.content p {
	margin-bottom: 1rem;
}
</style>
