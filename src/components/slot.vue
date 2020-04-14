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
            send: null
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
        this.getTipsData();
    },
    methods: {
        // 获取提示信息
        async getTipsData() {
            const { data: res } = await $http.get(`static/data/tipsData.json`);
            console.log(res);
            this.send = res;
        },
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
            let url = `static/data/sot.json`;
            const data = await $http.get(url);
            this.$store.dispatch("changeSot", { data });
            this.$store.dispatch("changeModel", {
                type: "sot"
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
