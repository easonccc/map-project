<template>
    <div id="app">
        <!-- <v-header/> -->
        <router-view v-if="isRouterAlive" />
    </div>
</template>

<script>
// import header from './components/element/header.vue'
export default {
    name: "app",
    provide() {
        return {
            reload: this.reload
        };
    },
    data() {
        return {
            isRouterAlive: true
        };
    },
    methods: {
        reload() {
            this.isRouterAlive = flase;
            this.$nextTick(function() {
                this.isRouterAlive = true;
            });
        }
    }
    // components: {
    //     'v-header': header
    // }
};
</script>

<style lang="less">
body,
html {
    overflow: hidden;
    width: 100%;
    height: 100%;
    box-sizing: border-box; //font-family: PingFangSC-Regular;
    margin: 0;
    padding: 0;
}

#app {
    font-family: "Microsoft YaHei", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    position: relative;
    margin: 0;
    padding: 0;
}
</style>
