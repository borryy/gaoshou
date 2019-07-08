<template>
	<view class="content">
		<!-- 头部信息 -->
		<view class="topMsg">
			<view class="msgList" v-for="(item,index) in msgList" :key="index" :class="showActives == index?'actives':''" @click="showTitle(index)">
				<view class="msgIcon parent">
					<image class="son" v-if="showActives == index" :src="item.actimgs" mode=""></image>
					<image class="son" v-else :src="item.imgs" mode=""></image>
				</view>
				<view class="msgItem">
					{{item.title}}
				</view>
			</view>
		</view>
		<view class="main">
			<!-- 左侧分类 -->
			<scroll-view scroll-y="true" class="scroll-Y scroll-Y-L" >
				<view class="scrollMain">
					<view class="scroll-view-item listm" :class="titleId == item.id?'active':''" @click="changeItem(item.id)" v-for="item in mainList" :key="item.id">{{item.name}}</view>
				</view>
			</scroll-view>
			<!-- 右侧列表 -->
			<scroll-view scroll-y="true" class="scroll-Y scroll-Y-R">
				<view class="bannerImg">
					<image v-if="showActives == 0" src="/static/icon/banner2.png" mode=""></image>
					<image v-if="showActives == 1" src="/static/icon/banner1.png" mode=""></image>
				</view>
				<view class="scroll-view-item rightList" v-for="(item,index) in lists" :key="index">
					<view class="tipImg" @click="goProduct()">
						<!-- <image class="imgs" :src="item.fileUrl" mode=""></image> -->
						<image class="imgs" src="/static/icon/head.png" mode=""></image>
					</view>
					<view class="msg" @click="goProduct()">
						<view class="tit">
							{{item.name}}
						</view>
						<view class="small">
							{{item.details}}
						</view>
					</view>
					<view class="add" @click="showModalClick(index)">
						<image class="addimg" src="/static/icon/shop1.png" mode=""></image>
					</view>
				</view>
			</scroll-view>
			<!-- 底部弹框 -->
			<view class="modal" v-if="showModal" :class="showModal?'showModal':''">
				<view class="modalMain">
					<view class="modalTop">
						<view class="topImgv">
							<image class="topImg" src="/static/icon/head.png" mode=""></image>
							<!-- <image class="topImg" :src="modal.fileUrl" mode=""></image> -->
						</view>
						<view class="topMsgm">
							<view class="title">
								{{modal.name}}
							</view>
							<view class="small">
								{{modal.priceShow}} <text class="sm">元</text>
							</view>
							<view class="pcont">
								已选:{{colorActive.name}}
							</view>
						</view>
					</view>
					<view class="modalCenter">
						<view class="listColor" :class="colorOn == indexs?'on':''" @click="colorOnClick(indexs)" v-for="(item,indexs) in colorList" :key="indexs">
							{{item.name}}
						</view>
					</view>
					<view class="calculator">
						<text>长宽相等(mm)</text>
						<view class="caList">
							<view class="calistM">
								<text>砖长宽</text>
								<picker class="inputs" @change="bindPickerChange" :value="index" :range="array">
									<view class="picker">
									  {{calculator.whNum}}
									</view>
								</picker>
							</view>
							<view class="calistM">
								<text>砖数</text>
								<input type="number" v-model.number="calculator.zNum">
							</view>
							<view class="calistM">
								<text>缝宽</text>
								<input type="number" v-model.number="calculator.fNum">
							</view>
							<view class="calistM btn" @click="calculat()">
								计算
							</view>
						</view>
						<text>指定长宽(mm)</text>
						<view class="caList">
							<view class="calistM calistS">
								<text>砖长</text>
								<input type="number" v-model.number="calculator1.wNum">
							</view>
							<view class="calistM calistS">
								<text>砖宽</text>
								<input type="number" v-model.number="calculator1.hNum">
							</view>
							<view class="calistM calistS">
								<text>砖数</text> 
								<input type="number" v-model.number="calculator1.zNum">
							</view>
							<view class="calistM calistS">
								<text>缝宽</text>
								<input type="number" v-model.number="calculator1.fNum">
							</view>
							<view class="calistM calistS btn" @click="calculat1()">
								计算
							</view>
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
					<view class="modalBottom">
						<view class="addShop" @click="addShop()">
							加入购物车
						</view>
						<view class="goShop" @click="goShop()">
							立即购买
						</view>
					</view>
				</view>
				<view class="modalUnder" @click="showModalClick('s')"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue';
	export default {
		components: {uniIcon},
		data() { 
			return { 
				titleId: '',
				msgList:[
					{
						title:'高守施工',
						imgs:'/static/icon/shigong1.png',
						actimgs:'/static/icon/shigong.png'
					},
					{
						title:'高守精品',
						imgs:'/static/icon/jingxuan1.png',
						actimgs:'/static/icon/jingxuan.png'
					}
				],
				array:[800,600,300,1000,1200],
				showActives:'0',
				lists:[],
				num:0, 
				colorOn:0,
				colorActive:{},
				colorList:[],
				showModal:false,
				modal:{},
				index: 0, 
				calculator:{
					whNum:800,
					zNum:null,
					fNum:null
				},
				calculator1:{
					wNum:null,
					hNum:null,
					zNum:null,
					fNum:null
				},
				mainList:[]
			}
		},
		mounted() {
			this.queryTypeTree(this.showActives);
		},
		methods: {
			//顶部切换
			showTitle:function(index){
				this.showActives = index;
				this.queryTypeTree(index);
			},
			//计算器
			calculat:function(){
				var n = this.calculator.zNum;
				var w = this.calculator.whNum/1000;
				var h = this.calculator.whNum/1000;
				var fw = this.calculator.fNum;
				var sum = Math.ceil(n*7*fw/400/0.55/(w*2));
				this.num+=sum;
				if(sum){
					uni.showToast({
						icon:"none",
						title:"数量加"+sum
					})
				}else{
					uni.showToast({
						icon:"none",
						title:"请填写数据后再计算"
					})
					this.num = 0
				}
				this.calculator.zNum = null;
				this.calculator.whNum = 800;
				this.calculator.fNum = null;
				
			},
			calculat1:function(){
				var n = this.calculator1.zNum;
				var w = this.calculator1.wNum/1000;
				var h = this.calculator1.hNum/1000;
				var fw = this.calculator1.fNum;
				var sum = Math.ceil(n*7*fw/400/0.55/(w+h));
				this.num+=sum;
				if(sum){
					uni.showToast({
						icon:"none",
						title:"数量加"+sum
					})
				}else{
					uni.showToast({
						icon:"none",
						title:"请填写数据后再计算"
					})
					this.num = 0
				}
				this.calculator.zNum = null;
				this.calculator.wNum = null;
				this.calculator.hNum = null;
				this.calculator.fNum = null;
				
			},
			 bindPickerChange: function(e) {
				this.calculator.whNum = this.array[e.detail.value];
			  },
			//获取商品类型
			queryTypeTree:function(indexs){
				var that = this;
				uni.request({
					method: 'GET',
					url: that.websiteUrl + '/goodsType/queryTypeTree', 
					data: {
						
					},
					success: (res) => {
						if(res.data.success){
							that.mainList = res.data.data[indexs].children;
							that.titleId = that.mainList[0].id;
							that.queryGoodByType();
						}else{
							uni.showToast({
								icon:"none",
								title:res.data.msg
							})
							
						}
						
					}
				});
			},
			//根据类型获取商品列表
			queryGoodByType:function(){
				var that = this;
				uni.request({
					method: 'GET',
					url: that.websiteUrl + '/goods/queryGoodsList', 
					data: {
						typeId:that.titleId
					},
					success: (res) => {
						if(res.data.success){
							that.lists = res.data.data.rows;
							
						}else{
							uni.showToast({
								icon:"none",
								title:res.data.msg
							})
						}
						
					}
				});
			},
			//查询当前商品的规格
			queryGoodsSpecList:function(goodCode){
				var that = this;
				uni.request({
					method: 'GET',
					url: that.websiteUrl + '/goodsSpec/queryGoodsSpecList', 
					data: {
						goodCode:goodCode
					},
					success: (res) => {
						if(res.data.success){
							that.colorList = res.data.data.rows;
							that.colorActive = that.colorList[that.colorOn];
							// console.log(that.colorActive)
							// console.log(that.colorList)
						}else{
							uni.showToast({
								icon:"none",
								title:res.data.msg
							})
						}
						
					}
				});
			},
			//显示选择规格底部弹框
			showModalClick:function(index){
				var that = this;
				if(index!='s'){
					that.showModal = !that.showModal;
					that.modal = that.lists[index];
					
					that.queryGoodsSpecList(that.modal.goodsCode);
				}else{
					that.showModal = !that.showModal
				}
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
			},
			//底部弹框立即购买
			goShop:function(){
				uni.showToast({
					icon:"loading",
					title:"loading..."
				})
				this.insertCart('34cf8b92ad0746a9ab476735e36797e7','1221212',this.modal.goodsCode,this.colorActive.id,this.num,2)
			},
			//底部弹框加入购物车
			addShop:function(){
				if(this.num == 0){
					uni.showToast({
						title:"请选择购买数量！",
						icon:"none"
					})
				}else{
					this.insertCart('34cf8b92ad0746a9ab476735e36797e7','1221212',this.modal.goodsCode,this.colorActive.id,this.num,1)
				}
				
			},
			//加入购物车请求
			insertCart:function(userCode,shopCode,goodsCode,specId,num,type){
				var that = this;
				uni.request({
					method: 'POST',
					header:{"content-type": "application/x-www-form-urlencoded"},
					url: that.websiteUrl + '/cart/insertCart', 
					data: {
						userCode:userCode,
						shopCode:shopCode,
						goodsCode:goodsCode,
						specId:specId,
						num:num
					},
					success: (res) => {
						if(res.data.success){
							that.showModal = !that.showModal
							if(type == '1'){
								uni.showToast({
									title:"加入购物车成功！",
									icon:"none"
								})
								setTimeout(function(){
									uni.hideToast()
								},1500)
							}else{
								uni.navigateTo({
									url:"/pages/shop/shop?type="+type
								})
							}
							
						}else{
							uni.showToast({
								icon:"none",
								title:res.data.msg
							})
						}
						
					}
				});
			},
			
			//侧边栏点击分类事件
			changeItem:function(id){
				this.titleId = id
				this.queryGoodByType();
			},
			//点击跳转到商品详情
			goProduct:function(){
				uni.showToast({
					icon:"loading",
					title:"loading..."
				})
				uni.navigateTo({
					url:"/pages/product/product"
				})
			}
		}
	}
</script>

<style scoped>
	
	.topMsg{
		display: flex;
		box-sizing: border-box;
		background-color: #FFFFFF;
		color: #000000;
	}
	.topMsg .msgList{
		width: 50%;
		text-align: center;
		padding: 30upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid #FFFFFF;
	}
	.topMsg .msgList .msgIcon{
		width: 10%;
		padding-bottom: 10%;
		margin-right: 10upx;
	}
	.topMsg .msgList .item{
		width: 80%;
		font-size: 32upx;
	}
	.topMsg .actives{
		color: #CA0C16;
		border-bottom: 1px solid #CA0C16;
	}
	.bannerImg{
		width: 100%;
		height: 0;
		padding-bottom: 27%;
		position: relative;
	}
	.bannerImg image{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.content{
		height: 100%;
	}
	.main{
		height: 100%;
		/* overflow: hidden; */
	}
	.scroll-Y-L{
		width: 25%;
		position: absolute;
		top: 98upx;
		bottom: 0;
		background-color: #f5f5f5;
		left: 0;
		padding-bottom: 100upx;
	}
	.scroll-Y-L .scroll-view-item{
		text-align: center;
		padding: 30upx 0;
		font-size: 28upx;
	}
	.scroll-Y-L .scroll-view-item.active{
		background-color: #FFFFFF;
		color: #ca0c16;
		position: relative;
	}
	.scroll-Y-L .scroll-view-item.active::before{
		content: '';
		position: absolute;
		border-right: 2px solid #ca0c16;
		height: 30upx;
		left: 10upx;
		top: 34upx;
	}
	.scroll-Y-L .listTitle{
		padding: 20upx 0;
		font-size: 30upx;
		border-top: 1px solid #FFFFFF;
	}
	.scroll-Y-R{
		width: 75%;
		position: absolute;
		top: 98upx;
		bottom: 0;
		right: 0;
		background-color: #FFFFFF;
		padding-bottom: 100upx;
	}
	.scroll-Y-R .rightList{
		font-size: 28upx;
		padding: 20upx;
		box-sizing: border-box;
		display: flex;
		border-bottom: 1upx solid #f5f5f5;
	}
	.scroll-Y-R .rightList .tipImg{
		width: 25%;
		height: 0;
		padding-bottom: 25%;
		position: relative;
	}
	.scroll-Y-R .rightList .tipImg .imgs{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	.scroll-Y-R .rightList .msg{
		width: 55%;
		padding-left: 16upx;
		box-sizing: border-box;
	}
	.scroll-Y-R .rightList .msg view{
		line-height: 1.8;
	}
	.scroll-Y-R .rightList .msg .tit{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.scroll-Y-R .rightList .msg .small{
		font-size: 24upx;
		color: #555555;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		line-height: 1.2;
		margin-top: 10upx;
	}
	.scroll-Y-R .rightList .add{
		width: 20%;
		display: flex;
		justify-content: center;
		flex-wrap: nowrap;
		align-items:flex-end;
	}
	
	.scroll-Y-R .rightList .add .addimg{
		width: 50upx;
		height: 50upx;
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
	.modal .calculator{
		padding: 30upx;
		background-color: #EEEEEE;
	}
	.modal .calculator text{
		font-size: 22upx;
	}
	.modal .calculator .caList{
		padding: 10upx;
		display: flex;
	}
	.modal .calculator .caList .calistM{
		width: 25%;
		display: flex;
		font-size: 20upx;
		align-items: center;
		text-align: center;
	}
	.modal .calculator .caList .calistS{
		width: 20%;
	}
	.modal .calculator .caList text{
		display: block;
		width: 50%;
	}
	.modal .calculator .caList .btn{
		width: auto;
		padding: 20upx;
		box-sizing: border-box;
		font-size: 24upx;
		background-color: #CA0C16;
		color: #FFFFFF;
		text-align: center;
		border-radius: 10upx;
		margin-left: 20upx;
	}
	.modal .calculator .caList .calistM input{
		border: 1px solid #FFFFFF;
		width: 50%;
		
	}
	.inputs{
		width: 50%;
		height: 1.4rem;
		
		border: 1px solid #FFFFFF;
		
	}
	.inputs view{
		line-height: 1.4rem;
		font-size: 24upx;
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
		padding: 60upx 30upx 30upx 30upx;
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
	.modal .modalMain .modalNum{
		font-size: 28upx;
		display: flex;
		padding: 50upx 40upx;
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
</style>
