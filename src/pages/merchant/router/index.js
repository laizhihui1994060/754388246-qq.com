import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/'
import Guest from '@/views/guest/'

const [routerPush, routerReplace] = [VueRouter.prototype.push, VueRouter.prototype.replace]
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
VueRouter.prototype.replace = function replace(location) {
  return routerReplace.call(this, location).catch(error => error)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/guest',
    name: 'guest',
    component: Guest
  }
]

export default async () => {
  const needModules = ['corporation', 'setting']

  let moduleRoutes = []

  for (let i = 0; i < needModules.length; i++) {
    const moduleName = needModules[i]
    let routes = await import(`../modules/${moduleName}/router`)
    moduleRoutes.push(...routes.default)
  }

  return new VueRouter({
    routes: [...routes, ...moduleRoutes]
  })
}
