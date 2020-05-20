<template>
  <div calss="content">
    <div class="right">
      <div class="message">
        <div class="title">
          <span>智能照明</span>
        </div>
        <div class="msg_content">
          <table>
            <tr>
              <td>设备名称</td>
              <td>可控制节能路灯</td>
            </tr>
            <tr>
              <td>设备分类</td>
              <td><span class="classify">智能</span></td>
            </tr>
            <tr>
              <td>位置信息</td>
              <td class="desc">
                <div class="roughly">沙坪坝磁器口综合文化服务中心</div>
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
          <div class="controlled">可控</div>
        </div>
        <div class="working_content"></div>
      </div>
      <!-- 控制区域 -->
      <div class="list">
        <div class="has_bgImg">
          <span>控制列表</span>
        </div>
        <div class="list_content">
          <div class="list_time">
            2020年02月18日 12:00:00
            <span :class="isClose ? 'red' : 'green'">开</span>
          </div>
          <div class="list_time">
            2020年02月19日 13:00:00 <span class="green">关</span>
          </div>
          <div class="list_time">
            2020年02月20日 10:31:00 <span class="green">关</span>
          </div>
          <div class="list_time">
            2020年02月21日 12:03:00 <span class="green">关</span>
          </div>
          <div class="list_time">
            2020年02月22日 15:00:00 <span class="green">关</span>
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
export default {
  data() {
    return {
      isClose: true
    };
  },
  name: "ill",
  props: {
    deviceOne: {
      type: Object
    }
  }
};
</script>

<style scoped lang="less">
@import "../../assets/css/mixin.less";
@import "../../assets/css/rightView.less";
.list_time {
  span {
    float: right;
    margin-right: 4px;
    font-size: 12px;
  }
  .red {
    color: #df0b0cff;
  }
  .green {
    color: #22c91cff;
  }
}
</style>
