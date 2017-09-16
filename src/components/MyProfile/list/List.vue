<template>
	<div id="list">
		<div class="mycfg">
			<div class="title"><span>▍</span>我的助手</div>
			<ul>
				<li v-for="item in mycfg">
					<img :src='item.img' alt="">
					<span>{{item.appname}}</span>
				</li>
				<li class="add">
					<div>+</div>
					<span>添加</span>
				</li>
			</ul>
		</div>
		<div class="tuis">
			<div class="title"><span>▍</span>精品推荐</div>
			<ul>
				<li v-for="item in tuis">
					<img :src='item.img' alt="">
					<span>{{item.appname}}</span>
				</li>
			</ul>
			
		</div>
		<div class="news">
			<div class="title"><span>▍</span>最新上架</div>
			<ul>
				<li v-for="item in news">
					<img :src='item.img' alt="">
					<span>{{item.appname}}</span>
				</li>				
			</ul>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			mycfg:[],
			news:[],
			tuis:[]
		}
	},
	created(){
		var _this=this
		this.$http.get(window.apiAddress+'/home').then((response)=>{
			response=response.data;
			//console.log(response);
			_this.mycfg=response.data.mycfg;
			_this.news=response.data.news;
			_this.tuis=response.data.tuis;
			// console.log(_this.adArr);
		})
	}
}
</script>
<style lang="scss" scpoed>
	#list{
		.title{
			margin:0 10px;
			padding:6px 0;
			font-size:18px;
			font-weight:800;
			// font-family:"楷体";
			border-bottom:1px solid #DBDBDB;
			span{
					color:green;
					font-size:20px;
					font-weight:900;
				}
		}
		ul{
			display:flex;
			flex-wrap: wrap;
			margin:5px 0;
			padding:8px;
			.add{
				div{
					height:130px;
					line-height:130px;
					font-size:120px;
					color:#CFCCCC;
					text-align:center;
					background:#E4E2E2;
				}
			}
			li{
				width:30%;
				display: flex;
				flex-direction: column;
				padding:5px;
				border:1px solid #DBDBDB;
				margin-right:3.3%;
				margin-bottom:5px;
				img{
					height:130px;
				}
				span{
					font-size:12px;
					text-align:center;
				}
			}
		}
	}
</style>