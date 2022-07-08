/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心算法
var maxSubArray = function(nums) {
    var sum = 0, result = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if(sum > result) result = sum;
        if(sum < 0) sum = 0;
    }

    return result;
};