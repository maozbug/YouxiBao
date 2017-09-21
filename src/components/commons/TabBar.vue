<template>
	<div id="tabbar" v-if="!type">
		<ul>
			<li v-for="item in TabbarList" @click="pushTo(item.path,item.name)">
				<div v-if="title==item.title">
					<icon :name=item.select :scale="3"></icon>
				</div>
				<div v-else>
					<icon :name=item.icon :scale="3"></icon>
				</div>
				<span :class="{active:selectedIndex==item.name,'lastSelected':lastSelected==item.path,'title':title==item.title}">{{item.name}}</span>
			</li>
			<!-- <li @click="pushgo()">
				<div>
					<icon name="资讯" scale="3"></icon>
				</div>
				<span>资讯</span>
			</li> -->
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
					name:'我的',
					title:'超好玩助手',
					icon:'我的',
					select:'我的act'
				},
				{
					path:'/category?title=助手分类',
					name:'分类',
					title:'助手分类',
					icon:'分类',
					select:'分类2'
				},
				{
					path:'/ranking?title=助手排行',
					name:'排行',
					title:'助手排行',
					icon:'排行',
					select:'排行act'
				},
				{
					path:'/message?title=资讯',
					name:'资讯',
					title:'资讯',
					icon:'资讯',
					select:'资讯act'
					//redirect: 'http://m.18touch.com/'
				}
			],
			selectedIndex:{
				selectedIndex:''
			}
		}
	},
	methods:{
		pushTo(path,name){
			this.$router.push(path);
			this.selectedIndex=name;
			console.log(this.selectedIndex);
			this.$store.dispatch('select_Index',path);
		},
		pushgo(){
			window.location.href ='http://m.18touch.com/';
		}
	},
	computed: {
		title(){
			if(this.$route.query.title){
				return this.$route.query.title
			}else{
				 return '攻略宝'
			}
		},
		type(){
			return this.$route.query.type
		},
		lastSelected(){
			//console.log(this.$store.getters.GET_SELECTED_INDEX)
			return this.$store.getters.GET_SELECTED_INDEX;
			//console.log(this.$store);
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
		background:white;
		ul{
			display:flex;
			li{
				flex:1;
				height:65px;
				text-align:center;
				display:flex;
				flex-direction:column;
				div{
					flex:1;
					padding:5px;
					padding-bottom:0;
				}
				span{
					flex:1;
				}
				span.active,span.lastSelected,span.title{
					color:#4CD31C;
				}
				// .icon{
				// 	//position:absolute;
				// 	height:40px;
				// 	width:40px;
				// 	display:flex;
				// 	justify-content:center;
				// 	align-items:center;
				// 	max-height:40px;
				// 	max-width:40px;
				// 	padding:8px;
				// }
				// span{
				// 	flex:1;
				// 	font-size:14px;
				// }
			}
		}
	}
</style>