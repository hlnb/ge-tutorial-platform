<template>
  <div class="content">
    <h1 class="title is-1">Deployments</h1>
    <p>Deploy static and server-rendered apps, compare platforms and learn CI/CD basics.</p>
    <ul>
      <li><router-link :to="'/tutorials/deployments/vercel-netlify'">Vercel & Netlify</router-link></li>
      <li><router-link :to="'/tutorials/deployments/firebase-hosting'">Firebase Hosting</router-link></li>
      <li><router-link :to="'/tutorials/deployments/static-vs-dynamic'">Static vs Dynamic</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DeploymentsIndex',
};
</script>
