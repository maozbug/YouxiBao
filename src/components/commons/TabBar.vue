<template>
	<div id="tabbar">
		<ul>
			<li v-for="item in TabbarList" @click="pushTo(item.path)">
				{{item.name}}
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return{
			TabbarList:[
				{
					path:'/home',
					name:'我的'
				},
				{
					path:'/category',
					name:'分类'
				},
				{
					path:'/ranking',
					name:'排行'
				},
				{
					path:'/message',
					name:'资讯'
					//redirect: 'http://m.18touch.com/'
				}
			]
		}
	},
	methods:{
		pushTo(path){
			this.$router.push(path);
		}
	}
}
</script>
<style lang="scss">
	#tabbar{
		position:fixed;
		bottom:0;
		left:0;
		right:0;
		width:100%;
		background:#DBDBDB;
		ul{
			display:flex;
			li{
				flex:1;
				height:65px;
				// justify-content:center;
				// align-items:center;
				text-align:center;
				line-height:65px;
			}
		}
	}
</style>