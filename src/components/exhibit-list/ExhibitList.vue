<template>
<scroll @scrollToEnd="showMore"
        :pullup='pullup'
        :data="data"
        class="list-box">
  <div class="exhibits">
    <div class="item" v-for="(item,index) in useExhibits">
      <div class="inner-item">
        <img class="main" :src="item.coverImage">
      </div>

    </div>
  </div>
</scroll>
</template>

<script>
import Scroll from 'base/scroll/scroll'

  export default {
    props: {
      probeType: { // 当 probeType 为 1 的时候，会在屏幕滑动停止的时候派发 scroll 事件
        data: Array,
        default: []
      },
    },
    data(){
      return{
        pullup:true
      }
    },
  methods: {
      showMore(){}

  },

  components: {Scroll}
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'

  .list-box
    height 100%;
    overflow hidden

  .exhibits
    text-align left
    .item
      display inline-block
      margin-right .2rem
        .inner-item
           width 3.45rem
           height 3.78rem
           position relative
            .main
              width 100%
              height 100%
              border-radius 5px
</style>
