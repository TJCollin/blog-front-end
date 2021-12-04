<template>
  <div class="article-part" ref="article">
    <div class="article reveal-left">
      <ul>
        <li class="item" v-for="article in articleList" :key="article._id">
          <h3 class="title">
            <router-link
              :to="{
                name: 'ArticleContent',
                params: { articleId: article._id },
              }"
              >{{ article.title }}</router-link
            >
          </h3>
          <p class="abstract">{{ article.abstract }}</p>
          <p class="article-info">
            <span class="info">{{ article.updatedAt.split(" ")[0] }}</span>
            <span v-for="tag in article.tagArr" :key="tag._id">
              <span class="dot"><i class="iconfont icon-dot"></i></span>
              <span class="info">{{ tag.tagName }}</span>
            </span>
          </p>
        </li>
      </ul>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </div>
    <div class="side reveal-top">
      <div class="hot">
        <h3 class="title">热门文章</h3>
        <ul>
          <li v-for="hot in hotList" :key="hot._id">
            <router-link :to="hot._id">{{ hot.title }}</router-link>
          </li>
        </ul>
      </div>
      <div class="tags">
        <div class="title">标签</div>
        <ul class="tag-list">
          <li class="tag" v-for="tag in tagList" :key="tag._id">
            <a href="">{{ tag.tagName }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import FooterMixin from "@/utils/mixin/footer-mixin";
import { Pagination } from "element-ui";
// import scrollReveal from "scrollreveal";
import { mapGetters } from "vuex";
import { debounce } from "@/utils/common";

export default {
  name: "Article",
  mixins: [FooterMixin],
  components: {
    "el-pagination": Pagination,
  },
  data() {
    return {
      total: 1,
      currentPage: 1,
      articleList: [],
      hotList: [],
      tagList: [],
      //   scrollReveal: scrollReveal(),
    };
  },
  computed: {
    ...mapGetters(["getKeywords"]),
  },
  // watch: {
  // 	getKeywords(newVal) {
  // 		debounce(this.getArticleListByPage(), 300)
  //
  //   }
  // },
  created() {

    this.getArticleListByPage();
    this.getTagList();
    this.$watch("getKeywords", debounce(this.getArticleListByPage, 300));
  },
  mounted() {
    this.footer(this.$refs.article.offsetHeight);
    // this.scrollReveal.reveal(".reveal-top", {
    //   // 动画的时长
    //   duration: 500,
    //   // 延迟时间
    //   delay: 200,
    //   // 动画开始的位置，'bottom', 'left', 'top', 'right'
    //   origin: "bottom",
    //   // 回滚的时候是否再次触发动画
    //   reset: false,
    //   // 在移动端是否使用动画
    //   mobile: false,
    //   // 滚动的距离，单位可以用%，rem等
    //   distance: "50px",
    //   // 其他可用的动画效果
    //   opacity: 0.001,
    //   easing: "linear",
    // });
    // this.scrollReveal.reveal(".reveal-left", {
    //   // 动画的时长
    //   duration: 500,
    //   // 延迟时间
    //   delay: 200,
    //   // 动画开始的位置，'bottom', 'left', 'top', 'right'
    //   origin: "left",
    //   // 回滚的时候是否再次触发动画
    //   reset: false,
    //   // 在移动端是否使用动画
    //   mobile: false,
    //   // 滚动的距离，单位可以用%，rem等
    //   distance: "50px",
    //   // 其他可用的动画效果
    //   opacity: 0.001,
    //   easing: "linear",
    // });
  },
  methods: {
    getTagList() {

      this.$axios
        ._get("tag")
        .then((res) => {
          if (!res.data.code) {
            this.tagList = res.data.data.res_limit;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getArticleListByPage() {
      const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      let self = this;
      self.$axios
        ._get("article/list", {
          page: this.currentPage,
          keywords: this.getKeywords,
        })
        .then((res) => {
           loading.close();
          if (!res.data.code) {
            self.articleList = res.data.data.res_limit;
            self.total = res.data.data.total;
            if (Object.is(self.hotList.length, 0)) {
              self.hotList = res.data.data.res_limit;
            }
          } else {
            self.$message.error(res.data.message);
          }
        })
        .catch((e) => {
           loading.close();
          console.log(e);
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.article-part {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  .article {
    width: 70%;
    display: flex;
    flex-direction: column;

    ul {
      flex: 1;
      padding: 0 30px 20px 10px;

      li {
        padding-top: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid #eee;
        .title {
          margin-bottom: 15px;
          width: fit-content;
          position: relative;

          a {
            text-decoration: none;
            font-size: 20px;
            font-weight: 400;
          }
          &::after {
            content: "";
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            height: 1px;
            transform: scaleX(0);
            transform-origin: center center;
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
            background-color: #555;
          }
          &:hover::after {
            transform: scaleX(1);
          }
        }
        .abstract {
          padding-bottom: 15px;
        }
        .article-info {
          font-size: 12px;
          .dot {
            i {
              font-size: 12px;
            }
          }
        }
      }
    }
    .pagination {
      display: flex;
      justify-content: center;
    }
  }
  .side {
    width: 30%;
    .hot {
      padding-top: 20px;
      .title {
        font-size: 16px;
        font-weight: 400;
        padding: 10px 0;
      }

      ul {
        li {
          a {
            width: 100%;
            display: block;
            overflow: hidden;
            white-space: nowrap;
            line-height: 40px;
            text-overflow: ellipsis;
            text-indent: 10px;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    .tags {
      padding-top: 20px;
      .title {
        font-size: 16px;
      }
      .tag-list {
        padding-left: 10px;
        .tag {
          float: left;
          padding: 0 10px;

          a {
            line-height: 40px;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .article-part {
    justify-content: center;
    .article {
      width: 90%;
    }
    .side {
      display: none;
    }
  }
}
</style>
