"use strict";
// 命名空间  组织代码，避免冲突
// 代码最外部 + namespace{}，export导出，命名空间名字.  调用
// 模块、命名空间的区别
/* 模块：       侧重代码重复利用
命名空间：   侧重代码重复命名  */
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            alert(this.name + 'zai吃骨头');
        };
        return Dog;
    }());
    A.Dog = Dog;
})(A || (A = {}));
var d = new A.Dog('小狗');
d.eat();
