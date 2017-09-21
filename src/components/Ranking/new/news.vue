<template>
	<div id="news">
		<ul>
			<li v-for="item in news" @click="pushto(item.id,item.appname)">
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
			<div class="more" @click="more()">
				加载更多
			</div>
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return{
			news:[],
			num:10
		}
	},
	created(){
		var _this=this
		this.$http.get(window.apiAddress+'/type?type=&limit=10').then((response)=>{
			response=response.data;
			//console.log(response);
			_this.news=response.data;
		})
	},
	methods:{
		pushto(id,title){
			//window.location.href = url;
			this.$router.push('/detial?id='+id+'&title='+title+'&type=b');
		},
		more(){
			//console.log(this.num);
			this.num=this.num+10;
			//console.log(this.num);
			var _this=this
			this.$http.get(window.apiAddress+'/type?type=&limit='+this.num).then((response)=>{
				response=response.data;
				//console.log(response);
				_this.news=response.data;
			})
		}
	}
}
</script>
<style lang="scss">
	#news{
		background:white;
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
					img{
						min-height:90px;
						min-width:80px;
					}
					span{
						font-size:12px;
						text-align:center;
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 1;
						-webkit-box-orient: vertical;
					}
				}
				.right{
					width:75%;
					display:flex;
					flex-direction:column;
					div.top{
						padding:5px;
						h3{
						display:inline-block;
						font-size:16px;
						font-weight:bold;
						}
						span{
							position:absolute;
							right:10px;
							background:#F7830C;
							color:white;
							font-size:13px;
							padding:3px 10px;
							border-radius:3px;
						}
					}
					p{
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 3;
						-webkit-box-orient: vertical;
 						margin:5px;
 						font-size:14px;
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
			div.more{
				padding:5px;
				text-align:center;
				color:#666666;
			}
		}
	}
</style>