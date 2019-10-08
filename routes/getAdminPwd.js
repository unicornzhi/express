const express = require('express');
const router = express.Router();
const getDate = require('../tool/getDate');
const adminSql = require('../config/adminSql');

router.post('/',function(req,res,next){
    let param = req.body;
    let sql = adminSql.queryPwdByName + `"${param.name}"` ;
    console.log("sql",sql);
    getDate(sql,res);
})
module.exports = router;