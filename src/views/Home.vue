<template>
  <div class="main">
    <div class="left-layer"></div>
    <div class="box">
      <div class="aside">
        <div class="aside-content">
          <transition name="reveal-scale" appear>
            <a class="avatar reveal-scale">
              <img src="../assets/images/avatar.jpg" alt="collin" />
            </a>
          </transition>

          <p class="name">Collin</p>
          <p class="info">期待小黑大电影~</p>
          <ul class="links">
            <li>
              <a href="https://blog.csdn.net/tjzc1352640" target="_blank">
                <i class="iconfont icon-csdn"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/TJCollinZhang" target="_blank">
                <i class="iconfont icon-github"></i>
              </a>
            </li>
          </ul>
          <div class="gif"></div>
        </div>
      </div>
      <div class="content">
        <div class="gif reveal-left"></div>
        <div class="main-nav reveal-left">
          <div class="link">
            <router-link to="">首页</router-link>

            <router-link :to="{ name: 'Article' }">文章</router-link>
          </div>
        </div>
        <div class="main-nav reveal-right">
          <div class="link">
            <router-link :to="{ name: 'Project' }">项目</router-link>
            <router-link :to="{ name: 'About' }">关于</router-link>
          </div>
        </div>
        <p class="admin-entry">
          <router-link :to="{ name: 'ArticleList' }">进入管理页面</router-link>
        </p>
      </div>
    </div>
    <div class="right-layer"></div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss">
.main {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;

  .box {
    display: flex;
    height: 100%;
    width: 80%;
    position: relative;
    margin: 0 auto;
    clear: both;
    z-index: 1;

    .aside {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #ddd;
      border-right: 1px solid #bbb;

      .aside-content {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-top: 5vw;
        flex-direction: column;

        .avatar {
          display: block;
          margin-bottom: 20px;

          &:hover img {
            transform: rotate(360deg);
          }

          img {
            width: 100px;
            height: 100px;
            /*min-width: 100px;*/
            /*min-height: 100px;*/
            border-radius: 50%;
            background-color: #fff;
            transition: all 1s;
          }
        }

        .name {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #aaa;
          text-shadow: -1px -1px 1px #fff, 2px 2px 1px #000;
          transition: all 1s;
        }
        .name:hover {
          letter-spacing: 5px;
        }

        .info {
          font-size: 1rem;
          margin-bottom: 40px;
          width: 100%;
          text-align: center;
        }

        .info::after {
          content: "";
          display: block;
          height: 2px;
          width: 40%;
          margin-top: 30px;
          margin-left: auto;
          margin-right: auto;
          background-color: #3fb76c;
        }

        .links {
          width: 100%;
          display: flex;
          justify-content: center;

          li {
            margin-right: 20px;

            a {
              display: inline-block;
              text-decoration: none;
              i {
                font-size: 2rem;
                height: 50px;
                width: 50px;
              }
            }

            a:hover {
              color: #3fb76c;
            }
          }
        }
      }

      .gif {
        width: 100px;
        height: 100px;
        /*border-radius: 50%;*/
        margin-top: 5vw;
        /*min-width: 100px;*/
        /*min-height: 100px;*/
        transform-style: preserve-3d;
        transition: all 1s;
      }
      .gif::before {
        content: "";
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: url("../assets/images/bg2.gif") no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        position: absolute;
        left: 0;
        top: 0;
        backface-visibility: hidden;
      }
      .gif::after {
        position: absolute;
        content: "";
        width: 100px;
        height: 100px;
        transform: rotateY(-180deg);
        border-radius: 50%;
        left: 0;
        top: 0;
        background: url("../assets/images/bg3.gif") no-repeat;
        -webkit-background-size: cover;
        background-size: cover position absolute;
      }
      .gif:hover {
        transform: rotateY(180deg);
      }
    }

    .content {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #fff;

      .gif {
        width: 100%;
        height: 80px;
        /*min-width: 100px;*/
        background: url("../assets/images/bg10.gif") no-repeat;

        background-size: contain;
        background-position: right;
      }

      .main-nav {
        /*min-width: 400px;*/
        min-height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;

        .link {
          a {
            text-align: center;
            text-decoration: none;
            float: left;
            width: 100px;
            height: 100px;
            /*min-width: 100px;*/
            margin-left: 40px;
            border-radius: 50%;
            border: 1px solid #ccc;
            /*min-height: 100px;*/
            line-height: 100px;
            font-size: 20px;

            &:hover {
              border: 0;
              transition: background 1s;
              background-color: #3fb76c;
              color: #fff;
            }
          }
        }
      }

      .admin-entry {
        position: absolute;
        bottom: 10px;
        right: 10px;
        a {
          text-decoration: underline;
        }
      }
    }




  }
}

/*.main::after {*/
.right-layer {
  width: 50%;
  height: 100%;
  /*content: '';*/
  position: absolute;
  top: 0;
  background-color: #fff;
  transition: all 3s;
  background-image: linear-gradient(
    45deg,
    #ddd 25%,
    transparent 25%,
    transparent 50%,
    #ddd 50%,
    #ddd 75%,
    transparent 75%,
    transparent 100%
  );
  background-size: 50px 50px;
  /*z-index: -1;*/
}

.right-layer:hover {
  background-position: 300px 0;
}

/*.main::before {*/
.left-layer {
  width: 50%;
  height: 100%;
  /*content: '';*/
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  background: linear-gradient(
    45deg,
    #ddd 25%,
    transparent 25%,
    transparent 50%,
    #ddd 50%,
    #ddd 75%,
    transparent 75%,
    transparent 100%
  );
  background-size: 50px 50px;
  /*z-index: -1;*/
  transition: all 3s;
}
.left-layer:hover {
  background-position: 300px 0;
}

@media only screen and (max-width: 800px) {
  .main {
    .box {
      min-width: 480px;
      flex-direction: column;
      width: 100%;
      .aside {
        width: 100%;
        height: 50%;
        .gif {
          display: none;
        }
      }
      .content {
        height: 50%;
        width: 100%;
        .gif {
          display: none;
        }
      }
    }
    .left-layer {
      width: 0;
    }
    .right-layer {
      width: 0;
    }
  }
}

.reveal-scale-enter {
  transform: scale(0.5);
}
.reveal-scale-enter-active {
  transition: all 1s ease;
}
</style>
