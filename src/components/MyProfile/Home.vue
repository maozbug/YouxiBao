<template>
	<div id="home">
		<ScrollAD></ScrollAD>
		<List></List>
		<Type></Type>
	</div>
</template>
<script>
import ScrollAD from '@/components/commons/ScrollAD'
import List from './list/List'
import Type from './list/type'
export default{
	components:{ScrollAD,List,Type},
}
</script>
<style lang="scss">
	
</style>