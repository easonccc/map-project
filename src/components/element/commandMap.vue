<template>
    <div class="map">
        <div id="mapBox" class="mapBox"></div>
        <commandList
            :device="bindData"
            :title="config.listTitle"
            :itemSelect="modalIndex"
        ></commandList>
        <mapMonitoring
            v-if="config.type === 'video'"
            :deviceOne="bindData[modalIndex]"
            @closeModal="modalHide"
            :msgOne="msgData"
        ></mapMonitoring>
        <mapBroadcasting
            v-if="config.type === 'broad'"
            :deviceOne="bindData[modalIndex]"
            @closeModal="modalHide"
        ></mapBroadcasting>
        <mapIllumination
            v-if="config.type === 'ill'"
            :deviceOne="bindData[modalIndex]"
            @closeModal="modalHide"
        ></mapIllumination>
        <mapPark
            v-if="config.type === 'park'"
            :deviceOne="bindData[modalIndex]"
            @closeModal="modalHide"
        ></mapPark>
        <mapGuide
            v-if="config.type === 'guide'"
            :deviceOne="bindData[modalIndex]"
            @closeModal="modalHide"
        ></mapGuide>
        <mapWifi
            v-if="config.type === 'wifi'"
            :deviceOne="bindData[modalIndex]"
            @closeModal="modalHide"
        ></mapWifi>

        <bottom @childEvent="msgFromChild"></bottom>
    </div>
</template>
<script>
import video from "../../assets/img/icon/video.png";
import video2 from "../../assets/img/icon/video2.png";
import trash from "../../assets/img/icon/trash.png";
import broad from "../../assets/img/icon/broad.png";
import ill from "../../assets/img/icon/ill.png";
import park from "../../assets/img/icon/park.png";
import guide from "../../assets/img/icon/guide.png";
import wifi from "../../assets/img/icon/wifi.png";

import commandList from "./commandList";
// 引入底部导航栏
import bottom from "../element/bottom";
// 监控组件
import mapMonitoring from "./mapMonitoring";
// 广播组件
import mapBroadcasting from "./mapBroadcasting";
// 照明组件
import mapIllumination from "./mapIllumination";
// 停车场组件
import mapPark from "./mapPark";
// 导视组件
import mapGuide from "./mapGuide";
import mapWifi from "./mapWifi";
export default {
    components: {
        // 引入左侧导航
        commandList,
        mapMonitoring,
        bottom,
        mapPark,
        mapBroadcasting,
        mapIllumination,
        mapGuide,
        mapWifi
    },
    name: "commmandMap",
    data() {
        return {
            icon: {
                video: video,
                trash: trash,
                video2: video2,
                broad: broad,
                ill: ill,
                park: park,
                guide,
                wifi
            },
            listTitle: "人员列表",
            modalShow: false, //modal显示隐藏
            modalIndex: null, //设备序号
            map: null, //地图实例
            markers: [] //地图点标注
        };
    },
    props: {
        bindData: {
            type: Array,
            default: function(value) {
                return [
                    {
                        name: "视屏监控1",
                        location: [111.343911, 25.273539],
                        id: 1,
                        code: 1,
                        type: "video"
                    }
                ];
            }
        },
        config: {
            type: Object
            /*  default: function(value) {
                return {
                    name: "video",
                    type: "video",
                    listTitle: "设备列表"
                };
            } */
        },
        msgData: {
            type: Object
        },
        // bottom的数据
        bottomData: {
            type: Object
        }
    },
    mounted() {
        this.drawPoint(this.bindData);
    },
    methods: {
        // // 隐藏模态框
        // modalHide() {
        //     //移除点的跳跃动画
        //     // console.log(this.markers[this.modalIndex]);
        //     let m = this.markers[this.modalIndex];
        //     m.setAnimation("AMAP_ANIMATION_NONE");
        //     m.setMap(this.map);
        //     if (this.modalShow) {
        //         this.modalShow = false;
        //         this.modalIndex = null;
        //     }
        // },
        msgFromChild(msg) {
            this.map.setCenter([111.343811, 25.273539]);
            // this.markers.forEach(v => {
            //     v.setAnimation("AMAP_ANIMATION_NONE");
            // });
            // this.markers[msg.index].setAnimation("AMAP_ANIMATION_BOUNCE");
            this.markers[msg.index].setMap(this.map);
            this.map.setZoom(16);
            this.modalIndex = msg.index;
            this.modalShow = true;
            console.log(modalIndex);
        },

        //绘制地图标点
        drawPoint(device) {
            let that = this;
            // 百度地图API功能
            that.map = new AMap.Map("mapBox", {
                // resizeEnable: true,
                center: [110.038603, 31.47527],
                zoom: 0,
                layers: [
                    //使用多个图层
                    new AMap.TileLayer.Satellite(), // 卫星
                    new AMap.TileLayer.RoadNet() // 路网
                ]
            });
            let jsonData = [
                // [110.038603, 31.47527],
                // [109.98999, 31.488573],
                // [110.332886, 31.656288],
                // [110.35249, 31.630266],
                // [110.669554, 31.630266],
                // [110.352426, 31.630266],
                // [110.332886, 31.639988],
                // [110.552556, 31.638866],
                // [110.442666, 31.630006]
            ];

            for (let i = 0; i < device.length; i++) {
                jsonData.push(device[i].location);
            }
            let markers = [];
            for (let i = 0; i < jsonData.length; i++) {
                let myIcon = new AMap.Icon({
                    image: that.icon[device[i].type],
                    size: new AMap.Size(40, 40)
                });
                let marker = new AMap.Marker({
                    icon: myIcon,
                    position: [jsonData[i][0], jsonData[i][1]],
                    // bubble:true,
                    extData: {
                        index: i,
                        type: device[i].type
                    },
                    map: that.map
                });
                markers.push(marker);
                AMap.event.addListener(marker, "click", _onClick);
            }
            this.markers = markers;
            this.map.setFitView(markers);

            // 点击图标事件
            function _onClick(e) {
                let p = e.target;
                console.log(p);
                // 设置图标跳动
                // that.markers.forEach(v => {
                //     v.setAnimation("AMAP_ANIMATION_NONE");
                // });
                that.map.setZoom(20);
                that.map.setCenter([p.getPosition().lng, p.getPosition().lat]);
                // p.setAnimation("AMAP_ANIMATION_BOUNCE");
                that.modalShow = true;
                that.modalIndex = p.getExtData().index;
            }
        }
    }
};
</script>
<style scoped lang="less">
@import url("../../assets/css/mixin.less");
.map {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: relative;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
    border-radius: 2px;
}

.mapBox {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    font-family: "微软雅黑";
    .anchorBL {
        display: none;
    }
}

.modal {
    position: absolute;
    z-index: 100;
    top: 150px;
    left: 10%;
    width: 360px;
    min-height: 360px;
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
