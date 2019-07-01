<template>
<div class="exhibits">

</div>
</template>

<script>
import {ERR_OK} from '@/common/config'
import {getUrlParam} from '@/common/common'
import {getMuseumDetail} from '@/api/museum/museum'
import Swiper from 'swiper'
import {mapMutations} from 'vuex'

export default {
  created () {
    this.setBackShow(true)
    this.setTitleShow(true)
    this.setLogoShow(false)
    this.setShareShow(true)
    this.setMenuShow(true)
    this.museumId = getUrlParam('museumId')
    this.exhibitsId = getUrlParam('exhibitsId')
    this._getExhibits(this.museumId)
  },
  data () {
    return {
      museumId: '',
      exhibitsId: '',
      exhibits: []
    }
  },
  methods: {
    _getExhibits (id) {
      let res = {'result': 1, 'msg': '成功', 'data': {'posterList': [{'id': 1412, 'poster': '1532071088397.jpg', 'museum_id': 2, 'posterUrl': 'http://www.cni-expo.com/store/uploads/1532071088397.jpg'}, {'id': 1413, 'poster': '1532071100324.jpg', 'museum_id': 2, 'posterUrl': 'http://www.cni-expo.com/store/uploads/1532071100324.jpg'}, {'id': 1414, 'poster': '1532071106111.jpg', 'museum_id': 2, 'posterUrl': 'http://www.cni-expo.com/store/uploads/1532071106111.jpg'}, {'id': 1415, 'poster': '1532071114357.jpg', 'museum_id': 2, 'posterUrl': 'http://www.cni-expo.com/store/uploads/1532071114357.jpg'}, {'id': 1416, 'poster': '1532071121775.jpg', 'museum_id': 2, 'posterUrl': 'http://www.cni-expo.com/store/uploads/1532071121775.jpg'}], 'orgnAddress': '', 'museum': {'id': 2, 'museumName': '嘉影工业展示馆', 'coverImage': '1544687829529.jpg', 'introduction': '广州嘉影软件有限公司创立于2011年，是一家专注于深度展示技术研发、应用的创新型公司。2016年，被政府认定为“高新技术企业”，在数字展示、顶层设计、资源对接方面提供高品质的服务，专业为客户解决工业营销问题。', 'clickCount': 59915, 'likeCount': 8, 'collectCount': 12, 'type': 1, 'template': 1, 'music': 'http://www.cni-expo.com/store/uploads/1532077974266.mp3', 'video': 'http://www.cni-expo.com/store/uploads/1537235478859.mp4', 'phone': '13145753868', 'email': 'jiaking@giaking.com', 'address': '广州市天河区临江大道507号创意园3号楼5楼', 'createTime': 1529460250000, 'setMeal': {'id': 2, 'name': '体验版', 'type': 1, 'imageNum': 55, 'voiceNum': 50, 'videoNum': 50, 'videoMemory': 50, 'topNum': 100, 'template': 4, 'sort': 0, 'price': 0, 'threeModel': null, 'rankRecommend': null, 'logoUse': null, 'excellentRecommend': null, 'popularRecommend': null, 'bannerUse': null, 'activityRelease': null, 'isExperience': 1, 'isDel': 0}, 'exhibits': [{'id': 1864, 'rank': 0, 'exhibitsName': '嘉影工业展示_潮阳博物馆项目', 'coverImage': 'http://www.cni-expo.com/store/uploads/1529678762082.jpg', 'exhibitsVideo': null, 'exhibitsMusic': '', 'sortName': '科技', 'exhibitsIntroduce': '嘉影在潮阳博物馆项目中，在多功能厅的空间结构上以几何造型贯穿各个区域。现代、简约的空间，配合高科技多媒体的运用，制造出超越现代的未来感和时代感。', 'isDel': 0, 'collectCount': 10, 'orgnName': null, 'museumId': 0, 'status': 0, 'isCollect': 0}, {'id': 1863, 'rank': 1, 'exhibitsName': '嘉影工业展示_地产虚拟漫游', 'coverImage': 'http://www.cni-expo.com/store/uploads/1529678767201.jpg', 'exhibitsVideo': null, 'exhibitsMusic': '', 'sortName': '', 'exhibitsIntroduce': '虚拟现实技术是集影视广告、动画、多媒体、网络科技于一身的最新型的房地产营销方式。 在国内的广州、上海、北京等大城市，国外的加拿大、美国等经济和科技发达的国家都非常热门，是当今房地产行业一个综合实力的象征和标志。', 'isDel': 0, 'collectCount': 0, 'orgnName': null, 'museumId': 0, 'status': 0, 'isCollect': 0}, {'id': 1862, 'rank': 2, 'exhibitsName': '嘉影工业展示_韩城高端铸造产业园', 'coverImage': 'http://www.cni-expo.com/store/uploads/1529678769972.jpg', 'exhibitsVideo': null, 'exhibitsMusic': '', 'sortName': '', 'exhibitsIntroduce': '中铸云商联合广州嘉影软件有限公司在推动工业展示公共服务平台方面做了有益的探索，并协助陕西韩城市建成我国首家以展示高端铸造业为目标的公共服务平台，该平台与中国铸造行业信息互联互通并对接全球市场，逐步实现非标工业品的线上线下联动发展。该平台成为了韩城高端铸造业从零起步的助推器，是向世界介绍韩城的窗口。', 'isDel': 0, 'collectCount': 0, 'orgnName': null, 'museumId': 0, 'status': 0, 'isCollect': 0}, {'id': 1861, 'rank': 3, 'exhibitsName': '嘉影工业展示_建筑场景虚拟漫游', 'coverImage': 'http://www.cni-expo.com/store/uploads/1529678773569.jpg', 'exhibitsVideo': null, 'exhibitsMusic': '', 'sortName': '科技', 'exhibitsIntroduce': '虚拟现实技术是当前应用非常广泛的一种信息技术,虚拟漫游技术作为它的一个重要分支,有着重要的地位,尤其是在网络虚拟建筑场景漫游领域,它的应用价值更高了,而且相关技术和设备的不断研发和完善,它的应用成本越来越低,普及度越来越高,在将来必将极大地推动相关应用领域的发展。', 'isDel': 0, 'collectCount': 0, 'orgnName': null, 'museumId': 0, 'status': 0, 'isCollect': 0}, {'id': 1860, 'rank': 4, 'exhibitsName': '嘉影工业展示_金山岭球幕', 'coverImage': 'http://www.cni-expo.com/store/uploads/1529678776261.jpg', 'exhibitsVideo': null, 'exhibitsMusic': '', 'sortName': '', 'exhibitsIntroduce': '广州嘉影倾力打造金山岭长城球幕影院', 'isDel': 0, 'collectCount': 0, 'orgnName': null, 'museumId': 0, 'status': 0, 'isCollect': 0}, {'id': 1859, 'rank': 5, 'exhibitsName': '嘉影工业展示_3D视频拍摄', 'coverImage': 'http://www.cni-expo.com/store/uploads/1529678778980.jpg', 'exhibitsVideo': null, 'exhibitsMusic': '', 'sortName': '', 'exhibitsIntroduce': '嘉影拥有高端、专业的3D拍摄器材及后期制作设备，SONY高清3d立体摄像机、3d立体拍摄架、3d立体云台、3d立体监视器，3d同步伺服控制器、 苹果后期服务器非线编等3d制作设备，以及整套自主研发的影院级立体影音放映设备，服务于不同的领域需求。', 'isDel': 0, 'collectCount': 1, 'orgnName': null, 'museumId': 0, 'status': 0, 'isCollect': 0}, {'id': 1858, 'rank': 6, 'exhibitsName': '嘉影工业展示_企业展馆漫游', 'coverImage': 'http://www.cni-expo.com/store/uploads/1529678782092.jpg', 'exhibitsVideo': null, 'exhibitsMusic': '', 'sortName': '', 'exhibitsIntroduce': '虚拟漫游能够提供一共自由自主的模拟漫游模式，观众通过摇杆就能够控制画面中的视角移动和变化，让观众能够在虚拟3D世界中任意漫游，还原了一个企业的规模和未来规划蓝图，以一种零死角的观察角度将企业展示在观众面前，展示效果非常直观。', 'isDel': 0, 'collectCount': 0, 'orgnName': null, 'museumId': 0, 'status': 0, 'isCollect': 0}, {'id': 1857, 'rank': 7, 'exhibitsName': '嘉影工业展示_日照球幕', 'coverImage': 'http://www.cni-expo.com/store/uploads/1529678785086.jpg', 'exhibitsVideo': null, 'exhibitsMusic': '', 'sortName': '魔幻', 'exhibitsIntroduce': '嘉影工业展示打造日照苍穹两化融合公共服务平台', 'isDel': 0, 'collectCount': 1, 'orgnName': null, 'museumId': 0, 'status': 1, 'isCollect': 0}, {'id': 1856, 'rank': 8, 'exhibitsName': '嘉影工业展示_虚拟博物馆教学', 'coverImage': 'http://www.cni-expo.com/store/uploads/1529678788558.jpg', 'exhibitsVideo': null, 'exhibitsMusic': '', 'sortName': '', 'exhibitsIntroduce': '传统的博物馆大多没有网上展馆的功能，观众往往要花费很长的时间和精力，亲自到博物馆，才能了解博物馆的内部环境、展品的摆放位置、和相关说明。这样对博物馆的影响打了很大的折扣，不利于知识的传播和教育。虚拟博物馆可以让参观者用鼠标在博物馆中达到认识、学习、导览和体验的目的，改善传统博物馆的不足。', 'isDel': 0, 'collectCount': 0, 'orgnName': null, 'museumId': 0, 'status': 0, 'isCollect': 0}, {'id': 1855, 'rank': 9, 'exhibitsName': '嘉影工业展示_中国工业博物馆', 'coverImage': 'http://www.cni-expo.com/store/uploads/1529678791828.jpg', 'exhibitsVideo': null, 'exhibitsMusic': '', 'sortName': '', 'exhibitsIntroduce': '嘉影在沈阳铸造博物馆中，为中国工业博物馆贡献了《互动航母》、《可可之旅》两个互动展项。', 'isDel': 0, 'collectCount': 0, 'orgnName': null, 'museumId': 0, 'status': 0, 'isCollect': 0}], 'imgCount': 0, 'videoCount': 0, 'musicCount': 0, 'museumType': 1, 'expiryTime': 1718812800000, 'editStatus': false, 'isDel': 0, 'publishCount': 26, 'status': 2, 'auditRemarks': null, 'applyAuditTime': 1532316335000, 'auditPassTime': 1531106364000, 'publishStatus': 2, 'publishAuditRemarks': null, 'publishApplyAuditTime': 1544687867000, 'publishAuditPassTime': null, 'link3D': 'a4e2c9da-a2f3-49bd-b678-ff714811df88', 'publish3DStatus': 2, 'publishAudit3DRemarks': null, 'publishApplyAudit3DTime': null, 'publishAuditPass3DTime': 1530090635000, 'threeDUrl': null, 'setMealId': 0, 'museumItem': null, 'orgnMuseum': null, 'industryMuseum': null, 'regionMuseum': null, 'countryMuseum': null, 'themeMuseum': null, 'customRecom': null, 'customRecomName': null, 'yestDayNum': 0, 'thirtyDayNum': 0, 'sumNum': 0, 'yestDayTime': 0.0, 'thirtyDayTime': 0.0, 'sumTime': 0.0, 'logo': null, 'slogan': null, 'orgnName': null, 'province': null, 'city': null, 'industryStory': null, 'likeStatus': 1, 'isCollect': 0, 'collectStatus': 1}, 'orgnEmail': '13145753868', 'orgnLogo': 'http://www.cni-expo.com/store/uploads/1529818237588.jpg', 'orgnMobile': '', 'museumArticle': {'page1': {'type5': [{'id': 0, 'type': 5, 'content': '作为工业展示领域的领先企业,采用新型展示技术，充分体现可感知、可互动的特点，着力打造新型工业展示平台。运用深度展示技术和运作管理理念，将线上线下展示无缝融入到企业运营的方方面面，全方位的为客户提供深度工业营销的整体解决方案。', 'rank': 0, 'museumArticlePhoto': [{'id': 5662, 'path': '1529563581777.jpg', 'pathUrl': 'http://www.cni-expo.com/store/uploads/1529563581777.jpg', 'rank': 0}]}], 'type4': [{'id': 0, 'type': 4, 'content': '以产业咨询为先导，以资源对接为目的，以工业展示为抓手，以运营推广为动力，提供基于产业链的工业营销解决方案，促进产业集聚和工业发展，从而提高产业势能，推动交易的效率和质量。\n为政府组织、产业园区提供数字化、虚拟化、网络化、智能化的工业展示公共服务平台，该平台可以作为产业的牵引力和驱动力，为产业提供先导性支持，促进产能对接、技术对接和产业聚集等服务，是互联网+工业创新模式的集中体现。', 'rank': 0, 'museumArticlePhoto': [{'id': 5663, 'path': '1529463824960.jpg', 'pathUrl': 'http://www.cni-expo.com/store/uploads/1529463824960.jpg', 'rank': 0}]}], 'type3': [{'id': 0, 'type': 3, 'content': '广州嘉影软件有限公司创立于2011年，是一家专注于深度展示技术研发、应用的创新型公司。2016年，被政府认定为“高新技术企业”，自主研发的R3D立体影音播放系统更得到了“广州市创新基金项目”的政府资助；积极与华工软件学院合作共同开发了“高性能网络视音频支撑平台”并联合竞标了“2012年粤港关键领域重点突破项目”取得立项。在2013年再次与华工计算机学院合作研究开发展示“仿人机器人”。在数字展示、顶层设计、资源对接方面提供高品质的服务，专业为客户解决工业营销问题。', 'rank': 0, 'museumArticlePhoto': []}], 'type2': [{'id': 0, 'type': 2, 'content': '嘉影工业展示', 'rank': 0, 'museumArticlePhoto': []}], 'type8': [{'id': 0, 'type': 8, 'content': '自成立以来，公司注重新技术研发，独立开发三个引擎：”GARE增强虚拟现实引擎、GICE智能控制引擎、GDME对接匹配引擎，拥有五项专有支撑技术：GODE一键换展智能控制技术、全媒体创意设计技术、全媒体内容制作技术（3D立体全息片源制作、企业宣传片、动漫Flash视频制作)、互动新媒体（新型交互式AR互动投影研发、VR虚拟现实技术、动漫人机互动投影、3D全息立体成像、裸眼3D显示系统、特效大屏幕投影、创意数字沙盘）、虚拟仿真技术。', 'rank': 0, 'museumArticlePhoto': [{'id': 5664, 'path': '1529563788289.jpg', 'pathUrl': 'http://www.cni-expo.com/store/uploads/1529563788289.jpg', 'rank': 0}]}], 'type7': [{'id': 0, 'type': 7, 'content': '项目全案实施的综合能力，包括能完成从产业调研、产业分析、顶层设计到实施路径的全流程规划；针对多媒体展厅，独立完成空间测量、方案设计、基础建设 以及集成调试等一系列的硬件部署；在软件方面，通过智能控制引擎、增强现实引擎、对接匹配引擎等，快速完成软件定制开发；同时，能按照设计规划，结合软硬件特点，独立完成展陈大纲、内容创意、内容制作以及整体合成体验。上述核心能力已成熟应用到多个项目中，高效便捷为客户提供一站式的工业展示解决方案。', 'rank': 0, 'museumArticlePhoto': [{'id': 5665, 'path': '1529563706952.jpg', 'pathUrl': 'http://www.cni-expo.com/store/uploads/1529563706952.jpg', 'rank': 0}]}], 'type6': [{'id': 0, 'type': 6, 'content': '全息绽放工业生命力', 'rank': 0, 'museumArticlePhoto': [{'id': 5666, 'path': '1529463846052.jpg', 'pathUrl': 'http://www.cni-expo.com/store/uploads/1529463846052.jpg', 'rank': 0}]}], 'type1': [{'id': 0, 'type': 1, 'content': '', 'rank': 0, 'museumArticlePhoto': [{'id': 5667, 'path': '1529562180128.jpg', 'pathUrl': 'http://www.cni-expo.com/store/uploads/1529562180128.jpg', 'rank': 0}]}]}}}}
      this._handleOriginData(res.data)
      // this.InitTabScroll()
      getMuseumDetail(id).then((res) => {
        if (res.result === ERR_OK) {
          this._handleOriginData(res.data)
        }
      })
    },
    _handleOriginData (data) {
      this.exhibits = data.exhibits
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
  }

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'

</style>
