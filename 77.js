/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// 普通法
var combine = function(n, k) {
    var res = [], path = [];

    var backTracking  = (n, k, m) => {
        if(path.length == k) {
            res.push([...path]);
            return;
        }

        for (let i = m; i <= n; i++) {
            path.push(i);
            backTracking(n, k, i + 1);
            path.pop();
        }
    }
    
    backTracking(n, k, 1);

    return res;
};

// 剪枝法
var combine = function(n, k) {
    var res = [], path = [];

    var backTracking  = (n, k, m) => {
        if(path.length == k) {
            res.push([...path]);
            return;
        }

        // 即当前的序号i加上补位数组的和要小于等于n
        // i + k - (len + 1) <= n
        for (let i = m; i <= n - k + (path.length + 1); i++) {
            path.push(i);
            backTracking(n, k, i + 1);
            path.pop();
        }
    }
    
    backTracking(n, k, 1);

    return res;
};