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
                            <td><span class="classify">畅通</span></td>
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

            <div class="start_btn">
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
@import "../../assets/css/rightView.less";
.content {
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
}
</style>
