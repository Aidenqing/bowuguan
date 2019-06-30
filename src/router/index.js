import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = (resolve) => {
  import('../components/index/Index').then((module) => {
    resolve(module)
  })
}

 const MuseumDetail = (resolve) => {
  import('components/museum-detail/Detail').then((module) => {
    resolve(module)
  })
}
const Museum = (resolve) => {
  import('components/museum/Museum').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index' // 指定跳转地址
    },
    {
      path: '/index',
      component: Index

    },
    {
      path: '/museum/detail',
      component: MuseumDetail

    },
    {
      path: '/museum',
      component: Museum

    }
  ]
})
