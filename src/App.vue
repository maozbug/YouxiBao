<template>
  <div id="app">
    <!-- <ScrollAD></ScrollAD> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import resetCss from '@/assets/reset.css'
import Tabbar from '@/components/commons/Tabbar'
export default {
  name: 'app',
  components:{Tabbar},
  // watch:{
  //   $route(to,from){
  //     console.log(to);
  //     if (to.path=="/home") {
  //       console.log('跳转到上一次点击的页面')
  //       this.$router.push(this.$store.getters.getSelectedPath)
  //     }
  //   }
  // }
}
</script>

<style>
#app {
  padding-bottom: 64px;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
