<template>
  <section class="section faq-section">
    <div class="container">
      <h2 class="title is-3 has-text-centered mb-5">Frequently Asked Questions</h2>
      <div class="faq-list">
        <div v-for="(faq, i) in faqs" :key="i" class="box faq-item">
          <button class="faq-question button is-white is-block has-text-left" @click="toggle(i)">
            <span class="icon-text">
              <span class="icon"><i :class="openIndex === i ? 'fas fa-chevron-down' : 'fas fa-chevron-right'"></i></span>
              <span>{{ faq.question }}</span>
            </span>
          </button>
          <div v-show="openIndex === i" class="faq-answer mt-2">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  faqs: {
    type: Array,
    required: true
  }
});
const openIndex = ref(null);
function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i;
}
</script>

<script>
export default {
  props: ['faqs']
};
</script>

<style scoped>
.faq-section {
  background: #fff;
  border-radius: 8px;
  margin: 2rem 0;
}
.faq-list {
  max-width: 700px;
  margin: 0 auto;
}
.faq-item + .faq-item {
  margin-top: 1rem;
}
.faq-question {
  width: 100%;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  background: none;
  box-shadow: none;
  padding: 1rem 0.5rem;
  text-align: left;
  cursor: pointer;
  transition: background 0.2s;
}
.faq-question:hover {
  background: #f5f5f5;
}
.faq-answer {
  padding: 0.5rem 1.5rem 1rem 2.5rem;
  color: #333;
}
</style>
