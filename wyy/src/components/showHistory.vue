<template>
  <div :class="{ display: flag, showHistory: true }" v-if="show">
    <div class="showHistory-top">
      <h3>当前播放</h3>
      <div class="showHistory-top-body">
        <div class="item">总共{{ historyRecord.length }}首</div>
        <div class="item-right">
          <span>收藏全部</span>
          <span @click="clearHistory()">清空列表</span>
        </div>
      </div>
    </div>
    <ul class="showHistory-body" v-if="historyRecord">
      <li v-for="item in historyRecord" :key="item.id" @click="getSongUrlData(item[0].id)">
        <div v-for="song in item" :key="song.id">
          <span>{{ song.name }}</span>
          <!-- <span>{{ song.artists[0].name }}</span> -->
          <span>4:00</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import bus from '../Utils/bus.js'
import { getSongUrlData } from '../http/api.js'
export default {
  data() {
    return {
      flag: false,
      show: false,
    }
  },
  computed: {
    historyRecord() {
      let data = []
      if (typeof localStorage.songMsgHistory == 'string') {
        this.show = true
        data = JSON.parse(localStorage.songMsgHistory)
      }
      return data
    },
  },
  watch: {
    historyRecord: {
      immediate: true,
      handler(newVal, oldVal) {},
      deep: true,
    },
  },
  methods: {
    // 获取歌曲url
    async getSongUrlData(songId) {
      getSongUrlData(songId)
    },
    // 获取点击的歌曲
    getsongMsg(id) {
      let songMsg = this.historyRecord.filter((item) => item.id === id)
      songMsg.a = true
      bus.emit('sendSongMsg', songMsg)
    },
    // 清空本地songMsgHistory
    clearHistory() {
      delete localStorage.songMsgHistory
    },
  },
  mounted() {
    bus.on('show', (value) => {
      this.flag = value
    })
  },
}
</script>

<style scoped lang="less">
.showHistory {
  display: none;
  padding-bottom: 75px;
  position: fixed;
  right: 0;
  top: 60px;
  width: 420px;
  height: 100%;
  background-color: #363636;
  border-radius: 5px;
  z-index: 999;
  .showHistory-top {
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 88px;
    border-bottom: 1px solid #404040;
    h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
    }
    .showHistory-top-body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 33px;
      .item-right {
        display: flex;
        justify-content: space-between;
        width: 130px;
        cursor: pointer;
        span:nth-child(2) {
          color: #76a0c5;
        }
      }
    }
  }
  .showHistory-body {
    height: 100%;
    overflow: auto;
    li {
      display: flex;
      align-items: center;
      padding: 20px;
      width: 100%;
      height: 40px;
      color: #8a8a8a;
      text-align: left;
      div {
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        span:nth-child(1) {
          flex: 0.6;
          color: rgb(255, 255, 255);
          cursor: pointer;
        }
        span:nth-child(2) {
          flex: 0.2;
        }
        span:nth-child(3) {
          flex: 0.2;
        }
      }
    }
    li:nth-child(odd) {
      background-color: #3a3a3a;
    }
    li:hover {
      background: rgb(153, 153, 153);
    }
  }
}
.display {
  display: block !important;
}
</style>
