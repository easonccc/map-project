<template>
    <div class="box-body">
        <div class="mapNumber">
            <div class="up">
                <span>实时入境游客总量:</span><span>时间:2018年11月3日  12:56</span>
            </div>
            <div class="down">
                <span>5</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>9</span>
                <span>2</span>
                <span>3</span>
                </div>
        </div>
        <div :class="className" :id="id" :style="{height:height,width:width}" ref="myEchart"></div>
    </div>
</template>
<script>
export default {
    name: 'indexMap',
    props: {
        className: {
            type: String,
            default: 'yourClassName'
        },
        id: {
            type: String,
            default: 'yourID'
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '95%'
        },
        bindData: {
            type: Array,
            default: function(value) {
                return value;
            }
        },
        map: {
            type: String,
            default: 'china'
        }
    },
    data() {
        return {
            chart: null,
            clientWidth: 0
        }
    },
    created() {
        this.clientWidth = document.body.clientWidth;
    },
    mounted() {
        if (this.map === 'china') {
            this.SourceMap('./data/china.json', this.bindData[0], this.bindData[1])
        } else {
            this.SourceMap('./data/hunan.json', this.bindData[0], this.bindData[1])
        }
    },
    beforeDestroy() {
        if (!this.chart) {
            return
        }
        this.chart.dispose();
        this.chart = null;
    },
    watch: {
        map: function(n,p) {
            console.log(n,p);
            this.chart.dispose();
            this.chart = null;
            this.SourceMap('./data/' + n + '.json', this.bindData[0], this.bindData[1])
        }
    },
    methods: {
        trim: function() {
            return this.replace(/(^\s*)|(\s*$)/g, '');
        },
        SourceMap(json, sheng, shi) {
            var that = this;
            http.get(json).then((mapJson) => {
                echarts.registerMap('map', mapJson.data);
                that.chart = echarts.init(that.$refs.myEchart);
                var geoCoordMap = {
                    '吴江': [120.651567, 31.145386],
                    '江永': [111.349902,25.280577],

                    '七都': [120.651567, 31.145386],
                    '连云港': [119.454276, 34.618441],
                    '宿迁': [118.40563, 33.977147],
                    '淮安': [119.132324, 33.616179],
                    '盐城': [120.272956, 33.361816],
                    '泰州': [120.061387, 32.477336],
                    '南京': [118.939152, 32.070938],
                    '扬州': [119.537064, 32.422736],
                    '镇江': [119.573859, 32.204001],
                    '无锡': [120.475326, 31.520974],
                    '苏州': [120.705293, 31.323759],
                    '常州': [120.033791, 31.82779],
                    '徐州': [117.421375, 34.195283],
                    '南通': [121.054841, 31.980814],

                    '蓬莱': [120.766173,37.815983],
                    '枣庄': [117.458173,34.828321],
                    '烟台': [121.455575,37.471701],
                    "济南":[117.005918,36.657268],
                    "滨州":[117.977475,37.389305],
                    "东营":[118.683921,37.439073],
                    "德州":[116.365825,37.440855],
                    "菏泽":[115.486546,35.240378],
                    "济宁":[116.59299,35.419798],
                    "莱芜":[117.683221,36.219823],
                    "聊城":[115.991502,36.465932],
                    "临沂":[118.362415,35.11431],
                    "青岛":[120.385996,36.073291],
                    "日照":[119.533606,35.423739],
                    "泰安":[117.094606,36.205439],
                    "威海":[122.123646,37.517032],
                    "潍坊":[119.172737,36.712749],
                    "淄博":[118.062404,36.822418],

                    '长沙': [112.939011,28.295513],
                    '衡阳': [112.594062,26.922935],
                    '永州': [111.628204,26.4809],
                    "郴州":[113.044221,25.818264],
                    "湘潭":[112.941886,27.891188],
                    "株洲":[113.112061,27.883014],
                    "常德":[111.700068,29.077796],
                    "娄底":[112.017422,27.731689],
                    "邵阳":[111.4839,27.292877],
                    "怀化":[109.979921,27.612933],
                    "张家界":[110.518042,29.158575],
                    "益阳":[112.36697,28.5999],
                    "岳阳":[113.12126,29.404554],
                    "湘西":[109.71316,28.818873],

                    '江苏': [118.939152, 32.070938],
                    '青海': [95.858513, 36.708877],
                    '新疆': [87.565012, 43.908805],
                    '陕西': [108.95187, 34.317625],
                    '山东': [116.899502, 36.753481],
                    '四川': [104.039792, 30.717825],
                    '湖北': [114.314682, 30.622403],
                    '甘肃': [103.745436, 36.158991],
                    '福建': [119.30035, 26.099965],
                    '吉林': [126.562819, 43.863669],
                    '广东': [113.261438, 23.144549],
                    '北京': [116.4551, 40.2539],
                    '上海': [121.4648, 31.2891],
                    '天津': [117.207137, 39.089478],
                    '重庆': [106.558106, 29.569115],
                    '安徽': [117.233591, 31.82671],
                    '广西': [108.372625, 22.823559],
                    '贵州': [106.636767, 26.653316],
                    '海南': [110.206424, 20.050057],
                    '河北': [114.521467, 38.048693],
                    '河南': [113.631768, 34.753434],
                    '黑龙江': [126.541745, 45.808985],
                    '湖南': [112.945393, 28.234266],
                    '江西': [115.864758, 28.688335],
                    '辽宁': [123.47174, 41.683555],
                    '内蒙古': [111.75521, 40.84856],
                    '宁夏': [106.238976, 38.492392],
                    '西藏': [91.17849, 29.65844],
                    '云南': [102.839608, 24.886083],
                    '浙江': [120.162141, 30.278995],
                    '山西': [112.569035, 37.880047],
                    '台湾': [121.454902, 25.187493]
                };
                var BJData = [];
                if (that.map === 'china') {
                    BJData = sheng;
                } else{
                    BJData = shi;
                }
                var convertData = function(data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var dataItem = data[i];
                        var fromCoord = geoCoordMap[dataItem[0].name];
                        var toCoord = geoCoordMap[dataItem[1].name];
                        if (fromCoord && toCoord) {
                            res.push([{
                                coord: fromCoord,
                                value: dataItem[0].value
                            }, {
                                coord: toCoord,
                            }]);
                        }
                    }
                    return res;
                };

                var mapData = function(data) {
                    let d = [];
                    data.forEach(v => {
                    //    v[0].visualMap = false;
                     //   d.push(v[0]);
                    })
                    return d;
                }

                var color = ['#a6c84c', '#ffa022', '#46bee9'];
                var series = [];
                let target='江永';
                [
                    [target, BJData]
                ].forEach(function(item, i) {
                    series.push({
                            map: 'china',
                            type: 'map',
                            label: {
                                normal: {
                                    show: false,
                                },
                                emphasis: {
                                    show: false,
                                }
                            },
                            layoutCenter: ['50%', '50%'],
                            layoutSize: that.map == "china" ? "120%" : "90%",
                            itemStyle: {
                                normal: {
                                    areaColor: "#1B3E5E",
                                    borderColor: 'rgba(100,149,237,1)',
                                },
                                emphasis: {
                                    areaColor: "#143150",
                                }
                            },
                            data: mapData(item[1])
                        }, {
                            type: 'lines',
                            silent: true,
                            zlevel: 2,
                            effect: {
                                show: true,
                                period: 4,
                                trailLength: 0.02,
                                symbol: 'diamond', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow',
                                symbolSize: 5,
                            },
                            lineStyle: {
                                normal: {
                                    opacity: 0,
                                    color: '#fff',
                                    curveness: 0.2
                                },
                            },

                            data: convertData(item[1])
                        }, {
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            silent: true,
                            zlevel: 2,
                            rippleEffect: {
                                brushType: 'stroke',
                            },
                            label: {
                                normal: {
                                    //show:false,
                                    show: that.map !=='china' ? true : false,
                                    position: 'right',
                                    offset: [5, 0],
                                    formatter: '{b}'
                                },
                                emphasis: {
                                    show: true,
                                    backgroundColor: '#000',
                                    padding: [4, 4],
                                    borderRadius: 5,
                                }
                            },
                            symbol: 'circle',
                            symbolSize: function(val) {
                                //return (that.clientWidth>1800?8:4)+val[2] / 1000;
                                return (that.clientWidth > 1800 ? 10 : 8);
                            },
                            hoverAnimation: true,
                            itemStyle: {
                                normal: {
                                    show: false,
                                    color: '#f00'
                                },
                                emphasis: {
                                    label: {
                                        position: 'top',
                                        offset: [-3, -10],
                                        zlevel: 3,
                                        formatter: function(params) {
                                            return params.data.name + ' : ' + params.data.value[2];
                                        }
                                    }
                                }
                            },
                            data: item[1].map(function(dataItem) {
                                return {
                                    name: dataItem[0].name,
                                    value: (geoCoordMap[dataItem[0].name]||[120.766173,37.815983]).concat([dataItem[0].value])
                                };
                            }),
                        },
                        //目的地
                        {
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            silent: true,
                            zlevel: 2,
                            rippleEffect: {
                                period: 4,
                                brushType: 'stroke',
                                scale: 4
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right',
                                    color: '#ff0000',
                                    formatter: '{b}',
                                    textStyle: {
                                        color: "#00ffff"
                                    }
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            symbol: 'pin',
                            symbolSize: 30,
                            itemStyle: {
                                normal: {
                                    show: true,
                                    color: '#9966cc'
                                }
                            },
                            data: [{
                                name: item[0],
                                value: geoCoordMap[item[0]].concat([100]),
                            }],
                        }
                    );
                });
                var option = {
                    tooltip: {
                        type: 'item',
                        formatter: function(params) {
                            var tip = '';
                            if (that.map == 'china') {
                                tip = params.name + ' : ' + (that.bindData[2][params.name] ? that.bindData[2][params.name] : 0)
                            } else {
                                if(params.name="湘西土家族苗族自治州"){
                                    tip='湘西'+that.bindData[2]['湘西'];
                                }else{
                                    tip = params.name + ' : ' + that.bindData[2][params.name.slice(0, -1)]?that.bindData[2][params.name.slice(0, -1)]:0;
                                }
                            }
                            return tip;
                        }
                    },
                    visualMap: {
                        min: 0,
                        max: 200,
                        calculable: false,
                        itemWidth:0,
                        color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
                        textStyle: {
                            color: '#fff'
                        },
                    },
                    geo: {
                        map: 'china',
                        type: 'map',
                        label: {
                            normal: {
                                show: false,
                            },
                            emphasis: {
                                show: false,
                            }
                        },
                        layoutCenter: ['50%', '50%'],
                        layoutSize: this.map == "china" ? "120%" : "90%",
                    },
                    series: series
                };




                this.chart.setOption(option);
            });
        },
    }
}

</script>
<style scoped lang='less'>
.box-body {
    flex: 1;
    width: 100%;
    height: 100%;
    position: relative;
    .mapNumber{
        width: 33%;
        margin: 0.4rem 0 0.4rem 0.4rem;
        position: absolute;
        font-family: lcd;
        .up{
            display: flex;
            justify-content: space-between;
            >span{
                height:0.45rem;
                font-size:0.32rem;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:0.45rem;
            }
        }
        .down{
            height:1.16rem;
            line-height:1.16rem;
            >span{
                display: inline-block;
                font-size:1.32rem;
                font-weight:400;
                color:rgba(255,255,255,1);
                background:rgba(24,62,95,0.6);
                box-shadow:0rem 0.01rem 0.05rem 0rem rgba(1,104,185,1),0rem -0.01rem 0.05rem 0rem rgba(1,104,185,1);
                margin: 0.4rem;
            }
        }
    }
}

</style>
