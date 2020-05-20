<template>
  <div class="container">
    <div class="dialog">
      <div class="dialog-header">
        <slot name="header">
          <span>投诉详情</span>
          <button type="button" class="btn-close" @click="close">
            x
          </button>
        </slot>
      </div>
      <div class="dialog-body">
        <slot name="body">
          <div class="complaint">
            <ul class="complaint_content">
              <li>
                <div class="complaint_name">
                  投诉对象:
                </div>
                <div class="complaint_name_msg">
                  磁器口入口
                </div>
              </li>
              <li>
                <div class="complaint_name">
                  投诉时间:
                </div>
                <div class="complaint_name_msg">
                  2020年02月28日 12:25
                </div>
              </li>
              <li>
                <div class="complaint_name">
                  投诉分类:
                </div>
                <div class="complaint_name_msg">
                  <span class="blue">服务投诉</span>
                </div>
              </li>
              <li>
                <div class="complaint_name">
                  投诉来源:
                </div>
                <div class="complaint_name_msg">
                  邮件投诉
                </div>
              </li>
              <li>
                <div class="complaint_name">
                  投诉内容:
                </div>
                <div class="complaint_name_msg">
                  磁器口垃圾很多，没有及时处理，影响美观，请及时处理，不热真的很影响旅游体验，建议加多清洁数据，清理垃圾。
                </div>
              </li>
              <li>
                <div class="complaint_name">
                  投诉处理:
                </div>
                <div class="complaint_name_msg ">
                  <span class="red">未处置</span>
                </div>
              </li>
            </ul>
            <div class="complaint_footer">
              <div class="cancel" @click="close">取消</div>
              <div class="dispose" @click="close">处置</div>
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
    margin: 10px 0 0 20px;
  }
  .lx {
    background-color: #00b9fe;
    padding-right: 10px;
  }
}
.dialog-body {
  color: #fff;
  position: relative;
  height: 100%;
  .complaint {
    ul {
      margin-top: 80px;
      margin-left: 30px;
      li {
        display: flex;
        .blue {
          background-color: #27b3cd;
          padding: 0 1px;
          border-radius: 2px;
        }
        .red {
          background-color: #e71359;
          padding: 0 1px;
          border-radius: 2px;
        }
        div {
          line-height: 30px;
          &:first-child {
            width: 90px;
          }
          &:last-child {
            flex: 1;
          }
        }
      }
    }
    .complaint_footer {
      position: absolute;
      bottom: 30px;
      left: 30px;
      display: flex;
      div {
        width: 64px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        margin-right: 30px;
        border-radius: 4px;
        cursor: pointer;
      }
      .cancel {
        background-color: #9b999a;
      }
      .dispose {
        background-color: #25b1ca;
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
