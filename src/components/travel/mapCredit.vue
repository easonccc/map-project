<template>
  <div calss="content">
    <div class="right">
      <div class="message">
        <div class="title">
          <span>诚信信息</span>
        </div>
        <div class="msg_content">
          <table>
            <tr>
              <td>商品名称</td>
              <td>城市便捷酒店</td>
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
              <td>商品分类</td>
              <td><span class="state">酒店</span></td>
            </tr>
            <tr>
              <td>商户状态</td>
              <td><span class="classify">正常营业</span></td>
            </tr>
            <tr>
              <td>备注信息</td>
              <td>无</td>
            </tr>
          </table>
        </div>
      </div>
      <!-- 商户评分 -->
      <div class="grade">
        <div class="grade_title">
          商户评分
        </div>
        <!-- <div class="grade_content"> -->
        <v-radar :bindData="bindData2"></v-radar>
        <!-- </div> -->
      </div>
      <!-- 评价列表 -->
      <div class="list">
        <div class="list_title top-line">
          评价列表
          <div class="img">
            <img src="../../assets/img/travel/链接.png" alt="" />
          </div>
        </div>
        <div class="list_content">
          <div class="list_item">
            旅游爱好者：这酒店环境不错，下次…
            <div class="icon">
              <img src="../../assets/img/travel/链接 拷贝.png" alt="" />
            </div>
          </div>
          <div class="list_item">
            柠檬爱香蕉：总体感觉良好，卫生还...
            <div class="icon">
              <img src="../../assets/img/travel/链接 拷贝.png" alt="" />
            </div>
          </div>
          <div class="list_item">
            dasdas:这比我上次住的酒店好...
            <div class="icon">
              <img src="../../assets/img/travel/链接 拷贝.png" alt="" />
            </div>
          </div>
          <div class="list_item">
            旅游爱好者：这酒店环境不错，下次…
            <div class="icon">
              <img src="../../assets/img/travel/链接 拷贝.png" alt="" />
            </div>
          </div>
          <div class="list_item">
            旅游爱好者：这酒店环境不错，下次…
            <div class="icon">
              <img src="../../assets/img/travel/链接 拷贝.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="dispose start_btn">发起处置</div>
      <div class="start_btn">
        启动预案
      </div>
    </div>
  </div>
</template>

<script>
import radar from "../event/radar";
export default {
  name: "mapBroadcasting",
  data() {
    return {
      bindData2: [
        {
          name: "餐饮类",
          value1: [
            { name: "价格", max: 6500 },
            { name: "环境", max: 16000 },
            { name: "卫生", max: 30000 },
            { name: "口味", max: 38000 },
            { name: "服务", max: 52000 }
          ],
          value2: [4300, 10000, 28000, 35000, 50000]
        },
        {
          name: "住宿类",
          value1: [
            { name: "价格", max: 6500 },
            { name: "位置", max: 16000 },
            { name: "设施", max: 30000 },
            { name: "服务", max: 38000 },
            { name: "卫生", max: 52000 }
          ],
          value2: [4300, 10000, 28000, 35000, 50000]
        },
        {
          name: "交通类",
          value1: [
            { name: "价格", max: 6500 },
            { name: "位置", max: 16000 },
            { name: "服务", max: 30000 },
            { name: "安全", max: 38000 },
            { name: "准时", max: 52000 }
          ],
          value2: [4300, 10000, 28000, 35000, 50000]
        },
        {
          name: "景区类",
          value1: [
            { name: "价格", max: 6500 },
            { name: "位置", max: 16000 },
            { name: "设施", max: 30000 },
            { name: "服务", max: 38000 },
            { name: "吸引力", max: 52000 }
          ],
          value2: [4300, 10000, 28000, 35000, 50000]
        },
        {
          name: "购物类",
          value1: [
            { name: "价格", max: 6500 },
            { name: "位置", max: 16000 },
            { name: "设施", max: 30000 },
            { name: "服务", max: 38000 },
            { name: "质量", max: 52000 }
          ],
          value2: [4300, 10000, 28000, 35000, 50000]
        },
        {
          name: "住宿类",
          value1: [
            { name: "价格", max: 6500 },
            { name: "位置", max: 16000 },
            { name: "设施", max: 30000 },
            { name: "服务", max: 38000 },
            { name: "环境", max: 52000 }
          ],
          value2: [4300, 10000, 28000, 35000, 50000]
        }
      ]
    };
  },
  components: {
    "v-radar": radar
  },
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
  .grade {
    margin-top: 5px;
    background-color: rgba(0, 0, 0, 0.6);
    .grade_title {
      height: 40px;
      padding-left: 10px;
      line-height: 40px;
    }
    .grade_content {
      height: 244px;
    }
  }
  .list {
    .list_title {
      height: 30px;
      display: flex;
      justify-content: space-between;
      .img {
        margin-right: 16px;
      }
    }
    .list_content {
      border: 1px solid #000;
      border-bottom: none;
      .list_item {
        display: flex;
        justify-content: space-between;
        height: 30px;
        border-bottom: 1px solid #000;
        line-height: 30px;
        &:hover {
          background: rgba(55, 168, 216, 0.6);
        }
        padding: 0 10px;
      }
    }
  }
  .dispose {
    background-color: #db823b;
  }
}
</style>
