<template>
  <div calss="content">
    <div class="right">
      <div class="message">
        <div class="title">
          <span>垃圾桶监测</span>
        </div>
        <div class="msg_content">
          <table>
            <tr>
              <td>设备名称</td>
              <td>智慧垃圾桶</td>
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
        <div class="working_content">是否已满: <span>否</span></div>
      </div>
      <div class="start_btn">
        启动预案
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@import "../../assets/css/mixin.less";
@import "../../assets/css/rightView.less";
.working_content {
  height: 45px;
  line-height: 45px;
  span {
    display: inline-block;
    line-height: 24px;
    text-align: center;
    width: 45px;
    height: 24px;
    background: rgba(28, 170, 224, 0.8);
    border-radius: 4px;
  }
}
</style>
