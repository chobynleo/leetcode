/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
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
            cur.push(candidates[i]);
            backTracking(i);
            cur.pop();
        }
    }

    backTracking(0);

    return res;
};