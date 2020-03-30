import Vue from 'vue'
import Page from './Page'
import Pagination from './Pagination.vue'

const CommonComponents = [Page, Pagination]

export default CommonComponents.map(Component => {
  return () => {
    if (!Component.name) {
      console.error('组件未设置name属性，无法注册为全局组件', Component)
    } else {
      return Vue.component(Component.name, Component)
    }
  }
})
