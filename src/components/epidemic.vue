<template>
    <div class="content">
        <div class="header">
            <v-header />
        </div>
        <div class="body">
            <v-mapEpidemic></v-mapEpidemic>
            <bottom></bottom>
        </div>
    </div>
</template>
<script>
import header from "./element/header.vue";
import loader from "./element/loader.vue";
import mapEpidemic from "./system/mapEpidemic";
import bottom from "./element/bottom";

export default {
    name: "monitoring",
    data() {
        return {};
    },
    components: {
        "v-header": header,
        "v-loader": loader,
        "v-mapEpidemic": mapEpidemic,
        bottom
    },
    created() {},
    methods: {}
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
