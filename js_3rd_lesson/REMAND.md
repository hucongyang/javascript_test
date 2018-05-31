JavaScript:
1. Array 数组
1.1 检测数组
instanceof  isArray

1.2 转化方法
toLocalString   toString    valueOf

1.3 实现栈：后进先出的数据结构   也就是最新添加的项最早被移除  而栈中项的插入和移除只发生在栈的顶部
array.push()        push()方法可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长
array.pop()         而pop()方法则从数组末尾移除最后一项，减少数组的 length 值，然后返回移除的项

1.4 实现队列: 先进先出的数据结构   
array.push()        push()是向数组末端添加项的方法
array.shift()       移除数组中的第一个项并返回该项，同时将数组长度减 1
array.unshift()     从数组前端添加元素

1.5 重排序方法
revere()  sort()

1.6 操作方法
concat()  slice()  splice()

1.7 位置方法
indexOf()     lastIndexOf()

1.8 迭代方法
every()   filter()  forEach()   map()   some()

1.9 归并方法
reduce()  reduceRight()

2. Date类型
2.1 Date.parse()  Date.UTC()    Date.now()

2.2 继承的方法
toLocalString()   toString()    valueOf()

2.3 日期格式化方法

2.4 日期/时间组件方法

3. RegExp类型

4. Function类型
函数是对象，函数名是指针
var sum = new Function("num1", "num2", "return num1 + num2");

4.1 没有重载
function addSomeNumber(num){
        return num + 100;
}
function addSomeNumber(num) {
    return num + 200;
}
var result = addSomeNumber(100); //300
在这个例子中声明了两个同名函数，而结果则是后面的函数覆盖了前面的函数,
在创建第二个函数时，实际上覆盖了引用第一个函数的变量 addSomeNumber

4.2 函数申明和函数表达式
解析器在向执行环境中加载数据时，对函数声明和函数表达式并非一视同仁。
解析器会率先读取函数声明，并使其在执行任何代码之前可用(可以访问);
至于函数表达式，则必须等到解析器执行到它所在的代码行，才会真正被解释执行。

4.3 作为值的函数
因为 ECMAScript 中的函数名本身就是变量，所以函数也可以作为值来使用。
也就是说，不仅可以像传递参数一样把一个函数传递给另一个函数，而且可以将一个函数作为另一个函数的结果返回

4.4 函数内部属性
arguments   保存函数参数
this        引用的是函数据以执行的环境变量

4.5 函数的属性和方法
ECMAScript中的函数是对象，因此函数也有属性和方法。每个函数包含2个属性：
length      函数希望接收的命名参数的个数
protoType   是保存函数所有实例方法的所在
每个函数都包含两个非继承而来的方法：apply() 和 call(),这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内this对象的值



   

6 面向对象的程序设计
6.2 创建对象
6.2.1 工厂模式 抽象了创建具体对象的过程
eg:
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        alert(this.name);
    }
    return o;
}

var person1 = createPerson("Bob", 29, "Teacher");
var person2 = createPerson("Greg", 30, "Doctor");

6.2.2 构造函数模式
eg:
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        alert(this.name);
    }
}

var person1 = Person("Bob", 29, "Teacher");
var person2 = Person("Greg", 30, "Doctor");

6.2.3 原型模式



7. 函数表达式
匿名函数：创建一个函数并将它赋值给变量functionName,
eg:
var functionName = function(arg0, arg1, arg2) {
    // 函数体
}

7.1 递归
var factorial = function f(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * f(num -1);
    }
}

7.2 闭包
指有权访问另一个函数作用域内变量的函数
创建闭包的创建方式：在一个函数内部创建另一个函数


8. BOM
浏览器对象模型

8.1 系统对话框
alert()     confirm()   prompt()

8.2 location对象

8.3 navigator对象

8.4 screen对象

8.5 history对象




