<template>
  <div class="collector">
    <div class="collector-item" v-for="item in CollectorList.subscribers" :key="item.avatarImgId">
      <img :src="item.avatarUrl" alt="" />
      <span
        >{{ item.nickname }}<i v-if="item.gender == 2" class="bi bi-gender-male"></i>
        <i v-else class="bi bi-gender-female"></i
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: [''],
  data() {
    return {
      // 收藏者列表
      CollectorList: [],
    }
  },
  methods: {
    async getCollectorList() {
      let id = this.$route.query.id
      let { data: CollectorListData } = await this.$http.get(
        `/playlist/subscribers?id=${id}&limit=30`
      )
      this.CollectorList = CollectorListData
    },
  },
  created() {
    this.getCollectorList()
  },
}
</script>

<style scoped lang="less">
.collector {
  padding: 0 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: first baseline;
  .collector-item {
    width: 4.8rem;
    display: flex;
    align-items: center;
    margin-top: 20px;
    text-align: center;
    line-height: 94px;
    img {
      width: 1.2533rem;
      height: 1.2533rem;
      border-radius: 50%;
    }
    span {
      margin-left: 10px;
      .bi-gender-male {
        // margin-left: 10px;
        color: #2f7691;
      }
      .bi-gender-female {
        // margin-left: 5px;

        color: #6b3853;
      }
    }
  }
}
</style>
