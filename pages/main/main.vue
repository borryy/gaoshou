<template>
	<view class="bodyMain">
		<view class="cont">
			<index v-if="pageNames == 'index'"></index>
			<shop v-if="pageNames == 'shop'"></shop>
			<center v-if="pageNames == 'center'"></center>
		</view>
		<view class="tabBar">
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
	import Shop from "../../pages/shop/shop";
	import Center from "../../pages/center/center";
	export default {
		components:{
			Index,
			Shop,
			Center
		},
		data() {
			return { 
				tabBar: {
					"color": "#FFFFFF",
					"selectedColor": "#ffa600",
					"borderStyle": "white",
					"backgroundColor": "#ca0c16",
					"list": [{
							"pageName":"index",
							"pagePath": "/pages/index/index",
							"iconPath": "/static/icon/home.png",
							"selectedIconPath": "/static/icon/home1.png",
							"text": "首页"
						}, {
							"pageName":"shop",
							"pagePath": "/pages/shop/shop",
							"iconPath": "/static/icon/shop.png",
							"selectedIconPath": "/static/icon/shop1.png",
							"text": "购物车"
						},
						{
							"pageName":"center",
							"pagePath": "/pages/center/center",
							"iconPath": "/static/icon/center.png",
							"selectedIconPath": "/static/icon/center1.png",
							"text": "个人中心"
						}
					]
				},
				act:"0",
				pageNames:""
			}
		},
		onLoad() {
			this.pageNames = this.tabBar.list[0].pageName
		},
		methods: {
			navGo:function(index){
				this.act = index;
				this.pageNames = this.tabBar.list[index].pageName
			}
		}
	}
</script>

<style>
	.tabBar{
		height: 100upx;
		width: 100%;
		padding-top: 10upx;
		position: absolute;
		bottom: 0;
		left: 0;
		display: flex;
		text-align: center;
		background-color: #CA0C16;
		box-sizing: border-box;
	}
	.tabBar .navList{
		width: 33.33%;
	}
	.tabBar .navList .icon{
		width: 20%;
		position: relative;
		height: 0;
		padding-bottom: 20%;
		margin: 0 auto;
	}
	.tabBar .navList .iconl{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.tabBar .navList .title{
		color: #FFFFFF;
		font-size: 26upx;
	}
	.tabBar .navList.active .title{
		color: #FFA600;
	}
</style>
