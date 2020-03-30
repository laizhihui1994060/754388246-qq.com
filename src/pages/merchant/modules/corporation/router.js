const Basics = () => import(/* webpackChunkName: "Basics" */ './index')
const Test = () => import(/* webpackChunkName: "Basics" */ './test/')

export default [
  {
    path: '/basics',
    name: 'basics',
    component: Basics,
    meta: {
      type: 'basics'
    },
    redirect: '/basics/test',
    children: [
      {
        path: 'test',
        name: 'test1',
        component: Test,
        meta: {
          title: 'test1',
          authKey: '11100000'
        }
      }
    ]
  }
]
