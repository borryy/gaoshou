<template>
	<view class="content">
		<view class="headerBanner parent">
			<image class="son" src="/static/icon/head.png" mode=""></image>
		</view>
		<view class="productContent">
			<view class="productTitle">
				美国美缝产品
			</view>
			<view class="productPrice">
				￥35
			</view>
			<view class="colorChoose" @click="showModalClick(1)">
				<view class="text">
					选择颜色/规格
				</view>
				<uni-icon type="arrowright" color="#333" size="16"></uni-icon>
			</view>
			<view class="productDetail">
				<view class="detailTitle">
					<uni-icon type="image" color="#666" size="12"></uni-icon> 详情
				</view>
				<view class="detile">
					<image src="/static/icon/head.png" mode=""></image>
					<image src="/static/icon/head.png" mode=""></image>
					<image src="/static/icon/head.png" mode=""></image>
				</view>
			</view>
			
		</view>
		<view class="fixBottom">
			<view class="addShop" @click="showModalClick(3)">
				加入购物车
			</view>
			<view class="goShop" @click="showModalClick(2)">
				立即购买
			</view>
		</view>
					<!-- 底部弹框 -->
		<view class="modal" v-if="showModal" :class="showModal?'showModal':''">
			<view class="modalMain">
				<view class="modalTop">
					<view class="topImgv">
						<image class="topImg" :src="colorActive.img" mode=""></image>
					</view>
					<view class="topMsgm">
						<view class="title">
							美缝产品
						</view>
						<view class="small">
							68 <text class="sm">元</text>
						</view>
						<view class="pcont">
							已选:{{colorActive.title}} <text v-if="num>0">× {{num}}</text>
						</view>
					</view>
				</view>
				<view class="modalCenter">
					<view class="listColor" :class="colorOn == indexs?'on':''" @click="colorOnClick(indexs)" v-for="(item,indexs) in colorList" :key="indexs">
						{{item.title}}
					</view>
				</view>
				<view class="modalNum">
					<view class="title">
						数量：
					</view>
					<view class="addNum">
						<uni-icon type="minus" color="#ca0c16" size="20" @click="minusNum()"></uni-icon>
						<input type="number" v-model="num">
						<uni-icon type="plus" color="#ca0c16" size="20" @click="addNum()"></uni-icon>
					</view>
				</view>
				<view class="modalBottom" v-if="shouItem == 1">
					<view class="addShop" @click="addShop()">
						加入购物车
					</view>
					<view class="goShop" @click="goShop()">
						立即购买
					</view>
				</view>
				<view class="modalBottom" v-if="shouItem == 2">
					<view class="goShops" @click="goShop()">
						确定
					</view>
				</view>
				<view class="modalBottom" v-if="shouItem == 3">
					<view class="goShops" @click="goShop()">
						确定1
					</view>
				</view>
			</view>
			<view class="modalUnder" @click="showModalClick()"></view>
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
				colorOn:'0',
				colorActive:{},
				num:'1',
				shouItem:'1',
				colorList:[
					{title:'蓝白色',img:'/static/logo.png'},
					{title:'蓝黑色',img:'/static/icon/head.png'},
					{title:'蓝绿色',img:'/static/logo.png'},
					{title:'蓝白色',img:'/static/icon/head.png'},
					{title:'蓝黑色',img:'/static/logo.png'},
					{title:'蓝绿色',img:'/static/icon/head.png'}
				],
				showModal:false
			}
		},
		onLoad() {
			this.colorActive = this.colorList[this.colorOn];
		},
		methods: {
			//显示选择规格底部弹框
			showModalClick:function(index){
				this.shouItem = index
				this.showModal = !this.showModal
			},
			//选择规格按钮事件
			colorOnClick:function(index){
				this.colorOn =index
				this.colorActive = this.colorList[this.colorOn];
			},
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
			}
		}
	}
</script>

<style scoped>
	.headerBanner{
		width: 100%;
		padding-bottom: 50%;
	}
	.productContent{
		padding: 30upx;
		box-sizing: border-box;
		background-color: #FFFFFF;
		padding-bottom: 110upx;
	}
	.productContent .productTitle{
		font-size: 32upx;
		padding: 20upx 0;
	}
	.productContent .productPrice{
		font-size: 40upx;
		color: #CA0C16;
		padding: 20upx 0;
	}
	.productContent .colorChoose{
		display: flex;
		justify-content: flex-end;
		padding: 30upx;
		margin: 0 -20upx;
		border-top: 1px solid #f5f5f5;
		border-bottom: 1px solid #f5f5f5;
	}
	.productContent .colorChoose .text{
		flex: 1;
	}
	.productDetail{
		background-color: #f5f5f5;
		margin: 0 -30upx;
	}
	.productDetail .detailTitle{
		text-align: center;
		padding: 10upx;
		box-sizing: border-box;
		font-size: 24upx;
		color: #666666;
	}
	.productDetail .detile image{
		width: 100%;
	}
	.modal{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		opacity: 0;
		transition: all 1s;
		-webkit-transition: all 1s;
	}
	.showModal{
		opacity: 1;
	}
	.modal .modalUnder{
		background-color: #000000;
		z-index: 1;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.3;
	}
	.modal .modalMain{
		width: 100%;
		background-color: #FFFFFF;
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 2;
	}
	.modal .modalMain .modalTop{
		display: flex;
		padding: 20upx;
		box-sizing: border-box;
		border-bottom: 1px solid #f5f5f5;
	}
	.modal .modalMain .modalTop .topImgv{
		width: 25%;
		height: 0;
		padding-bottom: 25%;
		position: relative;
	}
	.modal .modalMain .modalTop .topImg{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 20upx;
	}
	.modal .modalMain .modalTop .topMsgm{
		width: 75%;
		padding-left: 30upx;
		padding-right: 30upx;
		box-sizing: border-box;
		font-size: 28upx;
		line-height: 1.8;
		text-overflow:ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.modal .modalMain .modalTop .topMsgm view{
		line-height: 1.8;
	}
	.modal .modalMain .modalTop .topMsgm .small{
		font-size: 32upx;
		color: #ca0c16;
	}
	.modal .modalMain .modalTop .topMsgm .small .sm{
		font-size: 20upx;
	}
	.modal .modalMain .modalTop .topMsgm .pcont{
		font-size: 24upx;
		color: #555555;
		margin-top: 20upx;
	}
	.modal .modalMain .modalCenter{
		padding: 60upx 30upx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
	}
	.modal .modalMain .modalCenter .listColor{
		padding: 10upx 40upx;
		border-radius: 10upx;
		box-shadow: 5px 1px 18px #ccc;
		font-size: 20upx;
		margin:10upx;
		border: 1px solid #f5f5f5;
	}
	.modal .modalMain .modalCenter .listColor.on{
		background-color: #CA0C16;
		color: #FFFFFF;
	}
	.modal .modalMain .modalBottom{
		color: #FFFFFF;
		display: flex;
	}
	.modal .modalMain .modalBottom .addShop,.modal .modalMain .modalBottom .goShop{
		width: 50%;
		text-align: center;
		padding: 30upx 0;
		font-size: 28upx;
	}
	.modal .modalMain .modalBottom .addShop{
		background-color: #FFA600;
	}
	.modal .modalMain .modalBottom .goShop{
		background-color:#CA0C16;
	}
	.modal .modalMain .modalBottom .goShops{
		background-color:#CA0C16;
		width: 100%;
		text-align: center;
		padding: 30upx 0;
		font-size: 28upx;
	}
	.modal .modalMain .modalNum{
		font-size: 28upx;
		display: flex;
		padding: 0 40upx 50upx 40upx;
		align-items:center;
	}
	.modal .modalMain .modalNum .addNum{
		display: flex;
		justify-content: center;
		align-items:center;
	}
	.modal .modalMain .modalNum .addNum input{
		width: 50upx;
		height: 32upx;
		font-size: 24upx;
		text-align: center;
	}
	
	.fixBottom{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		color: #FFFFFF;
		display: flex;
	}
	.fixBottom .addShop,.fixBottom .goShop{
		width: 50%;
		text-align: center;
		padding: 30upx 0;
		font-size: 28upx;
	}
	.fixBottom .addShop{
		background-color: #FFA600;
	}
	.fixBottom .goShop{
		background-color:#CA0C16;
	}
</style>
