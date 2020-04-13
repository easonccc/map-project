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
                <slot name="body"> </slot>
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
        margin: 10px 0 0 5px;
    }
}
.dialog-body {
    color: #fff;
    position: relative;
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
