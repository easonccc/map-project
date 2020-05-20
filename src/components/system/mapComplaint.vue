<template>
  <div calss="content">
    <div class="right">
      <div class="message">
        <div class="title">
          <span>信息发布</span>
        </div>
        <div class="msg_content">
          <table>
            <tr>
              <td>投诉数量</td>
              <td><span>12</span> 条</td>
            </tr>
            <tr>
              <td>投诉对象</td>
              <td>神龙顶景区</td>
            </tr>
            <tr>
              <td>位置分类</td>
              <td><span class="classify">景区类</span></td>
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
              <td>备注信息</td>
              <td>无</td>
            </tr>
          </table>
        </div>
      </div>
      <!-- 播放列表 -->
      <div class="list">
        <div class="has_bgImg">
          <span>播放列表</span>
        </div>
        <div class="list_content">
          <div class="list_time" @click="showDialog">
            02/28 12:25 景区垃圾很多，处理不及时
          </div>
          <div class="list_time" @click="showDialog">
            03/03 10:00 景区垃圾很多，处理不及时
          </div>
          <div class="list_time" @click="showDialog">
            03/03 14:55 景区垃圾很多，处理不及时
          </div>
          <div class="list_time" @click="showDialog">
            03/15 15:25 景区垃圾很多，处理不及时
          </div>
          <div class="list_time" @click="showDialog">
            03/17 10:16 景区垃圾很多，处理不及时
          </div>
          <div class="list_time" @click="showDialog">
            03/17 16:22 景区垃圾很多，处理不及时
          </div>
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
import dialog from "../event/dialogComplaint";
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
</style>
