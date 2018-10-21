import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Base from '@/views/base/Base'
Vue.use(Router)

const routesItems = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/base',
    name: 'Base',
    component: Base
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

export default new Router({
  routes: routesItems
})
