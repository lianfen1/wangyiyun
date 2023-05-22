<template>
  <div class="header">
    <h3 class="logo">MOOD音乐</h3>
    <div class="header-right">
      <div class="tips">
        <i class="bi bi-chevron-left" @click="back()"
          ><i @click="forward()" class="bi bi-chevron-right"></i
        ></i>
      </div>
      <div class="search">
        <input
          type="text"
          class="searchKey"
          @focus="searchHots()"
          @blur="disnone()"
          @keyup.enter="getSearchSongList()"
          v-model="searchKey"
        />
        <!-- -->
        <i class="bi bi-search"></i>
        <div class="searchHot" :style="{ display }">
          <ul>
            <li>热搜榜</li>
            <li v-for="(item, i) in searchHot.hots" :key="i" @click="getHotsData(item.first)">
              <span :style="{ color: i >= 3 ? '' : 'red' }">{{ i + 1 }}</span>
              <div>{{ item.first }}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="utils">
        <div class="headerImg bi bi-person"></div>
        <div class="login">未登录</div>
        <div class="VIP">vip开通</div>
        <div v-if="flag === 1" class="headerImg bi bi bi-toggle-off" @click="themeGreen()"></div>
        <div v-else class="headerImg bi bi bi-toggle-on" @click="themeDefault()"></div>

        <!-- bi bi-toggle-on -->
        <div class="headerImg bi bi-envelope"></div>
        <div class="headerImg bi bi-gear"></div>
        <div class="headerImg bi bi-pip" @click="exitFullScreen()"></div>
        <div class="headerImg bi bi-dash-lg"></div>
        <div class="headerImg bi bi-aspect-ratio" @click="toFullScreen()"></div>
        <div class="headerImg bi bi-x-lg"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { searchHot, getSearchData } from '../http/api.js'
import bus from '../Utils/bus.js'
export default {
  data() {
    return {
      flag: 1,
      display: 'none',
      searchHot: [],
      searchKey: '',
    }
  },
  methods: {
    themeDefault() {
      this.flag = 1
      document.body.className = 'theme_default'
      localStorage.setItem('themeColor', 'theme_default')
    },
    // 青绿色
    themeGreen() {
      this.flag = 0
      document.body.className = 'theme_darkgreen'
      localStorage.setItem('themeColor', 'theme_darkgreen')
    },
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    },
    toFullScreen() {
      let elem = document.body
      elem.webkitRequestFullScreen
        ? elem.webkitRequestFullScreen()
        : elem.mozRequestFullScreen
        ? elem.mozRequestFullScreen()
        : elem.msRequestFullscreen
        ? elem.msRequestFullscreen()
        : elem.requestFullScreen
        ? elem.requestFullScreen()
        : alert('浏览器不支持全屏')
    },
    exitFullScreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    },
    // 调用搜索列表请求数据
    searchHots() {
      this.display = 'block'
      searchHot().then((res) => {
        this.searchHot = res.result
      })
      // console.log(this.searchHot)
    },
    // 得到搜索列表关键词
    getHotsData(key) {
      this.searchKey = key
      getSearchData(this.searchKey).then((res) => {
        bus.emit('searchData', res)
      })
      getSearchSongList()
    },
    // 控制搜索热词列表延迟
    disnone() {
      setTimeout(() => {
        this.display = 'none'
      }, 500)
    },
    // 请求返回搜索数据
    getSearchSongList() {
      getSearchData(this.searchKey).then((res) => {
        bus.emit('searchData', res)
        // console.log(res)
      })
      this.display = 'none'
      this.$router.push({ name: 'SearchSong' })
    },
  },
}
</script>

<style scoped lang="less">
.header {
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  min-height: 50px;
  display: flex;
  box-sizing: border-box;
  padding: 0 20px;
  // width: 25.3733rem;
  width: 107%;
  height: 60px;
  color: aliceblue;
  background-color: #222225;
  border-bottom: 1px solid #941717;

  .header-right {
    display: flex;
    width: 100%;
    justify-content: space-between;

    .tips {
      padding-left: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      i {
        margin: 0 10px;
        border-radius: 50%;
        cursor: pointer;
        // background-color: #941717;
      }
    }
    .search {
      position: relative;
      padding: 14px 0;
      .searchKey {
        padding-left: 35px;
        width: 160px;
        height: 32px;
        border: 0;
        border-radius: 15px;
        background-color: #2c2c2f;
        color: aliceblue;
      }
      i {
        position: absolute;
        top: 20px;
        left: 15px;
        font-size: 14px;
      }
      .searchHot {
        // display: block !important;
        position: absolute;
        top: 65px;
        left: -60px;
        width: 350px;
        height: 920px;
        background-color: #363636;
        border-radius: 10px;
        z-index: 99999;
        ul {
          line-height: 50px;
          color: #5e5e5e;
          z-index: 99999;

          li {
            display: flex;
            padding-left: 20px;
            height: 50px;
            cursor: pointer;
            span {
              width: 30px;
            }
            div {
              flex: 1;
            }
          }
          li:hover {
            background-color: #333;
          }
        }
      }
    }
    .utils {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: right;
      // width: 500px;
      // margin-right: 0.5rem;
      div {
        margin-right: 0.0667rem;
        width: 30px;
        height: 30px;
        font-size: 20px;
        cursor: pointer;
      }
      .login,
      .VIP {
        width: 60px;
        font-size: 12px !important;
        line-height: 32px;
        text-align: center;
      }
      .VIP {
        width: 60px;
        height: 20px;
        background-color: gray;
        border-radius: 15px;
        line-height: 20px;
      }
    }
  }
}
.logo {
  position: absolute;
  top: 0;
  left: 0;
  position: relative;
  padding-left: 30px;
  width: 200px;
  line-height: 60px;
  font-size: 20px;
}
.logo::before {
  position: absolute;
  top: 20px;
  left: 0;
  content: '';
  width: 25px;
  height: 25px;
  background-color: rgb(243, 25, 25);
  background: url(../assets/logo5.png) no-repeat;
  background-size: 100% 100%;
  border-radius: 50%;
}
</style>
