<template>
	<div id="scrollAd">
		<slider animation="fade" style="height:100%;">
		  <slider-item v-for="(item, index) in adArr" :key="index">
		    <img :src='item.img' alt="">
		    <span>{{item.title}}</span>
		  </slider-item>
		</slider>
	</div>
</template>
<script>
import { Slider, SliderItem } from 'vue-easy-slider'
export default{
	data(){
		return{
			adArr:[]
		}
	},
	created(){
		var _this=this
		this.$http.get(window.apiAddress+'/scroll').then((response)=>{
			response=response.data;
			_this.adArr=response.data.lunbo;
			//console.log(_this.adArr);
		})
	},
	components:{
		Slider,
    	SliderItem
	}
}
</script>
<style lang="scss"> 
	#scrollAd{
		width:100%;
		height:180px;
		span{
			position:absolute;
			bottom:0;
			background:rgba(225,225,225,0);
			color:white;
			width:100%;
		}
		img{
			width:100%;
			height:180px;
		}
	}
</style>