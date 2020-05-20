<template>
  <div class="content">
    <div class="header">
      <v-header />
      <v-tips :send-val="send"></v-tips>
    </div>
    <div class="body">
      <v-comamndMap v-if="device" :config="config" :bindData="device" />
      <!-- <v-mapMonitoring :msgData="msgData"></v-mapMonitoring> -->
    </div>
  </div>
</template>
<script>
import header from "@/components/header.vue";
import comamndMap from "@/components/commandMap.vue";
import tips from "@/components/tips.vue";

export default {
  name: "monitoring",
  data() {
    return {
      device: null,
      config: {
        name: "video",
        type: "vid",
        listTitle: "设备总数"
      },
      send: [
        { title: "古镇东南门出现电动车绊倒行人事故" },
        { title: "民俗馆景点人员拥堵" },
        { title: "百步梯路段有游客摔倒" },
        { title: "重庆记忆博物馆有小孩走失" }
      ],
      msgData: null
    };
  },
  components: {
    "v-header": header,
    "v-comamndMap": comamndMap,
    "v-tips": tips
    // "v-mapMonitoring": mapMonitoring
  },
  created() {
    this.$store.commit("setIsSlot", true);
    this.getData();
    this.getMsgData();
  },
  methods: {
    getData() {
      let url = `/data/jk.json`;
      $http.get(url).then(res => {
        var d = res.data;
        this.device = d;
      });
      console.log(this.device);
    },
    // 获取右侧信息
    async getMsgData() {
      let url = `/data/msgData.json`;
      const rightMsg = await $http.get(url);
      console.log(rightMsg);
      this.msgData = rightMsg;
    }
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
