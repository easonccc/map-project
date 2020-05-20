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
import mapPolling from "@/components/system/mapPolling";

export default {
  name: "monitoring",
  data() {
    return {
      device: null,
      config: {
        name: "video",
        type: "visual",
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
    "v-tips": tips,
    "v-mapPolling": mapPolling
  },
  created() {
    this.$store.commit('setIsSlot',false)
    this.getData();
    this.getIconData();
  },
  methods: {
    getData() {
      let url = `/data/polling.json`;
      $http.get(url).then(res => {
        var d = res.data;
        this.device = d;
      });
      console.log(this.device);
    },
    async getIconData() {
      let url = `/data/system.json`;
      const { data: res } = await $http.get(url);
      this.$store.dispatch("changeMsgData", { res });
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
