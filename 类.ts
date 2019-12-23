// typescript 类

// 1.类、继承、

// class Animal {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     greet():void{
//         alert('各种动物的叫声！')
//     }
// }

// Dog是一个 派生类，它派生自 Animal 基类，通过 extends关键字。 派生类通常被称作 子类，基类通常被称作 超类。
// 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。 而且，在构造函数里访问 this的属性
// 之前，我们 一定要调用 super()。
// 如何在子类里可以重写父类的方法。
// class Dog extends Animal{
//     constructor(name:string){
//         super(name);
//     }
//     getName():void{
//         alert(this.name)
//     }
//     // greet():void{
//     //     alert('狗叫声，汪汪汪');
//     // }
// }

// var d = new Dog('狗');
// d.getName();
// d.greet();

// 2.修饰符
// public      公共的，在内部类中可以访问，在子类（派生类）中可以访问，在外部可以访问
// private     私有的，在内部类中可以访问
// protected   受保护的，在内部类中可以访问，在子类（派生类）中可以访问
// 在TypeScript里，成员都默认为 public

// readonly  只读属性必须在声明时或构造函数里被初始化


// 3.存取器
// TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
// 只带有 get不带有 set的存取器自动被推断为 readonly

// let passcode = "secret passcode";

// class Employee {
//     private _fullName: string;

//     get fullName(): string {
//         return this._fullName;
//     }

//     set fullName(newName: string) {
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         }
//         else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     alert(employee.fullName);
// }

// 4.静态属性
// 属性存在于类本身上面而不是类的实例上

// 5.抽象类
// 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。
// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
// abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。

//抽象类Animal
// abstract class Animal{
//     eat():any{};
// }
// //Cat继承了Animal,必须实现eat方法
// class Cat extends Animal{
//     eat():void{
//         alert('猫吃鱼');
//     }
// }

// // var a = new Animal();  //错误写法

// var c = new Cat()
// c.eat();

