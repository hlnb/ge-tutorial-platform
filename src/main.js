import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';
import '@emailjs/browser';

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.mount('#app');
