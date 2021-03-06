// 泛型
// 解决 类 接口 方法的复用性、以及对不特定数据类型的支持

// 1.<T>表示泛型，具体什么类型是调用这个方法的时候决定

// 泛型定义，泛型函数

function getData<T>(value:T):T{
    return value;
}

getData<number>(123);
getData('123')



// 2.泛型类
class MinClass<T>{
    // list:T[]=[];
    list:Array<T>=[];
    add(value:T):void{
        this.list.push(value);
    }
    min():T{
        // this.list.sort((x,y)=>{
        //     return x-y;
        // })
        // return this.list[0];

        var minNum = this.list[0];
        for(var i = 0,len=this.list.length;i<len;i++){
            if(minNum > this.list[i]){
                minNum = this.list[i]
            }
        }
        return minNum;
    }
}

/* var m = new MinClass<number>();
m.add(2);
m.add(45);
m.add(1);
m.add(22);
m.add(-1);
alert(m.min()) */


/* var m1 = new MinClass<string>();
m1.add('g');
m1.add('f');
m1.add('r');
m1.add('z');
m1.add('b');
alert(m1.min()); */

class MysqlDb<T>{
    add(info: T): Boolean {
        console.log(info);
        return true;
    }
    update(info: T, id: string): boolean {
        console.log('info---', info);
        console.log('id---', id);
        return true;
    }
}

/* class user{
    name:string | undefined;
    password:string | undefined;
}

var u = new user();
u.name="张三"
u.password="123"

var DB = new MysqlDb<user>();
DB.add(u) */

class Article{
    id:string|undefined;
    title:string|undefined;
    desc:string|undefined;
    subtitle?:string|undefined
}

var a = new Article();
a.id = 'az34f56'
a.title = '标题'
a.desc = '描述'
// a.subtitle = '副标题'

var a1 = new Article();
a1.id = 'az34f56'
a1.title = '标题1'
a1.desc = '描述1'
a.subtitle = '副标题1'

var DB = new MysqlDb<Article>();
DB.add(a);
DB.update(a1,a1.id)




// 3.泛型接口

// 函数类型接口
/* interface Config{
    (value1:string,value2:string):string;
}

var setData:Config = function(value1:string,value2:string):string{
    return value1 + value2;
} */

/* interface Config{
    <T>(value:T):T;
}
var setData:Config=function<T>(value:T):T{
    return value;
} */
