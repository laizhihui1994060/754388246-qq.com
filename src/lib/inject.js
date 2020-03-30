import Vue from 'vue'
import utils from './utils'
import * as api from '@/api/index'

export default function() {
  const plugins = {
    $api: api.default,
    $utils: utils
  }

  Object.keys(plugins).forEach(key => {
    Vue.prototype[key] = plugins[key]
  })
}
