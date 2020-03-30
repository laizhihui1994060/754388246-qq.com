<template>
  <div>首页</div>
</template>

<script>
export default {
  data() {
    return {
      v: process.env.VUE_APP_VERSION
    }
  },
  created() {
    console.log(this.$store.state.pageSetting.currentSystem)
  }
}
</script>
