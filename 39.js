/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var res = [], cur = [];
    
    var backTracking = function(start) {
        var sum = cur.length == 0? 0 : cur.reduce((a, b) => a + b);
        if(sum >= target) {
            if(sum == target) res.push([...cur]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            cur.push(candidates[i]);
            backTracking(i);
            cur.pop();
        }
    }

    backTracking(0);

    return res;
};

console.log(combinationSum([2,3,6,7], 7))