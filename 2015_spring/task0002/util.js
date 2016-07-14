// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === "[object Array]";
}
var arr = [1,2,3];
console.log(isArray(arr));
// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
  return Object.prototype.toString.call(fn) === "[object Function]";
}
function fn() {
  return 1;
}
console.log(isFunction(fn));
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
  if (Object.prototype.toString.call(src) === "[object Array]") {
    var tar = [];
    for (var i in src) {
      tar[i] = src [i];
    }
    return tar;
  }
  else if (Object.prototype.toString.call(src) === "[object Object]") {
    var tar = {};
    for (var i in src) {
      tar[i] = cloneObject(src[i]);
    }
    return tar;
  }
  else {
    return src;
  }
}
// 测试用例：
var srcObj = {
  a: 1,
  b: {
    b1: ["hello", "hi"],
    b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);
srcObj.a = 2;
srcObj.b.b1[0] = "Hello";
console.log(abObj.a);   // 2
console.log(abObj.b.b1[0]);   // "Hello"
console.log(tarObj.a);    // 1
console.log(tarObj.b.b1[0]);    // "hello"
// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
  arr = arr.sort();   // 先排序
  var slow = 0;   // 后去重
  var temp = [];
  for (var fast = 0; fast < arr.length; fast++) {
    if (arr[fast] === arr[fast+1]) {
    }
    else {
      temp[slow] = arr[fast];
      slow++;
    }
  }
  return temp;
}
// 使用示例
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b);   // [1, 3, 5, 7]
// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
  var slow = 0;
  var temp = "";
  for (var fast = 0; fast < str.length; fast++) {
    if (str[fast] === " ") {
    }
    else {
      temp = temp+str[fast];
      slow++;
    }
  }
  return temp;
}
// 使用示例
var str = '   hi!  ';
str = simpleTrim(str);
console.log(str);   // 'hi!'
// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
  var patt = /\s/g;
  return str.replace(patt,"");
}
// 使用示例
var str = '   hi!  ';
str = trim(str);
console.log(str);   // 'hi!'
// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
  if (fn.length === 1) {
    for (var i in arr) {
      fn(arr[i]);
    }
  }
  else if (fn.length === 2) {
    for (var i in arr) {
      fn(arr[i], i);
    }
  }
}
// 其中fn函数可以接受两个参数：item和index
// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item);
}
each(arr, output);    // java, c, php, html
// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item);
}
each(arr, output);    // 0:java, 1:c, 2:php, 3:html
// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
  var n = 0;
  for (var i in obj) {
    n++;
  }
  return n;
}
// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj));    // 3
// 判断是否为邮箱地址
function isEmail(emailStr) {
  var patt = /^[A-Za-z0-9]+[(\.|\-|\_)A-Za-z0-9]*@[A-Za-z0-9(\.|\-|\_)]*[A-Za-z0-9]+\.[A-Za-z]{2,3}$/g;
  console.log(patt.test(emailStr));
}
// 判断是否为手机号
function isMobilePhone(phone) {
  var patt = /^1[45|47|70|71|76|77|78|3d|5d|8d]+[0-9]{8}$/g;
  console.log(patt.test(phone));
}
// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
  element.setAttribute(newClassName, "");
}
// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
  element.removeAttribute(oldClassName);
}
// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
  var item1 = element.parentNode;
  var item2 = siblingNode.parentNode;
  return item1.isSameNode(item2);
}
// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
  var x = element.offsetLeft;
  var y = element.offsetTop;
  return {x, y};
}
// 测试用例
function createElement() {
  var divElement = document.createElement("div");
  document.body.appendChild(divElement);
}
createElement();
var divTest = document.getElementsByTagName("div")[0];
addClass(divTest, "test");
removeClass(divTest, "test");
function createChildElement() {
  var divElement = document.createElement("div");
  divTest.appendChild(divElement);
}
createChildElement();
var divChild = document.getElementsByTagName("div")[1];
console.log(isSiblingNode(divTest, divChild));
console.log(getPosition(divTest));
// 实现一个简单的Query
function $(selector) {
  if (selector[0] === "#") {
    var patt = /\./g;
    if (patt.test(selector)) {
      arr = selector.split(patt);
      var selectorid = arr[0];
      var id = "";
      for (var i = 1; i < selectorid.length-1; i++) {
        id = id+selectorid[i];
      }
      var selectorclassname = arr[1];
      var classname = "";
      for (var i = 0; i < selectorclassname.length; i++) {
        classname = classname+selectorclassname[i];
      }
      var element = document.getElementById(id);
      return element.getElementsByClassName(classname)[0];
    }
    else {
      var id = "";
      for (var i = 1; i < selector.length; i++) {
        id = id+selector[i];
      }
      return document.getElementById(id);
    }
  }
  else if (selector[0] === ".") {
    var classname = "";
    for (var i = 1; i < selector.length; i++) {
      classname = classname+selector[i];
    }
    return document.getElementsByClassName(classname)[0];
  }
  else if (selector[0] === "[") {
    var patt = /\=/g;
    if (patt.test(selector)) {
      var arr = selector.split(patt);
      var selectorproperty = arr[0];
      var property = "";
      for (var i = 1; i < selectorproperty.length; i++) {
        property = property+selectorproperty[i];
      }
      var selectorvalue = arr[1];
      var value = "";
      for (var i = 0; i < selectorvalue.length-1; i++) {
        value = value+selectorvalue[i];
      }
      var element = document.all;
      for (var i in element) {
        if (element[i].getAttribute(property) === value) {
          break;
        }
      }
      return element[i];
    }
    else {
      var property = "";
      for (var i = 1; i < selector.length-1; i++) {
        property = property+selector[i];
      }
      var element = document.all;
      for (var i in element) {
        if (element[i].hasAttribute(property)) {
          break;
        }
      }
      return element[i];
    }
  }
  else {
    return document.getElementsByTagName(selector)[0];
  }
}
// 可以通过id获取DOM对象，通过#标示，例如
$("#adom");   // 返回id为adom的DOM对象
// 可以通过tagName获取DOM对象，例如
$("a");   // 返回第一个<a>对象
// 可以通过样式名称获取DOM对象，例如
$(".classa");   // 返回第一个样式定义包含classa的对象
// 可以通过attribute匹配获取DOM对象，例如
$("[data-log]");    // 返回第一个包含属性data-log的对象
$("[data-time=2015]");    // 返回第一个包含属性data-time且值为2015的对象
// 可以通过简单的组合提高查询便利性，例如
$("#adom .classa");   // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
  element.setAttribute(event, listener.name+"(event)");
}
// 例如：
function clicklistener(event) {
  console.log(1);
}
addEvent($("#doma"), "onclick", clicklistener);
// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
  element.removeAttribute(event);
}
// 实现对click事件的绑定
function addClickEvent(element, listener) {
  element.setAttribute("onclick", listener.name+"(event)");
}
// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
  element.setAttribute("onkeydown", listener.name+"(event)");
}
// addEvent(element, event, listener) -> $.on(element, event, listener);
$.on = addEvent;
// removeEvent(element, event, listener) -> $.un(element, event, listener);
$.un = removeEvent;
// addClickEvent(element, listener) -> $.click(element, listener);
$.click = addClickEvent;
// addEnterEvent(element, listener) -> $.enter(element, listener);
$.enter = addEnterEvent;
//function clickListener(event) {
//    console.log(event);
//}
//function renderList() {
//    $("#list").innerHTML = '<li>new item</li>';
//}
//function init() {
//    each($("#list").getElementsByTagName('li'), function(item) {
//        $.click(item, clickListener);
//    });
//    $.click($("#btn"), renderList);
//}
//init();
// 先简单一些
function delegateEvent(element, tag, eventName, listener) {
  element.setAttribute(eventName, listener.name+"(event)");
}
function clickHandle(event) {
  var name = event.target.nodeName;
  var element = event.target.parentNode;
  var children = element.getElementsByTagName(name);
  for (var i = 0; i < children.length; i++) {
    children[i].setAttribute("onclick", "console.log(2)");
  }
}
$.delegate = delegateEvent;
// 使用示例
// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
$.delegate($("#list"), "li", "onclick", clickHandle);
