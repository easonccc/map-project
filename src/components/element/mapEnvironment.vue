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
            <div class="working">
                <div class="working_title">
                    <div class="status">工作中</div>
                    <div class="shutdown">关机</div>
                </div>
            </div>
            <!-- 播放列表 -->
            <div class="list list_weather">
                <div class="list_content">
                    <div class="list_time">
                        02/24 今天
                        <img
                            src="../../assets/img/environment/weather.png"
                            alt=""
                        />
                        多云转晴 12~16℃
                    </div>
                    <div class="list_time">
                        02/24 今天
                        <img
                            src="../../assets/img/environment/weather.png"
                            alt=""
                        />
                        多云转晴 12~16℃
                    </div>
                    <div class="list_time">
                        02/24 今天
                        <img
                            src="../../assets/img/environment/weather.png"
                            alt=""
                        />
                        多云转晴 12~16℃
                    </div>
                    <div class="list_time">
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
            <div class="list">
                <div class="has_bgImg">
                    <span>恶劣天气预警</span>
                </div>
                <div class="list_content">
                    <div class="list_time">
                        02/28 暴雨预警,注意山体滑坡
                    </div>
                    <div class="list_time">
                        02/28 暴雨预警,注意山体滑坡
                    </div>
                    <div class="list_time">
                        02/28 暴雨预警,注意山体滑坡
                    </div>
                    <div class="list_time">
                        02/28 暴雨预警,注意山体滑坡
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

            <div class="start_btn">
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
@import "../../assets/css/rightView.less";
.content {
    .list.list_weather {
        margin: 0;
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
}
</style>
