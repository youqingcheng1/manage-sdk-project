
import { createRouter, createWebHistory, Router } from 'vue-router'
import Config from '../config'

// 固定路由
const constantRoutes: any = [
  {
    path: '/404',
    component: () => import('../base/error/index.vue'),
    name: 'notFound',
    meta: {
      noHistory: true
    }
  }
]

// 捕获不存在的路由
const shimRoutes = [{ path: '/:catchAll(.*)', redirect: '/404' }]

let router: Router
export const initRouter = () => {
  // 系统路由
  const dynamicRoutes = Config.system.routes
  const routes = [...dynamicRoutes.concat(constantRoutes, shimRoutes)]
  router = createRouter({
    history: createWebHistory(),
    routes
  })
}

export const getRouter = () => {
  return { router, getRoutes: { dynamicRoutes: Config.system.routes, constantRoutes, shimRoutes } }
}
