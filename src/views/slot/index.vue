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
import commandList from "@/components/commandList";

export default {
  name: "vedio",
  data() {
    return {
      device: null,
      config: {
        name: "video",
        type: "visual",
        listTitle: "设备总数",
      },
      send: null,
    };
  },
  components: {
    "v-header": header,
    "v-comamndMap": comamndMap,
    "v-tips": tips,
    commandList,
  },
  created() {
    this.$store.commit("setIsSlot", true);
    this.getData();
    this.getIconData();
    this.getTipsData();
    this.saveIndex();
  },
  props: {
    bindData: {
      type: Array,
      default: function(value) {
        return [
          {
            name: "视屏监控1",
            location: [111.343911, 25.273539],
            id: 1,
            code: 1,
            type: "vid",
          },
        ];
      },
    },
    msgData: {
      type: Object,
    },
    // bottom的数据
    bottomData: {
      type: Object,
    },
  },
  methods: {
    // 关于地图数据
    getData() {
      let url = `/data/visual.json`;
      $http.get(url).then((res) => {
        var d = res.data;
        this.device = d;
        console.log(this.device);
      });
      // console.log(this.device);
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
    // 将当前索引保存至本地
    saveIndex() {
      sessionStorage.setItem("bcak", 0);
    },
  },
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
