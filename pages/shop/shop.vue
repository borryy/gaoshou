<!-- <template>
	<view class="content">
		<view class="addAddress" @click="goAddress()">
			<view class="mapIcon">
				<image class="mapImg" src="/static/icon/map.png" mode=""></image>
			</view>
			<view class="addressMsg" v-if="hope_job!=''">
				<view class="names">
					{{hope_job.userName}} - {{hope_job.userPhone}}
				</view>
				<view class="addrM">
					{{hope_job.addr}} {{hope_job.addrM}}
				</view>
			</view>
			<view class="addressMsg" v-else>
				<view class="names">
					请选择配送/服务地址
				</view>
			</view>
			<view class="addrRight">
				<uni-icon type="arrowright"></uni-icon>
			</view>
		</view>
		<view class="addAddress" @tap="toggleTab()">
			<view class="mapIcon">
				<image class="mapImg" src="/static/icon/time.png" mode=""></image>
			</view>
			<view class="addressMsg" >
				<view class="names" >
					{{resultInfo.result}}
				</view>
				
			</view>

			<view class="addrRight">
				<uni-icon type="arrowright"></uni-icon>
			</view>
			
		</view>
		<w-picker mode="limit" dayStep="30" step="1"  :current="true" @confirm="onConfirm" ref="picker" themeColor="#f00"></w-picker>
		<view class="productMain">
			
			<view class="pList" v-for="(item,index) in cartList" :key="index">
				<view class="pRadio parent">
					<image class="rad son" src="/static/icon/choose.png" mode=""></image>
				</view>
				<view class="pImg parent">
					<image class="im son" src="/static/icon/head.png" mode=""></image>
				</view>
				<view class="pMain">
					<view class="pTitle">
						{{item.goodsName}}（{{item.goodsSpecName}}）
					</view>
					<view class="pNum">
						<view class="addNum">
							<uni-icon type="minus" color="#ca0c16" size="20" @click="minusNum(index)"></uni-icon>
							<input type="number" v-model="item.num">
							<uni-icon type="plus" color="#ca0c16" size="20" @click="addNum(index)"></uni-icon>
						</view>
					</view>
				</view>
				<view class="pPrice">
					￥{{priceShow}}
				</view>
			</view>
			
			<view class="pList">
				<view class="pZhu">
					人工费
				</view>
				<view class="zhu">
					进场后计算
				</view>
			</view>
		</view>
		<view class="shopBottom">
			<view class="sum bottomL">
				合计：<text class="sumPrice">30</text><text class="small">元</text>
			</view>
			<view class="goPay bottomL">
				去支付
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue';
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components: {
			uniIcon,
			wPicker 
		},
		data() {
			return {
				addrLe: true,
				timeLe: true,
				hope_job:'',
				num:2,
				cartType:'',
				cartList:[],
				resultInfo:{
					result:"配送/服务日期（必填）"
				}
			}
		},
		onLoad(options) {
			uni.setNavigationBarTitle({
			　　title:'购物车'
			})
			this.cartType = options.type
			// console.log(options.type)
			this.queryCartList('34cf8b92ad0746a9ab476735e36797e7');
		},
		onShow:function(e){
		       let pages = getCurrentPages();
		       let currPage = pages[pages.length-1];
		       if (currPage.data.hope_job==""){
		            
		        }else{
		            this.hope_job = JSON.parse(currPage.data.hope_job)
		        }
		 },
		methods: {
			//增加规格数量
			addNum:function(index){
				this.cartList[index].num=parseInt(this.cartList[index].num)+1
			},
			//减少规格数量
			minusNum:function(index){
				if(this.cartList[index].num<1){
					this.cartList[index].num = 0
				}else{
					this.cartList[index].num=parseInt(this.cartList[index].num)-1
				}
			},
			//查看购物车列表
			queryCartList:function(userCode){
				var that = this;
				uni.request({
					method: 'GET',
					url: that.websiteUrl + '/cart/queryCartList', 
					data: {
						userCode:userCode,
					},
					success: (res) => {
						if(res.data.success){
							if(that.cartType == 1){
								that.cartList = res.data.data.rows
							}else{
								that.cartList.push(res.data.data.rows[res.data.data.total-1]) 
							}
							console.log(that.cartList)
						}else{
							uni.showToast({
								icon:"none",
								title:res.data.msg
							})
						}
						
					}
				});
			},
			goAddress:function(){
				uni.showToast({
					icon:"loading",
					title:"loading..."
				})
				uni.navigateTo({
					url:"/pages/address/address"
				}) 
			},
			toggleTab:function() {
				this.$refs.picker.show();
			},
			onConfirm:function(val){
				console.log(val);
				this.resultInfo=val;
				this.$refs.picker.hide();
			}
			
		}
	}
</script>
<style>
	page{
		background-color: #eee;
		padding: 20upx;
		padding-bottom: 100upx;
		box-sizing: border-box;
	}
</style>
<style scoped>
	.content{
		background-color: #FFFFFF;
	}
	.addAddress {
		padding: 20upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #EEEEEE;
		font-size: 28upx;
	}

	.addAddress .mapIcon {
		width: 5%;
		height: 0;
		padding-bottom: 5%;
		position: relative;
	}

	.addAddress .mapIcon .mapImg {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	.addAddress .addressMsg view{
		line-height: 1.5;
	}
	.addAddress .addressMsg {
		width: 90%;
		padding-left: 30upx;
		box-sizing: border-box;
	}

	.addAddress .addressMsg .addrM {
		font-size: 24upx;
		padding-top: 20upx;
	}

	.addAddress .addrRight {
		width: 5%;
	}
	.productMain{
		font-size: 28upx;
		border-top: 20upx solid #EEEEEE;
	}
	.productMain .pList{
		display: flex;
		padding: 20upx;
		box-sizing: border-box;
		align-items: center;
		border-bottom: 2px solid #EEEEEE;
	}
	.productMain .pList .pRadio{
		width: 5%;
		padding-bottom: 5%;
	}
	.productMain .pList .pImg{
		width: 20%;
		padding-bottom: 20%;
		margin-left: 5%;
		border-radius: 10upx;
		overflow: hidden;
	}
	.productMain .pList .pMain{
		width: 50%;
		padding-left: 20upx;
		line-height: 2;
		box-sizing: border-box;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1; 
		overflow: hidden;
	}
	.productMain .pList .pMain .pNum{
		font-size: 24upx;
		color: #333333;
	}
	.productMain .pList .pPrice{
		width: 20%;
		text-align: right;
	}
	.productMain .addNum{
		display: flex;
		align-items:center;
		padding-top: 20upx;
	}
	.productMain .addNum input{
		width: 50upx;
		height: 32upx;
		font-size: 24upx;
		text-align: center;
	}
	.productMain .pList .pZhu{
		width: 70%;
	}
	.productMain .pList  .zhu{
		width: 30%;
		text-align: right;
		font-size: 24upx;
	}
	.shopBottom{
		width: 100%;
		height: 100upx;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		font-size: 30upx;
		text-align: center;
		
	}
	.shopBottom .bottomL{
		width: 50%;
		background-color: #FFFFFF;
		line-height: 100upx;
	}
	.shopBottom .bottomL .sumPrice{
		font-size: 34upx;
		color: #CA0C16;
	}
	.shopBottom .bottomL .small{
		font-size: 20upx;
	}
	.shopBottom .goPay{
		background-color: #CA0C16;
		color: #FFFFFF;
	}
</style>
 -->


<template>
	<view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<view class="tis" v-if="goodsList.length==0">购物车是空的哦~</view>
			<view class="row" v-for="(row,index) in goodsList" :key="index">
				<!-- 删除按钮 -->
				<view class="menu" @tap.stop="deleteGoods(row.id)">
					<view class="icon shanchu"></view>
				</view>
				<!-- 商品 -->
				<view class="carrier" :class="[theIndex==index?'open':oldIndex==index?'close':'']" @touchstart="touchStart(index,$event)"
				 @touchmove="touchMove(index,$event)" @touchend="touchEnd(index,$event)">
					<!-- checkbox -->
					<view class="checkbox-box" @tap="selected(index)">
						<view class="checkbox">
							<view :class="[row.selected?'on':'']"></view>
						</view>
					</view>
					<!-- 商品信息 -->
					<view class="goods-info" @tap="toGoods(row)">
						<view class="img">
							<image :src="row.fileUrl"></image>
						</view>
						<view class="info">
							<view class="title">{{row.goodsName}}</view>
							<view class="spec">规格:{{row.goodsSpecName}}</view>
							<view class="price-number">
								<view class="price">￥{{row.priceShow}}</view>
								<view class="number">
									<view class="sub" @tap.stop="sub(index)">
										<view class="icon jian"></view>
									</view>
									<view class="input" @tap.stop="discard">
										<input type="number" v-model="row.num" @input="sum($event,index)" />
									</view>
									<view class="add" @tap.stop="add(index)">
										<view class="icon jia"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 脚部菜单 -->
		<view class="footer" :style="{bottom:footerbottom}">
			<view class="checkbox-box" @tap="allSelect">
				<view class="checkbox">
					<view :class="[isAllselected?'on':'']"></view>
				</view>
				<view class="text">全选</view>
			</view>
			<view class="delBtn" @tap="deleteList" v-if="selectedList.length>0">删除</view>
			<view class="settlement">
				<view class="sum">合计:<view class="money">￥{{sumPrice}}</view>
				</view>
				<view class="btn" @tap="toConfirmation">结算({{selectedList.length}})</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sumPrice: '0.00',
				headerPosition: "fixed",
				headerTop: null,
				statusTop: null,
				selectedList: [],
				isAllselected: false,
				usercode: '',
				goodsList: [],
				//控制滑动效果
				theIndex: null,
				oldIndex: null,
				isStop: false
			}
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
			this.headerTop = e.scrollTop >= 0 ? null : 0;
			this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onLoad() {
			this.usercode = uni.getStorageSync('usercode')
			this.getCarts()
			//兼容H5下结算条位置
			// #ifdef H5
			this.footerbottom = document.getElementsByTagName('uni-tabbar')[0].offsetHeight + 'px';
			// #endif
			// #ifdef APP-PLUS
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
		},
		methods: {
			// 获取购物车商品
			getCarts() {
				var _this = this
				uni.request({
					url: _this.websiteUrl + '/cart/queryCartList',
					type: "get",
					dataType: 'json',
					data: {
						userCode: _this.usercode,
					},
					success: function(res) {
						if (res.data.success) {
							_this.goodsList = res.data.data.rows.map(item => {
								item.selected = false
								item.fileUrl = _this.websiteUrl + item.fileUrl
								return item
							})
						}
					}
				})
			},
			//加入商品 参数 goods:商品数据
			joinGoods(goods) {
				/*
				 * 这里只是展示一种添加逻辑，模板并没有做从其他页面加入商品到购物车的具体动作，
				 * 在实际应用上，前端并不会直接插入记录到goodsList这一个动作，一般是更新列表和本地列表缓存。
				 * 一般商城购物车的增删改动作是由后端来完成的,
				 * 后端记录后返回前端更新前端缓存
				 */
				let len = this.goodsList.length;
				let isFind = false; //是否找到ID一样的商品
				for (let i = 0; i < len; i++) {
					let row = this.goodsList[i];
					if (row.id == goods.id) { //找到商品一样的商品
						this.goodsList[i].number++; //数量自增
						isFind = true; //找到一样的商品
						break; //跳出循环
					}
				}
				if (!isFind) {
					//没有找到一样的商品，新增一行到购物车商品列表头部
					this.goodsList[i].unshift(goods);
				}
			},
			//控制左滑删除效果-begin
			touchStart(index, event) {
				//多点触控不触发
				if (event.touches.length > 1) {
					this.isStop = true;
					return;
				}
				this.oldIndex = this.theIndex;
				this.theIndex = null;
				//初始坐标
				this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
			},
			touchMove(index, event) {
				//多点触控不触发
				if (event.touches.length > 1) {
					this.isStop = true;
					return;
				}
				let moveX = event.touches[0].pageX - this.initXY[0];
				let moveY = event.touches[0].pageY - this.initXY[1];

				if (this.isStop || Math.abs(moveX) < 5) {
					return;
				}
				if (Math.abs(moveY) > Math.abs(moveX)) {
					// 竖向滑动-不触发左滑效果
					this.isStop = true;
					return;
				}

				if (moveX < 0) {
					this.theIndex = index;
					this.isStop = true;
				} else if (moveX > 0) {
					if (this.theIndex != null && this.oldIndex == this.theIndex) {
						this.oldIndex = index;
						this.theIndex = null;
						this.isStop = true;
						setTimeout(() => {
							this.oldIndex = null;
						}, 150)
					}
				}
			},
			touchEnd(index, $event) {
				//结束禁止触发效果
				this.isStop = false;
			},
			//控制左滑删除效果-end


			//商品跳转
			toGoods(e) {
				uni.showToast({
					title: '商品' + e.id,
					icon: "none"
				});
				uni.navigateTo({
					url: '../product/product'
				});
			},
			//跳转确认订单页面
			toConfirmation() {
				let tmpList = [];
				let len = this.goodsList.length;
				for (let i = 0; i < len; i++) {
					if (this.goodsList[i].selected) {
						tmpList.push(this.goodsList[i]);
					}
				}
				if (tmpList.length < 1) {
					uni.showToast({
						title: '请选择商品结算',
						icon: 'none'
					});
					return;
				}
				uni.setStorage({
					key: 'buylist',
					data: tmpList,
					success: () => {
						uni.navigateTo({
							url: '/pages/shop/confirmation/confirmation'
						})
					}
				})
			},
			//删除商品
			deleteGoods(id) {
				let len = this.goodsList.length;
				for (let i = 0; i < len; i++) {
					if (id == this.goodsList[i].id) {
						this.goodsList.splice(i, 1);
						break;
					}
				}
				this.selectedList.splice(this.selectedList.indexOf(id), 1);
				this.sum();
				this.oldIndex = null;
				this.theIndex = null;
			},
			// 删除商品s
			deleteList() {
				let len = this.selectedList.length;
				while (this.selectedList.length > 0) {
					this.deleteGoods(this.selectedList[0]);
				}
				this.selectedList = [];
				this.isAllselected = this.selectedList.length == this.goodsList.length && this.goodsList.length > 0;
				this.sum();
			},
			// 选中商品
			selected(index) {
				this.goodsList[index].selected = this.goodsList[index].selected ? false : true;
				let i = this.selectedList.indexOf(this.goodsList[index].id);
				i > -1 ? this.selectedList.splice(i, 1) : this.selectedList.push(this.goodsList[index].id);
				this.isAllselected = this.selectedList.length == this.goodsList.length;
				this.sum();
			},
			//全选
			allSelect() {
				let len = this.goodsList.length;
				let arr = [];
				for (let i = 0; i < len; i++) {
					this.goodsList[i].selected = this.isAllselected ? false : true;
					arr.push(this.goodsList[i].id);
				}
				this.selectedList = this.isAllselected ? [] : arr;
				this.isAllselected = this.isAllselected || this.goodsList.length == 0 ? false : true;
				this.sum();
			},
			// 减少数量
			sub(index) {
				if (this.goodsList[index].num <= 1) {
					return;
				}
				this.goodsList[index].num--;
				this.sum();
			},
			// 增加数量
			add(index) {
				this.goodsList[index].num++;
				this.sum();
			},
			// 合计
			sum(e, index) {
				this.sumPrice = 0;
				let len = this.goodsList.length;
				for (let i = 0; i < len; i++) {
					if (this.goodsList[i].selected) {
						if (e && i == index) {
							this.sumPrice = this.sumPrice + (e.detail.value * this.goodsList[i].priceShow);
						} else {
							this.sumPrice = this.sumPrice + (this.goodsList[i].num * this.goodsList[i].priceShow);
						}
					}
				}
				this.sumPrice = this.sumPrice.toFixed(2);
			},
			discard() {
				//丢弃
			}


		}
	}
</script>
<style lang="scss">
	page {
		position: relative;
	}

	@font-face {
		font-family: "HMfont-home";
		src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOEAAsAAAAAB7wAAAM1AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDAIJNATYCJAMQCwoABCAFhG0HPhu1BsiOw7jha84s8T+CgOyq6unevTlAeAkRhAhQBjj8eJfmMg/oB5whSgaFspy7AqbpwE3Py3/j9j+X07uGyFHr21lua9HYi9rUCzDeGtBYmw4o0AJJ0BvGLmiJxyEAC3yIQhSVPL9BF4U5TgBi7ChtQzfjQKFYWEdgrFiqEBsxoGurtMfAhuD74g8JQgcNg8ScWjf8xoPz7/nfD8iFpoV0eQi86XQAWwUSiAIUiJGVhgEaUSAKiYXau0kKoKOjwVRthd8PmExIBRvmWH95INCQIIyYqVYAJKGghO/5Dg4B3wtxaPD9QAoS4IOM1gEzYBbAMkT16iIQGPxsopS5ScAcK23LiaBDpzyk1aGLHtsvhVrL7adDD55016wPXnDfcr7T3lcE2TVcP2fNhZM7WeiEhVp44vx9C5vVD6+eEgaLTZvEot3HL1lawlnXLK3XnISDllbWwmrmGjlRLdxq2bpme1RAeqXtzWh6g0F//wCCnRiN2diwr2+Yse3iEs20g05Q5tT0BikOXwKf79vsoEvb6p6xjVhHP92nwDJmX+9hwsf26dXbPiNvZ/98x67/+5T+ev0aWxbXCwOX41zLxia+O73B6Y57fN1u6GvN+Zmbc8XITigTAcB0Rl6X8QB4hDgEpoXypZz2q37D5FVnVa9t1n/dUgHw8uKMq9BmWqjoJoP3zevM+zG8jmVKE5hKpRShw9WTFZW04D7TscAC+B0RcOD9FHLnzqkg0HFOQMMMb5DoBKGKGgUGLEkCIzq5YEEkpastcWQyDYQyByJYBkBgx2nQsOEaSOx4girqOzDgwj8wYickWNAiHLe0JESMsiicTLaQh84PBm6WKlst/TD9hXQV25wWBLQP4jJw435MXD58RynxFDPKT30golBxluAtOI3iOMOcs5Bc2fFF8sPd2OFVBO24WQJ9CmEIG4HwQAb4ARmFS0aK8qoL/cLnXyA0FTE23FBSZf+AYEqCzpF4YojrgN5J004lt/LKFD7RHDAVQYEMh8lIQErAICImJgOZWD0ohHARdhg5wJdzSKxVaXhX6c7y8uQN1wAWmLOU0IQUShiQo0fZTceadqaMdP2uXwEAAAAA') format('woff2');
	}

	.icon {
		font-family: "HMfont-home" !important;
		font-size: 60upx;
		font-style: normal;
		color: #000000;

		&.jia {
			&:before {
				content: "\e641";
			}
		}

		&.jian {
			&:before {
				content: "\e643";
			}
		}

		&.shanchu {
			&:before {
				content: "\e6a4";
			}
		}

	}

	.checkbox-box {
		display: flex;
		align-items: center;

		.checkbox {
			width: 28upx;
			height: 28upx;
			border-radius: 100%;
			border: solid 1px #CA0C16;
			display: flex;
			justify-content: center;
			align-items: center;

			.on {
				width: 14upx;
				height: 14upx;
				border-radius: 100%;
				background-color: #CA0C16;
			}
		}

		.text {
			font-size: 28upx;
			margin-left: 10upx;
		}
	}

	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height); //覆盖样式
		/*  #endif  */
	}

	.header {
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #fff;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);

		/*  #endif  */
		.title {
			font-size: 36upx;
		}

	}

	.place {

		background-color: #ffffff;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}

	.goods-list {
		width: 100%;
		padding: 20upx 0 120upx 0;

		.tis {
			width: 100%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
		}

		.row {
			width: calc(92%);
			height: calc(22vw + 40upx);
			margin: 20upx auto;

			border-radius: 15upx;
			box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
			display: flex;
			align-items: center;
			position: relative;
			overflow: hidden;
			z-index: 4;
			border: 0;

			.menu {
				.icon {
					color: #fff;
					// font-size: 25upx;
				}

				position: absolute;
				width: 30%;
				height: 100%;
				right: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: red;
				color: #fff;
				z-index: 2;
			}

			.carrier {
				@keyframes showMenu {
					0% {
						transform: translateX(0);
					}

					100% {
						transform: translateX(-30%);
					}
				}

				@keyframes closeMenu {
					0% {
						transform: translateX(-30%);
					}

					100% {
						transform: translateX(0);
					}
				}

				&.open {
					animation: showMenu 0.25s linear both;
				}

				&.close {
					animation: closeMenu 0.15s linear both;
				}

				background-color: #fff;

				.checkbox-box {
					padding-left: 20upx;
					flex-shrink: 0;
					height: 22vw;
					margin-right: 20upx;
				}

				position: absolute;
				width: 100%;
				padding: 0 0;
				height: 100%;
				z-index: 3;
				display: flex;
				align-items: center;

				.goods-info {
					width: 100%;
					display: flex;
					padding-right: 20upx;

					.img {
						width: 22vw;
						height: 22vw;
						border-radius: 10upx;
						overflow: hidden;
						flex-shrink: 0;
						margin-right: 10upx;

						image {
							width: 22vw;
							height: 22vw;
						}
					}

					.info {
						width: 100%;
						height: 22vw;
						overflow: hidden;
						display: flex;
						flex-wrap: wrap;
						position: relative;

						.title {
							width: 100%;
							font-size: 24upx;
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							// text-align: justify;
							overflow: hidden;
							line-height: 30upx;
						}

						.spec {
							font-size: 20upx;
							background-color: #f3f3f3;
							color: #a7a7a7;
							height: 30upx;
							display: flex;
							align-items: center;
							padding: 0 10upx;
							border-radius: 15upx;
							margin-bottom: 20vw;
						}

						.price-number {
							position: absolute;
							width: 100%;
							bottom: 0upx;
							display: flex;
							justify-content: space-between;
							align-items: flex-end;
							font-size: 28upx;
							height: 60upx;

							.price {}

							.number {
								display: flex;
								justify-content: center;
								align-items: flex-end;

								.input {
									width: 60upx;
									height: 60upx;
									margin: 0 10upx;
									background-color: #f3f3f3;

									input {
										width: 60upx;
										height: 60upx;
										display: flex;
										justify-content: center;
										align-items: center;
										text-align: center;
										font-size: 26upx;
									}
								}

								.sub,
								.add {
									width: 45upx;
									height: 45upx;
									background-color: #f3f3f3;
									border-radius: 5upx;

									.icon {
										font-size: 22upx;
										width: 45upx;
										height: 45upx;
										display: flex;
										justify-content: center;
										align-items: center;

									}
								}
							}
						}
					}
				}
			}
		}
	}

	.footer {
		width: 92%;
		padding: 0 4%;
		background-color: #fbfbfb;
		height: 100upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28upx;
		position: fixed;
		bottom: 0upx;
		z-index: 5;

		.delBtn {
			border: solid 1upx #CA0C16;
			color: #CA0C16;
			padding: 0 30upx;
			height: 50upx;
			border-radius: 30upx;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.settlement {
			width: 60%;
			display: flex;
			justify-content: flex-end;
			align-items: center;

			.sum {
				width: 50%;
				font-size: 28upx;
				margin-right: 10upx;
				display: flex;
				justify-content: flex-end;

				.money {
					font-weight: 600;
				}
			}

			.btn {
				padding: 0 30upx;
				height: 50upx;
				background-color: #CA0C16;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;

				border-radius: 30upx;
			}
		}
	}
</style>
