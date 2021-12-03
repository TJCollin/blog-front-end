<template>
  <div class="list-box">
    <div class="search">
      <el-button @click="addProject">新增项目</el-button>
    </div>
    <el-table
      :data="projectList"
      style="width: 100%; height: 100%"
      min-height="250"
    >
      <el-table-column prop="projectName" label="项目名称">
        <template slot-scope="scope">
          <router-link to="">
            {{ scope.row.projectName }}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="projectIcon" label="项目图标">
        <template slot-scope="scope">
          <i
            style="display: block; padding-left: 20px"
            :class="
              scope.row.projectIcon ? `iconfont ${scope.row.projectIcon}` : ''
            "
          ></i>
          <!--<div style="width: 100%;height: 100%; text-align: center">-->
          <!--<i :class="scope.row.projectIcon? `iconfont ${scope.row.projectIcon}`:''"></i>-->
          <!--</div>-->
        </template>
      </el-table-column>
      <el-table-column prop="projectUrl" label="预览地址"> </el-table-column>
      <el-table-column prop="projectCode" label="源码地址"> </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="updateProject(scope.row)"
            type="text"
            size="small"
          >
            修改
          </el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.row._id)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="table-pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalProjects"
      >
      </el-pagination>
    </div>
    <el-dialog title="新增项目" :visible.sync="dialogFormVisible">
      <el-form
        :model="form"
        :rules="rules"
        label-width="120px"
        ref="projectForm"
        @keyup.enter.native="submitForm"
      >
        <el-form-item label="项目名称" prop="projectName">
          <el-input
            v-model="form.projectName"
            autocomplete="off"
            ref="projectName"
          ></el-input>
        </el-form-item>
        <el-form-item label="标签描述">
          <el-input v-model="form.projectDesc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="预览地址">
          <el-input v-model="form.projectUrl" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="源码地址" prop="projectCode">
          <el-input v-model="form.projectCode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="项目图标">
          <ul>
            <li>
              <el-button
                @click="changeIcon('icon-vue')"
                :class="form.projectIcon === 'icon-vue' ? 'focused-button' : ''"
              >
                <i class="iconfont icon-vue"></i>
              </el-button>
            </li>
            <li>
              <el-button
                @click="changeIcon('icon-node')"
                :class="
                  form.projectIcon === 'icon-node' ? 'focused-button' : ''
                "
              >
                <i class="iconfont icon-node"></i>
              </el-button>
            </li>
            <li>
              <el-button
                @click="changeIcon('icon-react')"
                :class="
                  form.projectIcon === 'icon-react' ? 'focused-button' : ''
                "
              >
                <i class="iconfont icon-react"></i>
              </el-button>
            </li>
            <li>
              <el-button
                @click="changeIcon('icon-angular')"
                :class="
                  form.projectIcon === 'icon-angular' ? 'focused-button' : ''
                "
              >
                <i class="iconfont icon-angular"></i>
              </el-button>
            </li>
          </ul>
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
  Pagination,
} from "element-ui";

export default {
  name: "ProjectList",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        projectName: "",
        projectUrl: "",
        projectCode: "",
        projectIcon: "",
        projectDesc: "",
      },
      rules: {
        projectName: {
          required: true,
          message: "项目名称不能为空哟！",
          trigger: "blur",
        },
        projectCode: {
          required: true,
          message: "源码地址不能为空哟！",
          trigger: "blur",
        },
      },
      currentPage: 1,
      totalProjects: 1,
      projectList: [],
    };
  },
  components: {
    "el-form": Form,
    "el-form-item": FormItem,
    "el-button": Button,
    "el-input": Input,
    "el-table": Table,
    "el-table-column": TableColumn,
    "el-dialog": Dialog,
    "el-pagination": Pagination,
  },
  created() {
    this.getProjectListByPage(1);
  },
  methods: {
    addProject() {
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs.projectForm.resetFields();
        this.$refs.projectName.focus();
      });
    },
    submitForm() {
      let self = this;
      self.$refs.projectForm.validate((valid) => {
        if (valid) {
          self.$refs.projectForm.validate((valid) => {
            if (valid) {
              self.$axios
                ._post("project", self.form)
                .then((res) => {
                  if (!res.data.code) {
                    self.$message.success(res.data.message);
                    self.$refs.projectForm.resetFields();
                    self.dialogFormVisible = false;
                    self.getProjectListByPage(self.currentPage);
                  } else {
                    self.$message.error(res.data.message);
                    console.log(res.data.err);
                  }
                })
                .catch((e) => {
                  console.log(e);
                });
            } else {
              self.$message.error("必要信息未填写完整！");
              return false;
            }
          });
        } else {
          self.message.error("必要信息未填写完整哟~");
          return false;
        }
      });
    },
    getProjectListByPage(page) {
      let self = this;
      self.$axios
        ._get("project", {
          page: page,
        })
        .then((res) => {
          if (!res.data.code) {
            self.projectList = res.data.result.res_limit;
            self.totalProjects = res.data.result.total;
          } else {
            self.$message.error(res.data.message);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    changeIcon(icon) {
      this.form.projectIcon = icon;
    },
    deleteRow(id) {
      let self = this;
      self.$axios
        ._delete("project/project", {
          projectId: id,
        })
        .then((res) => {
          if (res.data.code) {
            self.getProjectListByPage(self.currentPage);
          } else {
            self.$message.error(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateProject(row) {
      this.form = row;
      this.dialogFormVisible = true;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.getProjectListByPage(val);
    },
    filterProject(value, row) {
      return row.project === value;
    },
  },
};
</script>

<style lang="scss" scoped>
.list-box {
  display: flex;
  flex-direction: column;
  .el-dialog {
    ul {
      li {
        float: left;
        margin-right: 20px;
        .focused-button {
          color: #3a8ee6;
          border-color: #3a8ee6;
          background-color: #ecf5ff;
        }
      }
    }
  }
  .search {
    height: 60px;
    align-self: flex-end;
  }
  .el-table {
    flex: 1;
    border-top: 2px solid #eee;
    a {
      text-decoration: none;
    }
  }
  .table-pagination {
    align-self: flex-end;
  }
}
</style>
