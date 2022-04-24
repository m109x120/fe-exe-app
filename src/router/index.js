import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/home/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router