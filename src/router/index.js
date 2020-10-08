import Vue from 'vue'
import VueRouter from 'vue-router'
import Agent from '../views/Agent.vue'
import Customer from '../views/Customer.vue'
import OneCustomer from '../views/OneCustomer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Agent',
    component: Agent
  },
  {
    path: '/customer',
    name: 'Customer',
    component: Customer
  },
  {
    path: '/customer/:id',
    name: 'OneCustomer',
    component: OneCustomer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
