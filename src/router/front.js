import Layout from '@/components/front/Layout'
import Article from '@/components/front/pages/Article'
import About from '@/components/front/pages/About'
import Main from '@/components/front/Main'

export default [
  {
    path: '/',
    component: Main,
    name: 'Main'
  },
  {
    path: '/front',
    component: Layout,
    children: [
      {
        path: 'article',
        name: 'Article',
        component: Article
      },
      {
        path: 'about',
        name: 'About',
        component: About
      }
    ]

  },
  {
    path: '*',
    component: Main
  }
  ]

