<template>
  <el-aside class="asibe" style="width:200px">
    <el-menu
      class="menu"
      @open="handleOpen"
      @close="handleClose"
      background-color="#101010"
      text-color="#ffffffa6"
      active-text-color="#fff"
      :default-openeds="openKeys"
      :default-active="$route.name"
    >
      <template v-for="menu in menuConfig">
        <el-menu-item :index="menu.key" :key="menu.key" v-if="!menu.children || !menu.children.length">
          <i v-if="menu.icon" :class="menu.icon"></i>
          <router-link :to="{ name: menu.key }">
            {{ menu.label }}
          </router-link>
        </el-menu-item>

        <el-submenu :index="menu.key" :key="menu.key" v-else>
          <template slot="title">
            <i v-if="menu.icon" :class="menu.icon"></i>
            <span>{{ menu.label }}</span>
          </template>

          <template v-for="subMenu in menu.children">
            <el-menu-item :key="subMenu.key" :index="subMenu.key">
              <i v-if="subMenu.icon" :class="subMenu.icon"></i>
              <router-link :to="{ name: subMenu.key }">
                {{ subMenu.label }}
              </router-link>
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    link() {
      return this.$store.state.pageSetting.headerLink.find(item => item.id === this.currentPage)
    },
    menuConfig() {
      return this.link ? this.link.menuConfig : []
    },
    currentPage() {
      return this.$store.state.pageSetting.currentPage
    }
  },
  created() {
    this.openKeys = this.menuConfig.filter(item => item.children && item.children.length).map(item => item.key)
  },
  methods: {
    handleOpen() {},
    handleClose() {}
  }
}
</script>

<style lang="scss" scoped>
.asibe {
  display: flex;
  height: calc(100% - 20px);
  flex-direction: column;
  overflow: auto;
  margin-top: 20px;
  .menu {
    height: 100%;
  }
  ::v-deep .el-menu-item > a {
    color: hsla(0, 0%, 100%, 0.65);
    &.router-link-active {
      color: #fff;
    }
  }
}
</style>
