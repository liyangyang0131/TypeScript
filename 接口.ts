// typescript 接口
// 接口是一种规范的定义

// 1.属性接口  对象(json)的约束

interface SquareConfig{
    color:string,
    width:number
}

function createSquare(config:SquareConfig):{color:string,area:number}{
    let newSquare = {color:'red',area:100}
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}


const params = {
    color:'black',
    width:50
}

let mySquare = createSquare(params);
// alert(JSON.stringify(mySquare))


// 2.属性类型接  可选参数
// ajax请求封装

// interface Config{
//     type:string,
//     url:string,
//     data?:string,
//     dataType:string
// }

// function ajax(config:Config){
//     var xhr = new XMLHttpRequest();
//     xhr.open(config.type,config.url,true);  //true 表示异步
//     xhr.send(config.data);
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4 && xhr.status === 200){
//             console.log('成功！');
//             if(config.dataType === 'json'){
//                 console.log(JSON.parse(xhr.responseText));
//             }else{
//                 console.log(xhr.responseText);
//             }
//         }
//     }
// }

// // 传入的参数必须满足接口定义的参数
// ajax({
//     type:'get',
//     url:'http://a.itying.com/api/productlist',
//     data:'name=zhangsan',
//     dataType:'json'
// })



// 3.函数类型接口  对方法传入的参数 以及 返回值进行约束
// interface encrytype{
//     (key:string,value:string):string

// }

// var md5:encrytype = function(key:string,value:string):string{
//     return key + value;
// }

// console.log(md5('name','zhangsan---函数类型接口'));



// 4.可索引接口  数组、对象的约束（不常用）

// 定义数组的方式
// var arr:number[] = [123,456,789]
// var arr1:Array<number> = [321,654,987]

// interface UserArr{
//     [index:number]:string
// }

// var arr:UserArr = ['123','456']
// console.log(arr[0]);


// interface UserObj{
//     [index:string]:string
// }

// var obj:UserObj = {'name':'lisi'}

// console.log(obj.name);


// 5.类类型接口  对类的约束 和 抽象类有点相似
// interface Animal{
//     name:string;
//     eat(str:string):void
// }

// class Dog implements Animal{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     eat(){
//         console.log(this.name+'吃骨头');
//     }
// }

// var d = new Dog('小狗');
// d.eat();

// class Cat implements Animal{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     eat(food:string){
//         console.log(this.name+'吃'+food);
//     } 
// }

// var c = new Cat('猫');
// c.eat('鱼');



// 6.接口扩展：接口可以继承接口

// interface Animal{
//     eat():void;
// }

// interface Person extends Animal{
//     work():void;
// }

// class Web implements Person{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     eat(){
//         console.log(this.name+'在吃饭');
//     }
//     work(){
//         console.log(this.name+'在工作');
//     }
// }

// var w = new Web('小李');
// w.eat();
// w.work();



// interface Animal{
//     eat():void;
// }

// interface Person extends Animal{
//     work():void;
// }

// class Programmer{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     coding(code:string){
//         console.log(this.name+code);
//     }
// }

// // 既可以继承(extends)接口也可以实现(implements)接口
// class Web extends Programmer implements Person{
//     constructor(name:string){
//         super(name);
//     }
//     eat(){
//         console.log(this.name+'在吃饭');
//     }
//     work(){
//         console.log(this.name+'在工作');
//     }
// }

// var w = new Web('小李');
// // w.eat();
// // w.work();
// w.coding('写代码')






