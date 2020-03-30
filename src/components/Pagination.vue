<template>
  <div class="pagination-wrap">
    <el-pagination
      :size="paginationSize"
      :page-sizes="pageSizeOptions"
      :total="total"
      :page-size="pageSize"
      :current-page="page"
      @size-change="sizeChange"
      @current-change="currentChange"
      :layout="layout"
    />
  </div>
</template>

<script>
export default {
  props: {
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    paginationSize: {
      type: String,
      default: ''
    },
    page: {
      type: Number,
      default: 1,
      required: true
    },
    pageSize: {
      type: Number,
      default: 10,
      required: true
    },
    total: {
      type: Number,
      default: 0,
      required: true
    },
    pageSizeOptions: {
      type: Array,
      default: () => [10, 20, 30, 40, 50, 100, 200]
    },
    linkChange: {
      type: Boolean,
      default: true
    },
    linkName: {
      type: String,
      default: ''
    },
    showTotal: {
      type: Boolean,
      default: true
    },
    showSizeChanger: {
      type: Boolean,
      default: true
    }
  },
  name: 'Pagination',
  data() {
    return {}
  },

  methods: {
    sizeChange(size) {
      this.$emit('update:pageSize', size)
      this.paginationChange(size, this.page)
    },
    currentChange(page) {
      this.$emit('update:page', page)
      this.paginationChange(this.pageSize, page)
    },
    paginationChange(pageSize, page) {
      this.$emit('change')

      if (this.linkChange) {
        const name = this.name || this.$route.name
        const query = this.$route.query
        const params = this.$route.params
        if (name) {
          this.$router.push({ name, query: { ...query, page, size: pageSize }, params })
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 59px;
  padding: 0 20px;
  box-sizing: border-box;

  .total {
    color: #929292;
  }
  .customContent {
    display: flex;
    button + button {
      margin-left: 10px;
    }
  }
}
</style>
