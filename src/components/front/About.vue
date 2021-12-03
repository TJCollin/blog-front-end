<template>
  <div class="about-part" ref="about">
    <div class="user reveal-left">
      <div class="user-info">
        <ul>
          <li>
            <i class="iconfont icon-people"></i>
            <p>我是Collin, 专注前端开发</p>
          </li>
          <li>
            <i class="iconfont icon-position"></i>
            <p>暂居魔都</p>
          </li>
          <li>
            <i class="iconfont icon-love"></i>
            <p>喜欢Coding，美剧，罗小黑</p>
          </li>
          <li>
            <i class="iconfont icon-menu"></i>
            <p class="list">
              <a href="https://blog.csdn.net/tjzc1352640" target="_blank"
                ><i class="iconfont icon-csdn"></i
              ></a>
              <a href="https://github.com/TJCollinZhang" target="_blank"
                ><i class="iconfont icon-github"></i
              ></a>
              <a href="https://weibo.com/3784593001/profile" target="_blank"
                ><i class="iconfont icon-weibo"></i
              ></a>
            </p>
          </li>
        </ul>
      </div>
      <div class="user-image">
        <div class="image">
          <a href="https://github.com/TJCollinZhang"
            ><img src="/static/images/avatar.jpg" alt="collin"
          /></a>
        </div>
        <p class="name">Collin</p>
        <div title="Send Me Offer ~" class="email">
          <a
            target="_blank"
            href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=GSgpIS0hKyohKi1ZaGg3enZ0"
            style="text-decoration: none"
            ><i class="iconfont icon-email-full"></i> Email</a
          >
        </div>
      </div>
    </div>
    <div class="position reveal-right">
      <div class="inner-box" id="container"></div>
    </div>
    <div class="more-project reveal-left">
      <router-link :to="{ name: 'Project' }">
        <p>Get More Project</p>
        <p>了解更多我的开源项目</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { MP } from "@/utils/map";
import FooterMixin from "@/utils/mixin/footer-mixin";
// import scrollReveal from "scrollreveal";

export default {
  name: "About",
  mixins: [FooterMixin],
  data() {
    return {
      // scrollReveal: scrollReveal(),
    };
  },
  mounted() {
    this.footer(this.$refs.about.offsetHeight);
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
    // this.scrollReveal.reveal(".reveal-right", {
    //   // 动画的时长
    //   duration: 500,
    //   // 延迟时间
    //   delay: 200,
    //   // 动画开始的位置，'bottom', 'left', 'top', 'right'
    //   origin: "right",
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
    this.$nextTick(() => {
      MP("vAtU2iOAVVl8i2GySRLSiEOO8ts3u7ds").then((BMap) => {
        var map = new BMap.Map("container");
        var myGeo = new BMap.Geocoder();
        // 将地址解析结果显示在地图上,并调整地图视野
        // 将地址解析结果显示在地图上，并调整地图视野
        myGeo.getPoint(
          "中兴通讯大厦",
          function (point) {
            if (point) {
              map.centerAndZoom(point, 16);
              map.addOverlay(new BMap.Marker(point));
            }
          },
          "上海市"
        );
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.about-part {
  overflow: auto;
  padding-top: 10px;
  .user {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    .user-info {
      width: 65%;
      border: 1px solid #eee;
      padding: 10px;
      background: url("/static/images/user-info-bg.png");

      ul {
        display: flex;
        flex-direction: column;
        align-content: space-between;
        justify-content: space-between;
        height: 100%;
        li {
          height: 30px;
          display: flex;
          align-items: center;
          i:first-child {
            padding: 0 10px;
            color: #bbb;
          }
          p.list {
            a {
              &:hover {
                i {
                  color: #409eff;
                }
              }
              text-decoration: none;
              i {
                color: #555;
                padding: 0 10px;
              }
            }
          }
        }
      }
    }
    .user-image {
      background: url("/static/images/user-info-bg.png");
      width: 30%;
      padding: 10px;
      border: 1px solid #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .image {
        padding-bottom: 10px;
        width: 100%;
        display: flex;
        justify-content: center;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
      }
      .name {
        font-size: 16px;
        padding-bottom: 20px;
      }
      .email {
        line-height: 20px;
        a {
          display: flex;
          align-items: center;
          &:hover {
            color: #409eff;
          }
          i {
            font-size: 20px;
            padding: 0 5px;
          }
        }
      }
    }
  }
  .position {
    width: 100%;
    height: 200px;
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #eee;
    .inner-box {
      width: 100%;
      height: 100%;
    }
  }
  .more-project {
    width: 100%;
    margin-top: 20px;
    height: 200px;
    padding: 10px;
    border: 1px solid #eee;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      text-decoration: none;
      line-height: 20px;
      p:nth-child(1) {
        font-size: 30px;
        line-height: 60px;
        font-weight: 400;
      }
      &:hover {
        background-color: #eee;
      }
    }
  }
}

@media screen and (max-width: 800px) {
  .about-part {
    .user {
      .user-info {
        width: 70%;
        border-right: 0;
      }
      .user-image {
        width: 30%;
        border-left: 0;
      }
    }
  }
}
</style>
