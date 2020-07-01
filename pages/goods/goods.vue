<template>
	<view class="goods_list">
		<goodsList :goods="goods" @goodsItemClick="goGoodsDetail"></goodsList>
		<view class="isOver" v-if="flag">-----&nbsp;&nbsp;我是有底线的&nbsp;&nbsp;-----</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		components:{goodsList},
		data() {
			return {
				pageindex:1,
				goods:[],
				flag:false
			}
		},
		methods: {
			// 获取商品列表数据
			async getGoodsList(callBack){
				const res = await this.$myRequest({
					url:'/api/getgoods?pageindex='+this.pageindex
				})
				this.goods = [...this.goods,...res.data.message]
				callBack && callBack()
			},
			// 跳转商品详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id
				})
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() {
			if(this.goods.length < this.pageindex*10) return this.flag = true
			this.pageindex++
			this.getGoodsList()
		},
		onPullDownRefresh(){
			this.pageindex = 1
			this.goods = []
			this.flag = false
			setTimeout(()=>{
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh()
				})
			},500)
		}
	}
</script>

<style lang="scss">
.goods_list{
	background-color: #eee;
}
.isOver{
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 18px;
}
</style>
