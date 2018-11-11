<template>
  <div class="main">
    <el-form :model="form" :rules="rules" ref="articleForm" class="demo-form" label-position="left">
      <el-form-item prop="title">
        <el-input v-model="form.title" placeholder="请输入文章标题"></el-input>
      </el-form-item>
      <el-form-item prop="tags">
        <el-select style="width: 100%" v-model="form.tags" multiple placeholder="请选择文章标签">
          <el-option  v-for="tag in tagList" :key="tag._id" :label="tag.tagName" :value="tag._id"></el-option>
          <!--<el-option label="区域二" value="beijing"></el-option>-->
        </el-select>
      </el-form-item>

      <el-form-item prop="abstract">
        <el-input placeholder="请输入文章摘要" type="textarea" v-model="form.abstract"></el-input>
      </el-form-item>
    </el-form>
    <div class="editor">
      <m-editor ref="editor" v-model="form.content" @imgAdd="imgAdd" style="height: 100%;width: 100%" @save="saveArticle"></m-editor>
    </div>
    <div class="editor-footer">
      <el-button type="primary" @click="submitForm">提交</el-button>
    </div>
  </div>
</template>

<script>
  import {mavonEditor} from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  import BaseConfig from '@/config'

  export default {
    name: "ArticleInfo",
    data() {
      return {
        updateTag: false,
        tagList: [],
        form: {
          title: '',
          content: '',
          tags: [],
          abstract: ''
        },
        rules: {
          title: [
            {required: true, message: '请输入文章标题', trigger: 'blur'},
          ],
          tags: [
            {required: true, message: '请选择文章标题', trigger: 'blur'}
          ],
          abstract: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
        }
      };
    },
    // mounted() {
    //
    // },
    created() {
      let articleId = this.$route.params.articleId
      this.updateTag = false
      if(articleId) {
        this.updateTag = true
        this.$axios._get('article/article',{
          articleId: articleId
        }).then(
          (res) => {
            if (res.data.code) {
              this.form = res.data.result[0]
            } else {
              this.$message.error(res.data.message)
            }
          }
        ).catch((e) => {
          console.log(e)
        })
      }

      this.$axios._get('tag/tag_list').then(
        (res) => {
          if (res.data.code) {
            this.tagList = res.data.result.res_limit
          }
        }
      ).catch(
        (e) => {
          console.log(e)
        })
    },
    components: {
      'm-editor': mavonEditor
    },
    methods: {
      imgAdd(pos, $file) {
        let formData = new FormData()
        formData.append('file', $file)
        let config = {headers: {"Content-Type": "multipart/form-data"}}
        this.$axios._post('img', formData).then(
          (res) => {
            let url = `${BaseConfig.SERVER_NAME}images/${res.data.result.filename}`
            this.$refs.editor.$img2Url(pos, url)
            console.log(res)
          }
        ).catch(
          (e) => {
            console.log(e)
          }
        )

      },
      getLocalDate(){
        let d = new Date();
        d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
        return d
      },
      submitForm() {
        let self = this
        self.$refs.articleForm.validate((valid) => {
          if (valid) {
            if (self.updateTag) {
              self.$axios._put('article/article',{...self.form, updatedAt:self.getLocalDate()}).then(
                (res) => {
                  if (res.data.code) {
                    self.$message.success("文章保存成功")
                  } else {
                    self.$message.error("文章保存失败")
                  }
                }
              ).catch(e => {
                console.log(e)
              })
            } else {
              self.$axios._post('article/article',{...self.form, updatedAt:self.getLocalDate()}).then(
                (res) => {
                  if (res.data.code) {
                    self.$message.success("文章保存成功")
                  } else {
                    self.$message.error("文章保存失败")
                  }
                }
              ).catch(e => {
                console.log(e)
              })
            }
          } else {
            self.$message.error("必要信息未填写完整！")
            return false;
          }
        });
      },
      resetForm() {
        this.$refs.editor.resetFields();
      },
      saveArticle(value, render) {
        console.log('save', value, render)
      }
    }
  }
</script>

<style lang="stylus">

  .main
    display flex
    flex-direction column

    .editor
      height 700px
      display flex
      ol
        list-style decimal
      ul
        list-style disc

    .editor-footer
      width fit-content
      align-self flex-end
      padding 20px 0 0 20px
      float right
      .el-button
        width fit-content


</style>
