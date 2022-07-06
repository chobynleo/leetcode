/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var res = [], cur = [];

    var backTracking = function(start) {
        if(start >= candidates.length) return;

        var sum = res.length == 0? 0 : cur.reduce((a, b) => a + b);
        if(sum >= target) {
            if(sum == target) res.push([...cur]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            cur.push(candidates[i]);
            backTracking(i + 1);
            cur.pop();
        }
    }

    backTracking(0);

    return res;
};

console.log(combinationSum2([2,5,2,1,2], 5));