var express = require('express');
var app = express();
var request = require("request");

//解决跨域的问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//var homeApi = 'https://mrobot.pconline.com.cn/s-300/best/cms/listHomepagev2.xsp?sectionId=';0&type=2&version=&gsm=md5
var homeApi = 'http://thelper.api.18touch.com/helper';


// app.get('/api/home',function(req,res){
// 	console.log(req.query.name);
// 	//console.log(homeApi+req.query.sectionId+'&pageNo='+req.query.pageNo);
// 	request(homeApi+req.query.sectionId+'&pageNo='+req.query.pageNo,function(error,response,body){
// 		res.send(response.body);
// 	})
// })
// app.get('http://thelper.api.18touch.com/helper/home',function(req,res){
// 	console.log(res);
// })
app.get('/home',function(req,res){
	console.log(homeApi+'/home');
	request(homeApi+'/home',function(error,response,body){
		var bodyStr = response.body;
		var index = bodyStr.indexOf('{"ret"');
		var length = bodyStr.length;
		var rs = bodyStr.slice(index,length)
		// console.log(rs);
		res.send(rs);
	})
})
app.get('/scroll',function(req,res){
	//console.log(homeApi+'/home');
	request(homeApi+'/ad',function(error,response,body){
		var bodyStr = response.body;
		//console.log(bodyStr);
		var index = bodyStr.indexOf('{"ret"');
		var length = bodyStr.length;
		var rs = bodyStr.slice(index,length)
		//console.log(rs);
		res.send(rs);
	})
})
app.get('/type',function(req,res){
	console.log(homeApi+'/news?type=');
	request(homeApi+'/news?type='+req.query.type+'&limit='+req.query.limit,function(error,response,body){
		var bodyStr = response.body;
		//console.log(bodyStr);
		var index = bodyStr.indexOf('{"ret"');
		var length = bodyStr.length;
		var rs = bodyStr.slice(index,length)
		//console.log(rs);
		res.send(rs);
	})
})

app.get('/keyword',function(req,res){
	console.log(homeApi+'/keyword');
	request(homeApi+'/keyword',function(error,response,body){
		var bodyStr = response.body;
		//console.log(bodyStr);
		var index = bodyStr.indexOf('{"ret"');
		var length = bodyStr.length;
		var rs = bodyStr.slice(index,length)
		//console.log(rs);
		res.send(rs);
	})
})
app.get('/detials',function(req,res){
	//console.log(homeApi+'/helper_type');
	request(homeApi+'/helper_info?id='+req.query.id,function(error,response,body){
		var bodyStr = response.body;
		//console.log(bodyStr);
		var index = bodyStr.indexOf('{"ret"');
		var length = bodyStr.length;
		var rs = bodyStr.slice(index,length)
		//console.log(rs);
		res.send(rs);
	})
});


app.get('/tuis',function(req,res){
	//console.log(homeApi+'/helper_type');
	request(homeApi+'/tuis',function(error,response,body){
		var bodyStr = response.body;
		//console.log(bodyStr);
		var index = bodyStr.indexOf('{"ret"');
		var length = bodyStr.length;
		var rs = bodyStr.slice(index,length)
		//console.log(rs);
		res.send(rs);
	})
});

app.get('/category',function(req,res){
	//console.log(homeApi+'/helper_type');
	request(homeApi+'/helper_type',function(error,response,body){
		var bodyStr = response.body;
		//console.log(bodyStr);
		var index = bodyStr.indexOf('{"ret"');
		var length = bodyStr.length;
		var rs = bodyStr.slice(index,length)
		//console.log(rs);
		res.send(rs);
	})
});


//---------------获取资讯数据-------------------
var MsgScrollApi='http://app02.vgtime.com:8080/vgtime-app/api/v2'
var MessageApi='http://www.16p.com/1.1.5/json/news?type=%E5%B8%82%E5%9C%BA&page='
// app.post('/message',function(req,res){
// 	//console.log(homeApi+'/helper_type');
// 	request(MessageApi+'/homepage/listByTag.json',function(error,response,body){
// 		var rs = response.body;
// 		res.send(rs);
// 	})
// });
app.get('/message',function(req,res){
	//console.log(homeApi+'/helper_type');
	request(MessageApi+req.query.page,function(error,response,body){
		var rs = response.body;
		//console.log(rs);
		res.send(rs);
	})
});

app.get('/msgScroll',function(req,res){
	//console.log(homeApi+'/helper_type');
	request(MsgScrollApi+'/index/focusmap/list',function(error,response,body){
		var rs = response.body;

		res.send(rs);
	})
});
var server=app.listen(3000,function(){
	console.log("监听端口号:3000");
})