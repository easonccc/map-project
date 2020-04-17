<template>
    <div calss="content">
        <div class="right">
            <div class="message">
                <div class="title">
                    <span>票务管理</span>
                </div>
                <div class="msg_content">
                    <table>
                        <tr>
                            <td>设备名称</td>
                            <td>城市便捷酒店</td>
                        </tr>
                        <tr>
                            <td>位置信息</td>
                            <td class="desc">
                                <div class="roughly">
                                    天生桥景区入口
                                </div>
                                <div class="j">经:876.37749</div>
                                <span class="w">纬:654.98789</span>
                                <span
                                    ><img
                                        src="../../assets/img/monitoring/location.png"
                                        alt=""
                                /></span>
                            </td>
                        </tr>
                        <tr>
                            <td>设备分类</td>
                            <td><span class="classify">自助机</span></td>
                        </tr>
                        <tr>
                            <td>备注信息</td>
                            <td>无</td>
                        </tr>
                    </table>
                </div>
            </div>
            <!-- 工作状态 -->
            <div class="working">
                <div class="working_title">
                    <div class="status">工作中</div>
                    <div class="shutdown">关机</div>
                </div>
            </div>
            <!-- 显示不同票务信息 -->
            <div class="ticket">
                <!-- 自助机信息 -->
                <div class="selfserve">
                    <div class="selfserve_title top-line">
                        自助机信息
                    </div>
                    <div class="selfserve_content">
                        <div class="img">
                            <img
                                src="../../assets/img/travel/自助机.png"
                                alt=""
                            />
                        </div>
                        <table>
                            <tr>
                                <td>票仓容量:</td>
                                <td><span>1000 </span>张</td>
                            </tr>
                            <tr>
                                <td>已打印:</td>
                                <td><span class="blue">256 </span>张</td>
                            </tr>
                            <tr>
                                <td>剩余:</td>
                                <td><span class="green">744 </span>张</td>
                            </tr>
                            <tr>
                                <td>上次维护时间:</td>
                                <td>2020-02-05</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>

            <div class="start_btn">
                启动预案
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "mapBroadcasting",
    props: {
        deviceOne: {
            type: Object
        }
    }
};
</script>

<style scoped lang="less">
@import "../../assets/css/rightView.less";
.content {
    .ticket {
        margin-top: 5px;
        .selfserve {
            background: rgba(0, 0, 0, 0.4);
            .selfserve_title {
                background: rgba(0, 0, 0, 0.4);
                height: 30px;
            }
            .selfserve_content {
                display: flex;
                margin-top: 30px;
                padding-bottom: 30px;
                .img {
                    margin-left: 39px;
                }
                table {
                    color: #fff;
                    tr {
                        td {
                            height: 30px;
                            span {
                                font-size: 24px;
                            }
                            .blue {
                                color: #25c4d7;
                            }
                            .green {
                                color: #1dea3a;
                            }
                            &:first-child {
                                width: 100px;
                                text-align: right;
                                padding-right: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
