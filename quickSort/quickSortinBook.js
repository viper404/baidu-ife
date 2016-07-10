// 快速排序
function location(arr, head, tail) {
  var i = head;
  var j = tail;
  var pivot = arr[head];
  while (i < j) {
    while ((i < j) && (arr[j] >= pivot)) {
      j--;
    }
    arr[i] = arr[j];
    while ((i < j) && (arr[i] <= pivot)) {
      i++;
    }
    arr[j] = arr[i];
  }
  arr[i] = pivot;
  return i;
}
function quickSort(arr, head, tail) {
  if (head < tail) {
    var pivotloc = location(arr, head, tail);
    quickSort(arr, head, pivotloc-1);
    quickSort(arr, pivotloc+1, tail);
  }
  return arr;
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
  var result = quickSort(arr, 0, arr.length-1);
  // 输出结果
  document.getElementById("result").innerHTML = result;
}
document.getElementById("trigger").addEventListener("click", addEventHandle, false);
