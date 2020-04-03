<template>
    <div class="content">
        <div class="header">
            <v-header/>
        </div>
        <div class="body">
            <router-view></router-view>
            <!-- <v-comamndMap v-if="device" :config="config" :bindData="device"/> -->
        </div>
    </div>
</template>
<script>
import header from './element/header.vue'
import loader from './element/loader.vue'
import comamndMap from './element/commandMap.vue'

export default {
    name: 'dispatch',
    data() {
        return {
            device:null,
            config:{
                name:"event",
                type:"event",
                listTitle:"事件列表"
            }
        }
    },
    components: {
        'v-header': header,
        'v-loader': loader,
        'v-comamndMap': comamndMap,
    },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>
