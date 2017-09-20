// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from '../vuex/Store'
import Icon from 'vue-svg-icon/Icon.vue';

Vue.component('icon', Icon);
Vue.config.productionTip = false
Vue.prototype.$http = axios;



//api的地址分开发模式和产品模式
if (true) {
	// localhost:3000 等价于 127.0.0.1
	window.apiAddress = "http://127.0.0.1:3000"
}else{
	window.apiAddress = "http://120.25.107.16:3000"
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
