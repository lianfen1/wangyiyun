<template>
  <div class="SongsList">
    <div class="SongsList-top">
      <ul>
        <li
          v-for="(item, index) in topTag"
          :key="index"
          @click="currentIndex = index"
          :class="{ current: currentIndex === index }"
        >
          {{ item.name }}
        </li>
      </ul>
      <div class="search">
        <i class="bi bi-search"></i>
        <input type="text" placeholder="搜索歌单音乐" v-model="searchKey" />
      </div>
    </div>
    <div class="SonsList-body">
      <component :is="showTag" :searchKey="searchKey"></component>
    </div>
  </div>
</template>

<script>
import Songlist from './songlist.vue'
import SongComment from './songComment.vue'
import SongCollector from './songCollector.vue'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      currentIndex: 0,
      topTag: [
        { name: '歌曲列表', path: '/playlistDetail/songlist' },
        { name: '评论', path: '/playlistDetail/songComment' },
        { name: '收藏者', path: '/playlistDetail/songCollector' },
      ],
      searchKey: '', //@keyup.enter.native="toSearch()"
    }
  },
  components: {
    Songlist,
    SongComment,
    SongCollector,
  },
  computed: {
    showTag() {
      if (this.currentIndex == '0') {
        return Songlist
      } else if (this.currentIndex == '1') {
        return SongComment
      } else {
        return SongCollector
      }
    },
  },
}
</script>

<style scoped lang="less">
.SongsList {
  .SongsList-top {
    padding: 0 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    ul {
      display: flex;
      justify-content: space-between;
      width: 220px;
      text-align: center;
      line-height: 45px;
      li {
        color: #d5d5ca;
        text-decoration: none;
      }
      li:hover {
        color: aliceblue;
        cursor: pointer;
      }
    }
    .search {
      position: relative;
      input {
        padding: 0 10px;
        width: 200px;
        height: 24px;
        background-color: transparent;
        border: 1px solid #323232;
        border-radius: 15px;
        color: #d5d5ca;
      }
      i {
        position: absolute;
        top: 0;
        right: 20px;
        text-align: center;
        line-height: 24px;
        cursor: pointer;
      }
    }
  }
  .current {
    color: aliceblue !important;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 2px solid #ec4141;
  }
}
</style>
