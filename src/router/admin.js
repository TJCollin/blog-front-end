// import AdminLogin from '@/components/admin/AdminLogin'
// import AdminLayout from '@/components/admin/AdminLayout'
// import ArticleList from '@/components/admin/pages/ArticleList'
// import ArticleInfo from '@/components/admin/pages/ArticleInfo'
// import ProjectList from '@/components/admin/pages/ProjectList'
// import TagList from '@/components/admin/pages/TagList'

const AdminLogin = () => import("@/views/Login");
const AdminLayout = () => import("@/views/AdminLayout");
const ArticleList = () => import("@/components/admin/ArticleList");
const ArticleInfo = () => import("@/components/admin/ArticleInfo");
const ProjectList = () => import("@/components/admin/ProjectList");
const TagList = () => import("@/components/admin/TagList");

export default [
  {
    path: "/login",
    name: "AdminLogin",
    component: AdminLogin,
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "ArticleList",
        component: ArticleList,
      },
      {
        path: "editArticle",
        name: "ArticleInfo",
        component: ArticleInfo,
      },
      {
        path: "projectList",
        name: "ProjectList",
        component: ProjectList,
      },
      {
        path: "tagList",
        name: "TagList",
        component: TagList,
      },
    ],
  },
];
