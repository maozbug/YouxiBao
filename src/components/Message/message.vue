<template>
	<div id="message">
		<MsgScroll :msgScroll="msgScroll"></MsgScroll>
		<ul>
			<li v-for="item in message">
				<div class="left">
					<img :scr=item.img alt="">
				</div>
				<div class="right">
					<p>{{item.title}}</p>
					<div>
						<span>{{item.origin.value}}</span>
						<span>{{item.date.value}}</span>
					</div>
				</div>
			</li>
			<div @click="more()" class="more">加载更多</div>
		</ul>
	</div>
</template>
<script>
import MsgScroll from './MsgScroll'
export default{
	data(){
		return{
			message:[],
			msgScroll:[],
			page:1
		}
	},
	created(){
		var _this=this
		this.$http.get(window.apiAddress+'/message?page=1').then((response)=>{
			response=response.data.newslist;
			for(var item in response){
			    _this.message.push(response[item]);
			}
			// _this.message=response.newslist;
			console.log(_this.message)
		})
		this.$http.get(window.apiAddress+'/msgScroll').then((response)=>{
			response=response.data.data;
			_this.msgScroll=response;
			//console.log(_this.msgScroll);
		})
	},
	components:{MsgScroll},
	methods:{
		more(){
			this.page++
			var _this=this
			this.$http.get(window.apiAddress+'/message?page='+this.page).then(function(response){
				var response=response.data.newslist;
				var message = [];
			    for(var item in response){
			        message.push(response[item]);
			    }
			    console.log(message)
				for(var item of message){
					_this.message.push(item);
				}
				console.log(_this.message)
			}).catch(function(error){
				console.log(error);
			})
		}
	}
}
</script>
<style lang="scss" scoped>
	#message{
		margin-bottom:64px;
		ul{
			width:100%;
			li{
				display:flex;
				flex-direction:row;
				padding:5px;
				border-bottom:1px solid #dbdbdb;
				.left{
					width:35%;
					img{
						min-height:90px;
						width:100%;
						max-height:100px;
						//max-width:80px;
						border:none;
					}
				}
				.right{
					width:65%;
					padding:5px;
					position:relative;
					p{
						overflow : hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
 						margin:5px 0 10px 0;
 						font-size:16px;
					}
					span{
							color:gray;
							font-size:15px;
							margin:10px 0;
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
				img{
					height:100px;
					width:200px;
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