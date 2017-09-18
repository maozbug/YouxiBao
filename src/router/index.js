import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Home from '@//components/MyProfile/Home'
import Category from '@//components/Category/category'
import Ranking from '@//components/Ranking/Ranking'
import tuijian from '@//components/Ranking/tuijian/tuijian'
import news from '@//components/Ranking/new/news'
import Message from '@//components/Message/message'
export default new Router({
  	routes: [
    	{
	  		path:'/',
	    	component:Home
	  	},
	  	{
	  		path:'/home',
	    	component:Home
	  	},
	  	{
	  		path:'/category',
	    	component:Category
	  	},
	  	{
	  		path:'/ranking',
	    	component:Ranking,
	    	children:[
		    	{
		    		path:'',
		    		component:news
		    	},
		    	{
		    		path:'tuijian',
		    		component:tuijian
		    	},
		    	{
		    		path:'new',
		    		component:news
		    	}

	    	]
	  	},
	  	{
	  		path:'/message',
	    	component:Message
	  	},
  	]
})
