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
                            <td>人像识别球机</td>
                        </tr>
                        <tr>
                            <td>位置信息</td>
                            <td class="desc">
                                <div class="roughly">
                                    天生桥景区入口
                                </div>
                                <div class="j">经:876.37749</div>
                                <span class="w">纬:654.98789</span>
                                <span></span>
                            </td>
                        </tr>
                        <tr>
                            <td>设备分类</td>
                            <td><span class="classify">人像球机</span></td>
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
                <div class="working_content">
                    监控画面
                </div>
            </div>
            <!-- 回放列表 -->
            <div class="list">
                <div class="list_title top-line">
                    回放 <span class="real">实时</span>
                </div>
                <div class="list_content">
                    <div class="list_time">2020年02月18日 12:00:00</div>
                    <div class="list_time">2020年02月18日 12:00:00</div>
                    <div class="list_time">2020年02月18日 12:00:00</div>
                    <div class="list_time">2020年02月18日 12:00:00</div>
                    <div class="list_time">2020年02月18日 12:00:00</div>
                </div>
                <div class="list_footer">
                    <img src="../../../assets/img/monitoring/prev.png" alt="" />
                    <img
                        src="../../../assets/img/monitoring/retreat.png"
                        alt=""
                    />
                    <img
                        src="../../../assets/img/monitoring/suspend.png"
                        alt=""
                    />
                    <img src="../../../assets/img/monitoring/stop.png" alt="" />
                    <img src="../../../assets/img/monitoring/next.png" alt="" />
                    <span class="two">×2</span>
                    <span>×4</span><span>×8</span><span>×16</span>
                </div>
            </div>
            <!-- 控制区域 -->
            <div class="control">
                <div class="control_title">
                    <span>控制</span>
                </div>
                <div class="control_content">
                    <div class="content_left">
                        <div class="dy">
                            <img
                                src="../../../assets/img/monitoring/call.png"
                                alt=""
                            />
                            <div>调用</div>
                        </div>
                        <div class="wip">
                            <img
                                src="../../../assets/img/monitoring/wip.png"
                                alt=""
                            />
                            <div>雨刷</div>
                        </div>
                    </div>
                    <div class="control_center">
                        <img
                            src="../../../assets/img/monitoring/control.png"
                            alt=""
                        />
                    </div>
                    <div class="control_right">
                        <div class="preset">
                            <img
                                src="../../../assets/img/monitoring/preset.png"
                                alt=""
                            />
                            <div>预置</div>
                        </div>
                        <div class="lamplight">
                            <img
                                src="../../../assets/img/monitoring/lamplight.png"
                                alt=""
                            />
                            <div>灯光</div>
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
export default {};
</script>

<style scoped lang="less">
@import "../../../assets/css/rightView.less";
.content {
    .list_title {
        height: 26px;
    }
    .working_content {
        height: 150px;
    }
    .control_content {
        width: 297px;
        display: flex;
        flex-direction: row;
        .content_left {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            & > div {
                border: 1px solid #000;
                height: 70px;
                width: 75px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                &:first-child {
                    border-bottom: none;
                }
                img {
                    margin-bottom: 6px;
                }

                div {
                }
            }
        }
        .control_center {
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .control_right {
            flex: 1;
            display: flex;
            flex-direction: column;
            & > div {
                border: 1px solid #000;
                &:first-child {
                    border-bottom: none;
                }
                height: 70px;
                width: 75px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img {
                    margin-bottom: 6px;
                }
                div {
                }
            }
        }
    }
}
</style>
