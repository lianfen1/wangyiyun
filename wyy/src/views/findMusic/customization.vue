<template>
  <div class="main">
    <h3>爱上音乐为伴的下午</h3>
    <div class="sortHandoff">
      <div
        class="sortItem"
        v-for="item in $store.state.Playlists"
        :key="item.id"
        @click="getDetailId(item.id)"
      >
        <span class="play"><i class="bi bi-play"></i>{{ item.playCount }}</span>
        <img :src="item.coverImgUrl" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getDetailId(id) {
      this.$router.push({
        name: 'playlistDetail',
        query: { id },
      })
      this.$store.dispatch('getPlaylistDetail', id)
    },
  },
  created() {
    this.$store.dispatch('getPlaylist', '华语')
  },
}
</script>

<style scoped lang="less">
.main {
  margin: 0 auto;
  width: 14.7467rem;
  height: 3.2rem;
  h3 {
    height: 20px;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
  }
  .sortHandoff {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    margin-top: -20px;
    .sortItem {
      position: relative;
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      width: 2.8rem;
      height: 3.4667rem;
      cursor: pointer;

      img {
        flex: 1;
        border-radius: 5px;
      }
      span {
        padding-top: 10px;
        height: 0.6667rem;
      }
      .play {
        position: absolute;
        top: -6px;
        right: 0;
        width: 80px;
        height: 0.32rem;
        z-index: 11;
        text-align: center;
        line-height: 0.32rem;
      }
    }
    .paging {
      position: absolute;
      bottom: -100px;
      left: 0;
      height: 20px;
    }
  }
}
</style>
