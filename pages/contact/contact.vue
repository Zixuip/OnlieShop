<template>
	<view class="contact">
		<image class="img" src="https://s1.ax1x.com/2020/06/30/NIwS1S.jpg" mode=""></image>
		<view class="info">
			<view @click="phone">联系电话：{{phoneNum}}</view>
			<view>公司地址：XX省XX市XX区XXXXXX号</view>
		</view>
		<map class="map" ></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// latitude:0,
				// longitude:0
				phoneNum: 1234567890
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:'this.phoneNum'
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view{
				line-height: 60rpx;
				border-bottom: 1px solid #eee;
			}
		}
		
		.map{
			width: 750rpx;
			height: 750rpx;
			
		}
	}
</style>
