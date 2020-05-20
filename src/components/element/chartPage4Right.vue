<template>
    <div class="l" :style="{height:height,width:width}" >
        <div class="item_one" v-if="type == '吃'" style="border: 0.08rem solid rgba(231,92,94,1);">
            <img src="../../assets/img/shi.png">
            <div>住</div>
        </div>
        <div class="item_one" v-if="type == '住'" style="border: 0.08rem solid #2ED9FD">
            <img src="../../assets/img/zhu.png">
            <div style="color: #2ED9FD">住</div>
        </div>
        <div class="item_one" v-if="type == '行'" style="border: 0.08rem solid rgba(101,194,143,1);color: ">
            <img src="../../assets/img/xing.png">
            <div style="rgba(101,194,143,1)">行</div>
        </div>
        <div class="item_one" v-if="type == '游'" style="border: 0.08rem solid #2E9DDC;">
            <img src="../../assets/img/you.png">
            <div style="color:#2E9DDC ">游</div>
        </div>
        <div class="item_one" v-if="type == '购'" style="border: 0.08rem solid #1DBDB9;">
            <img src="../../assets/img/gou.png">
            <div style="color:#1DBDB9 ">购</div>
        </div>
        <div class="item_one" v-if="type == '娱'" style="border: 0.08rem solid #F16856;">
            <img src="../../assets/img/yu.png">
            <div style="color: #F16856;">娱</div>
        </div>


        <div class="item_two">
            <div>总数:</div>
            <div>
                <span>1</span>
                <span>5</span>
                <span>6</span>
                <span>4</span>
                <span>9</span>
                <span>8</span>
                <span>7</span></div>
            <div>人均</div>
            <div>
                <span>0</span>
                <span>0</span>
                <span>0</span>
                <span>4</span>
                <span>9</span>
                <span>8</span>
                <span>7</span>
            </div>
        </div>
        <div class="item_three" ref="chartPie"></div>
        <div class="item_four">
            <div class="c1" :style="{'width':bindData1[0]+'%' }">现金:{{bindData1[0]}}%</div>
            <div class="c2" :style="{'width':bindData1[1]+'%' }">微信{{bindData1[1]}}%</div>
            <div class="c3" :style="{'width':bindData1[2]+'%' }">支付宝{{bindData1[2]}}%</div>
            <div class="c4" :style="{'width':bindData1[3]+'%' }">刷卡{{bindData1[3]}}%</div>
            <div class="c5" :style="{'width':bindData1[3]+'%' }">网银{{bindData1[4]}}%</div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'visitorsStatic',
        props: {
            type: {
                type: String,
                default: '吃'
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
                    return [{
                        name:"自驾游",value:8620,value2:8620
                    },{
                        name:"团队游",value:9809,value2:9809
                    },{
                        name:"自由行",value:7868,value2:7868
                    }];
                }
            },
            bindData1:{
                type:Array,
                default:function () {
                    return [26,24,32,12,6]
                }
            },
            show:{
                type:Boolean,
                default:false
            },
        },
        data() {
            return {
                colors:['#17abff','#ec7f12','#7d66ff','#20d271','#d3d91d',
                    '#97b552','#95706d','#dc69aa',
                    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
                    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'],
                chart: null,
            }
        },
        mounted() {
            this.initChartPie(this.bindData);
        },
        watch: {
            bindData:function (newVal,oldVal) {
                this.bindData = newVal;
                this.initChartPie(this.bindData);
            }
        },
        beforeDestroy() {
        },
        methods: {
            initChartPie(data) {
                this.chart = echarts.init(this.$refs.chartPie);
                // 把配置和数据放这里
                let option = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b}:{c}({d}%)",
                        position: ['25%', '45%']
                    },
                    series : [
                        {
                            name:'数量',
                            type:'pie',
                            radius : ['0', '100%'],
                            roseType: 'radius',
                            itemStyle : {
                                normal : {
                                    label : {
                                        formatter: "{b}:{c}({d}%)",
                                        show : false
                                    },
                                    labelLine : {
                                        show : false
                                    },
                                    color:(params)=>{
                                        // console.log(params)
                                        return this.colors[params.dataIndex]
                                    }
                                },
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                },

                            },

                            data:data
                        }
                    ]
                };
                this.chart.setOption(option);
                //   window.onresize = this.chart.resize;
                window.addEventListener("resize", ()=> {
                    this.chart.resize();
                });
            }
        }
    }

</script>
<style scoped lang='less'>
    .l{
        flex: 1;
        display: flex;
        .item_one{
            width: 12%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            img{
                width: 44%;
                height: 44%;
            }
            div{
                margin-top: 0.2rem;
                height:1rem;
                font-size:1rem;
                font-weight:400;
                color:rgba(231,92,94,1);
                line-height:1rem;
            }
        }
        .item_two{
            width: 14%;
            font-size:0.8rem;
            font-weight:400;
            color:rgba(255,255,255,1);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin: 0.4rem 0;
            border-right: 0.05rem solid white;
            span{
                display: inline-block;
                margin:0 0 0 0.2rem;
                background:rgba(24,62,95,0.6);
                box-shadow:0rem 0.01rem 0.05rem 0rem rgba(1,104,185,1),0rem -0.01rem 0.05rem 0rem rgba(1,104,185,1);
            }
        }
        .item_three{
            width: 21%;
            margin: 0.4rem 0;
        }
        .item_four{
            flex: 1;
            margin: 0.4rem ;
            display: flex;
            align-items: center;

            .c1{
                background:#17abff;
                height:0.7rem;
                font-size:0.36rem;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:0.7rem;
                text-align: center;
            }
            .c2{
                background:rgba(89,222,129,1);

                height:0.7rem;
                font-size:0.36rem;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:0.7rem;
                text-align: center;
            }
            .c3{
                background:rgba(54,172,235,1);
                height:0.7rem;
                font-size:0.36rem;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:0.7rem;
                text-align: center;
            }
            .c4{
                background:#20d271;
                height:0.7rem;
                font-size:0.36rem;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:0.7rem;
                text-align: center;
            }
            .c5{
                background:#24D6D1;
                height:0.7rem;
                font-size:0.36rem;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:0.7rem;
                text-align: center;
            }
        }
    }



</style>
