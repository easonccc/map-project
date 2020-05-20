<template>
  <div class="main">
    <!--右侧导航区域  -->
    <div class="box-left" v-if="isSlot">
      <div class="device">
        <div class="list">
          <ul class="list-inner">
            <li
              class="list-item"
              v-for="(item, index) in device"
              :key="index"
              @click.stop="sendMsgToParent(index, item.type)"
              :class="index == itemSelect && 'active'"
            >
              <img
                v-if="item.type === 'visual'"
                src="../assets/img/control05b.png"
              />
              <div class="title">
                <div v-if="item.name === '设备总数'">
                  {{ item.name }}
                </div>
                <div v-else>
                  {{ item.name }}:<span class="red">{{ item.num }}</span
                  >个
                </div>
              </div>
              <div class="detail">
                <div v-if="item.name === '设备总数'">
                  <ul class="show_num">
                    <li>
                      当前展示{{ item.name }}:<span class="red">{{
                        item.num
                      }}</span
                      >个
                    </li>
                    <li>
                      <i class="el-icon-d-arrow-right"></i>
                      <span class="green">在线</span>设备总数:<span
                        class="green"
                        >{{ item.online }}</span
                      >个
                    </li>
                    <li>
                      <i class="el-icon-d-arrow-right"></i>
                      <span class="red">离线</span>设备总数:<span class="red">{{
                        item.outline
                      }}</span
                      >个
                    </li>
                    <li>
                      <i class="el-icon-d-arrow-right"></i>
                      <span class="purple">故障</span>设备总数:<span
                        class="purple"
                        >{{ item.malfunction }}</span
                      >个
                    </li>
                  </ul>
                </div>
                <div v-else-if="item.name === '视频监控设备'">
                  <ul class="show_num">
                    <li>
                      高清摄像头枪机:<span class="red">{{ item.heigh }}</span
                      >个
                    </li>
                    <li>
                      人脸识别球机:<span class="red">{{ item.portrait }}</span
                      >个
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else class="thumbnail">
      <!-- 第一层 -->
      <ul>
        <li>
          <!-- 矩形方框 -->
          <img src="../assets/img/monitoring/rectangle.png" alt="" />
          <!-- 箭头 -->
          <img class="arrow" src="../assets/img/monitoring/arrows.png" alt="" />
        </li>
        <li>
          <img src="../assets/img/monitoring/rectangle.png" alt="" />
        </li>
        <li>
          <img src="../assets/img/monitoring/circle.png" alt="" />
        </li>
        <li>
          <img src="../assets/img/monitoring/hexagon.png" alt="" />
        </li>
      </ul>
      <div class="line"></div>
      <!-- 第二层 -->
      <ul>
        <li>
          <img src="../assets/img/monitoring/length.png" alt="" />
        </li>
        <li>
          <img src="../assets/img/monitoring/area.png" alt="" />
        </li>
        <li>
          <img src="../assets/img/monitoring/passenger.png" alt="" />
        </li>
        <li>
          <img src="../assets/img/monitoring/traffic.png" alt="" />
        </li>
        <li>
          <el-popover
            placement="right"
            width="200"
            trigger="hover"
            :visible-arrow="false"
            popper-class="inode"
          >
            <div class="popover_content">
              <!-- 点位统计 -->
              <div class="inode_title">
                <div class="img">
                  <img src="../assets/img/visual/组 1 拷贝.png" alt="" />
                </div>
                点位统计
              </div>
              <div class="inode_content">
                <ul>
                  <li>
                    <div class="inode_name">
                      当前区域设备总数:
                    </div>
                    <div><span>12</span>个</div>
                  </li>
                  <li>
                    <div class="inode_name">
                      <div class="img">
                        <img
                          src="../assets/img/visual/组 2 拷贝 18.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      高清摄像头枪机:<span>10</span>个
                    </div>
                  </li>
                  <li>
                    <div class="inode_name">
                      <div class="img">
                        <img
                          src="../assets/img/visual/组 2 拷贝 24.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div>人像识别球机:<span>2</span>个</div>
                  </li>
                </ul>
              </div>
            </div>
            <img slot="reference" src="../assets/img/monitoring/p.png" alt="" />
          </el-popover>
        </li>
      </ul>
      <div class="line"></div>
      <!-- 第三层 -->
      <ul>
        <li>
          <img src="../assets/img/monitoring/tier.png" alt="" />
        </li>
        <li>
          <img src="../assets/img/monitoring/cube.png" alt="" />
        </li>
        <li>
          <img src="../assets/img/monitoring/light.png" alt="" />
        </li>
        <li>
          <img src="../assets/img/monitoring/wifi.png" alt="" />
        </li>
        <li>
          <img src="../assets/img/monitoring/target.png" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSlot: true,
      activeName: "first",
      tabPosition: "left",
      popperOptions: {
        boundariesElement: "body",
        gpuAcceleration: false
      }
    };
  },
  props: {
    device: {
      type: Array,
      default: []
    },

    title: {
      type: String,
      default: "设备总数"
    },
    itemSelect: {
      type: Number
    }
  },
  created() {
    this.isSlot = this.$store.state.isSlot;
  },
  mounted() {},
  methods: {
    sendMsgToParent: function(index, type) {
      this.$emit("childEvent", { index, type });
    }
  }
  // components: {
  //     bottom
  // }
};
</script>

<style scoped lang="less">
@import "../assets/css/mixin.less";
.close {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}

.box-left {
  position: absolute;
  left: 0;
  top: 0;
  width: 297px;
  z-index: 100;
  background: rgba(0, 0, 0, 0.3) !important;
  //transform: scale(0.8);
}
.device {
  background: rgba(0, 0, 0, 0.3) !important;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
}
.list {
  margin-top: 10px;
  flex: 1;
  overflow-y: auto;
  .scroll-bar(#ddd);
  color: #8fe1f0;
  &-inner {
    padding-left: 14px;
    padding-right: 8px;
  }
  &-item {
    padding: 10px;
    text-align: left;
    font-size: 12px;
    border: 1px solid #5da8e2;
    border-radius: 2px;
    margin-bottom: 10px;
    cursor: pointer;
    img {
      width: 18px;
      height: 18px;
    }
    .title {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      vertical-align: middle;
    }
    .show_num {
      border: 1px solid #5da8e2;
      li {
        border-bottom: 1px solid #5da8e2;
        height: 33px;
        line-height: 33px;
        padding-left: 10px;
      }
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
.red {
  color: #f72a08;
  padding: 0 5px;
}
.green {
  color: #36e52e;
  padding: 0 3px;
}
.purple {
  color: #f600ff;
  padding: 0 3px;
}
/* .el-icon-d-arrow-right {
    padding-left: 8px;
} */
.main {
  .thumbnail {
    padding: 0 10px;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 134px;
    background: rgba(0, 0, 0, 0.8);
    &:first-child {
      padding-top: 20px;
    }
    ul {
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0 20px;
        .popover_content {
          height: 650px;
          padding: 40px;
          .inode_title {
            display: flex;

            .img {
              img {
              }
            }
          }

          .inode_content {
            ul {
              li {
                .inode_name {
                }

                div {
                  span {
                  }
                }
              }
            }
          }
        }
      }
    }
    .arrow {
      position: absolute;
      left: 0;
      top: 0;
    }
    .line {
      height: 1px;
      width: 100%;
      background: rgba(65, 68, 76, 1);
      margin: 20px 0;
    }
  }
}
</style>
