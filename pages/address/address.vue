<template>
	<view class="content">
		<view class="smallTitle">
			联系人
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">带清除按钮的输入框</view>
			<view class="with-fun">
				<input class="uni-input" placeholder="带清除按钮的输入框" :value="inputClearValue" @input="clearInput" />
				<view class="uni-icon uni-icon-clear" v-if="showClearIcon" @click="clearIcon"></view>
			</view>
		</view>
		<view class="smallTitle">
			服务地址
		</view>
	</view>
</template>

<script>
	import {
		uniIcon
	} from '@dcloudio/uni-ui'
	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				inputClearValue:'',
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
			}
		}
	}
</script>
<style scoped>
	
	
</style>
