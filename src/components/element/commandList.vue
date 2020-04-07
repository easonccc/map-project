<template>
    <div>
        <div class="box-left">
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
                                src="../../assets/img/control05b.png"
                            />
                            <div class="title">
                                <div v-if="item.name === '设备总数'">
                                    {{ item.name }}
                                </div>
                                <div v-else>
                                    {{ item.name }}:<span class="red">{{
                                        item.num
                                    }}</span
                                    >个
                                </div>
                            </div>
                            <div class="detail">
                                <div v-if="item.name === '设备总数'">
                                    <ul class="show_num">
                                        <li>
                                            当前展示{{ item.name }}:<span
                                                class="red"
                                                >{{ item.num }}</span
                                            >个
                                        </li>
                                        <li>
                                            <i
                                                class="el-icon-d-arrow-right"
                                            ></i>
                                            <span class="green">在线</span
                                            >设备总数:<span class="green">{{
                                                item.online
                                            }}</span
                                            >个
                                        </li>
                                        <li>
                                            <i
                                                class="el-icon-d-arrow-right"
                                            ></i>
                                            <span class="red">离线</span
                                            >设备总数:<span class="red">{{
                                                item.outline
                                            }}</span
                                            >个
                                        </li>
                                        <li>
                                            <i
                                                class="el-icon-d-arrow-right"
                                            ></i>
                                            <span class="purple">故障</span
                                            >设备总数:<span class="purple">{{
                                                item.malfunction
                                            }}</span
                                            >个
                                        </li>
                                    </ul>
                                </div>
                                <div v-else-if="item.name === '视频监控设备'">
                                    <ul class="show_num">
                                        <li>
                                            高清摄像头枪机:<span class="red">{{
                                                item.heigh
                                            }}</span
                                            >个
                                        </li>
                                        <li>
                                            人脸识别球机:<span class="red">{{
                                                item.portrait
                                            }}</span
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
        <div class="box-bottom">
            <div class="title">
                物联管理
            </div>
            <div class="content">
                <!--  <ul>
                        <li>
                            <img src="../../assets/img/visual/all.png" alt="" />
                            <div class="text">
                                全部
                            </div>
                        </li>
                    </ul> -->
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide>
                        <img src="../../assets/img/visual/all.png" alt="" />
                        <div class="text">全部</div>
                    </swiper-slide>
                    <swiper-slide>
                        <img
                            src="../../assets/img/visual/surveillance.png"
                            alt=""
                        />
                        <div class="text">监控</div>
                    </swiper-slide>
                    <swiper-slide>
                        <img
                            src="../../assets/img/visual/broadcast.png"
                            alt=""
                        />
                        <div class="text">广播</div></swiper-slide
                    >
                    <swiper-slide>
                        <img src="../../assets/img/visual/lamp.png" alt="" />
                        <div class="text">照明</div></swiper-slide
                    >
                    <swiper-slide>
                        <img src="../../assets/img/visual/park.png" alt="" />
                        <div class="text">停车场</div>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../../assets/img/visual/guide.png" alt="" />
                        <div class="text">导视</div>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../../assets/img/visual/wifi.png" alt="" />
                        <div class="text">WIFI</div>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../../assets/img/visual/wifi.png" alt="" />
                        <div class="text">WIFI</div>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../../assets/img/visual/wifi.png" alt="" />
                        <div class="text">WIFI</div>
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../../assets/img/visual/wifi.png" alt="" />
                        <div class="text">WIFI</div>
                    </swiper-slide>
                    <!-- 如果需要分页器 -->
                    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
                </swiper>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

                <!--  <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div
                            v-for="(el, index) in arrItem"
                            :key="index"
                            class="swiper-slide"
                        >
                            <img class="img" :src="el.imgUrl" />
                        </div>
                    </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive, Pagination } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
// import park from "../../assets/img/visual/guide.png";
export default {
    name: "commandList",
    data() {
        return {
            swiperOptions: {
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                // spaceBetween: 0,
                // virtual: true,
                loop: false,
                // observer: true,
                slidesPerView: 7
                // observeParents: true
                // Some Swiper option/callback...
            }
            /* arrItem: [
                {
                    name: "swiperSlide5",
                    imgUrl: park
                },
                {
                    name: "swiperSlide1",
                    imgUrl: park
                },
                {
                    name: "swiperSlide51",
                    imgUrl: park
                },
                {
                    name: "swiperSlide1111115",
                    imgUrl: park
                }
            ] */
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
        console.log(this.device);
    },
    methods: {
        sendMsgToParent: function(index, type) {
            this.$emit("childEvent", { index, type });
        }
    },
    components: {
        Swiper,
        SwiperSlide
    }
};
</script>

<style scoped lang="less">
@import "../../assets/css/mixin.less";

.box-left {
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 134px;
    width: 297px;
    height: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.3) !important;
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
