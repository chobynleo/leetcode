// 209.长度最小的子数组
var minSubArrayLen = function(target, nums) {
    var len = nums.length
    var res = len + 1
    var l = r = sum = 0
    while(r < len) {
        sum += nums[r]
        while(sum >= target) {
            res = r - l + 1 < res? r - l + 1 : res
            sum -= nums[l]
            l++
        }
        r++
    }
    return res <= len? res : 0
};