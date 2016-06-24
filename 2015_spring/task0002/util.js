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
