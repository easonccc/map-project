<template>
    <div class="box-body">
        <div class="title">
            <div class="title-top">
                <img src="../../assets/img/woman.png" alt="">
                <h3 class="red">
                    {{bindData[1].name}}
                </h3>
            </div>
            <div class="title-top text-right">
                <img src="../../assets/img/man.png" alt="">
                <h3 style="text-align: center">
                    {{bindData[0].name}}
                </h3>
            </div>
        </div>
        <div class="barPercent">
            <span class="pull-right barPercent-num">{{(bindData[1].value / total * 100).toFixed(2) + '%'}}</span>
            <div class="barPercent-inner  barPercent-num"
                 :style="{width:(bindData[1].value/total*100).toFixed(2)+'%'}">
                {{(bindData[0].value / total * 100).toFixed(2) + '%'}}
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name: "visitorGender",
        data() {
            return {
            };
        },
        computed: {
            total() {
                return this.bindData[0].value + this.bindData[1].value;
            }
        },
        mounted() {


        },
        props: {
            bindData: {
                type: Array,
                default: function (value) {
                    return [
                        {name: "男", value: 500000, percent: 50},
                        {name: "女", value: 500000, percent: 50}
                    ];
                }
            }
        }
    };

</script>
<style scoped lang='less'>
    .box-body {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
            display: flex;
            justify-content: space-between;
            &-top {
                img {
                    width: 1.4rem;
                    height: 1.45rem;
                }
                .red {
                    text-align: center;
                    color: #e76f93;
                }
                h3 {
                    margin-top: 5px;
                    line-height: 0.47rem;
                    font-size:0.4rem;
                    color: #68bbf6;
                    /*color: #fff;*/
                    span {
                        font-size: 12px;
                    }
                }
            }
        }
        .barPercent {
            box-sizing: border-box;
            width: 100%;
            height: 0.67rem;
            background-color: #68bbf6;
            position: relative;
            margin-top: 0.5rem;
            font-size:0.4rem;
            /*border-radius: 12px;*/
            &-inner {
                position: absolute;
                background-color: #e76f93;
                height: 0.67rem;
                /*border-top-left-radius: 12px;*/
                /*border-bottom-left-radius: 12px;*/
            }
            &-num {
                color: #fff;
                line-height: 0.67rem;
                padding: 0 0.2rem;
            }
        }
    }

</style>
