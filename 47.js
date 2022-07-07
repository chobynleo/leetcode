/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var res = [], path = [];

    var backTracking = function(used) {
        if(path.length == nums.length) {
            res.push([...path]);
            return;
        }

        var isRepeat = [];
        for (let i = 0; i < nums.length; i++) {
            if(used[i] || isRepeat[nums[i] + 10]) continue;
            path.push(nums[i]);
            used[i] = true;
            isRepeat[nums[i] + 10] = true;
            backTracking(used);
            used[i] = false;
            path.pop();
        }
    }

    backTracking([]);

    return res;
};

console.log(permuteUnique([1,1,2]))