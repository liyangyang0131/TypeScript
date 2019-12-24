"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = oMysqlDb;
