<template>
	<div id="search" v-bind:style="{height:H-50+'px'}">
		<div class="sousuo">
			<div>
				<input type="text" placeholder="请输入关键字...">
				<img src="../../assets/icon/清除.png" alt="">
			</div>
			<p><img src="../../assets/icon/search.png" alt=""></p>
		</div>
		<p class="text">大家都在看</p>
		<ul>
			<li v-for="item in keyword">{{item}}</li>
		</ul>
		<p class="text">搜索历史</p>
	</div>
</template>
<script>
export default{
	// this.w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	data(){
		return{
			keyword:[],
			H:''
		}
	},
	created(){
		var _this=this
		this.$http.get(window.apiAddress+'/keyword').then((response)=>{
			response=response.data;
			_this.keyword=response.data;
			console.log(_this.keyword)
		})
		this.H = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	}
}
</script>
<style lang="scss">
	#search{
		background:#E2F5E1;
		width:100%;
		.sousuo{
			display:flex;
			padding:15px;
			div{
				flex:12;
				position:relative;
				input{
					height:35px;
					width:100%;
					border-top-left-radius:15px;
					border-bottom-left-radius:15px;
					border-right:none;
					padding-left:10px;
				}
				img{
					position:absolute;
					top:3px;
					right:0;
					height:30px;
				}
			}
			p{
				flex:2;
				background:#E69B12;
				height:35px;
				text-align:center;
				border-top-right-radius:15px;
				border-bottom-right-radius:15px;
				img{
					height:35px;
				}
			}
		}
		p.text{
			margin:5px 15px;
			font-size:15px;
		}
		ul{
			display:flex;
			flex-flow:wrap;
			padding:10px;
			li{
				border:1px solid #dbdbdb;
				border-radius:10px;
				background:white;
				margin:5px;
				padding:2px 10px;
				font-size:15px;
			}
		}
	}
</style>