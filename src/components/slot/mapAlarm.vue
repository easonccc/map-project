<template>
  <div calss="content">
    <div class="right">
      <div class="message">
        <div class="title">
          <span>自助报警</span>
        </div>
        <div class="msg_content">
          <table>
            <tr>
              <td>设备名称</td>
              <td>固定自助报警栓</td>
            </tr>
            <tr>
              <td>设备分类</td>
              <td><span class="classify">固定自助</span></td>
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
      <div class="working">
        <div class="working_title">
          <div class="status">工作中</div>
          <div class="shutdown">关机</div>
        </div>
      </div>
      <!-- 报警记录 -->
      <div class="list">
        <div class="has_bgImg">
          <span>报警记录</span>
        </div>
        <div class="list_content">
          <div class="list_time">
            1.2019年08月15 60:56:52 mp3
          </div>
          <div class="list_time">
            1.2019年08月15 60:56:52 mp3
          </div>
          <div class="list_time">
            1.2019年08月15 60:56:52 mp3
          </div>
          <div class="list_time">
            1.2019年08月15 60:56:52 mp3
          </div>
        </div>

        <div class="list_footer">
          <img src="../../assets/img/monitoring/prev.png" alt="" />
          <img src="../../assets/img/monitoring/retreat.png" alt="" />
          <img src="../../assets/img/monitoring/suspend.png" alt="" />
          <img src="../../assets/img/monitoring/stop.png" alt="" />
          <img src="../../assets/img/monitoring/next.png" alt="" />
        </div>
      </div>
      <div class="btn_receive">
        在线接警
      </div>
      <div class="btn_Call_monitoring">
        周边监控调用
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
  .list_footer {
    padding-left: 10px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    img {
      margin-left: 4px;
      cursor: pointer;
    }
  }
  .btn_receive,
  .btn_Call_monitoring {
    margin-top: 10px;
    cursor: pointer;
    height: 40px;
    width: 100%;
    background: rgba(24, 181, 240, 1);
    opacity: 0.9;
    color: #fff;
    border-radius: 6px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn_receive {
    background: rgba(238, 58, 28, 1);
  }
  .btn_Call_monitoring {
    background: rgba(214, 232, 18, 1);
  }
}
</style>
