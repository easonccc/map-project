<template>
    <div class="home">
        <div class="close">
            <img src="../assets/img/组 21 拷贝.png" alt="" />
        </div>
        <div class="header">
            <div class="title_box">
                <img src="../assets/img/title.png" alt="" />
                <div class="time_box">
                    <div class="hour">16:24</div>
                    <div class="date">
                        星期一
                        <span>2020/02/20</span>
                    </div>
                </div>
                <div class="weather_box">
                    <span>12</span>
                    <span>多云</span>
                </div>
            </div>
        </div>
        <div class="body">
            <ul>
                <li @click="goSlot">
                    <span>物联设备</span>
                    <img src="../assets/img/组 3(1).png" alt="" />
                </li>
                <li @click="goCity">
                    <span>智慧城市</span>
                    <img src="../assets/img/组 3(2).png" alt="" />
                </li>
                <li @click="goTravel">
                    <span>智慧文旅</span>
                    <img src="../assets/img/组 3(3).png" alt="" />
                </li>
                <li>
                    <span>智慧交通</span>
                    <img src="../assets/img/组 3(4).png" alt="" />
                </li>
                <li>
                    <span>智慧农业</span>
                    <img src="../assets/img/组 3(5).png" alt="" />
                </li>
                <li @click="goSystem">
                    <span>系统应用</span>
                    <img src="../assets/img/组 3(6).png" alt="" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Home",
    methods: {
        goSlot() {
            this.$router.push({
                path: "/slot",
                query: {
                    type: "lot"
                }
            });
        },
        goCity() {
            this.$router.push({
                path: "/city",
                query: {
                    type: "city"
                }
            });
        },
        goSystem() {
            this.$router.push({
                path: "/system",
                query: {
                    type: "system"
                }
            });
        },
        goTravel() {
            this.$router.push({
                path: "/travel",
                query: {
                    type: "travel"
                }
            });
        }
    }
};
</script>
<style lang="less" scoped>
.home {
    height: 100%;
    width: 100%;
    background-image: url(../assets/img/bgc-.png);
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    position: relative;
    .close {
        position: absolute;
        right: 0;
        top: 0;
    }

    .header {
        width: 100%;
        margin-top: 40px;
        text-align: center;
        .title_box {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            img {
            }

            .time_box {
                position: absolute;
                height: 55px;
                text-align: center;
                left: -200px;
                top: 0;
                .hour {
                    float: left;
                    font-size: 42px;
                    width: 95px;
                    font-family: RTWS ShangGothic G0v1;
                    font-weight: bold;
                    color: rgba(153, 239, 255, 1);
                }

                .date {
                    position: absolute;
                    left: 120px;
                    top: 12px;
                    font-size: 14px;

                    font-family: RTWS ShangGothic G0v1;
                    font-weight: bold;
                    color: rgba(19, 162, 189, 1);
                    span {
                        font-size: 12px;
                        display: block;
                    }
                }
            }

            .weather_box {
                position: absolute;
                height: 55px;
                text-align: center;
                right: -90px;
                top: 0;
                span {
                }
            }
        }
    }
    .body {
        text-align: center;
        padding-top: 252px;
        position: relative;
        ul {
            margin: 0;
            padding: 0;
            min-width: 1425px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            li {
                // max-width: 325px;
                // min-width: 60px;
                margin-left: 35px;
                margin-bottom: 35px;
                float: left;
                position: relative;
                img {
                    width: 100%;
                }
                span {
                    position: absolute;
                    // width: 188px;
                    // height: 48px;
                    font-size: 48px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: rgba(153, 239, 255, 1);
                    // line-height: 30px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }
}
</style>
