<template>
  <div class="list-box">
    <div class="search">
      <el-input placeholder="搜索文章标题" clearable v-model="input5" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <el-table
      :data="tableData4"
      style="width: 100%;height: 100%"

      min-height="250">
      <el-table-column
        prop="date"
        label="标题">
        <template slot-scope="scope">
          <router-link to="">
            {{ scope.row.date}}
          </router-link>

        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        sortable="true"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="aaddress"
        label="标签"
        :filters="[{ text: 'Javascript', value: 'Javascript' }, { text: 'Java', value: 'java' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            disable-transitions
            type="success"
          >
            Javascript
            <!--{{scope.row.tag}}-->
          </el-tag>
            <!--:type="scope.row.tag === '家' ? 'primary' : 'success'"-->

        </template>
      >
      </el-table-column>

      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData4)"
            type="text"
            size="small">
            查看
          </el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData4)"
            type="text"
            size="small">
            修改
          </el-button>
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
</template>

<script>
  export default {
    name: "ArticleList",
    data() {
      return {
        input5: '',
        currentPage4: 4,
        tableData4: [
          {
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
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      filterTag(value, row) {
        return row.tag === value;
      },
    }
  }
</script>

<style scoped lang="stylus">
  .list-box
    display flex
    flex-direction column

    .search
      width 100%
      height 60px
    .el-table
      flex 1
      a
        text-decoration none
    .table-pagination
      align-self flex-end

</style>
