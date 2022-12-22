export default [
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "test" */ '../pages/test.vue'),
    meta: {
      title: '测试页面'
    }
  }
]