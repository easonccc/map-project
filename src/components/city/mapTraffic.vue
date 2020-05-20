<template>
  <div calss="content">
    <div class="right">
      <div class="message">
        <div class="title">
          <span>交通信息</span>
        </div>
        <div class="msg_content">
          <table>
            <tr>
              <td>道路名称</td>
              <td>沙坪坝磁器口街道</td>
            </tr>
            <tr>
              <td>交通状态</td>
              <td><span class="classify">畅通</span></td>
            </tr>
            <tr>
              <td>备注信息</td>
              <td>无</td>
            </tr>
          </table>
        </div>
      </div>
      <!-- 车流信息 -->
      <div class="traffic_msg">
        <div class="traffic_title">
          <span>车流信息</span>
        </div>
        <div class="traffic_content">
          <v-chartMultyBar :bindData="bindData"></v-chartMultyBar>
        </div>
      </div>
      <!-- 承载量信息 -->
      <div class="traffic_msg">
        <div class="traffic_title">
          <span>承载量信息</span>
        </div>
        <div class="traffic_content">
          <v-chartPieRadius0Column
            :bindData="bindData8"
            type="人"
          ></v-chartPieRadius0Column>
        </div>
      </div>

      <div class="start_btn">
        启动预案
      </div>
    </div>
  </div>
</template>

<script>
import chartBar from "../event/cahrtBar";
import chartPieRadius0Column from "../event/chartPieRadius0Column";
import chartMultyBar from "../event/chartMultyBar";
export default {
  data() {
    return {
      country: [
        ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00"],
        [300, 100, 225, 320, 330, 150, 330, 150]
      ],
      bindData: {
        legend: ["进场", "出场"],
        xData: ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00"],
        yData: [
          [300, 250, 350, 255, 300, 300, 335, 250],
          [200, 200, 250, 310, 200, 200, 310, 335]
        ]
      },
      bindData8: [
        {
          name: "承载量",
          value: 45,
          value2: 450
        },
        {
          name: "剩余量",
          value: 55,
          value2: 550
        }
      ]
    };
  },
  components: {
    "v-chartPieRadius0Column": chartPieRadius0Column,
    "v-chartMultyBar": chartMultyBar,
    "v-chartBar": chartBar
  }
};
</script>

<style scoped lang="less">
@import "../../assets/css/mixin.less";
@import "../../assets/css/rightView.less";
.content {
  .traffic_msg {
    margin-top: 10px;
    border-top: 2px solid rgba(58, 181, 233, 1);
    background-color: rgba(0, 0, 0, 0.6);
    .traffic_title {
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      span {
        padding-left: 10px;
      }
    }
    .traffic_content {
      overflow: hidden;
      height: 200px;
    }
  }
}
</style>
