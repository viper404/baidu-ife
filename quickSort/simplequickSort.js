// 快速排序
function quickSort(arr) {
  if (arr.length === 0) {
    return [];
  }
  var larger = [];
  var smaller = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      smaller.push(arr[i]);
    }
    else {
      larger.push(arr[i]);
    }
  }
  return quickSort(smaller).concat(pivot, quickSort(larger));
}
// 增加事件
function addEventHandle(event) {
  // 获得输入
  var str = document.getElementById("source").value;
  // 处理数据
  var arr = str.split("\,");
  for (var i in arr) {
    arr[i] = parseInt(arr[i]);
  }
  var result = quickSort(arr);
  // 输出结果
  document.getElementById("result").innerHTML = result;
}
document.getElementById("trigger").addEventListener("click", addEventHandle, false);
