<template>
  <el-container class="container-wrap">
    <slot name="header"></slot>
    <el-container class="container">
      <slot name="menu"></slot>
      <el-main>
        <template v-if="tabs && tabs.length">
          <el-tabs size="small" v-model="currentTab" type="card" closable @tab-remove="tabRemove">
            <el-tab-pane :key="item.name" v-for="item in tabs" :label="item.title" :name="item.name">
              <slot></slot>
            </el-tab-pane>
          </el-tabs>
        </template>
        <template v-else>
          <slot></slot>
        </template>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { MODULE_PAGE_SETTING } from '../../pages/serviceProvider/store/'

export default {
  data() {
    return {}
  },
  methods: {
    tabRemove(name) {
      this.$store.dispatch(`${MODULE_PAGE_SETTING.name}/${MODULE_PAGE_SETTING.DEL_CURRENT_TAB}`, name)
    }
  },
  computed: {
    tabs() {
      return this.$store.state.pageSetting.tabs
    },
    currentTab: {
      get() {
        return this.$store.state.pageSetting.currentTab
      },
      set(val) {
        this.$store.commit(`${MODULE_PAGE_SETTING.name}/${MODULE_PAGE_SETTING.SET_CURRENT_TAB}`, val)
      }
    }
  },
  watch: {
    currentTab(name) {
      this.$router.replace({ name })
    }
  }
}
</script>

<style scoped lang="scss">
.container-wrap {
  flex-direction: column;

  ::v-deep .el-tabs {
    height: 100%;
    display: flex;
    flex-direction: column;
    .el-tabs__content {
      flex: 1;
      .el-tab-pane {
        height: 100%;
      }
    }
  }
}
.container {
  display: flex;
  height: calc(100vh - 60px);
}
</style>
