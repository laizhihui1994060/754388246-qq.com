import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: 'authorization',
  actions,
  mutations,
  state: {
    userInfo: null,
    token: '',
    corporation: null
  }
}
