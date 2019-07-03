<template>
  <transition name="slide">

    <div class="track">
      <scroll ref="scroll"
              @scrollToEnd="showMore"
              :pullup='pullup'
              class="list-box">
        <div >
          <div class="items">
            <router-link :to="item.href" class="item" v-for="item in collections">
              <img :src="item.exhibits.coverImage" alt="">
              <div class="name">{{item.exhibits.exhibitsName}}</div>
            </router-link>
          </div>
        </div>
      </scroll>
      <loading v-show="getMore" title=""></loading>

    </div>
  </transition>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import {mapMutations, mapGetters} from 'vuex'
import {getCollectExhibits} from 'api/user/user'
import {ERR_OK} from 'common/config'
import Loading from 'base/loading/loading' // 加载中
import {PARAMETER} from 'common/config'

export default {
  name: 'Collection',
  created () {
    this.setTitle('足迹')
  },
  data () {
    return {
      page: 0,
      getMore: false,
      hasMore: false,
      pullup: true,
      collections: []
    }
  },
  components: {Scroll, Loading},

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
    this.setTitle('我的足迹')
    this._getCollections()
    let res = {'result': 1, 'msg': '成功', 'data': {'totalCount': 7, 'result': [{'id': 73, 'exhibits': {'id': 1864, 'rank': 0, 'exhibitsName': '嘉影工业展示_潮阳博物馆项目', 'coverImage': 'http://gjy.yongdd.com/store/uploads/1529678762082.jpg', 'exhibitsVideo': null, 'exhibitsMusic': '', 'exhibitsIntroduce': '嘉影在潮阳博物馆项目中，在多功能厅的空间结构上以几何造型贯穿各个区域。现代、简约的空间，配合高科技多媒体的运用，制造出超越现代的未来感和时代感。', 'isDel': 0, 'collectCount': 2, 'orgnName': null, 'museumId': 2, 'status': 0, 'isCollect': 0}, 'createTime': 1560219757000, 'museumName': null}, {'id': 86, 'exhibits': {'id': 1476, 'rank': 6, 'exhibitsName': '广州旅游', 'coverImage': 'http://gjy.yongdd.com/store/uploads/1535092445610.jpg', 'exhibitsVideo': null, 'exhibitsMusic': '', 'exhibitsIntroduce': '广州旅游资源丰富，其中以花城广场、广州塔、白云山、长隆旅游度假区、珠江夜游、陈家祠、宝墨园、沙面、圣心大教堂、岭南印象园、沙湾古镇、越秀公园、南越王博物馆、中山纪念堂、黄埔军校、南沙湿地公园、海珠湖国家湿地公园、从化温泉等景点最为盛名。', 'isDel': 0, 'collectCount': 2, 'orgnName': null, 'museumId': 5, 'status': 0, 'isCollect': 0}, 'createTime': 1560234665000, 'museumName': null}, {'id': 88, 'exhibits': {'id': 1861, 'rank': 3, 'exhibitsName': '嘉影工业展示_建筑场景虚拟漫游', 'coverImage': 'http://gjy.yongdd.com/store/uploads/1529678773569.jpg', 'exhibitsVideo': null, 'exhibitsMusic': '', 'exhibitsIntroduce': '虚拟现实技术是当前应用非常广泛的一种信息技术,虚拟漫游技术作为它的一个重要分支,有着重要的地位,尤其是在网络虚拟建筑场景漫游领域,它的应用价值更高了,而且相关技术和设备的不断研发和完善,它的应用成本越来越低,普及度越来越高,在将来必将极大地推动相关应用领域的发展。', 'isDel': 0, 'collectCount': 0, 'orgnName': null, 'museumId': 2, 'status': 0, 'isCollect': 0}, 'createTime': 1562120989000, 'museumName': null}, {'id': 89, 'exhibits': {'id': 1860, 'rank': 4, 'exhibitsName': '嘉影工业展示_金山岭球幕', 'coverImage': 'http://gjy.yongdd.com/store/uploads/1529678776261.jpg', 'exhibitsVideo': null, 'exhibitsMusic': '', 'exhibitsIntroduce': '广州嘉影倾力打造金山岭长城球幕影院', 'isDel': 0, 'collectCount': 0, 'orgnName': null, 'museumId': 2, 'status': 0, 'isCollect': 0}, 'createTime': 1562121011000, 'museumName': null}, {'id': 90, 'exhibits': {'id': 1859, 'rank': 5, 'exhibitsName': '嘉影工业展示_3D视频拍摄', 'coverImage': 'http://gjy.yongdd.com/store/uploads/1529678778980.jpg', 'exhibitsVideo': null, 'exhibitsMusic': '', 'exhibitsIntroduce': '嘉影拥有高端、专业的3D拍摄器材及后期制作设备，SONY高清3d立体摄像机、3d立体拍摄架、3d立体云台、3d立体监视器，3d同步伺服控制器、 苹果后期服务器非线编等3d制作设备，以及整套自主研发的影院级立体影音放映设备，服务于不同的领域需求。', 'isDel': 0, 'collectCount': 1, 'orgnName': null, 'museumId': 2, 'status': 0, 'isCollect': 0}, 'createTime': 1562121020000, 'museumName': null}, {'id': 91, 'exhibits': {'id': 1858, 'rank': 6, 'exhibitsName': '嘉影工业展示_企业展馆漫游', 'coverImage': 'http://gjy.yongdd.com/store/uploads/1529678782092.jpg', 'exhibitsVideo': null, 'exhibitsMusic': '', 'exhibitsIntroduce': '虚拟漫游能够提供一共自由自主的模拟漫游模式，观众通过摇杆就能够控制画面中的视角移动和变化，让观众能够在虚拟3D世界中任意漫游，还原了一个企业的规模和未来规划蓝图，以一种零死角的观察角度将企业展示在观众面前，展示效果非常直观。', 'isDel': 0, 'collectCount': 0, 'orgnName': null, 'museumId': 2, 'status': 0, 'isCollect': 0}, 'createTime': 1562121027000, 'museumName': null}, {'id': 93, 'exhibits': {'id': 1857, 'rank': 7, 'exhibitsName': '嘉影工业展示_日照球幕', 'coverImage': 'http://gjy.yongdd.com/store/uploads/1529678785086.jpg', 'exhibitsVideo': null, 'exhibitsMusic': '', 'exhibitsIntroduce': '嘉影工业展示打造日照苍穹两化融合公共服务平台', 'isDel': 0, 'collectCount': 0, 'orgnName': null, 'museumId': 2, 'status': 0, 'isCollect': 0}, 'createTime': 1562121036000, 'museumName': null}], 'pageNo': 1, 'pageSize': 12, 'totalPages': 1, 'isHasNext': false, 'nextPage': 1, 'isHasPre': false, 'prePage': 1, 'first': 1}}
    this._handleData(res)
  },
  methods: {
    _handleData (res) {
      this.hasMore = res.data.isHasNext

      let data = res.data.result
      data.forEach(item => {
        item.href = '/museum/detail?' + PARAMETER.museumId + '=' + item.exhibits.museumId + '&' + PARAMETER.exhibitId + '=' + item.exhibits.id
      })

      this.collections = this.collections.concat(data)
      this.getMore = false
    },
    _getCollections () {
      this.getMore = true
      getCollectExhibits(this.belongId, this.page).then((res) => {
        if (res.result === ERR_OK) {
          this._handleData(res)
        }
      })
    },
    showMore () {
      if (!this.hasMore && this.getMore) {
        return
      }
      this.page++
      this._getCollections()
    },
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

  .collection
    position fixed
    top $header-height
    width 7.5rem
    height 100%
    background-color $color-background-body
    .list-box
      height 100%
      overflow hidden
    .items
      margin .4rem .1rem 0 .2rem
      text-align left

      .item
        margin .1rem .1rem .1rem 0
        text-align left
        display inline-block
        width 2.3rem
        text-decoration none
        img
          width 2.3rem
          height 2.37rem
          display block
        .name
          display block
          color rgb(117,117,125)
          margin .1rem 0
          width 2.3rem
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          text-align center

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
