import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import("../views/Index"),
    },
    {
      path: '/statement',
      name: 'statement',
      component: () => import("../views/Statement"),
    }
    ,
    {
      path: '/map',
      name: 'map',
      component: () => import("../views/Map"),
    }
  ]
})
