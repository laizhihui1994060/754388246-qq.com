export * from '../../../actions'

import Vue from 'vue'
import Vuex from 'vuex'

import pageSetting from './modules/pageSetting'

Vue.use(Vuex)

if (process.env.NODE_ENV === 'development') {
  Vue.config.devtools = true
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    pageSetting
  }
})
