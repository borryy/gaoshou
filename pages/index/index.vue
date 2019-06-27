<template>
	<view class="content">
		<view class="topMsg mainBackColor">
			<view class="logo">
				<image class="headlogo" src="/static/icon/head.png" mode=""></image>
			</view>
			<view class="detile">
				<view class="names list">店铺名称：遇上店铺</view>
				<view class="address list">店铺地址：河北省石家庄市长安区</view>
				<view class="phone list">客服电话：13355664455</view>
			</view>
		</view>
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y scroll-Y-L" >
				<view class="scroll-view-item listTitle mainBackColor">高守施工</view>
				<view class="scroll-view-item listm" :class="titleId == item.id?'active':''" @click="changeItem(item.id,item.pid)" v-for="item in mainList1" :key="item.id">{{item.title}}</view>
				<view class="scroll-view-item listTitle mainBackColor">高守精选</view>
				<view class="scroll-view-item listm" :class="titleId == item.id?'active':''" @click="changeItem(item.id,item.pid)" v-for="item in mainList2" :key="item.id">{{item.title}}</view>
			</scroll-view>
			<scroll-view scroll-y="true" class="scroll-Y scroll-Y-R">
				<view class="scroll-view-item rightList" v-for="(item,index) in lists" :key="index">
					<view class="tipImg">
						<image class="imgs" src="/static/icon/head.png" mode=""></image>
					</view>
					<view class="msg">
						<view class="tit">
							{{item.title}}
						</view>
						<view class="small">
							{{item.small}}
						</view>
					</view>
					<view class="add" @click="showBottom()">
						<image class="addimg" src="/static/icon/shop2.png" mode=""></image>
					</view>
				</view>
			</scroll-view>
			
		</view>
	</view>
</template>

<script>
	import {uniIcon} from '@dcloudio/uni-ui'
	import {uniPopup} from "@dcloudio/uni-ui"
	export default {
		components: {uniIcon,uniPopup},
		data() {
			return { 
				titleId: '',
				mainList1:[],
				mainList2:[],
				lists:[],
				showPopupBottomShare:false,
				mainList:[
					{
						"title":"高守施工",
						"children":[
							{
								"id":"1",
								"pid":"1",
								"title":"高守美缝",
								"children":[
									{
										"id":"100",
										"title":"清包美缝服务",
										"small":"只包含人工费，每小时30元"
									},
									{
										"id":"101",
										"title":"清包美缝服务",
										"small":"只包含人工费，每小时30元"
									},
									{
										"id":"102",
										"title":"清包美缝服务",
										"small":"只包含人工费，每小时30元"
									},
									{
										"id":"103",
										"title":"清包美缝服务",
										"small":"只包含人工费，每小时30元"
									},
									{
										"id":"104",
										"title":"清包美缝服务",
										"small":"只包含人工费，每小时30元"
									},
									{
										"id":"105",
										"title":"清包美缝服务",
										"small":"只包含人工费，每小时30元"
									},
									{
										"id":"106",
										"title":"清包美缝服务",
										"small":"只包含人工费，每小时30元"
									},
									{
										"id":"107",
										"title":"清包美缝服务",
										"small":"只包含人工费，每小时30元"
									},
									{
										"id":"108",
										"title":"清包美缝服务",
										"small":"只包含人工费，每小时30元"
									}
								]
							},
							{
								"id":"2",
								"pid":"1",
								"title":"高守防水",
								"children":[
									{
										"id":"100",
										"title":"清包防水服务",
										"small":"只包含人工费，每小时100元"
									},
									{
										"id":"101",
										"title":"清包防水服务",
										"small":"只包含人工费，每小时100元"
									},
									{
										"id":"102",
										"title":"清包防水服务",
										"small":"只包含人工费，每小时100元"
									},
									{
										"id":"103",
										"title":"清包防水服务",
										"small":"只包含人工费，每小时100元"
									},
									{
										"id":"104",
										"title":"清包防水服务",
										"small":"只包含人工费，每小时100元"
									},
									{
										"id":"105",
										"title":"清包防水服务",
										"small":"只包含人工费，每小时100元"
									},
									{
										"id":"106",
										"title":"清包防水服务",
										"small":"只包含人工费，每小时100元"
									},
									{
										"id":"107",
										"title":"清包防水服务",
										"small":"只包含人工费，每小时100元"
									},
									{
										"id":"108",
										"title":"清包防水服务",
										"small":"只包含人工费，每小时100元"
									}
								]
							}
						]
					},
					{
						"title":"高守精品",
						"children":[
							{
								"id":"3",
								"pid":"2",
								"title":"美缝剂胶",
								"children":[]
							},
							{
								"id":"4",
								"pid":"2",
								"title":"防水用品",
								"children":[]
							},
							{
								"id":"5",
								"pid":"2",
								"title":"美缝剂胶",
								"children":[]
							},
							{
								"id":"6",
								"pid":"2",
								"title":"防水用品",
								"children":[]
							},
							{
								"id":"7",
								"pid":"2",
								"title":"美缝剂胶",
								"children":[]
							},
							{
								"id":"8",
								"pid":"2",
								"title":"防水用品",
								"children":[]
							},
							{
								"id":"9",
								"pid":"2",
								"title":"美缝剂胶",
								"children":[]
							}
						]
					},
				]
			}
		},
		mounted() {
			this.titleId = this.mainList[0].children[0].id;
			this.mainList1 = this.mainList[0].children;
			this.mainList2 = this.mainList[1].children; 
			var that = this
			this.lists = this.mainList1.filter(function(item){
				return item.id == that.titleId
			})[0].children
			console.log(this.lists)
		},
		methods: {
			showBottom:function(){
				this.showPopupBottomShare = !this.showPopupBottomShare
			},
			hidePopup:function(){
				
			},
			changeItem:function(id,pid){
				this.titleId = id
				if(pid == 1){
					this.lists = this.mainList1.filter(function(item){
						return item.id == id
					})[0].children
				}else{
					this.lists = this.mainList2.filter(function(item){
						return item.id == id
					})[0].children
				}
			},
			go:function(){ 
				this.titleId = this.mainList[0].children[0].id;
				this.mainList1 = this.mainList[0].children;
				this.mainList2 = this.mainList[1].children;
			}
		}
	}
</script>

<style scoped>
	
	.topMsg{
		display: flex;
		padding: 40upx 20upx;
		box-sizing: border-box;
		height: 223upx;
		color: #fff;
		font-size: 28upx;
	}
	.topMsg .logo{
		position: relative;
		width: 20%;
		height: 0;
		padding-bottom: 20%;
		border-radius: 16upx;
		overflow: hidden;
	}
	.topMsg .logo .headlogo{
		position:  absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.topMsg .detile{
		width: 80%;
		padding-left: 20upx;
		box-sizing: border-box;
	}
	.topMsg .detile .list{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		margin-top: 10upx;
	}
	.topMsg .detile .names{
		margin-top: 0;
	}
	.content{
		height: 100%;
	}
	.main{
		height: 100%;
		overflow: hidden;
		border-top: 1px solid #FFFFFF;
	}
	.scroll-Y-L{
		width: 25%;
		position: absolute;
		top: 223upx;
		bottom: 0;
		background-color: #f5f5f5;
		left: 0;
		padding-bottom: 100upx;
	}
	.scroll-Y-L .scroll-view-item{
		text-align: center;
		padding: 30upx 0;
		font-size: 28upx;
	}
	.scroll-Y-L .scroll-view-item.active{
		background-color: #FFFFFF;
		color: #ca0c16;
		position: relative;
	}
	.scroll-Y-L .scroll-view-item.active::before{
		content: '';
		position: absolute;
		border-right: 2px solid #ca0c16;
		height: 30upx;
		left: 10upx;
		top: 34upx;
	}
	.scroll-Y-L .listTitle{
		padding: 20upx 0;
		font-size: 30upx;
		border-top: 1px solid #FFFFFF;
	}
	.scroll-Y-R{
		width: 75%;
		position: absolute;
		top: 223upx;
		bottom: 0;
		right: 0;
		background-color: #FFFFFF;
		padding-bottom: 100upx;
		white-space:nowrap;
	}
	.scroll-Y-R .rightList{
		font-size: 28upx;
		padding: 20upx;
		box-sizing: border-box;
		display: flex;
		border-bottom: 1upx solid #f5f5f5;
	}
	.scroll-Y-R .rightList .tipImg{
		width: 25%;
		height: 0;
		padding-bottom: 25%;
		position: relative;
	}
	.scroll-Y-R .rightList .tipImg .imgs{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	.scroll-Y-R .rightList .msg{
		width: 55%;
		padding-left: 16upx;
		box-sizing: border-box;
	}
	.scroll-Y-R .rightList .msg .small{
		font-size: 24upx;
		color: #555555;
	}
	.scroll-Y-R .rightList .add{
		width: 20%;
		display: flex;
		justify-content: center;
		flex-wrap: nowrap;
		align-items:flex-end;
	}
	
	.scroll-Y-R .rightList .add .addimg{
		width: 30upx;
		height: 30upx;
	}
</style>
