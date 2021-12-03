<template>
  <div class="sidebar">
    <div class="avatar">
      <div class="image">
        <router-link :to="{ name: 'ArticleList' }"
          ><img src="../../assets/images/avatar.jpg" alt="collin"
        /></router-link>
      </div>
      <p class="account">
        <span @click="changeStatus">{{ name }}</span>
      </p>
    </div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          :default-active="activePage"
          class="el-menu-vertical-demo"
          :default-openeds="openeds"
          router
        >
          <el-submenu index="article">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item
              index="/admin/articleList"
              :route="{ name: 'ArticleList' }"
              >文章列表</el-menu-item
            >
            <el-menu-item
              index="/admin/editArticle"
              :route="{ name: 'ArticleInfo' }"
              >添加文章</el-menu-item
            >
          </el-submenu>
          <el-submenu index="tag">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>标签管理</span>
            </template>
            <el-menu-item index="/admin/tagList" :route="{ name: 'TagList' }"
              >标签列表</el-menu-item
            >
          </el-submenu>
          <el-submenu index="project">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>项目管理</span>
            </template>
            <el-menu-item
              index="/admin/projectList"
              :route="{ name: 'ProjectList' }"
              >项目列表</el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Menu, Submenu, Row, Col, MenuItem } from "element-ui";
export default {
  name: "SideBar",
  components: {
    "el-menu": Menu,
    "el-submenu": Submenu,
    "el-row": Row,
    "el-col": Col,
    "el-menu-item": MenuItem,
  },
  created() {
    if (window.localStorage.getItem("BLOG_TOKEN")) {
      let tokenMsg = JSON.parse(window.localStorage.getItem("BLOG_TOKEN"));
      let exp = tokenMsg.lifeTime;
      if (exp > Math.floor(Date.now() / 1000)) {
        this.name = tokenMsg.user.name;
      }
    }
  },
  data() {
    return {
      name: "非管理员",
      isCollapse: true,
    };
  },
  computed: {
    activePage: function () {
      if (this.$route.path === "/admin/") {
        return "/admin/articleList";
      } else {
        return this.$route.path;
      }
    },
    openeds: function () {
      if (this.$route.path.indexOf("tag") >= 0) {
        return ["tag"];
      } else if (this.$route.path.indexOf("project") >= 0) {
        return ["project"];
      } else {
        return ["article"];
      }
    },
  },
  methods: {
    changeStatus() {
      let self = this;
      if (!Object.is(self.name, "非管理员")) {
        this.$confirm("此操作注销登录?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            window.localStorage.removeItem("BLOG_TOKEN");
            this.$message({
              type: "success",
              message: "注销成功!",
            });
            self.$router.push({ name: "AdminLogin" });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取注销",
            });
          });
      } else {
        self.$router.push({ name: "AdminLogin" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: #fff;
  width: 100%;
  height: 100%;
  .avatar {
    border-right: solid 1px #e6e6e6;
    display: block;
    padding: 20px 0 0;
    .image {
      padding-bottom: 10px;
      &:hover img {
        transform: rotate(360deg);
      }
      img {
        display: block;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #fff;
        transition: all 1s;
      }
    }
    .account {
      line-height: 30px;
      text-align: center;
      span {
        cursor: pointer;
        &:hover {
          color: #409eff;
        }
      }
    }
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
