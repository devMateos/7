import '/public/assets/css/main.css'
import '/public/assets/css/atoms.css'
import '/public/assets/css/utility-classes.css'
import '/public/assets/fonts/fonts.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
