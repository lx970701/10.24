var express = require('express');
var router = express.Router();
var fs = require('fs');
var lx=0;
var lx2=0;
/* GET home page. */
router.get('/', function(req, res, next) {
	lx++;
	fs.readFile('public/59.txt','utf-8',function(err,data){
		if (err) {
			console.log(err)
		} else{
			console.log(data)
			fs.writeFile('public/59.txt','index页面被访问的次数：'+lx,function(err){
				if(err){
					console.log(err)
				}
			})
			res.render('index', { title: data});
		}
	})

});

router.get('/index2', function(req, res, next) {
	lx2++;
	fs.readFile('public/592.txt','utf-8',function(err,data){
		if (err) {
			console.log(err)
		} else{
			console.log(data)
			fs.writeFile('public/592.txt','59页面:'+lx2,function(err){
				if(err){
					console.log(err)
				}
			})
			res.render('index2', { title: data});
		}
	})

});

module.exports = router;
