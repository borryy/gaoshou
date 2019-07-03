<template>
	<view class="content">
		<view class="statistics">
			<view class="statisticsList">
				<view class="number color1">
					65978
				</view>
				<view class="text">
					累计销售额
				</view>
			</view>
			<view class="statisticsList">
				<view class="number color2">
					956
				</view>
				<view class="text">
					历史订单量
				</view>
			</view>
			<view class="statisticsList">
				<view class="number color3">
					235
				</view>
				<view class="text">
					累计提成
				</view>
			</view>
		</view>
		<view class="tip">
			分时间段统计
		</view>
		<view class="chooseTime">
			<view class="chooseList" @click="toggleTab1()">
				<view class="timeImg parent">
					<image class="son" src="/static/icon/time.png" mode=""></image>
				</view>
				<view class="timeMsg">
					{{resultInfo1}}
				</view>
			</view>
			<view class="chooseList" @click="toggleTab()">
				<view class="timeImg parent">
					<image class="son" src="/static/icon/time.png" mode=""></image>
				</view>
				<view class="timeMsg">
					{{resultInfo}}
				</view>
			</view>
		</view>
		<view class="statistics">
			<view class="statisticsList">
				<view class="number color1">
					65978
				</view>
				<view class="text">
					销售额
				</view>
			</view>
			<view class="statisticsList">
				<view class="number color2">
					956
				</view>
				<view class="text">
					订单量
				</view>
			</view>
			<view class="statisticsList">
				<view class="number color3">
					235
				</view>
				<view class="text">
					提成
				</view>
			</view>
		</view>
		<w-picker mode="date" startYear="2016" endYear="2030" :defaultVal='defaultVal1' :current="true" @confirm="onConfirm1" ref="picker1" themeColor="#f00" ></w-picker>
		<w-picker mode="date" startYear="2016" endYear="2030" :defaultVal='defaultVal2' :current="true" @confirm="onConfirm2" ref="picker2" themeColor="#f00" ></w-picker>
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
				defaultVal1:[0,0,0],
				defaultVal2:[0,0,1],
				resultInfo:'2019-06-06',
				resultInfo1:'2019-06-06'
			}
		},
		onLoad() {
			
		},
		methods: {
			toggleTab:function() {
				this.$refs.picker1.show();
			},
			toggleTab1:function() {
				this.$refs.picker2.show();
			},
			onConfirm1:function(val){
				this.resultInfo=val.result;
				this.$refs.picker1.hide();
			},
			onConfirm2:function(val){
				this.resultInfo1=val.result;
				this.$refs.picker2.hide();
			},
			onGotUserInfo: function(e) {
				console.log(e)
			 }
		}
	}
</script>

<style scoped>
	.content{
		padding-top: 10upx;
		padding-bottom: 110upx;
		box-sizing: border-box;
	}
	.statistics{
		display: flex;
	}
	.tip{
		padding: 30upx;
		border-bottom: 1px solid #f5f5f5;
		border-top: 1px solid #f5f5f5;
		background-color: #FFFFFF;
		font-size: 28upx;
	}
	.statisticsList{
		width: 33.33%;
		text-align: center;
		background-color: #FFFFFF;
		padding: 36upx;
		box-sizing: border-box;
		border-right:1px solid #f5f5f5;
		border-bottom:1px solid #f5f5f5;
	}
	.statisticsList .number{
		font-size: 48upx;
		margin-bottom: 30upx;
	}
	.statisticsList .text{
		font-size: 30upx;
	}
	.color1{
		color: #007AFF;
	}
	.color2{
		color: #09BB07;
	}
	.color3{
		color:#8A6DE9;
	}
	.chooseTime{
		padding: 30upx;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FFFFFF;
		border-bottom: 1px solid #f5f5f5;
	}
	.chooseTime .chooseList{
		width: 50%;
		display: flex;
		align-items: center;
	}
	.chooseTime .chooseList .timeImg{
		width: 10%;
		padding-bottom: 10%;
	}
	.chooseTime .chooseList .timeMsg{
		flex: 1;
		margin-left: 10upx;
	}
</style>
