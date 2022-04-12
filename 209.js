// 209.长度最小的子数组

var minSubArrayLen = function(target, nums) {
    var len = nums.length
    var l = r = sum = 0
    var res = len + 1
    while(r < len){
        sum += nums[r++]
        while(sum >= target){
            res = r -l > res? res : r - l
            sum -= nums[l++]
        }
    }   
    return res > len? 0 : res
};

var s = 7, nums = [2,3,1,2,4,3] 
console.log(minSubArrayLen(s, nums))