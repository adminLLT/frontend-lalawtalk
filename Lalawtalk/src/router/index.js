import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
    
      component: () => import('../views/HomeLanding.vue')
    },
    
  ]
})

export default router
