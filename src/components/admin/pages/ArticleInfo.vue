<template>
  <div class="main">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-position="left">
      <el-form-item prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入文章标题"></el-input>
      </el-form-item>
      <el-form-item  prop="region">
        <el-select style="width: 100%" v-model="ruleForm.region" multiple placeholder="请选择活动标签">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item prop="desc">
        <el-input placeholder="请输入文章摘要" type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
    </el-form>
    <div class="editor">
      <m-editor style="height: 100%"></m-editor>
    </div>
    <div class="editor-footer">
      <el-button type="primary">提交</el-button>
    </div>
  </div>
</template>

<script>
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  export default {
    name: "ArticleInfo",
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
          ],
          type: [
            {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
          ],
          resource: [
            {required: true, message: '请选择活动资源', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
        }
      };
    },
    components: {
      'm-editor': mavonEditor
      // or 'mavon-editor': mavonEditor
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="stylus">

  .main
    display flex
    height 100%
    flex-direction column
    ol
      list-style decimal
    ul
      list-style disc
    .editor
      flex 1
    .editor-footer
      width fit-content
      align-self flex-end
      padding 20px 0 0 20px
      float right
      .el-button
        width fit-content


</style>
