<template>
  <div class="box-body">
    <div class="title">
      <div class="title-top">
        <h3 class="red">
          {{ bindData[1].name }}
        </h3>
      </div>
      <div class="title-top text-right">
        <h3 style="text-align: center">
          {{ bindData[0].name }}
        </h3>
      </div>
    </div>
    <div class="barPercent">
      <span class="pull-right barPercent-num">{{
        ((bindData[1].value / total) * 100).toFixed(2) + "%"
      }}</span>
      <div
        class="barPercent-inner  barPercent-num"
        :style="{ width: ((bindData[0].value / total) * 100).toFixed(2) + '%' }"
      >
        {{ ((bindData[0].value / total) * 100).toFixed(2) + "%" }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "visitorGender",
  data() {
    return {};
  },
  computed: {
    total() {
      return this.bindData[0].value + this.bindData[1].value;
    }
  },
  mounted() {},
  props: {
    bindData: {
      type: Array,
      default: function(value) {
        return [
          { name: "今日已核销", value: 800000, percent: 80 },
          { name: "今日未核销", value: 200000, percent: 20 }
        ];
      }
    }
  }
};
</script>
<style scoped lang="less">
.box-body {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .title {
    display: flex;
    font-size: 24px !important;
    padding-right: 5px;
    justify-content: space-between;
    &-top {
      img {
        width: 1.4rem;
        height: 1.45rem;
      }
      .red {
        text-align: center;
        color: #e72150;
      }
      h3 {
        margin-top: 5px;
        line-height: 0.47rem;
        font-size: 0.4rem;
        color: #e7e521;
        /*color: #fff;*/
        span {
          font-size: 12px;
        }
      }
    }
  }
  .barPercent {
    box-sizing: border-box;
    width: 100%;
    height: 16px;
    line-height: 16px;
    background-color: #e7e521;
    position: relative;
    margin-top: 0.5rem;
    font-size: 0.4rem;
    margin-right: 5px;
    /*border-radius: 12px;*/
    &-inner {
      position: absolute;
      background-color: #e72150;
      height: 16px;

      /*border-top-left-radius: 12px;*/
      /*border-bottom-left-radius: 12px;*/
    }
    &-num {
      color: #fff;
      line-height: 0.67rem;
      padding: 0 0.2rem;
      line-height: 16px;
    }
  }
}
</style>
