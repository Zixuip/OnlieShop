<template>
	<view class="goods_detail">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.src" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 价格区 -->
		<view class="box1">
			<view class="price">
				<text>{{info.sell_price | priceFormat}}</text>
				<text>{{info.market_price | priceFormat}}</text>
			</view>
			<view class="goods_name">{{info.title}}</view>
		</view>

		<view class="line"></view>

		<view class="box2">
			<view>货号:{{info.goods_no}}</view>
			<view>库存:{{info.stock_quantity}}</view>
		</view>

		<view class="line"></view>

		<view class="box3">
			<view class="title">{{content.title}}</view>
			<view class="content">
				<rich-text :nodes="content.content"></rich-text>
			</view>
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		components: {
			uniGoodsNav
		},
		data() {
			return {
				id: 0,
				swipers: [],
				info: {},
				content: {},
				options: [{
						icon: 'headphones',
						text: '客服'
					},
					{
						icon: 'shop',
						text: '店铺',
					},
					{
						icon: 'cart',
						text: '购物车',
						info: 2
					}
				],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			async getSwipers(id) {
				const res = await this.$myRequest({
					url: '/api/getthumimages/' + this.id
				})
				this.swipers = res.data.message
				// console.log(this.swipers)
			},
			async getGoodsInfo() {
				const res = await this.$myRequest({
					url: '/api/goods/getinfo/' + this.id
				})
				this.info = res.data.message[0]
				// console.log(this.info)
			},
			async getGoodsContent() {
				const res = await this.$myRequest({
					url: '/api/goods/getdesc/' + this.id
				})
				this.content = res.data.message[0]
				console.log(this.content)
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getSwipers()
			this.getGoodsInfo()
			this.getGoodsContent()
		},
		onClick(e) {
			uni.showToast({
				title: `点击${e.content.text}`,
				icon: 'none'
			})
		},
		buttonClick(e) {
			console.log(e)
			this.options[2].info++
		}


	}
</script>

<style lang="scss">
	.goods_detail {
		swiper {
			height: 700rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.box1 {
			padding: 10px;

			.price {
				font-size: 35rpx;
				color: $shop-color;
				line-height: 80rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}

			.goods_name {
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}

		.box2 {
			padding: 0 10px;
			font-size: 32rpx;
			line-height: 60rpx;
		}

		.box3 {
			padding-bottom: 50rpx;

			.title {
				font-size: 32rpx;
				padding-left: 10px;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}

			.content {
				padding: 10px;
				font-size: 28rpx;
				color: #333;
				line-height: 50rpx;
			}
		}
	}

	.goods_nav {
		position: fixed;
		bottom: 0;
		width: 750rpx;
	}

	.line {
		height: 10rpx;
		width: 750rpx;
		background-color: #eee;
	}
</style>
