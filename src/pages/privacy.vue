<template>
	<MainLayout>
		<div class="container section">
			<h1 class="title is-2">Privacy Policy</h1>
			<div class="content">
				<p>Last updated: {{ currentDate }}</p>

				<h2>Introduction</h2>
				<p>
					This Privacy Policy explains how we collect, use, and protect your
					personal information when you visit our website.
				</p>

				<h2>Information We Collect</h2>
				<p>
					We collect information that you voluntarily provide to us when you:
				</p>
				<ul>
					<li>Create an account or sign in using social authentication</li>
					<li>Use our learning platform and track your progress</li>
					<li>Connect using third-party services (such as GitHub)</li>
					<li>Contact us through forms</li>
					<li>Subscribe to our newsletter</li>
					<li>Leave comments</li>
				</ul>

				<h2>Authentication and Social Login</h2>
				<p>
					We offer social authentication options to simplify the login process.
					When you choose to sign in using a third-party service (such as GitHub
					or other social media platforms), we may collect:
				</p>
				<ul>
					<li>Your name and email address</li>
					<li>Profile picture (if available)</li>
					<li>A unique identifier associated with your social account</li>
				</ul>
				<p>
					We only request access to the minimum necessary information to create
					and maintain your account.
				</p>

				<h2>Learning Progress Data</h2>
				<p>To provide you with a continuous learning experience, we store:</p>
				<ul>
					<li>Your progress through learning materials</li>
					<li>Completion status of courses and modules</li>
					<li>Learning preferences and settings</li>
					<li>Time spent on different sections</li>
				</ul>
				<p>
					This information is used solely to enhance your learning experience
					and track your progress.
				</p>

				<h2>How We Use Your Information</h2>
				<p>The information we collect may be used to:</p>
				<ul>
					<li>Respond to your inquiries</li>
					<li>Send you requested information or newsletters</li>
					<li>Improve our website and services</li>
					<li>Comply with legal obligations</li>
				</ul>

				<h2>Analytics and Data Collection</h2>
				<p>
					We use Vercel Analytics to understand website traffic and usage
					patterns. This analytics service is privacy-focused and does not use
					cookies for tracking. The collected data is anonymized and includes:
				</p>
				<ul>
					<li>Page views</li>
					<li>Visit duration</li>
					<li>Referral sources</li>
					<li>General location data (country level)</li>
				</ul>

				<h2>Cookies</h2>
				<p>
					Our website does not use cookies for analytics tracking. Any essential
					cookies that may be used are strictly necessary for the website to
					function properly.
				</p>

				<h2>Third-Party Services</h2>
				<p>
					We may use third-party services that collect, monitor, and analyze
					website usage.
				</p>

				<h2>Data Security</h2>
				<p>
					We implement appropriate security measures to protect your personal
					information. However, no method of transmission over the internet is
					100% secure.
				</p>

				<h2>Data Retention</h2>
				<p>
					We retain your account information and learning progress for as long
					as you maintain an active account. You can request deletion of your
					account and associated data at any time. Some information may be
					retained for legal or administrative purposes even after account
					deletion.
				</p>

				<h2>Changes to This Policy</h2>
				<p>
					We may update our Privacy Policy from time to time. We will notify you
					of any changes by posting the new Privacy Policy on this page.
				</p>

				<h2>Contact Us</h2>
				<p>
					If you have any questions about this Privacy Policy, please contact
					us.
				</p>
			</div>
		</div>
	</MainLayout>
</template>

<script setup>
import MainLayout from '../components/MainLayout.vue';
import { formatDate } from '../utils/dateFormatter';

const currentDate = formatDate(new Date());
</script>
