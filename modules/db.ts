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

export default oMysqlDb;