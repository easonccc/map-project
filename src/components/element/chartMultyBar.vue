<template>
    <div :style="{height:height,width:width}" ref="myEchart"></div>

</template>
<script>
    export default {
        name: 'chartBar',
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
                type: Object,
                default: function (value) {
                    return {
                        legend: ["累计", "同期"],
                        xData: ["湖北华斯瓦德聚氨酯有限公司"],
                        yData: [
                            [592],
                            [752],
                        ]
                    };
                }
            }
        },
        data() {
            return {
                colors: ["rgb(239,95,95)", "rgb(226,87,255)", "rgb(255,223,89)"],
                chart: null,
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
                this.chart = echarts.init(this.$refs.myEchart);
                // 配置和数据
                let options = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: null,
                        right: 20,
                        textStyle: {
                            color: function () {
                                
                            }
                        }
                    },
                    grid: {
                        left: '2%',
                        right: '5%',
                        bottom: '1%',
                        top: '18%',
                        containLabel: true
                    },


                    xAxis: [{
                        type: 'category',

                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        axisTick: {
                            show: false,
                            alignWithLabel: true,
                            color: '#fff'
                        },
                        axisLabel: {
                            formatter: function (params, index) {
                                let newParamsName = "";// 最终拼接成的字符串
                                let paramsNameNumber = params.length;// 实际标签的个数
                                let provideNumber = 8;// 每行能显示的字的个数
                                let rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                                /**
                                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                                 */
                                // 条件等同于rowNumber>1
                                if (paramsNameNumber > provideNumber) {
                                    /** 循环每一行,p表示行 */
                                    for (let p = 0; p < rowNumber; p++) {
                                        let tempStr = "";// 表示每一次截取的字符串
                                        let start = p * provideNumber;// 开始截取的位置
                                        let end = start + provideNumber;// 结束截取的位置
                                        // 此处特殊处理最后一行的索引值
                                        if (p == rowNumber - 1) {
                                            // 最后一次不换行
                                            tempStr = params.substring(start, paramsNameNumber);
                                        } else {
                                            // 每一次拼接字符串并换行
                                            tempStr = params.substring(start, end) + "\n";
                                        }
                                        newParamsName += tempStr;// 最终拼成的字符串
                                    }

                                } else {
                                    // 将旧标签的值赋给新标签
                                    newParamsName = params;
                                }
                                //将最终的字符串返回
                                return newParamsName
                            },
                            textStyle: {
                                color: '#fff',
                                width:100
                            }
                        },

                        data: null,
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
                    dataZoom: [
                        {
                            show: true,
                            realtime: true,
                            start: 0,
                            end: 50
                        },
                        {
                            type: 'inside',
                            realtime: true,
                            start: 0,
                            end: 50
                        }
                    ],
                    series: null
                };
                let item = {
                    name: '测试数据',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'top',
                                color: '#d0d8de',
                                formatter: function (params) {
                                    if (params.value > 10000) {
                                        return (params.value / 10000).toFixed(0);
                                    } else {
                                        return params.value;
                                    }
                                }
                            },
                            color: "#17abff"
                        }
                    },
                    barWidth: '25px',
                    barGap: "0%",
                    data: null
                };

                let series = [];
                options.xAxis[0].data = data.xData;
                options.legend.data = data.legend
                data.legend.forEach((v, i) => {
                    item.name = v;
                    item.data = data.yData[i];
                    item.itemStyle.normal.color = this.colors[i];
                    series.push(JSON.parse(JSON.stringify(item)));
                })
                options.series = series;
                this.chart.setOption(options);



                window.addEventListener("resize", () => {
                    this.chart.resize();
                });
            }
        }
    }
</script>
<style scoped lang='less'>


</style>
