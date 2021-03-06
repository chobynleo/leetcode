/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    const len = nums.length;
    if(len < 3) return [];
    // 排序的目的是减少搜索的范围，提高效率
    // 如果穷举效率低，排序后如果nums[i] > 0 是没有必要继续运算的
    nums.sort(function(a,b){return a-b});   
    let res = [];
    for (let i = 0; i < len - 2; i++) {
        if(nums[i] > 0) break;
        // a去重
        if(i > 0 && nums[i] === nums[i-1]) continue;
        let l = i + 1, r = len - 1;
        while(l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if(sum < 0) {l++; continue};
            if(sum > 0) {r--; continue};
            res.push([nums[i], nums[l], nums[r]])
            
            // bc 去重
            while(l < r && nums[l] === nums[++l] );
            while(l < r && nums[r] === nums[--r] );
        }
    }

    return res;
};