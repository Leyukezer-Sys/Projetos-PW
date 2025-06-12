import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/servidores',
      name: 'servidores',
      component: () => import('../views/servidor/IndexView.vue'),
    },
    {
      path: '/servidores/novo',
      name: 'servidores-novo',
      component: () => import('../views/servidor/FormView.vue'),
    },
  ],
})

export default router
