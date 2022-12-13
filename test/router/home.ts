export default [
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/home.vue'),
    meta: {
      title: '主页面'
    }
  }
]