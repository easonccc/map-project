<template>
    <div calss="content">
        <div class="right">
            <div class="message">
                <div class="title">
                    <span>绿化</span>
                </div>
                <div class="msg_content">
                    <table>
                        <tr>
                            <td>绿化名称</td>
                            <td>木鱼镇公园</td>
                        </tr>
                        <tr>
                            <td>位置信息</td>
                            <td class="desc">
                                <div class="roughly">
                                    木鱼镇人民路001号人民政府对面
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
                            <td>绿地分类</td>
                            <td>公园</td>
                        </tr>
                        <tr>
                            <td>种植情况</td>
                            <td>
                                <span>花园</span>
                                <span>灌木</span>
                                <span>树木</span>
                            </td>
                        </tr>
                        <tr>
                            <td>备注信息</td>
                            <td>无</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="start_btn">
                启动预案
            </div>
            <div class="myDialog">
                <v-dialog
                    v-show="isDialogVisible"
                    @close="closeDialog"
                    :pathData="pathData"
                ></v-dialog>
            </div>
        </div>
    </div>
</template>

<script>
import dialog from "../event/dialog3";

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
@import "../../assets/css/rightView.less";
.working_content {
    padding: 15px;
    text-align: center;
}
</style>
