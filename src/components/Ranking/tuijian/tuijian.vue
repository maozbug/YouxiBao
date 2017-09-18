<template>
	<div id="tuis">
		<ul>
			<li v-for="item in tuis">
				<div class="left">
					<img :src='item.img' alt="">
					<span>{{item.appname}}</span>
				</div>
				<div class="right">
					<div class="top">
						<h3>{{item.appname}}</h3>
						<span>加入收藏</span>
					</div>
					<p>{{item.desc}}</p>
					<div class="bottom">
						<span>更新：{{item.ctime}}</span>
						<span>阅读：{{item.pv}}</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return{
			tuis:[]
		}
	},
	created(){
		var _this=this
		this.$http.get(window.apiAddress+'/tuis').then((response)=>{
			response=response.data;
			//console.log(response);
			_this.tuis=response.data;
		})
	}
}
</script>
<style lang="scss">
	#tuis{
		ul{
			width:100%;
			li{
				display:flex;
				flex-direction:row;
				padding:5px;
				border-bottom:1px solid #dbdbdb;
				.left{
					width:25%;
					border:1px solid #dbdbdb;
					padding:5px;
					span{
						display:block;
						font-size:12px;
						text-align:center;
						// margin:0 auto;
					}
				}
				.right{
					width:75%;
					display:flex;
					flex-direction:column;
					div.top{
						padding:5px;
						margin:5px 0;
						h3{
						display:inline-block;
						font-size:18px;
						font-weight:bold;
						}
						span{
							position:absolute;
							right:10px;
							background:#F7830C;
							color:white;
							font-size:14px;
							padding:5px 10px;
							border-radius:6px;
						}
					}
					p{
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 3;
						-webkit-box-orient: vertical;
 						margin:5px;
					}
					div.bottom{
						position:relative;
						padding:5px;
						span{
							color:gray;
							font-size:12px;
						}
						span:first-child{
							position:absolute;
							left:5px;
						}
						span:last-child{
							position:absolute;
							right:5px;
						}
					}
				}
			}
		}
	}
</style>