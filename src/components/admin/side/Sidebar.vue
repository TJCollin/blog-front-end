<template>
  <div class="sidebar">
    <div class="avatar">
      <div class="image"><img src="/static/images/avatar.jpg" alt="collin"></div>
      <p class="account">
        <router-link :to="{name: 'AdminLogin'}">管理员</router-link>
      </p>
    </div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          :default-openeds="openeds"
          router
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item index="1-1" :route="{name: 'ArticleList'}">文章列表</el-menu-item>
            <el-menu-item index="1-2" :route="{name: 'ArticleInfo'}">添加文章</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>标签管理</span>
            </template>
            <el-menu-item index="2-1" :route="{name: 'TagList'}">标签列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>项目管理</span>
            </template>
            <el-menu-item index="3-1" :route="{name: 'ProjectList'}">项目列表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  export default {
    name: "SideBar",
    data() {
      return {
        openeds:['1'],
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }

  }
</script>

<style scoped lang="stylus">
  .sidebar
    background-color: #fff;
    width 100%
    height 100%
    .avatar
      border-right: solid 1px #e6e6e6
      display: block;
      padding: 20px 0 0;
      .image
        padding-bottom 10px
        &:hover img
          transform: rotate(360deg);
        img
          display block;
          margin 0 auto;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background-color: #fff;
          transition: all 1s
      .account
        line-height 30px
        text-align center
        a
          &:hover
            color #409EFF

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

</style>
