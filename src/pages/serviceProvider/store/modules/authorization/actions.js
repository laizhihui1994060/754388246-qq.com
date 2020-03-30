import { getUserInfo } from '@/services/corporation'
import { MODULE_AUTHORIZATION } from '../../actions'
import domainMatchInfo from './domainMatchInfo'
import { CLEAR_USER_AUTHORIZATION, SET_USER_AUTHORIZATION, SET_USER_INFO, SET_USER_TOKEN_AND_CORPORATION } from './mutations'
import { message } from 'ant-design-vue'
import { getAllAuth, getMyAuthority } from '@/services/authority'

export default {
  [MODULE_AUTHORIZATION.GET_USER_INFO]: async ({ commit }) => {
    try {
      const info = await getUserInfo()
      commit(SET_USER_INFO, info)
      return info
    } catch (e) {
      message.error(e.message)
    }
  },
  [MODULE_AUTHORIZATION.ACT_LOGOUT]: ({ commit }) => {
    commit(CLEAR_USER_AUTHORIZATION)
    commit(CLEAR_AUTH_LIST)
    commit(CLEAR_TOOL_AUTH)
    commit(CLEAR_ROUTE_AUTH)
  },
  [MODULE_AUTHORIZATION.SET_USER_AUTHORIZATION]: async ({ dispatch, commit }, auth) => {
    const { token, corporation, staff, appid } = auth

    // 设置token和企业信息
    dispatch(MODULE_AUTHORIZATION.SET_USER_TOKEN_AND_CORPORATION, { token, corporation, staff, appid })
    commit(SET_USER_INFO, staff)

    commit(SET_USER_AUTHORIZATION, auth)
  },
  [MODULE_AUTHORIZATION.CHECK_USER_AUTHORIZATION]: async ({ dispatch, state }) => {
    const storageToken = localStorage.getItem('auth_Token')
    const storageCorporation = localStorage.getItem('corporation')
    const appid = localStorage.getItem('appid')

    if (storageToken && storageCorporation && storageCorporation !== 'undefined' && appid) {
      dispatch(`${MODULE_AUTHORIZATION.SET_USER_TOKEN_AND_CORPORATION}`, {
        token: storageToken,
        corporation: JSON.parse(storageCorporation),
        appid
      })
    }
  },
  [MODULE_AUTHORIZATION.SET_USER_TOKEN_AND_CORPORATION]: ({ commit }, params) => {
    commit(SET_USER_TOKEN_AND_CORPORATION, params)
  }
}
