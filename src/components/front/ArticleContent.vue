<template>
  <div class="wrapper" ref="articleContent">
    <div class="content-box">
      <h1 class="article-title">{{ articleInfo.title }}</h1>
      <mavon-editor
        :boxShadow="boxShadow"
        v-model="articleInfo.content"
        :subfield="false"
        :toolbarsFlag="false"
        defaultOpen="preview"
      ></mavon-editor>
    </div>
    <div class="footer-box">
      <ul>
        <li>最后修改时间: {{ articleInfo.updatedAt }}</li>
        <li>
          标签：<span v-for="tag in articleInfo.tagArr" :key="tag._id"
            >{{ tag.tagName }}
          </span>
        </li>
        <li>作者：Collin</li>
        <li>
          著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
        </li>
      </ul>
    </div>
    <div class="share-list">
      <ul>
        <li>
          <a
            :href="`http://connect.qq.com/widget/shareqq/index.html?url=blog.collinjs.site&title=${articleInfo.title}`"
            target="_blank"
            ><i class="iconfont icon-qq"></i
          ></a>
        </li>
        <li>
          <a
            :href="`https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=blog.collinjs.site&title=${articleInfo.title}`"
            target="_blank"
            ><i class="iconfont icon-qqzone"></i
          ></a>
        </li>
        <li>
          <a
            :href="`http://service.weibo.com/share/share.php?url=blog.collinjs.site&title=${articleInfo.title}`"
            target="_blank"
            ><i class="iconfont icon-weibo"></i
          ></a>
        </li>
        <li>
          <a
            :href="`https://www.douban.com/share/service?url=blog.collinjs.site&title=${articleInfo.title}`"
            target="_blank"
            ><i class="iconfont icon-douban"></i
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import FooterMixin from "@/utils/mixin/footer-mixin";
import "mavon-editor/dist/css/index.css";
// import BaseConfig from '@/config'
export default {
  name: "ArticleInfo",
  mixins: [FooterMixin],
  components: {
    "mavon-editor": mavonEditor,
  },
  data() {
    return {
      boxShadow: false,

      articleInfo: {
        _id: "",
        title: "标题",
        content: "",
        updatedAt: "",
        tagArr: [],
      },
    };
  },
  created() {
    this.$startLoading()
    this.$axios
      ._get("article", {
        articleId: this.$route.params.articleId,
      })
      .then((res) => {
        this.$endLoading()
        if (!res.data.code) {
          this.articleInfo = res.data.data[0];
          this.$nextTick(() => {
            this.footer(this.$refs.articleContent.offsetHeight);
          });
        }
      }).catch((err) => {
        this.$endLoading()
        this.$message.error("请求错误")
        console.log(err)
      });
  },
};
</script>

<style lang="scss">
.wrapper {
  overflow: auto;
  position: relative;
  .content-box {
    margin-top: 10px;
    padding: 0 10px;
    width: 100%;
    height: auto;
    border: 1px solid #eee;
    .article-title {
      border-bottom: 1px dashed #ccc;
      font-size: 2rem;
      line-height: 60px;
      text-align: center;
    }
    .v-note-wrapper .v-note-panel {
      border: none;
      .v-note-show .v-show-content {
        background-color: transparent;
      }
      ol {
        list-style: decimal;
      }
      ul {
        list-style: disc;
      }
    }
  }
  .footer-box {
    margin-top: 10px;
    border: 1px solid #eee;
    ul {
      padding: 20px;
      li {
        height: 30px;
        line-height: 30px;
      }
    }
  }
  .share-list {
    position: fixed;
    border: 1px solid #eee;
    overflow: hidden;
    padding: 10px;
    top: 50%;
    transform: translate(-120%, -50%);
    ul {
      li {
        a {
          color: #ddd;
          &:hover {
            color: #409eff;
          }
        }
        i.iconfont {
          display: block;
          padding: 5px;
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
