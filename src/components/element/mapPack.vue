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
                <div class="park_img_thum" @click.stop="showMessageBox">
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
    </div>
</template>

<script>
export default {
    methods: {
        showMessageBox() {
            MessageBox.alert("这是一段内容", "标题名称", {
                confirmButtonText: "确定",
                callback: action => {
                    this.$message({
                        type: "info",
                        message: `action: ${action}`
                    });
                }
            });
        },
        open() {
            this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    this.$message({
                        type: "success",
                        message: "删除成功!"
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        }
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
}
</style>
