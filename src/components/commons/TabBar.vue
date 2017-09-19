<template>
	<div id="tabbar">
		<ul>
			<li v-for="item in TabbarList" @click="pushTo(item.path)">
				{{item.name}}
			</li>
			<li @click="pushgo()">资讯</li>
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return{
			TabbarList:[
				{
					path:'/home?title=超好玩助手',
					name:'我的'
				},
				{
					path:'/category?title=助手分类',
					name:'分类'
				},
				{
					path:'/ranking?title=助手排行',
					name:'排行'
				},
				// {
				// 	path:'/message',
				// 	name:'资讯'
				// 	//redirect: 'http://m.18touch.com/'
				// }
			]
		}
	},
	methods:{
		pushTo(path){
			this.$router.push(path);
		},
		pushgo(){
			window.location.href ='http://m.18touch.com/';
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