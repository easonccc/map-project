<template>
    <div class="header">
        <div class="title_box">
            <img src="../../assets/img/title.png" alt="" />
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
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.header {
    position: fixed;

    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
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
</style>
