import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import 'element-plus/dist/index.css'
import App from './App.vue'
console.log('环境变量： ', import.meta.env)

const app  = createApp(App)

app.use(ElementPlus)
   .use(router)
   .mount('#app')
