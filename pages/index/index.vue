<template>
	<view class="content">
		<!-- 头部信息 -->
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
			<!-- 左侧分类 -->
			<scroll-view scroll-y="true" class="scroll-Y scroll-Y-L" >
				<view class="scroll-view-item listTitle mainBackColor">高守施工</view>
				<view class="scroll-view-item listm" :class="titleId == item.id?'active':''" @click="changeItem(item.id,item.pid)" v-for="item in mainList1" :key="item.id">{{item.title}}</view>
				<view class="scroll-view-item listTitle mainBackColor">高守精选</view>
				<view class="scroll-view-item listm" :class="titleId == item.id?'active':''" @click="changeItem(item.id,item.pid)" v-for="item in mainList2" :key="item.id">{{item.title}}</view>
			</scroll-view>
			<!-- 右侧列表 -->
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
					<view class="add" @click="showModalClick()">
						<image class="addimg" src="/static/icon/shop2.png" mode=""></image>
					</view>
				</view>
			</scroll-view>
			<!-- 底部弹框 -->
			<view class="modal" v-if="showModal" :class="showModal?'showModal':''">
				<view class="modalMain">
					<view class="modalTop">
						<view class="topImgv">
							<image class="topImg" :src="colorActive.img" mode=""></image>
						</view>
						<view class="topMsgm">
							<view class="title">
								美缝产品
							</view>
							<view class="small">
								68 <text class="sm">元</text>
							</view>
							<view class="pcont">
								已选:{{colorActive.title}} <text v-if="num>0">× {{num}}</text>
							</view>
						</view>
					</view>
					<view class="modalCenter">
						<view class="listColor" :class="colorOn == indexs?'on':''" @click="colorOnClick(indexs)" v-for="(item,indexs) in colorList" :key="indexs">
							{{item.title}}
						</view>
					</view>
					<view class="modalNum">
						<view class="title">
							数量：
						</view>
						<view class="addNum">
							<uni-icon type="minus" color="#ca0c16" size="20" @click="minusNum()"></uni-icon>
							<input type="number" v-model="num">
							<uni-icon type="plus" color="#ca0c16" size="20" @click="addNum()"></uni-icon>
						</view>
					</view>
					<view class="modalBottom">
						<view class="addShop" @click="addShop()">
							加入购物车
						</view>
						<view class="goShop" @click="goShop()">
							立即购买
						</view>
					</view>
				</view>
				<view class="modalUnder" @click="showModalClick()"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue';
	export default {
		components: {uniIcon},
		data() { 
			return { 
				titleId: '',
				mainList1:[],
				mainList2:[],
				lists:[],
				num:0, 
				colorOn:'0',
				colorActive:{},
				colorList:[
					{title:'蓝白色',img:'/static/logo.png'},
					{title:'蓝黑色',img:'/static/icon/head.png'},
					{title:'蓝绿色',img:'/static/logo.png'},
					{title:'蓝白色',img:'/static/icon/head.png'},
					{title:'蓝黑色',img:'/static/logo.png'},
					{title:'蓝绿色',img:'/static/icon/head.png'}
				],
				showModal:false,
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
			var that = this
			this.titleId = this.mainList[0].children[0].id;
			this.mainList1 = this.mainList[0].children;
			this.mainList2 = this.mainList[1].children; 
			this.lists = this.mainList1.filter(function(item){
				return item.id == that.titleId
			})[0].children;
			this.colorActive = this.colorList[this.colorOn];
		},
		methods: {
			//显示选择规格底部弹框
			showModalClick:function(){
				this.showModal = !this.showModal
			},
			//选择规格按钮事件
			colorOnClick:function(index){
				this.colorOn =index
				this.colorActive = this.colorList[this.colorOn];
			},
			//增加规格数量
			addNum:function(){
				this.num=parseInt(this.num)+1
			},
			//减少规格数量
			minusNum:function(){
				if(this.num<1){
					this.num = 0
				}else{
					this.num=parseInt(this.num)-1
				}
			},
			//底部弹框立即购买
			goShop:function(){
				uni.showToast({
					icon:"loading",
					title:"loading..."
				})
				this.showModalClick();
				uni.navigateTo({
					url:"/pages/shop/shop"
				})
			},
			//底部弹框加入购物车
			addShop:function(){
				if(this.num == 0){
					uni.showToast({
						title:"请选择购买数量！",
						icon:"none"
					})
				}else{
					uni.showToast({
						title:"加入购物车成功！",
						icon:"none"
					})
				}
				setTimeout(function(){
					uni.hideToast()
				},1500)
			},
			//侧边栏点击分类事件
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
		font-size: 32upx;
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
		margin-top: 20upx;
		font-size: 30upx;
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
	.scroll-Y-R .rightList .msg view{
		line-height: 1.8;
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
	.modal{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		opacity: 0;
		transition: all 1s;
		-webkit-transition: all 1s;
	}
	.showModal{
		opacity: 1;
	}
	.modal .modalUnder{
		background-color: #000000;
		z-index: 1;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.3;
	}
	.modal .modalMain{
		width: 100%;
		background-color: #FFFFFF;
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 2;
	}
	.modal .modalMain .modalTop{
		display: flex;
		padding: 20upx;
		box-sizing: border-box;
		border-bottom: 1px solid #f5f5f5;
	}
	.modal .modalMain .modalTop .topImgv{
		width: 25%;
		height: 0;
		padding-bottom: 25%;
		position: relative;
	}
	.modal .modalMain .modalTop .topImg{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 20upx;
	}
	.modal .modalMain .modalTop .topMsgm{
		width: 75%;
		padding-left: 30upx;
		padding-right: 30upx;
		box-sizing: border-box;
		font-size: 28upx;
		line-height: 1.8;
		text-overflow:ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.modal .modalMain .modalTop .topMsgm view{
		line-height: 1.8;
	}
	.modal .modalMain .modalTop .topMsgm .small{
		font-size: 32upx;
		color: #ca0c16;
	}
	.modal .modalMain .modalTop .topMsgm .small .sm{
		font-size: 20upx;
	}
	.modal .modalMain .modalTop .topMsgm .pcont{
		font-size: 24upx;
		color: #555555;
		margin-top: 20upx;
	}
	.modal .modalMain .modalCenter{
		padding: 60upx 30upx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
	}
	.modal .modalMain .modalCenter .listColor{
		padding: 10upx 40upx;
		border-radius: 10upx;
		box-shadow: 5px 1px 18px #ccc;
		font-size: 20upx;
		margin:10upx;
		border: 1px solid #f5f5f5;
	}
	.modal .modalMain .modalCenter .listColor.on{
		background-color: #CA0C16;
		color: #FFFFFF;
	}
	.modal .modalMain .modalBottom{
		color: #FFFFFF;
		display: flex;
	}
	.modal .modalMain .modalBottom .addShop,.modal .modalMain .modalBottom .goShop{
		width: 50%;
		text-align: center;
		padding: 30upx 0;
		font-size: 28upx;
	}
	.modal .modalMain .modalBottom .addShop{
		background-color: #FFA600;
	}
	.modal .modalMain .modalBottom .goShop{
		background-color:#CA0C16;
	}
	.modal .modalMain .modalNum{
		font-size: 28upx;
		display: flex;
		padding: 0 40upx 50upx 40upx;
		align-items:center;
	}
	.modal .modalMain .modalNum .addNum{
		display: flex;
		justify-content: center;
		align-items:center;
	}
	.modal .modalMain .modalNum .addNum input{
		width: 50upx;
		height: 32upx;
		font-size: 24upx;
		text-align: center;
	}
</style>
