<template>
 	<div class="modal-inner" @click.stop>
 		<ul class="modal-head">
	 		<li :class="pannelShow==='car'&&'active'"  @click.stop='switchPannel("car")'>车位信息</li>
	 		<li :class="pannelShow==='info'&&'active'" @click.stop='switchPannel("info")'>设备信息</li>
 		</ul>
 		<div class="modal-body">
 			<div v-show="pannelShow==='car'" class="pannel">
	 			<table>
		 			<tbody>
		 				<tr>
		 					<td>已用车位</td>
		 					<td>235</td>
		 				</tr>
		 				<tr>
		 					<td>剩余车位</td>
		 					<td>165</td>
		 				</tr>
		 				<tr>
		 					<td>总车位</td>
		 					<td>400</td>
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
        <div class="modal-foot">
            <el-button size="mini" class="pull-right" @click='closeModal'>关闭</el-button>
        </div>
 	</div>
</template>


<script>
	export default{
		name:'mapModal',
		data:function(){
			return {
				pannelShow:'info'
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
            },
            closeModal(){
                this.$emit('closeModal')
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
        &-foot{
            padding: 0 15px;
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
