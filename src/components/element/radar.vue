<template>
    <div class="box-body">
        <div class="item" >
          <div class="item_up">
              <img src="../../assets/img/type01.png">餐饮类排名
          </div>
           <div class="item_down">
               <div :style="{height:height,width:width}" ref="myEchart1"></div>
           </div>
        </div>

        <div class="item" >
            <div class="item_up">
                <img src="../../assets/img/type01.png">住宿类排名
            </div>
            <div class="item_down">
                <div :style="{height:height,width:width}" ref="myEchart2"></div>
            </div>
        </div>

        <div class="item" >
            <div class="item_up">
                <img src="../../assets/img/type01.png">交通类排名
            </div>
            <div class="item_down">
                <div :style="{height:height,width:width}" ref="myEchart3"></div>
            </div>
        </div>

        <div class="item" >
            <div class="item_up">
                <img src="../../assets/img/type01.png">景区类排名
            </div>
            <div class="item_down">
                <div :style="{height:height,width:width}" ref="myEchart4"></div>
            </div>
        </div>

        <div class="item" >
            <div class="item_up">
                <img src="../../assets/img/type01.png">购物类排名
            </div>
            <div class="item_down">
                <div :style="{height:height,width:width}" ref="myEchart5"></div>
            </div>
        </div>

        <div class="item" >
            <div class="item_up">
                <img src="../../assets/img/type01.png">娱乐类排名
            </div>
            <div class="item_down">
                <div :style="{height:height,width:width}" ref="myEchart6"></div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "rate",
        props: {
            type: {
                type: String,
                default: 'visitors'
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
                default: []
            }
        },
        data() {
            return {
                colors: ["#17abff", "#7d66ff", "#74c3f7"],
                chart1: null,chart2: null,chart3: null,chart4: null,chart5: null,chart6: null,
                xData: ['18', '19', '20', '21', '22', '23', '24'],
                yData: [103215, 103332, 133215, 93215, 103215, 123215, 103215],
                ecConfig: null
            }
        },
        mounted() {
            this.initChart(this.bindData);

        },
        watch: {
            bindData: function (newVal,oldVal) {
                this.bindData = newVal;
                this.initChart(this.bindData);
            }
        },
        beforeDestroy() {
            if (!this.chart) {
                return
            }
            this.chart.dispose();
            this.chart = null;
        },
        methods: {
            initChart(data) {
                let that = this;
                console.log(this.$refs)

                this.chart1 = echarts.init(this.$refs.myEchart1);
                let option1 = {
                    tooltip: {},
                    radar: {
                        // shape: 'circle',
                        indicator: data[0].value1,
                        splitArea: {
                            areaStyle: {
                                color: ['rgba(23,72,108,1)',

                                ],
                                shadowColor: '#2ED9FD',
                                shadowBlur: 2
                            }
                        },
                        axisLine:{

                        },
                        splitLine: {
                            show:false
                        },

                    },
                    series: [{
                        name: '',
                        type: 'radar',
                        areaStyle: {normal: {
                                color:'#74DDF4'
                            }},
                        data : [
                            {
                                value : data[0].value2,
                                name : data[0].name
                            }
                        ]
                    }]
                };
                this.chart1.setOption(option1);

                this.chart2 = echarts.init(this.$refs.myEchart2);
                let option2 = {
                    tooltip: {},
                    radar: {
                        // shape: 'circle',
                        indicator: data[1].value1,
                        splitArea: {
                            areaStyle: {
                                color: ['rgba(23,72,108,1)',

                                ],
                                shadowColor: '#2ED9FD',
                                shadowBlur: 2
                            }
                        },
                        axisLine:{

                        },
                        splitLine: {
                            show:false
                        },

                    },
                    series: [{
                        name: '',
                        type: 'radar',
                        areaStyle: {normal: {
                                color:'#74DDF4'
                            }},
                        data : [
                            {
                                value : data[1].value2,
                                name : data[1].name
                            }
                        ]
                    }]
                };
                this.chart2.setOption(option2);

                this.chart3 = echarts.init(this.$refs.myEchart3);
                let option3 = {
                    tooltip: {},
                    radar: {
                        // shape: 'circle',
                        indicator: data[2].value1,
                        splitArea: {
                            areaStyle: {
                                color: ['rgba(23,72,108,1)',

                                ],
                                shadowColor: '#2ED9FD',
                                shadowBlur: 2
                            }
                        },
                        axisLine:{

                        },
                        splitLine: {
                            show:false
                        },

                    },
                    series: [{
                        name: '',
                        type: 'radar',
                        areaStyle: {normal: {
                                color:'#74DDF4'
                            }},
                        data : [
                            {
                                value : data[2].value2,
                                name : data[2].name
                            }
                        ]
                    }]
                };
                this.chart3.setOption(option3);

                this.chart4 = echarts.init(this.$refs.myEchart4);
                let option4 = {
                    tooltip: {},
                    radar: {
                        // shape: 'circle',
                        indicator: data[3].value1,
                        splitArea: {
                            areaStyle: {
                                color: ['rgba(23,72,108,1)',

                                ],
                                shadowColor: '#2ED9FD',
                                shadowBlur: 2
                            }
                        },
                        axisLine:{

                        },
                        splitLine: {
                            show:false
                        },

                    },
                    series: [{
                        name: '',
                        type: 'radar',
                        areaStyle: {normal: {
                                color:'#74DDF4'
                            }},
                        data : [
                            {
                                value : data[3].value2,
                                name : data[3].name
                            }
                        ]
                    }]
                };
                this.chart4.setOption(option4);

                this.chart5 = echarts.init(this.$refs.myEchart5);
                let option5 = {
                    tooltip: {}, radar: {
                        // shape: 'circle',
                        indicator: data[4].value1,
                        splitArea: {
                            areaStyle: {
                                color: ['rgba(23,72,108,1)',

                                ],
                                shadowColor: '#2ED9FD',
                                shadowBlur: 2
                            }
                        },
                        axisLine:{

                        },
                        splitLine: {
                            show:false
                        },

                    },
                    series: [{
                        name: '',
                        type: 'radar',
                        areaStyle: {normal: {
                                color:'#74DDF4'
                            }},
                        // areaStyle: {normal: {}},
                        data : [
                            {
                                value : data[4].value2,
                                name : data[4].name
                            }
                        ]
                    }]
                };
                this.chart5.setOption(option5);

                this.chart6 = echarts.init(this.$refs.myEchart6);
                let option6 = {
                    tooltip: {},
                    radar: {
                        // shape: 'circle',
                        indicator: data[5].value1,
                        splitArea: {
                            areaStyle: {
                                color: ['rgba(23,72,108,1)',

                                ],
                                shadowColor: '#2ED9FD',
                                shadowBlur: 2
                            }
                        },
                        axisLine:{

                        },
                        splitLine: {
                            show:false
                        },

                    },
                    series: [{
                        name: '',
                        type: 'radar',
                        areaStyle: {normal: {
                            color:'#74DDF4'
                            }},
                        data : [
                            {
                                value : data[5].value2,
                                name : data[5].name
                            }
                        ]
                    }]
                };
                this.chart6.setOption(option6);








                window.addEventListener("resize", () => {
                    this.chart1.resize();
                    this.chart2.resize();
                    this.chart3.resize();
                    this.chart4.resize();
                    this.chart5.resize();
                    this.chart6.resize();
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .box-body{
        display: flex;
        .item{
            flex: 1;
            display: flex;
            flex-direction: column;
            .item_up{
                margin-top: 0.4rem;
                display: flex;
                justify-items: center;
                height:0.7rem;
                font-size:0.48rem;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:0.7rem;
                img{
                    width: 0.7rem;
                    height: 0.7rem;
                    margin-right: 0.4rem;
                }
            }
            .item_down{
                flex: 1;
            }
        }
    }

</style>