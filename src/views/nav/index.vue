<template>
  <div class="content">
    <v-header></v-header>
    <div class="navbox">
      <div
        class="item text-center"
        v-for="(i, j) in navList"
        :key="j"
        :style="{
          'background-image': 'url(./img/background_image/nav' + j + '.png)'
        }"
        @click="$router.push({ path: i.path })"
      >
        {{ i.name }}
      </div>
    </div>
  </div>
</template>

<script>
import header from "@/components/header";
export default {
  name: "nav",
  data() {
    return {
      navList: [
        { name: "物联设备", path: "/slot" },
        { name: "智慧城市", path: "/traffic" },
        { name: "智慧文旅", path: "/credit" },
        { name: "智慧交通", path: "4" },
        { name: "智慧农业", path: "5" },
        { name: "系统应用", path: "/emergency" }
      ]
    };
  },
  components: {
    "v-header": header
  }
};
</script>

<style lang="less" scoped>
.content {
  background-image: url("/img/background_image/navbg.png");
  background-size: cover;
  justify-content: center;
  align-items: center;
  .navbox {
    width: 1400px;
    height: 550px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      width: 440px;
      height: 255px;
      font-size: 48px;
      font-weight: 400;
      color: rgba(153, 239, 255, 1);
      line-height: 255px;
      background-size: cover;
    }
    .item:hover {
      cursor: pointer;
    }
  }
}
</style>
