import * as types from './mutation-types'

const mutations = {
  [types.SET_BACK_SHOW] (state, flg) {
    state.backShow = flg
  },
  [types.SET_TITLE_SHOW] (state, flg) {
    state.titleShow = flg
  },
  [types.SET_LOGO_SHOW] (state, flg) {
    state.logoShow = flg
  },
  [types.SET_SHARE_SHOW] (state, flg) {
    state.shareShow = flg
  },
  [types.SET_MENU_SHOW] (state, flg) {
    state.menuShow = flg
  },
  [types.SET_TITLE] (state, title) {
    state.title = title
  },
  [types.SET_USE_EXIHIBITS] (state, list) {
    state.useExhibits = list
  },

  [types.SET_USERINFO] (state, data) {
    state.userInfo = data
  }
}
export default mutations
