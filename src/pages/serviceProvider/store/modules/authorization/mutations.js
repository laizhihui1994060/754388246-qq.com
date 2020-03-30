export const SET_USER_AUTHORIZATION = 'SET_USER_AUTHORIZATION' // 登录设置用户信息
export const CLEAR_USER_AUTHORIZATION = 'CLEAR_USER_AUTHORIZATION' // 清除授权信息
export const SET_USER_INFO = 'SET_USER_INFO' // 设置用户信息
export const SET_USER_TOKEN_AND_CORPORATION = 'SET_USER_TOKEN_AND_CORPORATION' // 设置登录token

// export const SET_STAFF_

export default {
  // 正常登录设置token
  [SET_USER_AUTHORIZATION](state, auth) {
    const { token, corporation = {}, appid } = auth
    state.token = token
    state.corporation = corporation
    localStorage.setItem('auth_Token', token)
    localStorage.setItem('corporation', JSON.stringify(corporation))
    localStorage.setItem('appid', appid)
  },
  [CLEAR_USER_AUTHORIZATION](state) {
    state.token = ''
    state.userInfo = null
    state.corporation = null
    localStorage.removeItem('auth_Token')
    localStorage.removeItem('corporation')
    localStorage.removeItem('appid')
  },
  [SET_USER_INFO](state, info) {
    state.userInfo = info
  },
  // 缓存中获取设置token和企业信息
  [SET_USER_TOKEN_AND_CORPORATION](state, params) {
    state.token = params.token
    state.corporation = params.corporation
    state.userInfo = params.staff
    state.appid = params.appid

    localStorage.setItem('userInfo', params.staff)
  }
}
