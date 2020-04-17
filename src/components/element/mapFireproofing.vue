<template>
    <div calss="content">
        <div class="right">
            <div class="message">
                <div class="title">
                    <span>防火监测</span>
                </div>
                <div class="msg_content">
                    <table>
                        <tr>
                            <td>设备名称</td>
                            <td>防火智慧消防栓</td>
                        </tr>
                        <tr>
                            <td>设备分类</td>
                            <td><span class="classify">智能消防栓</span></td>
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
            <div class="working">
                <div class="working_title">
                    <div class="status">工作中</div>
                    <div class="shutdown">关机</div>
                </div>
                <div class="working_content">
                    <!-- 水位的盒子 -->
                    <div class="level"></div>
                    <!-- 水压 -->
                    <div class="pressure"></div>
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
@import "../../assets/css/mixin.less";
@import "../../assets/css/rightView.less";
.content {
    .working_content {
        .level {
            height: 200px;
            &::before {
                content: "水位:";
            }
            margin-bottom: 10px;
        }
        .pressure {
            height: 200px;
            &::before {
                content: "水压:";
            }
        }
    }
}
</style>
