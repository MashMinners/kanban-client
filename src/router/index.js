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
  //INVOICES
  {
    path: '/app/invoices',
    name: 'Invoices',
    meta: {
      layout: 'Application'
    },
    component: function () {
      return import('../views/Invoices/InvoicesPage.vue');
    }
  },
  {
    path: '/app/invoices/new',
    name: 'InvoiceCreate',
    meta: {
      layout: 'Application'
    },
    component: function () {
      return import('../views/Invoices/InvoiceCreatePage.vue');
    }
  },
  {
    path: '/app/invoices/show/:id',
    name: 'InvoiceShow',
    meta: {
      layout: 'Application'
    },
    component: function () {
      return import('../views/Invoices/InvoiceShowPage.vue');
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
