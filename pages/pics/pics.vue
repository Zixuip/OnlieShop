<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="left">
			<view :class="active===index?'active':''" v-for="(item,index) in categories" :key="item.id" @click="leftClickHandle(index,item.id)">{{item.title}}</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="right">
			<view class="items" v-for="item in secondData" :key="item.id">
				<image :src="item.img_url" @click="previewImg(item.img_url)"></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="secondData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				categories: [],
				active: 0,
				secondData: []
			}
		},
		methods: {
			async getPicsCate() {
				const res = await this.$myRequest({
					url: '/api/getimgcategory'
				})
				this.categories = res.data.message
				// console.log(res)
			},
			async leftClickHandle(index,id) {
				this.active = index
				// 获取右侧数据
				const res = await this.$myRequest({
					url: '/api/getimages/'+id
				})
				this.secondData = res.data.message
				// console.log(id)
			},
			previewImg(current){
				const urls = this.secondData.map(item=>{
					return item.img_url
				})
				uni.previewImage({
					current,
					urls
				})
			}
		},
		onLoad() {
			this.getPicsCate()
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		display: flex;

		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;

			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}

			.active {
				background-color: $shop-color;
				color: #fff;
			}
		}

		.right {
			height: 100%;
			width: 530rpx;
			margin: 0 auto;

			.items {
				image {
					width: 530rpx;
					height: 530rpx;
					border-radius: 5px;
				}

				text {
					font-size: 30rpx;
					line-height: 50rpx;
				}
			}
		}
	}
</style>
