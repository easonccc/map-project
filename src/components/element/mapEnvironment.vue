<template>
    <div calss="content">
        <div class="right">
            <div class="message">
                <div class="title">
                    <span>环境监测</span>
                </div>
                <div class="msg_content">
                    <table>
                        <tr>
                            <td>设备名称</td>
                            <td>环境监测传感器</td>
                        </tr>
                        <tr>
                            <td>设备分类</td>
                            <td>传感器</td>
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
            <!-- 播放列表 -->
            <div class="palys">
                <div class="play_content">
                    <div class="play_time">
                        02/24 今天
                        <img
                            src="../../assets/img/environment/weather.png"
                            alt=""
                        />
                        多云转晴 12~16℃
                    </div>
                    <div class="play_time">
                        02/24 今天
                        <img
                            src="../../assets/img/environment/weather.png"
                            alt=""
                        />
                        多云转晴 12~16℃
                    </div>
                    <div class="play_time">
                        02/24 今天
                        <img
                            src="../../assets/img/environment/weather.png"
                            alt=""
                        />
                        多云转晴 12~16℃
                    </div>
                    <div class="play_time">
                        02/24 今天
                        <img
                            src="../../assets/img/environment/weather.png"
                            alt=""
                        />
                        多云转晴 12~16℃
                    </div>
                </div>
            </div>
            <!-- 恶劣天气预警 -->
            <div class="wether_msg">
                <div class="wether_title">
                    <span>恶劣天气预警</span>
                </div>
                <div class="wether_warning">
                    <div class="play_content">
                        <div class="play_time">
                            02/28 暴雨预警,注意山体滑坡
                        </div>
                        <div class="play_time">
                            02/28 暴雨预警,注意山体滑坡
                        </div>
                        <div class="play_time">
                            02/28 暴雨预警,注意山体滑坡
                        </div>
                        <div class="play_time">
                            02/28 暴雨预警,注意山体滑坡
                        </div>
                    </div>
                </div>
            </div>
            <!-- 环境数值指标 -->
            <div class="indicators">
                <div class="indicators_title">环境数值指标</div>
                <div class="indicators_content">
                    <table>
                        <tr
                            v-for="(item, index) in indicatorsList"
                            :key="index"
                        >
                            <td>{{ item.name }}:</td>
                            <td>{{ item.num }}</td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="control_btn">
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

        .indicators {
            margin-top: 10px;
            background-color: rgba(0, 0, 0, 0.6);
            .indicators_title {
                height: 40px;
                line-height: 40px;
                padding-left: 10px;
            }

            .indicators_content {
                table {
                    tr {
                        td {
                            height: 30px;
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
