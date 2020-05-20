<template>
  <div class="content">
    <close></close>
    <div class="header">
      <v-header />
    </div>
    <div class="body">
      <v-mapVideo></v-mapVideo>
      <v-bottom></v-bottom>
    </div>
  </div>
</template>
<script>
import header from "@/components/header.vue";
import mapVideo from "@/components/system/mapVideo";
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
      }
    };
  },
  components: {
    "v-header": header,
    "v-mapVideo": mapVideo,
    "v-bottom": bottom,
    close
  },
  created() {
    this.getData();
    this.getIconData()
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
