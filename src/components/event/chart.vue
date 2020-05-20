<template>
  <div class="chart">
    <div class="pie" ref="chartPie"></div>
  </div>
</template>

<script>
// require('echarts/theme/macarons');
export default {
  name: "chartPie",
  data() {
    return {
      value: true,
      colors: [
        "#17abff",
        "#ec7f12",
        "#7d66ff",
        "#20d271",
        "#d3d91d",
        "#97b552",
        "#95706d",
        "#dc69aa",
        "#07a2a4",
        "#9a7fd1",
        "#588dd5",
        "#f5994e",
        "#c05050",
        "#59678c",
        "#c9ab00",
        "#7eb00a",
        "#6f5553",
        "#c14089"
      ],
      chart: null
    };
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    bindData: {
      type: Array
    },
    count: {
      type: Number,
      default: 0
    },
    showPer: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.initChartPie(this.bindData);
  },
  watch: {
    bindData: function(newVal, oldVal) {
      this.bindData = newVal;
      this.initChartPie(this.bindData);
    }
  },
  computed: {
    total() {
      let total = 0;
      this.bindData.forEach(v => {
        total += parseInt(v.value);
      });
      return total;
    },
    lineHeight() {
      let l = this.bindData.length;
      if (l < 3) {
        return "70px";
      } else if (l >= 3 && l < 7) {
        return "40px";
      } else {
        return "20px";
      }
    }
  },
  methods: {
    initChartPie(data) {
      this.chart = echarts.init(this.$refs.chartPie);
      // 把配置和数据放这里
      var option = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
          position: ["25%", "45%"]
        },
        splitLine: {
          // 分隔线样式。
          show: true, // 是否显示分隔线,默认 true。
          length: 30, // 分隔线线长。支持相对半径的百分比,默认 30。
          lineStyle: {
            // 分隔线样式。
            color: [
              [0.2, "#E1DA4BFF"],
              [0.8, "#0AC26DFF"],
              [1, "#DE2F19FF"]
            ], //线的颜色,默认 #eee。
            opacity: 1, //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
            width: 2, //线度,默认 2。
            type: "solid" //线的类型,默认 solid。 此外还有 dashed,dotted
            // shadowBlur: 10, //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
            // shadowColor: "#fff" //阴影颜色。支持的格式同color。
          }
        },
        series: [
          {
            name: "环境温度",
            type: "gauge",
            center: ["50%", "50%"],
            detail: { formatter: "{value}Mpa" },
            data: [{ value: 25, name: "" }],
            min: 0, // 最小的数据值,默认 0 。映射到 minAngle。
            max: 50, // 最大的数据值,默认 100 。映射到 maxAngle。
            splitNumber: 5,
            axisLine: {
              // 仪表盘轴线(轮廓线)相关配置。
              show: true, // 是否显示仪表盘轴线(轮廓线),默认 true。
              lineStyle: {
                color: [
                  [0.4, "#E1DA4BFF"],
                  [0.6, "#0AC26DFF"],
                  [1, "#DE2F19FF"]
                ],
                // 仪表盘轴线样式。
                //仪表盘的轴线可以被分成不同颜色的多段。每段的  结束位置(范围是[0,1]) 和  颜色  可以通过一个数组来表示。默认取值：[[0.2, '#91c7ae'], [0.8, '#63869e'], [1, '#c23531']]
                opacity: 1, //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                width: 16 //轴线宽度,默认 30。
                // shadowBlur: 20, //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
                // shadowColor: "#fff" //阴影颜色。支持的格式同color。
              }
            },
            axisTick: {
              // 刻度(线)样式。
              show: true, // 是否显示刻度(线),默认 true。
              splitNumber: 5, // 分隔线之间分割的刻度数,默认 5。
              length: 5, // 刻度线长。支持相对半径的百分比,默认 8。
              lineStyle: {
                // 刻度线样式。
                color: "#fff", //线的颜色,默认 #eee。
                opacity: 1, //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                width: 1, //线度,默认 1。
                type: "solid" //线的类型,默认 solid。 此外还有 dashed,dotted
              }
            },
            pointer: {
              // 仪表盘指针。
              show: true, // 是否显示指针,默认 true。
              length: "70%", // 指针长度，可以是绝对数值，也可以是相对于半径的百分比,默认 80%。
              width: 3, // 指针宽度,默认 8。
              color: "#3AB5E9FF"
            },
            itemStyle: {
              // 仪表盘指针样式。
              color: "rgba(137,120,255,1)", // 指针颜色，默认(auto)取数值所在的区间的颜色
              opacity: 0, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
              borderWidth: 0, // 描边线宽,默认 0。为 0 时无描边。
              borderType: "dotted", // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
              borderColor: "#000", // 图形的描边颜色,默认 "#000"。支持的颜色格式同 color，不支持回调函数。
              shadowBlur: 20, // (发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
              shadowColor: "#000" // 阴影颜色。支持的格式同color。
            },
            detail: {
              // 仪表盘详情，用于显示数据。
              show: true, // 是否显示详情,默认 true。
              offsetCenter: ["0", "50%"], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
              color: "auto", // 文字的颜色,默认 auto。
              fontSize: 16, // 文字的字体大小,默认 15。
              color: "#fff",
              formatter: "{value}Mpa" // 格式化函数或者字符串
            }
          }
        ]
      };
      this.chart.setOption(option);
      //   window.onresize = this.chart.resize;
      window.addEventListener("resize", () => {
        this.chart.resize();
      });
    }
  }
};
</script>

<style scoped lang="less">
.chart {
  flex: 1;
  width: 100%;
  height: 100%;
  // background-color: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
}
.pie {
  height: 100%;
  // margin-left: 20px;
}
.tips {
  position: absolute;
  bottom: 0.8rem;
  left: 50%;
  width: 100%;
  transform: translateX(-51%);
  padding-left: 0.4rem;
  .switch {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .switch_content {
      height: 1.5rem;
      width: 30%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border: 1px solid #1d9cc3;
      border-radius: 3rem;
      .img {
        width: 0.4rem;
        margin: 0 0.3rem;
        img {
          width: 100%;
        }
      }
      .xian {
        margin: 0.2rem 0;
        height: 80%;
        width: 0.5rem;
        border-right: 1px solid #1d9cc3;
      }
    }
  }
}
</style>
