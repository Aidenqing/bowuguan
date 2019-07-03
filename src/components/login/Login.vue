<template>
  <transition name="slide">
      <div class="login">
          <div class="title">欢迎您！</div>
          <div class="form">
            <div class="username item">        <input autocomplete="off" v-model="username" class="box" placeholder="请输入您的登录账号"/>
            </div>
            <div class="password item">
              <input type="password" v-model="password" class="box" placeholder="请输入登录密码"/>

            </div>
            <div class="submit"><span @click="login">快速登录</span></div>
            <div class="msg">{{msg}}</div>
          </div>
          <div class="other">
            <div class="sigma-content">
              <div class="sigma-middle-line">
                <span class="sigma-line-text">其他方式登录</span>
              </div>
            </div>
            <div class="weixin">
              <img src="@/common/image/weixin.png" alt="" @click="weChatLogin">

            </div>
          </div>

      </div>
  </transition>
</template>

<script>
import md5 from 'js-md5'
import {phoneTest, emailTest} from '@/common/common'
import {login} from '@/api/user/user'
import {ERR_OK} from '@/common/config'
import {mapGetters, mapMutations} from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: '',
      isEmail: false,
      isMobile: false,
      msg: ''
    }
  },
  activated: function () {
    if (this.userInfo) {
      this.$router.push({
        path: '/user'
      })
    }
    this.setBackShow(true)
    this.setTitleShow(true)
    this.setLogoShow(false)
    this.setShareShow(false)
    this.setMenuShow(false)
    this.setTitle('登录')
  },
  created () {
  },
  methods: {
    login () {
      let val = this.username
      console.log(this.msg)

      if (!val) {
        this.msg = '请输入用户名'
        return
      }
      let flg = false
      if (val.indexOf('@') !== -1) {
        flg = emailTest(val)
      } else {
        flg = phoneTest(val)
      }
      if (!flg) {
        this.msg = '请输入正确格式的登录账号'
        return
      }
      if (this.password.length < 6) {
        this.msg = '请输入密码'

        return
      }
      md5(this.password)

      login(username, password).then((res) => {
        if (res.result === ERR_OK) {
          this.userInfo = res.data.userInfo
          this.$router.push({
            path: '/user'
          })
        }
      })
    },
    weChatLogin () {
      console.log(111)
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
  watch: {
    username () {
      this.msg = ''
    },
    password () {
      this.msg = ''
    }
  },
  components: {

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

  .login
    position fixed
    top $header-height
    width 7.5rem
    background-color $color-background-body
    height 100%
    padding-top 3.24rem
    padding-left 0.88rem
    .title
      text-align left
      font-size $font-size-medium-xx
      color black
      font-weight bold
    .form
      font-size .2rem
      color rgb(117,117,125)
      .item
        width 5.74rem
        padding 3px 0
      .username
        margin-top .99rem
        border-bottom 1px solid $color-line
      .password
        margin-top .87rem
        border-bottom 1px solid $color-line
      .box
        text-decoration none
        width 100%
        height 100%
        border none
        outline none
        background-color $color-background-body
      .submit
        width 4.65rem
        margin-top 1.62rem
        height 0.58rem
        font-size $font-size-large
        color white
        background-color rgb(57,154,248)
        line-height 0.58rem
        border-radius .28rem
        text-align center
        margin-left .45rem
      .msg
        color $color-dialog-background
        text-align center
        padding-right 1.88rem
        margin-top 5px
    .other
      margin-top 1.53rem
      .weixin
        padding-right 1.88rem
        text-align center
        margin-top .38rem
        img
          width .61rem
          height .61rem

  .sigma-content{
      width 5.8rem;
      text-align: center;
    background-color: #f5f5f9;
  }
  .sigma-middle-line:before{
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    background-color: #999;/*颜色需与主题大背景色一致*/
    position: relative;
    top: 10px;/*调节线高*/
    left: 0;
  }
  .sigma-line-text{
    display: inline-block;
    background: #f5f5f9;
    padding: 0 18px 0 18px;
    position: relative;
    font-size: 14px;
    font-weight: 500;
  }

  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

   .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)

</style>
