<template>
    <div class="aricle-part">
      <div class="article">
        <ul>
          <li class="item">
            <h3 class="title"><a href="">标题</a></h3>
            <p class="abstract">二叉树中的节点最多只能有两个子节点:一个是左侧子节点，另一个是右侧子节点。这些定 义有助于我们写出更高效的向/从树中插入、查找和删除节点的算法。</p>
            <p class="article-info">
              <span class="info">2018</span>
              <span class="dot"><i class="iconfont icon-dot"></i></span>
              <span class="info">2018</span>
              <span class="dot"><i class="iconfont icon-dot"></i></span>
              <span class="info">2018</span>
              <span class="dot"><i class="iconfont icon-dot"></i></span>
              <span class="info">2018</span>
            </p>

          </li>
          <li class="item">
            <h3 class="title"><a href="">标题</a></h3>
            <p class="abstract">二叉树中的节点最多只能有两个子节点:一个是左侧子节点，另一个是右侧子节点。这些定 义有助于我们写出更高效的向/从树中插入、查找和删除节点的算法。</p>
            <p class="article-info">
              <span class="info">2018</span>
              <span class="dot"><i class="iconfont icon-dot"></i></span>
              <span class="info">2018</span>
              <span class="dot"><i class="iconfont icon-dot"></i></span>
              <span class="info">2018</span>
              <span class="dot"><i class="iconfont icon-dot"></i></span>
              <span class="info">2018</span>
            </p>

          </li>
        </ul>
      </div>
      <div class="side">
        <div class="hot">
          <h3 class="title">热门文章</h3>
          <ul>
            <li><a href="">面试题：给你个id，去拿到name，多叉树遍历</a></li>
            <li><a href="">面试题：给你个id，去拿到name，多叉树遍历</a></li>
            <li><a href="">面试题：给你个id，去拿到name，多叉树遍历</a></li>
            <li><a href="">面试题：给你个id，去拿到name，多叉树遍历</a></li>
            <li><a href="">面试题：给你个id，去拿到name，多叉树遍历</a></li>
            <li><a href="">面试题：给你个id，去拿到name，多叉树遍历</a></li>
          </ul>
        </div>
        <div class="tags">
          <div class="title">标签</div>
          <ul class="tag-list">
            <li class="tag"><a href="">vue</a></li>
            <li class="tag"><a href="">vue</a></li>
            <li class="tag"><a href="">vue</a></li>
            <li class="tag"><a href="">vue</a></li>
            <li class="tag"><a href="">vue</a></li>
            <li class="tag"><a href="">vue</a></li>
            <li class="tag"><a href="">vue</a></li>
            <li class="tag"><a href="">vue</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Article"
    }
</script>

<style scoped lang="stylus">
  .aricle-part
    width 100%
  .article
    width 620px
    float left
    ul
      padding-top: 20px
      li
        padding-top 15px
        padding-bottom 15px
        border-bottom: 1px solid #eee
        .title
          margin-bottom: 15px
          width fit-content
          position relative

          a
            text-decoration none
            font-size 20px
            font-weight: 400
          &::after
            content: ''
            width 100%
            position absolute
            left 0
            bottom 0
            height 1px
            transform: scaleX(0);
            transform-origin center center
            -webkit-transition: all 0.3s
            -moz-transition: all 0.3s
            -ms-transition: all 0.3s
            -o-transition: all 0.3s
            transition: all 0.3s
            background-color: #555;
          &:hover::after
            transform: scaleX(1);

        .abstract
          padding-bottom 15px
        .article-info
          font-size 12px
          .dot
            i
              font-size: 12px
  .side
    width 260px
    float right
    .hot
      padding-top 20px
      .title
        font-size 16px
        font-weight 400
        padding 10px 0
      ul
        li
          a
            width 100%
            display block
            overflow hidden
            white-space nowrap
            line-height: 40px
            text-overflow ellipsis
            text-indent 10px
    .tags
      padding-top: 20px
      .title
        font-size: 16px
      .tag-list
        padding-left: 10px
        .tag
          float left
          padding 0 10px
          a
            line-height: 40px

</style>
