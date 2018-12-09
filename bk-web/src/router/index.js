import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Base from '@/views/base/Base'
import FilesPage from '@/views/base/FilesPage'
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
    path: '/filespage',
    name: 'FilesPage',
    component: FilesPage
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
