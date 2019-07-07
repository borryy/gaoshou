<template>
	<view class="content">
		<view class="addressList">
			<view class="left">
				<view class="leftTitle">
					白云飞 15901133192
				</view>
				<view class="leftAddr">
					河北省石家庄市长安区捷凯双创1111
				</view>
			</view>
			<view class="right">
				<view class="edit">
					<uni-icon type="compose" size="18" color="#ca0c16"></uni-icon>
				</view>
				<view class="delete">
					<uni-icon type="trash" size="18" color="#ca0c16"></uni-icon>
				</view>
			</view>
		</view>
		<view class="addressList">
			<view class="left">
				<view class="leftTitle">
					白云飞 15901133192
				</view>
				<view class="leftAddr">
					河北省石家庄市长安区捷凯双创1111
				</view>
			</view>
			<view class="right">
				<view class="edit">
					<uni-icon type="compose" size="18" color="#ca0c16"></uni-icon>
				</view>
				<view class="delete">
					<uni-icon type="trash" size="18" color="#ca0c16"></uni-icon>
				</view>
			</view>
		</view>
		<view class="bottomAdd">
			<view class="addIcon">
				<uni-icon type="plus" size="18" color="#ca0c16"></uni-icon>
			</view>
			<view class="text">
				新增地址
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue';
	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				
			}
		},
		onLoad() {
			
			uni.chooseAddress({
				success(res) {
					console.log(res)
				}
			})
		},
		
		methods: {
			
		}
	}
</script>

<style scoped>
	.content{
		padding-bottom: 100upx;
		box-sizing: border-box;
	}
	.addressList{
		display: flex;
		padding: 30upx;
		box-sizing: border-box;
		align-items: center;
		justify-content: flex-end;
		background-color: #FFFFFF; 
		border-top: 1px solid #EEEEEE;  
	}
	.addressList .left{
		flex: 1;
	}
	.addressList .left .leftTitle{
		font-size: 28upx;
		margin-bottom: 10upx;
	}
	.addressList .left .leftAddr{
		font-size: 26upx;
		color: #555555;
	}
	.addressList .right{
		display: flex;
	}
	.addressList .right .edit{
		margin-right: 20upx;
		padding: 10upx;
	}
	.addressList .right .delete{
		padding: 10upx;
	}
	.bottomAdd{
		position: fixed;
		width: 100%;
		height: 100upx;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border-top: 1px solid #f5f5f5;
		background-color: #FFFFFF;
	}
	.bottomAdd .text{
		font-size: 28upx;
		line-height: 1.1;
	}
</style>
