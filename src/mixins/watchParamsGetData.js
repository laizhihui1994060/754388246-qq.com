export default {
  data() {
    return {
      tableData: [],
      loading: false,
      params: {
        size: 20,
        page: 1
      },
      tmp_params: {},
      total: 1000
    }
  },
  created() {
    this.initParams()

    this.getData = this.$utils.debounce(this.getData, 100)
  },
  methods: {
    initParams() {
      const query = this.$route.query

      for (const i in query) {
        query[i] = isNaN(Number(query[i])) ? query[i] : Number(query[i])
      }

      Object.assign(this.params, query)
      this.tmp_params = { ...this.params }
    },
    updateParams(key, val, format = false) {
      const params = { ...this.params }

      params.page = 1
      params[key] = val
      Object.assign(this, { params })
    },
    replaceData() {
      this.params.page = 1
      const params = { ...this.params }

      this.tmp_params = params
    }
  },
  watch: {
    tmp_params: {
      handler() {
        this.getData()
      },
      deep: true
    }
  }
}
