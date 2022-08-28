import { createApp } from 'vue'
import App from './App.vue'
import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'
import VueTheMask from 'vue-the-mask'

const app = createApp(App)

app.use(VueTheMask).mount('#app');
