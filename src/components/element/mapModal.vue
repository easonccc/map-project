<template>
    <div class="modal-inner" @click.stop>
        <ul class="modal-head">
            <li @click.stop="switchPannel('info')">设备信息</li>
        </ul>
        <div class="modal-body">
            <div class="pannel">
                <div class="wifi"></div>
            </div>
        </div>
        <div class="modal-foot">
            <div class="btn2">
                <button @click="closeModal">关闭</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "mapModal",
    data: function() {
        return {
            pannelShow: "info",
            count: null
        };
    },
    props: {
        deviceOne: {
            type: Object,
            default: function(value) {
                return value;
            }
        }
    },
    created() {
        console.log(this.deviceOne);
    },
    mounted() {
        this.getWifiPoint(this.deviceOne.id);
    },
    methods: {
        getWifiPoint(id) {
            let url = `${CONFIG.apiIp}sys/scenicHotSpots/finScenicHotResultByID?id=${id}`;
            $http.get(url).then(res => {
                console.log(res.data);
                this.count = res.data.data.count;
            });
        },
        closeModal() {
            this.$emit("closeModal");
        }
    }
};
</script>
<style scoped lang="less">
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
        color: #13c0f0;
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
