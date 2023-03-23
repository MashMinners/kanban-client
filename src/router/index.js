import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  //Redirects
  {
    path: '/',
    redirect: '/app/start'
  },
  {
    path: '/app',
    redirect: '/app/start'
  },
  //Application
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
  {
    path: '/app/invoices',
    name: 'Invoices',
    meta: {
      layout: 'Application'
    },
    component: function () {
      return import('../views/InvoicesPage.vue');
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
