/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var res= [], path = [];
    nums = nums.sort((a, b) => a-b);
    var isRepeat = function(s, l, r, target) {
        for (let i = l; i <= r; i++) {
             if(target == s[i]) return true;
        }

        return false;
    }
    var backTracking = function(start) {
        res.push([...path]);

        for (let i = start; i < nums.length; i++) {    
            if(i > start) {
                if(isRepeat(nums, start, i - 1, nums[i])) continue;
            }
            path.push(nums[i]);
            backTracking(i + 1);
            path.pop();
        }
    }

    backTracking(0);

    return res;
};