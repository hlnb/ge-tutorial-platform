<script setup>
import "@/assets/styles/tutorials.css";
import AnticipatorySet from "@/components/hunter/AnticipatorySet.vue";
import CheckpointBox from "@/components/hunter/CheckpointBox.vue";
import ClosureSection from "@/components/hunter/ClosureSection.vue";
import GuidedPractice from "@/components/hunter/GuidedPractice.vue";
import IndependentPractice from "@/components/hunter/IndependentPractice.vue";
import LearningObjectives from "@/components/hunter/LearningObjectives.vue";
import TutorialRecommendations from "@/components/TutorialRecommendations.vue";
import { usePageSections } from "@/composables/usePageSections";
import { useTutorialHead } from "@/composables/useTutorialHead";
import { computed } from "vue";

const props = defineProps({
  lesson: {
    type: Object,
    required: true,
  },
});

const pageSections = computed(() => [
  { id: "introduction", title: "Introduction" },
  { id: "learning-objectives", title: "Learning Objectives" },
  ...props.lesson.sections.map((section) => ({
    id: section.id,
    title: section.title,
  })),
  { id: "checkpoint", title: "Checkpoint" },
  { id: "guided-practice", title: "Guided Practice" },
  { id: "independent-practice", title: "Independent Practice" },
  { id: "reflection", title: "Reflection" },
  { id: "recap", title: "Summary" },
  { id: "closure", title: "Lesson Complete" },
  { id: "recommended-next-steps", title: "Recommended Next Steps" },
]);

usePageSections(pageSections.value);

useTutorialHead({
  title: props.lesson.title,
  description: props.lesson.description,
  keywords: props.lesson.tags.join(", "),
  path: props.lesson.path,
  breadcrumbs: [
    { name: "Tutorials", path: "/tutorials" },
    {
      name: "Website Care and Feeding",
      path: "/tutorials/website-care-and-feeding",
    },
    { name: props.lesson.title, path: props.lesson.path },
  ],
});

const closureObjectives = computed(() =>
  props.lesson.objectives.map(
    (objective) => `${objective.verb} ${objective.text}`,
  ),
);

const relatedLinks = [
  {
    to: "/tutorials/deployments/getting-a-website-online-hosting-deployment-continuous-improvement",
    label: "Getting a Website Online",
  },
  {
    to: "/tutorials/intermediate/test-and-validate-your-site",
    label: "Test and Validate Your Site",
  },
  {
    to: "/tutorials/seo-analytics/on-page-seo",
    label: "On-Page SEO",
  },
  {
    to: "/tutorials/accessibility-essentials",
    label: "Accessibility Essentials",
  },
];
</script>

<template>
  <div class="content website-care-lesson">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/">
            <i class="fa-solid fa-house mr-2"></i> Home
          </router-link>
        </li>
        <li><router-link to="/tutorials">Tutorials</router-link></li>
        <li>
          <router-link to="/tutorials/website-care-and-feeding">
            Website Care and Feeding
          </router-link>
        </li>
        <li class="is-active">
          <a href="#" aria-current="page">{{ lesson.title }}</a>
        </li>
      </ul>
    </nav>

    <div class="tutorial-meta">
      <div class="tags">
        <span class="tag is-success">Beginner</span>
        <span class="tag is-light">{{ lesson.duration }}</span>
        <span v-for="tag in lesson.tags" :key="tag" class="tag is-light">
          {{ tag }}
        </span>
      </div>
    </div>

    <h1 class="title is-1">{{ lesson.title }}</h1>
    <p class="subtitle is-5">{{ lesson.description }}</p>

    <AnticipatorySet
      id="introduction"
      title="Start Here"
      icon="fas fa-seedling"
      :hook="lesson.hook"
      :reflection-prompts="[
        'What part of this site would matter most if it broke?',
        'Where would you look first if the live version behaved differently from your local version?'
      ]"
      connection="This section follows deployment because launch is the start of a live website's working life, not the end of the project."
    />

    <p>{{ lesson.intro }}</p>

    <div id="learning-objectives">
      <LearningObjectives
        :objectives="lesson.objectives"
        purpose="Website maintenance turns launch into a repeatable, calm workflow. These checks help you protect trust, usability, findability, and recovery options without overcomplicating beginner site care."
        :prerequisites="[
          {
            topic: 'Getting a Website Online',
            link: '/tutorials/deployments/getting-a-website-online-hosting-deployment-continuous-improvement'
          },
          {
            topic: 'Test and Validate Your Site',
            link: '/tutorials/intermediate/test-and-validate-your-site'
          }
        ]"
      />
    </div>

    <figure
      v-if="lesson.visual"
      class="tutorial-figure tutorial-figure--wide"
    >
      <img
        :src="lesson.visual.src"
        :alt="lesson.visual.alt"
        width="1120"
        height="520"
        loading="lazy"
        decoding="async"
      />
      <figcaption>{{ lesson.visual.caption }}</figcaption>
    </figure>

    <div v-if="lesson.download" class="notification is-link is-light">
      <p class="has-text-weight-semibold">Downloadable resource</p>
      <p>
        <a :href="lesson.download.href" download>{{ lesson.download.label }}</a>
      </p>
    </div>

    <section
      v-for="section in lesson.sections"
      :id="section.id"
      :key="section.id"
      class="lesson-section"
    >
      <h2 class="title is-3">{{ section.title }}</h2>
      <!-- Lesson content comes from the local curriculum data module. -->
      <div v-html="section.body"></div>
    </section>

    <CheckpointBox
      id="checkpoint"
      title="Checkpoint"
      description="Before moving on, answer these questions."
      :questions="lesson.checkpoint"
      answers-button-text="Show sample answers"
    />

    <GuidedPractice
      id="guided-practice"
      title="Guided Practice"
      :description="lesson.guidedPractice.description"
      :steps="lesson.guidedPractice.steps"
      :success-criteria="lesson.guidedPractice.successCriteria"
    />

    <IndependentPractice
      id="independent-practice"
      title="Independent Practice"
      :task="lesson.independentPractice.task"
      :requirements="lesson.independentPractice.requirements"
    />

    <section id="reflection" class="box reflection-box">
      <h2 class="title is-3">Reflection</h2>
      <ol>
        <li v-for="question in lesson.reflection" :key="question">
          {{ question }}
        </li>
      </ol>
    </section>

    <section id="recap">
      <h2 class="title is-3">Summary</h2>
      <ul>
        <li v-for="item in lesson.recap" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section id="closure">
      <ClosureSection
        title="Lesson Complete: What You Can Do Now"
        :objectives="closureObjectives"
        :key-takeaways="lesson.recap"
        :reflection-prompts="[
          {
            icon: 'fas fa-clipboard-check',
            title: 'Maintenance Habit',
            questions: lesson.reflection.slice(0, 2)
          }
        ]"
        next-steps="<p>Continue through the Website Care and Feeding section in order, then adapt the final checklist for a real site you own, manage, or are learning from.</p>"
      />
    </section>

    <div id="recommended-next-steps">
      <TutorialRecommendations :current-path="lesson.path" />
    </div>

    <section class="box related-lessons">
      <h2 class="title is-4">Related Lessons</h2>
      <ul>
        <li v-for="link in relatedLinks" :key="link.to">
          <router-link :to="link.to">{{ link.label }}</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.website-care-lesson {
  width: 100%;
}

.lesson-section {
  margin-top: 2.75rem;
}

.lesson-section :deep(dl) {
  margin: 1rem 0;
}

.lesson-section :deep(dt) {
  margin-top: 1rem;
}

.lesson-section :deep(dd) {
  margin-left: 1rem;
}

.lesson-section :deep(pre) {
  overflow-x: auto;
  border-radius: 6px;
  padding: 1rem;
  background: #1f2937;
  color: #f9fafb;
}

.reflection-box,
.related-lessons {
  margin: 2.5rem 0;
}
</style>
