<template>
  <div calss="content">
    <div class="right">
      <div class="message">
        <div class="title">
          <span>商业体信息</span>
        </div>
        <div class="msg_content">
          <table>
            <tr>
              <td>商业体名称：</td>
              <td>天燕游客集散地购物中心</td>
            </tr>
            <tr>
              <td>位置信息:</td>
              <td class="desc">
                <div class="roughly">磁器口-文昌宫寨门</div>
                <div class="j">经:29.5804318500</div>
                <span class="w">纬:106.4517849700</span>
                <span
                  ><img src="../../assets/img/monitoring/location.png" alt=""
                /></span>
              </td>
            </tr>
            <tr>
              <td>主体分类:</td>
              <td><span class="state">商户</span></td>
            </tr>
            <tr>
              <td>备注信息:</td>
              <td>无</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="start_btn" @click="showDialog()">
        查看详情
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
