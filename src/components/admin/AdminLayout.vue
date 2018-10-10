<template>
  <el-container>
    <el-aside width="200px">
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
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
</template>

<script>
  import Sidebar from '@/components/admin/side/Sidebar'

  export default {
    name: "AdminLayout",
    data() {
      return {

      }
    },
    components: {
      'sidebar': Sidebar
    }

  }
</script>

<style scoped lang="stylus">
  .el-aside
    background-color: #f0f2f5;
    height 100%

  .el-main
    height 900px
    background-color: #f0f2f5;
    padding 10px
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
