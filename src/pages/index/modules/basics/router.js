export default [
  {
    path: '/basics',
    name: 'basics',
    component: () => import(/* webpackChunkName: "Basics" */ './index'),
    meta: {
      type: 'basics',
      title: '基础系统'
    },
    redirect: '/basics/employeeAccountManagement',
    children: [
      {
        path: 'employeeAccountManagement',
        name: 'employeeAccountManagement',
        component: () => import(/* webpackChunkName: "Basics" */ './employeeAccountManagement/'),
        meta: {
          title: '员工账号管理'
        }
      },
      {
        path: 'employeeRoleManagement',
        name: 'employeeRoleManagement',
        component: () => import(/* webpackChunkName: "Basics" */ './employeeRoleManagement/'),
        meta: {
          title: '员工角色管理'
        }
      }
    ]
  }
]
