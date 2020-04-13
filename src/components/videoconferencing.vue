<template>
    <div class="content">
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
import header from "./element/header.vue";
import loader from "./element/loader.vue";
import bottom from "./element/bottom.vue";
import mapVideo from "./system/mapVideo";

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
        "v-loader": loader,
        "v-mapVideo": mapVideo,
        "v-bottom": bottom
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            let url = `static/data/visual.json`;
            $http.get(url).then(res => {
                var d = res.data;
                this.device = d;
            });
            console.log(this.device);
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
