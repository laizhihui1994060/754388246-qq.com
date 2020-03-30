const Marketing = () => import(/* webpackChunkName: "marketing" */ './index')
const Test = () => import(/* webpackChunkName: "marketing" */ './test/')

export default [
  {
    path: '/marketing',
    name: 'marketing',
    component: Marketing,
    meta: {
      type: 'marketing'
    },
    redirect: '/marketing/test',
    children: [
      {
        path: 'test',
        name: 'test2',
        component: Test,
        meta: {
          title: 'test2',
          authKey: '11100000'
        }
      }
    ]
  }
]
