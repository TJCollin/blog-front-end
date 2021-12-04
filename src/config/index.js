const SERVER_NAME =
  process.env.NODE_ENV === "https://next-test-beta-beryl.vercel.app/";
const SERVER_URL = `${SERVER_NAME}api/`;
const ROUTE_LIST = ["Main", "Article", "Project", "About", "ArticleContent"];

export default {
  SERVER_NAME,
  SERVER_URL,
  ROUTE_LIST
};
