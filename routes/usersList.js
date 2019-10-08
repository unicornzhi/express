var express = require('express');
var router = express.Router();
const getDate = require('../tool/getDate')
const userSql = require('../config/userSql');

router.get('/',function(req,res,next){
    getDate(userSql.queryAll,res);
})
module.exports = router;