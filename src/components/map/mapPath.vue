<template>

    <div :style="{height:height,width:width}" id="container"></div>

</template>
<script>
    export default {
        props: {
            type: {
                type: String,
                default: '数量'
            },
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '100%'
            },
            bindData: {
                type: Array,
                default: function(value) {
                    return value;
                }
            }
        },
        data() {
            return {
                map:null
            }
        },
        mounted() {
            this.initMap();
        },
        watch: {
        },
        methods: {
            initMap(){
                var marker, lineArr = [[116.478935,39.997761],[116.478939,39.997825],[116.478912,39.998549],[116.478912,39.998549],[116.478998,39.998555],[116.478998,39.998555],[116.479282,39.99856],[116.479658,39.998528],[116.480151,39.998453],[116.480784,39.998302],[116.480784,39.998302],[116.481149,39.998184],[116.481573,39.997997],[116.481863,39.997846],[116.482072,39.997718],[116.482362,39.997718],[116.483633,39.998935],[116.48367,39.998968],[116.484648,39.999861]];

                let that = this;

                this.map =  new AMap.Map("container", {
                    resizeEnable: true,
                    center: [116.397428, 39.90923],
                    zoom: 17
                });

                marker = new AMap.Marker({
                    map: this.map,
                    position: [116.478935,39.997761],
                    icon: "https://webapi.amap.com/images/car.png",
                    offset: new AMap.Pixel(-26, -13),
                    autoRotation: true,
                    angle:-90,
                });

                // 绘制轨迹
                var polyline = new AMap.Polyline({
                    map: this.map,
                    path: lineArr,
                    showDir:true,
                    strokeColor: "#28F",  //线颜色
                    // strokeOpacity: 1,     //线透明度
                    strokeWeight: 6,      //线宽
                    // strokeStyle: "solid"  //线样式
                });

                var passedPolyline = new AMap.Polyline({
                    map: this.map,
                    // path: lineArr,
                    strokeColor: "#AF5",  //线颜色
                    // strokeOpacity: 1,     //线透明度
                    strokeWeight: 6,      //线宽
                    // strokeStyle: "solid"  //线样式
                });


                marker.on('moving', function (e) {
                    passedPolyline.setPath(e.passedPath);
                });

                this.map.setFitView();

                AMap.event.addListener(marker, "click", startAnimation);


                function startAnimation () {
                    marker.moveAlong(lineArr, 200);
                }

                AMap.event.addListener(marker, "click", _onClick);

                function _onClick(e) {
                    var p = e.target;
                    console.log(p);
                    // alert(1)
                    // that.markers.forEach(v => {
                    //     v.setAnimation('AMAP_ANIMATION_NONE')
                    // });
                    //   that.map.setZoom(20);
                    //    that.map.setCenter([p.getPosition().lng, p.getPosition().lat]);
                    console.log(p.Qe);
                    //     let selected = that.deviceList[p.Qe.extData["index"]];
                    // p.setAnimation('AMAP_ANIMATION_BOUNCE')
                    // let title = that.typeName[selected.type];
                    // let info = {
                    //     name: "A005号视频监控设备",
                    //     xh: "高清枪机",
                    //     zb: p.getPosition().lng + "," + p.getPosition().lat,
                    //     id: "53af158-c356-4093-8148",
                    //     add: "滨河街道滨河路与海滨路交界滨河路红灯处",
                    //     status: "正常",
                    //     weather: "天气情况"
                    // };
                    var content = `<div class="detailAlert">
                            <div class="title2">车辆信息</div>
                            <div class="info">
                                <div class="item">
                                    <div>所在地</div>
                                    <div>红岩文化景区</div>
                                </div>
                                <div class="item">
                                    <div>坐标</div>
                                    <div>120.775264，37823775</div>
                                </div>
                                <div class="item">
                                    <div>识别车牌</div>
                                    <div>鲁ET0815</div>
                                </div>
                                <div class="item">
                                    <div>方向</div>
                                    <div>出</div>
                                </div>
                                <div class="item">
                                    <div>时间</div>
                                    <div>2018.11.15 12:56:20</div>
                                </div>
                                <div class="item">
                                   <img src="./img/car.jpg" style="width:100%;height: 4rem">
                                </div>
                             </div>

                       </div>`;
                    // 创建 infoWindow 实例
                    var infoWindow = new AMap.InfoWindow({
                        isCustom: true, //使用自定义窗体
                        content: content, //传入 dom 对象，或者 html 字符串
                        closeWhenClickMap: true
                    });
                    infoWindow.open(that.map, [p.getPosition().lng, p.getPosition().lat]);

                }



            }
        }
    }

</script>
<style scoped lang='less'>


</style>
