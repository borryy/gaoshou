<template>
	<view class="uni-tab-bar">
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab,index) in tabBars" :key="tab.id" class="swiper-tab-list" :class="tabIndex==index ? 'active' : ''"
			 :id="tab.id" :data-current="index" @click="tapTab">{{tab.name}}</view>
		</scroll-view>
		<swiper :current="tabIndex" class="swiper-box swiper-content" :duration="300" @change="changeTab">
			<swiper-item v-for="(tab,index1) in newsitems" :key="index1">
				<scroll-view class="list" scroll-y>
					<view class="orderList" @click="goDetail" v-for="(item, index) of 2" :key="index">
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
							<view class="handleList" @tap="delOrder(index)">
								删除订单
							</view>
							<view class="handleList" @tap="again(index)">
								再次下单
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<uni-load-more status="loading" content-text="contentText" />
		</swiper>
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
			// return {
			// 	navList: ['全部订单', '已付款', '已完成', '售后/退货']
			// }
			return {
				page: {
					pageNum: 1,
					pageSize: 10
				},
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				newsitems: [{
					name: '全部订单',
					id: 'all'
				}, {
					name: '待支付',
					id: 'zhi'
				}, {
					name: '已付款',
					id: 'fu'
				}, {
					name: '已完成',
					id: 'wan'
				}, {
					name: '售后/退货',
					id: 'shou'
				}],
				tabBars: [{
					name: '全部订单',
					id: 'all'
				}, {
					name: '待支付',
					id: 'zhi'
				}, {
					name: '已付款',
					id: 'fu'
				}, {
					name: '已完成',
					id: 'wan'
				}, {
					name: '售后/退货',
					id: 'shou'
				}],
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			// 上滑加载更多
			// 获取订单列表
			getList() {
				var _this = this
				uni.request({
					method: 'get',
					url: this.websiteUrl + '/order/queryOrderList',
					data: _this.page,
					dataType: 'json',
					success(res) {
						if (res.data.success) {
							console.log(res.data.data)
						}
					}
				})
			},
			// 删除订单
			delOrder(index) {
				var _this = this;
				uni.showModal({
					title: "您确定要删除一条订单？",
					success(res) {
						if(res.confirm){
							uni.showToast({
								title: '删除' + index + '成功'
							})
						}
					}
				})
			},
			// 再次下单
			again(index) {
				var _this = this
				uni.showModal({
					title: "再次下单？",
					success(res) {
						if(res.confirm){
							uni.showToast({
								title: '再次下单' + index
							})
						}
					}
				})
			},
			goDetail(e) {
				uni.navigateTo({
					url: '/pages/template/tabbar/detail/detail?title=' + e.title
				});
			},
			close(index1, index2) {
				uni.showModal({
					content: '是否删除本条信息？',
					success: (res) => {
						if (res.confirm) {
							this.newsitems[index1].data.splice(index2, 1);
						}
					}
				})
			},
			async changeTab(e) {
				let index = e.target.current;
				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getElSize("tab-bar"),
					tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;

				for (let i = 0; i < index; i++) {
					let result = await this.getElSize(this.tabBars[i].id);
					width += result.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getElSize(this.tabBars[index].id),
					nowWidth = nowElement.width;
				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
				this.tabIndex = index; //一旦访问data就会出问题
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			async tapTab(e) { //点击tab-bar
				let tabIndex = e.target.dataset.current;
				if (this.tabIndex === tabIndex) {
					return false;
				} else {
					let tabBar = await this.getElSize("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = tabIndex;
				}
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
		border-top: 10upx solid #EEEEEE;
		border-bottom: 10upx solid #EEEEEE;
	}

	.orderMain {
		margin-top: 20upx;
		background-color: #FFFFFF;
	}

	.orderTop {
		background-color: #fff;
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

	.uni-tab-bar-loading {
		text-align: center;
		font-size: 28upx;
		color: #999;
	}

	.swiper-content {
		overflow: hidden;
	}
	.swiper-tab-list{
		font-size: 24rpx;
		color: #ca0c16;
	}
	.swiper-tab-list{
		display: inline-block;
		background-color: #fff;
		line-height: 96upx;
	}
	.uni-tab-bar .active{
		border-bottom: 4upx solid #CA0C16;
	}
</style>
