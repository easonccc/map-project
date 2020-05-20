<template>
  <div calss="content">
    <div class="right">
      <div class="message">
        <div class="title">
          <span>防火监测</span>
        </div>
        <div class="msg_content">
          <table>
            <tr>
              <td>设备名称</td>
              <td>防火智慧消防栓</td>
            </tr>
            <tr>
              <td>设备分类</td>
              <td><span class="classify">智能消防栓</span></td>
            </tr>
            <tr>
              <td>位置信息</td>
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
        <div class="working_content">
          <!-- 水位的盒子 -->
          <div class="level">
            <img src="../../assets/img/水位.png" alt="" />
          </div>
          <!-- 水压 -->
          <div class="pressure">
            <chart></chart>
          </div>
        </div>
      </div>
      <div class="start_btn">
        启动预案
      </div>
    </div>
  </div>
</template>

<script>
import chart from "../event/chart";
export default {
  components: {
    chart
  }
};
</script>

<style scoped lang="less">
@import "../../assets/css/mixin.less";
@import "../../assets/css/rightView.less";
.content {
  .working_content {
    .level {
      padding: 10px 0;
      &::before {
        content: "水位:";
        display: inline-block;
        padding-left: 5px;
        position: absolute;
        color: #fff;
      }
      img {
        display: block;
        margin-left: 66px;
      }
      padding-left: 8px;
      margin-bottom: 10px;
    }
    .pressure {
      height: 200px;
      &::before {
        content: "水压:";
        display: inline-block;
        padding-left: 5px;
        position: absolute;
        color: #fff;
      }
    }
  }
}
</style>
