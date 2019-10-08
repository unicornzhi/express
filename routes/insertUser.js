const express = require('express');
const router = express.Router();
const getDate = require('../tool/getDate');
const userSql = require('../config/userSql');

router.post('/',function(req,res,next){
    let param = req.body;
    let sql = userSql.insertUser +`(${param.id},"${param.name}","${param.password}",${param.age},"${param.sex}","${param.interest}")`;
    console.log("sql",sql);
    getDate(sql,res);
})
module.exports = router;