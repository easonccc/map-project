<template>
    <div class="modal-inner" @click.stop>
        <ul class="modal-head">
            <li :class="pannelShow==='car'&&'active'"  @click.stop='switchPannel("car")'>气象信息</li>
            <li :class="pannelShow==='info'&&'active'" @click.stop='switchPannel("info")'>设备信息</li>
        </ul>
        <div class="modal-body">
            <div v-show="pannelShow==='car'" class="pannel1">
                <table>
                    <tbody>
                        <tr>
                            <td>气温</td>
                            <td>2℃</td>
                        </tr>
                        <tr>
                            <td>水温</td>
                            <td>10℃</td>
                        </tr>
                         <tr>
                            <td>PM2.5</td>
                            <td>85ug/m3</td>
                        </tr>
                         <tr>
                            <td colspan="2" style="text-align:center">气象</td>
                        </tr>
                        <tr>
                            <td>风速</td>
                            <td>12m/s </td>
                        </tr>
                        <tr>
                            <td>风向</td>
                            <td>8方位</td>
                        </tr>
                        <tr>
                            <td>风速</td>
                            <td>12m/s </td>
                        </tr>
                        <tr>
                            <td>大气温度</td>
                            <td>24℃</td>
                        </tr>
                        <tr>
                            <td>大气湿度</td>
                            <td>25%RH</td>
                        </tr>
                        <tr>
                            <td>大气压力</td>
                            <td>102hpa</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-show="pannelShow==='info'" class="pannel">
                <table>
                    <tbody>
                        <tr>
                            <td>名称</td>
                            <td>{{deviceOne.name}}</td>
                        </tr>
                        <tr>
                            <td>坐标</td>
                            <td>{{deviceOne.location[0]+' , '+deviceOne.location[1]}}</td>
                        </tr>
                        <tr>
                            <td>设备ID</td>
                            <td>{{deviceOne.id}}</td>
                        </tr>
                        <tr>
                            <td>运行状态</td>
                            <td>正常</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>


<script>
    export default{
        name:'mapWeather',
        data:function(){
            return {
                pannelShow:'car'
            }
        },
        props:{
            deviceOne:{
                type:Object,
                default:function(){
                    return {
                        name:'同里湖山庄Wi-Fi',
                        location:[120.735958,31.157528],
                        id:201821231,
                        type:'wifi'
                    }
                }
            }
        },
        mounted(){
            console.log(this.deviceOne);
        },
        methods:{
            switchPannel:function(type){
                this.pannelShow=type;
            }
        }
    }
</script>

<style scoped lang='less'>
    @import url("../../assets/css/mixin.less");
    .modal{
        &-head{
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #ddd;
            li{
                box-sizing: border-box;
                float: left;
                width: 50%;
                text-align: center;
                color:#999;
                border-right: 1px solid #ddd;
                cursor: pointer;
                font-size: 12px;
                &.active{
                    color:#333;
                }
                &:last-child{
                    border-right: none;
                }
            }
        }
    }
    .pannel1{
        padding: 15px;
        table{
            color: #13C0F0;
            font-size: 12px;
            padding: 10px;
            width: 100%;
            tr{
                line-height: 30px;
                td{
                    padding-left: 15px;
                    border: 1px solid #ccc;
                    color:#333;
                    &:first-child{
                        color:#878787;
                        width: 120px;
                    }
                }
            }
        }
    }
     .pannel{
        padding: 15px;
        table{
            color: #13C0F0;
            font-size: 12px;
            padding: 10px;
            width: 100%;
            tr{
                line-height: 40px;
                td{
                    padding-left: 15px;
                    border: 1px solid #ccc;
                    color:#333;
                    &:first-child{
                        color:#878787;
                        width: 120px;
                    }
                }
            }
        }
    }

</style>
