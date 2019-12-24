"use strict";
// 模块
// export default 只能导出一个  一个文件中只有一个导出时
// export 可以导出多个
Object.defineProperty(exports, "__esModule", { value: true });
// export、import不能被浏览器解析，用node执行js文件
// 命令行中执行：node 模块.js
var user_1 = require("./modules/user");
var arctcle_1 = require("./modules/arctcle");
var u = new user_1.User();
u.name = "张三";
u.password = "12";
user_1.UserModule.add(u);
var res = arctcle_1.ArticleModule.get(4);
console.log(res);
