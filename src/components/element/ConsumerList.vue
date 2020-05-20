<template>
    <div class="consumerList" :style="{height:height,width:width}" >
        <div class="list_one" v-for="(v,j) in bindData" :key="j">
            <div class="l">{{j+1}} {{v.name}}</div>
            <div class="m">
                <div class="color" :style="{'background-color':'#08B9F4','width':v.width,'height':'100%','border-radius':'0.98rem'}"></div>
            </div>
            <div class="r">{{v.value}}元</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ConsumerList",
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
    .consumerList{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .list_one{
            height:0.4rem;
            font-size:0.28rem;
            font-weight:400;
            color:white;
            line-height:0.4rem;
            display: flex;
            .l{
                width: 25%;
            }
            .m{
                flex: 1;
                background:rgba(17,94,135,1);
                border-radius:0.98rem;
                margin-right: 0.4rem;
            }
            .r{
                //width: 35%;
            }
        }
    }

</style>