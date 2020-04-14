<template>
    <div class="map">
        <div id="mapBox" class="mapBox"></div>
        <commandList
            :device="bindData"
            :title="config.listTitle"
            :itemSelect="modalIndex"
            @childEvent="msgFromChild"
        ></commandList>
    </div>
</template>
<script>
import commandList from "./commandList";
export default {
    components: {
        // 引入左侧导航
        commandList
    },
    name: "commmandMap",
    data() {
        return {
            icon: {},
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
            type: Object,
            default: function(value) {
                return {
                    name: "video",
                    type: "video",
                    listTitle: "设备列表"
                };
            }
        }
    },
    mounted() {
        this.drawPoint(this.bindData);
    },
    methods: {
        // 隐藏模态框
        modalHide() {
            //移除点的跳跃动画
            // console.log(this.markers[this.modalIndex]);
            let m = this.markers[this.modalIndex];
            m.setAnimation("AMAP_ANIMATION_NONE");
            m.setMap(this.map);
            if (this.modalShow) {
                this.modalShow = false;
                this.modalIndex = null;
            }
        },
        msgFromChild(msg) {
            // console.log(d, type);
            this.map.setCenter(this.bindData[msg.index].location);
            this.markers.forEach(v => {
                v.setAnimation("AMAP_ANIMATION_NONE");
            });
            this.markers[msg.index].setAnimation("AMAP_ANIMATION_BOUNCE");
            this.markers[msg.index].setMap(this.map);
            this.map.setZoom(16);
            this.modalIndex = msg.index;
            this.modalShow = true;
        },

        //绘制地图标点
        drawPoint(device) {
            let that = this;
            // 百度地图API功能
            that.map = new AMap.Map("mapBox", {
                resizeEnable: true,
                // center: [116.397428, 39.90923],
                zoom: 13,

                layers: [
                    //使用多个图层
                    new AMap.TileLayer.Satellite(), // 卫星
                    new AMap.TileLayer.RoadNet() // 路网
                ]
            });
            let jsonData = [];
            for (let i = 0; i < device.length; i++) {
                jsonData.push(device[i].location);
            }
            let markers = [];
            for (let i = 0; i < jsonData.length; i++) {
                let myIcon = new AMap.Icon({
                    image: that.icon[device[i].type],
                    size: new AMap.Size(34, 34)
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

            function _onClick(e) {
                let p = e.target;
                console.log(p);
                that.markers.forEach(v => {
                    v.setAnimation("AMAP_ANIMATION_NONE");
                });
                that.map.setZoom(16);
                that.map.setCenter([p.getPosition().lng, p.getPosition().lat]);
                p.setAnimation("AMAP_ANIMATION_BOUNCE");
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
