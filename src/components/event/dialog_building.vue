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
                    <div class="building_title">
                        天燕小区25栋一单元
                    </div>
                    <div class="building_body">
                        <div class="img">
                            <img
                                src="../../assets/img/building/building.png"
                                alt=""
                            />
                        </div>
                        <!-- 左侧电梯情况 -->
                        <div class="elevator elevator_left">
                            <ul>
                                <li>
                                    <img
                                        src="../../assets/img/building/长箭头.png"
                                        alt=""
                                    />
                                    电梯上行
                                </li>
                                <li>
                                    <img
                                        src="../../assets/img/building/长箭头 拷贝.png"
                                        alt=""
                                    />
                                    电梯下行
                                </li>
                                <li>
                                    <img
                                        src="../../assets/img/building/组 62(2).png"
                                        alt=""
                                    />
                                    电梯门开
                                </li>
                                <li>
                                    <img
                                        src="../../assets/img/building/组 62(3).png"
                                        alt=""
                                    />
                                    电梯门关
                                </li>
                            </ul>
                        </div>
                        <!-- 右侧电梯情况 -->
                        <div class="elevator elevator_right">
                            <ul>
                                <li>
                                    <div class="img_one"></div>
                                    电梯运行
                                </li>
                                <li>
                                    <div class="img_two"></div>
                                    电梯停止
                                </li>
                                <li>
                                    <img
                                        src="../../assets/img/building/组 62(1).png"
                                        alt=""
                                    />
                                    维修中
                                </li>
                                <li>
                                    <img
                                        src="../../assets/img/building/组 62.png"
                                        alt=""
                                    />
                                    电梯故障
                                </li>
                            </ul>
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
    transform: scale(0.9);
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
    .building_title {
        height: 53px;
        line-height: 53px;
        text-align: center;
        margin-top: 14px;
    }
    .building_body {
        .img {
            text-align: center;
            margin-top: 34px;
        }
        .elevator {
            position: absolute;
            bottom: 0;
            height: 200px;
            width: 200px;
            ul {
                li {
                    margin-bottom: 30px;
                    img {
                        margin-right: 15px;
                    }
                }
            }
        }
        .elevator_left {
            left: 50px;
        }
        .elevator_right {
            right: -10px;
            .img_one {
                height: 26px;
                width: 26px;
                background-color: #3ae945;
                display: inline-block;
            }
            .img_two {
                height: 26px;
                width: 26px;
                background-color: #e8a23c;
                display: inline-block;
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
