<template>
    <div class="epidemic">
        <div class="epidemic_title">
            <span>疫情列表</span>
            <div class="time">
                <div class="time_name">发布时间</div>
                <div class="input">input框</div>
            </div>
        </div>
        <div class="epidemic_content">
            <!-- 正面疫情 -->
            <div class="front">
                <div class="front_title">
                    正面疫情
                    <img
                        src="../../assets/img/epidemic/组 25 拷贝 5.png"
                        alt=""
                    />
                </div>
                <div class="front_content">
                    <div>
                        <table>
                            <tr>
                                <td>序号</td>
                                <td>发布时间</td>
                                <td>疫情类别</td>
                                <td>平台</td>
                                <td>内容</td>
                                <td>操作</td>
                            </tr>
                            <tr v-for="(item, index) in frontList" :key="index">
                                <td>{{ item.id }}</td>
                                <td>{{ item.time }}</td>
                                <td>{{ item.type }}</td>
                                <td>{{ item.platform }}</td>
                                <td>{{ item.content }}</td>
                                <td>{{ item.operation }}</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <td>序号</td>
                                <td>发布时间</td>
                                <td>疫情类别</td>
                                <td>平台</td>
                                <td>内容</td>
                                <td>操作</td>
                            </tr>
                            <tr v-for="(item, index) in frontList" :key="index">
                                <td>{{ item.id }}</td>
                                <td>{{ item.time }}</td>
                                <td>{{ item.type }}</td>
                                <td>{{ item.platform }}</td>
                                <td>{{ item.content }}</td>
                                <td>{{ item.operation }}</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <td>序号</td>
                                <td>发布时间</td>
                                <td>疫情类别</td>
                                <td>平台</td>
                                <td>内容</td>
                                <td>操作</td>
                            </tr>
                            <tr v-for="(item, index) in frontList" :key="index">
                                <td>{{ item.id }}</td>
                                <td>{{ item.time }}</td>
                                <td>{{ item.type }}</td>
                                <td>{{ item.platform }}</td>
                                <td>{{ item.content }}</td>
                                <td>{{ item.operation }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            frontList: [
                {
                    id: "01",
                    time: "2020-06-26 12:56",
                    type: "正面",
                    platform: "微信",
                    content: "神农架天燕滑雪场比…",
                    operation: "链接"
                },
                {
                    id: "02",
                    time: "2020-06-26 12:56",
                    type: "正面",
                    platform: "微信",
                    content: "神农架天燕滑雪场比…",
                    operation: "链接"
                },
                {
                    id: "03",
                    time: "2020-06-26 12:56",
                    type: "正面",
                    platform: "微信",
                    content: "神农架天燕滑雪场比…",
                    operation: "链接"
                },
                {
                    id: "04",
                    time: "2020-06-26 12:56",
                    type: "正面",
                    platform: "微信",
                    content: "神农架天燕滑雪场比…",
                    operation: "链接"
                },
                {
                    id: "05",
                    time: "2020-06-26 12:56",
                    type: "正面",
                    platform: "微信",
                    content: "神农架天燕滑雪场比…",
                    operation: "链接"
                },
                {
                    id: "06",
                    time: "2020-06-26 12:56",
                    type: "正面",
                    platform: "微信",
                    content: "神农架天燕滑雪场比…",
                    operation: "链接"
                },
                {
                    id: "07",
                    time: "2020-06-26 12:56",
                    type: "正面",
                    platform: "微信",
                    content: "神农架天燕滑雪场比…",
                    operation: "链接"
                },
                {
                    id: "08",
                    time: "2020-06-26 12:56",
                    type: "正面",
                    platform: "微信",
                    content: "神农架天燕滑雪场比…",
                    operation: "链接"
                },
                {
                    id: "09",
                    time: "2020-06-26 12:56",
                    type: "正面",
                    platform: "微信",
                    content: "神农架天燕滑雪场比…",
                    operation: "链接"
                },
                {
                    id: "10",
                    time: "2020-06-26 12:56",
                    type: "正面",
                    platform: "微信",
                    content: "神农架天燕滑雪场比…",
                    operation: "链接"
                },
                {
                    id: "11",
                    time: "2020-06-26 12:56",
                    type: "正面",
                    platform: "微信",
                    content: "神农架天燕滑雪场比…",
                    operation: "链接"
                },
                {
                    id: "12",
                    time: "2020-06-26 12:56",
                    type: "正面",
                    platform: "微信",
                    content: "神农架天燕滑雪场比…",
                    operation: "链接"
                }
            ]
        };
    }
};
</script>

<style lang="less" scoped>
.epidemic {
    margin-top: 101px;
    padding: 0 50px;
    .epidemic_title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        span {
        }

        .time {
            .time_name {
            }

            .input {
            }
        }
    }

    .epidemic_content {
        display: flex;
        flex-direction: row;
        .front {
            .front_title {
                img {
                }
            }

            .front_content {
                width: 100%;
                display: flex;
                flex-direction: row;
                div {
                    flex: 1;
                    margin-right: 10px;
                    table {
                        tr {
                            height: 40px;
                            line-height: 40px;
                            border: 1px solid #000;
                            td {
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
