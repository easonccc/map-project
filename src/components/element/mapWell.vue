<template>
    <div calss="content">
        <div class="right">
            <div class="message">
                <div class="title">
                    <span>井盖监测</span>
                </div>
                <div class="msg_content">
                    <table>
                        <tr>
                            <td>设备名称</td>
                            <td>管理井盖</td>
                        </tr>
                        <tr>
                            <td>设备分类</td>
                            <td><span class="classify">管路</span></td>
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
                    <div class="controlled">可控</div>
                </div>
            </div>
            <!-- 管路信息 -->
            <div class="pipeline">
                <div class="pipeline_content">
                    <table>
                        <tr v-for="(item, index) in pipelineList" :key="index">
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
            pipelineList: [
                { name: "管路流通物", num: "自来水" },
                { name: "管路流量", num: "2.5L/s" },
                { name: "管路压力", num: "0.28MPa" },
                { name: "管路流向", num: "向北" }
            ]
        };
    }
};
</script>

<style scoped lang="less">
@import "../../assets/css/mixin.less";
@import "../../assets/css/rightView.less";
.content {
    .pipeline {
        background-color: rgba(0, 0, 0, 0.6);
        .pipeline_title {
            height: 40px;
            line-height: 40px;
            padding-left: 10px;
        }

        .pipeline_content {
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
