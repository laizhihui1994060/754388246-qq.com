export const SET_HEADER_LINK = 'SET_HEADER_LINK' // 筛选菜单
export const SET_MENU_SHOW = 'SET_MENU_SHOW' // 设置菜单显隐
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE' // 设置当前页面
export const SET_TABS = 'SET_TABS' // 设置tabs
export const SET_CURRENT_TAB = 'SET_CURRENT_TAB' // 设置tabs

export default {
  [SET_HEADER_LINK](state, headerLink) {
    state.headerLink = headerLink
  },
  [SET_MENU_SHOW](state, show) {
    state.showMenu = show
  },
  [SET_CURRENT_PAGE](state, type) {
    state.currentPage = type
  },
  [SET_TABS](state, tabs) {
    state.tabs = tabs
  },
  [SET_TABS](state, tabs) {
    state.tabs = tabs
  },
  [SET_CURRENT_TAB](state, tab) {
    state.currentTab = tab
  }
}
