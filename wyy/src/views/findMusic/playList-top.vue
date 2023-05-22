<template>
  <div class="playList-current">
    <span>{{ currentSortName }}<i class="bi bi-chevron-right"></i></span>
    <ul>
      <li
        v-for="(item, index) in sort"
        :key="index"
        @click="
          {
            ;(currentName = item.name), (currentSortName = currentName)
          }
          getPlaylist(item.name)
        "
        :class="{ current: currentName === item.name }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSortName: '华语',
      currentName: '华语',
      sort: [
        { name: '华语', path: '' },
        { name: '流行', path: '' },
        { name: '摇滚', path: '' },
        { name: '民谣', path: '' },
        { name: '电子', path: '' },
        { name: '另类/独立', path: '' },
        { name: '轻音乐', path: '' },
        { name: '综艺', path: '' },
        { name: '影视原声', path: '' },
        { name: 'ACG', path: '' },
      ],
    }
  },
  methods: {
    getPlaylist(tag) {
      this.$store.dispatch('getPlaylist', tag)
      this.$store.state.pageNow = 1
    },
  },
}
</script>

<style scoped lang="less">
.playList-current {
  display: flex;
  justify-content: space-between;
  padding: 13px 0;
  height: 58px;
  width: 100%;
  span {
    height: 30px;
    width: 100px;
    text-align: center;
    line-height: 30px;
    border: 1px solid white;
    border-radius: 15px;
    cursor: pointer;
  }
  ul {
    display: flex;
    align-items: center;
    li {
      cursor: pointer;
      color: #8b8b8b;
      margin-right: 20px;
      text-align: center;
    }
    li:hover {
      color: aliceblue;
    }
  }
  .current {
    color: #cf3832;
    background-color: #352c2c;
    border: 1px solid #352c2c;
    border-radius: 10px;
  }
}
</style>
