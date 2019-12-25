// 命名空间  组织代码，避免冲突
// 代码最外部 + namespace{}，export导出，命名空间名字.  调用

// 模块、命名空间的区别
/* 模块：       侧重代码重复利用
命名空间：   侧重代码重复命名  */

namespace A{
    interface Animal{
        name:string;
        eat():void;
    }

    export class Dog implements Animal{
        name:string;
        constructor(name:string){
            this.name = name;
        }
        eat(){
            alert(this.name+'zai吃骨头');
        }
    }
}

var d = new A.Dog('小狗');
d.eat();
