import './assets/main.css'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap overrides (must come after Bootstrap)
import './assets/bootstrap-overrides.css'

// Import Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
