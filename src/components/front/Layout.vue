<template>
  <div class="main">
    <div class="header">
      <div class="center">
        <div class="nav">
          <ul>
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li :class="isActive('article')">
              <router-link :to="{name: 'Article'}">文章</router-link>
            </li>
            <li :class="isActive('project')">
              <router-link :to="{name: 'Project'}">项目</router-link>
            </li>
            <li :class="isActive('about')">
              <router-link :to="{name: 'About'}">关于</router-link>
            </li>
          </ul>
        </div>
        <div class="search">
          <div class="input-box">
            <input type="text" placeholder="搜索...">
          </div>
          <div class="search-icon">
            <i class="iconfont icon-search"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="content" ref="content">
      <canvas id="canvas" width="1200" height="803"></canvas>
      <div class="center">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer" :class="getFooterFixed ? 'footer-fixed' : ''">
      <p>
        &copy;2018-
        <a href="https://github.com/TJCollinZhang">Collin的博客</a>
        Powered by Vue & Koa
      </p>
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: "Layout",
    mounted() {
      this.bgCanvas()
    },
    computed: {
      ...mapGetters([
        'getFooterFixed'
      ])
    },
    components: {

    },
    methods: {
      isActive(str) {
        if (this.$route.path.includes(str)) {
          return 'active'
        }
        return ''

      },
      bgCanvas() {
        let canvas = null
        if (!this.canvasDom) {
          this.canvasDom = document.querySelector('#canvas')
          canvas = this.canvasDom
        } else {
          canvas = this.canvasDom
        }
        let ctx = canvas.getContext("2d")
        let cw = canvas.width = window.innerWidth
        let cx = cw / 2
        let ch = canvas.height = window.innerHeight
        let cy = ch / 2

        ctx.fillStyle = "#ccc";
        const linesNum = 16;
        let linesRy = [];
        let requestId = null;

        function Line(flag) {
          this.flag = flag;
          this.a = {};
          this.b = {};
          if (flag == "v") {
            this.a.y = 0;
            this.b.y = ch;
            this.a.x = randomIntFromInterval(0, ch);
            this.b.x = randomIntFromInterval(0, ch);
          } else if (flag == "h") {
            this.a.x = 0;
            this.b.x = cw;
            this.a.y = randomIntFromInterval(0, cw);
            this.b.y = randomIntFromInterval(0, cw);
          }
          this.va = randomIntFromInterval(25, 100) / 100;
          this.vb = randomIntFromInterval(25, 100) / 100;

          this.draw = function () {
            ctx.strokeStyle = "#f4f4f4";
            ctx.beginPath();
            ctx.moveTo(this.a.x, this.a.y);
            ctx.lineTo(this.b.x, this.b.y);
            ctx.stroke();
          }

          this.update = function () {
            if (this.flag == "v") {
              this.a.x += this.va;
              this.b.x += this.vb;
            } else if (flag == "h") {
              this.a.y += this.va;
              this.b.y += this.vb;
            }

            this.edges();
          }

          this.edges = function () {
            if (this.flag == "v") {
              if (this.a.x < 0 || this.a.x > cw) {
                this.va *= -1;
              }
              if (this.b.x < 0 || this.b.x > cw) {
                this.vb *= -1;
              }
            } else if (flag == "h") {
              if (this.a.y < 0 || this.a.y > ch) {
                this.va *= -1;
              }
              if (this.b.y < 0 || this.b.y > ch) {
                this.vb *= -1;
              }
            }
          }

        }

        for (var i = 0; i < linesNum; i++) {
          var flag = i % 2 == 0 ? "h" : "v";
          var l = new Line(flag);
          linesRy.push(l);
        }

        function Draw() {
          requestId = window.requestAnimationFrame(Draw);
          ctx.clearRect(0, 0, cw, ch);

          for (var i = 0; i < linesRy.length; i++) {
            var l = linesRy[i];
            l.draw();
            l.update();
          }
          for (var i = 0; i < linesRy.length; i++) {
            var l = linesRy[i];
            for (var j = i + 1; j < linesRy.length; j++) {
              var l1 = linesRy[j]
              Intersect2lines(l, l1);
            }
          }
        }

        function Init() {
          linesRy.length = 0;
          for (var i = 0; i < linesNum; i++) {
            var flag = i % 2 == 0 ? "h" : "v";
            var l = new Line(flag);
            linesRy.push(l);
          }

          if (requestId) {
            window.cancelAnimationFrame(requestId);
            requestId = null;
          }

          cw = canvas.width = window.innerWidth;
          cx = cw / 2;
          ch = canvas.height = window.innerHeight;
          cy = ch / 2;

          Draw();
        };

        setTimeout(function () {
          Init();
          addEventListener('resize', Init, false);
        }, 15);

        function Intersect2lines(l1, l2) {
          var p1 = l1.a,
            p2 = l1.b,
            p3 = l2.a,
            p4 = l2.b;
          var denominator = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);
          var ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denominator;
          var ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denominator;
          var x = p1.x + ua * (p2.x - p1.x);
          var y = p1.y + ua * (p2.y - p1.y);
          if (ua > 0 && ub > 0) {
            markPoint({
              x: x,
              y: y
            })
          }
        }

        function markPoint(p) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI);
          ctx.fillStyle = "#eeeeee";
          ctx.fill();
        }

        function randomIntFromInterval(mn, mx) {
          return ~~(Math.random() * (mx - mn + 1) + mn);
        }
      },
    }
  }
</script>

<style scoped lang="stylus">

  .slide-fade-enter-active {
    transition: all .5s ease;
  }

  .slide-fade-enter {
    transform: translateX(-100%);
  }

  //.slide-fade-leave {
  //    transform: translateX(-100%);
  //}
  .footer-fixed
    position fixed
    left 0
    bottom 0

  .main
    width: 100%;
    position: absolute;
    left: 0;
    right 0
    top: 0;
    bottom: 0;

  .header
    width 100%
    height 60px
    border-bottom 1px solid #eee
    background-color: #fff;
    .center
      width 900px
      height 100%
      margin 0 auto
      .nav
        float: left;
        ul

          li
            float: left
            a
              height 60px
              font-size 1.5rem
              padding 0 20px
              line-height: 60px
              text-decoration none
              display block
              color #8c8c8c

              &:hover
                color #409EFF
          li.active
            a
              color #409EFF
      .search
        float right
        height 100%
        display flex
        justify-content flex-end
        -webkit-align-items center
        align-items center
        .input-box
          height 30px
          width 150px
          flex 1
          border-bottom 1px solid #eee
          input
            border none
            outline none
            width 100%
            height: 100%
        .search-icon
          width 30px
          height 30px
          border-bottom 1px solid #eee
          display flex
          align-items center
          justify-content center
          i
            display block
            cursor: pointer;

  .content
    margin 0 auto
    width: 900px
    padding-bottom 20px
    #canvas
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: -1;

  .footer
    width: 100%
    height: 60px
    background-color: #fff;
    border-top: 1px solid #eee
    p
      text-align center
      line-height 60px


</style>
