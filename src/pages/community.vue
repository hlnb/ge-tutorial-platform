<template>
  <section class="section container">
    <h1 class="title is-1 has-text-centered mb-5">GraphitEdge Community</h1>
    <div class="content is-medium mb-6 has-text-centered">
      <p>
        Welcome to the GraphitEdge Community! While our full-featured forums and chat are coming soon, this page is your hub for connecting with fellow learners, sharing feedback, and finding support as you progress through your web development journey.
      </p>
    </div>
    <div class="box box-info mb-5">
      <h2 class="title is-4 mb-2">How to Get Involved</h2>
      <ul>
        <li>💬 <strong>Ask Questions:</strong> If you’re stuck or need clarification, reach out via our <a href="/contact">contact form</a> or email. We’re here to help!</li>
        <li>📢 <strong>Suggest a Tutorial:</strong> Have an idea for a topic or want to see a specific tutorial? Let us know!</li>
        <li>📝 <strong>Share Feedback:</strong> Your feedback helps us improve. Tell us what you love or what could be better.</li>
        <li>📬 <strong>Newsletter:</strong> Subscribe to our newsletter for updates, tips, and new tutorial announcements.</li>
      </ul>
    </div>
    <div class="box box-info mb-5">
      <h2 class="title is-4 mb-2">Community Guidelines</h2>
      <ul>
        <li>Be respectful and supportive of all learners.</li>
        <li>No spam, self-promotion, or off-topic content.</li>
        <li>Constructive feedback is welcome—help each other grow!</li>
      </ul>
    </div>
    <div class="box box-info mb-5">
      <h2 class="title is-4 mb-2">Coming Soon</h2>
      <p>
        We’re working on building a dedicated forum and chat space for the GraphitEdge community. Stay tuned for updates!
      </p>
    </div>
    <div class="box box-info mb-5">
      <h2 class="title is-4 mb-2">Newsletter Signup</h2>
      <NewsletterSignup />
      <p class="is-size-7 mt-2 has-text-grey">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
    <div class="has-text-centered mt-6">
      <router-link to="/contact" class="button is-primary is-large">Contact Us</router-link>
      <router-link to="/" class="button is-light is-large ml-3">Back to Home</router-link>
    </div>
  </section>
</template>

<script setup>
import NewsletterSignup from '@/components/NewsletterSignup.vue';
// No additional logic needed for this static page
</script>

<style scoped>
.box-info {
  background-color: #f5f5f5;
}
</style>
