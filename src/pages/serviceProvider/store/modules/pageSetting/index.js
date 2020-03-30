import mutations from './mutations'
import actions from './actions'

export default {
  namespaced: true,
  mutations,
  actions,
  state: {
    showMenu: true,
    currentPage: 'basics',
    currentSystem: 'serviceProvider',
    tabs: [],
    currentTab: null,
    headerLink: [
      {
        id: 'basics',
        label: '基础模块',
        name: 'basics',
        menuConfig: [
          {
            key: 'systemManagement',
            label: '系统管理',
            icon: 'el-icon-lollipop',
            children: [
              {
                key: 'employeeAccountManagement',
                label: '员工账号管理'
              },
              {
                key: 'employeeRoleManagement',
                label: '员工角色管理'
              }
            ]
          }
        ]
      },
      {
        id: 'marketing',
        label: '营销模块',
        name: 'marketing',
        menuConfig: []
      }
    ]
  }
}
