<template>
  <div calss="content">
    <div class="right">
      <div class="message">
        <div class="title">
          <span>巡检执法</span>
        </div>
        <div class="msg_content">
          <table>
            <tr>
              <td>巡检人员</td>
              <td>张磊</td>
            </tr>
            <tr>
              <td>人员职位</td>
              <td><span class="purple">保安</span></td>
            </tr>
            <tr>
              <td>设备名称</td>
              <td>移动智能巡检设备</td>
            </tr>
            <tr>
              <td>设备分类</td>
              <td><span class="classify">移动端</span></td>
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
@import "../../assets/css/rightView.less";
</style>
