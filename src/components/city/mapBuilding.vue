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
              <td>设备名称</td>
              <td>项目展示厅电梯</td>
            </tr>
            <tr>
              <td>位置信息</td>
              <td class="desc">
                <div class="roughly">磁器口民俗博物馆-项目展示厅</div>
                <div class="j">经:29.5804318500</div>
                <span class="w">纬:106.4517849700</span>
                <span
                  ><img src="../../assets/img/monitoring/location.png" alt=""
                /></span>
              </td>
            </tr>
            <tr>
              <td>设备分类</td>
              <td><span class="state">电梯</span></td>
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
        <div class="working_content" @click="showDialog">
          <img src="../../assets/img/building.png" alt="" />
        </div>
      </div>
      <div class="start_btn" @click="showDialog">
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
import dialog from "../event/dialog_building";

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
