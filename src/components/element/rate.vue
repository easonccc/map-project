<template>
    <div class="box-body">
        <div class="item" >
          <div class="item_up">
              <img src="../../assets/img/type01.png">餐饮类排名
          </div>
           <div class="item_down">
               <table class="table-rem">
                   <thead>
                   <tr>
                       <th>排名</th>
                       <th>名称</th>
                       <th>评分</th>
                   </tr>
                   </thead>
                   <tbody >
                   <tr v-for="(v,i) in bindData[0]" :key="i" >
                       <td > {{i+1}}</td>
                       <td style="text-align: left"> {{v.name}}</td>
                       <td> <el-rate v-model="v.rate" disabled></el-rate></td>
                   </tr>

                   </tbody>
               </table>
           </div>
        </div>

        <div class="item" >
            <div class="item_up">
                <img src="../../assets/img/type01.png">住宿类排名
            </div>
            <div class="item_down">
                <table class="table-rem">
                    <thead>
                    <tr>
                        <th>排名</th>
                        <th>名称</th>
                        <th>评分</th>
                    </tr>
                    </thead>
                    <tbody >
                    <tr v-for="(v,i) in bindData[1]" :key="i" >
                        <td > {{i+1}}</td>
                        <td style="text-align: left"> {{v.name}}</td>
                        <td> <el-rate v-model="v.rate" disabled></el-rate></td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>

        <div class="item" >
            <div class="item_up">
                <img src="../../assets/img/type01.png">交通类排名
            </div>
            <div class="item_down">
                <table class="table-rem">
                    <thead>
                    <tr>
                        <th>排名</th>
                        <th>名称</th>
                        <th>评分</th>
                    </tr>
                    </thead>
                    <tbody >
                    <tr v-for="(v,i) in bindData[2]" :key="i" >
                        <td > {{i+1}}</td>
                        <td style="text-align: left"> {{v.name}}</td>
                        <td> <el-rate v-model="v.rate" disabled></el-rate></td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>

        <div class="item" >
            <div class="item_up">
                <img src="../../assets/img/type01.png">景区类排名
            </div>
            <div class="item_down">
                <table class="table-rem">
                    <thead>
                    <tr>
                        <th>排名</th>
                        <th>名称</th>
                        <th>评分</th>
                    </tr>
                    </thead>
                    <tbody >
                    <tr v-for="(v,i) in bindData[3]" :key="i" >
                        <td > {{i+1}}</td>
                        <td style="text-align: left"> {{v.name}}</td>
                        <td> <el-rate v-model="v.rate" disabled></el-rate></td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>

        <div class="item" >
            <div class="item_up">
                <img src="../../assets/img/type01.png">购物类排名
            </div>
            <div class="item_down">
                <table class="table-rem">
                    <thead>
                    <tr>
                        <th>排名</th>
                        <th>名称</th>
                        <th>评分</th>
                    </tr>
                    </thead>
                    <tbody >
                    <tr v-for="(v,i) in bindData[4]" :key="i" >
                        <td > {{i+1}}</td>
                        <td style="text-align: left"> {{v.name}}</td>
                        <td> <el-rate v-model="v.rate" disabled></el-rate></td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>

        <div class="item" >
            <div class="item_up">
                <img src="../../assets/img/type01.png">娱乐类排名
            </div>
            <div class="item_down">
                <table class="table-rem">
                    <thead>
                    <tr>
                        <th>排名</th>
                        <th>名称</th>
                        <th>评分</th>
                    </tr>
                    </thead>
                    <tbody >
                    <tr v-for="(v,i) in bindData[5]" :key="i" >
                        <td > {{i+1}}</td>
                        <td style="text-align: left"> {{v.name}}</td>
                        <td> <el-rate v-model="v.rate" disabled></el-rate></td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "rate",
        data(){
            return{
                tableData:[
                    {name:"重庆快乐自助火锅",rate:4.8},
                    {name:"重庆快乐自助火锅",rate:4.7},
                    {name:"重庆快乐自助火锅",rate:4.6},
                    {name:"重庆快乐自助火锅",rate:4.5},
                    {name:"重庆快乐自助火锅",rate:4.4},
                    {name:"重庆快乐自助火锅",rate:4.3},
                    {name:"重庆快乐自助火锅",rate:4.2},
                    {name:"重庆快乐自助火锅",rate:4.1},
                    {name:"重庆快乐自助火锅",rate:4.0},
                    {name:"重庆快乐自助火锅",rate:3.9}
                ]
            }
        },
        props:{
            bindData:{
                type:Array,
                default:[]
            }
        }
    }
</script>

<style lang="less" scoped>
    .box-body{
        display: flex;
        .item{
            flex: 1;
            display: flex;
            flex-direction: column;
            .item_up{
                margin-top: 0.4rem;
                display: flex;
                justify-items: center;
                height:0.7rem;
                font-size:0.48rem;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:0.7rem;
                img{
                    width: 0.7rem;
                    height: 0.7rem;
                    margin-right: 0.4rem;
                }
            }
            .item_down{
                flex: 1;
            }
        }
    }

</style>