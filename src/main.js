import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import Store from './store/Index.js'

const vueApp = createApp(App)
vueApp.use(Store)
vueApp.mount('#app')
