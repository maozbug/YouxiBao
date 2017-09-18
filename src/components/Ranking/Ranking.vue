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
	components:{RankBar}
}
</script>
<style lang="scss">
	
</style>