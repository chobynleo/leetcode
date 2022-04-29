/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let temp = {};
    for (let i = 0; i < nums.length; i++) {
        let j = temp[target - nums[i]];
        if(j != undefined) {
            return [i, j]
        }
        temp[nums[i]] = i;
    }
    return []
};