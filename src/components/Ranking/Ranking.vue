<template>
	<div id="rank">
		<RankBar></RankBar>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>
<script>
import RankBar from './RankBar'
export default{
	data(){
		return{
			
		}
	},
	components:{RankBar},
	activated(){
		// console.log(this.$store.getters);
		// console.log("结果 ");
		console.log(this.$store.getters.GET_SELECTED_INDEX);
		this.$router.push(this.$store.getters.GET_SELECTED_INDEX);
		// console.log(this.$router)
	}
}
</script>
<style lang="scss">
	#rank{
		background:#ECF8E8;
		margin-bottom:64px;
	}
</style>