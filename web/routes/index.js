var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	pageTile: 'lemon' 
  });
});

router.get('/bbs',function(req, res, next){
	res.render('bbs',{
		pageTile : 'bbs',
		headPath : 'images/test_head.png'
	})
})

router.get('/games',function(req, res, next){
	res.render('games',{
		pageTile : 'games',
		list : [
			{
				icon : 'images/test_head.png',
				name : 'game name',
				explain : 'game explain'
			},
			{
				icon : 'images/test_head.png',
				name : 'game name',
				explain : 'game explain'
			},
			{
				icon : 'images/test_head.png',
				name : 'game name',
				explain : 'game explain'
			},
			{
				icon : 'images/test_head.png',
				name : 'game name',
				explain : 'game explain'
			},
			{
				icon : 'images/test_head.png',
				name : 'game name',
				explain : 'game explain'
			},
			{
				icon : 'images/test_head.png',
				name : 'game name',
				explain : 'game explain'
			},
		]
	})
})

router.get('/game/content/:gameid',function(req, res, next){
	//var gameid = req.params.gameid;
	var gameid = '123456'//先使用测试gameid
	res.render('game_content',{
		pageTile : 'game_content',
		__icon : '/images/games/'+gameid+'/test_head.png'
	})
})

router.get('/admin/login',function(req, res, next){
	res.render('./admin/login',{
		message:""
	});
})

router.post('/admin/login',function(req, res, next){
	console.log('post : /admin/login');
	console.log(global.dbHandler.getModel);
	var s_username = global.dbHandler.getModel('user')
	console.log(s_suername);
	console.log('==========');
	var c_username = req.body.username
	var c_password = req.body.password
	


	s_username.findOnce({"username":c_username},function(err,doc){
		if(err){
			//res.send(500)
			console.log(err);
		}else if(!doc){
			req.session.error = '用户名不存在'
			res.send(404)
		}else{
			if(c_password!=doc.password){
				req.session.error = "密码错误"
				res.send(404)
			}else{
				req.session.user=doc
				res.send(200)
			}
		}
	})
	
})

router.get('/admin/index',function(req, res, next){
	res.render('admin/index',{})
})


module.exports = router;
