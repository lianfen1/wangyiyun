<template>
  <div class="footer">
    <div>
      <div class="songDetail" v-for="item in songMsg" :key="item.id">
        <img v-if="songMsg.a === true" :src="item.al.picUrl" alt="" />
        <img
          v-else
          src="http://p4.music.126.net/jSH_ikeooxveWl0BTc3Xkg==/109951166786983190.jpg"
          alt=""
        />
        <div class="songMsg-right">
          <div class="songname">{{ item.name }}</div>
          <div class="name" v-if="item.ar">
            <span v-for="(item, i) in item.ar" :key="i">{{ item.name + ' ' }}</span>
          </div>
          <div class="name" v-else>
            <span v-for="(item, i) in item.artists" :key="i">{{ item.name + ' ' }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="audio-box">
      <audio class="audio" :src="audioSrc" autoplay ref="audio"></audio>
      <div class="controls">
        <div class="audio_item audio_prev">
          <svg
            class="bi bi-chevron-bar-left"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"
            />
          </svg>
        </div>
        <div
          v-if="flag"
          class="audio_item audio_play"
          @click=";(flag = false), playStart()"
          @keyup.space=";(flag = false), playStart()"
        >
          <svg
            class="bi bi-play-fill"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
            />
          </svg>
        </div>
        <div
          v-else
          class="audio_item audio_puase"
          @click=";(flag = true), playPause()"
          @keyup.space=";(flag = true), playPause()"
        >
          <svg
            class="bi bi-pause-fill"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"
            />
          </svg>
        </div>

        <div class="audio_item audio_next">
          <svg
            class="bi bi-chevron-bar-right"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0zM11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </div>
      </div>
      <div class="progress">
        <span class="played-time" id="playedTime">00:00</span>
        <div class="pgs-total">
          <div class="pgs-play" id="progress" style="width: 1%"></div>
        </div>
        <span class="audio-time" id="audioTime">0</span>
      </div>
    </div>
    <div class="options">
      <div><i class="bi bi-piggy-bank"></i></div>
      <div><i class="bi bi-volume-off"></i></div>
      <div><i class="bi bi-people-fill"></i></div>
      <div class="History" @click="showhis">
        <i class="bi bi-justify"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { mapState } from 'vuex'
import bus from '../Utils/bus.js'
export default {
  data() {
    return {
      songMsg: [], //8175589393//29747996
      audioSrc: `https://music.163.com/song/media/outer/url?id=2022147586.mp3`,
      flag: true,
      showHis: false,
      localSong: [],
    }
  },
  methods: {
    transTime(time) {
      var duration = parseInt(time)
      var minute = parseInt(duration / 60)
      var sec = (duration % 60) + ''
      var isM0 = ':'
      if (minute == 0) {
        minute = '00'
      } else if (minute < 10) {
        minute = '0' + minute
      }
      if (sec.length == 1) {
        sec = '0' + sec
      }
      return minute + isM0 + sec
    },
    playStart() {
      this.$refs.audio.play()
    },
    playPause() {
      this.$refs.audio.pause()
    },
    showhis() {
      this.showHis = !this.showHis
      bus.emit('show', this.showHis)
    },
  },
  mounted() {
    let Msg =
      typeof localStorage.songMsgHistory == 'string' ? JSON.parse(localStorage.songMsgHistory) : []
    let src = JSON.parse(localStorage.audioSrc) || []
    this.songMsg = JSON.parse(localStorage.songMsg)
    this.audioSrc = `https://music.163.com/song/media/outer/url?id=${src.data[0].id}.mp3`
    bus.on('sendSongMsg', (value) => {
      this.songMsg = value
      localStorage.setItem('songMsg', JSON.stringify(value))
      // 储存历史播放歌曲
      Msg.push(value)
      console.log(Msg)
      localStorage.setItem('songMsgHistory', JSON.stringify(Msg))
    }),
      bus.on('sendSongUrl', (value) => {
        if (value.data[0].url == null) {
          return
        }
        this.flag = false

        this.audioSrc = `https://music.163.com/song/media/outer/url?id=${value.data[0].id}.mp3`
        localStorage.setItem('audioSrc', JSON.stringify(value))
      })
  },
}
</script>

<style scoped lang="less">
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #212124;
  // overflow: hidden;
  .songDetail {
    padding: 14px 0;
    display: flex;
    width: 250px;
    padding-left: 10px;
    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    .songMsg-right {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      color: #d3d3d3;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .audio-box {
    display: flex;
    flex-direction: column;
    flex: 1;
    // width: 400px;
    height: 50px;
    text-align: center;
    background-color: transparent;
    .progress {
      display: flex;
      width: 400px;
      height: 50px;
      margin: 0px auto;
      position: relative;
      color: #db2809;
      span {
        margin-top: -10px;
        width: 50px;
        height: 100%;
        position: absolute;
        top: 0;
        font-size: 12px;
        color: #db2809;
      }
      /*
      .played-time {
        left: 15px;
        text-align: left;
      }
      .audio-time {
        right: 15px;
        text-align: right;
      }
      .pgs-total {
        width: 100%;
        height: 2px;
        background-color: transparent;
        border-radius: 10px;
        position: relative;
        .pgs-play {
          height: 100%;
          position: relative;
          border-radius: 10px;
        }
        .pgs-play:after {
          content: '';
          position: absolute;
          right: -8px;
          width: 16px;
          height: 16px;
          top: 50%;
          margin-top: -8px;
          background-color: #3fcccc;
          border-radius: 50%;
          z-index: 1;
        }
      }
      .pgs-total:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 7px;
        bottom: 7px;
        background-color: #bbbbbb;
        border-radius: 10px;
        z-index: -1;
      }
      .pgs-play:before {
        content: '';
        position: absolute;
        top: 7px;
        bottom: 7px;
        left: 0;
        right: 0;
        background-color: #3fcccc;
        border-radius: 10px;
        z-index: 1;
      } */
    }
    /*     .progress:after {
      position: absolute;
      top: -5px;
      left: 20px;
      content: '';
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #db2809;
      z-index: 1000;
    } */
    .controls {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -14px;
      .audio_item {
        margin: 10px;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        text-align: center;
        line-height: 38px;
        font-size: 18px;
      }
      .audio_item:hover {
        cursor: pointer;
        color: #ec4141;
      }
      .audio_play,
      .audio_puase {
        background-color: #2a2a2d;
      }
    }
  }
  .options {
    padding: 14px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    // background-color: red;

    div {
      cursor: pointer;
      i {
        font-size: 16px;
      }
      .bi-volume-off {
        font-size: 24px;
      }
    }
    .History {
      position: relative;
    }
  }
}
</style>
