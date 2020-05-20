<template>
  <div class="container">
    <div class="dialog">
      <div class="dialog-header">
        <slot name="header">
          <span>加入视频会议成员</span>
          <button type="button" class="btn-close" @click="close">
            x
          </button>
          <div class="title">
            <div>群组</div>
            <div>部门</div>
            <div>成员</div>
          </div>
        </slot>
      </div>
      <div class="dialog-body">
        <slot name="body">
          <div class="video-body">
            <el-collapse v-model="activeNames">
              <el-collapse-item title="磁器口安全员群" name="1">
                <div>
                  <table>
                    <tr>
                      <td>博文</td>
                      <td>保安队长</td>
                      <td>13897118909</td>
                    </tr>
                  </table>
                </div>
              </el-collapse-item>
              <el-collapse-item title="磁器口保安群" name="2">
                <div>
                  <table>
                    <tr>
                      <td>博文</td>
                      <td>保安队长</td>
                      <td>13897118909</td>
                    </tr>
                  </table>
                </div>
              </el-collapse-item>
              <el-collapse-item title="磁器口游客服务中心群" name="3">
                <div>
                  <table>
                    <tr>
                      <td>博文</td>
                      <td>保安队长</td>
                      <td>13897118909</td>
                    </tr>
                  </table>
                </div>
              </el-collapse-item>
              <el-collapse-item title="沙坪坝保安群" name="4">
                <div>
                  <table>
                    <tr>
                      <td>博文</td>
                      <td>保安队长</td>
                      <td>13897118909</td>
                    </tr>
                    <tr>
                      <td>包小李</td>
                      <td>保安队长</td>
                      <td>13897118909</td>
                    </tr>
                    <tr>
                      <td>蔡旭坤</td>
                      <td>保安队长</td>
                      <td>13897118909</td>
                    </tr>
                    <tr>
                      <td>蔡谷来</td>
                      <td>保安队长</td>
                      <td>13897118909</td>
                    </tr>
                  </table>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dialog",
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
}
.dialog {
  background: url(../../assets/img/park/park_bg.png);
  background-size: cover;
  height: 511px;
  width: 760px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.dialog-header,
.dialog-footer {
  display: flex;
}
.dialog-header {
  position: relative;
  color: #fff;
  padding-left: 5px;
  span {
    margin: 10px 0 0 5px;
  }
  .title {
    display: flex;
    position: absolute;
    bottom: -29px;
    left: 25px;
    div {
      padding: 0 2px;
      color: #fff;
      margin-right: 4px;
    }
  }
}
.dialog-body {
  color: #fff;
  position: relative;
  color: #3bb5e7;
  margin-top: 30px;

  .video-body {
    padding: 0 20px;
    margin-top: 10px;
    /deep/.el-collapse-item__header {
      padding-left: 20px;
      font-size: 16px;
      background-color: rgba(0, 0, 0, 0) !important;
      color: #fff;
      border: none;
    }
    /deep/.el-collapse-item__content {
      background-color: #010a0f !important;
      color: #fff;
      padding-top: 20px;
      border: none;
    }
    /deep/.el-collapse-item__wrap {
      border: none;
    }
    /deep/.el-collapse {
      border: none;
    }
    .el-collapse-item {
      table {
        font-size: 14px;
        margin-left: 20px;
        tr {
          td {
            width: 70px;
          }
        }
      }
    }
  }
}

.btn-close {
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  color: transparent;
  position: absolute;
  right: 17px;
  top: 0;
  background: transparent;
}
#green {
  color: #02d031;
}
</style>
