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
        name: 'test',
        component: Test,
        meta: {
          title: 'test',
          authKey: '11100000'
        }
      }
    ]
  }
]
