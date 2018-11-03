// import AdminLogin from '@/components/admin/AdminLogin'
// import AdminLayout from '@/components/admin/AdminLayout'
// import ArticleList from '@/components/admin/pages/ArticleList'
// import ArticleInfo from '@/components/admin/pages/ArticleInfo'
// import ProjectList from '@/components/admin/pages/ProjectList'
// import TagList from '@/components/admin/pages/TagList'

const AdminLogin = () => import('@/components/admin/AdminLogin')
const AdminLayout = () => import('@/components/admin/AdminLayout')
const ArticleList = () => import('@/components/admin/pages/ArticleList')
const ArticleInfo = () => import('@/components/admin/pages/ArticleInfo')
const ProjectList = () => import('@/components/admin/pages/ProjectList')
const TagList = () => import('@/components/admin/pages/TagList')



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
      },
      {
        path: 'projectList',
        name: 'ProjectList',
        component: ProjectList
      },
      {
        path: 'tagList',
        name: 'TagList',
        component: TagList
      }

    ]
  }
]
