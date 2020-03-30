import mutations from './mutations'
import actions from './actions'

export default {
  namespaced: true,
  mutations,
  actions,
  state: {
    showMenu: true,
    currentPage: 'basics',
    currentSystem: 'merchant',

    headerLink: [
      {
        id: 'basics',
        label: '基础模块',
        name: 'basics',
        menuConfig: []
      },
      {
        id: 'marketing',
        label: '营销模块',
        name: 'marketing',
        menuConfig: [
          {
            key: 'organizationManagement',
            label: '系统管理',
            icon: 'el-icon-lollipop',
            children: [
              {
                key: 'institutionManagement',
                label: '员工账号管理'
              },
              {
                key: 'authorityManagement',
                label: '员工角色管理'
              }
            ]
          }
        ]
      }
    ]
  }
}
