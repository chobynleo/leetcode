/**
 * @param {number} n
 * @return {number}
 */
// 时间复杂度：O(n) 空间复杂度：O(n)
var climbStairs = function(n) {
    if(n < 3) return n;

    var dp = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};

// 时间复杂度：O(n) 空间复杂度：O(1)
var climbStairs = function(n) {
    if(n < 3) return n;

    var dp = [1, 2];
    for (let i = 3; i <= n; i++) {
        var sum = dp[0] + dp[1];
        dp[0] = dp[1];
        dp[1] = sum;
    }

    return dp[1];
};