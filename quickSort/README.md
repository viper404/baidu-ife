## 三种快速排序
## 简单排序 by Michael McMillan
```javascript
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
```
## 普通排序 by viper404
```javascript
function quickSort(arr) {
  function loop(head, tail) {
    if ((tail-head) >= 1) {
      var i = head;
      var j = tail;
      var temp = 0;
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
```
## 改进排序 by viper404
```javascript
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
```
