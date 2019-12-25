// 装饰器

/* 装饰器：装饰器是一种特殊类型的生命，他能够被附加到类声明，方法，属性或参数上，可以修改类的行为。
通俗讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。
常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）
装饰器是过去几年中js最大的成就之一，已是ES7的标准特性之一 */

// 1.类装饰器：在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。传入一个参数

// 1.1普通装饰器
// 在不改变原来类的情况下，在原来类的基础上进行扩展
/* function logClass(params:any){
    console.log(params);  // params 是HttpClient类
    params.prototype.apiUrl = '请求url'
    params.prototype.run = function(){
        console.log('开始运行');
    }
    // params.work = function(){  // 错误写法
    //     console.log('在工作');
    // }
}

@logClass
class HttpClient{
    constructor(){}
    getter():void{}
}

var http = new HttpClient();
console.log(http.apiUrl);
http.run();
http.work();  // 错误写法 */

// 1.2装饰器工厂
/* function logClass(params:any){
    return function(target:any){
        console.log(params);  // params 是传入的参数
        console.log(target);  // target 是HttpClient类
    }
}

@logClass('我是传入的参数')
class HttpClient{
    constructor(){}
    getter():void{}
} */

// 1.3重载构造函数  修改当前类的属性、方法
/* function logClass(target:any){
    return class extends target{
        apiUrl = '装饰器修改构造函数中的apiUrl'
        getData():void{
            console.log(this.apiUrl);
        }
    }
}

@logClass
class HttpClient{
    apiUrl:string;
    constructor(){
        this.apiUrl = '原始url';
    }
    getData():void{
        console.log(this.apiUrl);
    }
}

var http = new HttpClient();
http.getData(); */



// 2.属性装饰器
/* 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：

1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2.成员的名字。 */
/* function logAttr(params:any){  // params 传递的参数
    return function(target:any,attr:any){
        console.log('target---',target);
        console.log('attr---',attr);
        target[attr] = '属性装饰器修改后'
        console.log(target[attr]);
    }
}

class HttpClient{
    @logAttr('sssssss')
    apiUrl:string;
    constructor(){
        this.apiUrl = '原始url';
    }
    getData():void{
        console.log(this.apiUrl);
    }
}

var http = new HttpClient();
http.getData(); */


// 3.方法装饰器
/* 可以用来监视、修改或者替换方法定义
方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：

1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2.成员的名字。
3.成员的属性描述符。 */

/* function logMethod(params: any) {
    return function (target: any, methodsName: any, desc: any) {
        console.log(target);
        console.log(methodsName);
        console.log(desc);
        // 3.1新增属性、方法
        target.attr = 'attr,新增属性'
        target.work = function () {
            console.log('work,新增方法')
        }
        //3.2改造原来的getData方法
        
        //保存原有的方法
        var oMethods = desc.value;

        console.log('oMethods',oMethods);
        // 方法覆盖
        // desc.value = function(...args:Array<any>){
        //     args = args.map((item)=>{
        //         return String(item) 
        //     })
        //     console.log(args);
        // }

         // 方法叠加---此情况应用较广泛
         desc.value = function(...args:Array<any>){
            args = args.map((item)=>{
                return String(item) 
            })
            oMethods.apply(this,args);
        }
    }
}

class HttpClient{
    apiUrl:string;
    constructor(){
        this.apiUrl = '原始url';
    }
    @logMethod('方法装饰器')
    getData():void{
        console.log(this.apiUrl);
    }
}

var http = new HttpClient();
console.log(http.attr);
http.work();
http.getData(123,'xxx'); */



// 4.参数装饰器---使用不多

/* 参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：

1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2.成员的名字。
3.参数在函数参数列表中的索引。 */

/* function logParams(params: any) {
    return function (target: any, methodName: any, paramsIndex: any) {
        console.log(params);
        console.log(target);
        console.log(methodName);
        console.log(paramsIndex);
    }
}

class HttpClient {
    apiUrl: string;
    constructor() {
        this.apiUrl = '原始url';
    }
    getData(@logParams('参数装饰器') uuid: any): void {
        console.log('uuid---', uuid);
    }
}

var http = new HttpClient();
http.getData('123456'); */



// 5.装饰器执行顺序
// 装饰器可以写多个

/* 属性》方法》方法参数》类
有多个同样的装饰器，从后面开始执行 */

function logClass1(target: any) {
    console.log('类装饰器1');
}
function logClass2(params?: any) {
    return function (target: any) {
        console.log('类装饰器2');
    }
}

function logAttr(params?: any) {
    return function (target: any, attrName: any) {
        console.log('属性装饰器')
    }
}

function logMethod(params?: any) {
    return function (target: any, methodName: any, desc: any) {
        console.log('方法装饰器')
    }
}

function logParams(params?: any) {
    return function (target: any, methodName: any, paramsName: any) {
        console.log('方法参数装饰器')
    }
}

@logClass1
@logClass2('bbb')
class HttpClient {
    @logAttr()
    apiUrl: string | undefined;
    constructor() { }

    @logMethod()
    setData(...args: Array<any>): void {
        console.log('args---', args);
    }
    getData(@logParams('参数装饰器') uuid: any): void {
        console.log('uuid---', uuid);
    }
}

var http = new HttpClient();
http.setData(['123', 456]);
http.getData('xxx');