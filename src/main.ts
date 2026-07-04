import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from '@/providers/router.ts'
import './style.css'
import './assets/main.css'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia) 
app.use(router)
app.mount('#app')
