<template>
  <!--  :id="Path == item.path ? active : ''" -->
  <div class="navbar">
    <router-link
      v-for="(item, index) in navbarData"
      :key="index"
      :to="item.path"
      @click="currentIndex = index"
      :class="{ Bor: index === currentIndex }"
      >{{ item.name }}</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      navbarData: [
        { name: '个性推荐', path: '/home/findMusic/selfSuggest' },
        { name: '专属定制', path: '/home/findMusic/customization' },
        { name: '歌单', path: '/home/findMusic/playList' },
        { name: '排行榜', path: '/home/findMusic/topList' },
        { name: '歌手', path: '/home/findMusic/singer' },
        { name: '最新音乐', path: '/home/findMusic/NewMusic' },
      ],
    }
  },
  methods: {
    /*     AddBor(e) {
      e.target.id = 'Bor'
    }, */
  },
}
</script>

<style scoped lang="less">
.navbar {
  display: flex;
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
  height: 50px;
  width: 500px;
  list-style: none;
  a {
    flex: 1;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    color: #9bafa8;
    text-decoration: none;
  }
  a:hover {
    color: aliceblue;
    // border-bottom: 1px solid red;
  }
}
.Bor {
  color: aliceblue !important;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 2px solid red;
}
</style>
