<template>
  <div class="my-header">
    <div class="back">
      <span @click="$router.back()" class="iconfont iconjiantou2"></span>
    </div>
    <div class="title"><slot></slot></div>
    <div class="extra"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.my-header {
  height: 40px;
  display: flex;
  border-bottom: 1px solid #ccc;
  line-height: 40px;
  // background-color: #f5f5f5;
  .back,
  .extra {
    text-align: center;
    width: 40px;
  }
  .title {
    font-weight: 700;
    text-align: center;
    flex: 1;
    font-size: 16px;
  }
}
</style>
