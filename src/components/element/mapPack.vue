<template>
    <div calss="content">
        <div class="right">
            <div class="message">
                <div class="title">
                    <span>停车场</span>
                </div>
                <div class="msg_content">
                    <table>
                        <tr>
                            <td>设备名称</td>
                            <td>木鱼镇游客服务中心</td>
                        </tr>
                        <tr>
                            <td>设备分类</td>
                            <td>地下</td>
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
            <!-- 停车场示意图区域 -->
            <div class="park_pic">
                <div class="park_pic_title">
                    <span>停车场示意图</span>
                    <img src="../../assets/img/park/maximize.png" alt="" />
                </div>
                <div class="park_img_thum" @click="showDialog">
                    <img src="../../assets/img/park/park_thum.png" alt="" />
                </div>
                <!-- 停车场的视屏录像 -->
                <div class="park_video">
                    <div class="entrance">
                        <div class="video_content"></div>
                        <div class="video_msg">
                            <div class="normal">正常</div>
                            <div class="jam">拥堵</div>
                        </div>
                        <div class="video_state">
                            运行中
                            <span>关闭</span>
                        </div>
                    </div>
                    <div class="exit">
                        <div class="video_content"></div>
                        <div class="video_msg">
                            <div class="normal">正常</div>
                            <div class="jam">拥堵</div>
                        </div>
                        <div class="video_state">
                            运行中
                            <span>关闭</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="start_btn">
                启动预案
            </div>
        </div>
        <div class="myDialog">
            <v-dialog v-show="isDialogVisible" @close="closeDialog"></v-dialog>
        </div>
    </div>
</template>

<script>
import dialog from "../event/dialog";
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

<style scoped lang="less">
@import "../../assets/css/mixin.less";
@import "../../assets/css/rightView.less";
.content {
    .park_pic {
        margin-top: 10px;
        border-top: 2px solid rgba(58, 181, 233, 1);
        background-color: rgba(0, 0, 0, 0.6);
        .park_pic_title {
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            span {
                padding-left: 10px;
            }
            img {
                float: right;
                margin: 10px 20px 0 0;
            }
        }
        .park_img_thum {
            padding-left: 10px;
        }
        .park_video {
            margin-top: 10px;
            display: flex;
            & > div {
                border: 1px solid rgba(0, 0, 0, 1);
                .video_content {
                    height: 114px;
                    width: 148px;
                    background-color: #fff;
                    &::before {
                        content: "入口";
                    }
                }
                .video_msg {
                    display: flex;
                    div {
                        width: 74px;
                        height: 32px;
                        border: 1px solid rgba(0, 0, 0, 1);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .normal {
                        color: #10b1ed;
                    }

                    .jam {
                        color: #df0b0c;
                    }
                }

                .video_state {
                    height: 32px;
                    padding: 0 10px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    span {
                        background-color: #f50502;
                        width: 30px;
                        height: 20px;
                        line-height: 20px;
                    }
                }
            }
        }
    }
    .myDialog {
        /deeep/ .el-dialog__header {
            height: 0;
            padding: 0 !important;
        }
        /deep/ .el-dialog__body {
            padding: 0 !important;
        }
        /deep/ .el-dialog__body {
            width: 1345px;
            height: 900px;
            background: url(../../assets/img/park/park_bg.png) no-repeat;
            background-color: transparent;
        }
    }
}
</style>
