<template>
  <transition name="slide">

  <div class="user">
      <div class="header">
        <img class="bg" src="@/common/image/user-back.png" alt="">

        <img class="header-logo" :src="userInfo.avaterUrl==null? avater: userInfo.avaterUrl"/>
        <div class="username">{{userInfo.username}}</div>
      </div>
      <div class="content">
        <router-link to="/track" class="item">
          <span>浏览足迹 <span>(0)</span></span>
          <img src="@/common/image/right.png" alt="">

        </router-link>
        <router-link to="/collection" class="item">
          <span>我的收藏 <span>(01)</span></span>
          <img src="@/common/image/right.png" alt="">
        </router-link>
      </div>
      <div class="more">
        <img src="@/common/image/discovery.png" alt="">
        <router-link to="/index"> 去发现</router-link>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'User',

  activated: function () {
    if (!this.userInfo) {
      this.$router.push({
        path: '/login'
      })
    }
    this.setBackShow(true)
    this.setTitleShow(true)
    this.setLogoShow(false)
    this.setShareShow(false)
    this.setMenuShow(false)
    this.setTitle('我的')
  },
  data () {
    return {
      avater: 'data:image/png;base64,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'
    }
  },
  created () {
    this.setTitle('我的')
  },
  methods: {

    // 映射
    ...mapMutations({
      setBackShow: 'SET_BACK_SHOW',
      setTitleShow: 'SET_TITLE_SHOW',
      setLogoShow: 'SET_LOGO_SHOW',
      setMenuShow: 'SET_MENU_SHOW',
      setShareShow: 'SET_SHARE_SHOW',
      setTitle: 'SET_TITLE'

    })
  },
  computed: {

    ...mapGetters([
      'userInfo'
    ])
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'

  .user
    background-repeat no-repeat
    position fixed
    top $header-height
    width 7.5rem
    .header
      height 2.7rem
      width 7.5rem
      border-top 1px solid $color-line
      position relative
      .bg
        height 2.7rem
        width 7.5rem
      .header-logo
        position absolute
        left 3.06rem
        top .4rem
        width 1.34rem
        height 1.34rem
      .username
        position absolute
        top 1.74rem
        width 100%
        text-align center
        color rgb(50,50,50)
        font-size .24rem
        margin-top .2rem
    .content
      background-color $color-background-body
      font-size .2rem
      .item
        height .58rem
        width 7.1rem
        padding 0 .2rem
        display flex
        align-items center
        justify-content space-between
        border-bottom 1px solid $color-line
        color rgb(117,117,125)
        text-decoration none
        img
          width 9px
          height 16px
    .more
      margin-top 1.64rem
      text-align center
      text-align -webkit-center
      img
        width 2.32rem
        height 2.37rem
      a
        width 1.31rem
        height 0.58rem
        background-color rgb(57,154,248)
        font-size .28rem
        line-height .58rem
        margin-top .28rem
        border-radius .28rem
        text-decoration none
        display block
        color $color-main-background
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
