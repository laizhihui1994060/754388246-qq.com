import routerControll from './index'
import store, { MODULE_PAGE_SETTING } from '../store'

export default async () => {
  const router = await routerControll()

  router.beforeEach((to, from, next) => {
    // 根据项目设置菜单列表
    if (to.matched && to.matched.length >= 2) {
      if (to.matched[0].meta.type) {
        // 点击顶部导航栏切换路由
        store.dispatch(`${MODULE_PAGE_SETTING.name}/${MODULE_PAGE_SETTING.SET_CURRENT_PAGE}`, to.matched[0].meta.type)
      }
    }

    next()
  })

  router.afterEach(to => {
    // document.title = (to.meta && to.meta.title) || ''
    // document.title = 'E商通'
  })

  return router
}
