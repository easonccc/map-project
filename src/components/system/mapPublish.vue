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
              <td>设备名称</td>
              <td>户外大屏</td>
            </tr>
            <tr>
              <td>设备状态</td>
              <td><span class="classify">LED户外大屏</span></td>
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
          <div class="controlled">可控</div>
        </div>
        <div class="working_content">
          <img src="../../assets/img/public_bf.png" alt="" />
        </div>
      </div>
      <!-- 播放列表 -->
      <div class="list">
        <div class="has_bgImg">
          <span>播放列表</span>
        </div>
        <div class="list_content">
          <div class="list_time">
            1.关于疫情的消毒措施的通知。 mp3
          </div>
          <div class="list_time">
            2.关于疫情的景区管理通知。 mp3
          </div>
          <div class="list_time">
            3.关于疫情的交通安排的通知。 mp3
          </div>
          <div class="list_time">
            4.关于疫情的上班安排的通知。 mp3
          </div>
          <div class="list_time">
            5.关于疫情期间外出申请通知。 mp3
          </div>
          <div class="list_time">
            6.关于疫情期间体温上报通知。 mp3
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
export default {};
</script>

<style scoped lang="less">
@import "../../assets/css/rightView.less";
</style>
