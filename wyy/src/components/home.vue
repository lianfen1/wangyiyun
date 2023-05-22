<template>
  <div class="app" style="min-width: 1000px">
    <Header class="header" />
    <div class="body">
      <Aside class="aside"></Aside>
      <div class="Main">
        <div class="views">
          <router-view></router-view>
          <showHistory></showHistory>
        </div>
      </div>
    </div>
    <Footer class="Footer"></Footer>
  </div>
</template>

<script>
import Header from './header.vue'
import Aside from './sidebar.vue'
import Footer from './footer.vue'
import showHistory from './showHistory.vue'
export default {
  components: {
    Header,
    Aside,
    Footer,
    showHistory,
  },
  mounted() {
    this.$store.dispatch('getBannerList')
    this.$store.dispatch('getMusicSuggestList')
    this.$store.dispatch('getExclusiveList')
    this.$store.dispatch('getNewSongList')
    this.$store.dispatch('getListenBookList')
    this.$store.dispatch('getPlaylistHighqualityList')
    this.$store.dispatch('getPlaylist', '华语')
    this.$store.dispatch('getPlaylistDetail', localStorage.id)
  },
}
</script>

<style lang="less">
.app {
  width: 100%;
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
  }
  .body {
    display: flex;
    .aside {
      margin-top: 60px;
      position: fixed;
      height: 100%;
    }
    .Main {
      border-left: 1px solid #454545;
      width: 100%;
      display: flex;
      padding-top: 60px;
      margin-left: 200px;
      // height: 133.32rem;
      // background-color: #2b2b2b;
      .views {
        position: relative;
        flex: 1;
        width: 100%;
        padding-bottom: 100px;
        height: 33.3333rem;
        // background-color: #2b2b2b;
      }
    }
  }

  .Footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 75px;
    z-index: 9999;
    // background-color: rgb(172, 40, 121);
  }
}
</style>
