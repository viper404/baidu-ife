// 快速排序
function quickSort(arr) {
  function loop(head, tail) {
    if ((tail-head) >= 1) {
      var i = head;
      var j = tail;
      var pivot = arr[head];
      while (i !== j) {
        if (arr[j] >= pivot) {
          j--;
        }
        else {
          temp = arr[j];
          arr[j] = pivot;
          arr[i] = temp;
          while (i !== j) {
            if (arr[i] <= pivot) {
              i++;
            }
            else {
              temp = arr[i];
              arr[i] = pivot;
              arr[j] = temp;
              break;
            }
          }
        }
      }
      loop(head, i-1);
      loop(i+1, tail);
    }
  }
  loop(0, arr.length-1);
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
  var result = quickSort(arr);
  // 输出结果
  document.getElementById("result").innerHTML = result;
}
document.getElementById("trigger").addEventListener("click", addEventHandle, false);
