export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
      required: true
    },
    currentItem: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    show: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      }
    },
    isCreated() {
      return !!this.currentItem
    }
  }
}
