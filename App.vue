<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
<style>
	/*每个页面公共css */
	@import "/common/uni.css";
	page{
		height: 100%;
		background-color: #eee;
	}
	.mainColor{
		color: #ca0c16;
	}
	.mainBackColor{
		background-color: #ca0c16;
		color: #fff;
	}
	.parent{
		height: 0;
		position: relative;
	}
	.parent .son{
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		position: absolute;
	}
	view{
		line-height: 1;
	}
</style>
