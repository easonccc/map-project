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
import header from "./element/header.vue";
import loader from "./element/loader.vue";
import comamndMap from "./element/commandMap.vue";
import tips from "./element/tips.vue";

export default {
    name: "vedio",
    data() {
        return {
            device: null,
            config: {
                name: "video",
                type: "visual",
                listTitle: "设备总数"
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
        "v-loader": loader,
        "v-comamndMap": comamndMap,
        "v-tips": tips
    },
    created() {
        this.getData();
        this.getIconData();
    },
    methods: {
        // 关于地图数据
        getData() {
            let url = `static/data/visual.json`;
            $http.get(url).then(res => {
                var d = res.data;
                this.device = d;
            });
            // console.log(this.device);
        },
        // 获取底部导航栏图标
        async getIconData() {
            let url = `static/data/city.json`;
            const data = await $http.get(url);
            this.$store.dispatch("changeCity", { data });
            this.$store.dispatch("changeModel", {
                type: this.$route.query.type
            });
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
