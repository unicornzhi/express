var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const  usersListRouter = require('./routes/usersList');
const  getUserPwdRouter = require('./routes/queryByName');
const  insertUserRouter = require('./routes/insertUser');
const  updateRouter = require('./routes/update');
const  getAdminPwdRouter = require('./routes/getAdminPwd');
const  getUserByIdRouter= require('./routes/getUserById');
const  deleteUserRouter= require('./routes/delete');

const uploadFile= require('./routes/uploadFile');


var app = express();

// 设置跨域
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// 查询所有
app.use('/usersList',usersListRouter);
// 用户登录 login 
app.use('/login',getUserPwdRouter);
// 用户注册 sign
app.use('/insertUser',insertUserRouter);
// 用户修改个人资料
app.use('/editMsg',updateRouter);
// 管理员登录
app.use('/adminLogin',getAdminPwdRouter);
// 管理员搜索用户列表通过id
app.use('/search',getUserByIdRouter);
// 管理员删除用户
app.use('/deleteUser',deleteUserRouter);

app.use('/uploadFile',uploadFile);



// var multiparty = require('multiparty');
// var fs = require('fs')
//  /*文件上传*/
//  app.post('/uploadimg', function(req, res, next){
//   //生成multiparty对象，并配置上传目标路径
//   var form = new multiparty.Form({uploadDir: './uploads/'});
//   //上传完成后处理
//   console.log(req,req);
//   form.parse(req, function(err, fields, files){
//     console.log(files);
//       var inputFile = files.null[0];
//       console.log("inputFile",inputFile)
//       var uploadedPath = inputFile.path;
//       var dstPath = './uploads/' + inputFile.originalFilename;
//       fs.rename(uploadedPath, dstPath,  function(err) {
//           if(err){
//               console.log('rename error: ' + err);
//           } else {
//               console.log('rename ok');
//           }
//       });
//       inputFile.path = dstPath;
//       var data = files;
//       res.send(dstPath);
//   });
// });



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
