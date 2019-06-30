<template>
	<view class="content">
		<view class="addAddress" @click="goAddress()">
			<view class="mapIcon">
				<image class="mapImg" src="/static/icon/map.png" mode=""></image>
			</view>
			<view class="addressMsg" v-if="addrLe">
				<view class="names">
					白云飞
				</view>
				<view class="addrM">
					河北省石家庄市长安区博雅盛世1号楼一单元1101
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
			<view class="pList">
				<view class="pRadio parent">
					<image class="rad son" src="/static/icon/choose.png" mode=""></image>
				</view>
				<view class="pImg parent">
					<image class="im son" src="/static/icon/head.png" mode=""></image>
				</view>
				<view class="pMain">
					<view class="pTitle">
						美式美缝剂胶（蓝白色）
					</view>
					<view class="pNum">
						<view class="addNum">
							<uni-icon type="minus" color="#ca0c16" size="20" @click="minusNum()"></uni-icon>
							<input type="number" v-model="num">
							<uni-icon type="plus" color="#ca0c16" size="20" @click="addNum()"></uni-icon>
						</view>
					</view>
				</view>
				<view class="pPrice">
					￥62
				</view>
			</view>
			<view class="pList">
				<view class="pRadio parent">
					<image class="rad son" src="/static/icon/choose.png" mode=""></image>
				</view>
				<view class="pImg parent">
					<image class="im son" src="/static/icon/head.png" mode=""></image>
				</view>
				<view class="pMain">
					<view class="pTitle">
						美式美缝剂胶（蓝白色）
					</view>
					<view class="pNum">
						<view class="addNum">
							<uni-icon type="minus" color="#ca0c16" size="20" @click="minusNum()"></uni-icon>
							<input type="number" v-model="num">
							<uni-icon type="plus" color="#ca0c16" size="20" @click="addNum()"></uni-icon>
						</view>
					</view>
				</view>
				<view class="pPrice">
					￥62
				</view>
			</view>
			<view class="pList">
				<view class="pRadio parent">
					<image class="rad son" src="/static/icon/choose.png" mode=""></image>
				</view>
				<view class="pImg parent">
					<image class="im son" src="/static/icon/head.png" mode=""></image>
				</view>
				<view class="pMain">
					<view class="pTitle">
						美式美缝剂胶（蓝白色）
					</view>
					<view class="pNum">
						<view class="addNum">
							<uni-icon type="minus" color="#ca0c16" size="20" @click="minusNum()"></uni-icon>
							<input type="number" v-model="num">
							<uni-icon type="plus" color="#ca0c16" size="20" @click="addNum()"></uni-icon>
						</view>
					</view>
				</view>
				<view class="pPrice">
					￥62
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
				num:2,
				resultInfo:{
					result:"配送/服务日期（必填）"
				}
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
			　　title:'购物车'
			})
		},
		methods: {
			//增加规格数量
			addNum:function(){
				this.num=parseInt(this.num)+1
			},
			//减少规格数量
			minusNum:function(){
				if(this.num<1){
					this.num = 0
				}else{
					this.num=parseInt(this.num)-1
				}
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
		width: 60%;
		padding-left: 20upx;
		line-height: 2;
		box-sizing: border-box;
	}
	.productMain .pList .pMain .pNum{
		font-size: 24upx;
		color: #333333;
	}
	.productMain .pList .pPrice{
		width: 10%;
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
