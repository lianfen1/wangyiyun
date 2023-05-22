<template>
  <div class="taost" v-if="flag">
    请先成为VIP用户再点击收费歌曲,穷逼
    <button @click="btn">确定</button>
  </div>
</template>

<script>
import bus from '../Utils/bus'
export default {
  data() {
    return {
      flag: false,
    }
  },
  methods: {
    btn() {
      this.flag = false
    },
  },
  mounted() {
    bus.on('sendSongUrl', (value) => {
      if (value.data[0].url == null) {
        this.flag = true
        return
      } else {
        this.flag = false
      }
    })
  },
}
</script>

<style scoped lang="less">
.taost {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  border-radius: 15px;
  color: rgb(0, 119, 255);
  background-color: rgb(255, 255, 255);
  z-index: 999999999999;
  opacity: 1;
  font-size: 18px;
  button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    height: 40px;
    width: 60px;
    background: blue;
    color: white;
    font-size: 14px;
    border: 1px solid gray;
    border-radius: 10px;
  }
}
</style>
