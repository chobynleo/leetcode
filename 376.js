/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if(nums.length < 2) return nums.length;

    var curDiff = 0, preDiff = 0, count = 1;
    for (let i = 1; i < nums.length; i++) {
        var curDiff = nums[i] - nums[i - 1];
        if((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
            count++;
            preDiff = curDiff;
        }
    }

    return count;
};