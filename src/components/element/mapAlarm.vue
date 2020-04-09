<template>
    <div calss="content">
        <div class="right">
            <div class="message">
                <div class="title">
                    <span>自助报警</span>
                </div>
                <div class="msg_content">
                    <table>
                        <tr>
                            <td>设备名称</td>
                            <td>固定自助报警栓</td>
                        </tr>
                        <tr>
                            <td>设备分类</td>
                            <td>固定自助</td>
                        </tr>
                        <tr>
                            <td>位置信息</td>
                            <td class="desc">
                                <div class="roughly">神农顶风景区售票广场</div>
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
                </div>
            </div>
            <!-- 报警记录 -->
            <div class="wether_msg">
                <div class="wether_title">
                    <span>报警记录</span>
                </div>
                <div class="wether_warning">
                    <div class="play_content">
                        <div class="play_time">
                            1.2019年08月15 60:56:52 mp3
                        </div>
                        <div class="play_time">
                            1.2019年08月15 60:56:52 mp3
                        </div>
                        <div class="play_time">
                            1.2019年08月15 60:56:52 mp3
                        </div>
                        <div class="play_time">
                            1.2019年08月15 60:56:52 mp3
                        </div>
                    </div>
                </div>
                <div class="play_footer">
                    <img src="../../assets/img/monitoring/prev.png" alt="" />
                    <img src="../../assets/img/monitoring/retreat.png" alt="" />
                    <img src="../../assets/img/monitoring/suspend.png" alt="" />
                    <img src="../../assets/img/monitoring/stop.png" alt="" />
                    <img src="../../assets/img/monitoring/next.png" alt="" />
                </div>
            </div>
            <div class="btn_receive">
                在线接警
            </div>
            <div class="btn_Call_monitoring">
                周边监控调用
            </div>
            <div class="control_btn_start">
                启动预案
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            indicatorsList: [
                { name: "总悬浮颗粒物", num: "0.09mg/m3" },
                { name: "PM10", num: "0.09mg/m3" },
                { name: "PM2.5", num: "0.09mg/m3" },
                { name: "负氧离子含量", num: "Cl>1.00 A级" },
                { name: "温度", num: "14℃" },
                { name: "湿度", num: "4%rh" }
            ]
        };
    }
};
</script>

<style scoped lang="less">
.content {
    .right {
        box-sizing: border-box;
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
                width: 100%;
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
        .wether_msg {
            margin-top: 10px;
            background-color: rgba(0, 0, 0, 0.6);
            .wether_title {
                height: 31px;
                width: 100%;
                background: url(../../assets/img/monitoring/title_background.png);
                span {
                    display: inline-block;
                    padding: 10px 0 0 20px;
                }
            }
            .wether_warning {
                .play_content {
                    .play_time {
                        padding-left: 10px;
                        height: 30px;
                        line-height: 30px;
                        border-bottom: 1px solid #000;
                        &:hover {
                            background: rgba(55, 168, 216, 0.6);
                        }
                    }
                }
            }
        }
        .palys {
            margin-top: 10px;
            background-color: rgba(0, 0, 0, 0.6);
            .play_content {
                .play_time {
                    padding-left: 10px;
                    height: 30px;
                    line-height: 30px;
                    border-bottom: 1px solid #000;
                    &:hover {
                        background: rgba(55, 168, 216, 0.6);
                    }
                }
            }
        }
        .play_footer {
            padding-left: 10px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            img {
                margin-left: 4px;
                cursor: pointer;
            }
        }
        .control_btn_start,
        .btn_receive,
        .btn_Call_monitoring {
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
        .btn_receive {
            background: rgba(238, 58, 28, 1);
        }
        .btn_Call_monitoring {
            background: rgba(214, 232, 18, 1);
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
