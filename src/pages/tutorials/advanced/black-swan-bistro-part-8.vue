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
            <a href="#" aria-current="page">Black Swan Bistro - Part 8</a>
          </li>
        </ul>
      </nav>

      <div class="tutorial-meta">
        <div class="tags">
          <span class="tag is-warning">Advanced</span>
          <span class="tag is-light">45 min</span>
          <span class="tag is-link">Project</span>
          <span class="tag is-light">Part 8 of 9</span>
        </div>
      </div>

      <h1 class="title is-1">Black Swan Bistro - Part 8</h1>
      <h2 class="subtitle is-4">Prioritise and Improve</h2>

      <p class="subtitle is-5">
        Turn audit findings into deliberate improvements with before-and-after testing.
      </p>

      <div class="notification is-info is-light">
        <p>
          <i class="fas fa-hard-hat mr-2"></i><strong>Under Construction</strong>
        </p>
        <p>
          This scaffold is reserved for a project lesson where learners choose
          high-value improvements from the Part 7 audit and document what changed.
        </p>
      </div>

      <section class="box">
        <h3 class="title is-4">Authoring brief</h3>
        <p>
          This lesson should teach prioritisation, impact versus preference,
          technical debt, justified refactoring, performance improvements,
          before/after testing, and improvement notes.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useTutorialHead } from '@/composables/useTutorialHead';

useTutorialHead({
  title: 'Black Swan Bistro - Part 8',
  description:
    'Use Black Swan Bistro audit findings to prioritise and improve the live website deliberately.',
  path: '/tutorials/advanced/black-swan-bistro-part-8',
  noindex: true,
});
</script>
