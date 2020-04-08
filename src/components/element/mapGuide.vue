<template>
    <div calss="content">
        <div class="right">
            <div class="message">
                <div class="title">
                    <span>智慧导视</span>
                </div>
                <div class="msg_content">
                    <table>
                        <tr>
                            <td>设备名称</td>
                            <td>智慧导视(指示牌)</td>
                        </tr>
                        <tr>
                            <td>设备分类</td>
                            <td>智能</td>
                        </tr>
                        <tr>
                            <td>位置信息</td>
                            <td class="desc">
                                <div class="roughly">
                                    木鱼镇游客服务中心正面
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
                            <td>备注信息</td>
                            <td>无</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="video">
                <div class="video_title">
                    <div class="working">工作中</div>
                    <div class="shutdown">关机</div>
                    <div class="controlled">可控</div>
                </div>
                <div class="video_content"></div>
            </div>
            <div class="control_btn">
                启动预案
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@import "../../assets/css/mixin.less";
.content {
    .right {
        margin-top: 125px;
        position: absolute;
        right: 0;
        top: 0;
        color: #8fe1f0;
        font-size: 14px;
        .message {
            background-color: rgba(0, 0, 0, 0.6);
            height: 231px;
            .title {
                height: 31px;
                width: 297px;
                background: url(../../assets/img/monitoring/title_background.png);
                span {
                    display: inline-block;
                    padding: 10px 0 0 20px;
                }
            }

            .msg_content {
                padding-left: 20px;
                table {
                    width: 100%;

                    tr {
                        height: 30px;
                        td {
                            line-height: 30px;
                            span {
                                img {
                                    vertical-align: bottom;
                                }
                            }
                        }
                    }
                    .desc {
                        line-height: 1;
                    }
                    margin-top: 20px;
                }
            }
        }
        .video {
            background-color: rgba(0, 0, 0, 0.6);
            margin-top: 5px;
            padding-top: 9px;
            border-top: 2px solid rgba(58, 181, 233, 1);
            .video_title {
                height: 40px;
                display: flex;
                flex-direction: row;
                .working {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 65px;
                    height: 26px;
                    border: 1px solid rgba(123, 204, 250, 1);
                    border-radius: 6px;
                    margin: 0 4px 0 2px;
                }

                div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 60px;
                    height: 26px;
                    border-radius: 6px;
                    margin-right: 4px;
                }
            }
        }
        .control_btn {
            margin-top: 10px;
            cursor: pointer;
            height: 40px;
            width: 100%;
            background: rgba(24, 181, 240, 1);
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
}

.shutdown {
    color: #df0b0c;
    border: 1px solid #df0b0c;
}
.controlled {
    color: #16ea6c;
    border: 1px solid #16ea6c;
}
</style>
