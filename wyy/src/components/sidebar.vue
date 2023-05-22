<template>
  <div class="aside">
    <ul>
      <li
        v-for="(item, index) in TreeMenu"
        :key="index"
        @click="currentIndex = index"
        :class="{ current: index === currentIndex }"
      >
        <router-link :to="`/home/${item.path}`">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import router from '../router'
export default {
  data() {
    return {
      currentIndex: 0,
      TreeMenu: [
        { path: 'findMusic', title: '发现音乐' },
        { path: 'findMusic', title: '博客' },
        { path: 'findMusic', title: '视频' },
        { path: 'findMusic', title: '关注' },
        { path: 'findMusic', title: '直播' },
        { path: 'findMusic', title: '私人FM' },
      ],
    }
  },
  computed: {
    treeMenu() {
      let path = []
      // router.options.routes[1].children.filter((item, index) => item.meta.isShow)
      return path
    },
  },
  mounted() {
    // console.log(router.options.routes[1])
  },
}
</script>

<style scoped lang="less">
.aside {
  width: 200px;
  font-size: 14px;
  background-color: #2b2b2b;
  ul {
    margin: 0;
    padding: 0;
    margin-top: 10px;
    height: 100%;
  }
  ul li {
    padding-left: 20px;
    margin: 10px 0;
    height: 40px;
    color: aliceblue;
    list-style: none;
  }
  ul li:hover {
    background-color: #333;
    font-size: 18px;
    border-radius: 5px;
    line-height: 40px;
    font-weight: bold;
  }
  a {
    color: aliceblue;
    text-decoration: none;
  }
  .current {
    background-color: #333;
    font-size: 18px;
    border-radius: 5px;
    line-height: 40px;
    font-weight: bold;
  }
  .el-menu-vertical-demo {
    background-color: #2b2b2b;
    border: 0;
  }
}
</style>
