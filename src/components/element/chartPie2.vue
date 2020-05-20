<template>
    <div class="chart">
        <div class="pie" ref="chartPie"></div>
        <div class="tips" >
            <div class="tips_one" v-for="(item,index) in bindData" :key="index" :style="{'border-left':'0.2rem solid'+colors[index],'color':colors[index]}">
                <div class="one_up">
                    <div class="up1">{{item.name}}</div>
                    <div class="up2">{{item.per}}</div>
                    <div class="up3">{{item.value}}{{type}}</div>
                </div>
                <div class="one_down">
                    <div class="down1">环比:     +125%</div>
                    <img src="../../assets/img/upsmall.png">
                    <div class="down2">同比:     -25%</div>
                    <img src="../../assets/img/downsmall.png">
                </div>
            </div>
        </div>

    </div>
</template>


<script>
    // require('echarts/theme/macarons');
    export default{
        name:'chartPie',
        data(){
            return {
                colors:['#17abff','#ec7f12','#7d66ff','#20d271','#d3d91d',
                    '#97b552','#95706d','#dc69aa',
                    '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
                    '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'],
                chart:null,
            }
        },
        props:{
            type:{
                type:String,
                default:'人'
            },
            bindData:{
                type:Array,
            },
            show:{
                type:Boolean,
                default:true
            }
        },
        mounted(){
            this.initChartPie(this.bindData);
        },
        watch:{
            bindData:function (newVal,oldVal) {
                this.bindData = newVal;
                this.initChartPie(this.bindData);
            }
        },
        computed:{
            // total(){
            //     let total=0;
            //     this.bindData.forEach(v=>{
            //         total+=parseInt(v.value)
            //     })
            //     return total
            // },

        },
        methods:{
            initChartPie(data) {
                this.chart = echarts.init(this.$refs.chartPie);
                // 把配置和数据放这里
                console.log(this.show);
                let option={
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b}:{c}({d}%)",
                        position: ['25%', '45%']
                    },
                    series : [
                        {
                            name:'数量',
                            type:'pie',
                            radius : ['65%', '85%'],
                            itemStyle : {
                                normal : {
                                    label : {
                                        formatter: "{b}:{c}({d}%)",
                                        show : false
                                    },
                                    labelLine : {
                                        show : true
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
                        },

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
    .chart{
        flex: 1;
        width: 100%;
        height: 100%;
        // background-color: #fff;
        display: flex;
        flex-direction:row;
        box-sizing: border-box;
    }
    .pie{
        width: 40%;
        margin-left: 0.2rem;
    }
    .tips{
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .tips_one{
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 0.2rem;
            padding-left: 0.2rem;
            .one_up{
                height: 50%;
                display: flex;
                align-items: center;
                .up1{
                    flex: 1;
                    text-align: left;
                    height:0.45rem;
                    font-size:0.32rem;
                    font-weight:400;
               //     color:rgba(65,174,244,1);
                    line-height:0.45rem;
                }
                .up2{
                    flex: 1;
                    text-align: left;
                    height:0.45rem;
                    font-size:0.32rem;
                    font-weight:400;
                    color:#FFFFFF;
                    line-height:0.45rem;
                }
                .up3{
                    flex: 1;
                    text-align: left;
                    height:0.45rem;
                    font-size:0.32rem;
                    font-weight:400;
                    color:#FFFFFF;
                    line-height:0.45rem;
                }
            }
            .one_down{
                height: 50%;
                display: flex;
                align-items: center;
                .down1{
                    text-align: left;
                    height:0.45rem;
                    font-size:0.32rem;
                    font-weight:400;
              //      color:rgba(65,174,244,1);
                    line-height:0.45rem;
                }
                img{
                    width: 0.24rem;
                    height: 0.24rem;
                    margin: 0 0.2rem;
                }
                .down2{
                    text-align: left;
                    height:0.45rem;
                    font-size:0.32rem;
                    font-weight:400;
               //     color:rgba(65,174,244,1);
                    line-height:0.45rem;
                }
            }
        }




    }

</style>
