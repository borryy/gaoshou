<template>
	<view class="content">
		<view class="smallTitle">
			联系人
		</view>
		<view class="uni-form-item uni-column">
			<view class="with-fun">
				<view class="title">姓名:</view>
				<input class="uni-input" placeholder="请输入联系人姓名" :value="inputClearValue" @input="clearInput" />
				<view class="uni-icon uni-icon-clear"  v-if="showClearIcon" @click="clearIcon"></view>
			</view>
			<view class="with-fun">
				<view class="title">联系电话:</view>
				<input class="uni-input" placeholder="请输入联系人电话" :value="inputClearValue1" @input="clearInput" />
				<view class="uni-icon uni-icon-clear"  v-if="showClearIcon" @click="clearIcon"></view>
			</view>
		</view>
		<view class="smallTitle">
			服务地址
		</view>
		<view class="uni-form-item uni-column">
			<view class="with-fun" @click="chooseLocation">
				<view class="title">联系地址:</view>
				<input class="uni-input" placeholder="请选择联系地址" disabled="disabled" :value="inputClearValue" @input="clearInput" />
				<view class="uni-icon uni-icon-map" ></view>
				<view class="uni-icon uni-icon-arrowright" ></view>
			</view>
			<view class="with-fun">
				<view class="title">小区门牌号:</view>
				<input class="uni-input" placeholder="例:2号楼2单元1101" :value="inputClearValue1" @input="clearInput" />
				<view class="uni-icon uni-icon-clear"  v-if="showClearIcon" @click="clearIcon"></view>
			</view>
		</view>
		<view class="bottonBottom mainBackColor">
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
				inputClearValue:'',
				inputClearValue1:'',
				showClearIcon: false
			}
		},
		onLoad() {
			uni.setNavigationBarTitle({
			　　title:'服务地址'
			})
		},
		methods: {
			clearInput: function(event) {
				this.inputClearValue = event.target.value;
				if (event.target.value.length > 0) {
					this.showClearIcon = true;
				} else {
					this.showClearIcon = false;
				}
			},
			clearIcon: function() {
				this.inputClearValue = '';
				this.showClearIcon = false;
			},
			chooseLocation: function() {
				uni.showToast({
					icon:"loading",
					title:"loading..."
				})
				uni.chooseLocation({
					success: (data)=> {
						console.log(data)
					}
				})
			}
		}
	}
</script>
<style>
	page{
		background-color: #eee;
	}
</style>
<style scoped>
	.smallTitle{
		font-size: 24upx;
		padding-left: 20upx;
		padding-top: 20upx;
		padding-bottom: 20upx;
	}
	.uni-icon{
		font-size: 32upx;
		color: #555555;
		text-align: center;
	}
	.uni-column{
		display: flex;
		background-color: #FFFFFF;
		flex-wrap: nowrap;
		box-sizing: border-box;
	}
	.uni-column .title{
		width: 26%;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		text-align: center;
	}
	.bottonBottom{
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
