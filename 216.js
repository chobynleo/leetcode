/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// 官方解法
var combinationSum3 = function(k, n) {
    var res = [], cur = [];
    var backTracking = function(start) {
        var len = cur.length;
        if(len == k) {
            const sum = cur.reduce((a, b) => a + b);
            if(sum == n ) res.push([...cur]);

            return;
        }
        
        for (let i = start; i <= 10 + len - k; i++) {
            cur.push(i);
            backTracking(i + 1);
            cur.pop();
        }
    }

    backTracking(1);
    return res;
};

// 我的解法
var combinationSum3 = function(k, n) {
    var res = [], cur = [];

    var getSum = function(arr) { 
        var cal = 0;
        for (const i of arr) {
            cal += i;
        }
        return cal;
    }
    var backTracking = function(start) {
        if(getSum(cur) > n || cur.length > k ) return;
        if(cur.length == k && getSum(cur) == n) {
            res.push([...cur]);
        }
        
        for (let i = start; i <= 10 + cur.length - k; i++) {
            cur.push(i);
            backTracking(i + 1);
            cur.pop();
        }
    }

    backTracking(1);
    return res;
};