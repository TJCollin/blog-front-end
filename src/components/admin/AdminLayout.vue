<template>
  <el-container>
    <el-aside width="200px">
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <el-main>
        <div class="list-box">
          <el-table
            :data="tableData4"
            style="width: 100%;height: 100%"

            min-height="250">
            <el-table-column
              fixed
              prop="date"
              label="日期"
              width="150">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
            <el-table-column
              prop="zip"
              label="邮编">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData4)"
                  type="text"
                  size="small">
                  移除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="table-pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
          </div>
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
</template>

<script>
  import Sidebar from '@/components/admin/side/Sidebar'

  export default {
    name: "AdminLayout",
    data() {
      return {
        currentPage4: 4,
        tableData4: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    components: {
      'sidebar': Sidebar
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
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
    .list-box
      display flex
      flex-direction column
      height 100%;
      background-color: #fff;
      padding 20px 20px 0 20px
      .el-table
        flex 1
      .table-pagination
        align-self flex-end

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
