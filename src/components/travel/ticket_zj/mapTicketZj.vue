<template>
    <div calss="content">
        <div class="right">
            <div class="message">
                <div class="title">
                    <span>票务管理</span>
                </div>
                <div class="msg_content">
                    <table>
                        <tr>
                            <td>设备名称</td>
                            <td>景区出入口闸机</td>
                        </tr>
                        <tr>
                            <td>位置信息</td>
                            <td class="desc">
                                <div class="roughly">
                                    天生桥景区入口
                                </div>
                                <div class="j">经:876.37749</div>
                                <span class="w">纬:654.98789</span>
                                <span></span>
                            </td>
                        </tr>
                        <tr>
                            <td>设备分类</td>
                            <td>入口闸机</td>
                        </tr>
                        <tr>
                            <td>备注信息</td>
                            <td>无</td>
                        </tr>
                    </table>
                </div>
            </div>
            <!-- 工作状态 -->
            <div class="working">
                <div class="working_title">
                    <div class="status">工作中</div>
                    <div class="shutdown">关机</div>
                </div>
            </div>
            <!-- 出入监测 -->
            <div class="passageway">
                <div class="passageway_title has_bgImg">
                    <span>实时景区出入口监测</span>
                </div>
                <div class="passageway_content">
                    <div class="img">
                        <img
                            src="../../../assets/img/travel/图层 710.png"
                            alt=""
                        />
                    </div>
                    <ul class="passageway_desc">
                        <li>
                            <div class="icon">
                                <img
                                    src="../../../assets/img/travel/闸机 拷贝.png"
                                    alt=""
                                />
                            </div>
                            <div class="text">
                                天生桥A入口: <span>106</span> 人次
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <img
                                    src="../../../assets/img/travel/闸机 拷贝.png"
                                    alt=""
                                />
                            </div>
                            <div class="text">
                                天生桥B入口: <span>128</span> 人次
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <img
                                    src="../../../assets/img/travel/闸机 拷贝 2.png"
                                    alt=""
                                />
                            </div>
                            <div class="text">
                                天生桥A出口: <span>86</span> 人次
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <img
                                    src="../../../assets/img/travel/闸机 拷贝 2.png"
                                    alt=""
                                />
                            </div>
                            <div class="text">
                                天生桥B出口: <span>96</span> 人次
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 承载量预警 -->
            <div class="load">
                <div class="load_title top-line">
                    承载量预警
                </div>
                <div class="load_content">
                    <div class="img">
                        <img
                            src="../../../assets/img/travel/人(1) 拷贝 3.png"
                            alt=""
                        />
                        <img
                            src="../../../assets/img/travel/人(1) 拷贝 3.png"
                            alt=""
                        />
                        <img
                            src="../../../assets/img/travel/人(1) 拷贝 3.png"
                            alt=""
                        />
                    </div>
                    <div class="comfort">景区舒适度: <span>舒适</span></div>
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
@import "../../../assets/css/rightView.less";
.content {
    .passageway {
        margin-top: 5px;
        background: rgba(0, 0, 0, 0.6);
        .passageway_content {
            .img {
                padding: 30px 18px 17px 28px;
            }
            ul.passageway_desc {
                border-top: 1px solid #000;
                li {
                    display: flex;
                    height: 40px;
                    border-bottom: 1px solid #000;
                    align-items: center;
                    padding-left: 16px;
                    .icon {
                        margin-right: 9px;
                    }
                    .text {
                        span {
                            font-size: 20px;
                            color: #99f98c;
                        }
                    }
                }
            }
        }
    }
    .load {
        margin-top: 5px;
        background-color: rgba(0, 0, 0, 0.6);
        .load_content {
            display: flex;
            height: 80px;
            align-items: center;
            padding-left: 15px;
            .img {
                img {
                }
            }
            .comfort {
                margin-left: 32px;
                color: #fff;
                font-size: 12px;
                span {
                    display: inline-block;
                    width: 43px;
                    height: 20px;
                    background-color: #2ab8b7;
                    line-height: 20px;
                    text-align: center;
                    border-radius: 4px;
                }
            }
        }
    }
}
</style>
