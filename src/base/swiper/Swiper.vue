<template>
<div class="swiper-container">
  <div class="swiper-wrapper">

  </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Swiper',
  data () {
    return {
      swiper: []
    }
  },
  mounted () {

  },
  methods: {
    _initLunbo () {
      let mySwiper = new Swiper('.', {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false// 触摸后不会停止轮播
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      })
    }
  }

}
</script>

<style scoped>

</style>
