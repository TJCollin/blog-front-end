<template>
  <div class="list-box">
    <div class="top-section">
      <el-button @click="addTag">新增标签</el-button>
    </div>
    <el-table
      :data="tagList"
      style="width: 100%;height: 100%"
      v-if="tagList">
      <el-table-column
        prop="tagName"
        label="标签名">
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述">
      </el-table-column>

      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="updateTag(scope.row.tagName, scope.row.description, scope.row._id)"
            type="text"
            size="small">
            修改
          </el-button>
          <el-button
            @click.native.prevent="deleteTag(scope.row._id)"
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="table-pagination">
      <el-pagination
        @prev-click="prevClick"
        @next-click="nextClick"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalTags">
      </el-pagination>
    </div>
    <el-dialog title="新增标签" :visible.sync="dialogFormVisible">
      <el-form ref="tagForm" :rules="rules" :model="form" label-position="left" label-width="80px" @keyup.enter.native="submitForm">
        <el-form-item label="标签名称" prop="tagName">
          <el-input v-model="form.tagName" ref="tagName"></el-input>
        </el-form-item>
        <el-form-item label="标签描述" prop="description">
          <el-input v-model="form.description"></el-input>
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
import {
  Form,
  Button,
  FormItem,
  Input,
  Tag,
  Table,
  TableColumn,
  Dialog,
  Pagination
} from "element-ui";

export default {
  name: "TagList",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        tagName: "",
        description: ""
      },
      rules: {
        tagName: [
          { required: true, message: "请输入标签名称", trigger: "blur" }
        ],
        description: [
          { required: true, message: "请输入标签描述", trigger: "blur" }
        ]
      },
      currentPage: 1,
      totalTags: 10,
      tagList: []
    };
  },
  components: {
    "el-form": Form,
    "el-form-item": FormItem,
    "el-button": Button,
    "el-input": Input,
    "el-tag": Tag,
    "el-table": Table,
    "el-table-column": TableColumn,
    "el-dialog": Dialog,
    "el-pagination": Pagination
  },
  created() {
    this.getTagListByPage(this.currentPage);
  },
  methods: {
    addTag() {
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs.tagForm.resetFields();
        this.$refs.tagName.focus();
      });
    },
    submitForm() {
      let self = this;
      self.$refs.tagForm.validate(valid => {
        if (valid) {
          self.$axios
            ._post("tag", {
              ...self.form
            })
            .then(res => {
              if (!res.data.code) {
                self.$message.success("保存标签成功！");
                self.$refs.tagForm.resetFields();
                self.dialogFormVisible = false;
                self.getTagListByPage(self.currentPage);
              } else {
                self.$message.error(res.data.message);
                console.log(res.data.err);
              }
            })
            .catch(e => {
              console.log(e);
              // self.$message.error(e)
            });
        } else {
          self.$message.error("信息填写不完整哟~");
          return false;
        }
      });
    },
    getTagListByPage(page) {
      let self = this;
      self.$axios
        ._get("tag", {
          page: page
        })
        .then(res => {
          if (!res.data.code) {
            self.tagList = res.data.data.res_limit;
            self.totalTags = res.data.data.total;
          } else {
            self.$message.error(res.data.message);
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteTag(id) {
      let self = this;
      self.$axios
        ._delete("tag/tag", {
          tagId: id
        })
        .then(res => {
          if (res.data.code) {
            self.getTagListByPage(self.currentPage);
          } else {
            self.$message.error(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateTag(tagName, description, id) {
      let self = this;
      self.form = { tagName, description };
      console.log("update");
      self.dialogFormVisible = true;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getTagListByPage(val);
    },
    prevClick() {
      this.currentPage = this.currentPage--;
    },
    nextClick() {
      this.currentPage = this.currentPage++;
    },
    filterTag(value, row) {
      return row.tag === value;
    }
  }
};
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
