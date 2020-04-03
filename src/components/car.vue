<template>
    <div class="content">
        <div class="header">
            <v-header/>
        </div>
        <div class="body">
            <v-comamndMap v-if="device" :config="config"  :bindData="device"/>
        </div>
    </div>
</template>
<script>
import header from './element/header.vue'
import loader from './element/loader.vue'
import comamndMap from './element/commandMap.vue'

export default {
    name: 'car',
    data() {
        return {
            device:null,
            config:{
                name:"car",
                type:"car",
                listTitle:"设备列表"
            }
        }
    },
    components: {
        'v-header': header,
        'v-loader': loader,
        'v-comamndMap': comamndMap,
    },
    created() {
        this.getData()
    },
    methods:{
        getData(){
            let url = `static/data/commandCar.json`
            $http.get(url).then(res => {
                var d = res.data;
                this.device = d;
            })
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>
