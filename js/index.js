"use strict";
var oMysqlDb = /** @class */ (function () {
    function oMysqlDb() {
        console.log('建立数据库连接！');
    }
    oMysqlDb.prototype.add = function (info) {
        console.log('add---', info);
        return true;
    };
    oMysqlDb.prototype.update = function (info, id) {
        console.log('update', info);
        return true;
    };
    oMysqlDb.prototype.delete = function (id) {
        return true;
    };
    oMysqlDb.prototype.get = function (id) {
        var list = [
            { title: '标题1', desc: '描述1' },
            { title: '标题2', desc: '描述2' },
            { title: '标题3', desc: '描述3' }
        ];
        return list;
    };
    return oMysqlDb;
}());
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.name = '张三';
u.password = '123';
var u1 = new User();
u1.id = 1;
u1.name = '张三11';
u1.password = '123456';
var Db = new oMysqlDb();
Db.add(u);
Db.update(u1, u1.id);
