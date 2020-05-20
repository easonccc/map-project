<template>
    <div :style="{height:height,width:width}" ref="myEchart"></div>
</template>

<script>
    export default {
        name: "rate",
        props: {
            type: {
                type: String,
                default: '人'
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
                default: {}
            }
        },
        data() {
            return {
                colors: ["#17abff", "#7d66ff", "#74c3f7"],
                chart1: null,
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
                let option = {
                    tooltip:{

                    },
                    radar: {
                        // shape: 'circle',

                        indicator: data.value1,
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
                        label:{
                            normal:{
                                show:true,
                                color:'#fff',
                                formatter:function(a){
                                    return a.value+that.type
                                }
                            }
                        },
                        data : [
                            {
                                value : data.value2,
                                name : data.name
                            }
                        ]
                    }]
                };
                this.chart.setOption(option);




                window.addEventListener("resize", () => {
                    this.chart.resize();

                });
            }
        }
    }
</script>

<style lang="less" scoped>


</style>