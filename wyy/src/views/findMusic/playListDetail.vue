<template>
  <div>
    <div class="playlistDetail" v-if="cut">
      <img :src="PlaylistDetail.playlist.coverImgUrl" alt="" />
      <div class="playlistDetail-right">
        <span>{{ PlaylistDetail.playlist.name }}</span>
        <div>
          <img :src="PlaylistDetail.playlist.creator.avatarDetail.identityIconUrl" alt="" />
          <span>{{ PlaylistDetail.playlist.creator.nickname }}</span
          ><span></span>
        </div>
        <div>
          <span><i class="bi bi-play"></i>播放全部<i class="bi bi-plus-lg"></i></span
          ><span>收藏&nbsp;({{ PlaylistDetail.playlist.creator.authenticationTypes }})</span
          ><span>分享&nbsp;({{ PlaylistDetail.playlist.creator.userType }})</span
          ><span>下载全部</span>
        </div>
        <span class="tag"
          >标签:<i>{{ PlaylistDetail.playlist.tags[0] }}</i
          >/<i>{{ PlaylistDetail.playlist.tags[1] }}</i></span
        >
        <div class="songLength">
          <span
            >歌曲 : <i> {{ PlaylistDetail.playlist.trackIds.length }}</i></span
          >&nbsp;&nbsp;&nbsp;
          <span
            >播放 : <i> {{ PlaylistDetail.playlist.playCount }}</i></span
          >
        </div>
        <div class="prospectus">
          简介 :
          {{ PlaylistDetail.playlist.description }}
        </div>
      </div>
    </div>
    <div class="playlistDetail" v-else>
      <img :src="PlaylistDetailData.playlist.coverImgUrl" alt="" />
      <div class="playlistDetail-right">
        <span>{{ PlaylistDetailData.playlist.name }}</span>
        <div>
          <img :src="PlaylistDetailData.playlist.creator.avatarDetail.identityIconUrl" alt="" />
          <span>{{ PlaylistDetailData.playlist.creator.nickname }}</span
          ><span></span>
        </div>
        <div>
          <span><i class="bi bi-play"></i>播放全部<i class="bi bi-plus-lg"></i></span
          ><span>收藏&nbsp;({{ PlaylistDetailData.playlist.creator.authenticationTypes }})</span
          ><span>分享&nbsp;({{ PlaylistDetailData.playlist.creator.userType }})</span
          ><span>下载全部</span>
        </div>
        <span class="tag"
          >标签:<i>{{ PlaylistDetailData.playlist.tags[0] }}</i
          >/<i>{{ PlaylistDetailData.playlist.tags[1] }}</i></span
        >
        <div class="songLength">
          <span
            >歌曲 : <i> {{ PlaylistDetailData.playlist.trackIds.length }}</i></span
          >&nbsp;&nbsp;&nbsp;
          <span
            >播放 : <i> {{ PlaylistDetailData.playlist.playCount }}</i></span
          >
        </div>
        <div class="prospectus">
          简介 :
          {{ PlaylistDetailData.playlist.description }}
        </div>
      </div>
    </div>
    <SongsList></SongsList>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SongsList from '../songsList/SongsList.vue'
export default {
  components: {
    SongsList,
  },
  data() {
    return {
      flag: true,
      cut: true,
    }
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
    ...mapState(['PlaylistDetail']),
    PlaylistDetailData() {
      return JSON.parse(localStorage.vuex)
    },
  },
  mounted() {
    localStorage.setItem('id', this.$route.query.id)
    if (sessionStorage.opened) {
      console.log('窗口是刷新页面,不是新打开')
      this.flag = false
      this.getDetailId(localStorage.id)
    } else {
      console.log('窗口是新打开')
      this.flag = true

      //如果获取到历史url,则重定向到历史地址
      if (localStorage.history && localStorage.history != window.location.href) {
        window.location.replace(localStorage.history)
      }
    }
    sessionStorage.setItem('opened', 'true')
    localStorage.setItem('history', location.href)
  },
  created() {
    this.$store.dispatch('getPlaylistDetail', localStorage.id)
  },
  destroyed() {},
}
</script>

<style scoped lang="less">
.playlistDetail {
  display: flex;
  padding: 28px 0 0 28px;
  height: 218px;
  margin-bottom: 20px;
  // background-color: pink;
  img {
    height: 190px;
    width: 190px;
    border-radius: 5px;
    margin-right: 18px;
  }
  .playlistDetail-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    div {
      display: flex;
      align-items: center;
      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }
    }
    div:nth-child(3) {
      span {
        margin-right: 10px;
        width: 100px;
        height: 30px;
        font-size: 12px;
        color: #d5d5d5;
        text-align: center;
        line-height: 30px;
        border: 1px solid #4b4b4b;
        border-radius: 15px;
        cursor: pointer;
      }
      span:nth-child(1) {
        height: 35px;
        width: 140px;
        font-size: 15px;
        text-align: center;
        line-height: 35px;
        border: 1px solid #4b4b4b;
        border-radius: 20px;
        background-color: #ec4141;
        i {
          font-size: 17px;
          margin: 0 10px;
        }
      }
    }
    .tag {
      i {
        color: #6eb9c8;
      }
    }
    .songLength {
      i {
        color: #858b8b;
      }
    }
  }
  .prospectus {
    overflow: hidden;
    // white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
