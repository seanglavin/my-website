import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueCarousel } from 'vue-carousel'
import './assets/styles/main.css'
import './assets/styles/tailwind.css'

const app = createApp(App)
app.use(router)
app.use(VueCarousel)

app.mount('#app')
