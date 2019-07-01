<template>
	<view class="content">
		<view class="smallTitle">
			联系人
		</view>
		<view class="uni-form-item uni-column">
			<view class="with-fun">
				<view class="title">姓名:</view>
				<input class="uni-input" placeholder="请输入联系人姓名" :value="addressList.userName" @input="clearInput" />
				<view class="uni-icon uni-icon-clear" v-if="addressList.showClearUserName" @click="clearIcon"></view>
			</view>
			<view class="with-fun">
				<view class="title">联系电话:</view>
				<input class="uni-input" placeholder="请输入联系人电话" :value="addressList.userPhone" @input="clearInputPhone" />
				<view class="uni-icon uni-icon-clear" v-if="addressList.showClearUserPhone" @click="clearIconPhone"></view>
			</view>
		</view>
		<view class="smallTitle">
			服务地址
		</view>
		<view class="uni-form-item uni-column">
			<view class="with-fun" @click="chooseLocation">
				<view class="title">联系地址:</view>
				<input class="uni-input" placeholder="请选择联系地址" disabled="disabled" :value="addressList.addr" />
				<view class="uni-icon uni-icon-map"></view>
				<view class="uni-icon uni-icon-arrowright"></view>
			</view>
			<view class="with-fun">
				<view class="title">门牌号:</view>
				<input class="uni-input" placeholder="例:2号楼2单元1101" :value="addressList.addrM" @input="clearInputAddrM" />
				<view class="uni-icon uni-icon-clear" v-if="addressList.addrM" @click="clearIconAddrM"></view>
			</view>
		</view>
		<view class="bottonBottom mainBackColor" @click="backgo()">
			确定地址
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
				addressList: {
					"userName": "",
					"showClearUserName": false,
					"userPhone": "",
					"showClearUserPhone": false,
					"addrM": "",
					"showClearUserAdderM": false,
					"addr": ""
				}
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '服务地址'
			})
		},
		
		methods: {
			//清除input
			clearInput: function(event) {
				this.addressList.userName = event.target.value;
				if (event.target.value.length > 0) {
					this.addressList.showClearUserName = true;
				} else {
					this.addressList.showClearUserName = false;
				}
			},
			clearIcon: function() {
				this.addressList.userName = '';
				this.addressList.showClearUserName = false;
			},
			clearInputPhone: function(event) {
				this.addressList.userPhone = event.target.value;
				if (event.target.value.length > 0) {
					this.addressList.showClearUserPhone = true;
				} else {
					this.addressList.showClearUserPhone = false;
				}
			},
			clearIconPhone: function() {
				this.addressList.userPhone = '';
				this.addressList.showClearUserPhone = false;
			},
			clearInputAddrM: function(event) {
				this.addressList.addrM = event.target.value;
				if (event.target.value.length > 0) {
					this.addressList.showClearUseraddrM = true;
				} else {
					this.addressList.showClearUseraddrM = false;
				}
			},
			clearIconAddrM: function() {
				this.addressList.addrM = '';
				this.addressList.showClearUseraddrM = false;
			},
			//跳转选择位置
			chooseLocation: function() {
				var that = this;
				uni.showToast({
					icon: "loading",
					title: "loading..."
				})
				uni.chooseLocation({
					success: (data) => {
						that.addressList.addr = data.name //调用成功直接设置地址
						console.log(data)
					},
					fail: function(e) {
						that.getLocations()
						
					}
				})
			},
			//获取位置权限
			getLocation:function(){
				uni.openSetting({
					success(res) {
						if (!res.authSetting['scope.userLocation']) {
							uni.authorize({
								scope: 'scope.userLocation',
								success(data) {
									console.log(data)
									that.addressList.addr = data.name
								},
								fail: function(e) {
									console.log(e)
								}
							})
						}
					}
				})
			},
			getLocations:function(){
				var that = this;
				uni.getSetting({
					success(res) {
						if (!res.authSetting['scope.userLocation']) {
							uni.authorize({
								scope: 'scope.userLocation',
								success(data) {
									that.addressList.addr = data.name
								},
								fail: function(e) {
									wx.showModal({
									  title: '警告',
									  cancelText:'不授权',
									  confirmText:'授权',
									  content: '若不授权获取位置信息，您将不能选择地址，点击授权，可重新授权位置信息权限，若点击不授权，可以删除本小程序后再添加即可使用',
									  success (res) {
										if (res.confirm) {
										  that.getLocation()
										} else if (res.cancel) {
										  
										}
									  }
									})
								}
							})
						}
					}
				})
			},
			backgo:function(){
				var pages = getCurrentPages();
				var currPage = pages[pages.length - 1]; //当前页面
				var prevPage = pages[pages.length - 2]; //上一个页面
				//直接调用上一个页面的setData()方法，把数据存到上一个页面中去
				var addressLists = JSON.stringify(this.addressList)
				prevPage.setData({
				     hope_job:addressLists
				})
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>
<style>
	page {
		background-color: #eee;
	}
</style>
<style scoped>
	.smallTitle {
		font-size: 24upx;
		padding-left: 20upx;
		padding-top: 20upx;
		padding-bottom: 20upx;
	}

	.uni-icon {
		font-size: 32upx;
		color: #555555;
		text-align: center;
	}

	.uni-column {
		display: flex;
		background-color: #FFFFFF;
		flex-wrap: nowrap;
		box-sizing: border-box;
	}

	.uni-column .title {
		width: 26%;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		text-align: center;
	}

	.bottonBottom {
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;
		text-align: center;
		font-size: 28upx;
		position: absolute;
		bottom: 0;
		right: 0;
	}
</style>
