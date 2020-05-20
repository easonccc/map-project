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
            this.chart = echarts.init(this.$refs.myEchart);
            // 把配置和数据放这里
            var legendlist = [];
             var d = [];
            this.bindData[1].forEach(v=>{
                    legendlist.push(v.name);
                    d.push({
                            name: v.name,
                            type: 'line',
                            data:v.value
                    },)
            })

            this.chart.setOption({
                    color: ['#F06260','#EC991F','#E158FF','#58FFFF','#4A5FDF','#F5BD93','#58BBFF','#F4F386','#77FF58','#397B97'],
                    legend: {
                            icon:'circle',
                            data: legendlist,
                            textStyle:{
                                    color:function (color) {
                                           return color;
                                    }
                            }
                    },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '2%',
                    right: '5%',
                    bottom: '3%',
                 //   top: '5%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    axisLine: {
                        show: false,
                    },
                    //data: this.xData,
                    data: this.bindData[0],
                        boundaryGap: false,
                    axisLabel: {
                        textStyle: {
                            // color: '#2ed7fb'
                           color: '#FFFFFF'
                        }
                    },

                }],
                yAxis: [{

                    type: 'value',
                    axisLine: {
                        show: true,
                        lineStyle:{
                            color:"rgba(1, 104, 185, 0.5)"
                        }
                    },
                    splitLine:{
                      show:false,
                      lineStyle:{
                          color:"rgba(1, 104, 185, 0.5)"
                      }
                    },

                    color: ['rgba(1, 104, 185, 0.5)'],
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color:"#fff"
                        }
                    }
                }],
                series: d
            })
        }
    }
}

</script>
<style scoped lang='less'>


</style>
