<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in goods" :key="item.id" @click="navigator(item.id)">
			<image :src="item.img_url" mode=""></image>
			<view class="price">
				<text>￥{{item.sell_price}}</text>
				<text>￥{{item.market_price}}</text>
			</view>
			<view class="name">
				<text>{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['goods'],
		data() {
			return {

			}
		},
		methods: {
			navigator(id) {
				this.$emit('goodsItemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		.goods_item {
			background: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;

			image {
				width: 100%;
				height: 225rpx;
				display: block;
				margin: 0 auto;
			}

			.price {
				color: $shop-color;
				font-size: 36rpx;
				margin: 15rpx 0;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}

			.name {
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>
