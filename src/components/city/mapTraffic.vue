<template>
    <div calss="content">
        <div class="right">
            <div class="message">
                <div class="title">
                    <span>交通信息</span>
                </div>
                <div class="msg_content">
                    <table>
                        <tr>
                            <td>道路名称</td>
                            <td>九湖大道</td>
                        </tr>
                        <tr>
                            <td>交通状态</td>
                            <td>畅通</td>
                        </tr>
                        <tr>
                            <td>备注信息</td>
                            <td>无</td>
                        </tr>
                    </table>
                </div>
            </div>
            <!-- 车流信息 -->
            <div class="traffic_msg">
                <div class="traffic_title">
                    <span>车流信息</span>
                </div>
                <div class="traffic_content">条形统计图区域</div>
            </div>
            <!-- 承载量信息 -->
            <div class="traffic_msg">
                <div class="traffic_title">
                    <span>承载量信息</span>
                </div>
                <div class="traffic_content">扇形统计图区域</div>
            </div>

            <div class="control_btn">
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
        .traffic_msg {
            margin-top: 10px;
            border-top: 2px solid rgba(58, 181, 233, 1);
            background-color: rgba(0, 0, 0, 0.6);
            .traffic_title {
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                span {
                    padding-left: 10px;
                }
            }
            .traffic_content {
                height: 200px;
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
