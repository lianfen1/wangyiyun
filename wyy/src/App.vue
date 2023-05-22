<template>
  <div class="app">
    <router-view></router-view>
    <taost></taost>
  </div>
</template>

<script>
import taost from './components/taost.vue'
export default {
  component: {
    taost,
  },
}
</script>

<style lang="less">
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
</style>
