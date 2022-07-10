/**
 * @param {number[]} cost
 * @return {number}
 */
// 我的解法
// dp[i]含义：到达第i个阶梯所花费最小力气
var minCostClimbingStairs = function(cost) {
    var dp = [0, 0];

    for (let i = 2; i <= cost.length; i++) {
        dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1])
    }

    return dp[cost.length];
};

// 空间小 解法
var minCostClimbingStairs = function(cost) {
    var dp = [0, 0];

    for (let i = 2; i <= cost.length; i++) {
        var min = Math.min(dp[0] + cost[i - 2], dp[1] + cost[i - 1]);
        dp[0] = dp[1];
        dp[1] = min;
    }

    return dp[1];
};

