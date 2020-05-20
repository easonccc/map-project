<template>
  <!-- 底部导航区域 -->
  <div class="box-bottom">
    <div class="title">
      {{ getMsgData.res[0].name }}
    </div>
    <div class="content">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in getMsgData.res[0].swiperData"
          @click.stop="sendMsgToParent(index, item.type)"
          :key="index"
        >
          <router-link :to="item.to">
            <img :src="item.src" alt="" />
            <div class="text">{{ item.name }}</div>
          </router-link>
        </swiper-slide>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

import { mapActions, mapGetters } from "vuex";
export default {
  name: "bottom",
  data() {
    return {
      swiperOptions: {
        initialSlide: null,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        // spaceBetween: 0,
        // virtual: true,
        // 不循环
        loop: false,
        observer: false,
        // 显示条数
        slidesPerView: 7,
        observeParents: false,
      },
      swiperData: null,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    /*  slideChange(e) {
      console.log(e);
      console.log(this.SwiperIndex);
      this.$store.commit("setSwiperIndex", e.activeIndex);
      this.swiperOptions.initialSlide = this.SwiperIndex.activeIndex;
    }, */
    //点击跳到对应的index页面
    /* changeIndex(index) {
      console.log(this.$refs.mySwiper.swiper);
      this.$refs.mySwiper.swiper.slideTo(
        sessionStorage.getItem("back"),
        1000,
        true
      ); //切换到第一个slide，速度为1秒
    }, */
    // 获取当前页面的索引
    /*   getIndex() {
      this.swiperOptions.initialSlide = sessionStorage.getItem("back");
    }, */
    // 根据当前页面的路由确定导航栏的初始化索引
    getIndex() {
      console.log(this.$route.path);
      if (
        this.$route.path == "/environment" ||
        this.$route.path == "/trash" ||
        this.$route.path == "/well" ||
        this.$route.path == "/fireproofing" ||
        this.$route.path == "/alarm"
      ) {
        this.swiperOptions.initialSlide = 7;
      } else {
        this.swiperOptions.initialSlide = 0;
      }
    },
  },
  /*  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (sessionStorage.back) {
        vm.swiperOption.initialSlide = 8; //这里设置到第几页
        sessionStorage.removeItem("back");
      }
    });
  }, */

  created() {
    // this.swiperOptions.initialSlide = this.$store.state.swiperIndex;
    this.getIndex();
  },
  computed: {
    // ...mapGetters(["getSot"], ["getModel"])
    ...mapGetters(["getMsgData", "getSwiperIndex"]),
    /*  SwiperIndex() {
      return this.$refs.mySwiper.$swiper;
    }, */
  },
  /*  watch: {
    getSwiperIndex(newVal) {
      this.swiperOptions.initialSlide = newVal;
    },
  }, */
};
</script>

<style scoped lang="less">
@import "../assets/css/mixin.less";
.box-bottom {
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%) !important;
  background: url(../assets/img/bottom.png);
  height: 127px;
  width: 607px;
  .title {
    color: #99efff;
    font-size: 18px;
    line-height: 52px;
    margin-left: 38px;
  }
  .content {
    margin: auto;
    width: 500px;

    .swiper-container {
      width: 500px !important;
      overflow: hidden;
    }
    .swiper {
      overflow: hidden;
      &-slide {
        // width: 30px; /*设为固定值*/
        // width: auto; /*根据内容调整宽度*/
        img {
          margin: 0 0 10px 10px;
        }
        .text {
          padding: 0 2px;
          font-size: 12px;
          width: 50px;
          height: 20px;
          background: rgba(153, 239, 255, 0.4);
          border: 1px solid rgba(153, 239, 255, 1);
          border-radius: 10px;
          line-height: 20px;
          text-align: center;
          color: #99efff;
        }
      }
    }
  }

  .swiper-button-prev {
    height: 34px;
    width: 22px;
    // background: url(../../assets/img/visual/prop.png);
    transform: scale(0.7, 0.7);
    position: absolute;
    color: #99efff;
    left: -30px;
    top: 26%;
  }
  .swiper-button-next {
    height: 34px;
    width: 22px;
    // background: url(../../assets/img/visual/next.png);
    color: #99efff;
    position: absolute;
    transform: scale(0.7, 0.7);
    right: -22px;
    top: 26%;
  }
}
.swiper-wrapper {
  width: 550px;
}
</style>
