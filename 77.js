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
    var res = [], cur = [];
    var backTracking = function(start) {
        if(cur.length == k) {
            res.push([...cur]);
            return;
        }
        // 即当前的序号i加上补位数组以及已加入的当前cur数组的长度要大于等于k
        // 1 + n - i + len >= k
        for (let i = start; i <= (1 + n + cur.length - k); i++) {
            cur.push(i);
            backTracking(i + 1);
            cur.pop();
        }
    }

    backTracking(1);

    return res;
};