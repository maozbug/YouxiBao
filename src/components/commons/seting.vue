<template>
	<div id="seting" v-bind:style="{height:H-50+'px'}">
		<ul>
			<li>
				<img src="../../assets/icon/推荐.png" alt="">
				<p>推荐给小伙伴</p>
				<span>〉</span>
			</li>
			<li>
				<img src="../../assets/icon/清除缓存.png" alt="">
				<p>清除缓存</p>
				<span>907.05KB</span>
			</li>
			<li>
				<img src="../../assets/icon/检查更新.png" alt="">
				<p>检查更新</p>
				<span>2.3.2</span>
			</li>
			<li>
				<img src="../../assets/icon/意见反馈.png" alt="">
				<p>意见反馈</p>
				<span>〉</span>
			</li>
			<li>
				<img src="../../assets/icon/关于我们.png" alt="">
				<p>关于我们</p>
				<span>〉</span>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return{
			H:''
		}
	},
	created(){
		this.H = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		console.log(this.H)
	}
}
</script>
<style lang="scss">
	#seting{
		background:#E2F5E1;
		width:100%;
		ul{
			padding-top:18px;
			li{
				display:flex;
				background:white;
				//flex-direction:column;
				height:55px;
				width:100%;
				//text-align:center;
				img{
					margin:7.5px;
					flex:1;
					height:40px;
					width:40px;
				}
				p{
					flex:7;
					line-height:50px;
					padding:0 10px;
					//border-bottom:1px solid #B2A9A9;
				}
				span{
					flex:2;
					text-align:right;
					line-height:50px;
					padding:5px;
					//border-bottom:1px solid #B2A9A9;
				}
			}
			li:first-child{
				border-top:1px solid #dbdbdb;
			}
			li:nth-child(2n){
				border-top:0.5px solid #dbdbdb;
				span,p{
					border-bottom:1px solid #dbdbdb;
				}
			}
			li:nth-child(2n-1){
				margin-bottom:18px;
				border-bottom:1px solid #dbdbdb;
			}

		}
	}
</style>