<template>
    <div calss="content">
        <div class="right">
            <div class="message">
                <div class="title">
                    <span>智能照明</span>
                </div>
                <div class="msg_content">
                    <table>
                        <tr>
                            <td>设备名称</td>
                            <td>可控制节能路灯</td>
                        </tr>
                        <tr>
                            <td>设备分类</td>
                            <td><span class="classify">智能</span></td>
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
            <div class="working">
                <div class="working_title">
                    <div class="status">工作中</div>
                    <div class="shutdown">关机</div>
                    <div class="controlled">可控</div>
                </div>
                <div class="working_content"></div>
            </div>
            <!-- 控制区域 -->
            <div class="list">
                <div class="has_bgImg">
                    <span>控制列表</span>
                </div>
                <div class="list_content">
                    <div class="list_time">2020年02月18日 12:00:00</div>
                    <div class="list_time">2020年02月18日 12:00:00</div>
                    <div class="list_time">2020年02月18日 12:00:00</div>
                    <div class="list_time">2020年02月18日 12:00:00</div>
                    <div class="list_time">2020年02月18日 12:00:00</div>
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
    name: "ill",
    props: {
        deviceOne: {
            type: Object
        }
    }
};
</script>

<style scoped lang="less">
@import "../../assets/css/mixin.less";
@import "../../assets/css/rightView.less";
</style>
