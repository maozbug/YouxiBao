<template>
	<div id="head">
		<div>
			<img v-if="!type" @click="Seting()" src="../../assets/icon/设置.png" alt="">
			<img v-if="type" @click="back()" src="../../assets/icon/返回图标.png" alt="">
		</div>
		<div class="title"><span>{{title}}</span></div>
		<div>
			<img v-if="!type" @click="Search()" class="search" src="../../assets/icon/搜索.png" alt="">
			<img v-if="type=='b'" @click="share()" class="icon" src="../../assets/icon/分享.png" alt="">
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{

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
		}
	},
	methods:{
		back(){
			this.$router.back(-1)
		},
		Seting(){
			this.$router.push('/seting?title=设置&type=a');
		},
		Search(){
			this.$router.push('/search?title=搜索&type=a');
		},
		share(){
			var id=this.$route.query.id;
			var title=this.$route.query.title;
			this.$router.push('/detial?id='+id+'&title='+title+'&type=b&share=" "');
		}
	}
}
</script>
<style lang="scss">
	#head{
		position:fixed;
		top:0;
		left:0;
		right:0;
		z-index:2;
		height:50px;
		background:#21A721;
		width:100%;
		display:flex;
		div{
			flex:1;
			padding:10px;
			img{
				height:30px;
			}
			img.search{
				float:right;
			}
			.icon{
				float:right;
			}
		}
		.title{
			line-height:50px;
			text-align:center;
			color:white;
			font-size:18px;
			padding:0;
		}
	}
</style>