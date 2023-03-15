import { createApp } from 'vue';
import App from './App.vue';
import variables from './variables.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App);
app.use(variables);
app.mount('#app');