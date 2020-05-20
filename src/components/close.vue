<template>
  <div class="close" @click="goHome">
    <img src="../assets/img/组 21 拷贝.png" alt=""  style="width: 50px"/>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push({
        path: "/nav",
        query: {
          type: "nav"
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 2px;
  z-index: 99999999;
  cursor: pointer;
}
</style>
