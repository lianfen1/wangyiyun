<template>
  <div class="main">
    <div class="PlayListbanner" v-for="item in firstPlaylistHighqualityList" :key="item.id">
      <img :src="item.coverImgUrl" alt="" />
      <div>
        <span><i class="bi bi-trophy"></i>&nbsp;&nbsp;精品歌单</span>
        <span>{{ item.name }}</span>
      </div>
      <img :src="item.coverImgUrl" alt="" class="back" />
    </div>
    <PlayListTop></PlayListTop>
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
    <div class="pa">
      <Paging class="paging"></Paging>
    </div>
  </div>
</template>

<script>
import PlayListTop from './playList-top.vue'
import Paging from '../../components/paging.vue'
export default {
  components: {
    PlayListTop,
    Paging,
  },
  data() {
    return {}
  },
  methods: {
    getDetailId(id) {
      this.$router.push({
        name: 'playlistDetail',
        query: { id },
      })
      this.$store.dispatch('getPlaylistDetail', id)
    },
  },
  computed: {
    firstPlaylistHighqualityList() {
      let playlist = this.$store.state.PlaylistHighqualityList.playlists
      return playlist
    },
  },
  created() {
    this.$store.dispatch('getPlaylistHighqualityList')
    this.$store.dispatch('getPlaylist', '华语')
  },
}
</script>

<style scoped lang="less">
.main {
  margin: 0 auto;
  width: 14.7467rem;

  .PlayListbanner {
    position: relative;
    display: flex;
    padding: 18px 0 0 20px;
    height: 175px;
    z-index: 11;
    img {
      width: 140px;
      height: 140px;
      border-radius: 5px;
      z-index: 11;
      cursor: pointer;
    }
    div {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-around;
      z-index: 11;

      span {
        font-size: 16px;
        font-weight: 500;
      }
      span:nth-child(1) {
        width: 100px;
        height: 30px;
        color: #ab7842;
        font-size: 14px;
        text-align: center;
        line-height: 30px;
        border: 1px solid #ab7842;
        border-radius: 20px;
      }
    }
    .back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      filter: blur(15px);
      z-index: 1;
    }
  }
  .sortHandoff {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;

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
      clear: both;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 20px;
    }
  }
}
</style>
