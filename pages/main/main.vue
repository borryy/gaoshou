<template>
	<view class="bodyMain">
		<view class="cont">
			<Index v-if="pageNames == 'index'"></Index>
			<center v-if="pageNames == 'center'"></center>
			<shop-index v-if="pageNames == 'shopIndex'"></shop-index>
			<Order v-if="pageNames == 'order'"></Order>
		</view>
		<view class="tabBars">
			<view class="navList" @click="navGo(index)" v-for="(item,index) in tabBar.list" :key="index" :class="act == index?'active':''">
				<view class="icon">
					<image class="iconl" v-if="act == index" :src="item.selectedIconPath" mode=""></image>
					<image class="iconl" v-else :src="item.iconPath" mode=""></image>
				</view>
				<view class="title">
					{{item.text}}
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import Index from "../../pages/index/index";
	import Center from "../../pages/center/center";
	import shopIndex from "../../pages/shopIndex/shopIndex";
	import Order from "../../pages/order/order";
	export default {
		components: {
			Index,
			Center,
			shopIndex,
			Order
		},
		data() {
			return {
				tabBar: {
					"list": [{
							"pageName":"index",
							"iconPath": "/static/icon/home.png",
							"selectedIconPath": "/static/icon/home1.png",
							"text": "首页"
						}, {
							"pageName":"shop",
							"iconPath": "/static/icon/shop.png",
							"selectedIconPath": "/static/icon/shop1.png",
							"text": "购物车"
						},
						{
							"pageName":"center",
							"iconPath": "/static/icon/center.png",
							"selectedIconPath": "/static/icon/center1.png",
							"text": "个人中心"
						}
					]
					// "list": [{
					// 		"pageName": "shopIndex",
					// 		"iconPath": "/static/icon/home.png",
					// 		"selectedIconPath": "/static/icon/home1.png",
					// 		"text": "首页"
					// 	},
					// 	{
					// 		"pageName": "order",
					// 		"iconPath": "/static/icon/order.png",
					// 		"selectedIconPath": "/static/icon/center1.png",
					// 		"text": "订单管理"
					// 	},
					// 	{
					// 		"pageName": "center",
					// 		"iconPath": "/static/icon/center.png",
					// 		"selectedIconPath": "/static/icon/center1.png",
					// 		"text": "个人中心"
					// 	}
					// ]
				},
				act: "0",
				pageNames: ""
			}
		},
		onLoad() {
			this.pageNames = this.tabBar.list[0].pageName;
			// this.requestLogin();
		},
		methods: {
			navGo: function(index) {
				if (this.tabBar.list[index].pageName == 'shop') {
					uni.showToast({
						icon: "loading",
						title: "loading..."
					})
					uni.navigateTo({
						url: "/pages/shop/shop?type=1"
					})
				} else if (this.tabBar.list[index].pageName == 'order') {
					uni.showToast({
						icon: "loading",
						title: "loading..."
					})
					uni.navigateTo({
						url: "/pages/order/order"
					})
				} else {
					this.act = index;
					this.pageNames = this.tabBar.list[index].pageName
				}

			},
			requestLogin: function() {
				var that = this;
				uni.request({
					method: 'POST',
					url: that.websiteUrl + '/user/isLogin', //仅为示例，并非真实接口地址。
					data: {

					},
					success: (res) => {
						console.log(res.data);
						if (!res.data.success) {
							that.loginGo()
						}
					}
				});
			},
			loginGo: function() {
				uni.login({
					success(data) {
						console.log(data)
					}
				})
			}
		}
	}
</script>

<style>
	.tabBars {
		height: 100upx;
		width: 100%;
		padding-top: 10upx;
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		text-align: center;
		box-sizing: border-box;
		line-height: 1;
		background-color: #FFFFFF;
		border-top: 1px solid #f5f5f5;
	}

	.tabBars .navList {
		width: 33.33%;
	}

	.tabBars .navList .icon {
		width: 20%;
		position: relative;
		height: 0;
		padding-bottom: 20%;
		margin: 0 auto;
	}

	.tabBars .navList .iconl {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.tabBars .navList .title {
		font-size: 26upx;
	}

	.tabBars .navList.active .title {
		color: #CA0C16;
	}
</style>
