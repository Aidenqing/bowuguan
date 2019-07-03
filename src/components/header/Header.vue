<template>
  <div class="header">
    <div class="back" @click="back" style="position: absolute">
      <img src="@/common/image/left.png" style="width: 0.21rem;height: 0.34rem;"
           v-show="backShow"/>

    </div>
    <div class="logo">
      <div class="title" v-show="titleShow">{{title}}</div>
      <img :src="logoImg" style="width: 2.44rem;height: 0.34rem;" v-show="logoShow"/>
    </div>
    <div class="operation" style="position: absolute">
<!--
      <img src="@/common/image/share.png" style="width: 0.36rem;height: 0.34rem;margin-right: 8px" v-show="shareShow"/>
-->
      <img src="@/common/image/menu.png" style="width: 0.43rem;height: 0.34rem" v-show="menuShow" @click="showMenu"/>
      <div class="items" v-show="isShow">
        <div class="item" @click="selectItem"><img src="@/common/image/mine.png"/>{{itemName}}</div>

        <div class="item" style="border: none"><img src="@/common/image/share.png"/>分享</div>

      </div>

    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {userInfo} from '../../store/getters'

export default {
  name: 'Header',
  data () {
    return {
      logoImg: 'http://www.cni-expo.com/h5/v1/static/image/header_logo.png',
      itemName: '登录',
      isShow: false
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    showMenu () {
      this.isShow = !this.isShow
    },
    selectItem () {
      this.showMenu()
      if (!userInfo) {
        this.$router.push({
          path: '/user/login'

        })
      } else {
        this.$router.push({
          path: '/user'

        })
      }
    }
  },
  computed: {

    ...mapGetters([
      'logoShow',
      'titleShow',
      'backShow',
      'shareShow',
      'menuShow',
      'title',
      'userInfo'
    ])
  },
  watch: {
    userInfo (Y) {
      if (userInfo) {
        this.itemName = '登录'
      }
    }
  }

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'

.header
  height: $header-height
  width: 7.5rem
  background: $color-background-header
  text-align: center
  position fixed
  top 0
  img
    vertical-align middle
  >div
    padding 0 .2rem
    display: inline-block
    line-height: $header-height
    height $header-height
  .title
    font-size $font-size-large-xx
    color rgb(255,255,255)
  .back
    left 0
  .operation
    right 0
    .items
      position fixed
      top $header-height
      right 0
      z-index 100
      padding 0 .2rem
      .item
        background rgba(0,0,0,.5)
        padding 0
        width 1.6rem
        color white
        font-size $font-size-large-x
        border-bottom 1px solid $color-line
        img
          width .34rem
          height .34rem
          margin-right 5px
          vertical-align text-bottom
</style>
