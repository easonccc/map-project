<template>
    <div calss="content">
        <div class="right">
            <div class="message">
                <div class="title">
                    <span>数字广播</span>
                </div>
                <div class="msg_content">
                    <table>
                        <tr>
                            <td>设备名称</td>
                            <td>户外音响</td>
                        </tr>
                        <tr>
                            <td>设备分类</td>
                            <td>户外</td>
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
                    <div class="controlled">可控</div>
                </div>
                <div class="video_content"></div>
            </div>
            <!-- 播放列表 -->
            <div class="palys">
                <div class="play_title">
                    <span>播放列表</span>
                </div>
                <div class="play_content">
                    <div class="play_time">
                        1.关于疫情的消毒措施的通知。 mp3
                    </div>
                    <div class="play_time">
                        2.关于疫情的景区管理通知。 mp3
                    </div>
                    <div class="play_time">
                        3.关于疫情的交通安排的通知。 mp3
                    </div>
                    <div class="play_time">
                        4.关于疫情的上班安排的通知。 mp3
                    </div>
                    <div class="play_time">
                        5.关于疫情期间外出申请通知。 mp3
                    </div>
                    <div class="play_time">
                        6.关于疫情期间体温上报通知。 mp3
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
            <!-- 控制区域 -->
            <div class="control">
                <div class="control_title">
                    <span>控制</span>
                </div>
                <div class="control_content">
                    <div class="inter_cut">
                        插播
                    </div>
                    <div class="shout">
                        喊话
                    </div>
                    <div class="modify">修改列表</div>
                </div>
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

            .video_content {
                height: 116px;
                width: 272px;
                background-color: #fff;
                margin: auto;
            }
        }
        .palys {
            margin-top: 10px;
            background-color: rgba(0, 0, 0, 0.6);
            .play_title {
                height: 31px;
                width: 297px;
                background: url(../../assets/img/monitoring/title_background.png);
                display: inline-block;
                padding: 10px 0 0 20px;
            }

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
        }
        .control {
            background-color: rgba(0, 0, 0, 0.6);
            margin-top: 5px;
            padding-top: 9px;
            border-top: 2px solid rgba(58, 181, 233, 1);
            .control_title {
                height: 31px;
                width: 297px;
                span {
                    padding-left: 10px;
                }
            }

            .control_content {
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: rgba(255, 255, 255, 1);
                display: flex;
                height: 60px;
                align-items: center;
                div {
                    border-radius: 4px;
                    width: 60px;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-left: 20px;
                }
                .inter_cut {
                    background: rgba(240, 234, 9, 0.8);
                    border: 1px solid rgba(138, 135, 13, 1);
                }

                .shout {
                    background: rgba(199, 37, 43, 0.8);
                    border: 1px solid rgba(223, 11, 12, 1);
                }

                .modify {
                    background: rgba(51, 236, 236, 0.8);
                    border: 1px solid rgba(26, 109, 111, 1);
                    width: 84px;
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
