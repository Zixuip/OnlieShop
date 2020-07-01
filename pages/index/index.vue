<template>
	<view class="home">
		<swiper circular="true" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in swiper" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>

		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="title">推荐商品</view>
			<goodsList :goods="goods" @goodsItemClick="goGoodsDetail"></goodsList>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		components: {
			goodsList
		},
		data() {
			return {
				swiper: [],
				goods: [],
				navs: [{
						icon: 'iconfont icon-shangpin',
						title: '商品分类',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '视频分类',
						path: '/pages/videos/videos'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},

					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					}
				]
			}
		},
		onLoad() {
			this.getSwipers(),
				this.getHotGoods()
		},
		methods: {
			// 获取轮播图
			async getSwipers() {
				const res = await this.$myRequest({
					url: '/api/getlunbo'
				})
				this.swiper = res.data.message
				// console.log(res)
			},

			// 获取热门商品列表
			async getHotGoods() {
				const res = await this.$myRequest({
					url: '/api/getgoods'
				})
				this.goods = res.data.message
				// console.log(res)
			},
			navClick(url) {
				uni.navigateTo({
					url
				})
			},
			// 跳转商品详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;
		}

		image {
			height: 100%;
			width: 100%;
		}

		.nav {
			display: flex;

			.nav_item {
				width: 25%;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background-color: $shop-color;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 60rpx;
				}

				text {
					font-size: 30rpx;
				}
			}
		}

		.hot_goods {
			background: #eee;
			overflow: hidden;
			margin-top: 10px;

			.title {
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				background: #fff;
				margin: 7rpx 0;
			}
		}

	}
</style>
