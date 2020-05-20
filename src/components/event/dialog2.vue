<template>
  <div class="container">
    <div class="dialog">
      <div class="dialog-header">
        <slot name="header">
          <span>修改行驶路线</span>
          <span class="lx">上行</span>
          <button type="button" class="btn-close" @click="close">
            x
          </button>
        </slot>
      </div>
      <div class="dialog-body">
        <slot name="body">
          <div class="line"></div>
          <div class="content">
            <div class="path_msg">
              <div class="item" v-for="item in pathData" :key="item.id">
                <div class="add">
                  <img src="../../assets/img/path/添加.png" alt="" />
                </div>
                <div class="inner">
                  {{ item.msg }}
                  <div class="path_edit">
                    <img src="../../assets/img/path/添加 拷贝 21.png" alt="" />
                    <img src="../../assets/img/path/编 辑.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="add_last">
                <img src="../../assets/img/path/添加.png" alt="" />
              </div>
            </div>
            <div class="footer">
              <div class="btn_cancel" @click="close">
                取消修改
              </div>
              <div class="btn_cartain" @click="close">
                确定修改
              </div>
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dialog",
  props: {
    pathData: {
      type: Array
    }
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
  .lx {
    background-color: #00b9fe;
    padding-right: 10px;
  }
}
.dialog-body {
  color: #fff;
  position: relative;
  .line {
    width: 667px;
    margin: 14px auto 0;
    background-color: #3bb5e7;
    border-radius: 8px;
    height: 12px;
  }

  .content {
    position: relative;
    color: #3bb5e7;
    margin-top: 30px;
    .path_msg {
      padding: 5px 23px 25px;
      display: flex;
      justify-content: space-around;
      .item {
        display: flex;
        justify-content: space-around;
        // align-items: center;
        .add {
          margin-top: 30px;
          margin-right: 12px;
          cursor: pointer;
          width: 16px;
          img {
            width: 100%;
          }
        }
        .inner {
          width: 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 320px;
          .path_edit {
            img {
              margin-bottom: 16px;
              cursor: pointer;
            }
          }
        }
      }
      .add_last {
        margin-top: 30px;
        width: 16px;
        img {
          width: 100%;
        }
      }
    }
    .footer {
      position: absolute;
      right: 10px;
      bottom: -50px;
      display: flex;
      .btn_cancel,
      .btn_cartain {
        width: 100px;
        height: 30px;
        line-height: 30px;
        color: #3ab5e9;
        border: 1px solid #3ab5e9;
        text-align: center;
        margin-right: 20px;
        cursor: pointer;
      }
      .btn_cartain {
        background-color: #3ab5e9;
        color: #fff;
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
