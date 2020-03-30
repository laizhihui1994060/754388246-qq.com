<template>
  <el-header class="header">
    <img src="logo" class="logo" alt="logo" />
    <div class="nav">
      <template v-for="item in headerLink">
        <router-link
          class="link-li"
          :class="currentPage === item.id && 'is-check'"
          :key="item.id"
          :to="{ name: (item && item.name) || 'home' }"
        >
          {{ item.label }}
        </router-link>
      </template>
    </div>
  </el-header>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    currentPage() {
      return this.$store.state.pageSetting.currentPage
    },
    headerLink() {
      return this.$store.state.pageSetting.headerLink
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  background: #fff;
  display: flex;
  .logo {
    width: 300px;
    vertical-align: middle;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .link-li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 14px;
    color: #000;
    margin: 0 8px;
    width: 92px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    &.is-check {
      font-size: 16px;
      font-weight: 700;
      position: relative;
      &::after {
        content: '';
        width: 100%;
        position: absolute;
        height: 3px;
        background: #1890ff;
        left: 0;
        bottom: 0;
      }
    }

    a {
      transition: all 0.2s;
      color: #1f1e1d;
      display: block;
      padding: 0 10px;
    }
  }
}
</style>
