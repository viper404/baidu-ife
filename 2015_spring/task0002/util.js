// 判断arr是否为一个数组，返回一个bool值
function isArray(value) {
  return Object.prototype.toString.call(value) === "[object Array]";
}
var arr = [1,2,3];
console.log(isArray(arr));
