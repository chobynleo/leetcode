/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var map = new Map();

    for (var i = 0; i < nums.length; i++) {
        var index = map.get(nums[i]);
        if (index !== undefined) {
            return [index, i];
        } 
        map.set(target - nums[i], i);
    }

    return [];
};