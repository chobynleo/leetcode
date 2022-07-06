/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var res = [], cur = [];
    candidates.sort((a, b) => a - b); // 排序
    var backTracking = function(start) {
        var sum = cur.length == 0? 0 : cur.reduce((a, b) => a + b);
        if(sum == target) {
            res.push([...cur]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // 剪枝优化
            if(sum + candidates[i] > target) break;
            // 去重
            if(i > start && candidates[i] == candidates[i - 1]) continue;
            cur.push(candidates[i]);
            pre = candidates[i];
            backTracking(i + 1);
            cur.pop();
        }
    }

    backTracking(0);

    return res;
};

console.log(combinationSum2([2,5,2,1,2], 5));