<template>
  <div class="main">
    <!-- 轮播图 -->
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :modules="modules"
      class="mySwiper2"
    >
      <swiper-slide
        class="swiper-slide"
        v-for="item in $store.state.bannerList.banners"
        :key="item.targetId"
      >
        <img :src="item.imageUrl" alt="" />
      </swiper-slide>
    </swiper>
    <!-- 推荐歌单模块 -->
    <div class="MusicSuggest">
      <div class="MusicSuggest-top">
        <router-link to="/home/findMusic/playList"
          >推荐歌单<i class="bi bi-chevron-right"></i
        ></router-link>
      </div>
      <div class="MusicSuggest-inner">
        <div
          class="MusicSuggest-inner-Item"
          v-for="item in $store.state.MusicSuggestList.result"
          :key="item.id"
          @click="getDetailId(item.id)"
        >
          <img :src="item.picUrl" alt="" class="img" />
          <span class="span">{{ item.name }}</span>
        </div>
      </div>
    </div>
    <!-- 热门博客 -->
    <div class="musicblog">
      <div class="musicblog-top">
        <router-link to="/home/musicblog">热门博客<i class="bi bi-chevron-right"></i></router-link>
      </div>
      <div class="musicblog-inner">
        <div class="musicblog-inner-item">
          <div class="musicblog-inner-item-left">
            <img
              src="https://p2.music.126.net/Xd6h-xOoPj2yTUuQXOhyCQ==/18612532836990988.jpg"
              alt=""
            />
          </div>
          <div class="musicblog-inner-item-right">
            <span>拉个勾说永远爱我</span>
            <span>歌曲翻唱</span>
            <span>慢速降调</span>
          </div>
        </div>
        <div class="musicblog-inner-item">
          <div class="musicblog-inner-item-left">
            <img
              src="https://p1.music.126.net/SGD1b-rku41Lj0QATboFrw==/109951166258366024.jpg"
              alt=""
            />
          </div>
          <div class="musicblog-inner-item-right">
            <span>赶在日落前见你一面</span>
            <span>歌曲翻唱</span>
            <span>Zhxx7x</span>
          </div>
        </div>
        <div class="musicblog-inner-item">
          <div class="musicblog-inner-item-left">
            <img
              src="http://p1.music.126.net/6lhQ6jqPaBfsRdOJEgeiYw==/109951168239184663.jpg"
              alt=""
            />
          </div>
          <div class="musicblog-inner-item-right">
            <span>菲律宾没有雪</span>
            <span>原创demo</span>
            <span>焦晓飞工作室</span>
          </div>
        </div>
        <div class="musicblog-inner-item">
          <div class="musicblog-inner-item-left">
            <img
              src="https://p1.music.126.net/LIhxL7p5UkYX5NmHL8vhzQ==/18869818556322650.jpg"
              alt=""
            />
          </div>
          <div class="musicblog-inner-item-right">
            <span>独到 降调 3D环绕版</span>
            <span>歌曲翻唱</span>
            <span>红色高跟鞋</span>
          </div>
        </div>
        <div class="musicblog-inner-item">
          <div class="musicblog-inner-item-left">
            <img
              src="https://p1.music.126.net/SGD1b-rku41Lj0QATboFrw==/109951166258366024.jpg"
              alt=""
            />
          </div>
          <div class="musicblog-inner-item-right">
            <span>特别的你（烟嗓版）</span>
            <span>歌曲翻唱</span>
            <span>2023抖音热歌BGM</span>
          </div>
        </div>
        <div class="musicblog-inner-item">
          <div class="musicblog-inner-item-left">
            <img
              src="https://p2.music.126.net/uFWcdYyjcqvM5JFZ5nsPGw==/1365593453032084.jpg"
              alt=""
            />
          </div>
          <div class="musicblog-inner-item-right">
            <span>特别的你（烟嗓版）</span>
            <span>歌曲翻唱</span>
            <span>2023抖音热歌BGM</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 听书 -->
    <div class="listenBooks">
      <div class="listenBooks-top">
        <span><i class="bi bi-arrow-repeat"></i>听见好书-新用户免费听</span>
        <div class="sort">全部分类<i class="bi bi-caret-down-fill"></i></div>
      </div>
      <div class="listenBooks-body">
        <div
          class="listenBooks-body-Item"
          v-for="item in $store.state.ListenBookList"
          :key="item.id"
        >
          <img :src="item.picUrl" alt="" class="img" />
          <span class="span">{{ item.name }}</span>
        </div>
      </div>
    </div>
    <!-- 独家放送 -->
    <div class="Exclusive">
      <div class="Exclusive-top">
        <h3>独家放送<i class="bi bi-chevron-right"></i></h3>
      </div>
      <div class="Exclusive-body">
        <div
          class="Exclusive-body-Item"
          v-for="item in $store.state.ExclusiveList.result"
          :key="item.id"
        >
          <img :src="item.picUrl" alt="" />
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="newMusic">
      <div class="newMusic-top">
        <router-link to="/home/findMusic/NewMusic"
          >最新音乐<i class="bi bi-chevron-right"></i
        ></router-link>
      </div>
      <div class="newMusic-body">
        <div
          class="newMusic-body-item"
          v-for="item in $store.state.NewSongList.result"
          :key="item.id"
        >
          <div class="newMusic-body-item-left">
            <img :src="item.picUrl" alt="" />
          </div>
          <div class="newMusic-body-item-right" v-for="items in item.song.artists" :key="items.id">
            <span>{{ item.name }}</span>
            <span>{{ items.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/less'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let thumbsSwiper = null

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper = swiper
    }
    return {
      modules: [FreeMode, Navigation, Thumbs],
    }
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
  created() {
    this.$store.dispatch('getBannerList')
    this.$store.dispatch('getMusicSuggestList')
    this.$store.dispatch('getExclusiveList')
    this.$store.dispatch('getNewSongList')
    this.$store.dispatch('getListenBookList')
    console.log(this.$store.state.bannerList)
  },
}
</script>

<style scoped lang="less">
.main {
  margin: 0 auto;
  width: 14.7467rem;
  height: 3.2rem;
  // 轮播图
  a:hover {
    color: white;
    border: 0;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }
  .mySwiper2 {
    height: 80%;
    width: 100%;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  // 推荐歌单
  .MusicSuggest {
    margin-top: 10px;
    width: 100%;
    .MusicSuggest-top {
      height: 40px;
      a {
        line-height: 40px;
        font-size: 20px;
        font-weight: 500;
      }
    }
    .MusicSuggest-inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .MusicSuggest-inner-Item {
        display: flex;
        width: 2.6667rem;
        height: 3.5rem;
        flex-direction: column;
        margin-top: 20px;
        cursor: pointer;
      }
      .MusicSuggest-inner-Item:nth-child(1) {
        margin-left: 0;
      }
      .MusicSuggest-inner-Item:nth-child(6) {
        margin-left: 0;
      }

      .MusicSuggest-inner-Item:nth-child(5) {
        margin-right: 0;
      }
      .MusicSuggest-inner-Item:nth-child(10) {
        margin-right: 0;
      }
    }
  }
  // 热门博客
  .musicblog {
    // margin-top: 10px;
    .musicblog-top {
      height: 40px;
      margin-bottom: -10px;
      a {
        line-height: 40px;
        font-size: 20px;
        font-weight: 500;
      }
    }
    .musicblog-inner {
      display: flex;
      flex-wrap: wrap;

      .musicblog-inner-item {
        display: flex;
        width: 50%;
        margin-top: 10px;
        img {
          width: 78px;
          border-radius: 5px;
        }
      }
      .musicblog-inner-item-right {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        span {
          color: #5f5f5f;
        }
        span:nth-child(1) {
          color: aliceblue;
        }
        span:nth-child(2) {
          width: 60px;
          text-align: center;
          border: 1px solid #5f5f5f;
        }
      }
    }
  }
  // 听书
  .listenBooks {
    margin-top: 10px;
    .listenBooks-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      i {
        font-size: 20px;
      }
      span {
        width: 245px;
        line-height: 50px;
        font-size: 20px;
      }
      .sort {
        margin-right: 10px;
        width: 105px;
        height: 28px;
        color: #d0d0d0;
        font-size: 14px;
        text-align: center;
        line-height: 28px;
        border: 1px solid #8a8a8a;
        border-radius: 25px;
        i {
          font-size: 14px;
        }
      }
    }
    .listenBooks-body {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .listenBooks-body-Item {
        display: flex;
        width: 2.6667rem;
        height: 3.5rem;
        flex-direction: column;
      }
    }
  }
  // 独家放送
  .Exclusive {
    margin-top: 0.4rem;
    .Exclusive-top {
      height: 40px;
      margin-bottom: -10px;
      h3 {
        line-height: 40px;
        font-size: 20px;
        font-weight: 500;
      }
    }
    .Exclusive-body {
      margin-top: 0.2667rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .Exclusive-body-Item {
        display: flex;
        flex-direction: column;
        width: 4.8rem;
        img {
          height: 2.6667rem;
          border-radius: 5px;
        }
        span {
          padding: 5px 0 0 5px;
          height: 0.64rem;
          font-size: 0.16rem;
        }
      }
    }
  }
  // 最新音乐
  .newMusic {
    .newMusic-top {
      padding-top: 0.2667rem;
      height: 40px;
      margin-bottom: -10px;
      a {
        line-height: 40px;
        font-size: 20px;
        font-weight: 500;
      }
    }
    .newMusic-body {
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      height: 250px;
      margin-top: 0.6667rem;
      .newMusic-body-item {
        display: flex;
        width: 33.33%;
        height: 54px;
        img {
          width: 54px;
          height: 54px;
          border-radius: 5px;
          margin-right: 10px;
        }
        .newMusic-body-item-right {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          span {
            display: block;
            text-indent: 2px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
  .img {
    flex: 1;
    border-radius: 5px;
  }
  .span {
    font-size: 0.16rem;
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
</style>
