import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Home from '@//components/MyProfile/Home'
export default new Router({
  	routes: [
    	{
	  		path:'/',
	    	component:Home
	  	},
	  	{
	  		path:'/home',
	    	component:Home
	  	}
  	]
})
