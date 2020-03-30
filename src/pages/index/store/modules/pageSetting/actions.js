import a, { MODULE_PAGE_SETTING } from '../../../store/'
import { SET_MENU_SHOW, SET_CURRENT_PAGE, SET_HEADER_LINK, SET_TABS, SET_CURRENT_TAB } from './mutations'
import { cloneDeep } from 'lodash'

export default {
  [MODULE_PAGE_SETTING.INIT_MENU]({ state, commit }, routeAuthKeys) {
    const { super_admin, is_admin } = state.authorization.userInfo
    if (super_admin || is_admin) {
      commit(SET_HEADER_LINK, state.headerLink)
      return
    }
    let headerLink = cloneDeep(state.headerLink).map(item => {
      if (item.authKey && !routeAuthKeys.includes(item.authKey)) {
        return {
          ...item,
          menuConfig: []
        }
      }

      let menuConfig = filterMenus(item.menuConfig, routeAuthKeys)
      let name = item.name === 'wechat' ? item.name : ''

      // 需要优化，临时处理
      menuConfig.forEach(subItem => {
        if (name) return
        // 菜单父级节点能跳转且有children
        if (subItem.clickable && routeAuthKeys.includes(subItem.routeAuthKey)) {
          name = subItem.key
        }
        // 菜单父级节点仅能跳转
        if (!subItem.children && routeAuthKeys.includes(subItem.authKey)) {
          name = subItem.key
        }
        ;(subItem.children || []).forEach(childItem => {
          if (name) return
          if (!childItem.authKey || routeAuthKeys.includes(childItem.authKey)) {
            name = childItem.key
          }
        })
      })

      return {
        ...item,
        name: name || 'home',
        menuConfig
      }
    })

    headerLink = headerLink.filter(item => item.menuConfig.length > 0)

    if (headerLink.length > 0) {
      const currentMenuConfig = headerLink.find(item => item.id === state.currentPage)
      if (!currentMenuConfig) {
        commit(SET_CURRENT_PAGE, headerLink[0].id)
      }
    }

    commit(SET_HEADER_LINK, headerLink)
  },

  [MODULE_PAGE_SETTING.ACT_SET_MENU_SHOW]({ commit }, show) {
    commit(SET_MENU_SHOW, show)
  },
  [MODULE_PAGE_SETTING.SET_CURRENT_PAGE]({ commit }, type) {
    commit(SET_CURRENT_PAGE, type)
  },
  [MODULE_PAGE_SETTING.SET_TABS]({ state, commit }, params) {
    const item = state.tabs.find(item => item.name === params.name)

    if (!item) {
      const tabs = [...state.tabs]
      tabs.push(params)
      commit(SET_TABS, tabs)
    }
    commit(SET_CURRENT_TAB, params.name)
  },
  [MODULE_PAGE_SETTING.DEL_CURRENT_TAB]({ state, commit }, name) {
    if (!name) return

    const index = state.tabs.findIndex(item => item.name === name)

    if (index !== -1) {
      const tabs = [...state.tabs]
      tabs.splice(index, 1)

      if (name === state.currentTab && tabs.length) {
        commit(SET_CURRENT_TAB, tabs[0].name)
      }

      commit(SET_TABS, tabs)
    }
  }
}
