<template>
	<view class="content">
		<view class="topAddress">
			<view class="addressImg parent">
				<image class="son" src="/static/icon/map.png" mode=""></image>
			</view>
			<view class="addressMsgs">
				<view class="listA">
					收货人：白云飞 15901133192
				</view>
				<view class="listB">
					收货地址：河北省石家庄市长安区
				</view>
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

		</view>

		<view class="uni-timeline" style="padding: 30upx 20upx;background-color: #fff;">
			<view v-for="(item, index) of logs" :key="index" class="uni-timeline-item" :class="{'uni-timeline-first-item': index === 0, 'uni-timeline-last-item': (index+1)===logs.length}">
				<view class="uni-timeline-item-keynode">{{item.date}}</view>
				<view class="uni-timeline-item-divider"></view>
				<view class="uni-timeline-item-content">{{item.title}}</view>
			</view>
		</view>

		<view class="tipMsg">
			<view class="tipTitle">
				交易快照 发生交易争执时，可作为判断依据
			</view>
			<view class="tipList">
				订单编号：29456465656564455
			</view>
			<view class="tipList">
				创建时间：2019-04-21 23:00:00
			</view>
			<view class="tipList">
				施工/发货时间：2019-04-21 23:00:00
			</view>
			<view class="tipList">
				成交时间：2019-04-21 23:00:00
			</view>
			<view class="make">
				<view class="makeList">
					申请售后
				</view>
				<view class="makeList">
					拨打电话
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
				navList: ['全部订单', '已付款', '已完成', '售后/退货'],
				logs: [{
						title: "下单",
						date: "2019.07.07 12:30"
					},
					{
						title: "施工师傅接单",
						date: "2019.07.07 12:30"
					},
					{
						title: "施工师傅上门",
						date: "2019.07.07 12:30"
					},
					{
						title: "订单完成",
						date: "2019.07.07 12:30"
					},
					{
						title: "申请售后",
						date: "2019.07.07 12:30"
					}
				]
			}
		},
		onLoad(option) {
			uni.setNavigationBarTitle({
				title: '我的订单' + option.orderid
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
	.orderList {
		border-bottom: 10upx solid #EEEEEE;
	}

	.orderMain {
		margin-top: 10upx;
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

	.topAddress {
		padding: 30upx;
		display: flex;
		box-sizing: border-box;
		background-color: #FFFFFF;
		align-items: center;
		margin-top: 10upx;
	}

	.topAddress .addressImg {
		width: 5%;
		padding-bottom: 5%;
	}

	.topAddress .addressMsgs {
		padding-left: 20upx;
	}

	.topAddress .addressMsgs .listA {
		margin-bottom: 14upx;
		font-size: 28upx;
	}

	.topAddress .addressMsgs .listB {
		font-size: 28upx;
		color: #333333;
	}

	.tipMsg {
		background-color: #FFFFFF;
		padding: 30upx;
		padding-bottom: 0;
		margin-bottom: 100upx;
	}

	.tipMsg .tipTitle {
		font-size: 28upx;
		color: #333333;
		line-height: 1.5;
	}

	.tipMsg .tipList {
		font-size: 26upx;
		color: #444444;
		line-height: 1.8;
	}

	.tipMsg .make {
		padding: 20upx;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
	}

	.tipMsg .makeList {
		width: 30%;
		padding: 20upx;
		margin: 10upx;
		font-size: 26upx;
		text-align: center;
		border: 1px solid #f5f5f5;
		border-radius: 10upx;
	}

	.uni-timeline-item-keynode{
		font-size: 24upx;
		line-height: 1.5;
		color: #999;
	}
	.uni-timeline-item-content{
		padding-top: 20upx;
		min-height: 100upx;
	}
	.uni-timeline-item .uni-timeline-item-divider {
		background-color: #CA0C16;
	}
	.uni-timeline-last-item .uni-timeline-item-divider {
		background-color: #999;
	}
</style>
