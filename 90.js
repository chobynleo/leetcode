/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var res= [], path = [];
    nums = nums.sort((a, b) => a-b);

    var backTracking = function(start) {
        res.push([...path]);

        for (let i = start; i < nums.length; i++) {    
            if(i > start && nums[i] == nums[i -1]) continue;
            path.push(nums[i]);
            backTracking(i + 1);
            path.pop();
        }
    }

    backTracking(0);

    return res;
};