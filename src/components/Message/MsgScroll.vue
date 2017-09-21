<template>
	<div id="MsgScroll">
		<slider animation="fade" style="height:100%;">
		  <slider-item v-for="(item,index) in msgScroll" :key="index" @>
		    <img :src='item.cover'>
		    <span>{{item.title}}</span>
		  </slider-item>
		</slider>
	</div>
</template>
<script>
import { Slider, SliderItem } from 'vue-easy-slider'
export default{
	props:['msgScroll'],
	components:{
		Slider,
    	SliderItem
	}
}
</script>
<style lang="scss">
	#MsgScroll{
		width:100%;
		height:200px;
		position:reative;
		span{
			position:absolute;
			bottom:10px;
			left:10px;
			//background:rgba(225,225,225,0);
			color:white;
			width:100%;
		}
		img{
			width:100%;
			height:200px;
		}
	}
</style>