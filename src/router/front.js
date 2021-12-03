const Home = () => import("../views/Home");
const Layout = () => import("../views/Layout");
const Article = () => import("../components/front/Article");
const ArticleContent = () => import("../components/front/ArticleContent");
const Project = () => import("../components/front/Project");
const About = () => import("../components/front/About");
export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/front",
    component: Layout,
    children: [
      {
        path: "article",
        name: "Article",
        component: Article,
        children: [],
      },
      {
        path: "article/:articleId",
        name: "ArticleContent",
        component: ArticleContent,
      },
      {
        path: "project",
        name: "Project",
        component: Project,
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
    ],
  },
];
