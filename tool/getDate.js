const db = require('../config/db');

 function getDate(sql,res){
   db.dbConnection(sql,(err,result) =>{
        if(result){
            let resultStr = JSON.stringify(result);
            let jsonDate = JSON.parse(resultStr);
            console.log("jsonDate",jsonDate);
           res.send(jsonDate);
        }else{
            res.send({affectedRows:0})
           console.error(err.sqlMessage);
        }
    });
}

module.exports = getDate;