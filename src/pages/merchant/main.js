import Vue from 'vue'
import InjectPlugin from '../../lib/inject'
import '../../lib/request'
import App from '../../views/layouts/App'
import routerController from './router/controller'
import store from './store'
import '../../lib/element'
import '../../assets/css/reset.scss'
import CommonComponents from '../../components/'

Vue.config.productionTip = false
Vue.use(InjectPlugin)

CommonComponents.forEach(components => Vue.use(components))
;(async () => {
  const router = await routerController()
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})()
