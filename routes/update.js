const express = require('express');
const router = express.Router();
const getDate = require('../tool/getDate');
const userSql = require('../config/userSql');

router.post('/',function(req,res,next){
    let param = req.body;
    let sql = creatSql(param);
    console.log("sql",sql);
    getDate(sql,res);
})

function creatSql(param){
    let sql = userSql.update ;
    if(param.name){
        sql +="`name`="+ `"${param.name}"`;
    }
    if(param.password){
        sql +=",`password`="+ `"${param.password}"`;
    }else if(param.age){
        sql +=`, age = ${param.age}`;
    }
    if(param.sex){
        sql +=`, sex = "${param.sex}"`;
    }
    if(param.interest){
        sql +=`, interest = "${param.interest}"`;
    }
    sql +="where id="+ `${param.id}`;
    return sql;
}
module.exports = router;