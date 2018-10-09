import Layout from '@/components/front/Layout'
import Article from '@/components/front/pages/Article'
import About from '@/components/front/pages/About'

export default [
  {
    path: '/front',
    name: 'Layout',
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

  }]

