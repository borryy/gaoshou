<template>
	<view class="content">
		<view class="centerTop">
			<view class="centerHead">
				<image src="/static/logo.png" mode=""></image>
			</view>
			<view class="centerTopMsg">
				<view class="topMsgList">
					白萝卜
				</view>
				<view class="topMsgListM">
					15901133192
				</view>
			</view>
		</view>
		<view class="centerMain">
			<uni-list class="fs28">
				 <uni-list-item title="地址信息" 
					:show-extra-icon="true" 
					:extra-icon="{color: '#ca0c16',size: '22',type: 'map'}" @click="goAddress()">
				</uni-list-item>
				<uni-list-item title="我的订单" 
					:show-extra-icon="true" 
					:extra-icon="{color: '#ca0c16',size: '22',type: 'search'}" @click="goOrder()">
				</uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue';
	import uniList from '@/components/uni-list/uni-list.vue';
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
	export default {
		components: {uniList,uniListItem,uniIcon},
		data() {
			return {
				
			}
		},
		mounted() {

		},
		methods: {
			goOrder:function(){
				uni.showToast({
					icon:"loading",
					title:"loading..."
				})
				uni.navigateTo({
					url:"/pages/order/order"
				})
			},
			goAddress:function(){
				uni.showToast({
					icon:"loading",
					title:"loading..."
				})
				uni.navigateTo({
					url:"/pages/myAddress/myAddress"
				})
			}
		}
	}
</script>

<style scoped>
	.centerTop{
		padding: 30upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		/* color: #FFFFFF; */
		background-color: #FFFFFF;
	}
	.centerTop .centerHead{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		overflow: hidden;
	}
	.centerTop .centerHead image{
		width: 100%;
		height: 100%;
	}
	.centerTop .centerTopMsg{
		padding-left: 30upx;
	}
	.centerTop .centerTopMsg view{
		line-height: 1.6;
		font-size: 32upx;
	}
	.centerMain{
		margin-top: 30upx;
	}
</style>
