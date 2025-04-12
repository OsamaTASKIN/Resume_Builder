import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'


import router from './router' // ✅ this auto-loads index.js from router folder



createApp(App).use(router).mount('#app')

