// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'  // （补丁）对es6的一些api做转译 如：promise

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import '@/common/stylus/index.styl'
//import vConsole from 'vconsole'

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueLazyLoad, {
  loading: require('@/common/image/loading.png') // 懒加载默认图片
})
/* eslint-disable no-new */
/* new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}) */

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
