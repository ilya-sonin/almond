import { createRouter, createWebHistory } from 'vue-router'

import AppView from '../views/AppView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { path: '/app' }
    },
    {
      path: '/app',
      name: 'app',
      component: AppView
    }
  ]
})

export default router
