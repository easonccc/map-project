<template>
  <div class="modal-inner" @click.stop>
    <ul class="modal-head">
      <li
        :class="pannelShow === 'info' && 'active'"
        @click.stop="switchPannel('info')"
      >
        设备信息
      </li>
    </ul>
    <div class="modal-body">
      <div v-show="pannelShow === 'info'" class="pannel">
        <table>
          <tbody>
            <tr>
              <td>名称</td>
              <td>{{ deviceOne.name }}</td>
            </tr>
            <tr>
              <td>坐标</td>
              <td>
                {{ deviceOne.location[0] + " , " + deviceOne.location[1] }}
              </td>
            </tr>
            <tr>
              <td>设备ID</td>
              <td>{{ deviceOne.id }}</td>
            </tr>
            <tr>
              <td>
                监控画面
              </td>
              <td class="pannel-video">
                <video class="video" src="static/example.mp4" loop autoplay>
                  您的浏览器不支持 video 标签
                </video>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="modal-foot">
      <el-button size="mini" class="pull-right" @click="closeModal"
        >关闭</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "mapModal",
  data: function() {
    return {
      pannelShow: "info"
    };
  },
  props: {
    deviceOne: {
      type: Object,
      default: function() {
        return {
          name: "同里湖山庄Wi-Fi",
          // location: [120.735958, 31.157528],
          id: 201821231,
          type: "wifi"
        };
      }
    }
  },
  mounted() {
    console.log(this.deviceOne);
  },
  methods: {
    switchPannel: function(type) {
      this.pannelShow = type;
    },
    closeModal() {
      this.$emit("closeModal");
    }
  }
};
</script>

<style scoped lang="less">
@import url("../../assets/css/mixin.less");
.modal {
  &-head {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
    li {
      box-sizing: border-box;
      float: left;
      width: 100%;
      text-align: center;
      color: #999;
      border-right: 1px solid #ddd;
      cursor: pointer;
      font-size: 12px;
      &.active {
        color: #333;
      }
      &:last-child {
        border-right: none;
      }
    }
  }
  &-foot {
    padding: 15px;
  }
}
.pannel {
  padding: 15px;
  min-height: 240px;
  table {
    color: #13c0f0;
    font-size: 12px;
    padding: 10px;
    width: 100%;
    tr {
      line-height: 40px;
      td {
        padding-left: 15px;
        border: 1px solid #ccc;
        color: #333;
        &:first-child {
          color: #878787;
          width: 120px;
        }
      }
    }
  }
  &-video {
    padding-left: 0 !important;
    .video {
      width: 100%;
    }
  }
}
</style>
