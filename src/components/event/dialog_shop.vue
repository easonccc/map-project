<template>
    <div class="container">
        <div class="dialog">
            <div class="dialog-header">
                <slot name="header">
                    <span>商业体信息示意图</span>
                    <button type="button" class="btn-close" @click="close">
                        x
                    </button>
                </slot>
            </div>
            <div class="dialog-body">
                <slot name="body">
                    <div class="shop_title">
                        天燕游客集散地购物中心
                    </div>
                    <div class="shop_body">
                        <div class="shop_nav">
                            <ul>
                                <li>1F</li>
                                <li>2F</li>
                                <li>3F</li>
                                <li>4F</li>
                                <li>5F</li>
                                <li>6F</li>
                                <li>7F</li>
                                <li>8F</li>
                            </ul>
                        </div>
                        <div class="shop_content">
                            <img src="../../assets/img/shop.png" alt="" />
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
    .shop_title {
        height: 53px;
        line-height: 53px;
        text-align: center;
        margin-top: 14px;
    }
    .shop_body {
        .shop_nav {
            ul {
                margin-top: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                li {
                    height: 40px;
                    width: 40px;
                    background-color: #3ab4e5;
                    margin-right: 40px;
                    text-align: center;
                    font-size: 24px;
                    line-height: 40px;
                }
            }
        }
        .shop_content {
            height: 645px;
            width: 1236px;
            margin: 62px 28px 70px 42px;
            img {
                width: 100%;
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
    right: 17px;
    top: 0;
    background: transparent;
}
#green {
    color: #02d031;
}
</style>
