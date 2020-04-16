<template>
    <div class="container">
        <div class="dialog">
            <div class="dialog-header">
                <slot name="header">
                    <span>楼宇详情透视图</span>
                    <button type="button" class="btn-close" @click="close">
                        x
                    </button>
                </slot>
            </div>
            <div class="dialog-body">
                <slot name="body">
                    <div class="toilet_title">
                        木鱼镇人民路木鱼公园门口公共厕所
                    </div>
                    <div class="toilet_body">
                        <div class="toilet_left">
                            <!-- 左边男厕区域 -->
                            <div class="men">
                                <div class="men_left">
                                    <ul>
                                        <li>M1</li>
                                        <li>M2</li>
                                        <li>M3</li>
                                        <li>M4</li>
                                        <li>M5</li>
                                        <li>M6</li>
                                        <li>M7</li>
                                        <li>M8</li>
                                    </ul>
                                </div>
                                <div class="men_right">
                                    <ul>
                                        <li>M9</li>
                                        <li>M10</li>
                                        <li>M11</li>
                                        <li>M12</li>
                                    </ul>
                                    <div class="washing">
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <div class="icon">
                                        <img
                                            src="../../assets/img/toilet/faucet_left.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div class="men_footer">
                                    <div class="img">
                                        <img
                                            src="../../assets/img/toilet/男厕所.png"
                                            alt=""
                                        />
                                    </div>
                                    男厕
                                </div>
                            </div>
                            <!-- 中间模块--进入 -->
                            <div class="entrance">
                                <div class="s">
                                    <div class="s1">s1</div>
                                    <div class="s2">s2</div>
                                </div>
                                <!-- 中间的 "专用"  -->
                                <div class="use">
                                    <img
                                        src="../../assets/img/toilet/残疾人设施.png"
                                        alt=""
                                    />

                                    <div class="text">
                                        专用
                                    </div>
                                </div>
                                <!-- 水龙头 -->
                                <div class="tap">
                                    <div class="img_first">
                                        <img
                                            src="../../assets/img/toilet/faucet_left.png"
                                            alt=""
                                        />
                                    </div>
                                    <div class="img_seccond">
                                        <img
                                            src="../..//assets/img/toilet/faucet_left.png"
                                            alt=""
                                        />
                                    </div>
                                    <div class="img_third">
                                        <img
                                            src="../..//assets/img/toilet/faucet_left.png"
                                            alt=""
                                        />
                                        <img
                                            src="../..//assets/img/toilet/faucet_left.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <!-- 底部的入口文字 -->
                                <div class="entrance_text">
                                    入口
                                </div>
                            </div>
                            <!-- 右侧女厕模块 -->
                            <div class="women">
                                <div class="women_left">
                                    <ul class="women_box">
                                        <li>F1</li>
                                        <li>F2</li>
                                        <li>F3</li>
                                        <li>F4</li>
                                    </ul>
                                    <div class="washing">
                                        <ul>
                                            <li>
                                                <img
                                                    src="../../assets/img/toilet/faucet_right.png"
                                                    alt=""
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="../../assets/img/toilet/faucet_right.png"
                                                    alt=""
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="../../assets/img/toilet/faucet_right.png"
                                                    alt=""
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="../../assets/img/toilet/faucet_right.png"
                                                    alt=""
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="women_right">
                                    <ul>
                                        <li>F5</li>
                                        <li>F6</li>
                                        <li>F7</li>
                                        <li>F8</li>
                                        <li>F9</li>
                                        <li>F10</li>
                                        <li>F11</li>
                                        <li>F12</li>
                                    </ul>
                                </div>
                                <div class="women_footer">
                                    <div class="img">
                                        <img
                                            src="../../assets/img/toilet/女厕.png"
                                            alt=""
                                        />
                                    </div>
                                    女厕
                                </div>
                            </div>
                        </div>
                        <div class="toilet_right">
                            <div class="time">
                                03年05日 周一 12:15
                            </div>
                            <div class="environment">
                                <div class="t env_box">
                                    <div class="icon">
                                        <img
                                            src="../../assets/img/toilet/温度(1).png"
                                            alt=""
                                        />
                                    </div>
                                    <div class="desc">
                                        <div class="text">环境温度</div>
                                        <div class="num"><span>12</span> ℃</div>
                                    </div>
                                </div>
                                <div class="rank env_box">
                                    <div class="icon">
                                        <img
                                            src="../../assets/img/toilet/打扫.png"
                                            alt=""
                                        />
                                    </div>
                                    <div class="desc">
                                        <div class="text">卫生评级</div>
                                        <div class="num"><span>优</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="sweep">
                                <div class="sweep_title">
                                    最近打扫记录
                                </div>
                                <div class="sweep_list">
                                    <ul>
                                        <li>
                                            <div class="name">刘雪丽</div>
                                            <div class="sweep_time">
                                                2020年03月04日
                                                <span>18:56</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="name">刘雪丽</div>
                                            <div class="sweep_time">
                                                2020年03月04日
                                                <span>18:56</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="name">刘雪丽</div>
                                            <div class="sweep_time">
                                                2020年03月04日
                                                <span>18:56</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="name">刘雪丽</div>
                                            <div class="sweep_time">
                                                2020年03月04日
                                                <span>18:56</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="name">刘雪丽</div>
                                            <div class="sweep_time">
                                                2020年03月04日
                                                <span>18:56</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <!-- 剩余时间 -->
                                <div class="sweep_footer">
                                    <div class="remaining_title">
                                        距离下次维护时间还有:
                                    </div>
                                    <div class="remaining_time">
                                        6小时56分钟
                                    </div>
                                </div>
                                <!-- 剩余厕所数 -->
                                <div class="quantity">
                                    <div class="quantity_com">
                                        <div class="quantity_text">
                                            男厕剩余:
                                        </div>
                                        <div class="quantity_num">6</div>
                                    </div>
                                    <div class="quantity_com">
                                        <div
                                            class="quantity_text"
                                            id="women_quantity"
                                        >
                                            女厕剩余:
                                        </div>
                                        <div class="quantity_num">6</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 客流量区域 -->
                        <div class="toilet_footer">
                            <div class="people">
                                <div class="people_text men_text">今日客流</div>
                                <div class="people_num men_num">668</div>
                            </div>
                            <div class="people">
                                <div class="people_text women_text">
                                    今日客流
                                </div>
                                <div class="people_num women_num">542</div>
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
    name: "dialog3",
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
    background-size: cover;
    width: 1330px;
    height: 961px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.dialog-header,
.dialog-footer {
    display: flex;
}
.dialog-header {
    position: relative;
    color: #fff;
    padding-left: 5px;
    span {
        margin: 23px 0 0 28px;
    }
}
.dialog-body {
    color: #fff;
    position: relative;
    padding: 0 24px;
    .toilet_title {
        height: 53px;
        line-height: 53px;
        text-align: center;
        margin-top: 14px;
    }
    .toilet_body {
        display: flex;
        position: relative;
        .toilet_left {
            flex: 1;
            height: 618px;
            border: 1px solid #6793a4;
            border-bottom: none;
            margin-top: 30px;
            margin-left: 26px;
            display: flex;
            .men {
                position: relative;
                width: 280px;
                display: flex;
                justify-content: space-between;
                .men_left,
                .men_right {
                    ul {
                        li {
                            height: 60px;
                            width: 60px;
                            font-size: 24px;
                            background-color: #e1342a;
                            margin-bottom: 5px;
                            line-height: 60px;
                            text-align: center;
                        }
                    }
                }
                .men_right {
                    height: 510px;
                    border-right: 1px solid #6793a4;
                    .washing {
                        margin-top: 10px;
                        display: flex;
                        flex-direction: row-reverse;
                        ul {
                            width: 22px;
                            li {
                                width: 22px;
                                height: 60px;
                                background-color: #38b6e7;
                            }
                        }
                    }
                    .icon {
                        text-align: right;
                        margin-top: 13px;
                    }
                }
                .men_footer {
                    font-size: 30px;
                    width: 280px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-bottom: 1px solid #6793a4;
                    color: #45b8ba;
                    position: absolute;
                    bottom: 0;
                    padding-bottom: 24px;
                    left: 0;
                    .img {
                        margin-right: 15px;
                    }
                }
            }
            .entrance {
                position: relative;
                width: 208px;
                .s {
                    display: flex;
                    justify-content: space-between;
                    div {
                        height: 60px;
                        width: 60px;
                        background-color: #11e64e;
                        font-size: 24px;
                        text-align: center;
                        line-height: 60px;
                    }
                }
                .use {
                    display: flex;
                    font-size: 30px;
                    justify-content: center;
                    width: 100%;
                    margin-top: 45px;
                    .text {
                        padding-top: 2px;
                        margin-left: 11px;
                    }
                }
                .tap {
                    display: flex;
                    flex-direction: row-reverse;
                    flex-wrap: wrap;
                    div {
                        width: 128px;
                    }
                    .img_first {
                        padding: 24px 0 6px 0;
                        display: flex;
                        justify-content: center;
                        border-bottom: 1px solid #349dc9;
                    }
                    .img_seccond {
                        border-bottom: 1px solid #349dc9;
                        display: flex;
                        flex-direction: row-reverse;
                        align-items: center;
                        padding: 45px 7px 38px 0;
                    }
                    .img_third {
                        margin-top: 28px;
                        display: flex;
                        justify-content: space-around;
                    }
                }
                .entrance_text {
                    font-size: 30px;
                    width: 280px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #45b8ba;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                }
            }
            .women {
                display: flex;
                position: relative;
                justify-content: space-between;
                width: 282px;
                .women_left {
                    height: 510px;
                    border-left: 1px solid #6793a4;
                    ul.women_box {
                        li {
                            height: 60px;
                            width: 60px;
                            font-size: 24px;
                            background-color: #e1342a;
                            margin-bottom: 5px;
                            line-height: 60px;
                            text-align: center;
                        }
                    }
                    .washing {
                        margin-top: 40px;
                        ul {
                            li {
                                margin: 0 0 30px 7px;
                            }
                        }
                    }
                }
                .women_right {
                    ul {
                        li {
                            height: 60px;
                            width: 60px;
                            background-color: #0fe84d;
                            margin-bottom: 5px;
                            line-height: 60px;
                            text-align: center;
                            font-size: 24px;
                        }
                    }
                }
                .women_footer {
                    font-size: 30px;
                    width: 280px;
                    height: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-bottom: 1px solid #6793a4;
                    color: #d620e1;
                    position: absolute;
                    bottom: 0;
                    padding-bottom: 24px;
                    left: 0;
                    .img {
                        margin-right: 15px;
                    }
                }
            }
        }
        .toilet_right {
            width: 432px;
            margin: 30px 30px 0;
            .time {
                height: 64px;
                width: 432px;
                border: 1px solid #6e8f9f;
                color: rgba(133, 219, 255, 1);
                font-size: 30px;
                line-height: 64px;
                padding: 0 40px;
                box-sizing: border-box;
                background-color: #000002;
            }
            .environment {
                height: 64px;
                margin-top: 20px;
                display: flex;
                .env_box {
                    width: 268px;
                    display: flex;
                    &:first-child {
                        margin-right: 24px;
                    }
                    .icon {
                        width: 64px;
                        height: 64px;
                        background-color: #38b8ec;
                        text-align: center;
                        padding-top: 16px;
                        box-sizing: border-box;
                    }
                    .desc {
                        padding: 6px 0;
                        width: 140px;
                        background-color: #093e4a;
                        text-align: center;
                        font-size: 16px;
                        .num {
                            margin-top: 3px;
                            span {
                                font-size: 26px;
                            }
                        }
                    }
                }
            }
            .sweep {
                margin-top: 30px;
                .sweep_title {
                }

                .sweep_list {
                    padding-top: 9px;
                    width: 432px;
                    ul {
                        li {
                            height: 40px;
                            margin-bottom: 4px;
                            background-color: #093e4c;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 0 15px;
                            .name {
                            }

                            .time {
                                span {
                                }
                            }
                        }
                    }
                }
                .sweep_footer {
                    margin-top: 30px;
                    .remaining_title {
                        color: #69a0bc;
                    }
                    .remaining_time {
                        font-size: 26px;
                        margin-top: 30px;
                    }
                }
                .quantity {
                    margin-top: 30px;
                    font-size: 16px;
                    display: flex;
                    justify-content: space-between;
                    .quantity_com {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        height: 64px;
                        width: 201px;
                        text-align: center;
                        line-height: 64px;
                        #women_quantity {
                            color: #923eb2;
                        }
                        .quantity_text {
                            height: 64px;
                            width: 121px;
                            background-color: #093e4a;
                            color: #27a8af;
                        }
                        .quantity_num {
                            height: 64px;
                            background-color: #3ab5e9;
                            width: 80px;
                            font-size: 30px;
                        }
                    }
                }
            }
        }
        .toilet_footer {
            position: absolute;
            bottom: -140px;
            left: 0;
            padding: 0 126px;
            display: flex;
            .people {
                width: 480px;
                height: 111px;
                font-size: 26px;
                text-align: center;
                border: 1px solid #8e289b;
                line-height: 111px;
                display: flex;
                &:first-child {
                    margin-right: 114px;
                    border: 1px solid #2d9ca1;
                }
                .people_text {
                    width: 285px;
                }
                .men_text {
                    background-color: #0a5559;
                }
                .women_text {
                    background-color: #43094a;
                }
                .people_num {
                    width: 195px;
                    font-size: 48px;
                }
                .men_num {
                    background-color: #1fdae2;
                }
                .women_num {
                    background-color: #d421e1;
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
    position: absolute;
    right: 40px;
    top: 18px;
    background: transparent;
}
#green {
    color: #02d031;
}
</style>
