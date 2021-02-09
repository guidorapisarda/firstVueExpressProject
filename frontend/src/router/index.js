import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Detail from '@/components/Detail/Detail'
import CreateRecipe from '@/components/CreateRecipe/CreateRecipe'
import Login from '@/components/Login/Login'

import hooks from './hooks'
Vue.use(Router)

const ROUTER = new Router({
  // es para que no aparezca la # con la single page application.
  mode: 'history',

  // esto registra la ruta para que vue nos deje laburar
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      props: true,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/create',
      name: 'create',
      component: CreateRecipe,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      props: true
    }
  ]
})

hooks(ROUTER)

export default ROUTER
