<template>
    <div class="video">
        <div class="video_content">
            <!-- 左侧文件共享窗口 -->
            <div class="video_left">
                <!-- 标题 -->
                <div class="window_name">
                    文件共享窗口
                    <img src="../../assets/img/visual/组 25.png" alt="" />
                </div>
                <div class="dailog">
                    <div class="icon">
                        <img src="../../assets/img/video/组 48.png" alt="" />
                    </div>
                    <div class="user">
                        <div class="user_name">
                            米小翠 <span class="publish_time">12:56</span>
                        </div>

                        <div class="user_msg">
                            <div class="msg_content">
                                <div class="msg_icon">
                                    <img
                                        src="../../assets/img/video/word.png"
                                        alt=""
                                    />
                                </div>
                                <div class="text">关于本次会议讨论的问题</div>
                            </div>
                            <div class="msg_footer">
                                下载
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dailog">
                    <div class="icon">
                        <img src="../../assets/img/video/组 48.png" alt="" />
                    </div>
                    <div class="user">
                        <div class="user_name">
                            米小翠 <span class="publish_time">12:56</span>
                        </div>

                        <div class="user_msg">
                            <div class="msg_content">
                                <div class="msg_icon">
                                    <img
                                        src="../../assets/img/video/word.png"
                                        alt=""
                                    />
                                </div>
                                <div class="text">关于本次会议讨论的问题</div>
                            </div>
                            <div class="msg_footer">
                                下载
                            </div>
                        </div>
                    </div>
                </div>
                <div class="send">
                    <div class="send_header">
                        <div class="icon">
                            <img src="../../assets/img/video/图片.png" alt="" />
                        </div>
                        <div class="icon">
                            <img src="../../assets/img/video/视频.png" alt="" />
                        </div>
                        <div class="icon">
                            <img src="../../assets/img/video/音频.png" alt="" />
                        </div>
                        <div class="icon">
                            <img src="../../assets/img/video/文件.png" alt="" />
                        </div>
                        <div class="send_msg">
                            <div class="icon">
                                <img
                                    src="../../assets/img/video/信息发布.png"
                                    alt=""
                                />
                            </div>
                            <div class="send_text">
                                发送
                            </div>
                        </div>
                    </div>
                    <textarea placeholder="请输入文字信息" />
                </div>
            </div>
            <div class="video_center">
                <div class="video_main"></div>
                <div class="video_nav">
                    <ul>
                        <li>
                            <img src="../../assets/img/video/静音.png" alt="" />
                            静音
                        </li>
                        <li>
                            <img
                                src="../../assets/img/video/形状 578(1).png"
                                alt=""
                            />
                            开启摄像头
                        </li>
                        <li>
                            <img
                                src="../../assets/img/video/窗口(1).png"
                                alt=""
                            />
                            共享窗口
                        </li>
                        <li>
                            <img
                                src="../../assets/img/video/挂电话.png"
                                alt=""
                            />
                            结束会议
                        </li>
                        <li @click="showDialog">
                            <img
                                src="../../assets/img/video/添加成员.png"
                                alt=""
                            />
                            加入成员
                        </li>
                        <li>
                            <img
                                src="../../assets/img/video/全员静音-01.png"
                                alt=""
                            />
                            会员静音
                        </li>
                        <li>
                            <img src="../../assets/img/video/录制.png" alt="" />
                            录制
                        </li>
                    </ul>
                </div>
            </div>
            <div class="video_right">
                <!-- 右侧窗口标题 -->
                <div class="meeting">
                    <img src="../../assets/img/visual/right25.png" alt="" />
                    会议成员窗口
                </div>
                <div class="guichet">
                    <div class="guichet_title">
                        我
                    </div>
                    <div class="guichet_content">
                        <div class="icon">
                            <img
                                src="../../assets/img/video/组 48(1).png"
                                alt=""
                            />
                        </div>
                        <div class="status">
                            摄像头已关闭
                        </div>
                    </div>
                </div>
                <div class="guichet">
                    <div class="guichet_title">
                        我
                    </div>
                    <div class="guichet_content">
                        <div class="icon">
                            <img
                                src="../../assets/img/video/组 48(1).png"
                                alt=""
                            />
                        </div>
                        <div class="status">
                            摄像头已关闭
                        </div>
                    </div>
                </div>
                <div class="guichet">
                    <div class="guichet_title">
                        我
                    </div>
                    <div class="guichet_content">
                        <div class="icon">
                            <img
                                src="../../assets/img/video/组 48(1).png"
                                alt=""
                            />
                        </div>
                        <div class="status">
                            摄像头已关闭
                        </div>
                    </div>
                </div>
                <div class="guichet">
                    <div class="guichet_title">
                        我
                    </div>
                    <div class="guichet_content">
                        <div class="icon">
                            <img
                                src="../../assets/img/video/组 48(1).png"
                                alt=""
                            />
                        </div>
                        <div class="status">
                            摄像头已关闭
                        </div>
                    </div>
                </div>
            </div>
            <div class="myDialog">
                <v-dialog
                    v-show="isDialogVisible"
                    @close="closeDialog"
                ></v-dialog>
            </div>
        </div>
    </div>
</template>

<script>
import dialog from "../event/dialog_video";
export default {
    data() {
        return {
            isDialogVisible: false
        };
    },
    methods: {
        showDialog() {
            this.isDialogVisible = true;
        },
        closeDialog() {
            this.isDialogVisible = false;
        }
    },
    components: {
        "v-dialog": dialog
    }
};
</script>

<style lang="less" scoped>
.video {
    background: url(../../assets/img/visual/bgc.png);
    background-size: cover;
    height: 100%;
    padding: 200px 50px 0;
    .video_content {
        color: #fff;
        padding-top: 50px;
        padding-left: 40px;
        width: 1885px;
        padding-bottom: 30px;
        margin: auto;
        display: flex;
        background: url(../../assets/img/visual/bg_table.png) no-repeat center
            top;
        .video_left {
            width: 311px;
            height: 773px;
            border: 1px solid #00b8ff;
            padding: 28px 0 0 10px;
            box-sizing: border-box;
            position: relative;
            margin-right: 10px;
            .window_name {
                position: absolute;
                top: -32px;
                left: 5px;
                font-size: 24px;
            }
            .dailog {
                margin-bottom: 40px;
                display: flex;
                .icon {
                    img {
                    }
                }

                .user {
                    padding-left: 2px;
                    .user_name {
                        font-size: 12px;
                        .publish_time {
                        }
                    }

                    .user_msg {
                        margin-top: 9px;
                        height: 68px;
                        width: 220px;
                        background-color: #d4e7ef;
                        display: flex;
                        flex-direction: column;

                        .msg_content {
                            display: flex;
                            color: #020d13;
                            .msg_icon {
                                margin: 6px 16px 12px 8px;
                                img {
                                }
                            }

                            .text {
                                padding-top: 7px;
                            }
                        }

                        .msg_footer {
                            border-top: 1px solid rgba(58, 181, 233, 1);
                            text-align: center;
                            padding-top: 2px;
                            color: #3ab5e9;
                            cursor: pointer;
                        }
                    }
                }
            }
            .send {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 311px;
                box-sizing: border-box;
                border-top: 1px solid #447d9a;

                .send_header {
                    border-bottom: 1px solid #1c3747;
                    height: 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .icon {
                        &:first-child {
                            margin-left: 15px;
                        }
                        margin-right: 26px;
                        img {
                        }
                    }

                    .send_msg {
                        width: 80px;
                        display: flex;
                        height: 38px;
                        border-left: 1px solid #1c3747;
                        line-height: 38px;
                        .icon {
                            margin-right: 11px;
                            margin-left: 5px;
                            img {
                            }
                        }

                        .send_text {
                        }
                    }
                }

                textarea {
                    height: 158px;
                    width: 100%;
                    background: transparent;
                    border: none;
                    text-align: left;
                    outline: none;
                    resize: none;
                }
            }
        }
        .video_center {
            margin-right: 10px;
            display: flex;
            flex-direction: column;
            width: 1194px;
            border: 1px solid #00b8ff;
            .video_main {
                flex: 1;
            }

            .video_nav {
                border-top: 1px solid #00b8ff;
                height: 100px;
                ul {
                    height: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    li {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        text-align: center;
                        margin-right: 39px;
                        img {
                            margin-bottom: 11px;
                        }
                    }
                }
            }
        }
    }
    .video_right {
        width: 311px;
        height: 773px;
        border: 1px solid #00b8ff;
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        position: relative;
        .meeting {
            position: absolute;
            right: 5px;
            top: -33px;
            font-size: 24px;
        }
        .guichet {
            margin-bottom: 20px;
            height: 173px;
            width: 269px;
            border: 1px solid #00b8ff;
            margin: auto;
            .guichet_title {
                margin: 5px;
            }

            .guichet_content {
                display: flex;
                flex-direction: column;
                align-content: center;
                text-align: center;
                .icon {
                    margin-bottom: 8px;
                    img {
                    }
                }

                .status {
                }
            }
        }
    }
}
</style>
