import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import 'element-plus/dist/index.css'
import App from './App.vue'
import request from './api/request'
const app  = createApp(App)

app.config.globalProperties.$apis = request

app.use(ElementPlus)
   .use(router)
   .mount('#app')
