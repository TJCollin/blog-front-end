<template>
  <div class="list-box">
    <div class="top-section">
      <el-button @click="dialogFormVisible = true">新增标签</el-button>
    </div>
    <el-table
      :data="tableData4"
      style="width: 100%;height: 100%"

      min-height="250">
      <el-table-column
        prop="date"
        label="标签名">
        <template slot-scope="scope">
          <router-link to="">
            {{ scope.row.date}}
          </router-link>

        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="描述">
      </el-table-column>

      <el-table-column
        label="操作">
        <template slot-scope="scope">
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
    <el-dialog title="新增标签"  :visible.sync="dialogFormVisible" >
      <el-form ref="tagForm" :model="form" label-position="left" label-width="80px">
        <el-form-item label="标签名称" prop="tagName">
          <el-input v-model="form.tagName" ></el-input>
        </el-form-item>
        <el-form-item label="标签描述" prop="descriptios">
          <el-input v-model="form.descriptios"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "TagList",
    data() {
      return {
        dialogFormVisible: false,
        form: {
          tagName: '',
          descriptios: ''
        },
        rules: {
          tagName: [{required: true, message: '请输入标签名称', trigger: 'blur'}],
          descriptios: [{required: true, message: '请输入标签描述', trigger: 'blur'}]
        },
        formLabelWidth: '120px',

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
      submitForm () {
        let self = this
        self.$refs.tagForm.validate((valid) => {
          if(valid) {
            self.$axios.post('tag/saveTag',{
              params: {...self.form},
              // validateStatus: function validateStatus(status) {
              //   return status >= 200 && status < 500;
              // }
            }).then(
              (res) => {
                console.log('su')
                console.log(res.data.bean)
                console.log(res)
              },
              // (err) => {
              //   console.log(err)
              //   self.$message.error("保存错误")
              // }
            ).catch((e) => {
                console.log(e)
                self.$message.error("保存错误")
            })
          }else {
            self.$message.error("信息填写不完整哟~")
          }
        })
      },
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

    .top-section
      height 60px
      align-self flex-end

    .el-table
      flex 1
      border-top 2px solid #eee
      a
        text-decoration none
    .table-pagination
      align-self flex-end

</style>
