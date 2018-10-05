import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/Layout'
import Article from '@/components/pages/Article'
import About from '@/components/pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Main
    },
    {
      path: '/pages',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/article',
          name: 'Article',
          component: Article
        },
        {
          path: '/about',
          name: 'About',
          component: About
        }
      ]
    }
  ]
})
