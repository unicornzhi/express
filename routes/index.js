var express = require('express');
var router = express.Router();
// var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  // let filePATH = path.resolve(__dirname,'../public/test.html');
  res.render('index', {title: 'Express' });
});

module.exports = router;
