<template>
    <div class="box-left">
        <div class="device">
            <ul class="tab">
                <li>{{ title }}</li>
            </ul>
            <div class="list">
                <ul class="list-inner">
                    <li
                        class="list-item"
                        v-for="(item, index) in device"
                        :key="index"
                        @click.stop="sendMsgToParent(index, item.type)"
                        :class="index == itemSelect && 'active'"
                    >
                        <img
                            v-if="item.type == 'wifi'"
                            class="pull-right"
                            src="../../assets/img/control02b.png"
                        />
                        <img
                            v-else-if="item.type === 'broad'"
                            class="pull-right"
                            src="../../assets/img/control04b.png"
                        />
                        <img
                            v-else-if="item.type === 'car'"
                            class="pull-right"
                            src="../../assets/img/control06b.png"
                        />
                        <img
                            v-else-if="item.type === 'video'"
                            class="pull-right"
                            src="../../assets/img/control05b.png"
                        />
                        <img
                            v-else-if="type === 'light'"
                            class="pull-right"
                            src="../../assets/img/control03b.png"
                        />
                        <h5>{{ index + 1 + "." + item.name }}</h5>
                        <p>
                            坐标 :
                            {{ item.location[0] + " , " + item.location[1] }}
                        </p>
                        <p>设备ID : {{ item.id }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "commandList",
    props: {
        device: {
            type: Array,
            default: []
        },
        title: {
            type: String,
            default: "设备总数"
        },
        itemSelect: {
            type: Number
        }
    },
    methods: {
        sendMsgToParent: function(index, type) {
            this.$emit("childEvent", { index, type });
        }
    }
};
</script>

<style scoped lang="less">
@import "../../assets/css/mixin.less";

.box-left {
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 134px;
    width: 297px;
    height: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.3) !important;
}
.device {
    background: rgba(0, 0, 0, 0.3) !important;
    display: flex;
    flex-direction: column;
    height: 100%;
    border: 1px solid #ddd;
}
.tab {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    border-bottom: 2px solid #e2e8ea;
    li {
        flex: 1;
        line-height: 50px;
        color: #fff;
        margin-left: 4px;
    }
}
.list {
    margin-top: 10px;
    flex: 1;
    overflow-y: auto;
    .scroll-bar(#ddd);
    color: #fff;
    &-inner {
        padding-left: 14px;
        padding-right: 8px;
    }
    &-item {
        padding: 10px;
        text-align: left;
        font-size: 12px;
        border: 1px solid #5da8e2;
        border-radius: 2px;
        margin-bottom: 10px;
        cursor: pointer;
        &.active {
            background-color: #fff;
            color: #014982;
        }
        img {
            width: 18px;
            height: 18px;
        }
        h5 {
            margin-bottom: 8px;
        }
        p {
            line-height: 20px;
            margin-left: 15px;
        }
    }
}
</style>
