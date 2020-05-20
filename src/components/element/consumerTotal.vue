<template>
    <div class="consumerTotal" :style="{height:height,width:width}" >
        <div class="consumerTotal_title">
            总金额:<span>6</span><span>6</span><span>6</span><span>6</span><span>6</span><span>6</span><span>6</span><span>6</span><span>6</span><span>6</span><span>6</span> 元
        </div>
        <div class="consumerTotal_detail">
            <div class="one">
               <div class="one_detail" style="border:0.02rem solid rgba(247,99,179,1) ;">
                   <div class="left">
                       <img src="../../assets/img/shi.png">
                       <div >吃</div>
                   </div>
                   <div class="right">
                       <div>12310</div>
                       <div style="color: white">人均1460</div>
                   </div>

               </div>
                <div class="one_detail" style="border:0.02rem solid rgba(224,134,255,1) ;margin: 0 0.2rem">
                    <div class="left" style="background:linear-gradient(180deg,rgba(224,134,255,1) 0%,rgba(167,133,239,1) 100%);">
                        <img src="../../assets/img/zhu.png">
                        <div >住</div>
                    </div>
                    <div class="right">
                        <div>12310</div>
                        <div style="color: white">人均1460</div>
                    </div>
                </div>
                <div class="one_detail" style="border:0.02rem solid rgba(255,153,115,1) ;">
                    <div class="left" style="background:linear-gradient(180deg,rgba(255,153,115,1) 0%,rgba(255,102,87,1) 100%);">
                        <img src="../../assets/img/yu.png">
                        <div >娱</div>
                    </div>
                    <div class="right">
                        <div>12310</div>
                        <div style="color: white">人均1460</div>
                    </div>
                </div>
            </div>
            <div class="one" style="margin: 0.2rem ">
                <div class="one_detail" style="border:0.02rem solid rgba(67,237,218,1) ;">
                    <div class="left" style="background:linear-gradient(180deg,rgba(67,237,218,1) 0%,rgba(33,212,209,1) 100%);">
                        <img src="../../assets/img/shi.png">
                        <div >购</div>
                    </div>
                    <div class="right">
                        <div>12310</div>
                        <div style="color: white">人均1460</div>
                    </div>
                </div>
                <div class="one_detail" style="margin: 0 0.2rem;border:0.02rem solid rgba(98,213,228,1) ;">
                    <div class="left" style="background:linear-gradient(180deg,rgba(98,213,228,1) 0%,rgba(49,167,235,1) 100%);">
                        <img src="../../assets/img/shi.png">
                        <div >游</div>
                    </div>
                    <div class="right">
                        <div>12310</div>
                        <div style="color: white">人均1460</div>
                    </div>
                </div>
                <div class="one_detail" style="border:0.02rem solid rgba(159,222,104,1) ;">
                    <div class="left" style="background:linear-gradient(180deg,rgba(159,222,104,1) 0%,rgba(81,222,131,1) 100%);">
                        <img src="../../assets/img/shi.png">
                        <div >行</div>
                    </div>
                    <div class="right">
                        <div>12310</div>
                        <div style="color: white">人均1460</div>
                    </div>
                </div>
            </div>
            <div class="one">
                <div class="one_detail" style="border:0.02rem solid rgba(118,232,170,1) ;">
                    <div class="left" style="background:linear-gradient(180deg,rgba(118,232,170,1) 0%,rgba(3,185,186,1) 100%);">
                        <img src="../../assets/img/qita.png">
                        <div >其他</div>
                    </div>
                    <div class="right">
                        <div>12310</div>
                        <div style="color: white">人均1460</div>
                    </div>
                </div>
                <div class="one_detail" style="margin: 0 0.2rem;border:0.02rem solid rgba(254,224,104,1) ;">
                    <div class="left" style="background:linear-gradient(180deg,rgba(254,224,104,1) 0%,rgba(255,179,33,1) 100%);">
                        <img src="../../assets/img/zonghe.png">
                        <div >综合</div>
                    </div>
                    <div class="right">
                        <div>12310</div>
                        <div style="color: white">人均1460</div>
                    </div>
                </div>
                <div class="one_detail" >

                </div>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "consumerTotal",
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
                    return [{
                        name:'渝中区',
                        value:'242542.00',
                        width:'75%'
                    }];
                }
            }
        },
    }
</script>

<style lang="less" scoped>
    .consumerTotal{
        display: flex;
        flex-direction: column;
       .consumerTotal_title{
           height: 0.6rem;
           line-height: 0.6rem;
           font-size:0.3rem;
           margin: 0 0.4rem;
           margin-bottom: 0.2rem;
           color:rgba(255,255,255,1);
           span{
               width: 0.5rem;
               color: #2ED9FD;
               background:rgba(15,67,109,1);
               box-shadow:0rem 0.01rem 0.02rem 0rem rgba(0,34,60,1);
               border-radius:0.02rem;
               font-size:0.42rem;
               text-align: center;
               margin-left: 0.2rem;
           }
       }
        .consumerTotal_detail{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .one{
                margin: 0 0.2rem;
                flex: 1;
                display: flex;
                .one_detail{
                    flex: 1;
                    border-radius:0.02rem;
                    display: flex;
                    .left{
                        width: 35%;
                        background:linear-gradient(180deg,rgba(247,99,179,1) 0%,rgba(255,73,134,1) 100%);
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        img{
                            width: 0.8rem;
                            height: 0.8rem;
                        }
                        div{
                            height:0.33rem;
                            font-size:0.24rem;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            line-height:0.33rem;
                        }
                    }
                    .right{
                        font-size:0.24rem;
                        color:rgba(243,74,133,1);
                        div{
                            height: 50%;
                        }

                    }
                }
            }

        }
    }


</style>