<template>
 	<div class="modal-inner" @click.stop>
 		<ul class="modal-head">
	 		<li :class="pannelShow==='music'&&'active'"  @click.stop='switchPannel("music")'>音乐广播</li>
	 		<li :class="pannelShow==='mannul'&&'active'"  @click.stop='switchPannel("mannul")' >人工广播</li>
	 		<li :class="pannelShow==='info'&&'active'" @click.stop='switchPannel("info")'>设备信息</li>
 		</ul>
 		<div class="modal-body">
 			<div v-show="pannelShow==='music'" class="pannel">
	 			<div class="pannel-head" >
	 				<h3>播放列表</h3>
	 			</div>
	 			<div class="pannel-body">
	 				<ul class="musicList">
	 					<li v-for='(item,index) in 10' :key="index">
	 						<span class="pull-right">00:30</span>
	 						欢迎语
	 					</li>
	 				</ul>
	 			</div>
	 			<div class="pannel-foot">
	 				<audio src="song.ogg" controls="controls"></audio>
	 			</div>
 			</div>
 			<div v-show="pannelShow==='mannul'" class="pannel">
	 			<div class="pannel-body">
	 				<div class="circle circle-green">
	 					<h2>正在寻呼</h2>
	 					<p>当前IP</p>
	 				</div>
	 				<div class="circle circle-default pull-left">
	 					<h2>正在寻呼</h2>
	 					<p>当前IP</p>
	 				</div>
	 				<div class="circle circle-default pull-left">
	 					<h2>正在寻呼</h2>
	 					<p>当前IP</p>
	 				</div>
	 			</div>
	 			<div class="pannel-foot">
	 				<div class="call"><span class="square"></span>停止寻呼</div>
	 			</div>
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
            <div class="btn2" style="padding-right: 15px">
                <button @click='closeModal'>关闭</button>
            </div>
        </div>
 	</div>
</template>


<script>
	export default{
		name:'mapModal',
		data:function(){
			return {
				pannelShow:'music'
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
				width: 33.33%;
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
            margin-bottom: 15px;
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
					}
				}
			}
		}
		&-body{
			.clear-fix();
		}
		&-foot{
			margin-top: 15px;
			audio{
				margin: 0 auto;
			}

		}
	}
	.musicList{
		height: 300px;
		overflow-y: scroll;
		padding-right: 10px;
		.scroll-bar(#ddd);
		li{
			border-bottom: 1px solid #f0f0f0;
			line-height: 40px;
		}
	}
	.circle{
		.clear-fix();
		width: 116px;
		height: 116px;
		border-radius: 58px;
		h2{
			font-weight: 400;
			margin-top: 45px;
			font-size: 18px;
			text-align: center;
		}
		p{
			text-align: center;
		}
		&-green{
			background-color: #70D34F;
			color:#fff;
			margin: 0 auto;
		}
		&-default{
			border:1px solid #ddd;
			color:#777;
			margin-left: 32px;
			margin-top: 20px;
		}
	}
	.call{
		clear: both;
		margin: 10px auto;
		width: 280px;
		line-height: 32px;
		height: 32px;
		border-radius: 16px;
		text-align: center;
		background-color: #f54e4e;
		color: #fff;
		.square{
			display: inline-block;
			width: 10px;
			height: 10px;
			margin-right: 10px;
			background-color: #fff;
		}
    }
    .btn2{
        box-sizing: border-box;
        height:30px;
        width: 30%;
        float: right;
        text-align: center;
        position: relative;
        bottom: 15px;
        button{
            padding: 0;
            line-height: 30px;
            width: 100%;
            height: 100%;
            background-color:#00beed;
            border:none;
            color: #fff;
        }
    }

</style>
