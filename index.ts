interface Basic<T>{
    add(info:T):Boolean;
    update(info:T,id:number):Boolean;
    delete(id:number):Boolean;
    get(id:number):any[];
}

class oMysqlDb<T> implements Basic<T>{
    constructor(){
        console.log('建立数据库连接！');
    }
    add(info: T): Boolean {
        console.log('add---',info);
        return true;
    }   
    update(info: T,id:number): Boolean {
        console.log('update',info);
        return true;
    }
    delete(id: number): Boolean {
        return true;
    }
    get(id: number): any[] {
        let list = [
            {title:'标题1',desc:'描述1'},
            {title:'标题2',desc:'描述2'},
            {title:'标题3',desc:'描述3'}
        ]
        return list;
    }
}

class User{
    id:number|undefined;
    name:string|undefined;
    password:string|undefined;
}

var u = new User();
u.name = '张三';
u.password = '123';

var u1 = new User();
u1.id = 1;
u1.name = '张三11';
u1.password = '123456';

var Db = new oMysqlDb<User>();
Db.add(u);
Db.update(u1,u1.id);