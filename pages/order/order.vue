<template>
	<view class="content">
		<view class="headerNav">
			<view class="navLists" @click="changeNav(index)" :class="actIndex == index?'active':''" v-for="(item,index) in navList"
			 :key="index">
				{{item}}
			</view>
		</view>
		<view class="orderMain">
			<view class="orderList">
				<view class="orderTop">
					<view class="orderTime">
						日期:2019-05-05 10:22:00
					</view>
					<view class="orderStatus">
						<text>已完成</text>
					</view>
				</view>
				<view class="orderProduct">
					<view class="productImg parent">
						<image class="son" src="/static/logo.png" mode=""></image>
					</view>
					<view class="productMsg">
						<view class="productTitle">
							美缝剂胶
						</view>
						<view class="productSmall">
							蓝白色
						</view>
						<view class="productSmall">
							人工费：10.00元
						</view>
					</view>
					<view class="productPrice">
						<view class="productTitle">
							￥200.00
						</view>
						<view class="productSmall">
							× 2
						</view>
						<view class="productTitle">
							合计：￥410.00
						</view>
					</view>
				</view>
				<view class="orderHandle">
					<view class="handleList">
						删除订单
					</view>
					<view class="handleList">
						再次下单
					</view>
				</view>
			</view>
			<view class="orderList">
				<view class="orderTop">
					<view class="orderTime">
						日期:2019-05-05 10:22:00
					</view>
					<view class="orderStatus">
						<text>已完成</text>
					</view>
				</view>
				<view class="orderProduct">
					<view class="productImg parent">
						<image class="son" src="/static/logo.png" mode=""></image>
					</view>
					<view class="productMsg">
						<view class="productTitle">
							美缝剂胶
						</view>
						<view class="productSmall">
							蓝白色
						</view>
						<view class="productSmall">
							人工费：10.00元
						</view>
					</view>
					<view class="productPrice">
						<view class="productTitle">
							￥200.00
						</view>
						<view class="productSmall">
							× 2
						</view>
						<view class="productTitle">
							合计：￥410.00
						</view>
					</view>
				</view>
				<view class="orderHandle">
					<view class="handleList">
						删除订单
					</view>
					<view class="handleList">
						再次下单
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue';
	import uniList from '@/components/uni-list/uni-list.vue';
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
	export default {
		components: {
			uniList,
			uniListItem,
			uniIcon
		},
		data() {
			return {
				actIndex: "0",
				navList: ['全部订单', '已付款', '已完成', '售后/退货']
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '我的订单'
			})
		},
		methods: {
			changeNav: function(index) {
				this.actIndex = index
			}
		}
	}
</script>

<style scoped>
	.headerNav {
		display: flex;
		text-align: center;
		box-shadow: 1px 1px 5px #CCCCCC;
		background-color: #FFFFFF;
	}

	.headerNav .navLists {
		font-size: 28upx;
		width: 25%;
		padding: 30upx 0;
		box-sizing: border-box;
	}

	.headerNav .navLists.active {
		color: #CA0C16;
		border-bottom: 1px solid #CA0C16;
	}

	.orderList {
		border-bottom: 20upx solid #EEEEEE;
	}

	.orderMain {
		margin-top: 20upx;
		background-color: #FFFFFF;
	}

	.orderTop {
		display: flex;
		padding: 30upx;
		box-sizing: border-box;
	}

	.orderTop .orderTime {
		width: 50%;
		font-size: 26upx;
	}

	.orderTop .orderStatus {
		width: 50%;
		text-align: right;
		color: #CA0C16;
		font-size: 26upx;
	}

	.orderProduct {
		display: flex;
		padding: 30upx;
		background-color: #f5f5f5;
	}

	.orderProduct .productImg {
		width: 20%;
		padding-bottom: 20%;
	}

	.orderProduct .productMsg {
		width: 50%;
		padding-left: 30upx;
		box-sizing: border-box;
	}

	.orderProduct .productTitle {
		font-size: 28upx;
		margin-bottom: 20upx;
		line-height: 1.5;
	}

	.orderProduct .productSmall {
		font-size: 20upx;
		color: #333333;
		margin-bottom: 10upx;
		line-height: 1.5;
	}

	.orderProduct .productPrice {
		width: 30%;
		text-align: right;
	}

	.orderHandle {
		display: flex;
		padding: 20upx;
		background-color: #FFFFFF;
		justify-content: flex-end;
	}

	.orderHandle .handleList {
		padding: 12upx 20upx;
		border-radius: 20upx;
		font-size: 26upx;
		margin-left: 20upx;
		border: 1px solid #EEEEEE;
		align-self: flex-end;
	}
</style>
