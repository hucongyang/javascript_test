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


10. DOM
10.1 节点层次       元素节点    属性节点    文本节点
10.1.1 Node类型
someNode.nodeType = 1   元素节点
someNode.nodeType = 2   属性节点
someNode.nodeType = 3   文本节点
    1. nodeName属性 和 nodeValue属性
       nodeType    节点类型
       nodeName    节点名称
       nodeValue   节点值
    2. 节点关系
       父节点      someNode.parentNode
       父节点的第一个节点    someNode.firstNode
       父节点的最后一个节点  someNode.lastNode
       子节点      someNode.childNodes
       上一个节点   previousSibling
       下一个节点   nextSibling
       hasClildNodes()
       整个文档的文档节点    someNode.ownerDocument
    3. 操作节点
       向chlidNodes列表的末尾添加一个节点         someNode.appendChild(newNode)
       向childNodes列表中某个固定位置前添加节点    someNode.insertBefore(newNode, targetNode)
       替换节点         someNode.replaceChild(newNode, targetNode)
       删除节点         someNode.removeChild(targetNode)
    4. 其他方法
       复制节点  cloneNode(true或false)    true: 深复制 复制节点及其整个子节点树  false: 浅复制 复制节点本身
       处理文本节点  normalize()


11. DOM扩展
11.1 选择符API


12. DOM2和DOM3


13. 事件
13.1 事件流

13.1.1 事件冒泡(IE) 即事件开始时由最具体的元素(文档中嵌套层次最深的那个节点)接受，然后逐级向上传播到较为不具体的节点(文档)
<<<<<<< HEAD

13.2 事件处理程序
事件就是用户或浏览器自身执行的某种动作
响应某个事件的函数就叫做事件处理程序

13.2.1 html事件处理程序
<script>
    function showMessage() {
        alert("hello world");
    }
</script>
<input type="button" value="click me" onclick="showMessage()" />

13.2.2 DOM0级事件处理程序 : 将一个函数赋值给一个事件处理程序属性
var btn = document.getElementById("myBtn");
btn.onclick = function() {
    alert("Clicked");
}
使用DOM0级方法指定的事件处理程序被认为是元素的方法。因此，这时候的事件处理程序是在元素的作用域中运行

13.2.3 DOM2级事件处理程序: 
用于处理指定和删除事件处理程序的操作
addEventListener(eventName, handle, boolean)  removeEventListener(eventName, handle, boolean)
boolean = true  表示在捕获阶段调用事件处理程序
boolean = false 表示在冒泡阶段调用事件处理程序

ps:
var btn = document.getElementById("myBtn");
var handle = function() {
    alert("click");
}
btn.addEventListener("click", handle, false);

通过addEventListener添加的事件处理程序只能使用removeEventListener来移除，移除时传入的参数与添加处理程序时使用的参数相同
btn.removeEventListener("click", handle, false);

13.1.2 事件捕获 事件捕获的思想 是不太具体的节点应该更早接收到事件,而最具体的节点应该最后接收到事件。事件捕获的用意在于在 事件到达预定目标之前捕获它
13.1.3 DOM事件流: 事件捕获阶段、处于目标阶段和事件冒泡阶段。
首先发生的是事件捕获,为截获事件提供了机会。然后是实际的目标接收到事件。最后一个阶段是冒泡阶段,可以在这个阶段对事件做出响应.

13.2 事件处理程序
13.2.1 HTML事件处理程序

13.5 内存和性能
13.5.1 事件委托

13.6 模拟事件


14. 表单脚本
14.1 表单的基础知识


21. Ajax 与 Comet
21.5.3 Comet
Ajax 是一种页面向服务器请求数据的技术
Comet 是一种服务器向页面推送数据的技术
Comet能够让信息近乎实时地被推送到页面上，非常适合处理体育比赛的分数和股票报价
有2中实现Comet的方式：长轮询 和 流

短轮询：浏览器定时向服务器发送请求，看有没有更新的数据
长轮询：浏览器页面发起一个到服务器的请求，然后服务器一直保持连接打开，直到有数据可发送。发送完数据之后，浏览器关闭连接，
随即又发起一个到服务器的新请求。这一过程在页面打开期间一直持续不断。

无论是短轮询还是长轮询，浏览器都要在接受数据之前，先发起对服务器的连接。两者最大的区别在于服务器如何发送数据。
短轮询是服务器立即发送响应，无论数据是否有效，而长轮询是等待发送响应。轮询的优势是所有浏览器都支持，因为使用XHR对象
和setTimeout()就能实现。而你要做的就是决定什么时候发送请求。

第二种流行的Comet实现是HTTP流。流不同于上述两种轮询，因为它在页面的整个生命周期内只使用一个HTTP连接。具体来说，
就是浏览器向服务器发送一个请求，而服务器保持连接打开，然后周期性地向浏览器发送数据。


又为Comet创建了两个新的接口
21.5.4 服务器发送事件
SSE(Server-Sent Events, 服务器发送事件)是围绕只读Comet交互推出的API或者模式。SSE API用于创建到服务器的单向连接，
服务器通过这个连接可以发送任意数量的数据。服务器响应的MIME类型必须是text/event-stream，而且是浏览器中的Javascript API
能解析格式输出。SSE支持短轮询，长轮询和HTTP流，而且能在断开连接时自动确定何时重新连接。

1. SSE API(Server-Sent Events, 服务器推送事件)
要预定新的事件流，首先要创建一个新的EventSource对象，并传进一个入口点:
var source = new EventSource("myevents.php");
注意，传入的url必须与创建对象的页面同源(相同的URL模式，域及端口)。EventSource的实例有一个readyState属性，
值为0表示正连接到服务器，值为1表示打开了连接，值为2表示关闭了连接。
另外，还有以下三件事件。
open：在建立连接时触发。
message：在从服务器接收到新事件时触发。
error：在无法建立连接时触发。
source.onmessage = function(event) {
    var data = event.data;
};
服务器发回的数据以字符串形式保存在event.data中。
默认情况系下，EventSource对象会保持与服务器的活动连接。如果连接断开，还会重新连接。这就意味着SSE适合长轮询和HTTP流。
如果想强制立即断开连接并且不再重新连接，可以调用close()方法。
source.close();

2. 事件流
所谓的服务器事件会通过一个持久的HTTP响应发送，这个响应的MIME类型为text/event-stream。响应的格式是纯文本，最简单的情况是
每个数据项都带有前缀data:, 例如:
data: foo

data: bar

data: foo
data: bar
    对以上响应而言，事件流中的第一个message事件返回的event.data值为"foo"，第二个message事件返回的event.data值为"bar"，
第三个message事件返回的event.data值为"foo\nbar"。对于多个连续的以 data:开头的数据行，将作为多段数据解析，每个值之间
以一个换行符分割。只有在包含data：的数据行后面有空行时，才会触发message事件，因此在服务器上生成事件流时不能忘了多添加这一行。
    通过id：前缀可以给特定的事件指定一个关联的ID，这个ID行位于data：行前面或者后面皆可：
    data：foo
    id：1
    设置了ID后，EventSource对象会跟踪上一次触发的时间，如果连接断开，会向服务器发送一个包含名为Last-Event-ID的特殊HTTP
头部的请求，以便服务器知道下一次该触发那个事件。在多次连接的事件流中，这种机制可以确保浏览器以正确的顺序收到连接的数据段。


21.5.5 Web Sockets
Web Sockets的目标是在一个单独的持久连接上提供全双工，双向通信。
在Javascript中创建了Web Socket之后，会有一个HTTP请求发送到浏览器以发起连接。在取得服务器响应后，建立的连接会使用HTTP升级从HTTP
协议交换为Web Socket协议。也就是说，使用标准的HTTP服务器无法实现Web Sockets，只有支持这种协议的专门服务器才能正常工作。
1. Web Sockets API
var socket = new WebSocket("ws://statistics.saas.local/test/web/socket");
var message = {
    time: new Date(),
    text: "hello world",
    clientId: "shhsdbs"
};

// Web Socket对象还有其他三个事件，在连接生命周期的不同阶段触发。
// open 在成功建立连接时触发
socket.onopen = function (event) {
    console.log("open: " + event.type);
};

// error 在发生错误时触发，连接不能持续
socket.onerror = function (event) {
    console.log("error: " + event.type);
};

// close 在连接关闭时触发
socket.onclose = function (event) {
    console.log("close: " + event.type);
    console.log("was clean? " + event.wasClean + " Code=" + event.code + " Reason=" + event.reason);
};

// 在这三个事件中，只有close事件的event对象有额外的信息。这个事件的事件对象有三个额外的属性：
// wasClean, code, reason。其中，wasClean是一个布尔值，表示连接是否已经明确地关闭；
// code 是服务器返回的数值状态码；而reason是一个字符串，包含服务器发回的消息。


22 高级技巧
22.1 高级函数
22.1.1 安全的类型检测
是否是 数组
function isArray(value) {
    return Object.prototype.toString.call(value) == "[object Array]";
}

是否是 原生函数
function isFunction(value) {
    return Object.prototype.toString.call(value) == "[object Function]";
}

是否是 正则表达式
function isRegExp(value) {
    return Object.
}
不过要注意，对于在IE中以COM对象实现的任何函数，isFunction()都将返回false（因为它们并非原生的JavaScript函数）
这一技巧也广泛应用于检测原生JSON对象。Object的toSting()方法不能检测非原生构造函数的构造函数名。因此，开发人员
定义的任何构造函数都将返回[Object Object]。有些JavaScript库会包含与下面类似的代码。
var isNativeJSON = windowJSON && Object.prototype.toString.call(JSON) == "[Object JSON]";

22.1.2 作用域安全的构造函数
作用域安全的构造函数在进行任何更改前，首先确认this对象是正确类型的实例。如果不是，那么会创建新的实例并返回。
function Person(name, age, job) {
    if (this instanceof Person) {
        this.name = name;
        this.age = age;
        this.job = job;
    } else {
        return new Person(name, age, job);
    }
}

var person1 = Person("Bob", 29, "Software Engineer");
alert(window.name);     // ""
alert(person1.name);    // "Bob"

var person2 = new Person("Tom", 34, "Teacher");
alert(person2.name);    // "Tom"
实现这个模式后，你就锁定了可以条用构造函数的环境。如果你使用构造函数窃取模式的继承且不使用原型链，那个这个继承很可能被破坏。
这里有个例子：
function Polygon(sides){
    if (this instanceof Polygon) {
        this.sides = sides;
        this.getArea = function(){
            return 0;
        };
    } else {
        return new Polygon(sides);
    }
}

function Rectangle(width, height){
    Polygon.call(this, 2);
    this.width = width;
    this.height = height;
    this.getArea = function(){
        return this.width * this.height;
    };
}

var rect = new Rectangle(5, 10);
alert(rect.sides);   //undefined

如果构造函数窃取结合使用原型链或者寄生组合则可以解决这个问题。考虑以下例子:
function Polygon(sides){
    if (this instanceof Polygon) {
        this.sides = sides;
        this.getArea = function(){
            return 0;
        };
    } else {
        return new Polygon(sides);
    }
}

function Rectangle(width, height){
    Polygon.call(this, 2);
    this.width = width;
    this.height = height;
    this.getArea = function(){
        return this.width * this.height;
    };
}

Rectangle.prototype = new Polygon();  // 新增

var rect = new Rectangle(5, 10);
alert(rect.sides);   //undefined

22.1.3 惰性载入函数

22.3.3 函数节流
函数节后的基本思想是指，某些代码不可以在没有间断的情况连续重复执行。
第一次调用函数，创建一个定时器，在指定的时间间隔之后运行代码。第二次调用该函数时，它会清除前一次的定时器并设置另一个。
如果前一个定时器已经执行过了，这个操作就没有任何意义。然而，如果前一个定时器尚未执行，其实就是将其替换为一个新的定时器。
目的是只有在执行函数的请求停止了一段时间之后才执行。
这个模式可以使用throttle()函数来简化，这个函数可以自动进行定时器的设置和清除，
function throttle(method, context) {
    clearTime(method.tId);
    method.tId = setTimeout(function() {
        method.call(context);
    }, 100);
}