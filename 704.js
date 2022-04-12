/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};
var nums = [-1,0,3,5,9,12];
var target = 8;
console.log(search(nums, target))