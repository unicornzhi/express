var userSql = {
    queryAll: 'select * from `user`',
    queryPwdByName:'select password from `user` where `name`=',
    queryById: 'select * from `user` where id=',
    insertUser:'insert into `user` values',
    update:'update `user` set ',
    deleteById:'delete from `user` where id='
}

module.exports = userSql;