/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    const len = nums.length;
    if(len < 4) return [];
    // 排序的目的是减少搜索的范围，提高效率;此外双指针将时间复杂度O(n^4) -> O(n^3)
    nums.sort(function(a,b){return a-b});
    let res = [];
    for (let i = 0; i < len - 3; i++) {
        // i去重
        if(i > 0 && nums[i] == nums[i - 1]) continue;
        for (let j = i + 1; j < len - 2; j++) {
            // j去重
            if(j > i + 1 && nums[j] == nums[j - 1]) continue;
            let l = j + 1, r  = len - 1;
            while(l < r){
                let sum = nums[i] + nums[j] + nums[l] + nums[r];
                if(sum < target){l++;continue}
                if(sum > target){r--;continue}
                res.push([nums[i], nums[j], nums[l], nums[r]]);

                // cd去重
                while(l < r && nums[l] === nums[++l]);
                while(l < r && nums[r] === nums[--r]);
            }
        }
        
    }
    return res;
};