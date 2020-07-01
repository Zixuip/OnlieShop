<template>
	<view class="news">
		<newsItem @itemClick="goDetail" :list="newsList"></newsItem>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item/news-item.vue'
	export default {
		components: {
			newsItem
		},
		data() {
			return {
				newsList: []
			}
		},
		methods: {
			async getNews() {
				const res = await this.$myRequest({
					url: '/api/getnewslist'
				})
				this.newsList = res.data.message
				// console.log(this.newsList)
			},
			goDetail(id) {
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id='+id
				})
			}
		},
		onLoad() {
			this.getNews()
		},

	}
</script>

<style lang="scss">
	.news {}
</style>
