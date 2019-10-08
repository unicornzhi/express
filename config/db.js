const mysql = require('mysql');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'wang123',
    database:'testdb',
    port:3306
});

function dbConnection(sql,callback){
    pool.getConnection((err,connection) =>{
       connection.query(sql,(err,rows) =>{
           callback(err,rows);
           connection.release();
       });
    });
}

exports.dbConnection = dbConnection;