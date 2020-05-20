<template>
  <div class="my-outbox">
    <div class="my-inbox" ref="box">
      <div
        class="my-list"
        v-for="(item, index) in sendVal"
        :key="index"
        ref="list"
      >
        <i class="el-icon-warning"></i>
        {{ item.title }}<span class="my-uname"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-marquee-left",
  props: {
    sendVal: Array,
  },
  data() {
    return {
      nowTime: null, //定时器标识
      disArr: [], //每一个内容的宽度
    };
  },
  mounted: function() {
    var that = this;
    var item = this.$refs.list;
    var len = this.sendVal.length;
    var arr = [];
    var margin = this.getMargin(item[0]); //因为设置的margin值一样，所以取第一个就行。
    for (var i = 0; i < len; i++) {
      arr.push(item[i].clientWidth + margin); //把宽度和 margin 加起来就是每一个元素需要移动的距离
    }
    this.disArr = arr;
    this.moveLeft();
  },
  beforeDestroy: function() {
    clearInterval(this.nowTime); //页面关闭清除定时器
    this.nowTime = null; //清除定时器标识
  },
  methods: {
    //获取margin属性
    getMargin: function(obj) {
      var marg = window.getComputedStyle(obj, null)["margin-right"];
      marg = marg.replace("px", "");
      return Number(marg); //强制转化成数字
    },
    //移动的方法
    moveLeft: function() {
      var outbox = this.$refs.box;
      var that = this;
      var startDis = 0; //初始位置
      this.nowTime = setInterval(function() {
        startDis -= 0.5;
        if (Math.abs(startDis) > Math.abs(that.disArr[0]) - 50) {
          that.disArr.push(that.disArr.shift()); //每次移动完一个元素的距离，就把这个元素的宽度
          that.sendVal.push(that.sendVal.shift()); //每次移动完一个元素的距离，就把列表数据的第一项放到最后一项
          startDis = 0;
        }
        outbox.style = "transform: translateX(" + startDis + "px)"; //每次都让盒子移动指定的距离
      }, 1000 / 60);
    },
  },
};
</script>

<style lang="less" scoped>
.my-outbox {
  color: #d7bc8d;
  overflow: hidden;
  width: 1078px;
  top: 100px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  .my-inbox {
    white-space: nowrap;
    .my-list {
      margin-right: 25px;
      display: inline-block;
      font-size: 13px;
      height: 35px;
      line-height: 35px;
      color: #eb2b2b;
    }
  }
}
</style>
