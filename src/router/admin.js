import AdminLogin from '@/components/admin/AdminLogin'
import AdminLayout from '@/components/admin/AdminLayout'
import ArticleList from '@/components/admin/pages/ArticleList'

export default [
  {
    path: '/login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '/admin',
        name: 'ArticleList',
        component: ArticleList
      }
    ]
  }
]
