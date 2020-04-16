<template>
    <!-- 底部导航区域 -->
    <div class="box-bottom">
        <div class="title">
            <!-- {{ swiperData[0].title }} -->
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
            {{ getModel }}
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive, Pagination } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

// 引入js图片
import all from "../../assets/img/visual/all.png";
import surveillance from "../../assets/img/visual/surveillance.png";
import broadcast from "../../assets/img/visual/broadcast.png";
import lamp from "../../assets/img/visual/lamp.png";
import park from "../../assets/img/visual/park.png";
import guide from "../../assets/img/visual/guide.png";
import wifi from "../../assets/img/visual/wifi.png";

import { mapActions, mapGetters } from "vuex";
export default {
    name: "bottom",
    data() {
        return {
            swiperOptions: {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                // spaceBetween: 0,
                // virtual: true,
                // 不循环
                loop: false,
                // observer: true,
                // 显示条数
                slidesPerView: 7
                // observeParents: true
            },
            swiperData: null
            /*  swiperData: [
                {
                    name: "全部",
                    src: all,
                    to: "/slot"
                },
                {
                    name: "监控",
                    src: surveillance,
                    to: "/monitoring"
                },
                {
                    name: "广播",
                    src: broadcast,
                    to: "/broadcasting"
                },
                {
                    name: "照明",
                    src: lamp,
                    to: "/illumination"
                },
                {
                    name: "停车场",
                    src: park,
                    to: "/park"
                },
                {
                    name: "导视",
                    src: guide,
                    to: "/guide"
                },
                {
                    name: "WiFi",
                    src: wifi,
                    to: "/wifi"
                },
                {
                    name: "环境",
                    src: wifi,
                    to: "/environment"
                },
                {
                    name: "垃圾桶信息",
                    src: wifi,
                    to: "/trash"
                },
                {
                    name: "井盖信息",
                    src: wifi,
                    to: "/well"
                },
                {
                    name: "防火监测",
                    src: wifi,
                    to: "/fireproofing"
                },
                {
                    name: "自助报警",
                    src: wifi,
                    to: "/alarm"
                }
            ] */
        };
    },
    components: {
        Swiper,
        SwiperSlide
    },
    computed: {
        // ...mapGetters(["getSot"], ["getModel"])
        ...mapGetters(["getMsgData"])
    },
    created() {
        this.getType();
        console.log("ok");
    },
    methods: {
        // 获取数据
        getType() {
            if (JSON.parse(sessionStorage.getItem("model")).type === "sot") {
                this.swiperData = JSON.parse(
                    sessionStorage.getItem("sot")
                ).data.data[0].swiperData;
                console.log("1111");
            } else if (
                JSON.parse(sessionStorage.getItem("model")).type === "city"
            ) {
                this.swiperData = JSON.parse(
                    sessionStorage.getItem("city")
                ).data.data[0].swiperData;
                console.log("222");
            } else if (
                JSON.parse(sessionStorage.getItem("model")).type === "system"
            ) {
                this.swiperData = JSON.parse(
                    sessionStorage.getItem("system")
                ).data.data[0].swiperData;
                console.log("333");
            }
        },
        // 向父组件commondMap传递当前点击的索引等
        sendMsgToParent: function(index, type) {
            this.$emit("childEvent", { index, type });
        }
    }
};
</script>

<style scoped lang="less">
@import "../../assets/css/mixin.less";
.box-bottom {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%) !important;
    background: url(../../assets/img/bottom.png);
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
        width: 516px;

        .swiper-container {
            width: 516px !important;
            overflow: hidden;
        }
        .swiper {
            overflow: hidden;
            &-slide {
                // width: 30px; /*设为固定值*/
                // width: auto; /*根据内容调整宽度*/
                img {
                    margin: 0 0 10px 5px;
                }
                .text {
                    padding: 0 2px;
                    font-size: 12px;
                    width: 45px;
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
