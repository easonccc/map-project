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
                        <div class="toilet_left"></div>
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
            border: 1px solid #000;
            margin-top: 30px;
            margin-left: 26px;
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
