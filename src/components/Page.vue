<template>
  <div class="page-com">
    <h2 v-if="title">{{ title }}</h2>
    <header v-if="$slots.headerLeft || $slots.headerRight" class="header">
      <slot name="headerLeft"></slot>
      <slot name="headerRight"></slot>
    </header>

    <div class="body-content">
      <slot></slot>
    </div>

    <div class="pagination" v-if="$slots.pagination">
      <slot name="pagination"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data() {
    return {}
  },
  computed: {
    title() {
      return this.$route.meta.title
    }
  }
}
</script>

<style lang="scss" scoped>
.page-com {
  display: flex;
  flex-direction: column;
  height: 100%;
  .body-content {
    flex: 1;
    display: flex;
    height: 0;
    flex-direction: column;
    // ::v-deep .el-table {
    //   flex: 1;
    //   height: 0;
    //   overflow: hidden;
    // }
  }
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  & > div {
    display: flex;
    flex-wrap: wrap;
    ::v-deep .el-input {
      width: 140px;
    }
    * + * {
      margin-left: 10px;
    }
    & + div {
      margin-left: 10px;
    }
  }
}
.body-content {
  margin: 10px 0;
}
.pagination {
  display: flex;
  justify-content: flex-end;
}
</style>
