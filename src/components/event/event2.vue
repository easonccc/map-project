<template>
    <el-row class="replay" v-if="event">
        <el-col :span="24">事件分类：{{event.dictype}}</el-col>
        <el-col :span="24" class="replay-title">
            {{event.title}}
        </el-col>
        <el-col :span="4" class="replay-subtitle">
            上报人：{{event.sendUser}}
        </el-col>
        <el-col :span="20" class="replay-subtitle">
            时间：{{event.sendTime|formatDate}}
        </el-col>
        <el-col :span="24" class="replay-content">
            内容:{{event.messages}}
        </el-col>
        <el-col :span="24" class="replay-file">
            <el-row v-if="fileList" style="width:100%">
                <el-col :span="1">
                    附件:
                </el-col>
                <el-col :span="23">
                    <el-row>
                        <el-col :span="12" v-for="(v,i) in fileList" :key="i">
                            {{v.filename}}&nbsp;&nbsp;
                            <el-button type="text" size="small" @click="toPreview(v)">  查看</el-button>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="24" class="replay-history">
            <ul>
                <li v-for="(v,i) in event.inspectionMessageReplyList" :key="i">回复记录: <span>{{v.notes}} ({{v.createTime|formatDate}})</span> </li>
            </ul>
        </el-col>
        <el-col :span="24" class="replay-textarea">
            <textarea type="textarea" placeholder="请输入回复信息..."   v-model="replyMsg"/>
        </el-col>
        <el-col style="margin-top:20px">
            <el-button size="small" type="primary"  class="pull-right" @click="toReplay">确认回复</el-button>
            <el-button size="small" style="margin-right:20px"  class="pull-right" @click="$router.push({name:'event1'})">返回地图</el-button>
        </el-col>
        <div class="preview" v-show="previewShow" v-if="previewItem">
            <div class="preview-close" @click="previewShow=false">
                X
            </div>
            <img v-if="previewItem.filetype=='FJLX01'" :src="previewItem.qn_url" style="height:100%;"  alt="" />
            <video v-else-if="previewItem.filetype=='FJLX02'" width="500" height="400" controls autoplay>
                <source :src="previewItem.qn_url" type="video/mp4">
                您的浏览器不支持Video标签。
            </video>
            <video  v-else-if="previewItem.filetype=='FJLX03'" width="500" height="100" controls autoplay>
                <source :src="previewItem.qn_url" type="video/mp4">
                您的浏览器不支持Video标签。
            </video >
        </div>
    </el-row>
</template>
<script>
import comamndMap from '../element/commandMap.vue'

export default {
    name: 'event2',
    data() {
        return {
            previewShow:false,
            previewItem:null,
            // device:null,
            event:null,
            fileList:null,
            config:{
                name:"event",
                type:"event",
                listTitle:"事件列表"
            },
            replyMsg:null,
        }
    },
    components: {
        'v-comamndMap': comamndMap,
    },
    created() {
        // this.getData()
        this.getEvent();
        this.getFile();
    },
    methods:{
        toPreview(item){
            this.previewShow=true;
            this.previewItem=item;
        },
        toReplay(){
            if(this.replyMsg==null||this.replyMsg==""){
                this.$message.error("请输入回复信息!");
                return
            }
            let url=`${CONFIG.apiIp}inspectionmessagereply/saveInspectionMessageReply`;
            let post={
                inspectionMessage:{id:this.$route.query.id},
                notes:this.replyMsg,
                replyUser:"admin"
            };
            $http.post(url,post).then(res => {
                this.getEvent();
                this.replyMsg=null;
            })
        },
        getEvent(){
            let url=`${CONFIG.apiIp}inspectionmessage/findInspectionMessageById?id=${this.$route.query.id}`
            $http.get(url).then(res => {
                let d = res.data.data;
                d.inspectionMessageReplyList=d.inspectionMessageReplyList.reverse();
                this.event = d;
            })
        },
        getFile(){
            let url=`${CONFIG.apiIp}sys/doclink/findDocLinkByCode?appcode=${this.$route.query.id}&clname=com.vieking.yz.afot.entity.inspection.InspectionMessage`
            $http.get(url).then(res => {
                let d = res.data.data;
                this.fileList = d;
            })
        },

    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
    @import "../../assets/css/mixin.less";
    .replay {
        width: 100%;
        height: 100%;
        border-radius: 2px;
        background-color: rgba(1, 104, 185, 0.2);
        color: #2ed9fd;
        font-size: 18px;
        line-height: 30px;
        padding: 20px;
        // position: relative;
        &-title{
            line-height: 70px;
            font-size: 48px;
            text-align: center;
        }
        &-subtitle{
            line-height: 40px;
            font-size: 22px;
        }
        &-content{
            border: 1px solid #ccc;
            border-radius: 3px;
            min-height: 100px;
            padding: 10px;
            max-height: 160px;
            overflow-y:auto ;
            .scroll-bar(#eee);
        }
        &-file{
            line-height: 40px;
            max-height: 100px;
            &-item{
                height: 100px;
                overflow-y:auto;
                .scroll-bar(#eee);
            }
            img{
                width: 100%;

            }
        }
        &-history{
            margin-top: 20px;
            max-height: 120px;
            overflow-y:auto ;
            .scroll-bar(#eee);
            span{
                color: #fff;
            }
        }
        &-textarea{
            margin-top: 10px;
            >textarea{
                box-sizing: border-box;
                border-radius: 3px;
                padding: 10px;
                height: 200px;
                color: #fff;
                font-size: 16px;
                width: 100%;
                border: solid 1px #2ed9fd;
                background-color: rgba(46, 217, 253, 0.2);
                &::-webkit-input-placeholder {
                    color:    #ccc;
                }
            }

        }
    }
    .preview{
        position: fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index: 10000;
        background-color: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        &-close{
            position: absolute;
            top: 50px;
            right: 50px;
            color: #fff;
            font-size: 36px;
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border-radius: 25px;
            border: 1px solid #fff;
        }

    }
    @media (max-width:1800px) {
        .replay {
            font-size: 14px;
            line-height: 20px;
            padding: 12px;
            &-content{
                max-height: 120px;
            }
            &-history{
            max-height: 100px;
            overflow-y:auto ;
                .scroll-bar(#eee);
            }
            &-textarea{
                margin-top: 10px;
                >textarea{
                    padding: 10px;
                    height: 120px;
                }
            }
        }

    }
</style>
