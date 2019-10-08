const express = require('express');
const router = express.Router();
const getDate = require('../tool/getDate');
const userSql = require('../config/userSql');

router.post('/',function(req,res,next){
    let param = req.body;
    console.log("param",req)
    let sql = userSql.queryById + param.id;
    console.log("sql",sql);
    getDate(sql,res);
})
module.exports = router;