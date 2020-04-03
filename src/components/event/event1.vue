<template>
    <v-comamndMap v-if="eventList" :config="config" :bindData="eventList"/>
</template>
<script>
import comamndMap from '../element/commandMap.vue'

export default {
    name: 'dispatch',
    data() {
        return {
            eventList:null,
            config:{
                name:"event",
                type:"event",
                listTitle:"事件列表"
            }
        }
    },
    components: {
        'v-comamndMap': comamndMap,
    },
    created() {
        METHODS.login(this.getEvent)
        // this.getEvent()
    },
    methods:{
        getData(){
            let url = `static/data/commandEvent.json`
            $http.get(url).then(res => {
                var d = res.data;
                this.device = d;
            })
        },
        getEvent(){
            let url=`${CONFIG.apiIp}inspectionmessage/findInspectionMessage?offset=0&pageSize=100`;
            $http.post(url).then(res=>{
                let data=res.data.data;
                let eventList=[];
                data.forEach(v=>{
                    eventList.push({
                        name: v.title,
                        location: [v.gdCoordx, v.gdCoordy],
                        id: v.id,
                        messages:v.messages,
                        replays:v.inspectionMessageReplyList,
                        extData:v,
                        "type": "event"
                    });
                })
                this.eventList=eventList;
            })
        },
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>
