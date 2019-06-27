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
			<scroll-view scroll-y="true" class="scroll-Y" >
				<view class="scroll-view-item listTitle mainBackColor">高守施工</view>
				<view class="scroll-view-item listm" :class="titleId == item.id?'active':''" @click="changeItem(item.id)" v-for="(item,index) in mainList[0].children" :key="index">{{item.title}}</view>
				<view class="scroll-view-item listTitle mainBackColor">高守精选</view>
				<view class="scroll-view-item listm" :class="titleId == item.id?'active':''" @click="changeItem(item.id)" v-for="(item,index) in mainList[1].children" :key="index">{{item.title}}</view>
			</scroll-view>
			<scroll-view scroll-y="true" class="scroll-Y-R" >
				<view class="rightList">
					<view class="tipImg">
						<image class="imgs" src="/static/icon/head.png" mode=""></image>
					</view>
					<view class="msg">
						<view class="tit">
							清包美缝服务
						</view>
						<view class="small">
							只包含人工费，每小时30元
						</view>
					</view>
					<view class="add">
						<uni-icon type="plus" color="#ca0c16" size="20"></uni-icon>
						<input type="number" value="0" />
						<uni-icon type="minus" color="#ca0c16" size="20"></uni-icon>
					</view>
				</view>
				<view class="rightList">
					<view class="tipImg">
						<image class="imgs" src="/static/icon/head.png" mode=""></image>
					</view>
					<view class="msg">
						<view class="tit">
							清包美缝服务
						</view>
						<view class="small">
							只包含人工费，每小时30元
						</view>
					</view>
					<view class="add">
						<uni-icon type="plus" color="#ca0c16" size="20"></uni-icon>
						<input type="number" value="0" />
						<uni-icon type="minus" color="#ca0c16" size="20"></uni-icon>
					</view>
				</view>
				<view class="rightList">
					<view class="tipImg">
						<image class="imgs" src="/static/icon/head.png" mode=""></image>
					</view>
					<view class="msg">
						<view class="tit">
							清包美缝服务
						</view>
						<view class="small">
							只包含人工费，每小时30元
						</view>
					</view>
					<view class="add">
						<uni-icon type="plus" color="#ca0c16" size="20"></uni-icon>
						<input type="number" value="0" />
						<uni-icon type="minus" color="#ca0c16" size="20"></uni-icon>
					</view>
				</view>
				<view class="rightList">
					<view class="tipImg">
						<image class="imgs" src="/static/icon/head.png" mode=""></image>
					</view>
					<view class="msg">
						<view class="tit">
							清包美缝服务
						</view>
						<view class="small">
							只包含人工费，每小时30元
						</view>
					</view>
					<view class="add">
						<uni-icon type="plus" color="#ca0c16" size="20"></uni-icon>
						<input type="number" value="0" />
						<uni-icon type="minus" color="#ca0c16" size="20"></uni-icon>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {uniIcon} from '@dcloudio/uni-ui'
	export default {
		components: {uniIcon},
		data() {
			return { 
				titleId: '',
				mainList:[
					{
						"title":"高守施工",
						"children":[
							{
								"id":"1",
								"title":"高守美缝",
								"children":[]
							},
							{
								"id":"2",
								"title":"高守防水",
								"children":[]
							}
						]
					},
					{
						"title":"高守精品",
						"children":[
							{
								"id":"3",
								"title":"美缝剂胶",
								"children":[]
							},
							{
								"id":"4",
								"title":"防水用品",
								"children":[]
							}
						]
					},
				]
			}
		},
		onLoad() {
			this.titleId = this.mainList[0].children[0].id
		},
		methods: {
			con:function(){
				uni.showLoading({
					title:"loading..."
				})
			},
			changeItem:function(id){
				this.titleId = id
			}
		}
	}
</script>

<style>
	
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
	.scroll-Y{
		width: 25%;
		position: absolute;
		top: 223upx;
		bottom: 0;
		background-color: #f5f5f5;
		left: 0;
	}
	.scroll-Y .scroll-view-item{
		text-align: center;
		padding: 30upx 0;
		font-size: 28upx;
	}
	.scroll-Y .scroll-view-item.active{
		background-color: #FFFFFF;
		color: #ca0c16;
		position: relative;
	}
	.scroll-Y .scroll-view-item.active::before{
		content: '';
		position: absolute;
		border-right: 2px solid #ca0c16;
		height: 30upx;
		left: 10upx;
		top: 34upx;
	}
	.scroll-Y .listTitle{
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
	.scroll-Y-R .rightList .add input{
		height: 43upx!important;
		min-height: 43upx;
		font-size: 24upx;
		text-align: center;
	}
	.scroll-Y-R .rightList .add .uni-icon{
		font-size: 36upx!important;
	}
</style>
