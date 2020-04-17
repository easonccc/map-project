<template>
    <div calss="content">
        <div class="right">
            <div class="message">
                <div class="title">
                    <span>楼宇信息</span>
                </div>
                <div class="msg_content">
                    <table>
                        <tr>
                            <td>设备名称:</td>
                            <td>天燕小区25栋一单元电梯</td>
                        </tr>
                        <tr>
                            <td>位置信息:</td>
                            <td class="desc">
                                <div class="roughly">
                                    天燕小区25栋一单元电梯
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
                            <td>设备分类:</td>
                            <td><span class="state">电梯</span></td>
                        </tr>
                        <tr>
                            <td>备注信息:</td>
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
                <div class="working_content" @click="showDialog">
                    <img src="../../assets/img/shop.png" alt="" />
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
import dialog from "../event/dialog_shop";

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
