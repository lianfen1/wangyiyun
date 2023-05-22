<template>
  <div class="list">
    <ul>
      <li>操作</li>
      <li style="color: #748787">标题</li>
      <li>歌手</li>
      <li>专辑</li>
      <li>时间</li>
    </ul>
    <ul
      class="song"
      v-for="(item, index) in playlistTracks"
      :key="item.id"
      @click="getsongMsg(item.id)"
    >
      <li>
        {{ index > 9 ? index + 1 : '0' + (index + 1) }}<i class="bi bi-heart"></i
        ><i class="bi bi-cloud-download"></i>
      </li>
      <li @click="getSongUrlData(item.id)" class="songname">{{ item.name }}</li>
      <li>{{ item.ar[0].name }}</li>
      <li>{{ item.al.name }}</li>
      <li>04:31</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import bus from '../../Utils/bus.js'
import { getSongUrlData } from '../../http/api.js'
export default {
  props: {
    searchKey: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['PlaylistDetail']),
    playlistTracks() {
      // console.log(JSON.parse(localStorage.playListDetail).playlist.tracks[0].id)
      return this.PlaylistDetail.playlist.tracks.filter((item) =>
        item.name.toLowerCase().includes(this.searchKey)
      )
    },
  },
  methods: {
    // 获取歌曲url
    async getSongUrlData(songId) {
      getSongUrlData(songId)
    },
    // 获取点击的歌曲
    getsongMsg(id) {
      let songMsg = this.PlaylistDetail.playlist.tracks.filter((item) => {
        return item.id == id
      })
      songMsg.a = true
      bus.emit('sendSongMsg', songMsg)
    },
  },
  created() {},
}
</script>

<style scoped lang="less">
.list {
  width: 100%;
  padding: 0 24px;
  ul {
    display: flex;
    // justify-content: space-between;
    height: 40px;
    font-size: 14px;
    text-align: left;
    line-height: 40px;
    li {
      text-align: left;
      color: #748787;
    }
    li:nth-child(1) {
      // flex: 1;
      width: 84px;
      text-align: center;
      i {
        margin: 0 5px;
      }
    }
    li:nth-child(2) {
      flex: 4;
      color: aliceblue;
    }
    li:nth-child(3) {
      flex: 2;
    }
    li:nth-child(4) {
      flex: 2;
    }
    li:nth-child(5) {
      flex: 1;
    }
  }
  .song:hover {
    background-color: #2f2f2f;
    cursor: pointer;
  }
}
</style>
