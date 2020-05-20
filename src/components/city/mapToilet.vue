<template>
  <div calss="content">
    <div class="right">
      <div class="message">
        <div class="title">
          <span>厕所信息</span>
        </div>
        <div class="msg_content">
          <table>
            <tr>
              <td>厕所名称</td>
              <td>沙坪坝磁器口公厕</td>
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
              <td>厕所分类</td>
              <td><span class="classify">固定厕所</span></td>
            </tr>
            <tr>
              <td>运行状态</td>
              <td><sapn class="blue">正常</sapn></td>
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
          智慧厕所
        </div>
        <div class="working_content" @click="showDialog">
          <div class="men">
            <div class="title">
              <div class="icon">
                <img src="../../assets/img/toilet/men.png" alt="" />
              </div>
              <span>男厕</span>
              <div class="y">已用 <span> 7</span>个</div>
              <div class="s">剩余 <span> 5</span>个</div>
            </div>
            <div class="content">
              <ul class="clear-fix">
                <li class="red">占用</li>
                <li></li>
                <li></li>
                <li class="red">占用</li>
                <li class="red">占用</li>
                <li class="red">占用</li>
              </ul>
              <div class="line"></div>
              <ul class="clear-fix">
                <li></li>
                <li class="red">占用</li>
                <li class="red">占用</li>
                <li class="red">占用</li>
                <li></li>
                <li></li>
              </ul>
              <div class="line"></div>
            </div>
          </div>
          <div class="men">
            <div class="title">
              <div class="icon">
                <img src="../../assets/img/toilet/women.png" alt="" />
              </div>
              <span>女厕</span>
              <div class="y">已用 <span> 7</span>个</div>
              <div class="s">剩余 <span> 5</span>个</div>
            </div>
            <div class="content">
              <ul class="clear-fix">
                <li class="red">占用</li>
                <li></li>
                <li></li>
                <li class="red">占用</li>
                <li class="red">占用</li>
                <li class="red">占用</li>
              </ul>
              <div class="line"></div>
              <ul class="clear-fix">
                <li></li>
                <li class="red">占用</li>
                <li class="red">占用</li>
                <li class="red">占用</li>
                <li></li>
                <li></li>
              </ul>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="start_btn" @click="showDialog">
        启动预案
      </div>
      <div class="myDialog">
        <v-dialog
          v-show="isDialogVisible"
          @close="closeDialog"
          :pathData="pathData"
        ></v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import dialog from "../event/dialog_toilet";

export default {
  data() {
    return {
      have: false,
      isDialogVisible: false
    };
  },
  methods: {
    showDialog() {
      this.isDialogVisible = true;
    },
    closeDialog() {
      this.isDialogVisible = false;
    }
  },
  components: {
    "v-dialog": dialog
  }
};
</script>

<style scoped lang="less">
@import "../../assets/css/rightView.less";
@import "../../assets/css/common.less";

.content {
  .message {
    padding-bottom: 20px;
  }
  .working_title {
    padding-left: 20px;
  }
  .working_content {
    padding: 5px 20px;
    .men {
      margin-bottom: 20px;
      .title {
        display: flex;
        align-items: center;
        height: 30px;
        line-height: 30px;
        .icon {
          display: flex;
          margin-right: 6px;
          img {
          }
        }
        span {
          margin-right: 10px;
        }
        .y {
          color: #fff;
          margin-right: 15px;
          span {
            font-size: 24px;
            color: #e0342c;
          }
        }
        .s {
          color: #fff;
          span {
            font-size: 24px;
            color: #0fe84d;
          }
        }
      }

      .content {
        ul {
          width: 252px;
          margin-top: 2px;
          .red {
            background-color: #e0342c;
            color: #fff;
          }
          li {
            float: left;
            height: 30px;
            width: 30px;
            line-height: 30px;
            margin-right: 12px;
            margin-top: 6px;

            &:nth-child(6) {
              margin-right: 0;
            }
            &:first-child {
              margin-left: 5px;
            }
            background-color: #0fe84d;
          }
        }
        .line {
          // margin-right: 2px;
          width: 252px;
          height: 2px;
          background: rgba(143, 225, 240, 1);
        }
      }
    }
  }
}
</style>
