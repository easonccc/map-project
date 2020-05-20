<template>

    <div :style="{height:height,width:width}" id="mapBox"></div>

</template>
<script>
    import gb from "../../assets/img/gb.png";
    import jk from "../../assets/img/jk.png";
    import led from "../../assets/img/led.png";
    import tcc from "../../assets/img/tcc.png";
    import wifi from "../../assets/img/wifi.png";
    import zj from "../../assets/img/zj.png";
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
                input:null,
                typeList: [
                    {
                        name: "全部",
                        type: "all"
                    },
                    {
                        name: "监控",
                        type: "jk"
                    },
                    {
                        name: "WiFi",
                        type: "wifi"
                    },
                    {
                        name: "停车场",
                        type: "tcc"
                    },
                    {
                        name: "广播",
                        type: "gb"
                    },
                    {
                        name: "闸机",
                        type: "zj"
                    },
                    {
                        name: "大屏",
                        type: "led"
                    },
                    {
                        name: "异常设备",
                        type: "error"
                    }
                ],
                title: "智慧小镇管控平台-管控地图",
                gbPng: gb, //js图片地址
                jkPng: jk,
                ledPng: led,
                tccPng: tcc,
                wifiPng: wifi,
                zjPng: zj,
                deviceActive: 0,
                toShow: false,
                modalShow: false, //modal显示隐藏
                modalIndex: null, //设备序号
                modalType: "wifi", //设备类型
                device: {
                    vedio: null, //视频设备
                    wifi: null, //wifi设备
                    broad: null //广播设备
                },
                deviceWifi: null, //wifi设备
                deviceNow: null, //当前选择的设备

                map: null, //地图实例
                markers: [], //地图点标注
                typeName: {
                    wifi: "无线网",
                    gb: "广播",
                    jk: "监控",
                    led: "LED大屏",
                    tcc: "停车场",
                    zj: "闸机"
                },
                deviceList: null,
                thisTypeList: null
            }
        },
        mounted() {
            //this.initMap();
        },
        created(){
            this.getAll();
        },
        watch: {
        },
        methods: {
            selType(item, index) {
                // let item = {
                //   name: "停车场",
                //   type: "tcc"
                // };
                this.deviceActive = index;
                // this.thisTypeList = this.deviceList.filter((v, i) => {
                //   console.log(v.type);
                //   return v.type == item.type;
                // });
                this.drawPoint(this.thisTypeList);
            },
            getMarker(v, j) {
                console.log(v);
                console.log(j);
                this.map.setCenter(this.deviceNow[j].location);
                this.markers.forEach(v => {
                    v.setAnimation("AMAP_ANIMATION_NONE");
                });
                this.markers[j].setAnimation("AMAP_ANIMATION_BOUNCE");
                this.markers[j].setMap(this.map);
                this.map.setZoom(20);
                this.modalIndex = j;
                this.modalType = v.type;
                this.modalShow = true;
            },

            getAll() {
                let that = this;
                http.get("./data/dataVisitor1.json").then(v => {
                    let data = v.data;
                    data.forEach(v => {
                        v.location = [v.coordx, v.coordy];
                    });
                    let arr = [];
                    // console.log(data);
                    data.forEach(v => {
                        //   if (v.type == this.propType) {
                        arr.push({
                            // type: that.typeName[v.type],
                            type: v.type,
                            address: "伊川西山植物园植园二路G62号",
                            location: v.location,
                            id: "2c83786jdj89987",
                            // path: "./navIcon/" + that.typeName[v.type] + ".png"
                            path: that[v.type + "Png"]
                        });
                        //   }
                    });
                    console.log("arr", arr);
                    this.deviceList = arr;
                    this.deviceNow = data;
                    that.drawPoint(arr);
                });
            },
            drawPoint(device) {
                console.log("device", device);
                var that = this;
                that.map = new AMap.Map("mapBox", {
                    resizeEnable: true,
                    center: [112.42567, 34.42135],
                    zoom: 14
                    // mapStyle: "amap://styles/darkblue"
                });
                var jsonData = [];
                for (let i = 0; i < device.length; i++) {
                    jsonData.push(device[i].location);
                }

                var myIcon;
                var markers = [];
                for (var i = 0; i < jsonData.length; i++) {
                    switch (device[i].type) {
                        case "wifi":
                            myIcon = new AMap.Icon({
                                image: that.wifiPng
                            });
                            break;
                        case "gb":
                            myIcon = new AMap.Icon({
                                image: that.gbPng
                            });
                            break;
                        case "jk":
                            myIcon = new AMap.Icon({
                                image: that.jkPng
                            });
                            break;
                        case "led":
                            myIcon = new AMap.Icon({
                                image: that.ledPng
                            });
                            break;
                        case "tcc":
                            myIcon = new AMap.Icon({
                                image: that.tccPng
                            });
                            break;
                        case "zj":
                            myIcon = new AMap.Icon({
                                image: that.zjPng
                            });
                            break;
                    }
                    console.log(myIcon);
                    console.log(device[i])
                    var marker = new AMap.Marker({
                        icon: myIcon,
                        position: [jsonData[i][0], jsonData[i][1]],
                        // bubble:true,
                        extData: {
                            index: i,
                            type: device[i].type
                        },
                        map: that.map
                    });
                    console.log(marker)
                    markers.push(marker);
                    AMap.event.addListener(marker, "click", _onClick);
                }
                this.markers = markers;
                this.map.setCenter([device[0].location[0], device[0].location[1]]);
                /*if(this.deviceActive != 'vedio'){
                              this.map.setFitView(markers);
                          }*/

                function _onClick(e) {
                    var p = e.target;
                    console.log(p);
                    // alert(1)
                    // that.markers.forEach(v => {
                    //     v.setAnimation('AMAP_ANIMATION_NONE')
                    // });
                    that.map.setZoom(20);
                    that.map.setCenter([p.getPosition().lng, p.getPosition().lat]);
                    console.log(p.Qe);
                    let selected = that.deviceList[p.Qe.extData["index"]];
                    // p.setAnimation('AMAP_ANIMATION_BOUNCE')
                    let title = that.typeName[selected.type];
                    let info = {
                        name: "A005号视频监控设备",
                        xh: "高清枪机",
                        zb: p.getPosition().lng + "," + p.getPosition().lat,
                        id: "53af158-c356-4093-8148",
                        add: "滨河街道滨河路与海滨路交界滨河路红灯处",
                        status: "正常",
                        weather: "天气情况"
                    };
                    var content = `<div class="detailAlert">
                            <div class="title2">${title}</div>
                            <div class="info">
                                <div class="item">
                                    <div>名称</div>
                                    <div>${info.name}</div>
                                </div>
                                <div class="item">
                                    <div>型号</div>
                                    <div>${info.xh}</div>
                                </div>
                                <div class="item">
                                    <div>坐标</div>
                                    <div>${info.zb}</div>
                                </div>
                                <div class="item">
                                    <div>设备ID</div>
                                    <div>${info.id}</div>
                                </div>
                                <div class="item">
                                    <div>设备地址</div>
                                    <div>${info.add}</div>
                                </div>
                                <div class="item">
                                    <div>设备状态</div>
                                    <div>${info.status}</div>
                                </div>
                                <div class="item">
                                    <div>天气情况</div>
                                    <div>${info.weather}</div>
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
                    that.modalShow = true;
                    that.modalIndex = p.getExtData().index;
                    that.modalType = p.getExtData().type;
                    //如果是wifi设备 调用子组件获取连接数的方法
                    if (that.modalType == "wifi" && that.$refs.wifiModel) {
                        that.$refs.wifiModel.getWifiPoint(that.deviceNow[that.modalIndex].id);
                    }
                }
            }
        }
    }

</script>
<style scoped lang='less'>


</style>
