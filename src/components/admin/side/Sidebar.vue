<template>
  <div class="sidebar">
    <div class="avatar">
      <img src="/static/images/avatar.jpg" alt="collin">
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
          <el-menu-item index="2">
            <i class="el-icon-edit"></i>
            <span slot="title">标签管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">项目管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <!--<el-col :span="12">-->
        <!--<h5>自定义颜色</h5>-->
        <!--<el-menu-->
          <!--default-active="2"-->
          <!--class="el-menu-vertical-demo"-->
          <!--@open="handleOpen"-->
          <!--@close="handleClose"-->
          <!--background-color="#545c64"-->
          <!--text-color="#fff"-->
          <!--active-text-color="#ffd04b">-->
          <!--<el-submenu index="1">-->
            <!--<template slot="title">-->
              <!--<i class="el-icon-location"></i>-->
              <!--<span>导航一</span>-->
            <!--</template>-->
            <!--<el-menu-item-group>-->
              <!--<template slot="title">分组一</template>-->
              <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-menu-item-group title="分组2">-->
              <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-submenu index="1-4">-->
              <!--<template slot="title">选项4</template>-->
              <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
            <!--</el-submenu>-->
          <!--</el-submenu>-->
          <!--<el-menu-item index="2">-->
            <!--<i class="el-icon-menu"></i>-->
            <!--<span slot="title">导航二</span>-->
          <!--</el-menu-item>-->
          <!--<el-menu-item index="3" disabled>-->
            <!--<i class="el-icon-document"></i>-->
            <!--<span slot="title">导航三</span>-->
          <!--</el-menu-item>-->
          <!--<el-menu-item index="4">-->
            <!--<i class="el-icon-setting"></i>-->
            <!--<span slot="title">导航四</span>-->
          <!--</el-menu-item>-->
        <!--</el-menu>-->
      <!--</el-col>-->
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
    .avatar {
      border-right: solid 1px #e6e6e6
      display: block;
      padding: 20px 0;
      &:hover img {
        transform: rotate(360deg);
      }

      img {
        display block;
        margin 0 auto;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #fff;
        transition: all 1s;
      }
    }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

</style>
