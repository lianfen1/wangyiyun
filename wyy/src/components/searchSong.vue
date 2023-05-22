<template>
  <div class="list">
    <ul>
      <li>操作</li>
      <li style="color: #748787">音乐标题</li>
      <li>歌手</li>
      <li>专辑</li>
      <li>时间</li>
    </ul>
    <div>
      <ul
        class="song"
        v-for="(item, index) in songData.songs"
        :key="item.id"
        @click="getsongMsg(item.id), getSongUrlData(item.id)"
      >
        <li>
          {{ index >= 9 ? index + 1 : '0' + (index + 1) }}<i class="bi bi-heart"></i
          ><i class="bi bi-cloud-download"></i>
        </li>
        <li class="songname">{{ item.name }}</li>
        <li>{{ item.artists[0].name }}</li>
        <li>{{ item.name }}</li>
        <li>04:31</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import bus from '../Utils/bus.js'
import { getSongUrlData } from '../http/api.js'
export default {
  data() {
    return {
      songData: [],
    }
  },
  computed: {},
  methods: {
    // 获取歌曲url
    async getSongUrlData(songId) {
      getSongUrlData(songId)
    },
    // 获取点击的歌曲
    getsongMsg(id) {
      let songMsg = this.songData.songs.filter((item) => item.id === id)
      // console.log(songMsg)
      bus.emit('sendSongMsg', songMsg)
    },
  },
  mounted() {
    // 获取搜索歌曲数据
    bus.on('searchData', (value) => {
      this.songData = value.result
      // console.log(this.songData, 11)
    })
  },
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
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
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
