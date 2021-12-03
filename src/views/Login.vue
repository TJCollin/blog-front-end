<template>
  <div class="main">
    <div class="login-box">
      <el-form
        ref="loginForm"
        label-position="right"
        label-width="60px"
        :model="loginForm"
        :rules="rules"
        @keyup.enter.native="login"
      >
        <el-form-item label="账号" prop="name">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="login">登录</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { Form, Button, FormItem, Input } from "element-ui";
export default {
  name: "AdminLogin",
  data() {
    return {
      labelPosition: "right",
      loginForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "账号不能为空哟！", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空哟", trigger: "blur" },
        ],
      },
    };
  },

  components: {
    "el-form": Form,
    "el-form-item": FormItem,
    "el-button": Button,
    "el-input": Input,
  },

  methods: {
    login() {
      let self = this;
      self.$refs.loginForm.validate((valid) => {
        if (valid) {
          self.$axios
            ._post("user/login", {
              username: self.loginForm.name,
              password: self.loginForm.password,
            })
            .then(
              (res) => {
                if (!res.data.code) {
                  console.log(res.data);
                  // self.$axios.defaults.headers.common['Authorization'] = res.data.data.token
                  window.localStorage.setItem(
                    "BLOG_TOKEN",
                    JSON.stringify(res.data.data)
                  );
                  self.$router.push({ name: "ArticleList" });
                } else {
                  this.$message.error(res.data.message);
                }
              },
              (err) => {
                console.log(err);
              }
            );
        } else {
          self.$message.error("必要信息未填写完整！");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.loginForm.resetFields();
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url("/static/images/user-info-bg.png");
  display: flex;
  align-items: center;
  justify-content: center;
  .login-box {
    padding: 20px;
    justify-content: center;
    width: 300px;
    .el-form {
      padding: 10px;
    }
  }
}
</style>
