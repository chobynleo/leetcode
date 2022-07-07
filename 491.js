/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    var res = [], path = [];

    var backTracking = function(start) {
        if(path.length >= 2) {
            res.push([...path]);
        }

        var map = []; // 数组做map
        for (let i = start; i < nums.length; i++) {
            if(
                (path.length > 0 && nums[i] < path[path.length - 1]) || map[nums[i] + 100]
            ) {
                continue;
            }

            map[nums[i] + 100] = true;
            path.push(nums[i]);
            backTracking(i + 1);
            path.pop();
        }
    }

    backTracking(0);

    return res;
};