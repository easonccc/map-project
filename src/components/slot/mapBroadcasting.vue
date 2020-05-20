<template>
  <div calss="content">
    <div class="right">
      <div class="message">
        <div class="title">
          <span>数字广播</span>
        </div>
        <div class="msg_content">
          <table>
            <tr>
              <td>设备名称</td>
              <td>户外音响</td>
            </tr>
            <tr>
              <td>设备分类</td>
              <td><span class="classify">户外</span></td>
            </tr>
            <tr>
              <td>位置信息</td>
              <td class="desc">
                <div class="roughly">磁器口民俗博物馆-项目展示厅</div>
                <div class="j">经:106.4517849700</div>
                <span class="w">纬:29.5804318500</span>
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
          <img src="../../assets/img/broad.png" alt="" />
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
        <div class="list_footer">
          <img src="../../assets/img/monitoring/prev.png" alt="" />
          <img src="../../assets/img/monitoring/retreat.png" alt="" />
          <img src="../../assets/img/monitoring/suspend.png" alt="" />
          <img src="../../assets/img/monitoring/stop.png" alt="" />
          <img src="../../assets/img/monitoring/next.png" alt="" />
        </div>
      </div>
      <!-- 控制区域 -->
      <div class="control">
        <div class="top-line">
          <span>控制</span>
        </div>
        <div class="control_content">
          <div class="inter_cut">
            插播
          </div>
          <div class="shout">
            喊话
          </div>
          <div class="modify">修改列表</div>
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
  name: "mapBroadcasting",
  props: {
    deviceOne: {
      type: Object
    }
  }
};
</script>

<style scoped lang="less">
@import "../../assets/css/rightView.less";
.content {
  .working_content {
    img {
      display: block;
      margin: auto;
    }
    padding-bottom: 5px;
  }
  .control {
    .control_content {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      display: flex;
      height: 60px;
      align-items: center;
      div {
        border-radius: 4px;
        width: 60px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
      }
      .inter_cut {
        background: rgba(240, 234, 9, 0.8);
        border: 1px solid rgba(138, 135, 13, 1);
      }

      .shout {
        background: rgba(199, 37, 43, 0.8);
        border: 1px solid rgba(223, 11, 12, 1);
      }

      .modify {
        background: rgba(51, 236, 236, 0.8);
        border: 1px solid rgba(26, 109, 111, 1);
        width: 84px;
      }
    }
  }
}
</style>
