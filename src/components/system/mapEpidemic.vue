<template>
    <div class="epidemic">
        <div class="epidemic_title">
            <div class="epidemic_title_text">
                疫情列表
                <img src="../../assets/img/visual/组 25.png" alt="" />
            </div>
            <div class="time">
                <div class="time_name">发布时间</div>
                <div class="input">input框</div>
            </div>
        </div>
        <div class="epidemic_content">
            <!-- 正面疫情 -->
            <el-table :data="frontList" border style="width: 100%">
                <el-table-column prop="id" label="序号" width="50">
                </el-table-column>
                <el-table-column prop="time" label="发表时间" width="180">
                </el-table-column>
                <el-table-column prop="type" label="疫情类别"></el-table-column>
                <el-table-column prop="platform" label="疫情类别">
                </el-table-column>
                <el-table-column prop="content" label="内容"> </el-table-column>
                <el-table-column prop="operation" label="操作">
                </el-table-column>
            </el-table>
            <el-table :data="frontList" border style="width: 100%">
                <el-table-column prop="id" label="序号" width="50">
                </el-table-column>
                <el-table-column prop="time" label="发表时间" width="180">
                </el-table-column>
                <el-table-column prop="type" label="疫情类别"></el-table-column>
                <el-table-column prop="platform" label="疫情类别">
                </el-table-column>
                <el-table-column prop="content" label="内容"> </el-table-column>
                <el-table-column prop="operation" label="操作">
                </el-table-column>
            </el-table>
            <el-table :data="frontList" border style="width: 100%">
                <el-table-column prop="id" label="序号" width="50">
                </el-table-column>
                <el-table-column prop="time" label="发表时间" width="180">
                </el-table-column>
                <el-table-column prop="type" label="疫情类别"></el-table-column>
                <el-table-column prop="platform" label="疫情类别">
                </el-table-column>
                <el-table-column prop="content" label="内容"> </el-table-column>
                <el-table-column prop="operation" label="操作">
                </el-table-column>
            </el-table>
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
body .el-table th.gutter {
    display: table-cell !important;
}

.epidemic {
    background: url(../../assets/img/visual/bgc.png);
    background-size: cover;
    height: 100%;
    padding: 200px 50px 0;

    .epidemic_title {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .epidemic_title_text {
            position: absolute;
            top: 50px;
            left: 235px;
            font-size: 24px;
            color: #fff;
            img {
                margin-left: 25px;
            }
        }

        .time {
            .time_name {
            }

            .input {
            }
        }
    }

    .epidemic_content {
        padding-top: 60px;
        width: 1885px;
        margin: auto;
        display: flex;
        justify-content: space-around;
        background: url(../../assets/img/visual/bg_table.png) no-repeat center
            top;
        /deep/.el-table,
        .el-table__expanded-cell {
            background-color: transparent;
        }
        /deep/ .el-table tr {
            background-color: transparent !important;
        }
        /deep/ .el-table--enable-row-transition .el-table__body td,
        .el-table .cell {
            background-color: transparent;
        }
        /deep/.el-table__header-wrapper {
            background-color: transparent !important;
        }
        /deep/ .el-table td,
        .el-table th.is-leaf {
            background-color: transparent !important;
        }
        /deep/ .el-table th {
            background-color: transparent !important;
        }
        /deep/ .el-table td,
        .el-table th {
            padding: 0;
        }
        /deep/.el-table .cell,
        .el-table th div,
        .el-table--border td:first-child .cell,
        .el-table--border th:first-child .cell {
            text-align: center;
        }
        /deep/.el-table .cell,
        .el-table th div,
        .el-table--border td:first-child .cell,
        .el-table--border th:first-child .cell {
            padding: 0;
        }
        .el-table {
            flex: 1;
            margin-left: 10px;
        }
    }
}
</style>
