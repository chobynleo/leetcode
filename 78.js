/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var res = [], path = [];

    var backTracking = function(start) {
        res.push([...path]);

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backTracking(i + 1);
            path.pop();
        }
    };

    backTracking(0);

    return res;
};

console.log(subsets([1,2,3]))