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
			<scroll-view  scroll-y="true" class="scroll-Y" >
				<view class="scroll-view-item listTitle mainBackColor">高守施工</view>
				<view class="scroll-view-item listm active">高守美缝</view>
				<view class="scroll-view-item listm">高守防水</view>
				<view class="scroll-view-item listTitle mainBackColor">高守精选</view>
				<view class="scroll-view-item listm">美缝剂胶</view>
				<view class="scroll-view-item listm">美缝剂胶</view>
				<view class="scroll-view-item listm">美缝剂胶</view>
				<view class="scroll-view-item listm">美缝剂胶</view>
				<view class="scroll-view-item listm">美缝剂胶</view>
				<view class="scroll-view-item listm">美缝剂胶</view>
				<view class="scroll-view-item listm">美缝剂胶</view>
				<view class="scroll-view-item listm">美缝剂胶</view>
				
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			// this.con()
		},
		methods: {
			con:function(){
				uni.showLoading({
					title:"loading..."
				})
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
	}
	.scroll-Y{
		width: 30%;
		position: absolute;
		top: 223upx;
		bottom: 0;
		background-color: #f5f5f5;
		
		float: left;
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
</style>
