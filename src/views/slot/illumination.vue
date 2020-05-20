<template>
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

export default {
  name: "illumination",
  data() {
    return {
      device: null,
      config: {
        name: "ill",
        type: "ill",
        listTitle: "设备总数"
      },
      send: [
        { title: "古镇东南门出现电动车绊倒行人事故" },
        { title: "民俗馆景点人员拥堵" },
        { title: "百步梯路段有游客摔倒" },
        { title: "重庆记忆博物馆有小孩走失" }
      ]
    };
  },
  components: {
    "v-header": header,
    "v-comamndMap": comamndMap,
    "v-tips": tips
  },
  created() {
    this.$store.commit('setIsSlot',true)
    this.getData();
    this.getIconData();
    this.getTipsData();
  },
  methods: {
    getData() {
      let url = `/data/illData.json`;
      $http.get(url).then(res => {
        var d = res.data;
        console.log(d)
        this.device = d;
      });
      console.log(this.device);
    },
    // 获取底部导航栏图标
    async getIconData() {
      let url = `/data/sot.json`;
      const { data: res } = await $http.get(url);
      this.$store.dispatch("changeMsgData", { res });
    },
    // 获取提示信息
    async getTipsData() {
      const { data: res } = await $http.get(`/data/tipsData.json`);
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
