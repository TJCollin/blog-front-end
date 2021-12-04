<template>
  <div class="project-wrapper" ref="project">
    <ul class="reveal-rotate">
      <li v-for="project in projectList" :key="project._id">
        <div class="project-box">
          <div class="project-icon">
            <i class="iconfont" :class="project.projectIcon"></i>
          </div>
          <p class="project-title">{{ project.projectName }}</p>
          <p class="project-desc">{{ project.projectDesc }}</p>
          <div class="project-links">
            <div class="link view-link">
              <a :href="project.projectUrl"
                ><i class="iconfont icon-eye"></i>view</a
              >
            </div>
            <div class="link source-code">
              <a :href="project.projectCode"
                ><i class="iconfont icon-code"></i>github</a
              >
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import scrollReveal from "scrollreveal";
import FooterMixin from "@/utils/mixin/footer-mixin";

export default {
  name: "project",
  mixins: [FooterMixin],


  data() {
    return {
      projectList: [],
      //   scrollReveal: scrollReveal(),
    };
  },
  created() {
    this.$startLoading()
    this.getProjectList();
  },
  mounted() {
    this.footer(this.$refs.project.offsetHeight);
    // this.scrollReveal.reveal(".reveal-rotate", {
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
    //   distance: "20px",
    //   // 其他可用的动画效果
    //   opacity: 0.001,
    //   easing: "linear",
    // });
  },
  methods: {
    getProjectList() {
      this.$axios._get("project").then((res) => {
        this.$endLoading()
        if (!res.data.code) {
          this.projectList = res.data.data.res_limit;
        } else {
          this.$message.error(res.data.message);
        }
      }).catch((err) => {
        this.$message.error("请求错误");
        this.$endLoading()
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.project-wrapper {
  overflow: auto;
  ul {
    padding: 10px;
    li {
      float: left;
      margin-right: 10px;
      margin-bottom: 10px;
      width: 210px;
      border: 1px solid #eee;
      height: 280px;
      background-color: #fff;
      transition: all 0.5s;
      &:hover {
        background-color: rgba(0, 0, 0, 0.02);
        box-shadow: 2px 2px 5px #ccc;
        transform: scale(1.05);
        .project-icon {
          transform: rotateY(180deg);
        }
      }
      .project-box {
        .project-icon {
          text-align: center;
          height: 120px;
          line-height: 120px;
          transition: all 0.5s;
          i.iconfont {
            font-size: 6rem;
          }
        }
        .project-title {
          text-align: center;
          font-weight: 700;
          font-size: 1.2rem;
          line-height: 30px;
        }
        .project-desc {
          text-align: center;
          height: 80px;
          padding: 10px;
        }
        .project-links {
          height: 50px;
          display: flex;
          border-top: 1px solid #eee;
          justify-content: center;
          .link {
            flex: 1;
            text-align: center;
            a {
              display: block;
              line-height: 50px;
            }
            &:hover {
              a {
                color: #409eff;
                text-decoration: underline #409eff;
              }
            }
          }
          .view-link {
            position: relative;
            &::after {
              content: "";
              position: absolute;
              width: 2px;
              height: 70%;
              top: 15%;
              right: 0;
              background-color: #eee;
            }
          }
        }
      }
    }
  }
}
</style>
