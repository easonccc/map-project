<template>
  <div class="header">
    <div class="left">
      <div class="time_hour">
        {{ time }}
      </div>
      <div class="time_week">
        <div>星期二</div>
        <div>2020/04/28</div>
      </div>
    </div>
    <img src="../assets/img/组 3.png" alt="" />
    <div class="left">
      <div class="cs">26°</div>
      <div class="range">
        <div>20°</div>
        <div>31°</div>
      </div>
      <div class="weather">多云</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v_header",
  data() {
    return {
      time: "",
    };
  },
  mounted() {
    this.getTime();
    setInterval(() => this.getTime(), 1000);
  },
  methods: {
    getTime() {
      var date = new Date();
      var start = moment(date).format("HH-mm-ss");
      this.time =
        start.split("-")[0] +
        ":" +
        start.split("-")[1] +
        ":" +
        start.split("-")[2];
      //this.time = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  position: absolute;
  top: 25px;
  height: 55px;
  width: 1200px;
  .left {
    flex: 1;
    font-size: 42px;
    font-family: RTWS ShangGothic G0v1;
    font-weight: bold;
    color: rgba(153, 239, 255, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    .time_hour {
      margin-right: 8px;
    }

    .time_week {
      margin-top: 3px;
      height: 55px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 14px;
      color: #0e7f97;
      div {
        &:nth-child(1) {
          text-align: left;
          margin-bottom: 3px;
        }
      }
    }
    .cs {
      margin-right: 5px;
    }
    .range {
      font-size: 14px;
      margin-right: 5px;
      div {
        color: rgba(19, 162, 189, 1);
        &:first-child {
          margin: 4px 0 4px 0;
          color: rgba(19, 162, 189, 1);
        }
      }
    }
  }
  .img {
    width: 645px;
  }
  .weather {
    font-size: 36px;
    font-family: RTWS ShangGothic G0v1;
    font-weight: 400;
    color: rgba(19, 162, 189, 1);
  }
}
</style>
