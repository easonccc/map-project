<template>
    <div calss="content">
        <div class="right">
            <div class="message" id="vehicle">
                <div class="title">
                    <span>车辆运营信息</span>
                </div>
                <div class="msg_content">
                    <table>
                        <tr>
                            <td>车辆分类</td>
                            <td>公交</td>
                        </tr>
                        <tr>
                            <td>车牌号码</td>
                            <td>鄂A55555</td>
                        </tr>
                        <tr>
                            <td>驾驶人</td>
                            <td>顾小明</td>
                        </tr>
                        <tr>
                            <td>行驶速度</td>
                            <td>45公里/小时</td>
                        </tr>
                        <tr>
                            <td>行驶速度</td>
                            <td>45公里/小时</td>
                        </tr>
                        <tr>
                            <td>车辆状态</td>
                            <td>上行</td>
                        </tr>
                        <tr>
                            <td>备注信息</td>
                            <td>无</td>
                        </tr>
                    </table>
                </div>
            </div>
            <!-- 行驶路线 -->
            <div class="vehicle_msg">
                <div class="vehicle_title">
                    <span>车流信息</span>
                    <span>修改路线</span>
                </div>
                <div class="vehicle_content">
                    <div class="line"></div>
                    <div class="path_msg">
                        <div
                            class="item"
                            v-for="item in pathData"
                            :key="item.id"
                        >
                            <div class="inner">
                                {{ item.msg }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modification">
                修改电子图栏范围
            </div>
            <div class="start_btn">
                启动预案
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pathData: [
                { id: 1, msg: "大九湖游客中心" },
                { id: 2, msg: "大九湖游客中心" },
                { id: 3, msg: "大九湖游客中心" },
                { id: 4, msg: "大九湖游客中心" },
                { id: 5, msg: "大九湖游客中心" },
                { id: 6, msg: "大九湖游客中心" },
                { id: 7, msg: "大九湖游客中心" },
                { id: 8, msg: "大九湖游客中心" },
                { id: 9, msg: "大九湖游客中心" },
                { id: 10, msg: "大九湖游客中心" },
                { id: 11, msg: "大九湖游客中心" },
                { id: 12, msg: "大九湖游客中心" }
            ]
        };
    }
};
</script>

<style scoped lang="less">
@import "../../assets/css/mixin.less";
@import "../../assets/css/rightView.less";
.content {
    #vehicle.message {
        height: 300px;
    }
    .vehicle_msg {
        margin-top: 10px;
        border-top: 2px solid rgba(58, 181, 233, 1);
        background-color: rgba(0, 0, 0, 0.6);
        .vehicle_title {
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            letter-spacing: 5px;
            span {
                padding-left: 10px;
                &:last-child {
                    color: #fff;
                    margin-right: 10px;
                }
            }
        }
        .vehicle_content {
            .line {
                width: 259px;
                height: 4px;
                background: rgba(25, 169, 225, 1);
                border-radius: 2px;
                margin: auto;
            }
            .path_msg {
                padding: 5px 23px 25px;
                display: flex;
                justify-content: space-around;

                .item {
                    .inner {
                        width: 12px;
                    }
                }
            }
        }
    }
    .modification {
        margin-top: 10px;
        cursor: pointer;
        height: 40px;
        width: 296px;
        background: rgba(227, 225, 27, 1);
        opacity: 0.9;
        color: #fff;
        border-radius: 6px;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
