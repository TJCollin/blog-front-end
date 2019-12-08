<template>
  <div class="main-layout">
    <el-container class="layout-container">
      <el-aside width="200px">
        <sidebar></sidebar>
      </el-aside>
      <el-container>
        <el-main>
          <div class="main-content">
            <router-view></router-view>
          </div>

        </el-main>
        <el-footer>
          <div class="footer-box">
            <p>
              &copy;2018-
              <a href="https://github.com/TJCollinZhang">Collin的博客</a>
              Powered by Vue & Koa
            </p>
          </div>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Sidebar from '@/components/admin/side/Sidebar'
  import {Container, Footer, Main, Aside} from 'element-ui';

  export default {
    name: "AdminLayout",
    data() {
      return {

      }
    },
    components: {
      'sidebar': Sidebar,
      'el-container': Container,
      'el-footer':Footer,
      'el-main':Main,
      'el-aside': Aside
    }

  }
</script>

<style scoped lang="stylus">
  .main-layout
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    .layout-container
      height 100%
      .el-aside
        background-color: #f0f2f5;
        height 100%

      .el-main
        background-color: #f0f2f5;
        padding 10px
        .main-content
          height 100%;
          background-color: #fff;
          padding 20px
          overflow scroll
      .el-footer
        background-color: #f0f2f5;
        padding 0 10px
        .footer-box
          width: 100%
          height: 60px
          background-color: #fff;
          border-top: 1px solid #eee
          p
            text-align center
            line-height 60px



</style>
