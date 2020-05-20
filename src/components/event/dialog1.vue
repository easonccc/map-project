<template>
  <div class="container">
    <div class="dialog">
      <div class="dialog-header">
        <slot name="header">
          <span>停车场示意图</span>
          <button type="button" class="btn-close" @click="close">
            x
          </button>
        </slot>
      </div>
      <div class="dialog-body">
        <slot name="body">
          <div class="title">磁器口古镇停车场</div>
          <div class="content">
            <div class="aside">
              <div class="time">2020年3月4日 13:35</div>
              <div class="enter aside_com">
                <div class="aside_com_title">今日进场</div>
                <div class="aside_com_content">
                  <div>入口：</div>
                  <div>车次</div>
                </div>
              </div>
              <div class="aside_com out">
                <div class="aside_com_title">今日出场</div>
                <div class="aside_com_content">
                  <div>出口：</div>
                  <div>车次</div>
                </div>
              </div>
              <div class="aside_com">
                <div class="aside_com_title">
                  实时车位
                </div>
                <div class="stall">已用： <span>242</span> 车位</div>
                <div class="stall">剩余： <span id="green">365</span> 车位</div>
              </div>
              <div class="stall_status">车位充足</div>
            </div>
            <div class="park_main">
              <div class="img">
                <img src="../../assets/img/park/图层 2901.png" alt="" />
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
  height: 976px;
  width: 1345px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform: scale(0.9);
}
.dialog-header,
.dialog-footer {
  padding: 15px;
  display: flex;
}
.dialog-header {
  span {
    margin: 10px 0 0 20px;
  }
  color: #fff;
  justify-content: space-between;
}
.dialog-body {
  color: #fff;
  position: relative;
  .title {
    width: 100%;
    margin-top: 10px;
    text-align: center;
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }

  .content {
    margin: 80px 0 0 79px;
    display: flex;
    flex-direction: row;
    .aside {
      background: url(../../assets/img/park/p.png) no-repeat;
      height: 717px;
      width: 189px;
      margin-right: 20px;
      .time {
        padding: 180px 0 30px;
        color: #21c3d8;
        text-align: center;
      }

      .aside_com {
        .aside_com_title {
          text-align: center;
        }

        .aside_com_content {
          padding: 20px 20px;
          display: flex;
          justify-content: space-between;
        }
        .stall {
          padding: 20px 20px;
          span {
            font-size: 24px;
            color: #de9326;
          }
        }
      }

      .stall_status {
        background-color: #02d031;
        text-align: center;
        height: 26px;
        width: 80px;
        margin: 30px auto;
        line-height: 26px;
        border-radius: 6px;
      }
    }

    .park_main {
      width: 982px;
      float: right;
      .img {
        height: 641px;
        width: 982px;
        float: right;
        img {
          float: right;
          width: 100%;
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
  margin-right: 14px;
  background: transparent;
}
#green {
  color: #02d031;
}
</style>
