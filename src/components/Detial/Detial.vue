<template>
	<div id="detail">
		<div>
			<div class="top">
				<img :src='detials.img2' alt="">
				<ul>
					<li>加入收藏</li>
					<li>进入助手</li>
				</ul>
			</div>
			<div class="read">
				<span class="title">阅读指数</span>
				<ul class="num">
					<li>
						<span>{{detials.pv}}</span>
						<span>阅读指数</span>
					</li>
					<li>
						<span>{{detials.col}}</span>
						<span>收藏数</span>
					</li>
				</ul>
			</div>
			<div class="read">
				<span  class="title">助手简介</span>
				<p>{{detials.desc}}</p>
			</div>
			<div class="read">
				<span class="title">猜你喜欢</span>	
				<ul class="like">
					<li v-for="item in caicai" @click="pushto(item.id,item.appname)">
						<img v-bind:style="{'min-width':(W-60)/4+'px'}" :src='item.img' alt="">
						<span>{{item.appname}}</span>
					</li>
				</ul>
			</div>	
		</div>
		<div class="shares" v-if="share" v-bind:style="{'height':H+'px','min-height':h+'px'}">
			
		</div>
		<div class="share" v-if="share">
			<ul>
				<li v-for="item in shareList">
					<div>
						<icon :name='item.icon' :scale="3"></icon>		
					</div>
					<span>{{item.title}}</span>
				</li>
			</ul>
			<button @click="cancel()">取消</button>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			detials:[],
			caicai:[],
			W:'',
			H:'',
			h:'',
			shareList:[
				{
					title:'QQ空间',
					icon:'qq空间'
				},
				{
					title:'微博',
					icon:'微博'
				},
				{
					title:'QQ',
					icon:'QQ'
				},
				{
					title:'腾讯微博',
					icon:'腾讯微博'
				}
			]
		}
	},
	activated(){
		var _this=this
		this.$http.get(window.apiAddress+'/detials?id='+this.$route.query.id).then((response)=>{
			response=response.data;
			_this.detials=response.data.info;
			_this.caicai=response.data.caicai
			//_this.desc=response.data.info.desc;
			console.log(_this.caicai)
		})
		this.W = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		this.H = document.body.offsetHeight;
		this.h =window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	},
	methods:{
		pushto(id,title){
			//window.location.href = url;
			this.$router.push('/detial?id='+id+'&title='+title+'&type=a');
			var _this=this
			this.$http.get(window.apiAddress+'/detials?id='+this.$route.query.id).then((response)=>{
				response=response.data;
				_this.detials=response.data.info;
				_this.caicai=response.data.caicai
				//_this.desc=response.data.info.desc;
				console.log(_this.caicai)
			})
			this.W = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		},
		cancel(){
			var id=this.$route.query.id;
			var title=this.$route.query.title;
			this.$router.push('/detial?id='+id+'&title='+title+'&type=b');
		}
	},
	computed:{
		share(){
			return this.$route.query.share
		}
	}
}
</script>
<style lang="scss" scoped>
	#detail{
		background:#E4F6DA;
		.top{
			background:white;
			padding-bottom:10px;
			margin-bottom:10px;
			img{
				height:200px;
				width:100%;
				min-height:200px;
				min-width:100%;
			}
			ul{
				display:flex;
				margin:5px 10px;
				li{
					flex:1;
					text-align:center;
					font-size:14px;
					padding:8px;
					margin:0 5px;
					border:1px solid #dbdbdb;
					border-radius:5px;
				}
				li:last-child{
					background:#F39D2C;
					color:white;
				}
			}
		}
		.read{
			// width:100%;
			display:flex;
			flex-direction:column;
			flex-flow:column;
			background:white;
			border-bottom:1px solid #dbdbdb;
			overflow:hidden;
			.title{
				display:flex;
				height:40px;
				line-height:40px;
				color:gray;
				padding:5px 10px;
			}
			ul.num{
				height:55px;
				display:flex;
				padding:8px 0;
				li{
					flex:1;
					display:flex;
					flex-direction:column;
					text-align:center;
					span{
						font-size:14px;
					}
					span:last-child{
						color:gray;
					}
				}
				li:last-child{
					border-left:1px solid #dbdbdb;
				}
			}
			p{
				color:gray;
				font-size:16px;
				padding:10px;
			}
			ul.like{
				display:flex;
				padding:5px 8px;
				width:100%;
				flex-direction:row;
				overflow-x:scroll;
				li{
					width:24%;
					margin:0 0.7%;
					border:1px solid #dbdbdb;
					padding:5px;
					img{
						max-height:110px;
						min-height:110px;
					}
					span{
						text-align:center;
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 1;
						-webkit-box-orient: vertical;
 						margin:5px;
 						font-size:12px;
					}
				}
			}
		}
		.shares{
			opacity:0.5;
			background:#D3D1D1;
			position:absolute;
			top:0;
			width:100%;
		}
		.share{
			//height:H px;
			z-index:5;
			background:white;
			width:100%;
			position:fixed;
			bottom:0;
			//left:-100%;
			//transform:translateX(20px)
			// transfrom:translateX(100%)
			// transition: all linear .5s; 
			//opacity: 0;
			ul{
				display:flex;
				opacity:1;
				li{
					flex:1;
					height:65px;
					text-align:center;
					display:flex;
					flex-direction:column;
					border-right:1px solid #dbdbdb;
					div{
						flex:1;
						padding:5px;
						padding-bottom:0;
					}
					span{
						flex:1;
					}
				}
			}
			button{
				height:40px;
				width:100%;
				justify-content:center;
				padding:5px;
				background:none;
				border:none;
				font-size:18px;
				display:flex;
				margin:10px auto;
				opacity:1;
			}
		}
	}
</style>