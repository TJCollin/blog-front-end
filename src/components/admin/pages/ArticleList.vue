<template>
  <div class="list-box">
    <div class="search">
      <el-input placeholder="搜索文章标题" clearable v-model="keywords" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="getArticleListByPage"></el-button>
      </el-input>
    </div>
    <el-table
      :data="articleList"
      style="width: 100%;height: 100%"

      min-height="250">
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="updatedAt"
        sortable="true"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="tags"
        label="标签"
        :filters="[{ text: 'Javascript', value: 'Javascript' }, { text: 'Java', value: 'java' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            disable-transitions
            type="success"
            v-for="tag in scope.row.tagArr"
            :key="tag._id"
          >
            {{tag.tagName}}
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
            @click.native.prevent="updateArticle(scope.row._id)"
            type="text"
            size="small">
            修改
          </el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.row._id)"
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
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { debounce } from "../../../utils/common";
import { Button, Input, Tag, Table, TableColumn, Pagination } from "element-ui";

export default {
  name: "ArticleList",
  data() {
    return {
      total: 1,
      currentPage: 1,
      articleList: [],
      keywords: ""
    };
  },
  components: {
    "el-button": Button,
    "el-input": Input,
    "el-tag": Tag,
    "el-table": Table,
    "el-table-column": TableColumn,
    "el-pagination": Pagination
  },
  created() {
    this.getArticleListByPage();
    this.$watch("keywords", debounce(this.getArticleListByPage, 300));
  },
  methods: {
    searchArticleList() {},
    getArticleListByPage() {
      let self = this;
      self.$axios
        ._get("article/list", {
          page: this.currentPage,
          keywords: this.keywords
        })
        .then(res => {
          if (!res.data.code) {
            self.articleList = res.data.data.res_limit;
            self.total = res.data.data.total;
          } else {
            self.$message.error(res.data.message);
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateArticle(articleId) {
      this.$router.push({
        name: "ArticleInfo",
        params: { articleId: articleId }
      });
    },
    deleteRow(id) {
      let self = this;
      self.$axios
        ._delete("article/article", {
          articleId: id
        })
        .then(res => {
          if (res.data.code) {
            self.getArticleListByPage(self.currentPage);
          } else {
            self.$message.error(res.data.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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

    .search
      width 100%
      height 60px
    .el-table
      border-top 2px solid #eee
      flex 1
      .el-tag
        margin 0 5px 0 0
      a
        text-decoration none
    .table-pagination
      align-self flex-end

</style>
