<template>
  <div class="box">
    <div class="text">sub1</div>
    <router-view style="margin-top: 20px" />
  </div>
</template>

<style lang="less" scoped>
.box {
  padding: 20px;
  background: grey;
  .text {
    color: white;
  }
}
</style>
