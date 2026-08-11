<template>
  <div class="container section">
    <div class="tutorial-content">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link to="/">
              <i class="fa-solid fa-house mr-2"></i> Home
            </router-link>
          </li>
          <li><router-link to="/tutorials">Tutorials</router-link></li>
          <li class="is-active">
            <a href="#" aria-current="page">Black Swan Bistro &mdash; Part 9</a>
          </li>
        </ul>
      </nav>

      <div class="tutorial-meta">
        <div class="tags">
          <span class="tag is-warning">Advanced</span>
          <span class="tag is-light">45 min</span>
          <span class="tag is-link">Project</span>
          <span class="tag is-light">Part 9 of 9</span>
        </div>
      </div>

      <h1 class="title is-1">Black Swan Bistro &mdash; Part 9</h1>
      <h2 class="subtitle is-4">Respond to a Client Change</h2>

      <p class="subtitle is-5">
        Maintain an existing live website when business details change.
      </p>

      <div class="notification is-info is-light">
        <p>
          <i class="fas fa-hard-hat mr-2"></i><strong>Under Construction</strong>
        </p>
        <p>
          This scaffold is reserved for a project lesson where learners update
          Black Swan Bistro without redesigning it unnecessarily.
        </p>
      </div>

      <section class="box">
        <h3 class="title is-4">Client change request</h3>
        <ul>
          <li>Sunday dinner opening</li>
          <li>
            New dessert: Wattleseed Creme Brulee, $16, with wattleseed custard,
            caramelised sugar, and native berry compote
          </li>
          <li>Mothers Day lunch promotion</li>
        </ul>
      </section>

      <section class="box">
        <h3 class="title is-4">Authoring brief</h3>
        <p>
          The learner should identify where information belongs, avoid
          unnecessary duplication, update the site, test locally, commit
          meaningfully with Git, deploy, test production, and document the
          change.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';

useTutorialHead({
  title: 'Black Swan Bistro — Part 9',
  description:
    'Respond to a Black Swan Bistro client change request with careful updates, testing, Git commits, deployment, and documentation.',
  path: '/tutorials/advanced/black-swan-bistro-part-9',
  noindex: true,
});
</script>
