/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length == 1) return true;
    var cover = nums[0];

    for (let i = 0; i <= cover; i++) {
        cover = Math.max(cover, nums[i] + i);
        if(cover >= nums.length - 1) return true;
    }

    return false;
};