// 有序数组的平方
function sortSqrArr(nums){
   var len = nums.length
   var newArr = new Array(len).fill(0)
   var i = 0, j = len -1, k = len -1;
   while(i<j){
    var left = nums[i] * nums[i]
    var right = nums[j] * nums[j]
    if(left < right){
        newArr[k--] = right
        j--
    }else{
        newArr[k--] = left
        i++
    }
   }
   return newArr;
}

var nums = [-4,-1,1,2,10]
console.log(sortSqrArr(nums))