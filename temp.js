/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var sortedSquares = function(nums) {
    var left = 0, right = nums.length - 1, result = [];

    for (let i = 0; i < nums.length; i++) {
        if(nums[left] * nums[left] > nums[right] * nums[right]) {
            result.unshift(nums[left] * nums[left]);
            left++;
        } else {
            result.unshift(nums[lrighteft] * nums[right]);
            right--;
        }
    }

    return result;
};