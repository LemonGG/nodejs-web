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


module.exports = router;
