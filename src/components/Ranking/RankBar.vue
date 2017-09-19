<template>
	<div id="paihang">
		<ul class="rank">
			<li v-for="(url,item) in tleList" @click="push(url,item)" :class="{active:selectedIndex==item,'lastSelected':lastSelected==url}">
				{{item}}
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return{
			tleList:{
				"最新":'/ranking/new?title=助手排行',
				"推荐":'/ranking/tuijian?title=助手排行'
			},
			selectedIndex:{
				selectedIndex:''
			}
		}
	},
	methods:{
		push(url,item){
			this.$router.push(url);
			this.selectedIndex=item;
			this.$store.dispatch('select_Index',url);
			
		}
	},
	computed:{
		lastSelected(){
			//console.log(this.$store.getters.GET_SELECTED_INDEX)
			return this.$store.getters.GET_SELECTED_INDEX;
			//console.log(this.$store);
		}
	}

}
</script>
<style lang="scss" scoped>
	#paihang{
		width:100%;
		display:flex;
		.rank{
			width:40%;
			margin:5px auto;
			display:flex;
			// border:1px solid #dbdbdb;
			// border-radius:10px;
			li{
				flex:1;
				padding:2px 10px;
				text-align:center;
				border:1px solid #dbdbdb;
			}
			li:first-child{
				border-top-left-radius:8px;
				border-bottom-left-radius:8px;
			}
			li:last-child{
				border-top-right-radius:8px;
				border-bottom-right-radius:8px;
			}
		}
	}
	.active,.lastSelected{
		background:#33CA16;
		color:white;
	}
</style>