<template>
  <div class="about-part">
    <div class="user">
      <div class="user-info">
        <ul>
          <li><i class="iconfont icon-people"></i>
            <p>我是Collin, 专注前端开发</p>
          </li>
          <li><i class="iconfont icon-position"></i>
            <p>暂居魔都</p>
          </li>
          <li><i class="iconfont icon-love"></i>
            <p>喜欢Coding，美剧，罗小黑</p>
          </li>
          <li><i class="iconfont icon-menu"></i>
            <p class="list">
              <a href="#"><i class="iconfont icon-csdn"></i></a>
              <a href="#"><i class="iconfont icon-github"></i></a>
              <a href="#"><i class="iconfont icon-weibo"></i></a>
            </p>
          </li>
        </ul>
      </div>
      <div class="user-image">
        <div class="image">
          <img src="/static/images/avatar.jpg" alt="collin">
        </div>
        <p class="name">Collin</p>
        <div class="email">
          <a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=GSgpIS0hKyohKi1ZaGg3enZ0"
             style="text-decoration:none;">Email <i class="iconfont icon-email-full"></i></a>
        </div>
      </div>
    </div>
    <div class="position">
      <div class="inner-box" id="container"></div>
    </div>
    <div class="more-project">
      <router-link to="/project">
        <p>Get More Project</p>
        <p>了解更多我的开源项目</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {MP} from '@/utils/map'

  export default {
    name: "About",
    mounted() {
      this.$nextTick(() => {
        MP('vAtU2iOAVVl8i2GySRLSiEOO8ts3u7ds').then(BMap => {
          var map = new BMap.Map("container");
          var myGeo = new BMap.Geocoder();
          // 将地址解析结果显示在地图上,并调整地图视野
          var myGeo = new BMap.Geocoder();
          // 将地址解析结果显示在地图上，并调整地图视野
          myGeo.getPoint("中兴通讯大厦", function (point) {
              if (point) {
                map.centerAndZoom(point, 16);
                map.addOverlay(new BMap.Marker(point));
              }
            },
            "上海市");
        })


      })
    }
  }
</script>

<style scoped lang="stylus">
  .about-part
    padding-top: 10px
    .user
      width 100%
      height auto
      display flex
      justify-content space-between
      .user-info
        width 620px
        /*float: left*/
        /*height 200px*/
        border 1px solid #eee
        padding 10px
        background: url("/static/images/user-info-bg.png");

        ul
          display flex
          flex-direction column
          align-content space-between
          justify-content space-between
          height 100%
          li
            height 30px
            display flex
            align-items center
            i:first-child
              padding 0 10px
              color #bbb
            p.list
              a
                text-decoration none
                i
                  color #555
                  padding: 0 10px

      .user-image
        background: url("/static/images/user-info-bg.png");
        width 260px
        padding 10px
        /*float right*/
        /*height 200px*/
        border 1px solid #eee
        display flex
        justify-content center
        align-items center
        flex-direction column
        .image
          padding-bottom 10px
          width 100%
          display flex
          justify-content center
          img
            width 100px
            height 100px
            border-radius: 50%
        .name
          font-size 16px
          padding-bottom 20px
        .email
          line-height 20px
          a
            display flex
            align-items center
            i
              font-size 20px
              padding 0 5px
    .position
      width 100%
      height 200px
      margin-top 20px
      padding 10px
      /*float left*/
      border 1px solid #eee
      .inner-box
        width 100%
        height 100%

    .more-project
      width 100%
      margin-top 20px
      height 200px
      padding 10px
      border 1px solid #eee
      a
        display flex
        flex-direction column
        justify-content center
        align-items center
        width 100%
        height 100%
        text-decoration none
        line-height 20px
        p:nth-child(1)
          font-size 30px
          line-height 60px
          font-weight 400
        &:hover
          background-color: #eee;

</style>
