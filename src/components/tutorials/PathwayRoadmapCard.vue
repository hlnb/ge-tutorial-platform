<template>
  <article
    class="box roadmap-card"
    :class="{
      'roadmap-card--project': isProject,
      'roadmap-card--standalone': isStandalone,
    }"
  >
    <div class="roadmap-card__header-row">
      <div class="roadmap-card__meta-row">
        <span class="roadmap-card__order">{{ orderLabel }}</span>
        <span v-if="sectionLabel" class="roadmap-card__section">{{ sectionLabel }}</span>
      </div>

      <div v-if="cornerBadges.length" class="roadmap-card__corner-badges">
        <span
          v-for="badge in cornerBadges"
          :key="badge"
          class="tag is-small"
          :class="badgeClass(badge)"
        >
          {{ badge }}
        </span>
      </div>
    </div>

    <h4 class="title is-5 roadmap-card__title">
      <i v-if="isProject" class="fas fa-hammer"></i>
      {{ title }}
    </h4>

    <p class="roadmap-card__summary">{{ summary }}</p>

    <div class="roadmap-card__chips">
      <span v-if="lessonCount" class="tag is-light">
        {{ lessonCount }} {{ lessonCount === 1 ? 'lesson' : 'lessons' }}
      </span>
      <span v-if="duration" class="tag is-light">
        <i class="far fa-clock"></i>&nbsp;{{ duration }}
      </span>
      <span
        v-for="badge in badges"
        :key="badge"
        class="tag is-small"
        :class="badgeClass(badge)"
      >
        {{ badge }}
      </span>
    </div>

    <p v-if="supportingText" class="roadmap-card__supporting">
      {{ supportingText }}
    </p>

    <p v-if="note" class="roadmap-card__note">{{ note }}</p>

    <router-link :to="path" class="button is-primary is-outlined roadmap-card__cta">
      {{ ctaLabel }}
    </router-link>
  </article>
</template>

<script setup>
const props = defineProps({
  orderLabel: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    default: null,
  },
  sectionLabel: {
    type: String,
    default: null,
  },
  badges: {
    type: Array,
    default: () => [],
  },
  cornerBadges: {
    type: Array,
    default: () => [],
  },
  isProject: {
    type: Boolean,
    default: false,
  },
  isStandalone: {
    type: Boolean,
    default: false,
  },
  note: {
    type: String,
    default: null,
  },
  lessonCount: {
    type: Number,
    default: null,
  },
  supportingText: {
    type: String,
    default: null,
  },
  ctaLabel: {
    type: String,
    default: 'Open Lesson',
  },
});

function badgeClass(badge) {
  const map = {
    'Start here': 'is-success',
    'Recommended next': 'is-warning is-light',
    Foundation: 'is-success is-light',
    Walkthrough: 'is-link is-light',
    'Cheat Sheet': 'is-light',
    Troubleshooting: 'is-danger is-light',
    Project: 'is-info is-light',
    'AI Companion': 'is-warning is-light',
    Independent: 'is-dark',
    Guided: 'is-primary is-light',
    Reference: 'is-link is-light',
  };

  return map[badge] || 'is-light';
}
</script>

<style scoped>
.roadmap-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid #ece7df;
  box-shadow: 0 8px 26px rgba(48, 43, 37, 0.06);
}

.roadmap-card--project {
  border-left: 4px solid var(--color-rackley, #4b88a2);
}

.roadmap-card--standalone {
  border-style: dashed;
}

.roadmap-card__meta-row {
  display: flex;
  gap: 0.75rem;
  font-size: 0.78rem;
  color: #6f675d;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 700;
}

.roadmap-card__header-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.roadmap-card__corner-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.35rem;
}

.roadmap-card__section {
  text-align: right;
}

.roadmap-card__title {
  margin-bottom: 0.6rem;
  line-height: 1.35;
}

.roadmap-card__title i {
  color: var(--color-rackley, #4b88a2);
  margin-right: 0.35rem;
}

.roadmap-card__summary {
  color: #4a4a4a;
  line-height: 1.55;
  margin-bottom: 0.9rem;
  flex: 1;
}

.roadmap-card__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 0.85rem;
}

.roadmap-card__note {
  font-size: 0.9rem;
  color: #7a7a7a;
  margin-bottom: 0.85rem;
}

.roadmap-card__supporting {
  font-size: 0.9rem;
  color: #5f5a52;
  margin-bottom: 0.65rem;
}

.roadmap-card__cta {
  align-self: flex-start;
  margin-top: auto;
}

@media (max-width: 768px) {
  .roadmap-card__header-row {
    flex-direction: column;
  }

  .roadmap-card__corner-badges {
    justify-content: flex-start;
  }
}
</style>
