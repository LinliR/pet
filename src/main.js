import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assert/css/main.css'

import axiosInstance from './http/httpUtil';


import App from './App.vue'
import router from './router/index.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.provide('axios', axiosInstance);
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')