<template>
  <div id="app">
    <div class="app"></div>
    <van-button type="info">信息按钮</van-button>
    <van-search v-model="value" input-align="center" placeholder="请输入搜索关键词" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
<style lang="less">

.app {
  width: 300px;
  height: 300px;
  font-size: 75px;
  background-color: #f60;
}
</style>
