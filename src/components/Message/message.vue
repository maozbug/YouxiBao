<template>
	<div id="message" v-html="html">
		
	</div>
</template>
<script>
export default{
	data(){
		return{
			html:''
		}
	},
	created(){
		var _this=this
		this.$http.get(window.apiAddress+'/message').then((response)=>{
			response=response.data;
			console.log(response);
			_this.html=response.body;
		})
	}
}
</script>
<style lang="scss">
	
</style>