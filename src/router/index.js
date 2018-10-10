import Vue from 'vue'
import Router from 'vue-router'
import front from './front'
import admin from './admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...front,
    ...admin,
  ]
  // routes: [
  //   {
  //     path: '/',
  //     name: 'Main',
  //     component: Main
  //   },
  //   {
  //     path: '/pages',
  //     name: 'Layout',
  //     component: Layout,
  //     children: [
  //       {
  //         path: '/article',
  //         name: 'Article',
  //         component: Article
  //       },
  //       {
  //         path: '/about',
  //         name: 'About',
  //         component: About
  //       }
  //     ]
  //   }
  // ]
})
