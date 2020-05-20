<template>
  <div calss="content">
    <div class="right">
      <div class="message">
        <div class="title">
          <span>票务管理</span>
        </div>
        <div class="msg_content">
          <table>
            <tr>
              <td>设备名称</td>
              <td>票务中心</td>
            </tr>
            <tr>
              <td>位置信息</td>
              <td class="desc">
                <div class="roughly">磁器口民俗博物馆-项目展示厅</div>
                <div class="j">经:29.5804318500</div>
                <span class="w">纬:106.4517849700</span>
                <span></span>
              </td>
            </tr>
            <tr>
              <td>设备分类</td>
              <td><span class="classify">窗口售票</span></td>
            </tr>
            <tr>
              <td>备注信息</td>
              <td>无</td>
            </tr>
          </table>
        </div>
      </div>
      <!-- 工作状态 -->
      <div class="working">
        <div class="working_title">
          <div class="status">工作中</div>
          <div class="shutdown">关机</div>
        </div>
      </div>
      <!-- 销售数据统计图 -->
      <div class="market">
        <div class="market_title has_bgImg">
          <span>今日销售数据</span>
        </div>
        <div class="market_content">
          <v-chartPieRadius0Column
            :bindData="bindData8"
            type="张"
          ></v-chartPieRadius0Column>
        </div>
      </div>

      <!-- 核销数据 -->
      <div class="examine">
        <div class="examine_title top-line">
          今日核销数据
        </div>
        <div class="examine_content">
          <chart></chart>
        </div>
      </div>
      <!-- 库存预警 -->
      <div class="inventory">
        <div class="inventory_title top-line">
          库存预警
        </div>
        <div class="inventory_content"></div>
      </div>
      <div class="start_btn">
        启动预案
      </div>
    </div>
  </div>
</template>

<script>
import chartPieRadius0Column from "../../event/chartPieRadius0Column";
import chart from "../../event/chartxiaoliang";
export default {
  data() {
    return {
      bindData8: [
        {
          name: "窗口售票",
          value: 45,
          value2: 450
        },
        {
          name: "OTA售票",
          value: 55,
          value2: 550
        },
        {
          name: "微信售票",
          value: 55,
          value2: 550
        },
        {
          name: "旅行社",
          value: 55,
          value2: 550
        }
      ]
    };
  },
  components: {
    "v-chartPieRadius0Column": chartPieRadius0Column,
    chart
  }
};
</script>

<style scoped lang="less">
@import "../../../assets/css/rightView.less";
.content {
  .market {
    margin-top: 5px;
    background-color: rgba(0, 0, 0, 0.6);
    .market_content {
      height: 256px;
    }
  }

  .examine {
    margin-top: 5px;
    background-color: rgba(0, 0, 0, 0.6);
    .examine_title {
      height: 40px;
    }

    .examine_content {
      height: 80px;
      padding: 0 15px;
    }
  }

  .inventory {
    margin-top: 5px;
    background-color: rgba(0, 0, 0, 0.6);
    .inventory_title {
    }

    .inventory_content {
      height: 80px;
    }
  }
}
</style>
