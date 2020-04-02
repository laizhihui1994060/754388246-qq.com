<template>
  <div id="app">
  这是一段话啊~~~sssssssssss
    <template v-if="isGuest">
      <router-view />
    </template>
    <layout-container v-else>
      <layout-header slot="header" />
      <layout-menu slot="menu" />
      <router-view />
    </layout-container>
  </div>
</template>

<script>
import LayoutContainer from './Container'
import LayoutHeader from './Header'
import LayoutMenu from './SlideMenu'

import 'moment/locale/zh-cn'

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    LayoutHeader,
    LayoutContainer,
    LayoutMenu
  },
  computed: {
    isGuest() {
      return this.$route.name === 'guest'
    }
  }
}
</script>

<style lang="scss">
#app {
  a {
    text-decoration: none;
    user-select: none;
  }

  width: 100%;
  height: 100%;
  .page-loading {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 100001;
    background-color: #fff;
  }

  // .page-loading-cnt {
  //   height: 30%;
  // }

  // .page-loading-circle {
  //   width: 60px;
  //   height: 60px;
  //   margin: 0 auto;
  //   border: 6px solid rgb(243, 243, 243);
  //   border-radius: 100%;
  //   box-sizing: border-box;

  //   .keyframes(@name; @arguments) {
  //     @keyframes @name {
  //       @arguments();
  //     }
  //   }

  //   .keyframes(loading-circle; {0% {transform: rotate3d(0, 0, 0, 0) ;} 100% {transform: rotate3d(0, 1, 0, 180deg) ;}});

  //   animation: loading-circle 0.3s infinite linear;
  // }

  // .page-loading-desc {
  //   margin: 16px 0 0;
  //   text-align: center;
  //   line-height: 1;
  //   color: rgb(172, 172, 172);
  // }
}
</style>
