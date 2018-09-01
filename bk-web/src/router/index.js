import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Base from '@/views/base/Base'
import AA from '@/views/base/AA'
Vue.use(Router)

const routesItems = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Base',
    component: Base
  },
  {
    path: '/aa',
    name: 'AA',
    component: AA
  }
]

export default new Router({
  routes: routesItems
})
