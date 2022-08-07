// 归并排序
var mergeSort = function (arr) {
    if(arr.length < 2) return arr
    
    var mid = Math.floor(arr.length / 2)
    
    var left = arr.slice(0, mid)
    var right = arr.slice(mid, arr.length)
    
    return merge(mergeSort(left), mergeSort(right))
   
}
  
var merge = function(left, right) {
    var result = []
    
    while (left.length && right.length) {
      if(left[0] < right[0]) {
       result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }
    
    if(left.length) result = result.concat(left)
    if(right.length) result = result.concat(right)
    
    return result
}
  console.log(mergeSort([2,3,1,7,8,4,9,5]))