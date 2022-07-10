/**
 * @param {number} n
 * @return {number}
 */
// 动态规划 时间复杂度O(n) 空间复杂度O(1)
var fib = function(n) {
    if(n < 2) return n;
    var dp = [];
    dp[0] = 0, dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        var sum = dp[0] + dp[1];
        dp[0] = dp[1];
        dp[1] = sum;
    }

    return dp[1];
};

var fib = function(n) {
    let dp = [0, 1]
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    
    return dp[n]
};

// 递归法 时间复杂度O(2^n) 空间复杂度O(n)
var fib = function(n) {
    if(n < 2) return n;

    return fib(n - 1) + fib(n - 2);
};