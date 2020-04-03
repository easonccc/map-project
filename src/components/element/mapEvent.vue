<template>
    <div class="modal-inner" @click.stop>
        <ul class="modal-head">
            <li @click.stop='switchPannel("info")'>事件信息</li>
        </ul>
        <div class="modal-body">
            <div class="pannel">
                <div class="wifi">
                    <table>
                        <tbody>
                            <tr>
                                <td>事件标题</td>
                                <td>{{deviceOne.name}}</td>
                            </tr>
                            <tr>
                                <td>处理状态</td>
                                <td>已处理</td>
                            </tr>
                            <tr>
                                <td>坐标</td>
                                <td>{{deviceOne.location[0]+' , '+deviceOne.location[1]}}</td>
                            </tr>
                            <tr>
                                <td>事件ID</td>
                                <td>{{deviceOne.id}}</td>
                            </tr>
                            <tr>
                                <td>事件描述</td>
                                <td>
                                    <span>
                                        {{deviceOne.messages}}
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>回复</td>
                                <td>事件回复111</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="modal-foot">
            <el-button class="pull-right" size="mini" @click='closeModal'>关闭</el-button>
            <el-button class="pull-right" style="margin-right:10px" type="primary" size="mini" @click="$router.push({name:'event2',query:{id:deviceOne.id}})">去处理</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'mapModal',
        data: function () {
            return {
                pannelShow: 'info',
                count: null,
            }
        },
        props: {
            deviceOne: {
                type: Object,
                default: function (value) {
                    return value
                }
            }
        },
        methods: {
            closeModal() {
                this.$emit('closeModal')
            }
        }
    }
</script>
<style scoped lang='less'>
    .modal {
        &-head {
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #ddd;
            display: flex;

            li {
                box-sizing: border-box;
                flex: 1;
                text-align: center;
                color: #999;
                border-right: 1px solid #ddd;
                cursor: pointer;
                font-size: 12px;

                &.active {
                    color: #333;
                }

                &:last-child {
                    border-right: none;
                }
            }
        }

        &-body {
            min-height: 260px;
        }

        &-foot {
            padding: 0 15px;
            height: 40px;
        }
    }

    .wifi {
        padding: 10px;

        table {
            color: #13C0F0;
            font-size: 12px;
            padding: 10px;
            width: 100%;

            tr {
                line-height: 40px;

                td {
                    padding-left: 15px;
                    border: 1px solid #ccc;
                    color: #333;

                    &:first-child {
                        color: #878787;
                        width: 120px;
                    }
                }
            }
        }
    }

    .btn2 {
        box-sizing: border-box;
        height: 30px;
        width: 50%;
        float: right;
        text-align: center;

        button {
            padding: 0;
            line-height: 30px;
            width: 100%;
            height: 100%;
            background-color: #00beed;
            border: none;
            color: #fff;
        }
    }

</style>
