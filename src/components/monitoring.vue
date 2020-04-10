<template>
    <div class="content">
        <div class="header">
            <v-header />
            <v-tips :send-val="send"></v-tips>
        </div>
        <div class="body">
            <v-comamndMap v-if="device" :config="config" :bindData="device" />
            <v-mapMonitoring :msgData="msgData"></v-mapMonitoring>
        </div>
    </div>
</template>
<script>
import header from "./element/header.vue";
import loader from "./element/loader.vue";
import comamndMap from "./element/commandMap.vue";
import tips from "./element/tips.vue";
import mapMonitoring from "./element/mapMonitoring";

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
                { title: "神龙谷景区车道出现交通事故" },
                { title: "天燕景区道路损坏需要立即维修" },
                { title: "神农坛景区出现火灾预警" },
                { title: "神农坛景区出现火灾预警" }
            ],
            msgData: null
        };
    },
    components: {
        "v-header": header,
        "v-loader": loader,
        "v-comamndMap": comamndMap,
        "v-tips": tips,
        "v-mapMonitoring": mapMonitoring
    },
    created() {
        this.getData();
        this.getMsgData();
    },
    methods: {
        getData() {
            let url = `static/data/visual.json`;
            $http.get(url).then(res => {
                var d = res.data;
                this.device = d;
            });
            console.log(this.device);
        },
        // 获取右侧信息
        async getMsgData() {
            let url = `static/data/msgData.json`;
            const { data: msgData } = await $http.get(url);
            console.log(msgData);
            this.msgData = msgData;
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
