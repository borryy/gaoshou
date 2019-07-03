<template>
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
								that.cartList = res.data.data.rows[res.data.data.total-1]
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
		position: absolute;
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
