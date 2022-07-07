/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var res = [], path = [];

    var backTracking = function(used) {
        if(path.length == nums.length) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if(used[i]) continue;
            path.push(nums[i]);
            used[i] = true;
            backTracking(used);
            used[i] = false;
            path.pop();
        }
    }

    backTracking([]);

    return res;
};

console.log(permute([1,2,3]))