import AdminLogin from '@/components/admin/AdminLogin'
import AdminLayout from '@/components/admin/AdminLayout'
import ArticleList from '@/components/admin/pages/ArticleList'
import ArticleInfo from '@/components/admin/pages/ArticleInfo'

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
        path: '',
        name: 'ArticleList',
        component: ArticleList
      },
      {
        path: 'editArticle',
        name: 'ArticleInfo',
        component: ArticleInfo
      }
    ]
  }
]
