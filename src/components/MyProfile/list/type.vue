 <template>
 	<div id="types">
 		<div class="type">
 			<div class="title">角色扮演<span @click="LookMore(1,'角色扮演')">查看更多></span></div>
 			<ul>
 				<li v-for="(item,index) in type1" v-if="index<6" @click="pushto(item.id,item.appname)">
 					<img v-bind:style="{'min-width':(w-60)/3+'px'}" :src='item.img' alt="">
 					<span>{{item.appname}}</span>
 					<button>进入</button>
 				</li>
 			</ul>
 		</div>
 		<div class="type">
 			<div class="title">卡牌手游<span  @click="LookMore(2,'卡牌手游')">查看更多></span></div>
 			<ul>
 				<li v-for="(item,index) in type2" v-if="index<6" @click="pushto(item.id,item.appname)">
 					<img v-bind:style="{'min-width':(w-60)/3+'px'}" :src='item.img' alt="">
 					<span>{{item.appname}}</span>
 					<button>进入</button>
 				</li>
 			</ul>
 		</div>
 		<div class="type">
 			<div class="title">动作冒险<span @click="LookMore(3,'动作冒险')">查看更多></span></div>
 			<ul>
 				<li v-for="(item,index) in type3" v-if="index<6" @click="pushto(item.id,item.appname)">
 					<img v-bind:style="{'min-width':(w-60)/3+'px'}" :src='item.img' alt="">
 					<span>{{item.appname}}</span>
 					<button>进入</button>
 				</li>
 			</ul>
 		</div>
 		<div class="type">
 			<div class="title">塔防策略<span  @click="LookMore(4,'塔防策略')">查看更多></span></div>
 			<ul>
 				<li v-for="(item,index) in type4" v-if="index<6" @click="pushto(item.id,item.appname)">
 					<img v-bind:style="{'min-width':(w-60)/3+'px'}" :src='item.img' alt="">
 					<span>{{item.appname}}</span>
 					<button>进入</button>
 				</li>
 			</ul>
 		</div>
 	</div>
 </template>
 <script>
 export default{
 	data(){
 		return{
 			type1:[],
 			type2:[],
 			type3:[],
 			type4:[],
 			w:''
 		}
 	},
 	created(){
 		var _this=this
		this.$http.get(window.apiAddress+'/type?type='+1).then((response)=>{
			response=response.data;
			//console.log(response);
			_this.type1=response.data;
			//console.log(_this.type1)
		})
		this.$http.get(window.apiAddress+'/type?type='+2).then((response)=>{
			response=response.data;
			//console.log(response);
			_this.type2=response.data;
			//console.log(_this.type2)
		})
		this.$http.get(window.apiAddress+'/type?type='+3).then((response)=>{
			response=response.data;
			//console.log(response);
			_this.type3=response.data;
			//console.log(_this.type3)
		})
		this.$http.get(window.apiAddress+'/type?type='+4).then((response)=>{
			response=response.data;
			//console.log(response);
			_this.type4=response.data;
			//console.log(_this.type4)
		})
		this.w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
 		
 	},
	methods:{
		pushto(id,title){
			//window.location.href = url;
			this.$router.push('/detial?id='+id+'&title='+title+'&type=b');
		},
		LookMore(num,title){
			//alert(title);
			this.$router.push('/TypeView?type='+num+'&title='+title);
		}
	}
 }
 </script>	
 <style lang="scss">
 	#types{
 		.type{
 			overflow:hidden;
 			ul{
 				width:100%;
 				display:flex;
				flex-direction:row;
				margin:5px 0;
				overflow-x:scroll;
 				li{ 
 					width:33.3%;
					display: flex;
					flex-direction: column;
					padding:0 10px;
					margin-bottom:5px;
					border-right:1px solid #DBDBDB;
					img{
						height:100px;
						border-radius:10px;
					}
					span{
						text-align:center;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						color:gray;
						margin:5px 0;
					}
					button{
						width:60%;
						background:white;
						border:none;
						border:1px solid gray;
						border-radius:5px;
						margin:0 auto;
						color:gray;
					}
 				}
 			}
			.title{
				padding:6px 0;
				font-size:18px;
				font-weight:800;
				border-bottom:1px solid #DBDBDB;
				span{
					color:#C5C2C2;
					font-size:15px;
					position:absolute;
					right:0;
				}
			}
 		}
 	}
 </style>