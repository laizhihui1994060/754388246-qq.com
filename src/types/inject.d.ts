import Vue from 'vue'
import utils from '@/lib/utils'
import * as api from '@/api/index'

interface ExtendProps {
  readonly $api: typeof api.default
  readonly $utils: typeof utils
}

declare module 'vue/types/vue' {
  interface Vue extends ExtendProps {}
  interface VueConstructor extends ExtendProps {}
}
