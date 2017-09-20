<template>
	<div id="category">
		<ScrollAD></ScrollAD>
		<ul>
			<li v-for="(item,index) in types"  @click="LookMore(index+1,item.name)">
				{{item.name}}
			</li>
		</ul>
	</div>
</template>
<script>
import ScrollAD from '@/components/commons/ScrollAD'
export default{
	data(){
		return{
			types:[]
		}
	},
	created(){
		var _this=this
		this.$http.get(window.apiAddress+'/category').then((response)=>{
			response=response.data;
			_this.types=response.data.types;
			//console.log(_this.adArr);
		})
	},
	components:{ScrollAD},
	methods:{
		LookMore(num,name){
			this.$router.push('/TypeView?type='+num+'&title='+name);
		}
	}
}
</script>
<style lang="scss">
	#category{
		margin-bottom:64px;
		ul{
			display:flex;
			flex-wrap:wrap;
			border-top:1px solid #dbdbdb;
			border-left:1px solid #dbdbdb;
			margin:20px;
			li{
				width: 50%;
				color: gray;
				display: flex;
				flex-direction: column;
				padding: 10px;
				font-size:18px;
				justify-content:center;
				align-items:center;
				border-bottom:1px solid #dbdbdb;
				border-right:1px solid #dbdbdb;
			}
		}
	}
</style>