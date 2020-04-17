<template>
    <div calss="content">
        <div class="right">
            <div class="message">
                <div class="title">
                    <span>网络社区信息</span>
                </div>
                <div class="msg_content">
                    <table>
                        <tr>
                            <td>社区名称</td>
                            <td>天燕游客中心社区</td>
                        </tr>
                        <tr>
                            <td>位置信息</td>
                            <td class="desc">
                                <div class="roughly">
                                    天燕游客中心社区
                                </div>
                                <div class="j">经:876.37749</div>
                                <span class="w">纬:654.98789</span>
                                <span
                                    ><img
                                        src="../../assets/img/monitoring/location.png"
                                        alt=""
                                /></span>
                            </td>
                        </tr>
                        <tr>
                            <td>网格分类</td>
                            <td><span class="state">游客中心</span></td>
                        </tr>
                        <tr>
                            <td>备注信息</td>
                            <td>无</td>
                        </tr>
                    </table>
                </div>
            </div>
            <!-- 基本状态 -->
            <div class="base_status">
                <div class="top-line">基本状态</div>
                <div class="base_content">
                    <ul>
                        <li>
                            <div class="img">
                                <img
                                    src="../../assets/img/community/population.png"
                                    alt=""
                                />
                            </div>
                            <div class="title">人口</div>
                            <div class="count">2896 人</div>
                        </li>
                        <li>
                            <div class="img">
                                <img
                                    src="../../assets/img/community/area.png"
                                    alt=""
                                />
                            </div>
                            <div class="title">面积</div>
                            <div class="count">289平方公里</div>
                        </li>
                        <li>
                            <div class="img">
                                <img
                                    src="../../assets/img/community/public.png"
                                    alt=""
                                />
                            </div>
                            <div class="title">治安</div>
                            <div class="count">良好</div>
                        </li>
                        <li>
                            <div class="img">
                                <img
                                    src="../../assets/img/community/sanitatio.png"
                                    alt=""
                                />
                            </div>
                            <div class="title">卫生</div>
                            <div class="count">良好</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="start_btn">
                启动预案
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@import "../../assets/css/mixin.less";
@import "../../assets/css/rightView.less";
.content {
    .base_status {
        background-color: rgba(0, 0, 0, 0.6);
        margin-top: 5px;
        .base_content {
            ul {
                padding: 10px 0;
                li {
                    display: flex;
                    height: 30px;
                    align-items: center;
                    .img {
                        margin: 0 12px;
                        img {
                            width: 100%;
                        }
                    }

                    .title {
                        margin-right: 15px;
                    }
                    .count {
                    }
                }
            }
        }
    }
}
</style>
