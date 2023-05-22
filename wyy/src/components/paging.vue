<template>
  <div class="navb">
    <nav aria-label="Page navigation example">
      <ul class="pagination offset-4">
        <li class="page-item" @click="preCurrentPage">
          <router-link class="page-link" to="/home/findMusic/playList" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </router-link>
        </li>
        <li
          v-for="item in pages"
          :key="item.index"
          @click="CurrentPage(item)"
          :class="
            ($store.state.pageNow == item ? 'page-item active' : 'page-item') +
            (item == '...' ? ' disabled' : '')
          "
        >
          <router-link class="page-link" to="/home/findMusic/playList">{{ item }}</router-link>
        </li>
        <li class="page-item" @click="nextCurrentPage">
          <router-link class="page-link" to="/home/findMusic/playList" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    CurrentPage(id) {
      if (id == '...') return
      this.$store.state.pageNow = id
      this.$store.commit('getPlaylistPage')
    },
    preCurrentPage() {
      if (this.$store.state.pageNow > 1) {
        --this.$store.state.pageNow
        this.$store.commit('getPlaylistPage')
      }
    },
    nextCurrentPage() {
      if (this.$store.state.pageNow < this.$store.state.pageCount) {
        ++this.$store.state.pageNow
        this.$store.commit('getPlaylistPage')
      }
    },
  },
  computed: {
    pages() {
      let { pageCount, pageNow } = this.$store.state
      if (pageCount <= 7) return pageCount
      if (pageNow <= 6) {
        return [1, 2, 3, 4, 5, 6, 7, '...', pageCount]
      } else if (pageNow >= pageCount - 6) {
        return [
          1,
          '...',
          pageNow - 1,
          pageCount - 6,
          pageCount - 5,
          pageCount - 4,
          pageCount - 3,
          pageCount - 2,
          pageCount - 1,
          pageCount,
        ]
      } else {
        return [
          1,
          '...',
          pageNow - 2,
          pageNow - 1,
          pageNow,
          pageNow + 1,
          pageNow + 2,
          '...',
          pageCount,
        ]
      }
    },
  },
}
</script>

<style scoped lang="less">
.navb {
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  .pagination {
    display: flex;
    justify-content: center;
    margin: 0;
    li {
      width: 30px;
      height: 30px;
      margin: 2px;
      a {
        padding: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 30px;
        background-color: transparent;
        overflow: hidden;
        color: #8b8b8b;
        border: 1px solid #8b8b8b;
        border-radius: 5px;
      }
      a:hover {
        color: aliceblue;
        border: 1px solid #ffffff;
      }
    }
  }
}
</style>
