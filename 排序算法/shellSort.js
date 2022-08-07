// 希尔排序
function shellSort(arr) {
    var gap = Math.floor(arr.length / 2)
    while (gap >= 1) {
      for (var i = gap;i < arr.length; i++) {
        for (var j = i; j >= gap; j -= gap) {
            if(arr[j] < arr[j - gap]) {
             var temp = arr[j - gap]
                arr[j - gap] = arr[j]
               arr[j] = temp
            }
        }
      }
      gap = Math.floor(gap / 2)
    }
    
    return arr;
}
console.log(shellSort([2,3,1,7,8,4,9,5]))