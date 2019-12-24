// 模块
// export default 只能导出一个  一个文件中只有一个导出时
// export 可以导出多个

// export、import不能被浏览器解析，用node执行js文件
// 命令行中执行：node 模块.js

import {User,UserModule} from './modules/user'
import {Article,ArticleModule} from './modules/arctcle' 

var u = new User();
u.name="张三"
u.password="12"

UserModule.add(u);

var res = ArticleModule.get(4);
console.log(res);