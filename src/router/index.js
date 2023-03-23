import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/app/start'
  },
  {
    path: '/app/start',
    name: 'Start',
    meta: {
      layout: 'Application'
    },
    component: function () {
      return import('../views/StartPage.vue');
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
