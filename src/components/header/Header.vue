<template>
  <div class="header">
    <div class="back" style="position: absolute">
      <img src="@/common/image/left.png" style="width: 0.26rem;height: 0.44rem;"
           v-show="backShow"/>

    </div>
    <div class="logo">
      <div class="title" v-show="titleShow">{{title}}</div>
      <img :src="logoImg" style="width: 1.8rem;height: 0.25rem;" v-show="logoShow"/>
    </div>
    <div class="operation" style="position: absolute">
      <img src="@/common/image/share.png" style="width: 0.46rem;height: 0.44rem;margin-right: 8px" v-show="shareShow"/>
      <img src="@/common/image/menu.png" style="width: 0.54rem;height: 0.44rem" v-show="menuShow"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Header',
  data(){
    return{
      logoImg:'http://www.cni-expo.com/h5/v1/static/image/header_logo.png'
    }
  },
  computed: {

    ...mapGetters([
      'logoShow',
      'titleShow',
      'backShow',
      'shareShow',
      'menuShow',
      'title'
    ])
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
  img
    vertical-align middle
  div
    padding 0 .2rem
    display: inline-block
    line-height: $header-height
    height $header-height
  .back
    left 0
  .operation
    right 0
</style>
