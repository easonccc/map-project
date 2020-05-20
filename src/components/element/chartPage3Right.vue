<template>

    <div :style="{height:height,width:width}" ref="myEchart"></div>

</template>
<script>
    export default {
        name: 'visitorsStatic',
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
                colors: ["#FF5858", "#FFE058","#FF5858", "#FFE058","#FF5858", "#FFE058","#FF5858", "#FFE058","#FF5858", "#FFE058","#FF5858", "#FFE058","#FF5858", "#FFE058","#FF5858", "#FFE058","#FF5858", "#FFE058",],
                chart: null,
                xData: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
                yData: [103215, 103233, 103234, 103252, 132101, 132115, 132200, 103220, 103330, 103334, 103390, 103215, 90654, 103215, 103215, 103215, 103215, 103215, 103332, 133215, 93215, 103215, 123215, 103215],
            }
        },
        mounted() {
            this.initChart();
        },
        watch: {
            bindData: function() {
                this.initChart();
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
            initChart() {
                let that = this;
                this.chart = echarts.init(this.$refs.myEchart);
                // 把配置和数据放这里
                var fontColor = '#30eee9';
                var option ={
                    grid: {
                        left: '2%',
                        right: '1%',
                        bottom: '3%',
                          top: '10%',
                        containLabel: true
                    },
                    tooltip : {
                        show: true,
                        trigger: 'item'
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            axisLabel:{
                                color: fontColor
                            },
                            axisLine:{
                                show:true,
                                lineStyle:{
                                    color:'#397cbc'
                                }
                            },
                            axisTick:{
                                show:false,
                            },
                            splitLine:{
                                show:false,
                                lineStyle:{
                                    color:'#195384'
                                }
                            },
                            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            name : '',
                            axisLabel : {
                                formatter: '{value}',
                                textStyle:{
                                    color:'#2ad1d2'
                                }
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#27b4c2'
                                }
                            },
                            axisTick:{
                                show:false,
                            },
                            splitLine:{
                                show:true,
                                lineStyle:{
                                    color:'#11366e'
                                }
                            }
                        },
                        {
                            type : 'value',
                            name : '占比',
                            min:0,
                            max:1000,
                            axisLabel : {
                                formatter: function (value,item) {
                                    console.log(value,item);
                                    if(value=='200'){
                                        return '车位充足';
                                    }else if(value=='600'){
                                        return '橙色预警'
                                    }else if(value=='1000'){
                                        return '红色预警'
                                    }

                                },
                                textStyle:{
                                    color:'#fff'
                                }
                            },
                            axisLine:{
                                lineStyle:{
                                    color:'#186afe'
                                }
                            },
                            axisTick:{
                                show:false,
                            },
                            splitLine:{
                                show:true,
                                lineStyle:{
                                    color:'#11366e'
                                }
                            }
                        }
                    ],
                    series : [

                        {
                            name:'历城',
                            type:'line',
                            stack: '总量',
                            symbol:'circle',
                            symbolSize: 8,
                            zlevel:10,
                            itemStyle: {
                                normal: {
                                    color: '#aecb56',
                                    lineStyle: {
                                        color: "#aecb56",
                                        width:1
                                    },
                                    areaStyle: {
                                        //color: '#94C9EC'
                                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                            offset: 0,
                                            color: 'rgba(0,202,255,0.3)'
                                        }, {
                                            offset: 1,
                                            color: 'rgba(0,202,255,0.9)'
                                        }]),
                                    }
                                }
                            },
                            data:[200, 232, 201, 200, 190, 190, 210,190, 182, 201, 154, 190]
                        },
                        {
                            name:'',
                            type:'line',
                            stack: '',
                            symbol:'circle',
                            symbolSize: 0,
                            itemStyle: {
                                normal: {
                                    color: '#aecb56',
                                    lineStyle: {
                                        color: "#aecb56",
                                        width:1
                                    },
                                    areaStyle: {
                                        //color: '#94C9EC'
                                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                            offset: 0,
                                            color: 'rgba(49,138,97,0.3)'
                                        }, {
                                            offset: 1,
                                            color: 'rgba(49,138,97,0.9)'
                                        }]),
                                    }
                                }
                            },
                            data:[50, 50, 50, 50, 50, 50, 50,50, 50, 50, 50, 50]
                        },
                        {
                            name:'',
                            type:'line',
                            stack: '',
                            symbol:'circle',
                            symbolSize: 0,
                            itemStyle: {
                                normal: {
                                    color: '#aecb56',
                                    lineStyle: {
                                        color: "#aecb56",
                                        width:1
                                    },
                                    areaStyle: {
                                        //color: '#94C9EC'
                                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                            offset: 0,
                                            color: 'rgba(96,115,71,0.3)'
                                        }, {
                                            offset: 1,
                                            color: 'rgba(96,115,71,0.9)'
                                        }]),
                                    }
                                }
                            },
                            data:[150, 150, 150, 150, 150, 150, 150,150, 150, 150, 150, 150]
                        },
                        {
                            name:'',
                            type:'line',
                            stack: '',
                            symbol:'circle',
                            symbolSize: 0,
                            itemStyle: {
                                normal: {
                                    color: '#aecb56',
                                    lineStyle: {
                                        color: "#aecb56",
                                        width:1
                                    },
                                    areaStyle: {
                                        //color: '#94C9EC'
                                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                            offset: 0,
                                            color: 'rgba(103,72,97,0.3)'
                                        }, {
                                            offset: 1,
                                            color: 'rgba(103,72,97,0.9)'
                                        }]),
                                    }
                                }
                            },
                            data:[250, 250, 250, 250, 250, 250, 250,250, 250, 250, 250, 250]
                        }
                    ]
                };
                this.chart.setOption(option)
            }
        }
    }

</script>
<style scoped lang='less'>


</style>
