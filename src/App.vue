<template>
  <div id="app">
    <Header></Header>
    <keep-alive> <!--主要用于保留组件状态或避免重新渲染-->
      <router-view></router-view>
    </keep-alive>  </div>
</template>

<script>
import Header from 'components/header/Header'
export default {
  name: 'App',
  components:{
    Header,
  }
}
</script>

<style>
  @import "../node_modules/swiper/dist/css/swiper.min.css";
body,div,html{
  margin: 0;
}
  #app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    background-color: #f5f5f5;
  position: relative;
    font-size: 8px;

}
  .swiper-pagination-bullet-active{
    width: 20px;
    background-color: white;
    border-radius: 5px
  }
  .separator{
    height: 0.15rem;
    width: 7.5rem;
    background-color: #f5f5f5;
  }
</style>
