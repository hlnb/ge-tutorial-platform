import './services/firebase'; // Ensure firebase is initialized before using auth and db
import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';

// Import Bulma CSS
import 'bulma/css/bulma.min.css';

// Import any custom CSS
import './assets/main.css';

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.mount('#app');
