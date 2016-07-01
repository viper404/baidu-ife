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
