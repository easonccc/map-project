<template>
  <div class="content">
    <close></close>
    <div class="header">
      <v-header />
    </div>
    <div class="body">
      <v-mapEmergency></v-mapEmergency>
      <bottom></bottom>
    </div>
  </div>
</template>
<script>
import header from "@/components/header.vue";
import mapEmergency from "@/components/system/mapEmergency";
import bottom from "@/components/bottom";
import close from "@/components/close";

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
    "v-mapEmergency": mapEmergency,
    bottom,
    close
  },
  created() {
    this.getData();
    this.getIconData();
  },
  methods: {
    getData() {
      let url = `/data/visual.json`;
      $http.get(url).then(res => {
        var d = res.data;
        this.device = d;
      });
      console.log(this.device);
    },
    // 获取底部导航栏图标
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
