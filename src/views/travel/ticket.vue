<template>
  <!-- 数字广播页面 -->
  <div class="content">
    <div class="header">
      <v-header />
      <v-tips :send-val="send"></v-tips>
    </div>
    <div class="body">
      <v-comamndMap v-if="device" :config="config" :bindData="device" />

    </div>
  </div>
</template>
<script>
import header from "@/components/header.vue";
import comamndMap from "@/components/commandMap.vue";
import tips from "@/components/tips.vue";
import mapticket from "@/components/travel/mapticket";

export default {
  name: "broadcasting",
  data() {
    return {
      device: null,
      config: {
        name: "broad",
        type: "visual",
        listTitle: "广播"
      },
      send: [
        { title: "神龙谷景区车道出现交通事故" },
        { title: "天燕景区道路损坏需要立即维修" },
        { title: "神农坛景区出现火灾预警" },
        { title: "神农坛景区出现火灾预警" }
      ]
    };
  },
  components: {
    "v-header": header,
    "v-comamndMap": comamndMap,
    "v-tips": tips,
    "v-mapticket": mapticket
  },
  created() {
    this.$store.commit('setIsSlot',false)
    this.getData();
    this.getIconData();
    this.getTipsData();
  },
  methods: {
    getData() {
      let url = `/data/mapticket.json`;
      $http.get(url).then(res => {
        var d = res.data;
        this.device = d;
      });
      console.log(this.device);
    },
    // 获取底部导航栏图标
    async getIconData() {
      let url = `/data/travel.json`;
      const { data: res } = await $http.get(url);
      this.$store.dispatch("changeMsgData", { res });
    },
    // 获取提示信息
    async getTipsData() {
      const { data: res } = await $http.get(`/data/tipsData.json`);
      console.log(res);
      this.send = res;
    },
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.content {
  position: relative;
  .body {
    margin: 0;
    padding: 0;
  }
}
</style>
